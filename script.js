// 塔罗牌数据 - 22张大阿卡那牌
const tarotCards = [
    { id: 0, name: '愚者', number: '0', icon: '🌌', keywords: ['新开始', '冒险', '纯真'], meaning: '代表新的开始和无限可能，鼓励你勇敢地迈出第一步，保持开放的心态迎接未来的机遇。' },
    { id: 1, name: '魔术师', number: 'I', icon: '🃏', keywords: ['创造力', '技能', '意志'], meaning: '象征着你的能力和资源已经准备就绪，你拥有实现目标所需的一切，相信自己的力量。' },
    { id: 2, name: '女祭司', number: 'II', icon: '🧙', keywords: ['直觉', '智慧', '神秘'], meaning: '提醒你倾听内心的声音，信任你的直觉和内在智慧，答案就在你的潜意识之中。' },
    { id: 3, name: '皇后', number: 'III', icon: '👑', keywords: ['丰盛', '生育', '滋养'], meaning: '代表丰盛与繁荣，无论是物质上还是精神上，都预示着收获和满足的到来。' },
    { id: 4, name: '皇帝', number: 'IV', icon: '👨‍⚖️', keywords: ['权威', '稳定', '父性'], meaning: '象征着结构和秩序，提醒你建立稳固的基础，运用权威和智慧来掌控局面。' },
    { id: 5, name: '教皇', number: 'V', icon: '⛪', keywords: ['传统', '信仰', '教导'], meaning: '代表传统价值观和精神指引，鼓励你寻求智慧的指导，尊重传统但保持开放的心态。' },
    { id: 6, name: '恋人', number: 'VI', icon: '💕', keywords: ['爱情', '和谐', '选择'], meaning: '象征着爱与关系，可能预示着重要的情感选择或新的爱情机会即将到来。' },
    { id: 7, name: '战车', number: 'VII', icon: '🚗', keywords: ['胜利', '意志', '前进'], meaning: '代表决心和毅力，你有能力克服障碍，驾驭自己的命运，朝着目标勇往直前。' },
    { id: 8, name: '力量', number: 'VIII', icon: '💪', keywords: ['勇气', '内在力量', '耐心'], meaning: '象征内在的力量和勇气，真正的力量来自于内心的平静和坚定，而非外在的强制。' },
    { id: 9, name: '隐士', number: 'IX', icon: '🧔', keywords: ['内省', '孤独', '智慧'], meaning: '提醒你需要独处和内省，在寂静中寻找答案，自我反思将带来深刻的智慧。' },
    { id: 10, name: '命运之轮', number: 'X', icon: '🔄', keywords: ['变化', '命运', '循环'], meaning: '代表命运的转折和生命的循环，提醒你接受变化，相信宇宙的安排。' },
    { id: 11, name: '正义', number: 'XI', icon: '⚖️', keywords: ['公正', '真相', '因果'], meaning: '象征公正和真相，提醒你要公正行事，一切行为都有其后果，真相终将显现。' },
    { id: 12, name: '倒吊人', number: 'XII', icon: '🧗', keywords: ['牺牲', '等待', '新视角'], meaning: '代表暂时的放下和等待，从不同的角度看待问题，可能需要做出必要的牺牲。' },
    { id: 13, name: '死神', number: 'XIII', icon: '💀', keywords: ['结束', '转变', '重生'], meaning: '象征旧事物的结束和新事物的开始，这是一个必要的转变过程，而非终结。' },
    { id: 14, name: '节制', number: 'XIV', icon: '⚗️', keywords: ['平衡', '调和', '耐心'], meaning: '代表平衡与调和，提醒你在生活中保持适度，通过耐心和克制达到和谐。' },
    { id: 15, name: '恶魔', number: 'XV', icon: '👿', keywords: ['诱惑', '束缚', '阴影'], meaning: '提醒你注意那些束缚你的事物，面对自己的阴影面，才能获得真正的自由。' },
    { id: 16, name: '塔', number: 'XVI', icon: '🏰', keywords: ['突变', '觉醒', '破坏'], meaning: '象征突然的变化和旧结构的崩塌，这是痛苦但必要的觉醒过程，为新的成长创造空间。' },
    { id: 17, name: '星星', number: 'XVII', icon: '⭐', keywords: ['希望', '灵感', '宁静'], meaning: '代表希望和灵感，即使在黑暗中也有光明指引，保持信念，梦想终将实现。' },
    { id: 18, name: '月亮', number: 'XVIII', icon: '🌙', keywords: ['幻象', '直觉', '潜意识'], meaning: '提醒你注意隐藏的真相和潜意识的信息，不要被表面现象迷惑，信任你的直觉。' },
    { id: 19, name: '太阳', number: 'XIX', icon: '☀️', keywords: ['喜悦', '成功', '活力'], meaning: '象征幸福、成功和充满活力的时期，一切都会向好的方向发展，充满希望。' },
    { id: 20, name: '审判', number: 'XX', icon: '🔔', keywords: ['觉醒', '重生', '召唤'], meaning: '代表觉醒和重生，一个重要的召唤正在到来，听从内心的声音，做出正确的选择。' },
    { id: 21, name: '世界', number: 'XXI', icon: '🌍', keywords: ['完成', '整合', '圆满'], meaning: '象征一个周期的圆满完成，你已经实现了目标，准备好迎接新的旅程。' }
];

// 音乐推荐数据 - 基于占卜主题的大曲库
const musicRecommendations = {
    // 爱情类主题
    love: [
        { title: '暖暖', artist: '梁静茹', cover: '❤️', mood: '甜蜜' },
        { title: '小幸运', artist: '田馥甄', cover: '💕', mood: '心动' },
        { title: '往后余生', artist: '马良', cover: '💗', mood: '深情' },
        { title: '纸短情长', artist: '烟把儿乐队', cover: '✉️', mood: '柔情' },
        { title: '有点甜', artist: '汪苏泷', cover: '🍬', mood: '甜蜜' },
        { title: ' Love Story', artist: 'Taylor Swift', cover: '💘', mood: '浪漫' },
        { title: '告白气球', artist: '周杰伦', cover: '🎈', mood: '甜蜜' },
        { title: '简单爱', artist: '周杰伦', cover: '💓', mood: '纯粹' },
        { title: '今天你要嫁给我', artist: '陶喆', cover: '💒', mood: '喜庆' },
        { title: '最重要的决定', artist: '范玮琪', cover: '💍', mood: '坚定' },
        { title: '就是喜欢', artist: '林俊杰', cover: '💖', mood: '欢喜' },
        { title: '可爱多', artist: '徐佳莹', cover: '🍦', mood: '甜蜜' },
        { title: '靠近一点', artist: '蔡依林', cover: '🤝', mood: '期待' },
        { title: '非你莫属', artist: '林俊杰', cover: '👑', mood: '认定' },
        { title: '最重要的决定', artist: '范玮琪', cover: '💎', mood: '坚定' },
        { title: '就是喜欢', artist: '林俊杰', cover: '💖', mood: '欢喜' },
        { title: '特别的人', artist: '方大同', cover: '⭐', mood: '独特' },
        { title: '有点甜', artist: '汪苏泷', cover: '🍭', mood: '甜蜜' },
        { title: '有点甜', artist: '汪苏泷', cover: '🌟', mood: '甜蜜' },
        { title: '这就是爱吗', artist: '林俊杰', cover: '❓', mood: '确认' }
    ],
    // 事业/工作类主题
    career: [
        { title: '海阔天空', artist: 'Beyond', cover: '🌊', mood: '自由' },
        { title: '追梦赤子心', artist: 'GALA', cover: '🔥', mood: '热血' },
        { title: '倔强', artist: '五月天', cover: '✊', mood: '执着' },
        { title: '我的天空', artist: '南征北战', cover: '☀️', mood: '奋斗' },
        { title: '奔跑', artist: '羽泉', cover: '🏃', mood: '前进' },
        { title: '光辉岁月', artist: 'Beyond', cover: '🌟', mood: '励志' },
        { title: '从头再来', artist: '刘欢', cover: '💪', mood: '坚强' },
        { title: '怒放的生命', artist: '汪峰', cover: '💥', mood: '力量' },
        { title: '我相信', artist: '杨培安', cover: '🎤', mood: '自信' },
        { title: '红日', artist: '李克勤', cover: '🌅', mood: '希望' },
        { title: '不再犹豫', artist: 'Beyond', cover: '🤔', mood: '决断' },
        { title: '不再犹豫', artist: 'Beyond', cover: '💫', mood: '决断' },
        { title: '稻香', artist: '周杰伦', cover: '🌾', mood: '初心' },
        { title: '平凡之路', artist: '朴树', cover: '🛤️', mood: '沉淀' },
        { title: '夜空中最亮的星', artist: '逃跑计划', cover: '⭐', mood: '指引' },
        { title: '我的未来不是梦', artist: '张雨生', cover: '🌈', mood: '信念' },
        { title: '和自己赛跑', artist: '李宗盛', cover: '🏃', mood: '进取' },
        { title: '倔强', artist: '五月天', cover: '💎', mood: '坚定' },
        { title: '咸鱼', artist: '五月天', cover: '🐟', mood: '坚持' },
        { title: '将军令', artist: '五月天', cover: '⚔️', mood: '决心' }
    ],
    // 财运/财富类主题
    wealth: [
        { title: '恭喜发财', artist: '刘德华', cover: '🧧', mood: '喜庆' },
        { title: '好运来', artist: '祖海', cover: '🎊', mood: '吉祥' },
        { title: '好日子', artist: '宋祖英', cover: '🌟', mood: '美好' },
        { title: '财神到', artist: '徐小凤', cover: '💰', mood: '招财' },
        { title: '招财进宝', artist: '群星', cover: '🐱', mood: '进宝' },
        { title: '恭喜恭喜', artist: '卓依婷', cover: '🎉', mood: '庆祝' },
        { title: '向天再借五百年', artist: '韩红', cover: '👑', mood: '豪迈' },
        { title: '我要我们在一起', artist: '范晓萱', cover: '💵', mood: '财富' },
        { title: '有钱没钱回家过年', artist: '刘亮', cover: '🏠', mood: '团圆' },
        { title: '钞票', artist: '大张伟', cover: '💴', mood: '现实' },
        { title: '我不转弯', artist: '林宥嘉', cover: '🛣️', mood: '坚定' },
        { title: '咸鱼翻身', artist: '五月天', cover: '🐟', mood: '转运' },
        { title: '咸鱼翻身', artist: '五月天', cover: '✨', mood: '转运' },
        { title: '我的天空', artist: '南征北战', cover: '💫', mood: '广阔' },
        { title: '海阔天空', artist: 'Beyond', cover: '🌍', mood: '自由' },
        { title: '红日', artist: '李克勤', cover: '☀️', mood: '光明' },
        { title: '爱拼才会赢', artist: '叶启田', cover: '💪', mood: '拼搏' },
        { title: '爱拼才会赢', artist: '叶启田', cover: '🎯', mood: '拼搏' },
        { title: '水手', artist: '郑智化', cover: '🚢', mood: '坚强' },
        { title: '蜗牛', artist: '周杰伦', cover: '🐌', mood: '进取' }
    ],
    // 健康/身体类主题
    health: [
        { title: '稳稳的幸福', artist: '陈奕迅', cover: '🌸', mood: '安心' },
        { title: '岁月神偷', artist: '金玟岐', cover: '⏳', mood: '珍惜' },
        { title: '健康歌', artist: '范晓萱', cover: '💚', mood: '活力' },
        { title: '感觉自己萌萌哒', artist: '贾玲', cover: '🌟', mood: '开心' },
        { title: '卡路里', artist: '火箭少女101', cover: '🔥', mood: '燃烧' },
        { title: '最好的舞台', artist: '黄博翔', cover: '🎪', mood: '活力' },
        { title: '我相信', artist: '杨培安', cover: '💪', mood: '力量' },
        { title: '奔跑', artist: '羽泉', cover: '🏃', mood: '运动' },
        { title: '我的天空', artist: '南征北战', cover: '☀️', mood: '阳光' },
        { title: '海阔天空', artist: 'Beyond', cover: '🌊', mood: '开阔' },
        { title: '平凡之路', artist: '朴树', cover: '🌿', mood: '平和' },
        { title: '去大理', artist: '郝云', cover: '🏔️', mood: '放松' },
        { title: '南山南', artist: '马頔', cover: '⛰️', mood: '悠远' },
        { title: '成都', artist: '赵雷', cover: '🌆', mood: '悠闲' },
        { title: '彩虹', artist: '周杰伦', cover: '🌈', mood: '美好' },
        { title: '稻香', artist: '周杰伦', cover: '🌾', mood: '治愈' },
        { title: '夜空中最亮的星', artist: '逃跑计划', cover: '⭐', mood: '希望' },
        { title: '斑马斑马', artist: '宋冬野', cover: '🦓', mood: '淡然' },
        { title: '董小姐', artist: '宋冬野', cover: '💨', mood: '自由' },
        { title: '温暖', artist: '梁静茹', cover: '☀️', mood: '治愈' }
    ],
    // 自我成长/心灵类主题
    growth: [
        { title: '夜空中最亮的星', artist: '逃跑计划', cover: '⭐', mood: '指引' },
        { title: '平凡之路', artist: '朴树', cover: '🌿', mood: '沉淀' },
        { title: '去大理', artist: '郝云', cover: '🏔️', mood: '释然' },
        { title: '斑马斑马', artist: '宋冬野', cover: '🦓', mood: '流浪' },
        { title: '南山南', artist: '马頔', cover: '⛰️', mood: '远方' },
        { title: '成都', artist: '赵雷', cover: '🌆', mood: '情怀' },
        { title: '董小姐', artist: '宋冬野', cover: '💨', mood: '自由' },
        { title: '彩虹', artist: '周杰伦', cover: '🌈', mood: '希望' },
        { title: '稻香', artist: '周杰伦', cover: '🌾', mood: '初心' },
        { title: '蜗牛', artist: '周杰伦', cover: '🐌', mood: '坚持' },
        { title: '老男孩', artist: '筷子兄弟', cover: '👴', mood: '追忆' },
        { title: '父亲', artist: '筷子兄弟', cover: '👨', mood: '感恩' },
        { title: '母亲', artist: '汪峰', cover: '👩', mood: '感激' },
        { title: '时间都去哪儿了', artist: '王铮亮', cover: '⏰', mood: '珍惜' },
        { title: '岁月神偷', artist: '金玟岐', cover: '🎭', mood: '感悟' },
        { title: '追光者', artist: '岑宁儿', cover: '💫', mood: '追随' },
        { title: '起风了', artist: '买辣椒', cover: '🌬️', mood: '前行' },
        { title: '像我这样的人', artist: '毛不易', cover: '🤔', mood: '自省' },
        { title: '消愁', artist: '毛不易', cover: '🍺', mood: '释怀' },
        { title: '一荤一素', artist: '毛不易', cover: '🍲', mood: '温情' }
    ],
    // 迷茫/选择类主题
    confused: [
        { title: '南山南', artist: '马頔', cover: '⛰️', mood: '漂泊' },
        { title: '斑马斑马', artist: '宋冬野', cover: '🦓', mood: '流浪' },
        { title: '董小姐', artist: '宋冬野', cover: '💨', mood: '自由' },
        { title: '平凡之路', artist: '朴树', cover: '🌿', mood: '沉淀' },
        { title: '夜空中最亮的星', artist: '逃跑计划', cover: '⭐', mood: '指引' },
        { title: '像我这样的人', artist: '毛不易', cover: '🤔', mood: '自问' },
        { title: '消愁', artist: '毛不易', cover: '🍺', mood: '麻醉' },
        { title: '成都', artist: '赵雷', cover: '🌆', mood: '漂泊' },
        { title: '去大理', artist: '郝云', cover: '🏔️', mood: '逃避' },
        { title: '理想', artist: '赵雷', cover: '🏠', mood: '追寻' },
        { title: '三十岁的女人', artist: '赵雷', cover: '👩', mood: '感慨' },
        { title: '未给递递的情书', artist: '林宥嘉', cover: '💌', mood: '遗憾' },
        { title: '浪费', artist: '林宥嘉', cover: '⏰', mood: '执着' },
        { title: '说散就散', artist: '袁娅维', cover: '😢', mood: '释然' },
        { title: '体面', artist: '于文文', cover: '💔', mood: '放手' },
        { title: '后来', artist: '刘若英', cover: '⏳', mood: '追忆' },
        { title: '匆匆那年', artist: '王菲', cover: '📷', mood: '怀念' },
        { title: '可惜不是你', artist: '梁静茹', cover: '🌧️', mood: '遗憾' },
        { title: '修炼爱情', artist: '林俊杰', cover: '💭', mood: '心酸' },
        { title: '爱情转移', artist: '陈奕迅', cover: '🔀', mood: '漂泊' }
    ],
    // 告别/结束类主题
    farewell: [
        { title: '后来', artist: '刘若英', cover: '⏳', mood: '追忆' },
        { title: '匆匆那年', artist: '王菲', cover: '📷', mood: '怀念' },
        { title: '可惜不是你', artist: '梁静茹', cover: '🌧️', mood: '遗憾' },
        { title: '说散就散', artist: '袁娅维', cover: '😢', mood: '放下' },
        { title: '体面', artist: '于文文', cover: '💔', mood: '释怀' },
        { title: '演员', artist: '薛之谦', cover: '🎭', mood: '伪装' },
        { title: '修炼爱情', artist: '林俊杰', cover: '💭', mood: '心酸' },
        { title: '浪费', artist: '林宥嘉', cover: '⏰', mood: '执着' },
        { title: '爱情转移', artist: '陈奕迅', cover: '🔀', mood: '漂泊' },
        { title: '洋葱', artist: '杨宗纬', cover: '🧅', mood: '心酸' },
        { title: '独家记忆', artist: '陈小春', cover: '🧠', mood: '珍藏' },
        { title: '圣诞结', artist: '陈奕迅', cover: '🎄', mood: '孤独' },
        { title: '好久不见', artist: '陈奕迅', cover: '👋', mood: '思念' },
        { title: '不要说话', artist: '陈奕迅', cover: '🤫', mood: '沉默' },
        { title: '十年', artist: '陈奕迅', cover: '🔟', mood: '感慨' },
        { title: '富士山下', artist: '陈奕迅', cover: '🗻', mood: '释然' },
        { title: '明年今日', artist: '陈奕迅', cover: '📅', mood: '轮回' },
        { title: '岁月神偷', artist: '金玟岐', cover: '⏳', mood: '珍惜' },
        { title: '时间都去哪儿了', artist: '王铮亮', cover: '⏰', mood: '珍惜' },
        { title: '当爱已成往事', artist: '张国荣', cover: '🎬', mood: '释怀' }
    ],
    // 喜悦/庆祝类主题
    celebration: [
        { title: '小苹果', artist: '筷子兄弟', cover: '🍎', mood: '欢快' },
        { title: '最炫民族风', artist: '凤凰传奇', cover: '🎉', mood: '热闹' },
        { title: '好运来', artist: '祖海', cover: '🎊', mood: '吉祥' },
        { title: '恭喜发财', artist: '刘德华', cover: '🧧', mood: '喜庆' },
        { title: '好日子', artist: '宋祖英', cover: '🌟', mood: '美好' },
        { title: '今天', artist: '林宥嘉', cover: '☀️', mood: '新生' },
        { title: '海草海草', artist: '萧全', cover: '🌊', mood: '欢乐' },
        { title: 'Good Time', artist: 'Owl City', cover: '🌟', mood: '欢快' },
        { title: ' Young', artist: '蔡国庆', cover: '🎊', mood: '青春' },
        { title: '我相信', artist: '杨培安', cover: '🎤', mood: '自信' },
        { title: '红日', artist: '李克勤', cover: '🌅', mood: '激情' },
        { title: '奔跑', artist: '羽泉', cover: '🏃', mood: '动感' },
        { title: '我的天空', artist: '南征北战', cover: '☀️', mood: '热血' },
        { title: '晴天', artist: '周杰伦', cover: '☀️', mood: '明媚' },
        { title: '七里香', artist: '周杰伦', cover: '🌸', mood: '清新' },
        { title: '暖暖', artist: '梁静茹', cover: '💛', mood: '温馨' },
        { title: '小幸运', artist: '田馥甄', cover: '🍀', mood: '幸运' },
        { title: '知足', artist: '五月天', cover: '✨', mood: '满足' },
        { title: '倔强', artist: '五月天', cover: '💎', mood: '坚定' },
        { title: '人生无限公司', artist: '五月天', cover: '🏢', mood: '精彩' }
    ],
    // 勇气/冒险类主题
    courage: [
        { title: '海阔天空', artist: 'Beyond', cover: '🌊', mood: '自由' },
        { title: '追梦赤子心', artist: 'GALA', cover: '🔥', mood: '热血' },
        { title: '倔强', artist: '五月天', cover: '✊', mood: '坚持' },
        { title: '悟空', artist: '戴荃', cover: '🐒', mood: '突破' },
        { title: '刀剑如梦', artist: '周华健', cover: '⚔️', mood: '豪情' },
        { title: '向天再借五百年', artist: '韩红', cover: '👑', mood: '豪迈' },
        { title: '怒放的生命', artist: '汪峰', cover: '💥', mood: '绽放' },
        { title: '光辉岁月', artist: 'Beyond', cover: '🌟', mood: '抗争' },
        { title: '不再犹豫', artist: 'Beyond', cover: '🤔', mood: '决断' },
        { title: 'amani', artist: 'Beyond', cover: '🌍', mood: '和平' },
        { title: '我的未来不是梦', artist: '张雨生', cover: '🌈', mood: '信念' },
        { title: '水手', artist: '郑智化', cover: '🚢', mood: '坚强' },
        { title: '星星点灯', artist: '郑智化', cover: '⭐', mood: '指引' },
        { title: '爱拼才会赢', artist: '叶启田', cover: '💪', mood: '拼搏' },
        { title: '红日', artist: '李克勤', cover: '🌅', mood: '希望' },
        { title: '将军令', artist: '五月天', cover: '⚔️', mood: '决心' },
        { title: '离开地球表面', artist: '五月天', cover: '🌍', mood: '释放' },
        { title: '诺亚方舟', artist: '五月天', cover: '🚢', mood: '拯救' },
        { title: '派对动物', artist: '五月天', cover: '🦁', mood: '狂野' },
        { title: '倔强', artist: '五月天', cover: '💎', mood: '坚定' }
    ]
};

