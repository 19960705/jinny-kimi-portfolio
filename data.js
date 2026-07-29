window.PORTFOLIO = {
  owner: {
    name: "Jinny Lee",
    role: "AI 创作者 · 内容与体验设计",
    statement: "把 AI 变成可体验作品、内容和真实工作流的创作者",
    publicSiteUrl: "https://19960705.github.io/jinny-kimi-portfolio/",
    profiles: [
      {
        label: "X / @megurosumi",
        url: "https://x.com/megurosumi",
      },
      {
        label: "新片场 / Jinny Lee",
        url: "https://www.xinpianchang.com/u10850167",
      },
    ],
  },
  projects: [
    {
      id: "kimi-web-duo",
      number: "01",
      title: "Kimi 网页创作双案例",
      subtitle: "《牡丹亭》×《给阿嫲的情书》",
      category: "Kimi 直接案例 · 网页创作",
      status: "公开可访问",
      statusTone: "live",
      cover: "assets/projects/kimi-web-duo.webp",
      coverAlt: "Kimi 生成的牡丹亭与给阿嫲的情书网页首屏并列画面",
      intro:
        "用 Kimi 把传统文化与电影信息组织成两个气质完全不同、可滚动探索的网页叙事。",
      problem:
        "传统文化资料与电影信息都容易停留在资料堆叠，需要先找到观众愿意进入的情绪入口，再转化成网页节奏。",
      role:
        "主题判断、内容取舍、页面方向、视觉审美、生成反馈与最终验收。",
      ai:
        "Kimi 参与资料组织、页面结构与网页实现；我负责把生成结果收束为可阅读、可探索的完整体验。",
      results: [
        "2 个无需登录即可打开的 Kimi 作品页",
        "覆盖古典戏曲叙事与电影宣传两种内容类型",
        "包含滚动叙事、角色/剧照内容和明确的情绪主线",
      ],
      proof:
        "两个页面已在未登录浏览器中重新打开并截图；页面右下角保留 Kimi Agent 入口。",
      links: [
        {
          label: "打开《牡丹亭》",
          url: "https://s4xrutvnwbltm.ok.kimi.link/",
        },
        {
          label: "打开《给阿嫲的情书》",
          url: "https://vyty3kuefeubk.ok.kimi.link/",
        },
      ],
    },
    {
      id: "infj-midnight-archive",
      number: "02",
      title: "INFJ 午夜档案室",
      subtitle: "把人格标签变成一间可探索的房间",
      category: "互动网页 · 情绪体验",
      status: "公开可访问",
      statusTone: "live",
      cover: "assets/projects/infj-midnight-archive.webp",
      coverAlt: "INFJ 午夜档案室互动网页首屏",
      intro:
        "没有把 INFJ 写成性格测试，而是做成一间只在午夜出现的私人档案室。",
      problem:
        "人格内容常被压缩成标签和金句，缺少让人主动停留、发现和自我投射的体验。",
      role:
        "概念设定、交互机制、文案、视觉方向、实现统筹和公开验收。",
      ai:
        "AI 协助扩展空间隐喻、文案变体与实现细节；我保留最终叙事方向、选择与审美判断。",
      results: [
        "5 个可观察的微光档案",
        "完成全部观察后解锁隐藏门",
        "桌面与手机端均可操作，支持键盘路径",
      ],
      proof:
        "公开生产页已通过桌面、390px 手机、键盘与未登录访问验证。",
      links: [
        {
          label: "进入午夜档案室",
          url: "https://infj-midnight-archive.jilunah.chatgpt.site/",
        },
      ],
    },
    {
      id: "ai-style-studio",
      number: "03",
      title: "AI 风格生成台",
      subtitle: "把“喜欢这种感觉”翻译成可复用的生成语言",
      category: "创作工具 · 风格知识库",
      status: "私有工作台 · 页面截图",
      statusTone: "private",
      cover: "assets/projects/ai-style-studio.webp",
      coverAlt: "AI 风格生成台的风格索引与工作台预览",
      intro:
        "将分散的视觉参考拆成构图、材质、光线、字体和负面约束，再输出可复用的提示词与交付规格。",
      problem:
        "只收藏参考图很难稳定复现，创作者需要知道“为什么像”，以及下一次怎样继续生成。",
      role:
        "工作流设计、风格分类、可迁移机制提炼、测试标准与工具验收。",
      ai:
        "AI 负责快速归纳与生成草案；我负责辨别可迁移机制、排除表面模仿，并决定哪些风格进入正式库。",
      results: [
        "20+ 个 UI、海报与角色风格入口",
        "形成参考采集、机制提炼、提示词、测试图的闭环",
        "支持从风格选择进入具体交付物生成",
      ],
      proof:
        "当前为私有个人工作台；作品集仅展示真实生产页面截图，不提供登录后链接。",
      links: [],
    },
    {
      id: "digital-peony",
      number: "04",
      title: "数字牡丹亭：还魂协议",
      subtitle: "18–19 分钟互动影游可玩样片",
      category: "互动叙事 · 影游原型",
      status: "本地完成 · 未公开",
      statusTone: "local",
      cover: "assets/projects/digital-peony.webp",
      coverAlt: "数字牡丹亭还魂协议互动影游开始页面",
      intro:
        "以《牡丹亭》的“还魂”母题连接记忆修复与身份悬疑，让玩家的每次恢复都可能删除另一个人的真相。",
      problem:
        "AI 影像常只有视觉气氛，没有可参与的叙事结构；需要把选择、回响和结局真正编进体验。",
      role:
        "世界观、分支结构、角色与视觉统筹、交互实现、节奏验收和本地交付。",
      ai:
        "AI 参与剧情展开、风格帧与角色资产生成；我负责连续性、选择后果、节奏与最终可玩性。",
      results: [
        "约 18–19 分钟可玩样片",
        "26 个叙事节点、4 次关键选择、3 个结局",
        "三套视觉场域与本地存档",
      ],
      proof:
        "可直接打开版本与完整工程均已在本地交付；因仍需配音与权利复核，明确标注为未公开。",
      links: [],
    },
    {
      id: "ai-short-films",
      number: "05",
      title: "AI 短片双案例",
      subtitle: "《东方数据女巫》×《人类验证失败》",
      category: "AI 影像 · 短片制作",
      status: "本地成片 · 压缩预览",
      statusTone: "local",
      cover: "assets/projects/ai-short-films.webp",
      coverAlt: "东方数据女巫与人类验证失败短片画面并列",
      intro:
        "两支以界面控制为叙事机关的竖屏短片：一个把鼠标变成恶作剧武器，一个让被验证的人反过来控制系统。",
      problem:
        "AI 视频单镜头容易漂亮但松散，需要建立角色连续性、动作可读性、镜头衔接和声音节奏。",
      role:
        "创意、脚本、镜头拆分、生成审核、拒收标准、剪辑、声音与逐帧质检。",
      ai:
        "生成模型负责角色与镜头素材；我用逐段验收、关键帧对照和拒收清单维持连续性。",
      results: [
        "18.6 秒《东方数据女巫》本地成片",
        "15.1 秒《人类验证失败》连续版成片",
        "保留通过/拒收镜头、关键帧和声音质检证据",
      ],
      proof:
        "网页展示的是从本地最终成片压缩出的 8 秒预览；未包装为已在平台发布。",
      media: [
        {
          src: "assets/media/eastern-data-witch-preview.mp4",
          poster: "assets/projects/ai-short-films.webp",
          label: "《东方数据女巫》8 秒压缩预览",
        },
        {
          src: "assets/media/human-verification-preview.mp4",
          poster: "assets/projects/ai-short-films.webp",
          label: "《人类验证失败》8 秒压缩预览",
        },
      ],
      links: [],
    },
    {
      id: "product-growth",
      number: "06",
      title: "商品图内容增长工具",
      subtitle: "从产品资料到东南亚电商内容方案",
      category: "AI 工具 · 电商内容",
      status: "本地原型 · 真实界面",
      statusTone: "local",
      cover: "assets/projects/product-growth.webp",
      coverAlt: "商品图内容增长工具的产品输入与内容方案界面",
      intro:
        "把商品、人群、平台、国家与漏斗问题放进同一个工作台，输出主图、详情页、短视频和测试建议。",
      problem:
        "电商内容常被拆成孤立提示词，无法回答为谁做、解决哪个漏斗问题、怎样验证。",
      role:
        "业务框架、字段设计、内容模块、市场本地化逻辑、原型实现与演示数据。",
      ai:
        "AI 生成内容草案与图像提示词；我把输出绑定到点击、加购、转化和复盘动作。",
      results: [
        "覆盖 TikTok Shop、Shopee、Lazada",
        "包含主图、详情页、短视频、泰语标题、关键词与测试建议",
        "以演示数据呈现从输入到复盘的完整路径",
      ],
      proof:
        "当前为本地可运行原型；截图来自真实构建页面，示例指标明确作为演示数据。",
      links: [],
    },
    {
      id: "ecommerce-visual-system",
      number: "07",
      title: "AI 电商与海报视觉系统",
      subtitle: "从商品图到文化海报的批量视觉实践",
      category: "视觉创作 · 内容系统",
      status: "本地作品库",
      statusTone: "local",
      cover: "assets/projects/ecommerce-visual-system.webp",
      coverAlt: "电商产品图、视觉网站与文化海报组成的作品拼贴",
      intro:
        "不是单张出图，而是按品类、风格和用途整理可复查的视觉资产，并保留选择标准。",
      problem:
        "批量 AI 视觉容易数量很大、方向很散，最终难以用于商品页、投放或品牌内容。",
      role:
        "创意方向、提示词、选片、修正、分类、版式与作品库整理。",
      ai:
        "AI 负责视觉探索与变体生成；我负责产品一致性、可读性、商业用途判断和最终编排。",
      results: [
        "263 件精选电商与视觉作品进入本地作品库",
        "覆盖商品主图、产品摄影、品牌视觉、中文海报与概念页面",
        "形成原图、缩略图、分类与复核索引",
      ],
      proof:
        "作品数量与分类来自本地可浏览画廊；公开版仅选取自有内容，不包含客户内部资料。",
      links: [],
    },
    {
      id: "design-reference-automation",
      number: "08",
      title: "设计案例参考库自动化",
      subtitle: "把每日灵感变成可追溯的设计知识",
      category: "创作工作流 · 自动化",
      status: "本地知识库",
      statusTone: "local",
      cover: "assets/projects/design-reference-automation.webp",
      coverAlt: "SaaS、数据看板、电商与奢侈品设计参考组成的拼贴",
      intro:
        "每天围绕一个主题搜集、筛选、入库并生成日报，让参考图从“看过”变成以后还能调用的设计知识。",
      problem:
        "收藏夹很快失控；没有来源、标签、判断和主题推进记录，灵感无法复用。",
      role:
        "主题序列、来源规则、质量门槛、标签体系、Eagle 入库验证与日报模板。",
      ai:
        "AI 协助检索、去重、归纳与报告生成；我负责来源可信度、审美取舍和是否进入正式库。",
      results: [
        "连续完成 24 个主题日报",
        "覆盖 SaaS、Dashboard、电商、奢侈品、海报与移动 UI",
        "以实际入库条目、元数据和日报三处证据完成验收",
      ],
      proof:
        "仅以已进入本地 Eagle 与日报的真实条目计数；公开版不暴露私人资料库。",
      links: [],
    },
    {
      id: "honglou-card-gallery",
      number: "09",
      title: "红楼梦 · 十梦卡牌馆",
      subtitle: "十张东方叙事卡牌的互动展馆",
      category: "互动网页 · 文化内容",
      status: "公开可访问",
      statusTone: "live",
      cover: "assets/projects/honglou-card-gallery.webp",
      coverAlt: "红楼梦十梦卡牌馆的十张卡牌与详情面板",
      intro:
        "把十个红楼梦人物与意象做成可切换、可搜索、可自动播放的线上卡牌展馆。",
      problem:
        "文化视觉项目如果只展示图片，很难承载人物、意象和命运线之间的关系。",
      role:
        "策展结构、卡牌设定、视觉方向、交互逻辑、响应式实现与公开发布。",
      ai:
        "AI 参与海报视觉与内容草案；我负责十张卡牌的一致系统、文学语气和展馆体验。",
      results: [
        "10 张主题卡牌与独立命运属性",
        "支持展馆、命运、诗笺三种查看方式",
        "提供搜索、随机一梦、自动播放与移动端交互",
      ],
      proof:
        "GitHub Pages 公开页已在未登录浏览器中重新打开并完成首屏截图。",
      links: [
        {
          label: "进入十梦卡牌馆",
          url: "https://19960705.github.io/honglou-card-gallery/",
        },
      ],
    },
  ],
  capabilities: [
    {
      number: "01",
      title: "产品案例讲解",
      text: "把功能说明翻译成“普通人为什么需要、怎样开始、用完得到什么”的真实案例。",
    },
    {
      number: "02",
      title: "创意内容",
      text: "围绕文化、影视、生活方式与人格兴趣，做网页、短片、海报和互动体验。",
    },
    {
      number: "03",
      title: "用户场景翻译",
      text: "把模糊需求拆成可执行提示、内容结构和验收标准，降低第一次使用 AI 的门槛。",
    },
    {
      number: "04",
      title: "持续公开输出",
      text: "以公开作品、制作复盘与具体教程持续更新，让案例可体验、过程可理解、结果可验证。",
    },
  ],
};
