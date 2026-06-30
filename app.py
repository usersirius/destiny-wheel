from flask import Flask, request, jsonify, send_from_directory
import os
import json
import uuid
import numpy as np
from scipy import signal
import librosa
from librosa import phase_vocoder
from pydub import AudioSegment
import wave
from datetime import datetime

def save_wav_file(file_path, audio_data, sample_rate):
    audio_data = (audio_data * 32767).astype('int16')
    with wave.open(file_path, 'w') as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(sample_rate)
        wf.writeframes(audio_data.tobytes())

app = Flask(__name__)

# 语音识别模型（懒加载）
asr_pipeline = None
def get_asr_pipeline():
    global asr_pipeline
    if asr_pipeline is None:
        from modelscope.pipelines import pipeline
        from modelscope.utils.constant import Tasks
        from modelscope.models import Model
        from modelscope.hub.snapshot_download import snapshot_download
        model_dir = snapshot_download('iic/speech_paraformer-large-vad-punc_asr_nat-zh-cn-16k-common-vocab8404-pytorch')
        model = Model.from_pretrained(model_dir, disable_update=True, model_revision='v2.0.5')
        asr_pipeline = pipeline(Tasks.auto_speech_recognition, model=model, model_revision='v2.0.5')
    return asr_pipeline

# 自定义CORS中间件
@app.before_request
def handle_options():
    if request.method == 'OPTIONS':
        response = app.make_default_options_response()
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        return response

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response
app.config['UPLOAD_FOLDER'] = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'temp_uploads')
app.config['PROCESSED_FOLDER'] = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'processed_music')
app.config['MUSIC_LIBRARY'] = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'emotion_music')
BPM_CACHE_FILE = 'music_bpm_cache.json'

# 确保目录存在
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
os.makedirs(app.config['PROCESSED_FOLDER'], exist_ok=True)

# 预加载音乐库和BPM缓存
music_library = []

def preload_music_library():
    global music_library
    if os.path.exists(BPM_CACHE_FILE):
        with open(BPM_CACHE_FILE, 'r') as f:
            music_library = json.load(f)
        return
    
    music_library = []
    # 获取音乐库的绝对路径
    music_lib_abs = os.path.join(os.path.dirname(os.path.abspath(__file__)), app.config['MUSIC_LIBRARY'])
    
    for root, dirs, files in os.walk(music_lib_abs):
        for file in files:
            if file.endswith('.mp3') or file.endswith('.wav'):
                path = os.path.join(root, file)
                try:
                    y, sr = librosa.load(path, sr=None)
                    onset_env = librosa.onset.onset_strength(y=y, sr=sr, aggregate=np.median)
                    tempo, _ = librosa.beat.beat_track(
                        onset_envelope=onset_env,
                        sr=sr,
                        units='time',
                        start_bpm=40,
                        tightness=200,
                        trim=False,
                        hop_length=1024
                    )
                    
                    # 获取情绪类别（从路径中提取）
                    emotion_category = os.path.basename(os.path.dirname(path))
                    
                    music_library.append({
                        'path': path,
                        'name': os.path.splitext(file)[0],
                        'bpm': round(float(tempo), 1),
                        'emotion': emotion_category,
                        'mtime': os.path.getmtime(path)
                    })
                except Exception as e:
                    print(f"Error loading {file}: {str(e)}")
                    continue
    
    # BPM修正
    for track in music_library:
        if track['bpm'] > 160:
            track['bpm'] = round(track['bpm'] * 0.5, 1)
        elif track['bpm'] < 40:
            track['bpm'] = round(track['bpm'] * 2, 1)
    
    with open(BPM_CACHE_FILE, 'w') as f:
        json.dump(music_library, f)

# 分析人声BPM
def analyze_vocal(vocal_path):
    y, sr = librosa.load(vocal_path, sr=None)
    y_filtered = librosa.effects.preemphasis(y, coef=0.97)
    y_harmonic, y_percussive = librosa.effects.hpss(y_filtered)
    
    tempo, beat_frames = librosa.beat.beat_track(
        y=y_percussive,
        sr=sr,
        tightness=300,
        hop_length=512,
        units='time'
    )
    return {'tempo': round(tempo, 1), 'duration': len(y) / sr}