// 皇上翻牌子用膳 - 食物数据
const foodOptions = [
    { name: '宫保鸡丁', emoji: '🍗', category: '川菜' },
    { name: '糖醋排骨', emoji: '🍖', category: '粤菜' },
    { name: '红烧肉', emoji: '🥩', category: '江浙菜' },
    { name: '鱼香肉丝', emoji: '🐟', category: '川菜' },
    { name: '北京烤鸭', emoji: '🦆', category: '京菜' },
    { name: '麻婆豆腐', emoji: '🧈', category: '川菜' },
    { name: '水煮鱼', emoji: '🐠', category: '川菜' },
    { name: '小笼包', emoji: '🥟', category: '江浙菜' },
    { name: '火锅', emoji: '🍲', category: '川菜' },
    { name: '寿司', emoji: '🍣', category: '日料' },
    { name: '披萨', emoji: '🍕', category: '西餐' },
    { name: '汉堡', emoji: '🍔', category: '快餐' },
    { name: '炸鸡', emoji: '🍟', category: '快餐' },
    { name: '牛排', emoji: '🥩', category: '西餐' },
    { name: '麻辣烫', emoji: '🌶️', category: '小吃' },
    { name: '烧烤', emoji: '🍢', category: '小吃' },
    { name: '螺蛳粉', emoji: '🍜', category: '小吃' },
    { name: '拉面', emoji: '🍝', category: '面食' },
    { name: '炒饭', emoji: '🍚', category: '主食' },
    { name: '饺子', emoji: '🥟', category: '主食' }
];

// 欢快的音乐推荐（用于彩蛋）
const happyMusic = [
    { title: '好运来', artist: '祖海', mood: '喜庆' },
    { title: '恭喜发财', artist: '刘德华', mood: '欢快' },
    { title: '欢乐颂', artist: '贝多芬', mood: '愉悦' },
    { title: '好日子', artist: '宋祖英', mood: '喜庆' },
    { title: '阳光彩虹小白马', artist: '大张伟', mood: '开心' }
];

// 检测是否是食物相关问题
function isFoodQuestion(question) {
    if (!question) return false;
    const keywords = ['吃', '饭', '餐', '美食', '夜宵', '午餐', '晚餐', '早饭', '早餐', '什么好吃', '吃什么', '去哪吃', '吃啥'];
    return keywords.some(keyword => question.includes(keyword));
}

// 检测是否是爱情相关问题
function isLoveQuestion(question) {
    if (!question) return false;
    const keywords = ['爱情', '恋爱', '喜欢', '暗恋', '表白', '前任', '复合', '结婚', '结婚', '男朋友', '女朋友', '对象', '伴侣', '喜欢谁', '爱谁', '桃花运', '姻缘', '感情', '爱', '情', '喜欢我吗', '会在一起吗', '复合吗'];
    return keywords.some(keyword => question.includes(keyword));
}

// 背景音乐URL配置
const bgMusicUrls = {
    default: '月夜花海.mp3',
    food: '瓷盘与春风.mp3',
    love: '半熟月光.mp3'
};

// 切换背景音乐
function switchBackgroundMusic(type) {
    const bgMusic = document.getElementById('bgMusic');
    if (!bgMusic) return;
    
    const url = bgMusicUrls[type] || bgMusicUrls.default;
    if (bgMusic.src.includes(url)) return; // 已经是目标音乐，不需要切换
    
    const wasPlaying = !bgMusic.paused;
    bgMusic.src = url;
    
    if (wasPlaying) {
        bgMusic.play().catch(err => console.log('音乐切换播放失败:', err));
    }
}

// 牌阵类型
const spreads = {
    'three-card': {
        name: '三牌占卜',
        positions: ['过去', '现在', '未来']
    },
    'celtic-cross': {
        name: '凯尔特十字',
        positions: ['问题核心', '阻碍', '潜意识', '过去', '近期未来', '长远未来', '态度', '环境', '希望/恐惧', '最终结果']
    }
};

// 当前牌阵类型
let currentSpread = 'three-card';

// DOM元素
const spreadBtns = document.querySelectorAll('.spread-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const restartBtn = document.getElementById('restart-btn');
const cardsSection = document.getElementById('cards-section');
const spreadContainer = document.getElementById('spread-container');
const cardMeanings = document.getElementById('card-meanings');
const summarySection = document.getElementById('summary-section');
const summaryContent = document.getElementById('summary-content');
const musicSection = document.getElementById('music-section');
const musicPlayer = document.getElementById('music-player');
const actionSection = document.querySelector('.action-section');

// 语音录制相关变量
const voiceBtn = document.getElementById('voice-btn');
const voiceStatus = document.getElementById('voice-status');
const questionInput = document.getElementById('question');
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;
let recognition = null;
let isListening = false;
let speechRecognitionAvailable = false; // 标记语音识别是否可用

// 后端API地址
const API_BASE = 'http://localhost:5002/api';

// 语音分析结果（用于占卜结束后显示调整BPM的音乐）
let voiceAnalysisResult = null;

// 预加载的音乐库缓存
let musicLibraryCache = null;

// 预加载音乐库
async function preloadMusicLibrary() {
    try {
        const response = await fetch(`${API_BASE}/music_library`);
        if (response.ok) {
            musicLibraryCache = await response.json();
            console.log('音乐库预加载成功');
        }
    } catch (error) {
        console.error('预加载音乐库失败:', error);
    }
}

let recognitionRetryCount = 0;
const MAX_RETRY_COUNT = 3;
const RETRY_DELAY_BASE = 1000;
let isRecognizing = false;
let lastRecognitionStart = 0;

// 初始化语音识别
function initSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        try {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognition = new SpeechRecognition();
            recognition.lang = 'zh-CN';
            recognition.continuous = false;
            recognition.interimResults = false;
            
            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                questionInput.value = transcript;
                voiceStatus.textContent = `✅ 文字已识别，正在分析音色和BPM...`;
                recognitionRetryCount = 0;
                
                isRecognizing = false;
                voiceBtn.classList.remove('listening');
            };
            
            recognition.onerror = (event) => {
                console.error('语音识别错误:', event.error);
                isRecognizing = false;
                voiceBtn.classList.remove('listening');
                
                if (event.error === 'network') {
                    recognitionRetryCount++;
                    if (recognitionRetryCount <= MAX_RETRY_COUNT) {
                        const delay = RETRY_DELAY_BASE * Math.pow(2, recognitionRetryCount - 1);
                        voiceStatus.textContent = `⚠️ 网络连接问题，正在重试 (${recognitionRetryCount}/${MAX_RETRY_COUNT})...`;
                        setTimeout(() => {
                            if (!isRecognizing && voiceStatus.textContent.includes('正在重试')) {
                                startSpeechRecognition();
                            }
                        }, delay);
                    } else {
                        recognitionRetryCount = 0;
                        voiceStatus.textContent = '⚠️ 网络连接问题，无法使用语音识别，请直接输入文字';
                    }
                } else if (event.error === 'not-allowed') {
                    recognitionRetryCount = 0;
                    voiceStatus.textContent = '⚠️ 麦克风权限未授权，请在浏览器设置中允许麦克风访问';
                } else if (event.error === 'no-speech') {
                    recognitionRetryCount = 0;
                    voiceStatus.textContent = '⚠️ 未检测到语音，请重新尝试';
                } else if (event.error === 'aborted') {
                    recognitionRetryCount = 0;
                } else {
                    recognitionRetryCount = 0;
                    voiceStatus.textContent = `⚠️ 语音识别失败 (${event.error})，请重试或直接输入文字`;
                }
            };
            
            recognition.onend = () => {
                isRecognizing = false;
                voiceBtn.classList.remove('listening');
                
                // 语音识别结束时停止媒体录制
                if (isRecording) {
                    stopRecording();
                }
                
                if (voiceStatus.textContent === '🎤 正在听...请说话') {
                    voiceStatus.textContent = '💬 未检测到语音，请重试或直接输入文字';
                }
            };
            
            speechRecognitionAvailable = true;
            console.log('语音识别初始化成功');
            
        } catch (error) {
            console.error('语音识别初始化失败:', error);
            speechRecognitionAvailable = false;
            voiceStatus.textContent = '💬 语音识别不可用，请直接输入文字';
        }
    } else {
        console.warn('浏览器不支持Web Speech API');
        speechRecognitionAvailable = false;
        voiceStatus.textContent = '💬 浏览器不支持语音识别，请直接输入文字';
    }
}

const MIN_START_INTERVAL = 800;

// 开始语音识别
function startSpeechRecognition() {
    const now = Date.now();
    if (recognition && !isRecognizing && (now - lastRecognitionStart) > MIN_START_INTERVAL) {
        try {
            recognition.start();
            isRecognizing = true;
            isListening = true;
            lastRecognitionStart = now;
            voiceBtn.classList.add('listening');
            voiceBtn.classList.remove('recording');
            voiceStatus.textContent = '🎤 正在听...请说话';
        } catch (error) {
            console.error('语音识别启动失败:', error);
            isRecognizing = false;
            isListening = false;
            voiceBtn.classList.remove('listening');
            
            if (error.name === 'NotAllowedError') {
                voiceStatus.textContent = '⚠️ 麦克风权限未授权，请在浏览器设置中允许';
            } else if (error.name === 'NotReadableError') {
                voiceStatus.textContent = '⚠️ 麦克风被其他应用占用';
            } else {
                voiceStatus.textContent = '⚠️ 语音识别启动失败，请直接输入';
            }
        }
    }
}

// 停止语音识别
function stopSpeechRecognition() {
    if (recognition && isRecognizing) {
        recognition.stop();
        isRecognizing = false;
        isListening = false;
        voiceBtn.classList.remove('listening');
    }
}

// 语音录制功能
async function startRecording() {
    questionInput.value = '';
    voiceStatus.textContent = '点击麦克风开始语音输入';
    voiceStatus.classList.remove('analyzing');
    voiceAnalysisResult = null;
    
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        if (speechRecognitionAvailable) {
            startSpeechRecognitionWithRecording(stream);
        } else {
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];
            
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunks.push(event.data);
                }
            };
            
            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                await analyzeAudio(audioBlob);
            };
            
            mediaRecorder.start();
            isRecording = true;
            voiceBtn.classList.add('recording');
            voiceStatus.textContent = '录音中...点击停止';
            
            setTimeout(() => {
                if (isRecording) {
                    stopRecording();
                }
            }, 10000);
        }
        
    } catch (error) {
        console.error('录音启动失败:', error);
        voiceStatus.textContent = '⚠️ 麦克风权限被拒绝，请检查浏览器设置';
    }
}

// 使用Web Speech API同时录制音频（用于BPM和音色分析）
async function startSpeechRecognitionWithRecording(stream) {
    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];
    
    mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
            audioChunks.push(event.data);
        }
    };
    
    mediaRecorder.onstop = async () => {
        if (audioChunks.length > 0) {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            await analyzeAudio(audioBlob);
        }
        stream.getTracks().forEach(track => track.stop());
    };
    
    mediaRecorder.start();
    isRecording = true;
    voiceBtn.classList.add('recording');
    voiceBtn.classList.add('listening');
    voiceStatus.textContent = '🎤 正在听...请说话';
    
    startSpeechRecognition();
    
    setTimeout(() => {
        if (isRecording) {
            stopRecording();
        }
    }, 10000);
}

function stopRecording() {
    if (mediaRecorder && isRecording) {
        try {
            mediaRecorder.stop();
        } catch (e) {
            console.error('停止录制失败:', e);
        }
        isRecording = false;
        voiceBtn.classList.remove('recording');
    }
    
    if (recognition && isRecognizing) {
        try {
            recognition.stop();
        } catch (e) {
            console.error('停止语音识别失败:', e);
        }
        isRecognizing = false;
        voiceBtn.classList.remove('listening');
    }
    
    voiceStatus.textContent = '分析中...';
}

async function analyzeAudio(audioBlob) {
    try {
        const formData = new FormData();
        formData.append('audio', audioBlob, 'recording.wav');
        formData.append('text', questionInput.value);
        
        const response = await fetch(`${API_BASE}/analyze_audio`, {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            if (result.text && result.text.trim()) {
                questionInput.value = result.text;
            }
            
            voiceAnalysisResult = result;
            
            voiceStatus.textContent = '✅ 语音已识别';
            voiceStatus.classList.add('success');
        } else {
            voiceStatus.textContent = '❌ 分析失败';
        }
    } catch (error) {
        console.error('音频分析失败:', error);
        
        if (speechRecognitionAvailable && questionInput.value.trim()) {
            voiceStatus.textContent = '⚠️ 音色分析失败，已使用浏览器语音识别结果';
            voiceAnalysisResult = {
                success: true,
                text: questionInput.value,
                emotion: analyzeEmotionFromQuestion(questionInput.value),
                bpm: getRecommendedBPMByEmotion(analyzeEmotionFromQuestion(questionInput.value)).default
            };
        } else if (speechRecognitionAvailable) {
            voiceStatus.textContent = '⚠️ 服务器不可用，尝试使用浏览器语音识别...';
            startSpeechRecognition();
        } else {
            voiceStatus.textContent = '⚠️ 语音分析不可用，请直接输入文字';
        }
    }
}

function getEmotionLabel(emotion) {
    const labels = {
        angry: '愤怒',
        calm: '平静',
        excited: '兴奋',
        happy: '快乐',
        sad: '悲伤'
    };
    return labels[emotion] || emotion;
}

function displayVoiceBasedMusic(result) {
    musicPlayer.innerHTML = '';
    
    result.recommended_music.forEach((music, index) => {
        const musicCard = document.createElement('div');
        musicCard.className = 'music-card fade-in';
        musicCard.style.animationDelay = `${index * 0.2}s`;
        
        const emotionEmoji = getEmotionEmoji(music.emotion);
        
        musicCard.innerHTML = `
            <div class="music-cover">${emotionEmoji}</div>
            <h4>${music.name}</h4>
            <p>情感: ${getEmotionLabel(music.emotion)} · 原BPM: ${music.bpm} → 目标BPM: ${result.bpm}</p>
            <div class="music-controls">
                <button class="adjust-bpm-btn" onclick="adjustAndPlayMusic('${music.path}', ${result.bpm}, this)">
                    🎚️ 调整BPM并播放
                </button>
            </div>
            <div class="music-links">
                <a href="${getQQMusicLink(music.name)}" target="_blank" class="music-link qq-link">
                    <span class="link-icon">🎵</span> QQ音乐
                </a>
                <a href="${getNetMusicLink(music.name)}" target="_blank" class="music-link net-link">
                    <span class="link-icon">🎧</span> 网易云音乐
                </a>
            </div>
            <audio class="hidden-audio" id="adjusted-audio-${index}"></audio>
        `;
        
        musicPlayer.appendChild(musicCard);
    });
    
    musicSection.classList.add('show');
}

// 调整音乐BPM并播放
async function adjustAndPlayMusic(musicPath, targetBpm, button) {
    // 获取自动播放权限（解决浏览器自动播放策略）
    try {
        const tempAudio = new Audio();
        tempAudio.play().catch(() => {});
    } catch (e) {}
    
    // 获取背景音乐元素
    const bgMusic = document.getElementById('bgMusic');
    
    // 停止当前播放的音乐
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    // 显示加载状态
    button.innerHTML = '⏳ 调整中...';
    button.disabled = true;
    
    // 30秒超时
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    
    try {
        const timbre = voiceAnalysisResult && voiceAnalysisResult.timbre ? voiceAnalysisResult.timbre : null;
        
        const response = await fetch(`${API_BASE}/adjust_music`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                music_path: musicPath,
                target_bpm: targetBpm,
                timbre: timbre
            }),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`服务器错误: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success && result.adjusted_path) {
            // 创建音频元素并播放
            const audioUrl = `http://localhost:5002${result.adjusted_path}`;
            const audio = new Audio(audioUrl);
            currentAudio = audio;
            
            // 保存到 generatedMusicList 用于笔记本播放
            const musicCardEl = button.closest('.music-card');
            const songName = musicCardEl ? musicCardEl.querySelector('h4')?.textContent : '';
            
            const timbreType = result.timbre_type || (voiceAnalysisResult && voiceAnalysisResult.timbre ? voiceAnalysisResult.timbre.timbre_type : '');
            
            generatedMusicList.push({
                title: songName || '定制音乐',
                artist: '根据你的情绪定制',
                audioUrl: audioUrl,
                bpm: targetBpm,
                timbreType: timbreType
            });
            
            audio.onloadedmetadata = () => {
                audio.play().then(() => {
                    button.innerHTML = '⏸️ 暂停';
                    button.disabled = false;
                    
                    // 音乐开始播放时暂停背景音乐
                    if (bgMusic && !bgMusic.paused) {
                        bgMusic.pause();
                        window.bgMusicWasPlaying = true;
                    }
                }).catch(err => {
                    console.error('音频播放失败:', err);
                    button.innerHTML = '❌ 播放失败';
                    button.disabled = false;
                });
                
                // 点击按钮切换暂停/播放
                button.onclick = () => {
                    if (audio.paused) {
                        audio.play().then(() => {
                            button.innerHTML = '⏸️ 暂停';
                            // 继续播放时暂停背景音乐
                            if (bgMusic && !bgMusic.paused) {
                                bgMusic.pause();
                                window.bgMusicWasPlaying = true;
                            }
                        }).catch(err => console.error('继续播放失败:', err));
                    } else {
                        audio.pause();
                    }
                };
                
                audio.onended = () => {
                    button.innerHTML = '🎚️ 调整BPM并播放';
                    button.onclick = null;
                    // 播放结束，恢复背景音乐
                    if (bgMusic && window.bgMusicWasPlaying) {
                        bgMusic.play().catch(err => console.log('背景音乐恢复失败:', err));
                        window.bgMusicWasPlaying = false;
                    }
                };
                
                audio.onpause = () => {
                    button.innerHTML = '▶️ 继续播放';
                    // 用户暂停，恢复背景音乐
                    if (bgMusic && window.bgMusicWasPlaying) {
                        bgMusic.play().catch(err => console.log('背景音乐恢复失败:', err));
                        window.bgMusicWasPlaying = false;
                    }
                };
            };
            
            audio.onerror = (e) => {
                console.error('音频加载失败:', e);
                button.innerHTML = '❌ 加载失败';
                button.disabled = false;
            };
        } else {
            throw new Error(result.error || '调整失败');
        }
    } catch (error) {
        clearTimeout(timeoutId);
        console.error('调整BPM失败:', error);
        if (error.name === 'AbortError') {
            button.innerHTML = '⏱️ 处理超时';
        } else {
            button.innerHTML = '❌ ' + (error.message || '调整失败');
        }
        button.disabled = false;
    }
}

// 根据情绪获取音乐并调整BPM播放
async function adjustAndPlayByEmotion(emotion, targetBpm, button) {
    // 获取自动播放权限（解决浏览器自动播放策略）
    try {
        const tempAudio = new Audio();
        tempAudio.play().catch(() => {});
    } catch (e) {}
    
    // 获取背景音乐元素
    const bgMusic = document.getElementById('bgMusic');
    
    // 停止当前播放的音乐
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    // 显示加载状态
    button.innerHTML = '⏳ 生成中...';
    button.disabled = true;
    
    // 30秒超时
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    
    try {
        const timbre = voiceAnalysisResult && voiceAnalysisResult.timbre ? voiceAnalysisResult.timbre : null;
        
        const response = await fetch(`${API_BASE}/get_emotion_music`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emotion: emotion,
                target_bpm: targetBpm,
                timbre: timbre
            }),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`服务器错误: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success && result.adjusted_path) {
            // 创建音频元素并播放
            const audioUrl = `http://localhost:5002${result.adjusted_path}`;
            const audio = new Audio(audioUrl);
            currentAudio = audio;
            
            // 保存到 generatedMusicList 用于笔记本播放
            const musicCardEl = button.closest('.music-card');
            const songName = musicCardEl ? musicCardEl.querySelector('h4')?.textContent : '';
            
            const timbreType = result.timbre_type || (voiceAnalysisResult && voiceAnalysisResult.timbre ? voiceAnalysisResult.timbre.timbre_type : '');
            
            generatedMusicList.push({
                title: songName || '定制音乐',
                artist: '根据你的情绪定制',
                audioUrl: audioUrl,
                bpm: targetBpm,
                timbreType: timbreType
            });
            
            audio.onloadedmetadata = () => {
                audio.play().then(() => {
                    button.innerHTML = '⏸️ 暂停';
                    button.disabled = false;
                    
                    // 音乐开始播放时暂停背景音乐
                    if (bgMusic && !bgMusic.paused) {
                        bgMusic.pause();
                        window.bgMusicWasPlaying = true;
                    }
                }).catch(err => {
                    console.error('音频播放失败:', err);
                    button.innerHTML = '❌ 播放失败';
                    button.disabled = false;
                });
                
                // 点击按钮切换暂停/播放
                button.onclick = () => {
                    if (audio.paused) {
                        audio.play().then(() => {
                            button.innerHTML = '⏸️ 暂停';
                            // 继续播放时暂停背景音乐
                            if (bgMusic && !bgMusic.paused) {
                                bgMusic.pause();
                                window.bgMusicWasPlaying = true;
                            }
                        }).catch(err => console.error('继续播放失败:', err));
                    } else {
                        audio.pause();
                    }
                };
                
                audio.onended = () => {
                    button.innerHTML = '🎚️ 生成并播放音乐';
                    button.onclick = null;
                    // 播放结束，恢复背景音乐
                    if (bgMusic && window.bgMusicWasPlaying) {
                        bgMusic.play().catch(err => console.log('背景音乐恢复失败:', err));
                        window.bgMusicWasPlaying = false;
                    }
                };
                
                audio.onpause = () => {
                    button.innerHTML = '▶️ 继续播放';
                    // 用户暂停，恢复背景音乐
                    if (bgMusic && window.bgMusicWasPlaying) {
                        bgMusic.play().catch(err => console.log('背景音乐恢复失败:', err));
                        window.bgMusicWasPlaying = false;
                    }
                };
            };
            
            audio.onerror = (e) => {
                console.error('音频加载失败:', e);
                button.innerHTML = '❌ 加载失败';
                button.disabled = false;
            };
        } else {
            throw new Error(result.error || '生成失败');
        }
    } catch (error) {
        clearTimeout(timeoutId);
        console.error('生成音乐失败:', error);
        if (error.name === 'AbortError') {
            button.innerHTML = '⏱️ 处理超时';
        } else {
            button.innerHTML = '❌ ' + (error.message || '生成失败');
        }
        button.disabled = false;
    }
}

function getEmotionEmoji(emotion) {
    const emojis = {
        angry: '😠',
        calm: '🌊',
        excited: '🎉',
        happy: '😊',
        sad: '😢'
    };
    return emojis[emotion] || '🎵';
}

async function adjustMusicBPM(musicPath, targetBPM) {
    try {
        const response = await fetch(`${API_BASE}/adjust_music`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                music_path: musicPath,
                target_bpm: targetBPM
            })
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert(`音乐已调整为 ${targetBPM} BPM，可下载: ${result.adjusted_file}`);
        } else {
            alert('调整失败: ' + result.error);
        }
    } catch (error) {
        console.error('BPM调整失败:', error);
        alert('调整失败，请重试');
    }
}

// 初始化事件监听
function init() {
    // 预加载音乐库
    preloadMusicLibrary();
    
    // 初始化语音识别
    initSpeechRecognition();
    
    spreadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            stopCurrentMusic();
            SoundManager.playClick();
            spreadBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSpread = btn.dataset.spread;
        });
    });

    shuffleBtn.addEventListener('click', () => {
        stopCurrentMusic();
        SoundManager.playClick();
        performReading();
    });
    restartBtn.addEventListener('click', () => {
        // 停止当前播放的音乐
        stopCurrentMusic();
        SoundManager.playClick();
        performReading();
    });
    
    // 语音按钮事件 - 录制语音并分析BPM和情绪
    voiceBtn.addEventListener('click', () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    });
    
    // 为所有音乐链接添加点击音效和停止定制音乐
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.music-link');
        if (link) {
            stopCurrentMusic();
            SoundManager.playClick();
        }
    });
    
    // 背景音乐控制
    initBackgroundMusic();
}

// 背景音乐控制
function initBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const bgMusicBtn = document.getElementById('bgMusicBtn');
    const volumeSlider = document.getElementById('bgVolumeSlider');
    const volumeValue = document.getElementById('volumeValue');
    
    if (!bgMusic || !bgMusicBtn) return;
    
    // 设置初始音量为较低水平 (20%)
    bgMusic.volume = 0.2;
    
    // 点击按钮切换播放/暂停
    bgMusicBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                bgMusicBtn.classList.add('playing');
                bgMusicBtn.title = '暂停音乐';
            }).catch(err => {
                console.log('音乐播放失败:', err);
            });
        } else {
            bgMusic.pause();
            bgMusicBtn.classList.remove('playing');
            bgMusicBtn.title = '播放音乐';
        }
    });
    
    // 音量调节
    if (volumeSlider && volumeValue) {
        volumeSlider.addEventListener('input', (e) => {
            const volume = e.target.value / 100;
            bgMusic.volume = volume;
            volumeValue.textContent = `${e.target.value}%`;
            
            // 更新音量图标
            const volumeLabel = document.querySelector('.volume-label');
            if (volumeLabel) {
                if (volume === 0) {
                    volumeLabel.textContent = '🔇';
                } else if (volume < 0.5) {
                    volumeLabel.textContent = '🔉';
                } else {
                    volumeLabel.textContent = '🔊';
                }
            }
        });
    }
    
    // 音乐结束时重新播放（循环）
    bgMusic.addEventListener('ended', () => {
        bgMusic.currentTime = 0;
        bgMusic.play();
    });
}