# 分析语音音色特征
def analyze_timbre(vocal_path):
    y, sr = librosa.load(vocal_path, sr=None)
    
    # 预加重处理（模拟人声特性）
    y_pre = librosa.effects.preemphasis(y, coef=0.97)
    
    # 1. 基频(pitch) - 使用PYIN算法
    f0, voiced_flag, voiced_probs = librosa.pyin(
        y_pre,
        fmin=librosa.note_to_hz('C2'),
        fmax=librosa.note_to_hz('C7'),
        sr=sr,
        frame_length=2048,
        win_length=1024
    )
    
    # 计算平均基频（只考虑有声音的帧）
    f0_values = f0[voiced_flag]
    avg_f0 = np.mean(f0_values) if len(f0_values) > 0 else 120
    
    # 基频标准差（反映音调变化）
    f0_std = np.std(f0_values) if len(f0_values) > 1 else 0
    
    # 2. 频谱质心（反映声音明亮度）
    spectral_centroid = librosa.feature.spectral_centroid(y=y_pre, sr=sr)
    avg_centroid = np.mean(spectral_centroid)
    
    # 3. 频谱带宽
    spectral_bandwidth = librosa.feature.spectral_bandwidth(y=y_pre, sr=sr)
    avg_bandwidth = np.mean(spectral_bandwidth)
    
    # 4. 频谱滚降点（反映高频成分）
    spectral_rolloff = librosa.feature.spectral_rolloff(y=y_pre, sr=sr, roll_percent=0.85)
    avg_rolloff = np.mean(spectral_rolloff)
    
    # 5. 频谱平坦度（噪音/谐波比例）
    spectral_flatness = librosa.feature.spectral_flatness(y=y_pre)
    avg_flatness = np.mean(spectral_flatness)
    
    # 6. RMS能量（声音强度）
    rms = librosa.feature.rms(y=y_pre)
    avg_rms = np.mean(rms)
    max_rms = np.max(rms)
    
    # 7. 色度特征（声音色彩）
    chroma = librosa.feature.chroma_stft(y=y_pre, sr=sr)
    chroma_mean = np.mean(chroma, axis=1)
    
    # 8. 谐波/噪声比（HNR）
    y_harmonic, y_percussive = librosa.effects.hpss(y_pre)
    harmonic_ratio = np.sum(y_harmonic ** 2) / (np.sum(y_harmonic ** 2) + np.sum(y_percussive ** 2) + 1e-10)
    
    # 分类音色类型
    timbre_type = classify_timbre(avg_f0, avg_centroid, avg_flatness, harmonic_ratio)
    
    # 归一化特征值（0-1范围）用于音乐调整
    features = {
        'pitch': avg_f0,
        'pitch_std': f0_std,
        'brightness': avg_centroid / sr,
        'bandwidth': avg_bandwidth / sr,
        'rolloff': avg_rolloff / sr,
        'flatness': avg_flatness,
        'rms': avg_rms,
        'max_rms': max_rms,
        'harmonic_ratio': harmonic_ratio,
        'timbre_type': timbre_type,
        'chroma': chroma_mean.tolist()
    }
    
    return features

# 根据音色特征分类音色类型
def classify_timbre(avg_f0, brightness, flatness, harmonic_ratio):
    # 音调高低分类
    pitch_category = 'mid'
    if avg_f0 > 200:
        pitch_category = 'high'
    elif avg_f0 < 100:
        pitch_category = 'low'
    
    # 明亮度分类
    brightness_category = 'normal'
    if brightness > 6000:
        brightness_category = 'bright'
    elif brightness < 3000:
        brightness_category = 'dark'
    
    # 声音质感分类
    texture_category = 'smooth'
    if flatness > 0.1:
        texture_category = 'rough'
    elif harmonic_ratio < 0.5:
        texture_category = 'nasal'
    
    # 组合音色描述
    descriptions = []
    if pitch_category == 'high':
        descriptions.append('清澈')
    elif pitch_category == 'low':
        descriptions.append('低沉')
    else:
        descriptions.append('温暖')
    
    if brightness_category == 'bright':
        descriptions.append('明亮')
    elif brightness_category == 'dark':
        descriptions.append('柔和')
    
    if texture_category == 'smooth':
        descriptions.append('圆润')
    elif texture_category == 'rough':
        descriptions.append('有力量')
    elif texture_category == 'nasal':
        descriptions.append('独特')
    
    return ''.join(descriptions)