// 洗牌算法
function shuffleDeck(deck) {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 执行占卜
async function performReading() {
    // 获取用户输入的问题
    const question = document.getElementById('question').value.trim();
    
    // 清空之前的结果
    spreadContainer.innerHTML = '';
    cardMeanings.innerHTML = '';
    summaryContent.innerHTML = '';
    musicPlayer.innerHTML = '';
    cardsSection.classList.remove('show');
    summarySection.classList.remove('show');
    musicSection.classList.remove('show');
    actionSection.classList.remove('show');

    // 检测是否是食物相关问题 - 触发皇上翻牌子彩蛋
    if (isFoodQuestion(question)) {
        switchBackgroundMusic('food');
        await showFoodWheel();
        return;
    }

    // 检测是否是爱情相关问题 - 切换爱情主题音乐
    if (isLoveQuestion(question)) {
        switchBackgroundMusic('love');
    } else {
        // 非食物和爱情问题，切换回默认背景音乐
        switchBackgroundMusic('default');
    }

    // 洗牌
    const shuffledDeck = shuffleDeck(tarotCards);
    
    // 根据牌阵选择牌数
    const positions = spreads[currentSpread].positions;
    const drawnCards = [];

    // 生成每张牌
    for (let i = 0; i < positions.length; i++) {
        const card = {
            ...shuffledDeck[i],
            position: positions[i],
            reversed: Math.random() > 0.7 // 30%概率逆位
        };
        drawnCards.push(card);
    }

    // 显示牌阵
    await showCards(drawnCards);

    // 显示牌义
    showMeanings(drawnCards);

    // 显示整体解读（传入用户问题）
    showSummary(drawnCards, question);

    // 占卜结束后显示音乐（在整体解读动画完成后）
    setTimeout(() => {
        // 重置生成音乐列表
        generatedMusicList = [];
        
        showFinalMusicSection(drawnCards);
        
        // 保存占卜结果供笔记本使用
        const summaryText = document.getElementById('summary-content').innerText;
        const musicCards = document.querySelectorAll('.music-card h4');
        const musicList = [];
        musicCards.forEach(card => {
            const title = card.textContent;
            const artist = card.nextElementSibling?.textContent?.split('·')[0]?.trim() || '';
            musicList.push({ title, artist });
        });
        
        // 获取心情（从语音分析结果或默认）
        const mood = voiceAnalysisResult ? getEmotionLabel(voiceAnalysisResult.emotion) : '平静';
        
        setLastReadingResult(question, drawnCards, summaryText, mood, musicList);
        
        // 播放完成音效
        SoundManager.playComplete();

        // 显示再来一次按钮
        actionSection.classList.add('show');
    }, 1000);
}

// 显示皇上翻牌子用膳转盘
async function showFoodWheel() {
    // 清空塔罗牌相关内容
    cardMeanings.innerHTML = '';
    
    // 显示牌阵区域
    cardsSection.classList.add('show');
    
    // 创建转盘容器
    const wheelContainer = document.createElement('div');
    wheelContainer.className = 'food-wheel-container';
    
    // 标题
    const title = document.createElement('h2');
    title.className = 'food-wheel-title';
    title.innerHTML = '👑 皇上翻牌子用膳 👑';
    wheelContainer.appendChild(title);
    
    // 转盘
    const wheel = document.createElement('div');
    wheel.className = 'food-wheel';
    
    // 随机打乱食物选项
    const shuffledFood = shuffleDeck(foodOptions);
    const displayFood = shuffledFood.slice(0, 8); // 显示8个选项
    
    displayFood.forEach((food, index) => {
        const slice = document.createElement('div');
        slice.className = 'food-slice';
        slice.style.transform = `rotate(${index * 45}deg)`;
        slice.innerHTML = `
            <div class="slice-content">
                <span class="food-emoji">${food.emoji}</span>
                <span class="food-name">${food.name}</span>
            </div>
        `;
        wheel.appendChild(slice);
    });
    
    // 指针
    const pointer = document.createElement('div');
    pointer.className = 'food-pointer';
    wheelContainer.appendChild(wheel);
    wheelContainer.appendChild(pointer);
    
    // 开始按钮
    const spinBtn = document.createElement('button');
    spinBtn.className = 'spin-btn';
    spinBtn.innerHTML = '🎲 开始翻牌';
    wheelContainer.appendChild(spinBtn);
    
    spreadContainer.appendChild(wheelContainer);
    
    // 点击开始转盘
    spinBtn.addEventListener('click', async () => {
        stopCurrentMusic();
        SoundManager.playClick();
        spinBtn.disabled = true;
        
        // 随机旋转角度（至少转3圈）
        const spinDegrees = 1080 + Math.random() * 720;
        wheel.style.transform = `rotate(${spinDegrees}deg)`;
        wheel.style.transition = 'transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)';
        
        // 等待转盘停止
        await delay(4000);
        
        // 计算选中的食物
        const normalizedDegrees = spinDegrees % 360;
        const selectedIndex = Math.floor((360 - normalizedDegrees) / 45) % 8;
        const selectedFood = displayFood[selectedIndex];
        
        // 显示结果
        showFoodResult(selectedFood);
        
        // 播放完成音效
        SoundManager.playComplete();
    });
}

// 显示食物结果
function showFoodResult(food) {
    // 清空转盘
    spreadContainer.innerHTML = '';
    
    // 创建结果卡片
    const resultCard = document.createElement('div');
    resultCard.className = 'food-result-card';
    
    resultCard.innerHTML = `
        <div class="result-header">
            <span class="result-icon">👑</span>
            <h2>皇上翻牌结果</h2>
            <span class="result-icon">🍽️</span>
        </div>
        <div class="food-display">
            <span class="food-emoji-large">${food.emoji}</span>
            <h3 class="food-name-large">${food.name}</h3>
            <p class="food-category">${food.category}</p>
        </div>
        <div class="result-message">
            <p>🌙 今晚就用 ${food.emoji} ${food.name} 吧！</p>
            <p>✨ 美味佳肴，皇上吉祥！✨</p>
        </div>
    `;
    
    spreadContainer.appendChild(resultCard);
    
    // 显示欢快音乐推荐
    showHappyMusic();
    
    // 显示再来一次按钮
    setTimeout(() => {
        actionSection.classList.add('show');
    }, 500);
}

// 显示欢快音乐推荐
function showHappyMusic() {
    musicSection.classList.add('show');
    
    // 随机选择3首欢快音乐
    const shuffledMusic = shuffleDeck(happyMusic);
    const selectedMusic = shuffledMusic.slice(0, 3);
    
    selectedMusic.forEach((music, index) => {
        const musicCard = document.createElement('div');
        musicCard.className = 'music-card fade-in';
        musicCard.style.animationDelay = `${index * 0.2}s`;
        
        musicCard.innerHTML = `
            <div class="music-cover">🎉</div>
            <h4>${music.title}</h4>
            <p>${music.artist} · ${music.mood}</p>
            <div class="music-links">
                <a href="${getQQMusicLink(music.title)}" target="_blank" class="music-link qq-link">
                    <span class="link-icon">🎵</span> QQ音乐
                </a>
                <a href="${getNetMusicLink(music.title)}" target="_blank" class="music-link net-link">
                    <span class="link-icon">🎧</span> 网易云音乐
                </a>
            </div>
        `;
        
        musicPlayer.appendChild(musicCard);
    });
}

// 显示塔罗牌
async function showCards(cards) {
    cardsSection.classList.add('show');
    
    for (let i = 0; i < cards.length; i++) {
        await delay(500 + i * 200);
        
        const cardElement = createCardElement(cards[i]);
        spreadContainer.appendChild(cardElement);
        
        // 延迟翻牌
        await delay(300);
        SoundManager.playCardFlip();
        cardElement.classList.add('flipped');
    }
}

// 创建牌元素
function createCardElement(card) {
    const tarotCard = document.createElement('div');
    tarotCard.className = 'tarot-card fade-in';
    
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    
    // 牌背
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    // 牌面
    const cardFront = document.createElement('div');
    cardFront.className = `card-front ${card.reversed ? 'reversed' : ''}`;
    
    const cardIcon = document.createElement('div');
    cardIcon.className = 'card-icon';
    cardIcon.textContent = card.icon;
    
    const cardName = document.createElement('div');
    cardName.className = 'card-name';
    cardName.textContent = card.name;
    
    const cardNumber = document.createElement('div');
    cardNumber.className = 'card-number';
    cardNumber.textContent = card.number;
    
    cardFront.appendChild(cardIcon);
    cardFront.appendChild(cardName);
    cardFront.appendChild(cardNumber);
    
    cardInner.appendChild(cardBack);
    cardInner.appendChild(cardFront);
    tarotCard.appendChild(cardInner);
    
    // 牌位置
    const cardPosition = document.createElement('div');
    cardPosition.className = 'card-position';
    cardPosition.textContent = card.position;
    tarotCard.appendChild(cardPosition);
    
    return tarotCard;
}

// 显示牌义解释
function showMeanings(cards) {
    console.log('showMeanings called with cards:', cards);
    cards.forEach((card, index) => {
        console.log(`Adding card ${index}: ${card.position} - ${card.name}`);
        const meaningCard = document.createElement('div');
        meaningCard.className = 'card-meaning-card fade-in';
        meaningCard.style.animationDelay = `${index * 0.3}s`;
        
        const header = document.createElement('h3');
        header.innerHTML = `<span class="card-title">${card.icon} ${card.name}</span> ${card.reversed ? '<span class="reversed-badge">逆位</span>' : ''}`;
        
        const position = document.createElement('p');
        position.innerHTML = `<strong style="color: #a78bfa;">${card.position}：</strong>${getMeaning(card)}`;
        
        meaningCard.appendChild(header);
        meaningCard.appendChild(position);
        cardMeanings.appendChild(meaningCard);
    });
}

// 获取牌义（考虑正逆位）
function getMeaning(card) {
    if (card.reversed) {
        // 逆位通常表示正位含义的减弱或反向
        return `逆位：${card.meaning.replace('代表', '可能意味着').replace('象征', '可能象征')} 需要注意潜在的阻碍或需要重新审视当前的状况。`;
    }
    return card.meaning;
}

// 显示整体解读
function showSummary(cards, question) {
    // 分析牌阵整体信息
    const reversedCount = cards.filter(c => c.reversed).length;
    const majorArcanaCount = cards.length;
    const allKeywords = cards.flatMap(card => card.keywords);
    
    // 生成牌的概述标签
    let cardsOverview = '<div class="cards-overview">';
    cards.forEach(card => {
        cardsOverview += `<span class="card-tag ${card.reversed ? 'reversed' : ''}">${card.icon} ${card.name}</span>`;
    });
    cardsOverview += '</div>';
    
    // 生成整体解读文本（传入用户问题）
    const summaryText = generateSummaryText(cards, reversedCount, allKeywords, question);
    
    // 组合内容
    summaryContent.innerHTML = `
        ${cardsOverview}
        <div class="summary-text">${summaryText}</div>
    `;
    
    // 显示整体解读区域
    setTimeout(() => {
        summarySection.classList.add('show');
    }, 300);
}

// 生成整体解读文本
function generateSummaryText(cards, reversedCount, keywords, question) {
    const hasReversed = reversedCount > 0;
    const reversedRatio = reversedCount / cards.length;
    
    // 分析主要主题
    const themeAnalysis = analyzeTheme(keywords);
    
    // 分析问题类型
    const questionType = analyzeQuestion(question);
    
    // 根据牌阵类型生成解读
    if (cards.length === 3) {
        // 三牌占卜：过去-现在-未来
        const pastCard = cards[0];
        const presentCard = cards[1];
        const futureCard = cards[2];
        
        let text = `<span class="summary-highlight">🔮 三牌占卜整体解读：</span><br><br>`;
        
        // 如果有问题，先引用问题
        if (question) {
            text += `针对你提出的问题：「${question}」，塔罗给出以下指引：<br><br>`;
        }
        
        text += `从时间流来看，你的${questionType.past}(${pastCard.icon}${pastCard.name})${getPositionMeaning(pastCard, '过去')}，`;
        text += `现在(${presentCard.icon}${presentCard.name})${getPositionMeaning(presentCard, '现在', questionType)}，`;
        text += `而未来(${futureCard.icon}${futureCard.name})则预示着${getFutureOutlook(futureCard)}。`;
        text += `<br><br>`;
        text += `${themeAnalysis}。`;
        text += `<br><br>`;
        text += `${hasReversed ? `本次占卜中有${reversedCount}张逆位牌，${getReversedAdvice(reversedRatio)}` : '所有牌均为正位，能量流动顺畅。'}`;
        text += `<br><br>`;
        text += `<span class="summary-highlight">💫 核心建议：</span>${getCoreAdvice(cards, questionType)}`;
        
        return text;
    } else {
        // 凯尔特十字
        const coreCard = cards[0];
        const obstacleCard = cards[1];
        const subconsciousCard = cards[2];
        const pastCard = cards[3];
        const nearFutureCard = cards[4];
        const distantFutureCard = cards[5];
        const attitudeCard = cards[6];
        const environmentCard = cards[7];
        const hopesFearsCard = cards[8];
        const outcomeCard = cards[9];
        
        let text = `<span class="summary-highlight">🔮 凯尔特十字整体解读：</span><br><br>`;
        
        // 如果有问题，先引用问题
        if (question) {
            text += `针对你提出的问题：「${question}」，塔罗给出以下指引：<br><br>`;
        }
        
        text += `问题的核心在于${coreCard.icon}${coreCard.name}所代表的${coreCard.keywords.join('、')}，`;
        text += `当前面临的主要挑战是${obstacleCard.icon}${obstacleCard.name}带来的${obstacleCard.keywords.join('、')}。`;
        text += `<br><br>`;
        text += `在潜意识层面，${subconsciousCard.icon}${subconsciousCard.name}揭示了${subconsciousCard.keywords.join('、')}的潜在影响；`;
        text += `过去(${pastCard.icon}${pastCard.name})的经历${getPositionMeaning(pastCard, '过去')}；`;
        text += `近期未来(${nearFutureCard.icon}${nearFutureCard.name})将${getFutureOutlook(nearFutureCard)}。`;
        text += `<br><br>`;
        text += `长远来看(${distantFutureCard.icon}${distantFutureCard.name})${getFutureOutlook(distantFutureCard)}；`;
        text += `你的态度(${attitudeCard.icon}${attitudeCard.name})反映了${attitudeCard.keywords.join('、')}；`;
        text += `周围环境(${environmentCard.icon}${environmentCard.name})则呈现${environmentCard.keywords.join('、')}的状态。`;
        text += `<br><br>`;
        text += `你内心的希望与恐惧(${hopesFearsCard.icon}${hopesFearsCard.name})围绕着${hopesFearsCard.keywords.join('、')}；`;
        text += `最终结果(${outcomeCard.icon}${outcomeCard.name})预示着${getFutureOutlook(outcomeCard)}。`;
        text += `<br><br>`;
        text += `综合来看，${themeAnalysis}。`;
        text += `<br><br>`;
        text += `${hasReversed ? `本次占卜中有${reversedCount}张逆位牌，${getReversedAdvice(reversedRatio)}` : '所有牌均为正位，能量流动顺畅。'}`;
        text += `<br><br>`;
        text += `<span class="summary-highlight">💫 核心建议：</span>${getCoreAdvice(cards, questionType)}`;
        
        return text;
    }
}

// 分析用户问题类型
function analyzeQuestion(question) {
    if (!question) {
        return {
            type: 'general',
            category: 'general',
            past: '过去',
            present: '现在',
            future: '未来'
        };
    }
    
    const lowerQuestion = question.toLowerCase();
    
    // 判断问题类别
    let category = 'general';
    if (lowerQuestion.includes('感情') || lowerQuestion.includes('爱情') || lowerQuestion.includes('恋爱') || lowerQuestion.includes('婚姻') || lowerQuestion.includes('伴侣')) {
        category = 'love';
    } else if (lowerQuestion.includes('工作') || lowerQuestion.includes('事业') || lowerQuestion.includes('职业') || lowerQuestion.includes('职场') || lowerQuestion.includes('升职')) {
        category = 'career';
    } else if (lowerQuestion.includes('财运') || lowerQuestion.includes('钱') || lowerQuestion.includes('投资') || lowerQuestion.includes('财富')) {
        category = 'finance';
    } else if (lowerQuestion.includes('学习') || lowerQuestion.includes('考试') || lowerQuestion.includes('学业')) {
        category = 'study';
    } else if (lowerQuestion.includes('健康') || lowerQuestion.includes('身体')) {
        category = 'health';
    }
    
    // 判断问题类型（询问型 vs 决策型）
    let type = 'general';
    if (lowerQuestion.includes('吗') || lowerQuestion.includes('？') || lowerQuestion.includes('是否')) {
        type = 'yesno';
    } else if (lowerQuestion.includes('选择') || lowerQuestion.includes('哪个') || lowerQuestion.includes('哪条')) {
        type = 'choice';
    } else if (lowerQuestion.includes('怎么办') || lowerQuestion.includes('如何')) {
        type = 'action';
    }
    
    // 根据类别设置更贴切的描述词
    const positionDescriptions = {
        love: { past: '感情过往', present: '感情现状', future: '感情发展' },
        career: { past: '事业经历', present: '事业现状', future: '事业前景' },
        finance: { past: '财务状况', present: '财务现状', future: '财务前景' },
        study: { past: '学习历程', present: '学习现状', future: '学习前景' },
        health: { past: '健康状况', present: '健康现状', future: '健康趋势' },
        general: { past: '过去', present: '现在', future: '未来' }
    };
    
    return {
        type,
        category,
        ...positionDescriptions[category]
    };
}

// 获取位置含义
function getPositionMeaning(card, position, questionType = null) {
    const baseMeaning = card.reversed 
        ? `逆位的${card.name}提示需要重新审视${card.keywords.join('、')}方面的问题`
        : `${card.name}代表的${card.keywords.join('、')}为你提供了支持`;
    
    if (!questionType) return baseMeaning;
    
    // 根据问题类型调整描述
    const typeMap = {
        yesno: `${position}的${card.reversed ? '否定' : '肯定'}迹象`,
        choice: `${position}的${card.reversed ? '挑战' : '机遇'}指引`,
        action: `${position}需要${card.reversed ? '谨慎行动' : '积极行动'}的信号`
    };
    
    return typeMap[questionType.type] || baseMeaning;
}

// 分析主题
function analyzeTheme(keywords) {
    const themeCounts = {};
    
    keywords.forEach(keyword => {
        themeCounts[keyword] = (themeCounts[keyword] || 0) + 1;
    });
    
    const sortedThemes = Object.entries(themeCounts).sort((a, b) => b[1] - a[1]);
    const topThemes = sortedThemes.slice(0, 3);
    
    if (topThemes.length === 0) {
        return '当前的能量较为平衡';
    }
    
    if (topThemes.length === 1) {
        return `主要能量集中在「${topThemes[0][0]}」`;
    }
    
    if (topThemes.length === 2) {
        return `主要能量集中在「${topThemes[0][0]}」和「${topThemes[1][0]}」`;
    }
    
    return `主要能量集中在「${topThemes[0][0]}」、「${topThemes[1][0]}」和「${topThemes[2][0]}」`;
}

// 获取未来展望
function getFutureOutlook(card) {
    const positiveCards = ['星星', '太阳', '世界', '恋人', '皇后', '魔术师'];
    const challengingCards = ['塔', '死神', '恶魔', '倒吊人'];
    
    if (card.reversed) {
        if (challengingCards.includes(card.name)) {
            return '困境的解除或转变的机会';
        }
        return '需要调整方向或重新评估';
    }
    
    if (positiveCards.includes(card.name)) {
        return '积极向好的发展趋势';
    }
    
    if (challengingCards.includes(card.name)) {
        return '需要面对的挑战或转变';
    }
    
    return '稳定的发展和成长';
}

// 获取逆位建议
function getReversedAdvice(ratio) {
    if (ratio <= 0.25) {
        return '这提示你需要注意一些小的阻碍，但整体趋势依然积极。';
    } else if (ratio <= 0.5) {
        return '这表明当前有一些需要克服的困难，建议你保持谨慎和耐心。';
    } else {
        return '这预示着需要进行深刻的反思和调整，可能需要重新审视当前的方向。';
    }
}

// 获取核心建议
function getCoreAdvice(cards, questionType = null) {
    const hasMajorChanges = cards.some(c => ['命运之轮', '死神', '塔'].includes(c.name));
    const hasInnerWork = cards.some(c => ['隐士', '女祭司', '力量'].includes(c.name));
    const hasAction = cards.some(c => ['战车', '魔术师'].includes(c.name));
    const hasLove = cards.some(c => ['恋人', '皇后'].includes(c.name));
    const hasSuccess = cards.some(c => ['太阳', '星星', '世界'].includes(c.name));
    
    const adviceParts = [];
    
    // 根据问题类型添加针对性建议
    if (questionType) {
        const categoryAdvice = {
            love: '在感情中保持真诚和开放的心态',
            career: '在职场中展现你的专业能力',
            finance: '理性规划财务，谨慎投资',
            study: '保持学习热情，持之以恒',
            health: '关注身心健康，保持良好习惯'
        };
        
        if (categoryAdvice[questionType.category]) {
            adviceParts.push(categoryAdvice[questionType.category]);
        }
        
        // 根据问题类型（询问型/决策型/行动型）添加建议
        if (questionType.type === 'yesno') {
            adviceParts.push('相信你的直觉，答案就在心中');
        } else if (questionType.type === 'choice') {
            adviceParts.push('权衡利弊，选择最符合你内心的道路');
        } else if (questionType.type === 'action') {
            adviceParts.push('制定计划并坚定执行');
        }
    }
    
    if (hasMajorChanges) {
        adviceParts.push('接受变化是成长的必经之路');
    }
    if (hasInnerWork) {
        adviceParts.push('倾听内心的声音');
    }
    if (hasAction) {
        adviceParts.push('勇敢地采取行动');
    }
    if (hasLove) {
        adviceParts.push('珍惜身边的关系');
    }
    if (hasSuccess) {
        adviceParts.push('保持信心，成功就在前方');
    }
    
    if (adviceParts.length === 0) {
        return '保持平衡和耐心，顺其自然。';
    }
    
    return adviceParts.join('，') + '。';
}

// 根据占卜结果和问题匹配音乐
// 根据用户问题分析情绪类型（与王九音工程文件一致）
function analyzeEmotionFromQuestion(question) {
    if (!question) return 'calm';
    
    const lowerQuestion = question.toLowerCase();
    
    // ========== 关键词库扩展 ==========
    
    // 愤怒类关键词（焦虑、压力、烦躁等）
    const angryKeywords = [
        '愤怒', '生气', '恼火', '烦躁', '气', '不爽', '讨厌', '恨', '烦', '郁闷', '火大', '抓狂', '崩溃', 
        '压力', '焦虑', '恐惧', '害怕', '恐慌', '担心', '怕', '不安', '激动', '狂', '暴躁', '狂躁', 
        '不耐烦', '憋屈', '憋屈', '怨恨', '憎恶', '烦扰', '烦乱', '忧虑', '焦灼', '紧张', '不安宁',
        '心急', '着急', '担忧', '发愁', '烦忧', '烦愁', '焦躁', '忧虑', '惶恐', '忐忑不安'
    ];
    
    // 平静类关键词
    const calmKeywords = [
        '平静', '安静', '放松', '休闲', '轻松', '舒缓', '平和', '安宁', '安心', '稳定', '和谐', 
        '舒适', '惬意', '悠闲', '慢', '享受', '治愈', '淡定', '从容', '平和', '静谧', '悠闲自在',
        '坦然', '淡然', '从容不迫', '心平气和', '怡然自得', '悠然', '恬淡', '安宁', '沉静', '静谧'
    ];
    
    // 兴奋类关键词
    const excitedKeywords = [
        '兴奋', '激动', '开心', '快乐', '高兴', '欢快', '热烈', '热情', '活力', '精力充沛', 
        '热血', '沸腾', '澎湃', '激昂', '振奋', '鼓舞', '期待', '盼望', '憧憬', '兴高采烈',
        '迫不及待', '跃跃欲试', '满怀期待', '热血沸腾', '心潮澎湃', '激动人心', '振奋人心', '欢欣鼓舞'
    ];
    
    // 快乐类关键词
    const happyKeywords = [
        '幸福', '开心', '高兴', '满足', '满意', '喜悦', '欢乐', '愉快', '美满', '如意', 
        '顺利', '成功', '好运', '祝福', '吉祥', '甜美', '温馨', '温暖', '感动', '感恩', 
        '爱', '喜欢', '甜蜜', '美好', '愉悦', '欢心', '欣喜', '快乐无比', '幸福美满', '心花怒放',
        '乐融融', '美滋滋', '甜滋滋', '暖洋洋', '笑口常开', '欢天喜地', '喜气洋洋', '喜出望外'
    ];
    
    // 悲伤类关键词
    const sadKeywords = [
        '悲伤', '难过', '伤心', '痛苦', '失落', '沮丧', '绝望', '无助', '孤独', '寂寞', 
        '空虚', '迷茫', '困惑', '彷徨', '忐忑', '忧虑', '悔恨', '后悔', '遗憾', '惋惜', 
        '痛', '苦', '泪', '哭', '伤感', '忧', '哀', '悲', '心碎', '心如刀割', '痛不欲生',
        '黯然神伤', '愁眉苦脸', '忧心忡忡', '闷闷不乐', '郁郁寡欢', '悲戚', '悲恸', '哀伤', '悲痛',
        '凄凉', '悲凉', '心碎', '崩溃', '绝望', '心灰意冷', '万念俱灰', '泣不成声', '泪流满面'
    ];
    
    // 计算每种情绪的得分
    let scores = { angry: 0, calm: 0, excited: 0, happy: 0, sad: 0 };
    
    angryKeywords.forEach(kw => { if (lowerQuestion.includes(kw)) scores.angry++; });
    calmKeywords.forEach(kw => { if (lowerQuestion.includes(kw)) scores.calm++; });
    excitedKeywords.forEach(kw => { if (lowerQuestion.includes(kw)) scores.excited++; });
    happyKeywords.forEach(kw => { if (lowerQuestion.includes(kw)) scores.happy++; });
    sadKeywords.forEach(kw => { if (lowerQuestion.includes(kw)) scores.sad++; });
    
    // ========== 程度词处理 ==========
    const intensifiers = ['非常', '很', '特别', '十分', '极其', '格外', '无比', '特别'];
    const hasIntensifier = intensifiers.some(w => lowerQuestion.includes(w));
    if (hasIntensifier) {
        Object.keys(scores).forEach(key => {
            if (scores[key] > 0) scores[key] += 1;
        });
    }
    
    // ========== 否定词处理 ==========
    const negations = ['不', '没', '无', '非', '未曾', '从未', '不再'];
    const hasNegation = negations.some(w => lowerQuestion.includes(w));
    
    // ========== 特殊问题类型分析 ==========
    
    // 爱情问题 - 分手、挽回、前任等都是悲伤
    const loveKeywords = ['爱', '喜欢', '恋爱', '感情', '爱情', '暗恋', '追求', '暧昧', '前任', '分手', '复合', '挽回', '她', '他', '男朋友', '女朋友', '对象', '伴侣', '爱人', '恋人'];
    if (loveKeywords.some(kw => lowerQuestion.includes(kw))) {
        // 分手相关 - 悲伤
        if (['分手', '前任', '挽回', '离婚', '破裂', '离开', '分开', '告别'].some(kw => lowerQuestion.includes(kw))) {
            scores.sad += 4;
        }
        // 暗恋、单恋 - 悲伤
        if (['暗恋', '单恋', '相思', '想念', '思念', '挂念'].some(kw => lowerQuestion.includes(kw))) {
            scores.sad += 3;
        }
        // 追求、告白 - 期待/兴奋
        if (['追求', '告白', '表白', '求婚', '约会'].some(kw => lowerQuestion.includes(kw))) {
            scores.excited += 3;
        }
        // 默认感情问题 - 如果没有其他明确线索，通常是迷茫/悲伤
        if (scores.sad === 0 && scores.excited === 0) {
            scores.sad += 2;
        }
    }
    
    // 工作事业问题
    const careerKeywords = ['工作', '事业', '职业', '面试', '辞职', '创业', '同事', '老板', '同事', '上司', '客户', '项目', '跳槽', '梦想', '目标', '职场', '任务', '绩效', '晋升'];
    if (careerKeywords.some(kw => lowerQuestion.includes(kw))) {
        if (['失败', '困难', '压力', '焦虑', '加班', '劳累', '疲倦', '疲惫', '累'].some(kw => lowerQuestion.includes(kw))) {
            scores.angry += 3;
            scores.sad += 1;
        } else if (['成功', '顺利', '升职', '加薪', '奖金', '表扬', '认可'].some(kw => lowerQuestion.includes(kw))) {
            scores.happy += 3;
            scores.excited += 1;
        } else {
            scores.calm += 1;
            scores.excited += 1;
        }
    }
    
    // 财务问题
    const financeKeywords = ['钱', '财运', '财务', '投资', '债务', '赚钱', '破产', '股票', '理财', '生意', '工资', '收入', '支出', '花销', '存款', '贷款', '利息'];
    if (financeKeywords.some(kw => lowerQuestion.includes(kw))) {
        if (['破', '债务', '亏损', '赔', '欠', '负债', '没钱', '缺钱'].some(kw => lowerQuestion.includes(kw))) {
            scores.sad += 3;
            scores.angry += 2;
        } else if (['赚', '发财', '中奖', '分红', '奖金', '加薪', '盈利'].some(kw => lowerQuestion.includes(kw))) {
            scores.excited += 3;
            scores.happy += 2;
        } else {
            scores.calm += 1;
        }
    }
    
    // 健康问题
    const healthKeywords = ['健康', '疾病', '身体', '康复', '手术', '医院', '生病', '体检', '病', '痛', '伤', '药', '治疗', '休养'];
    if (healthKeywords.some(kw => lowerQuestion.includes(kw))) {
        if (['康复', '健康', '好转', '痊愈', '康复'].some(kw => lowerQuestion.includes(kw))) {
            scores.happy += 2;
            scores.calm += 1;
        } else {
            scores.sad += 3;
            scores.calm += 1;
        }
    }
    
    // 决策困惑类问题 - 通常是迷茫或焦虑
    const decisionKeywords = ['选择', '决定', '犹豫', '纠结', '困惑', '迷茫', '不知道', '怎么办', '如何', '能否', '是否', '应该', '该'];
    if (decisionKeywords.some(kw => lowerQuestion.includes(kw))) {
        scores.sad += 2;
        scores.calm += 1;
    }
    
    // 家庭关系问题
    const familyKeywords = ['家人', '父母', '孩子', '家庭', '亲情', '父子', '母女', '兄弟姐妹', '婆媳'];
    if (familyKeywords.some(kw => lowerQuestion.includes(kw))) {
        if (['矛盾', '吵架', '不和', '疏远', '隔阂', '冷战'].some(kw => lowerQuestion.includes(kw))) {
            scores.sad += 3;
            scores.angry += 1;
        } else {
            scores.happy += 1;
            scores.calm += 2;
        }
    }
    
    // 学业考试问题
    const studyKeywords = ['学习', '考试', '高考', '考研', '成绩', '分数', '作业', '论文', '答辩'];
    if (studyKeywords.some(kw => lowerQuestion.includes(kw))) {
        if (['挂科', '不及格', '失败', '焦虑', '紧张', '压力'].some(kw => lowerQuestion.includes(kw))) {
            scores.sad += 2;
            scores.angry += 1;
        } else if (['通过', '成功', '高分', '获奖', '优秀'].some(kw => lowerQuestion.includes(kw))) {
            scores.happy += 2;
            scores.excited += 1;
        } else {
            scores.calm += 1;
            scores.excited += 1;
        }
    }
    
    // 旅行冒险问题
    const travelKeywords = ['旅行', '旅游', '出行', '冒险', '探险', '远方', '旅程', '旅途'];
    if (travelKeywords.some(kw => lowerQuestion.includes(kw))) {
        scores.excited += 2;
        scores.happy += 1;
    }
    
    // ========== 问题句式分析 ==========
    
    // 疑问句通常表示困惑或担忧
    const questionPatterns = ['吗', '呢', '吧', '？', '?'];
    if (questionPatterns.some(p => lowerQuestion.includes(p))) {
        scores.sad += 1;
        scores.calm += 1;
    }
    
    // 祈使句/决心句表示积极
    const imperativePatterns = ['要', '会', '一定', '必须', '应该', '得'];
    if (imperativePatterns.some(p => lowerQuestion.includes(p))) {
        scores.excited += 1;
        scores.happy += 1;
    }
    
    // ========== 否定句处理 ==========
    if (hasNegation) {
        // "不开心" -> 悲伤，不是快乐
        if (lowerQuestion.includes('不开心') || lowerQuestion.includes('不快乐')) {
            scores.happy = 0;
            scores.sad += 2;
        }
        if (lowerQuestion.includes('不喜欢') || lowerQuestion.includes('不爱')) {
            scores.happy = 0;
            scores.sad += 2;
        }
        if (lowerQuestion.includes('不顺利')) {
            scores.happy = 0;
            scores.sad += 2;
        }
        if (lowerQuestion.includes('不确定') || lowerQuestion.includes('不知道')) {
            scores.sad += 2;
        }
    }
    
    // ========== 时态分析 ==========
    const pastKeywords = ['过', '曾经', '以前', '之前', '了'];
    if (pastKeywords.some(kw => lowerQuestion.includes(kw))) {
        // 过去的事情通常带有回忆和可能的悲伤
        scores.sad += 1;
    }
    
    const futureKeywords = ['未来', '以后', '将来', '明天', '下周', '下个月'];
    if (futureKeywords.some(kw => lowerQuestion.includes(kw))) {
        // 未来的事情通常带有期待
        scores.excited += 1;
        scores.happy += 1;
    }
    
    // ========== 找出最高分的情绪类型 ==========
    let maxScore = 0;
    let maxEmotion = 'calm';
    
    // 检查每个情绪的得分
    Object.entries(scores).forEach(([emotion, score]) => {
        if (score > maxScore) {
            maxScore = score;
            maxEmotion = emotion;
        }
    });
    
    // 如果没有任何关键词匹配，根据问题整体情感倾向判断
    if (maxScore === 0) {
        // 积极词汇倾向
        const positiveWords = ['希望', '期待', '好运', '顺利', '成功', '幸福', '快乐', '开心', '好', '棒', '赞', '要', '能', '会', '一定'];
        const negativeWords = ['问题', '困难', '麻烦', '烦恼', '焦虑', '担心', '害怕', '恐惧', '坏', '差', '不会', '不能', '无法', '没'];
        
        let positiveCount = 0, negativeCount = 0;
        positiveWords.forEach(w => { if (lowerQuestion.includes(w)) positiveCount++; });
        negativeWords.forEach(w => { if (lowerQuestion.includes(w)) negativeCount++; });
        
        if (positiveCount > negativeCount) {
            return 'happy';
        } else if (negativeCount > positiveCount) {
            return 'sad';
        }
    }
    
    return maxEmotion;
}

// 根据情绪类型获取推荐的BPM范围（没有语音时使用）
function getRecommendedBPMByEmotion(emotion) {
    // 为每种情绪预设推荐的BPM范围
    const bpmRanges = {
        angry: { min: 85, max: 100, default: 95 },   // 愤怒：中速偏快，表达力量感
        calm: { min: 60, max: 80, default: 70 },     // 平静：慢速，放松舒缓
        excited: { min: 120, max: 150, default: 130 }, // 兴奋：快速，充满活力
        happy: { min: 90, max: 110, default: 100 },   // 快乐：中速稍快，愉悦轻快
        sad: { min: 50, max: 70, default: 60 }       // 悲伤：慢速，低沉压抑
    };
    return bpmRanges[emotion] || bpmRanges.calm;
}

// 当前播放的音频对象
let currentAudio = null;

// 当前占卜生成的可播放音乐列表（用于笔记本播放）
let generatedMusicList = [];

// 停止当前播放的音乐（不停止背景音乐）
function stopCurrentMusic() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    
    // 停止页面上所有非背景音乐的音频元素（包括笔记本中的音频）
    document.querySelectorAll('audio').forEach(audio => {
        if (audio.id !== 'bgMusic' && !audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}

// 根据占卜结果分析主题
function analyzeReadingTheme(cards, question) {
    // 主题关键词映射
    const themeKeywords = {
        love: ['爱', '感情', '恋人', '伴侣', '爱情', '桃花', '暧昧', '约会', '告白', '分手', '复合', '婚姻', '心', '浪漫', '甜蜜', '思念'],
        career: ['工作', '事业', '求职', '面试', '升职', '加薪', '创业', '合作', '同事', '上司', '客户', '项目', '辞职', '跳槽', '梦想', '目标'],
        wealth: ['金钱', '财富', '财运', '投资', '股票', '理财', '破财', '债务', '收入', '开销', '钱', '财', '生意', '发财', '贫困'],
        health: ['健康', '身体', '疾病', '医疗', '减肥', '健身', '养生', '休息', '疲劳', '压力', '失眠', '精力'],
        growth: ['成长', '学习', '考试', '毕业', '出国', '旅行', '改变', '决定', '选择', '未来', '过去', '回忆', '家人', '父母', '孩子', '自我'],
        confused: ['迷茫', '困惑', '选择', '犹豫', '纠结', '彷徨', '无助', '失落', '孤独', '焦虑', '害怕', '恐惧', '未知', '不确定'],
        farewell: ['告别', '结束', '分手', '离别', '失去', '放手', '释怀', '放下', '过去', '遗憾', '后悔', '错过', '离开', '分别'],
        celebration: ['好运', '喜事', '庆祝', '升职', '加薪', '中奖', '顺利', '成功', '突破', '好运', '惊喜', '期待', '希望', '喜悦', '快乐'],
        courage: ['勇气', '冒险', '挑战', '突破', '改变', '行动', '决定', '坚持', '奋斗', '拼搏', '突破', '勇敢', '冒险', '尝试']
    };
    
    // 分析用户问题中的关键词
    const allText = question + cards.map(c => c.meaning || '').join('');
    const matchedThemes = [];
    
    for (const [theme, keywords] of Object.entries(themeKeywords)) {
        for (const keyword of keywords) {
            if (allText.includes(keyword)) {
                if (!matchedThemes.includes(theme)) {
                    matchedThemes.push(theme);
                }
                break;
            }
        }
    }
    
    // 如果没有匹配的主题，默认返回多个主题混合
    if (matchedThemes.length === 0) {
        return ['growth', 'courage', 'celebration'];
    }
    
    return matchedThemes;
}

// 占卜结束后统一显示音乐区域（分为：根据BPM调整的音乐 + 推荐音乐）
function showFinalMusicSection(cards) {
    musicPlayer.innerHTML = '';
    
    // 获取用户问题
    const question = document.getElementById('question').value.trim();
    
    // 根据输入内容识别情绪
    let emotionFromText = 'calm';
    if (question) {
        emotionFromText = analyzeEmotionFromQuestion(question);
    }
    
    // 获取目标BPM：有语音时用语音BPM，没有时用情绪对应默认BPM
    const targetBpm = voiceAnalysisResult && voiceAnalysisResult.bpm 
        ? voiceAnalysisResult.bpm 
        : getRecommendedBPMByEmotion(emotionFromText).default;
    
    // ========== 第一部分：根据占卜结果定制的音乐（调整BPM）==========
    // 逻辑：识别情绪 → 在该情绪音乐库中随机选择一首音乐 → 调整BPM并播放
    if (voiceAnalysisResult && voiceAnalysisResult.recommended_music && voiceAnalysisResult.recommended_music.length > 0) {
        // 过滤出与文字情绪一致的音乐
        const emotionMatchedMusic = voiceAnalysisResult.recommended_music.filter(m => m.emotion === emotionFromText);
        // 随机选择一首音乐（不再总是选第一首）
        const availableMusic = emotionMatchedMusic.length > 0 ? emotionMatchedMusic : voiceAnalysisResult.recommended_music;
        const adjustedMusic = availableMusic[Math.floor(Math.random() * availableMusic.length)];
        
        const timbreInfo = voiceAnalysisResult && voiceAnalysisResult.timbre ? ` | 音色: ${voiceAnalysisResult.timbre.timbre_type}` : '';
        
        const adjustedSection = document.createElement('div');
        adjustedSection.className = 'music-section-group';
        adjustedSection.innerHTML = `
            <h3 class="music-section-title">🎚️ 根据占卜结果定制的音乐</h3>
            <div class="music-section-desc">情感: ${getEmotionLabel(emotionFromText)} | BPM: ${targetBpm}${timbreInfo}</div>
        `;
        
        const musicCard = document.createElement('div');
        musicCard.className = 'music-card music-card-adjusted fade-in';
        
        const emotionEmoji = getEmotionEmoji(adjustedMusic.emotion);
        
        musicCard.innerHTML = `
            <div class="music-cover">${emotionEmoji}</div>
            <h4>${adjustedMusic.name}</h4>
            <p>原BPM: ${adjustedMusic.bpm} → 调整至: ${targetBpm}</p>
            <div class="music-controls">
                <button class="adjust-bpm-btn" onclick="adjustAndPlayMusic('${adjustedMusic.path}', ${targetBpm}, this)">
                    🎚️ 调整BPM并播放
                </button>
            </div>
        `;
        
        adjustedSection.appendChild(musicCard);
        musicPlayer.appendChild(adjustedSection);
    } else if (musicLibraryCache && musicLibraryCache[emotionFromText] && musicLibraryCache[emotionFromText].length > 0) {
        // 从预加载的音乐库中随机选择一首对应情绪的歌
        const emotionMusicList = musicLibraryCache[emotionFromText];
        const randomMusic = emotionMusicList[Math.floor(Math.random() * emotionMusicList.length)];
        
        const emotionEmoji = getEmotionEmoji(emotionFromText);
        const emotionLabel = getEmotionLabel(emotionFromText);
        const timbreInfo2 = voiceAnalysisResult && voiceAnalysisResult.timbre ? ` | 音色: ${voiceAnalysisResult.timbre.timbre_type}` : '';
        
        const adjustedSection = document.createElement('div');
        adjustedSection.className = 'music-section-group';
        adjustedSection.innerHTML = `
            <h3 class="music-section-title">🎚️ 根据占卜结果定制的音乐</h3>
            <div class="music-section-desc">情感: ${emotionLabel} | BPM: ${targetBpm}${timbreInfo2}</div>
        `;
        
        const musicCard = document.createElement('div');
        musicCard.className = 'music-card music-card-adjusted fade-in';
        
        musicCard.innerHTML = `
            <div class="music-cover">${emotionEmoji}</div>
            <h4>${randomMusic.name}</h4>
            <p>原BPM: ${randomMusic.bpm} → 调整至: ${targetBpm}</p>
            <div class="music-controls">
                <button class="adjust-bpm-btn" onclick="adjustAndPlayMusic('${randomMusic.path}', ${targetBpm}, this)">
                    🎚️ 调整BPM并播放
                </button>
            </div>
        `;
        
        adjustedSection.appendChild(musicCard);
        musicPlayer.appendChild(adjustedSection);
    } else {
        // 如果没有预加载的音乐库，显示通用卡片
        const emotionEmoji = getEmotionEmoji(emotionFromText);
        const emotionLabel = getEmotionLabel(emotionFromText);
        const timbreInfo3 = voiceAnalysisResult && voiceAnalysisResult.timbre ? ` | 音色: ${voiceAnalysisResult.timbre.timbre_type}` : '';
        
        const adjustedSection = document.createElement('div');
        adjustedSection.className = 'music-section-group';
        adjustedSection.innerHTML = `
            <h3 class="music-section-title">🎚️ 根据占卜结果定制的音乐</h3>
            <div class="music-section-desc">情感: ${emotionLabel} | BPM: ${targetBpm}${timbreInfo3}</div>
        `;
        
        const musicCard = document.createElement('div');
        musicCard.className = 'music-card music-card-adjusted fade-in';
        
        musicCard.innerHTML = `
            <div class="music-cover">${emotionEmoji}</div>
            <h4>${emotionLabel}主题音乐</h4>
            <p>推荐BPM: ${targetBpm}</p>
            <div class="music-controls">
                <button class="adjust-bpm-btn" onclick="adjustAndPlayByEmotion('${emotionFromText}', ${targetBpm}, this)">
                    🎚️ 生成并播放音乐
                </button>
            </div>
        `;
        
        adjustedSection.appendChild(musicCard);
        musicPlayer.appendChild(adjustedSection);
    }
    
    // ========== 第二部分：根据占卜结果推荐音乐（3首）==========
    // 分析占卜主题
    const themes = analyzeReadingTheme(cards, question);
    
    // 情绪到主题的映射
    const emotionToThemes = {
        'angry': ['courage', 'confused', 'farewell'],
        'calm': ['health', 'growth', 'career'],
        'excited': ['celebration', 'career', 'love'],
        'happy': ['love', 'celebration', 'wealth'],
        'sad': ['farewell', 'confused', 'growth']
    };
    
    // 将文字情绪对应的主题优先加入
    const emotionThemes = emotionToThemes[emotionFromText] || ['growth', 'courage'];
    const combinedThemes = [...new Set([...emotionThemes, ...themes])];
    
    // 收集推荐音乐
    const recommendedMusic = [];
    const addedTitles = new Set();
    
    // 如果有BPM调整的音乐，记录歌名避免重复
    if (voiceAnalysisResult && voiceAnalysisResult.recommended_music) {
        addedTitles.add(voiceAnalysisResult.recommended_music[0].name);
    }
    
    // 从组合主题中随机抽取音乐
    for (const theme of combinedThemes) {
        const themeMusic = musicRecommendations[theme] || [];
        const shuffled = [...themeMusic].sort(() => Math.random() - 0.5);
        
        for (const music of shuffled) {
            if (recommendedMusic.length >= 3) break;
            if (!addedTitles.has(music.title)) {
                recommendedMusic.push({ ...music, theme });
                addedTitles.add(music.title);
            }
        }
        if (recommendedMusic.length >= 3) break;
    }
    
    // 如果还不够3首，从growth主题补充
    if (recommendedMusic.length < 3) {
        const growthMusic = musicRecommendations.growth || [];
        for (const music of growthMusic) {
            if (recommendedMusic.length >= 3) break;
            if (!addedTitles.has(music.title)) {
                recommendedMusic.push({ ...music, theme: 'growth' });
                addedTitles.add(music.title);
            }
        }
    }
    
    // 获取主题标签
    const themeLabels = {
        love: '💕 爱情',
        career: '💼 事业',
        wealth: '💰 财富',
        health: '💚 健康',
        growth: '🌱 成长',
        confused: '🌫️ 迷茫',
        farewell: '👋 告别',
        celebration: '🎉 喜悦',
        courage: '⚔️ 勇气'
    };
    
    const recommendSection = document.createElement('div');
    recommendSection.className = 'music-section-group';
    
    // 显示匹配的主题
    const themeNames = themes.map(t => themeLabels[t] || t).join(' ');
    recommendSection.innerHTML = `<h3 class="music-section-title">🎵 根据占卜结果推荐</h3>
        <div class="music-section-desc">${themeNames}</div>`;
    
    recommendedMusic.forEach((music, index) => {
        const musicCard = document.createElement('div');
        musicCard.className = 'music-card fade-in';
        musicCard.style.animationDelay = `${index * 0.15}s`;
        
        musicCard.innerHTML = `
            <div class="music-cover">${music.cover}</div>
            <h4>${music.title}</h4>
            <p>${music.artist} · ${music.mood}</p>
            <div class="music-links">
                <a href="${getQQMusicLink(music.title)}" target="_blank" class="music-link qq-link">
                    <span class="link-icon">🎵</span> QQ音乐
                </a>
                <a href="${getNetMusicLink(music.title)}" target="_blank" class="music-link net-link">
                    <span class="link-icon">🎧</span> 网易云音乐
                </a>
            </div>
        `;
        
        recommendSection.appendChild(musicCard);
    });
    
    musicPlayer.appendChild(recommendSection);
    
    // 显示音乐区域
    musicSection.classList.add('show');
}

// 切换音乐播放
function toggleMusicPlay(musicPath, button) {
    // 停止当前播放的音乐
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        // 重置之前按钮的状态
        const prevButton = document.querySelector('.play-btn.playing');
        if (prevButton) {
            prevButton.classList.remove('playing');
            prevButton.innerHTML = '<span class="play-icon">▶️</span> 播放';
        }
    }
    
    // 获取当前卡片的音频元素
    const card = button.closest('.music-card');
    const audio = card.querySelector('.hidden-audio');
    
    if (audio.paused) {
        audio.play().then(() => {
            currentAudio = audio;
            button.classList.add('playing');
            button.innerHTML = '<span class="play-icon">⏸️</span> 暂停';
            
            // 监听播放结束
            audio.onended = () => {
                button.classList.remove('playing');
                button.innerHTML = '<span class="play-icon">▶️</span> 播放';
            };
        }).catch(err => {
            console.error('播放失败:', err);
            alert('播放失败，请检查网络或文件路径');
        });
    } else {
        audio.pause();
        button.classList.remove('playing');
        button.innerHTML = '<span class="play-icon">▶️</span> 播放';
    }
}


// 获取QQ音乐搜索链接
function getQQMusicLink(songTitle) {
    const encodedTitle = encodeURIComponent(songTitle);
    return `https://y.qq.com/n/ryqq/search?w=${encodedTitle}`;
}

// 获取网易云音乐搜索链接
function getNetMusicLink(songTitle) {
    const encodedTitle = encodeURIComponent(songTitle);
    return `https://music.163.com/#/search/m/?s=${encodedTitle}&type=1`;
}

// 延迟函数
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 音效管理器
const SoundManager = (function() {
    let audioContext = null;
    
    function initAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        return audioContext;
    }
    
    // 创建混响效果
    function createReverb(ctx) {
        const convolver = ctx.createConvolver();
        const bufferSize = ctx.sampleRate * 2;
        const impulse = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
        const impulseL = impulse.getChannelData(0);
        const impulseR = impulse.getChannelData(1);
        
        // 创建模拟混响的脉冲响应
        for (let i = 0; i < bufferSize; i++) {
            const t = i / ctx.sampleRate;
            // 指数衰减的白噪声
            impulseL[i] = (Math.random() * 2 - 1) * Math.exp(-t * 8);
            impulseR[i] = (Math.random() * 2 - 1) * Math.exp(-t * 8);
        }
        
        convolver.buffer = impulse;
        return convolver;
    }
    
    // 创建滤波器
    function createFilter(ctx, type, frequency, q) {
        const filter = ctx.createBiquadFilter();
        filter.type = type;
        filter.frequency.value = frequency;
        if (q) filter.Q.value = q;
        return filter;
    }
    
    // 神秘高级点击音效 - 使用多层和弦与混响
    function playClickSound() {
        try {
            const ctx = initAudioContext();
            
            // 创建效果链
            const reverb = createReverb(ctx);
            const filter = createFilter(ctx, 'lowpass', 800, 1);
            const gainNode = ctx.createGain();
            
            reverb.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            // 和弦频率 - 使用神秘的减七和弦
            const frequencies = [
                130.81,  // C3 主音
                155.56,  // D#3 小三度
                185.00,  // F3 减五度
                220.00   // G#3 减七度
            ];
            
            // 创建多层振荡器
            frequencies.forEach((freq, index) => {
                const osc = ctx.createOscillator();
                const oscGain = ctx.createGain();
                
                // 使用不同波形增加层次感
                const waveTypes = ['sine', 'triangle', 'sine', 'sawtooth'];
                osc.type = waveTypes[index % waveTypes.length];
                
                // 添加微小的频率调制
                osc.frequency.setValueAtTime(freq, ctx.currentTime);
                osc.frequency.linearRampToValueAtTime(freq * 0.98, ctx.currentTime + 0.3);
                
                // 音量包络 - 延迟启动创造层次感
                const startTime = ctx.currentTime + index * 0.02;
                oscGain.gain.setValueAtTime(0, startTime);
                oscGain.gain.linearRampToValueAtTime(0.08 / (index + 1), startTime + 0.03);
                oscGain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);
                
                osc.connect(oscGain);
                oscGain.connect(reverb);
                
                osc.start(startTime);
                osc.stop(startTime + 0.45);
            });
            
            // 添加高频闪烁音效增加神秘感
            const shimmerOsc = ctx.createOscillator();
            const shimmerGain = ctx.createGain();
            shimmerOsc.type = 'sine';
            shimmerOsc.frequency.setValueAtTime(329.63, ctx.currentTime); // E4
            shimmerGain.gain.setValueAtTime(0, ctx.currentTime);
            shimmerGain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.01);
            shimmerGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
            
            shimmerOsc.connect(shimmerGain);
            shimmerGain.connect(reverb);
            
            shimmerOsc.start(ctx.currentTime);
            shimmerOsc.stop(ctx.currentTime + 0.18);
            
            // 主音量控制
            gainNode.gain.setValueAtTime(0, ctx.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
            
        } catch (e) {
            console.log('音效不可用');
        }
    }
    
    // 翻牌音效 - 神秘的卡片翻动声音
    function playCardFlipSound() {
        try {
            const ctx = initAudioContext();
            const reverb = createReverb(ctx);
            const filter = createFilter(ctx, 'bandpass', 600, 2);
            const gainNode = ctx.createGain();
            
            reverb.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            // 创建主翻牌声音 - 类似卡片翻动的刮擦声
            const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.4, ctx.sampleRate);
            const noiseData = noiseBuffer.getChannelData(0);
            for (let i = 0; i < noiseData.length; i++) {
                noiseData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.1));
            }
            
            const noiseSource = ctx.createBufferSource();
            noiseSource.buffer = noiseBuffer;
            
            const noiseFilter = ctx.createBiquadFilter();
            noiseFilter.type = 'highpass';
            noiseFilter.frequency.setValueAtTime(2000, ctx.currentTime);
            noiseFilter.frequency.linearRampToValueAtTime(4000, ctx.currentTime + 0.4);
            
            const noiseGain = ctx.createGain();
            noiseGain.gain.setValueAtTime(0.15, ctx.currentTime);
            noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
            
            noiseSource.connect(noiseFilter);
            noiseFilter.connect(noiseGain);
            noiseGain.connect(reverb);
            noiseSource.start(ctx.currentTime);
            
            // 添加音调变化，模拟卡片翻转时的音调变化
            const osc1 = ctx.createOscillator();
            const osc1Gain = ctx.createGain();
            osc1.type = 'sawtooth';
            osc1.frequency.setValueAtTime(300, ctx.currentTime);
            osc1.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.2);
            osc1.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.4);
            
            osc1Gain.gain.setValueAtTime(0, ctx.currentTime);
            osc1Gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.02);
            osc1Gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
            
            osc1.connect(osc1Gain);
            osc1Gain.connect(reverb);
            osc1.start(ctx.currentTime);
            osc1.stop(ctx.currentTime + 0.5);
            
            // 添加第二个振荡器增加厚度
            const osc2 = ctx.createOscillator();
            const osc2Gain = ctx.createGain();
            osc2.type = 'triangle';
            osc2.frequency.setValueAtTime(450, ctx.currentTime);
            osc2.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.4);
            
            osc2Gain.gain.setValueAtTime(0, ctx.currentTime);
            osc2Gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.03);
            osc2Gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
            
            osc2.connect(osc2Gain);
            osc2Gain.connect(reverb);
            osc2.start(ctx.currentTime);
            osc2.stop(ctx.currentTime + 0.5);
            
            gainNode.gain.setValueAtTime(0, ctx.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.7, ctx.currentTime + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
            
        } catch (e) {
            console.log('音效不可用');
        }
    }
    
    // 完成音效 - 神秘的完成提示音
    function playCompleteSound() {
        try {
            const ctx = initAudioContext();
            const reverb = createReverb(ctx);
            const gainNode = ctx.createGain();
            
            reverb.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            // 使用神秘的大和弦 (Cmaj9)
            const frequencies = [
                130.81,   // C2 根音
                164.81,   // E2 三音
                196.00,   // G2 五音
                261.63,   // C3 八度
                329.63    // E3 九音
            ];
            
            frequencies.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const oscGain = ctx.createGain();
                
                // 使用不同波形增加层次感
                const waveTypes = ['sine', 'sine', 'triangle', 'sine', 'sawtooth'];
                osc.type = waveTypes[i % waveTypes.length];
                
                osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
                
                // 音量包络 - 琶音效果
                const startTime = ctx.currentTime + i * 0.08;
                oscGain.gain.setValueAtTime(0, startTime);
                oscGain.gain.linearRampToValueAtTime(0.08, startTime + 0.05);
                oscGain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.2);
                
                osc.connect(oscGain);
                oscGain.connect(reverb);
                
                osc.start(startTime);
                osc.stop(startTime + 1.3);
            });
            
            // 添加钟声效果
            setTimeout(() => {
                const bellOsc = ctx.createOscillator();
                const bellGain = ctx.createGain();
                bellOsc.type = 'sine';
                bellOsc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
                
                bellGain.gain.setValueAtTime(0, ctx.currentTime);
                bellGain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.01);
                bellGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
                
                bellOsc.connect(bellGain);
                bellGain.connect(reverb);
                
                bellOsc.start(ctx.currentTime);
                bellOsc.stop(ctx.currentTime + 0.65);
            }, 300);
            
            // 主音量控制
            gainNode.gain.setValueAtTime(0, ctx.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 0.03);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
            
        } catch (e) {
            console.log('音效不可用');
        }
    }
    
    return {
        playClick: playClickSound,
        playCardFlip: playCardFlipSound,
        playComplete: playCompleteSound
    };
})();

// 动态生成随机星点
function generateRandomStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    
    // 生成50个随机星点
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star' + (Math.random() > 0.7 ? ' large' : '');
        star.style.cssText = `
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            --duration: ${2 + Math.random() * 3}s;
            animation-delay: ${-Math.random() * 5}s;
        `;
        starsContainer.appendChild(star);
    }
    
    // 随机生成漂浮星尘
    const dustContainer = document.querySelector('.dust-particles');
    if (dustContainer) {
        for (let i = 0; i < 10; i++) {
            const dust = document.createElement('div');
            dust.className = 'dust';
            dust.style.cssText = `
                left: ${Math.random() * 100}%;
                animation-duration: ${20 + Math.random() * 15}s;
                --drift-x: ${(Math.random() - 0.5) * 200}px;
                animation-delay: ${-Math.random() * 30}s;
            `;
            dustContainer.appendChild(dust);
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 显示开屏动画
    playIntroAnimation();
    generateRandomStars();
    
    // 设置默认日期
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    const dateInput = document.getElementById('horoscope-date');
    if (dateInput) {
        dateInput.value = dateStr;
    }
});

// 开屏动画
function playIntroAnimation() {
    const introAnimation = document.getElementById('introAnimation');
    const featureIntro = document.getElementById('featureIntro');
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('.main-content');
    const bgMusicPanel = document.querySelector('.bg-music-panel');
    
    setTimeout(() => {
        introAnimation.classList.add('fade-out');
        
        setTimeout(() => {
            introAnimation.style.display = 'none';
            featureIntro.classList.add('show');
            
            // 功能项折叠/展开交互
            const featureItems = featureIntro.querySelectorAll('.feature-item');
            featureItems.forEach(item => {
                const header = item.querySelector('.feature-item-header');
                if (header) {
                    header.addEventListener('click', () => {
                        const isExpanded = item.classList.contains('expanded');
                        // 关闭其他所有项
                        featureItems.forEach(otherItem => {
                            if (otherItem !== item) {
                                otherItem.classList.remove('expanded');
                            }
                        });
                        // 切换当前项
                        if (isExpanded) {
                            item.classList.remove('expanded');
                        } else {
                            item.classList.add('expanded');
                        }
                    });
                }
            });
            
            const enterBtn = document.getElementById('feature-enter-btn');
            if (enterBtn) {
                enterBtn.addEventListener('click', () => {
                    showMainContent(featureIntro, header, mainContent, bgMusicPanel);
                });
            }
        }, 800);
    }, 5000);
}