# 根据情感和BPM匹配音乐
def find_music_by_emotion_and_bpm(emotion, target_bpm, n=5):
    """
    根据情绪和BPM推荐音乐
    1. 优先选择与情绪匹配的歌曲
    2. 在匹配情绪的歌曲中按BPM接近度排序
    3. 如果情绪分类的歌曲不够，返回其他情绪的歌曲
    """
    # 先按情感过滤
    filtered = [m for m in music_library if m['emotion'] == emotion]
    
    # 按BPM接近度排序
    if filtered:
        sorted_music = sorted(filtered, key=lambda x: abs(x['bpm'] - target_bpm))
    else:
        # 如果该情感类别没有音乐，按BPM接近度选择所有音乐
        sorted_music = sorted(music_library, key=lambda x: abs(x['bpm'] - target_bpm))
    
    return sorted_music[:n]

# 调整音乐BPM（支持音色特征调整）
def adjust_bpm(music_path, original_bpm, target_bpm, timbre_features=None):
    # 确保使用绝对路径
    if not os.path.isabs(music_path):
        music_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), music_path)
    
    # 加载音频
    y, sr = librosa.load(music_path, sr=None)
    
    # 计算拉伸率
    stretch_rate = target_bpm / original_bpm
    
    # 使用librosa默认时间拉伸
    y_adjusted = librosa.effects.time_stretch(y, rate=stretch_rate)
    
    # 根据音色特征调整音乐
    if timbre_features:
        y_adjusted = apply_timbre_effects(y_adjusted, sr, timbre_features)
    
    return y_adjusted, sr

# 根据音色特征应用音乐效果
def apply_timbre_effects(y, sr, timbre):
    # 1. 根据音调(pitch)调整音乐音调
    # 人声基频范围: 男85-180Hz, 女165-255Hz
    # 将人声基频映射到音乐音调偏移(-2到+2个半音)
    pitch = timbre.get('pitch', 120)
    if pitch > 180:
        n_steps = 1.0
    elif pitch > 150:
        n_steps = 0.5
    elif pitch < 100:
        n_steps = -1.0
    elif pitch < 120:
        n_steps = -0.5
    else:
        n_steps = 0
    
    if n_steps != 0:
        y = librosa.effects.pitch_shift(y, sr=sr, n_steps=n_steps)
    
    # 2. 根据明亮度调整滤波器
    brightness = timbre.get('brightness', 0.2)
    if brightness > 0.35:
        y = apply_high_pass_filter(y, sr, cutoff=3000)
        y = boost_high_frequencies(y, sr, amount=1.5)
    elif brightness < 0.15:
        y = apply_low_pass_filter(y, sr, cutoff=4000)
        y = boost_low_frequencies(y, sr, amount=1.3)
    
    # 3. 根据能量(RMS)调整音量
    rms = timbre.get('rms', 0.1)
    if rms > 0.3:
        y = y * 1.2
    elif rms < 0.05:
        y = y * 0.8
    
    # 4. 根据谐波比例调整音乐质感
    harmonic_ratio = timbre.get('harmonic_ratio', 0.7)
    if harmonic_ratio > 0.8:
        y = add_reverb(y, sr, amount=0.2)
    elif harmonic_ratio < 0.4:
        y = add_distortion(y, amount=0.1)
    
    # 5. 根据音色类型应用特殊效果
    timbre_type = timbre.get('timbre_type', '')
    if '清澈' in timbre_type:
        y = apply_high_pass_filter(y, sr, cutoff=500)
    if '低沉' in timbre_type:
        y = apply_low_pass_filter(y, sr, cutoff=2000)
    if '柔和' in timbre_type:
        y = apply_low_pass_filter(y, sr, cutoff=5000)
        y = smooth_audio(y)
    
    return y

# 高通滤波器
def apply_high_pass_filter(y, sr, cutoff):
    nyquist = sr / 2
    cutoff_norm = cutoff / nyquist
    b, a = signal.butter(4, cutoff_norm, btype='high', analog=False)
    return signal.filtfilt(b, a, y)

# 低通滤波器
def apply_low_pass_filter(y, sr, cutoff):
    nyquist = sr / 2
    cutoff_norm = cutoff / nyquist
    b, a = signal.butter(4, cutoff_norm, btype='low', analog=False)
    return signal.filtfilt(b, a, y)

# 提升高频
def boost_high_frequencies(y, sr, amount):
    nyquist = sr / 2
    b, a = signal.butter(2, 2000 / nyquist, btype='high', analog=False)
    filtered = signal.filtfilt(b, a, y)
    return y + filtered * (amount - 1)

# 提升低频
def boost_low_frequencies(y, sr, amount):
    nyquist = sr / 2
    b, a = signal.butter(2, 800 / nyquist, btype='low', analog=False)
    filtered = signal.filtfilt(b, a, y)
    return y + filtered * (amount - 1)