// 显示主内容
function showMainContent(featureIntro, header, mainContent, bgMusicPanel) {
    if (!featureIntro.classList.contains('show')) return;
    
    featureIntro.classList.add('fade-out');
    
    setTimeout(() => {
        featureIntro.style.display = 'none';
        featureIntro.classList.remove('show', 'fade-out');
        
        header.classList.add('show');
        mainContent.classList.add('show');
        if (bgMusicPanel) bgMusicPanel.classList.add('show');
        
        // 初始化其他功能
        init();
        
        // 自动播放背景音乐
        autoPlayBackgroundMusic();
    }, 1000);
}

// 自动播放背景音乐
function autoPlayBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const bgMusicBtn = document.getElementById('bgMusicBtn');
    
    if (!bgMusic || !bgMusicBtn) return;
    
    bgMusic.play().then(() => {
        bgMusicBtn.classList.add('playing');
        bgMusicBtn.title = '暂停音乐';
    }).catch(err => {
        console.log('自动播放失败，需要用户交互后才能播放:', err);
    });
}

// 暂停背景音乐
function pauseBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic && !bgMusic.paused) {
        bgMusic.pause();
        window.bgMusicWasPlaying = true;
    }
}

// 恢复背景音乐
function resumeBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic && window.bgMusicWasPlaying) {
        bgMusic.play().catch(err => console.log('恢复背景音乐失败:', err));
        window.bgMusicWasPlaying = false;
    }
}

// 星座运势功能
let selectedZodiac = null;

// 星座运势数据
const zodiacData = {
    aries: { name: '白羊座', symbol: '♈', element: '火' },
    taurus: { name: '金牛座', symbol: '♉', element: '土' },
    gemini: { name: '双子座', symbol: '♊', element: '风' },
    cancer: { name: '巨蟹座', symbol: '♋', element: '水' },
    leo: { name: '狮子座', symbol: '♌', element: '火' },
    virgo: { name: '处女座', symbol: '♍', element: '土' },
    libra: { name: '天秤座', symbol: '♎', element: '风' },
    scorpio: { name: '天蝎座', symbol: '♏', element: '水' },
    sagittarius: { name: '射手座', symbol: '♐', element: '火' },
    capricorn: { name: '摩羯座', symbol: '♑', element: '土' },
    aquarius: { name: '水瓶座', symbol: '♒', element: '风' },
    pisces: { name: '双鱼座', symbol: '♓', element: '水' }
};

// 宜做的事项库
const goodActivities = [
    { activity: '开展新项目或计划', keywords: ['all'] },
    { activity: '处理财务事务', keywords: ['taurus', 'virgo', 'capricorn'] },
    { activity: '社交活动和人际交流', keywords: ['gemini', 'libra', 'aquarius'] },
    { activity: '表达情感，说出心声', keywords: ['cancer', 'scorpio', 'pisces'] },
    { activity: '展现领导才能', keywords: ['aries', 'leo', 'sagittarius'] },
    { activity: '学习新技能或知识', keywords: ['all'] },
    { activity: '进行创意创作', keywords: ['leo', 'aquarius', 'pisces'] },
    { activity: '整理房间和工作环境', keywords: ['taurus', 'virgo', 'capricorn'] },
    { activity: '运动锻炼身体', keywords: ['aries', 'leo', 'sagittarius'] },
    { activity: '冥想和内省', keywords: ['cancer', 'scorpio', 'pisces'] },
    { activity: '大胆表白或示爱', keywords: ['aries', 'leo', 'sagittarius'] },
    { activity: '与朋友聚会', keywords: ['gemini', 'libra', 'aquarius'] },
    { activity: '签订合同或协议', keywords: ['taurus', 'libra', 'capricorn'] },
    { activity: '处理家庭事务', keywords: ['cancer', 'capricorn'] },
    { activity: '规划未来的目标', keywords: ['all'] },
    { activity: '尝试新鲜事物', keywords: ['aries', 'gemini', 'sagittarius'] },
    { activity: '维护现有关系', keywords: ['libra', 'scorpio', 'pisces'] },
    { activity: '投资理财', keywords: ['taurus', 'cancer', 'capricorn'] },
    { activity: '旅行或短途出行', keywords: ['sagittarius', 'aquarius'] },
    { activity: '艺术创作或欣赏', keywords: ['leo', 'pisces', 'aquarius'] }
];

// 不宜做的事项库
const badActivities = [
    { activity: '做重大财务决策', keywords: ['taurus', 'virgo', 'capricorn'] },
    { activity: '冲动消费或购物', keywords: ['aries', 'leo', 'sagittarius'] },
    { activity: '激烈的争论或冲突', keywords: ['cancer', 'libra', 'pisces'] },
    { activity: '隐瞒重要信息', keywords: ['scorpio', 'sagittarius'] },
    { activity: '冒险投机行为', keywords: ['taurus', 'virgo', 'capricorn'] },
    { activity: '过度承诺或说大话', keywords: ['aries', 'leo', 'sagittarius'] },
    { activity: '逃避问题或拖延', keywords: ['all'] },
    { activity: '忽视身体健康', keywords: ['all'] },
    { activity: '过度依赖他人意见', keywords: ['aquarius', 'aries'] },
    { activity: '做出草率的决定', keywords: ['gemini', 'sagittarius', 'pisces'] },
    { activity: '斤斤计较', keywords: ['leo', 'libra', 'aquarius'] },
    { activity: '过度敏感或情绪化', keywords: ['cancer', 'scorpio', 'pisces'] },
    { activity: '单打独斗不求助', keywords: ['libra', 'capricorn'] },
    { activity: '忽视家人和朋友', keywords: ['cancer', 'leo'] },
    { activity: '固执己见不听劝告', keywords: ['taurus', 'leo', 'sagittarius'] },
    { activity: '过于追求完美', keywords: ['virgo', 'capricorn'] },
    { activity: '参与复杂的人际关系', keywords: ['gemini', 'libra'] },
    { activity: '隐瞒真实感受', keywords: ['cancer', 'scorpio', 'pisces'] },
    { activity: '急于求成', keywords: ['taurus', 'virgo', 'capricorn'] },
    { activity: '独断专行', keywords: ['libra', 'aquarius'] }
];

// 根据日期和星座生成运势
function generateLuck(zodiac, date) {
    // 使用日期和星座生成一个伪随机的种子
    const dateNum = parseInt(date.replace(/-/g, ''));
    const zodiacNum = zodiac.charCodeAt(0);
    const seed = dateNum + zodiacNum;
    
    // 使用种子获取伪随机数
    const random = (max) => Math.floor((seed * 9301 + 49297) % 233280) / 233280 * max;
    
    // 获取所有符合条件的宜做的事
    const allGoodItems = goodActivities.filter(item => 
        item.keywords.includes('all') || item.keywords.includes(zodiac)
    );
    
    // 获取所有符合条件的忌做的事
    const allBadItems = badActivities.filter(item => 
        item.keywords.includes('all') || item.keywords.includes(zodiac)
    );
    
    // 如果没有匹配的项目，使用所有通用项目
    const goodItemsToUse = allGoodItems.length > 0 ? allGoodItems : goodActivities.filter(item => item.keywords.includes('all'));
    const badItemsToUse = allBadItems.length > 0 ? allBadItems : badActivities.filter(item => item.keywords.includes('all'));
    
    // 获取宜做的事
    const goodCount = 4 + Math.floor(random(3)); // 4-6条宜做的事
    const goodItems = getRandomItems(goodItemsToUse, Math.min(goodCount, Math.max(goodItemsToUse.length, 4)));
    
    // 获取不宜做的事
    const badCount = 4 + Math.floor(random(3)); // 4-6条不宜做的事
    const badItems = getRandomItems(badItemsToUse, Math.min(badCount, Math.max(badItemsToUse.length, 4)));
    
    return {
        good: goodItems,
        avoid: badItems
    };
}

// 从数组中随机获取指定数量的元素
function getRandomItems(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, arr.length));
}

// 切换标签页
function switchTab(tab) {
    // 切换页面时停止当前播放的音乐
    stopCurrentMusic();
    
    const tarotSection = document.getElementById('tarot-section');
    const horoscopeSection = document.getElementById('horoscope-section');
    const notebookSection = document.getElementById('notebook-section');
    const tarotTab = document.querySelector('[data-tab="tarot"]');
    const horoscopeTab = document.querySelector('[data-tab="horoscope"]');
    const notebookTab = document.querySelector('[data-tab="notebook"]');
    
    // 隐藏所有section
    tarotSection.style.display = 'none';
    horoscopeSection.style.display = 'none';
    notebookSection.style.display = 'none';
    
    // 移除所有active状态
    tarotTab.classList.remove('active');
    horoscopeTab.classList.remove('active');
    notebookTab.classList.remove('active');
    
    // 显示选中的section
    if (tab === 'tarot') {
        tarotSection.style.display = 'block';
        tarotTab.classList.add('active');
    } else if (tab === 'horoscope') {
        horoscopeSection.style.display = 'block';
        horoscopeTab.classList.add('active');
    } else if (tab === 'notebook') {
        notebookSection.style.display = 'block';
        notebookTab.classList.add('active');
        renderCalendar();
    }
    
    SoundManager.playClick();
}