# 添加混响效果
def add_reverb(y, sr, amount):
    reverb_length = int(sr * 0.3)
    impulse = np.zeros(reverb_length)
    impulse[0] = 1
    for i in range(1, reverb_length):
        impulse[i] = impulse[i-1] * 0.96
    
    reverb_signal = np.convolve(y, impulse, mode='same')
    return y + reverb_signal * amount

# 添加轻微失真
def add_distortion(y, amount):
    max_val = np.max(np.abs(y))
    if max_val > 0:
        normalized = y / max_val
        distorted = np.tanh(normalized * (1 + amount * 5)) * max_val
        return distorted
    return y

# 平滑音频
def smooth_audio(y):
    window = np.hanning(101)
    window = window / np.sum(window)
    return np.convolve(y, window, mode='same')

# 情感分析（简化版本，使用关键词匹配）
def analyze_emotion(text):
    if not text:
        return 'calm'
    
    lower_text = text.lower()
    
    # 情绪关键词
    angry_keywords = ['愤怒', '生气', '恼火', '烦躁', '不爽', '讨厌', '恨', '烦', '郁闷', '火大', '抓狂', '崩溃', '压力', '焦虑', '恐惧', '害怕']
    calm_keywords = ['平静', '安静', '放松', '休闲', '轻松', '舒缓', '平和', '安宁', '安心', '稳定', '和谐', '舒适', '惬意', '悠闲']
    excited_keywords = ['兴奋', '激动', '开心', '快乐', '高兴', '欢快', '热烈', '热情', '活力', '热血', '沸腾', '澎湃', '激昂', '振奋']
    happy_keywords = ['幸福', '快乐', '开心', '高兴', '满足', '满意', '喜悦', '欢乐', '愉快', '美满', '如意', '顺利', '成功', '好运', '爱', '喜欢']
    sad_keywords = ['悲伤', '难过', '伤心', '痛苦', '失落', '沮丧', '绝望', '无助', '孤独', '寂寞', '空虚', '迷茫', '困惑', '彷徨', '痛', '苦', '泪']
    
    scores = {'angry': 0, 'calm': 0, 'excited': 0, 'happy': 0, 'sad': 0}
    
    for kw in angry_keywords:
        if kw in lower_text:
            scores['angry'] += 1
    for kw in calm_keywords:
        if kw in lower_text:
            scores['calm'] += 1
    for kw in excited_keywords:
        if kw in lower_text:
            scores['excited'] += 1
    for kw in happy_keywords:
        if kw in lower_text:
            scores['happy'] += 1
    for kw in sad_keywords:
        if kw in lower_text:
            scores['sad'] += 1
    
    max_score = max(scores.values())
    if max_score == 0:
        # 默认返回平静
        return 'calm'
    
    return max(scores, key=scores.get)

# API路由
@app.route('/api/analyze_audio', methods=['POST'])
def analyze_audio():
    if 'audio' not in request.files:
        return jsonify({'error': '未收到音频文件'}), 400
    
    audio_file = request.files['audio']
    unique_id = str(uuid.uuid4())[:8]
    vocal_path = os.path.join(app.config['UPLOAD_FOLDER'], f'user_vocal_{unique_id}.wav')
    audio_file.save(vocal_path)
    
    # 语音识别：将人声转为文字
    recognized_text = ''
    try:
        pipeline = get_asr_pipeline()
        rec_result = pipeline(vocal_path)
        if rec_result and len(rec_result) > 0:
            recognized_text = rec_result[0].get('text', '')
        print(f"语音识别结果: {recognized_text}")
    except Exception as e:
        print(f"语音识别失败: {str(e)}")
        recognized_text = ''
    
    # 分析人声BPM
    vocal_features = analyze_vocal(vocal_path)
    bpm = vocal_features['tempo']
    
    # 分析音色特征
    timbre_features = analyze_timbre(vocal_path)
    
    # 获取用户已输入的文本（如果语音识别失败则使用此文本）
    user_text = request.form.get('text', '')
    
    # 优先使用语音识别结果，如果没有则使用用户输入
    text = recognized_text if recognized_text else user_text
    
    # 分析情感（优先使用语音识别结果）
    emotion = analyze_emotion(text)
    
    # 匹配音乐
    recommended = find_music_by_emotion_and_bpm(emotion, bpm)
    
    # 准备响应数据
    result = {
        'success': True,
        'bpm': bpm,
        'emotion': emotion,
        'text': text,
        'timbre': timbre_features,
        'recommended_music': [
            {
                'name': m['name'],
                'path': m['path'],
                'bpm': m['bpm'],
                'emotion': m['emotion']
            } for m in recommended
        ]
    }
    
    # 清理临时文件
    os.remove(vocal_path)
    
    return jsonify(result)