// 切换标签页选择星座
function selectZodiac(zodiac) {
    stopCurrentMusic();
    console.log('selectZodiac called with:', zodiac);
    
    // 移除之前的选中状态
    document.querySelectorAll('.zodiac-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 添加新的选中状态
    const btn = document.querySelector(`[data-zodiac="${zodiac}"]`);
    console.log('found btn:', btn);
    
    if (btn) {
        btn.classList.add('selected');
        selectedZodiac = zodiac;
        console.log('selectedZodiac set to:', selectedZodiac);
    }
    
    SoundManager.playClick();
}

// 查询星座运势
function queryHoroscope() {
    stopCurrentMusic();
    
    try {
        console.log('queryHoroscope called');
        console.log('selectedZodiac:', selectedZodiac);
        
        const dateInput = document.getElementById('horoscope-date');
        console.log('dateInput:', dateInput);
        
        const date = dateInput ? dateInput.value : null;
        console.log('date:', date);
        
        if (!date) {
            alert('请选择日期');
            return;
        }
        
        if (!selectedZodiac) {
            alert('请选择星座');
            return;
        }
        
        SoundManager.playClick();
        
        // 生成运势
        console.log('开始生成运势...');
        const luck = generateLuck(selectedZodiac, date);
        console.log('运势生成结果:', luck);
        
        // 显示结果
        console.log('开始获取DOM元素...');
        const resultHeader = document.getElementById('horoscope-result-header');
        const luckContent = document.getElementById('luck-content');
        const resultDiv = document.getElementById('horoscope-result');
        const musicContainer = document.getElementById('horoscope-music');
        
        console.log('resultHeader:', resultHeader);
        console.log('luckContent:', luckContent);
        console.log('resultDiv:', resultDiv);
        console.log('musicContainer:', musicContainer);
        
        // 检查DOM元素是否存在
        if (!resultHeader || !luckContent || !resultDiv || !musicContainer) {
            console.error('星座运势相关DOM元素缺失');
            return;
        }
        
        const zodiacInfo = zodiacData[selectedZodiac];
        
        // 检查星座数据是否存在
        if (!zodiacInfo) {
            console.error(`未找到星座数据: ${selectedZodiac}`);
            return;
        }
        
        // 格式化日期
        const dateObj = new Date(date);
        if (isNaN(dateObj.getTime())) {
            alert('无效的日期格式');
            return;
        }
        
        const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        const dayOfWeek = weekdays[dateObj.getDay()];
        const formattedDate = `${dateObj.getMonth() + 1}月${dateObj.getDate()}日 星期${dayOfWeek}`;
        
        // 获取星座幸运信息
        const luckyInfo = getLuckyInfo(selectedZodiac, date);
        
        // 检查幸运信息
        if (!luckyInfo || !luckyInfo.luckyNumber || !luckyInfo.luckyDirection || !luckyInfo.luckyColor) {
            console.error('幸运信息生成失败');
            return;
        }
        
        resultHeader.innerHTML = `
            <h3>${zodiacInfo.symbol} ${zodiacInfo.name} - ${formattedDate}</h3>
            <p class="result-date">今日运势指引</p>
            <div class="lucky-details">
                <span>幸运数字: ${luckyInfo.luckyNumber}</span>
                <span>幸运方位: ${luckyInfo.luckyDirection}</span>
                <span>幸运颜色: ${luckyInfo.luckyColor}</span>
            </div>
        `;
        
        // 检查运势数据
        if (!luck || !luck.good || !luck.avoid || !Array.isArray(luck.good) || !Array.isArray(luck.avoid)) {
            console.error('运势数据生成失败', luck);
            return;
        }
        
        // 安全地渲染列表项
        const renderListItems = (items) => {
            if (!Array.isArray(items)) return '<li>数据错误</li>';
            return items.map(item => {
                const activity = item && item.activity ? item.activity : '未知活动';
                return `<li>${activity}</li>`;
            }).join('');
        };
        
        luckContent.innerHTML = `
            <div class="luck-card good">
                <h4>🌟 今日宜做</h4>
                <ul>
                    ${renderListItems(luck.good)}
                </ul>
            </div>
            <div class="luck-card avoid">
                <h4>⚠️ 今日忌做</h4>
                <ul>
                    ${renderListItems(luck.avoid)}
                </ul>
            </div>
            <div class="luck-card tips">
                <h4>💡 今日小贴士</h4>
                <p>${luckyInfo.tip || '今日运势不错，保持好心情！'}</p>
            </div>
        `;
        
        // 获取音乐推荐
        const musicRecommendations = getHoroscopeMusic(selectedZodiac);
        
        // 检查音乐推荐
        if (!musicRecommendations || !Array.isArray(musicRecommendations)) {
            musicContainer.innerHTML = `
                <h4>🎵 今日音乐推荐</h4>
                <p>暂无推荐音乐</p>
            `;
        } else {
            musicContainer.innerHTML = `
                <h4>🎵 今日音乐推荐</h4>
                <div class="music-cards">
                    ${musicRecommendations.map((music, index) => `
                        <div class="music-card" style="animation-delay: ${index * 0.1}s;">
                            <div class="music-title">${music.title || '未知歌曲'}</div>
                            <div class="music-artist">${music.artist || '未知歌手'}</div>
                            <div class="music-mood">${music.mood || '未知风格'}</div>
                            <div class="music-links">
                                ${music.qqUrl ? `<a href="${music.qqUrl}" target="_blank" class="music-link qq"><span>🎵</span> QQ音乐</a>` : ''}
                                ${music.neteaseUrl ? `<a href="${music.neteaseUrl}" target="_blank" class="music-link netease"><span>🎶</span> 网易云音乐</a>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        resultDiv.style.display = 'block';
        resultDiv.classList.add('fade-in');
        
        // 检查父容器状态
        const horoscopeSection = document.getElementById('horoscope-section');
        console.log('horoscopeSection display:', horoscopeSection?.style.display);
        console.log('horoscopeSection classList:', horoscopeSection?.classList);
        
        console.log('运势结果已显示');
        setTimeout(() => {
            console.log('检查运势结果是否仍然存在:', resultDiv.style.display);
            console.log('运势结果内容:', resultDiv.innerHTML);
            console.log('horoscopeSection display after 1s:', horoscopeSection?.style.display);
        }, 1000);
        
        // 滚动到结果区域
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
        console.error('星座运势查询失败:', error);
        alert('星座运势查询出现问题，请重试');
    }
}

// 星座运势音乐推荐数据
const horoscopeMusicData = {
    fire: [
        { title: '怒放的生命', artist: '汪峰', mood: '激昂励志', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/001QZ6lQ2LcQ8I', neteaseUrl: 'https://music.163.com/song?id=256445' },
        { title: '阳光彩虹小白马', artist: '大张伟', mood: '欢快活力', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/0039MnYb3R3D4h', neteaseUrl: 'https://music.163.com/song?id=1329222051' },
        { title: '夜空中最亮的星', artist: '逃跑计划', mood: '追梦希望', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/0029z8sK2gT4gb', neteaseUrl: 'https://music.163.com/song?id=28857033' },
        { title: '平凡之路', artist: '朴树', mood: '坚定前行', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/001V4P353Fd8gI', neteaseUrl: 'https://music.163.com/song?id=29567643' },
        { title: '追梦赤子心', artist: 'GALA', mood: '热血奋斗', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/000tLbOq2x4a8Q', neteaseUrl: 'https://music.163.com/song?id=368715' }
    ],
    earth: [
        { title: '稳稳的幸福', artist: '陈奕迅', mood: '安稳温馨', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/000xJxJb28Wg2E', neteaseUrl: 'https://music.163.com/song?id=26307435' },
        { title: '岁月神偷', artist: '金玟岐', mood: '宁静时光', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/003cI98b2hD6dQ', neteaseUrl: 'https://music.163.com/song?id=28875880' },
        { title: '小幸运', artist: '田馥甄', mood: '温暖感恩', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/0043Z4zS084i4E', neteaseUrl: 'https://music.163.com/song?id=36993769' },
        { title: '成都', artist: '赵雷', mood: '悠闲自在', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/002vOq4W34aB7H', neteaseUrl: 'https://music.163.com/song?id=436514312' },
        { title: '慢慢喜欢你', artist: '莫文蔚', mood: '舒缓浪漫', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/003Pwk9I2Z3m0F', neteaseUrl: 'https://music.163.com/song?id=558586262' }
    ],
    air: [
        { title: '奇妙能力歌', artist: '陈粒', mood: '空灵奇幻', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/003dWX060J3D9H', neteaseUrl: 'https://music.163.com/song?id=28110494' },
        { title: '盗将行', artist: '花粥', mood: '诗意浪漫', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/002q0ZQL38u64U', neteaseUrl: 'https://music.163.com/song?id=568327286' },
        { title: '出山', artist: '花粥', mood: '洒脱自由', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/003Qx40639j9eS', neteaseUrl: 'https://music.163.com/song?id=1331193170' },
        { title: '不染', artist: '毛不易', mood: '清新脱俗', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/003vD8lV3Fj33A', neteaseUrl: 'https://music.163.com/song?id=566704136' },
        { title: '追光者', artist: '岑宁儿', mood: '温柔治愈', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/002G9g7H1cD3dL', neteaseUrl: 'https://music.163.com/song?id=457918683' }
    ],
    water: [
        { title: '水星记', artist: '郭顶', mood: '深情细腻', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/0013M9Xb30V46D', neteaseUrl: 'https://music.163.com/song?id=461600974' },
        { title: '后来', artist: '刘若英', mood: '情感回忆', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/00394VrF3hG86c', neteaseUrl: 'https://music.163.com/song?id=317142' },
        { title: '体面', artist: '于文文', mood: '释然放下', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/004Xh5rL1eM6cP', neteaseUrl: 'https://music.163.com/song?id=566323401' },
        { title: '说散就散', artist: 'JC陈咏桐', mood: '悲伤离别', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/004hHQtM2lI0gC', neteaseUrl: 'https://music.163.com/song?id=545482343' },
        { title: '凉凉', artist: '张碧晨/杨宗纬', mood: '唯美伤感', qqUrl: 'https://y.qq.com/n/ryqq/songDetail/002X4R402hG9dV', neteaseUrl: 'https://music.163.com/song?id=466925339' }
    ]
};

// 获取星座元素类型对应的音乐推荐
function getHoroscopeMusic(zodiac) {
    const elements = {
        aries: 'fire', leo: 'fire', sagittarius: 'fire',
        taurus: 'earth', virgo: 'earth', capricorn: 'earth',
        gemini: 'air', libra: 'air', aquarius: 'air',
        cancer: 'water', scorpio: 'water', pisces: 'water'
    };
    
    const element = elements[zodiac] || 'fire';
    const musicList = horoscopeMusicData[element];
    
    // 随机选择3首
    const shuffled = [...musicList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

// 获取星座幸运信息
function getLuckyInfo(zodiac, date) {
    const dateNum = parseInt(date.replace(/-/g, ''));
    const zodiacNum = zodiac.charCodeAt(0);
    const seed = dateNum + zodiacNum;
    
    const luckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    const directions = ['东方', '西方', '南方', '北方', '东南', '东北', '西南', '西北'];
    const colors = ['红色', '橙色', '黄色', '绿色', '蓝色', '紫色', '粉色', '金色', '银色', '白色', '黑色'];
    
    const luckyNumber = luckyNumbers[seed % luckyNumbers.length];
    const luckyDirection = directions[seed % directions.length];
    const luckyColor = colors[seed % colors.length];
    
    const tips = {
        fire: '今日火象星座运势较旺，适合展现个人魅力，积极主动地推进计划。',
        earth: '今日土象星座运势平稳，适合处理务实的事务，稳扎稳打会有收获。',
        air: '今日风象星座运势活跃，适合社交和沟通，创意想法会不断涌现。',
        water: '今日水象星座运势敏感，适合处理情感事务，直觉力会有所增强。'
    };
    
    const elements = {
        aries: 'fire', leo: 'fire', sagittarius: 'fire',
        taurus: 'earth', virgo: 'earth', capricorn: 'earth',
        gemini: 'air', libra: 'air', aquarius: 'air',
        cancer: 'water', scorpio: 'water', pisces: 'water'
    };
    
    return {
        luckyNumber,
        luckyDirection,
        luckyColor,
        tip: tips[elements[zodiac]] || tips.fire
    };
}

// 重置星座运势
function resetHoroscope() {
    SoundManager.playClick();
    
    const resultDiv = document.getElementById('horoscope-result');
    resultDiv.style.display = 'none';
    
    // 清除选中状态
    selectedZodiac = null;
    document.querySelectorAll('.zodiac-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 滚动到顶部
    document.getElementById('horoscope-section').scrollIntoView({ behavior: 'smooth' });
}

// ========== 心情笔记本功能 ==========

// 笔记本数据存储
let notebookData = JSON.parse(localStorage.getItem('tarotNotebook') || '{}');
let currentCalendarDate = new Date();
let selectedCalendarDate = null;
let lastReadingResult = null; // 保存最后一次占卜结果

// 日历渲染
function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    const monthLabel = document.getElementById('calendar-month');
    
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();
    
    // 显示月份
    monthLabel.textContent = `${year}年${month + 1}月`;
    
    // 清空日历
    grid.innerHTML = '';
    
    // 添加星期头
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    weekDays.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-day-header';
        header.textContent = day;
        grid.appendChild(header);
    });
    
    // 获取本月第一天和最后一天
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDayOfWeek = firstDay.getDay();
    const totalDays = lastDay.getDate();
    
    // 上个月的补充天数
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
        const day = document.createElement('div');
        day.className = 'calendar-day other-month';
        day.innerHTML = `<span class="calendar-day-number">${prevMonthLastDay - i}</span>`;
        grid.appendChild(day);
    }
    
    // 本月的天数
    const today = new Date();
    for (let i = 1; i <= totalDays; i++) {
        const day = document.createElement('div');
        day.className = 'calendar-day';
        
        const dateKey = `${year}-${month + 1}-${i}`;
        
        // 今天标记
        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
            day.classList.add('today');
        }
        
        // 有记录标记
        if (notebookData[dateKey] && notebookData[dateKey].length > 0) {
            day.classList.add('has-record');
            day.innerHTML = `<span class="calendar-day-number">${i}</span><span class="calendar-day-indicator"></span>`;
        } else {
            day.innerHTML = `<span class="calendar-day-number">${i}</span>`;
        }
        
        // 选中状态
        if (selectedCalendarDate === dateKey) {
            day.classList.add('selected');
        }
        
        // 点击事件
        day.onclick = () => selectCalendarDay(dateKey, i);
        
        grid.appendChild(day);
    }
    
    // 下个月的补充天数
    const remainingDays = 42 - (startDayOfWeek + totalDays);
    for (let i = 1; i <= remainingDays; i++) {
        const day = document.createElement('div');
        day.className = 'calendar-day other-month';
        day.innerHTML = `<span class="calendar-day-number">${i}</span>`;
        grid.appendChild(day);
    }
    
    // 更新空状态显示
    updateEmptyState();
}

// 选择日历日期
function selectCalendarDay(dateKey, dayNum) {
    stopCurrentMusic();
    selectedCalendarDate = dateKey;
    renderCalendar();
    showRecordsForDate(dateKey);
    SoundManager.playClick();
}

// 显示指定日期的记录
function showRecordsForDate(dateKey) {
    const recordsDiv = document.getElementById('notebook-records');
    const recordsList = document.getElementById('records-list');
    const recordsDate = document.getElementById('records-date');
    const recordsCount = document.getElementById('records-count');
    
    const records = notebookData[dateKey] || [];
    
    if (records.length === 0) {
        recordsDiv.style.display = 'none';
        return;
    }
    
    recordsDiv.style.display = 'block';
    
    // 解析日期
    const [year, month, day] = dateKey.split('-');
    recordsDate.textContent = `${year}年${month}月${day}日`;
    recordsCount.textContent = `${records.length}条记录`;
    
    recordsList.innerHTML = '';
    
    records.forEach((record, index) => {
        const item = document.createElement('div');
        item.className = 'record-item';
        
        // 牌卡显示
        const cardsHtml = record.cards.map(card => `
            <div class="record-card">
                <span class="record-card-icon">${card.icon}</span>
                <span class="record-card-name">${card.name}</span>
            </div>
        `).join('');
        
        // 音乐列表
        const musicHtml = record.music.map(song => `
            <span class="record-music-item">${song.title} - ${song.artist}</span>
        `).join('');
        
        // 生成音乐（可播放）
        const generatedMusicHtml = (record.generatedMusic && record.generatedMusic.length > 0) ? `
            <div class="record-generated-music">
                <div class="record-music-label">🎵 你的专属定制音乐：</div>
                ${record.generatedMusic.map((gm, gmIndex) => `
                    <div class="record-generated-music-item">
                        <div class="generated-music-info">
                            <span class="generated-music-title">${gm.title}</span>
                            <span class="generated-music-bpm">BPM: ${gm.bpm}</span>
                            ${gm.timbreType ? `<span class="generated-music-timbre">音色: ${gm.timbreType}</span>` : ''}
                        </div>
                        <audio controls preload="metadata" class="record-audio-player" src="${gm.audioUrl}" onplay="pauseBackgroundMusic()" onpause="resumeBackgroundMusic()"></audio></audio>
                    </div>
                `).join('')}
            </div>
        ` : '';
        
        item.innerHTML = `
            <div class="record-header">
                <span class="record-time">${record.time}</span>
                <button class="record-delete-btn" onclick="deleteRecord('${dateKey}', ${index})">删除</button>
            </div>
            <div class="record-question">"${record.question}"</div>
            <div class="record-cards">${cardsHtml}</div>
            <div class="record-summary">${record.summary}</div>
            <div class="record-mood">
                <span class="record-mood-label">心情：</span>
                <span class="record-mood-value">${record.mood || '平静'}</span>
            </div>
            <div class="record-music">
                <div class="record-music-label">🎵 推荐歌单：</div>
                <div class="record-music-list">${musicHtml}</div>
            </div>
            ${generatedMusicHtml}
        `;
        
        recordsList.appendChild(item);
    });
}

// 删除记录
function deleteRecord(dateKey, index) {
    stopCurrentMusic();
    
    if (!notebookData[dateKey]) return;
    
    notebookData[dateKey].splice(index, 1);
    
    // 如果该日期没有记录了，删除该日期键
    if (notebookData[dateKey].length === 0) {
        delete notebookData[dateKey];
    }
    
    // 保存到localStorage
    localStorage.setItem('tarotNotebook', JSON.stringify(notebookData));
    
    // 重新渲染
    renderCalendar();
    showRecordsForDate(dateKey);
    
    SoundManager.playClick();
}

// 上个月
function prevMonth() {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
    renderCalendar();
    SoundManager.playClick();
}

// 下个月
function nextMonth() {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
    renderCalendar();
    SoundManager.playClick();
}

// 更新空状态显示
function updateEmptyState() {
    const emptyDiv = document.getElementById('notebook-empty');
    const hasAnyRecords = Object.keys(notebookData).some(key => notebookData[key].length > 0);
    
    emptyDiv.style.display = hasAnyRecords ? 'none' : 'block';
}

// 更新保存按钮可见性
function updateSaveButtonVisibility() {
    const saveBtn = document.getElementById('save-to-notebook-btn');
    // 只有在有占卜结果时才显示保存按钮
    if (saveBtn) {
        saveBtn.style.display = lastReadingResult ? 'inline-flex' : 'none';
    }
}

// 保存当前占卜结果到笔记本
function saveCurrentReading() {
    if (!lastReadingResult) {
        alert('没有可保存的占卜结果');
        return;
    }
    
    const today = new Date();
    const dateKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    
    // 初始化该日期的记录数组
    if (!notebookData[dateKey]) {
        notebookData[dateKey] = [];
    }
    
    // 检查是否已达到3条记录上限
    if (notebookData[dateKey].length >= 3) {
        alert('今天的记录已达上限（最多3条）');
        return;
    }
    
    // 创建记录
    const record = {
        time: `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`,
        question: lastReadingResult.question,
        cards: lastReadingResult.cards,
        summary: lastReadingResult.summary,
        mood: lastReadingResult.mood,
        music: lastReadingResult.music,
        generatedMusic: generatedMusicList.length > 0 ? [...generatedMusicList] : null,
        timbre: voiceAnalysisResult && voiceAnalysisResult.timbre ? voiceAnalysisResult.timbre : null
    };
    
    notebookData[dateKey].push(record);
    
    // 保存到localStorage
    localStorage.setItem('tarotNotebook', JSON.stringify(notebookData));
    
    // 更新界面
    renderCalendar();
    selectCalendarDay(dateKey, today.getDate());
    
    // 清除lastReadingResult，防止重复保存
    lastReadingResult = null;
    generatedMusicList = [];
    updateSaveButtonVisibility();
    
    alert('✅ 已保存到占卜笔记本');
    SoundManager.playClick();
}

// 在占卜完成后调用，保存占卜结果供笔记本使用
function setLastReadingResult(question, cards, summary, mood, music) {
    lastReadingResult = {
        question: question,
        cards: cards,
        summary: summary,
        mood: mood,
        music: music
    };
    updateSaveButtonVisibility();
}