@app.route('/api/adjust_music', methods=['POST'])
def adjust_music():
    try:
        music_path = request.json.get('music_path')
        target_bpm = request.json.get('target_bpm')
        timbre_features = request.json.get('timbre')
        
        if not music_path or not target_bpm:
            return jsonify({'error': '缺少参数'}), 400
        
        # 处理路径：如果是相对路径，转换为绝对路径
        actual_music_path = None
        if os.path.isabs(music_path) and os.path.exists(music_path):
            actual_music_path = music_path
        else:
            base_dir = os.path.dirname(os.path.abspath(__file__))
            filename = os.path.basename(music_path)
            
            # 先在音乐库中查找
            for entry in music_library:
                if os.path.basename(entry['path']) == filename:
                    if os.path.exists(entry['path']):
                        actual_music_path = entry['path']
                        break
                    # 尝试修复路径
                    elif '/命运之轮2.0/' in entry['path']:
                        # 尝试替换路径中的命运之轮2.0为实际目录
                        possible_path = entry['path'].replace('/命运之轮2.0/', '/11231155王九音/命运之轮2.0/')
                        if os.path.exists(possible_path):
                            actual_music_path = possible_path
                            break
            
            # 如果没找到，在emotion_music目录中搜索
            if not actual_music_path:
                emotion_music_dir = os.path.join(base_dir, 'emotion_music')
                for root, dirs, files in os.walk(emotion_music_dir):
                    if filename in files:
                        actual_music_path = os.path.join(root, filename)
                        break
        
        if not actual_music_path:
            return jsonify({'error': f'未找到音乐文件: {music_path}'}), 404
        
        music_path = actual_music_path
        
        # 查找原始BPM
        music_entry = next((m for m in music_library if os.path.basename(m['path']) == os.path.basename(music_path)), None)
        if not music_entry:
            # 如果找不到缓存项，重新分析BPM
            y, sr = librosa.load(music_path, sr=None)
            onset_env = librosa.onset.onset_strength(y=y, sr=sr, aggregate=np.median)
            tempo, _ = librosa.beat.beat_track(
                onset_envelope=onset_env,
                sr=sr,
                units='time',
                start_bpm=40,
                tightness=200,
                trim=False,
                hop_length=1024
            )
            original_bpm = round(tempo, 1)
        else:
            original_bpm = music_entry['bpm']
        
        # 调整BPM（支持音色特征）
        print(f"开始调整BPM: {music_path}, 从 {original_bpm} 到 {target_bpm}")
        print(f"音色特征: {timbre_features}")
        y_adjusted, sr = adjust_bpm(music_path, original_bpm, target_bpm, timbre_features)
        print(f"BPM调整完成，开始保存文件")
        
        # 保存调整后的文件
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        adjusted_filename = f"adjusted_{timestamp}.wav"
        adjusted_path = os.path.join(app.config['PROCESSED_FOLDER'], adjusted_filename)
        save_wav_file(adjusted_path, y_adjusted, sr)
        print(f"文件已保存: {adjusted_path}")
        
        return jsonify({
            'success': True,
            'adjusted_file': adjusted_filename,
            'adjusted_path': f'/api/music_file/{adjusted_filename}',
            'original_bpm': original_bpm,
            'target_bpm': target_bpm,
            'timbre_type': timbre_features.get('timbre_type', '') if timbre_features else ''
        })
    except Exception as e:
        import traceback
        print(f"调整BPM错误: {str(e)}")
        print(traceback.format_exc())
        return jsonify({'error': str(e)}), 500

@app.route('/api/get_emotion_music', methods=['POST'])
def get_emotion_music():
    try:
        emotion = request.json.get('emotion')
        target_bpm = request.json.get('target_bpm')
        timbre_features = request.json.get('timbre')
        
        if not emotion or not target_bpm:
            return jsonify({'error': '缺少参数'}), 400
        
        # 在音乐库中查找该情绪的音乐
        emotion_music_list = [m for m in music_library if m['emotion'] == emotion]
        
        if not emotion_music_list:
            return jsonify({'error': f'未找到{emotion}情绪的音乐'}), 404
        
        # 随机选择一首音乐
        import random
        selected_music = random.choice(emotion_music_list)
        
        music_path = selected_music['path']
        original_bpm = selected_music['bpm']
        
        # 检查文件是否存在
        if not os.path.exists(music_path):
            base_dir = os.path.dirname(os.path.abspath(__file__))
            possible_paths = [
                os.path.join(base_dir, music_path),
                os.path.join(base_dir, 'emotion_music', music_path.split('emotion_music/')[-1] if 'emotion_music/' in music_path else music_path)
            ]
            found_path = None
            for path in possible_paths:
                if os.path.exists(path):
                    found_path = path
                    break
            
            if not found_path:
                return jsonify({'error': f'未找到音乐文件: {music_path}'}), 404
            music_path = found_path
        
        # 调整BPM（支持音色特征）
        print(f"开始调整BPM: {music_path}, 从 {original_bpm} 到 {target_bpm}")
        print(f"音色特征: {timbre_features}")
        y_adjusted, sr = adjust_bpm(music_path, original_bpm, target_bpm, timbre_features)
        print(f"BPM调整完成，开始保存文件")
        
        # 保存调整后的文件
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        adjusted_filename = f"emotion_{emotion}_{timestamp}.wav"
        adjusted_path = os.path.join(app.config['PROCESSED_FOLDER'], adjusted_filename)
        save_wav_file(adjusted_path, y_adjusted, sr)
        print(f"文件已保存: {adjusted_path}")
        
        return jsonify({
            'success': True,
            'adjusted_file': adjusted_filename,
            'adjusted_path': f'/api/music_file/{adjusted_filename}',
            'original_bpm': original_bpm,
            'target_bpm': target_bpm,
            'music_name': selected_music['name'],
            'timbre_type': timbre_features.get('timbre_type', '') if timbre_features else ''
        })
    except Exception as e:
        import traceback
        print(f"获取情绪音乐错误: {str(e)}")
        print(traceback.format_exc())
        return jsonify({'error': str(e)}), 500

@app.route('/api/music_file/<filename>')
def serve_adjusted_music(filename):
    """提供调整后的音乐文件"""
    return send_from_directory(app.config['PROCESSED_FOLDER'], filename)

@app.route('/api/mix_audio', methods=['POST'])
def mix_audio():
    try:
        music_file = request.files.get('music')
        vocal_file = request.files.get('vocal')
        music_vol = float(request.form.get('music_vol', 0.5))
        vocal_vol = float(request.form.get('vocal_vol', 0.7))
        
        if not music_file or not vocal_file:
            return jsonify({'error': '缺少音频文件'}), 400
        
        # 保存临时文件
        music_temp = os.path.join(app.config['UPLOAD_FOLDER'], f'temp_music_{uuid.uuid4().hex[:8]}.wav')
        vocal_temp = os.path.join(app.config['UPLOAD_FOLDER'], f'temp_vocal_{uuid.uuid4().hex[:8]}.wav')
        music_file.save(music_temp)
        vocal_file.save(vocal_temp)
        
        # 加载音频
        music = AudioSegment.from_file(music_temp)
        vocal = AudioSegment.from_file(vocal_temp)
        
        # 调整音量
        music = music.apply_gain(20 * np.log10(music_vol))
        vocal = vocal.apply_gain(20 * np.log10(vocal_vol))
        
        # 混音
        mixed = music.overlay(vocal)
        mixed_filename = f"mixed_{uuid.uuid4().hex[:8]}.mp3"
        mixed_path = os.path.join(app.config['PROCESSED_FOLDER'], mixed_filename)
        mixed.export(mixed_path, format="mp3")
        
        # 清理临时文件
        os.remove(music_temp)
        os.remove(vocal_temp)
        
        return jsonify({
            'success': True,
            'mixed_file': mixed_filename
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/processed/<filename>')
def download_processed(filename):
    return send_from_directory(app.config['PROCESSED_FOLDER'], filename)

@app.route('/api/music_library')
def get_music_library():
    emotions = ['angry', 'calm', 'excited', 'happy', 'sad']
    result = {}
    for emotion in emotions:
        result[emotion] = [m for m in music_library if m['emotion'] == emotion]
    return jsonify(result)

@app.route('/api/emotion_analysis', methods=['POST'])
def emotion_analysis():
    text = request.json.get('text', '')
    emotion = analyze_emotion(text)
    return jsonify({'emotion': emotion})

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('.', filename)

if __name__ == '__main__':
    preload_music_library()
    app.run(host='0.0.0.0', port=5002, debug=True)
