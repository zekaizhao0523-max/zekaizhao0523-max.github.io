const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-nav a");
const typewriterItems = document.querySelectorAll("[data-typewriter]");
const introButton = document.querySelector(".intro-button");
const languageToggle = document.querySelector(".language-toggle");
const heroSection = document.querySelector("#hero");
const metaDescription = document.querySelector("meta[name='description']");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const languageCopy = {
  zh: {
    lang: "zh-CN",
    title: "赵泽恺 | 数据分析与应用统计",
    description: "赵泽恺的个人主页，展示应用统计、数据分析、商业地产洞察、数据可视化与实践经历。",
    toggleText: "EN",
    toggleLabel: "Switch to English",
    entries: [
      { selector: ".brand", attr: "aria-label", text: "返回概览" },
      { selector: ".brand-mark", attr: "alt", text: "赵泽恺头像" },
      { selector: ".brand span", text: "赵泽恺" },
      { selector: ".site-nav", attr: "aria-label", text: "主要导航" },
      { selector: ".site-nav a[href='#hero']", text: "概览" },
      { selector: ".site-nav a[href='#profile']", text: "关于" },
      { selector: ".site-nav a[href='#experience']", text: "经历" },
      { selector: ".site-nav a[href='#skills']", text: "技能" },
      { selector: ".site-nav a[href='#projects']", text: "项目" },
      { selector: ".site-nav a[href='#practice']", text: "实践" },
      { selector: ".site-nav a[href='#contact']", text: "联系" },
      { selector: ".intro-section", attr: "aria-label", text: "首页入口" },
      { selector: ".intro-title-group", attr: "aria-label", text: "你好啊！我是赵泽恺" },
      { selector: ".intro-title-group .intro-title:first-child", typewriter: "你好啊！" },
      { selector: ".intro-title-name", typewriter: "我是赵泽恺" },
      { selector: ".intro-text", typewriter: "欢迎访问我的个人主页。这里汇聚了我的教育经历、工作实践、技能成长和项目探索。关于我如何学习、创造、突破，答案都在这里。" },
      { selector: ".intro-button", text: "进入主页" },
      { selector: ".hero .eyebrow", text: "Data Science · LLM Analytics · Business Decisioning" },
      { selector: ".hero-content h1", text: "赵泽恺" },
      { selector: ".hero-lead", html: "上海财经大学应用统计研究生，面向 <span class=\"text-highlight\">AI 驱动的数据科学</span>、<span class=\"text-highlight\">商业策略验证</span>、<span class=\"text-highlight\">因果推断</span> 与 <span class=\"text-highlight\">LLM + 数据分析</span> 场景，擅长用 Python / SQL / 统计建模把复杂业务问题拆解为可验证、可落地的数据方案。" },
      { selector: ".hero-bullets li:nth-child(1)", text: "统计学与数据科学训练扎实，覆盖建模、机器学习、时间序列、空间统计与 NLP。" },
      { selector: ".hero-bullets li:nth-child(2)", text: "有商业地产真实业务数据分析经历，参与从数据采集、指标构建到可视化交付的闭环。" },
      { selector: ".hero-bullets li:nth-child(3)", text: "独立搭建 AI Agent 与体育数据分析作品，覆盖业务规则、数据接口、可视化交互与部署交付。" },
      { selector: ".hero-actions", attr: "aria-label", text: "联系方式" },
      { selector: ".hero-actions .primary", text: "发送邮件" },
      { selector: ".hero-actions .secondary", text: "电话联系" },
      { selector: ".hero-visual", attr: "aria-label", text: "数据能力概览" },
      { selector: ".radar-head .metric-label", text: "Capability Radar" },
      { selector: ".radar-head strong", text: "能力雷达图" },
      { selector: "#radar-title", text: "赵泽恺能力雷达图" },
      { selector: "#radar-desc", text: "展示外语交流、团队协作、组织领导、学习迭代、项目执行和问题创新六项能力。" },
      { selector: ".radar-labels text:nth-of-type(1)", text: "外语交流" },
      { selector: ".radar-labels text:nth-of-type(2)", text: "团队协作" },
      { selector: ".radar-labels text:nth-of-type(3)", text: "组织领导" },
      { selector: ".radar-labels text:nth-of-type(4)", text: "学习迭代" },
      { selector: ".radar-labels text:nth-of-type(5)", text: "项目执行" },
      { selector: ".radar-labels text:nth-of-type(6)", text: "问题创新" },
      { selector: ".radar-legend", attr: "aria-label", text: "能力说明" },
      { selector: ".radar-legend span:nth-child(1)", html: "<i></i>能力轮廓线" },
      { selector: ".radar-legend span:nth-child(2)", text: "基于个人自我评价" },
      { selector: "#profile .section-kicker", text: "Profile" },
      { selector: "#profile h2", text: "用统计建模与 AI 工具，把业务问题变成可解释、可验证、可复用的数据科学方案。" },
      { selector: ".profile-copy li:nth-child(1)", html: "<span class=\"text-highlight\">专业背景：</span>上海财经大学应用统计研究生，厦门大学数据科学与大数据技术本科，具备统计学、经济学与计算机复合背景。" },
      { selector: ".profile-copy li:nth-child(2)", html: "<span class=\"text-highlight\">技术栈：</span>熟悉 Python / SQL / R，擅长数据挖掘、数据清洗、特征构建、统计建模、机器学习调用与可视化表达。" },
      { selector: ".profile-copy li:nth-child(3)", html: "<span class=\"text-highlight\">实习经历：</span>有商业地产分析实习经历，主导了客群画像、竞品指标、通勤网络和区域洞察等核心业务分析。" },
      { selector: ".profile-copy li:nth-child(4)", html: "<span class=\"text-highlight\">项目实践：</span>独立开发榴莲电商 AI 售后 Agent 与 CheckMyStat NBA 数据分析平台，持续把 LLM、规则引擎、API 数据与可视化界面做成可演示作品。" },
      { selector: "#education .section-kicker", text: "Education" },
      { selector: "#education .section-heading h2", text: "教育背景" },
      { selector: "#education .timeline-item:nth-child(1) .timeline-date", text: "2024.7 - 至今" },
      { selector: "#education .timeline-item:nth-child(1) h3", text: "上海财经大学 · 统计与管理学院" },
      { selector: "#education .timeline-item:nth-child(1) li:nth-child(1)", html: "研究生，应用统计专业，方向为 <span class=\"text-highlight\">大数据技术与经济统计</span>。" },
      { selector: "#education .timeline-item:nth-child(1) li:nth-child(2)", text: "重点训练：统计建模、机器学习、时间序列、空间统计、NLP 与经济指数应用。" },
      { selector: "#education .timeline-item:nth-child(1) .tag-list span:nth-child(1)", text: "统计理论与方法" },
      { selector: "#education .timeline-item:nth-child(1) .tag-list span:nth-child(2)", text: "数据分析与统计建模" },
      { selector: "#education .timeline-item:nth-child(1) .tag-list span:nth-child(3)", text: "时间序列与空间统计" },
      { selector: "#education .timeline-item:nth-child(1) .tag-list span:nth-child(4)", text: "大数据挖掘" },
      { selector: "#education .timeline-item:nth-child(1) .tag-list span:nth-child(5)", text: "自然语言处理" },
      { selector: "#education .timeline-item:nth-child(2) .timeline-date", text: "2020.9 - 2024.6" },
      { selector: "#education .timeline-item:nth-child(2) h3", text: "厦门大学 · 经济学院" },
      { selector: "#education .timeline-item:nth-child(2) li:nth-child(1)", text: "本科，数据科学与大数据技术国际化试验班，完成数据科学、数据库、机器学习与经济学基础训练。" },
      { selector: "#education .timeline-item:nth-child(2) li:nth-child(2)", text: "加权平均分 83/100，担任 2020 级生活委员，长期承担班级沟通与组织协调工作。" },
      { selector: "#education .timeline-item:nth-child(2) .tag-list span:nth-child(1)", text: "概率论" },
      { selector: "#education .timeline-item:nth-child(2) .tag-list span:nth-child(2)", text: "数理统计" },
      { selector: "#education .timeline-item:nth-child(2) .tag-list span:nth-child(3)", text: "机器学习" },
      { selector: "#education .timeline-item:nth-child(2) .tag-list span:nth-child(4)", text: "数据库系统" },
      { selector: "#education .timeline-item:nth-child(2) .tag-list span:nth-child(5)", text: "运筹学" },
      { selector: "#education .timeline-item:nth-child(2) .tag-list span:nth-child(6)", text: "经济学" },
      { selector: "#experience .section-kicker", text: "Experience" },
      { selector: "#experience .section-heading h2", text: "实习经历" },
      { selector: "#experience .feature-card .role-time", text: "2024.10 - 2025.10" },
      { selector: "#experience .feature-card h3", text: "上海原瀚数据科技有限公司" },
      { selector: "#experience .role-title", text: "商业地产项目数据分析师 · 数据驱动洞察 / 指标体系创新 / 可视化决策支持" },
      { selector: "#experience .feature-summary li:nth-child(1)", html: "围绕真实商业地产项目，参与 <span class=\"text-highlight\">数据采集 - 指标构建 - 洞察分析 - 可视化交付</span> 的业务闭环，将分散信息沉淀为可复用的分析口径。" },
      { selector: "#experience .feature-summary li:nth-child(2)", html: "通过城市经济、品牌、交通与客群数据的结构化分析，为投资研判和运营策略提供 <span class=\"text-highlight\">数据驱动的判断依据</span>。" },
      { selector: ".experience-grid > div:nth-child(1) h4", text: "数据挖掘与分析" },
      { selector: ".experience-grid > div:nth-child(1) p", text: "挖掘与分析统计公报、微信小程序、大众点评等多源数据，深度挖掘与清洗非结构化与分散数据，构建清晰多维表单。" },
      { selector: ".experience-grid > div:nth-child(2) h4", text: "指标体系创新" },
      { selector: ".experience-grid > div:nth-child(2) p", text: "使用 Python / SQL 构建本地通勤率、平均通勤距离、客群画像等指标，将模糊业务问题转化为可比较、可验证的量化口径。" },
      { selector: ".experience-grid > div:nth-child(3) h4", text: "空间洞察贡献" },
      { selector: ".experience-grid > div:nth-child(3) p", text: "运用 geopandas 绘制交通网络、缓冲区与栅格数据，识别区域可达性、通勤结构与潜在客群，为区位判断提供数据证据。" },
      { selector: ".experience-grid > div:nth-child(4) h4", text: "决策可视化交付" },
      { selector: ".experience-grid > div:nth-child(4) p", text: "使用 Tableau 输出趋势图、分布图与分析看板，把分析结论转化为业务方可快速理解和复用的决策材料。" },
      { selector: "#skills .section-kicker", text: "Skills" },
      { selector: "#skills .section-heading h2", text: "技能矩阵" },
      { selector: ".skill-grid article:nth-child(1) .skill-label", text: "Analysis" },
      { selector: ".skill-grid article:nth-child(1) h3", text: "数据分析" },
      { selector: ".skill-grid article:nth-child(1) li:nth-child(1)", text: "Python / SQL / R：数据清洗、特征构建、统计分析与自动化处理。" },
      { selector: ".skill-grid article:nth-child(1) li:nth-child(2)", text: "Matlab / Stata / C：课程与研究场景中的建模、计算和计量分析。" },
      { selector: ".skill-grid article:nth-child(2) .skill-label", text: "Modelling" },
      { selector: ".skill-grid article:nth-child(2) h3", text: "建模方法" },
      { selector: ".skill-grid article:nth-child(2) li:nth-child(1)", text: "统计建模、机器学习模型调用与调参，理解模型评估与特征解释。" },
      { selector: ".skill-grid article:nth-child(2) li:nth-child(2)", text: "了解 CNN、大模型分类、LLM 与 Attention 机制基础。" },
      { selector: ".skill-grid article:nth-child(3) .skill-label", text: "Visualization" },
      { selector: ".skill-grid article:nth-child(3) h3", text: "可视化与办公" },
      { selector: ".skill-grid article:nth-child(3) li:nth-child(1)", text: "Tableau / Excel：指标看板、趋势拆解、分布分析与可视化报告。" },
      { selector: ".skill-grid article:nth-child(3) li:nth-child(2)", text: "PPT / Word：面向业务方的结构化结论表达与汇报材料输出。" },
      { selector: ".skill-grid article:nth-child(4) .skill-label", text: "Language" },
      { selector: ".skill-grid article:nth-child(4) h3", text: "语言能力" },
      { selector: ".skill-grid article:nth-child(4) li:nth-child(1)", text: "专业课全英授课，CET-6 565，全国大学生英语竞赛国家二等奖。" },
      { selector: ".skill-grid article:nth-child(4) li:nth-child(2)", text: "能够阅读英文技术资料，并完成中英文分析材料整理。" },
      { selector: "#projects .section-kicker", text: "Selected Projects" },
      { selector: "#projects .section-heading h2", text: "项目成果" },
      { selector: ".project-card:nth-child(1) .project-type", text: "AI Agent · LangGraph" },
      { selector: ".project-card:nth-child(1) .project-topline a", text: "项目链接" },
      { selector: ".project-card:nth-child(1) h3", text: "榴莲电商 AI 售后 Agent" },
      { selector: ".project-card:nth-child(1) img", attr: "alt", text: "榴莲电商 AI 售后 Agent 对话界面 demo" },
      { selector: ".project-card:nth-child(1) p", text: "基于 LangGraph、大模型接口与规则引擎构建电商智能助手，把用户售后咨询自动转化为问题分类、优先级、缺失凭证、命中规则、处理建议、客服话术和转人工决策。" },
      { selector: ".project-card:nth-child(1) li:nth-child(1)", text: "实现 rules / langgraph 双模式，无 API Key 也可完成演示，适合作品集与面试现场展示。" },
      { selector: ".project-card:nth-child(1) li:nth-child(2)", text: "使用 FastAPI + SSE + 原生 H5 对话前端，配合 PostgreSQL 持久化会话、记忆、商品与订单演示数据。" },
      { selector: ".project-card:nth-child(1) li:nth-child(3)", text: "封装溯源、商品、订单、售后分诊等业务工具，并提供 LangGraph Studio 可视化入口。" },
      { selector: ".project-card:nth-child(1) .tag-list span:nth-child(1)", text: "LangGraph" },
      { selector: ".project-card:nth-child(1) .tag-list span:nth-child(2)", text: "FastAPI" },
      { selector: ".project-card:nth-child(1) .tag-list span:nth-child(3)", text: "PostgreSQL" },
      { selector: ".project-card:nth-child(1) .tag-list span:nth-child(4)", text: "SSE" },
      { selector: ".project-card:nth-child(1) .tag-list span:nth-child(5)", text: "Rules Engine" },
      { selector: ".project-card:nth-child(2) .project-type", text: "Sports Analytics · Data Platform" },
      { selector: ".project-card:nth-child(2) .project-topline a", text: "项目链接" },
      { selector: ".project-card:nth-child(2) h3", text: "CheckMyStat NBA 数据分析平台" },
      { selector: ".project-card:nth-child(2) img", attr: "alt", text: "CheckMyStat NBA 数据分析平台移动端 demo" },
      { selector: ".project-card:nth-child(2) p", text: "面向 NBA 球员、球队、赛程和对位场景，使用 NBA Stats / Live 数据构建数据分析网站原型，提供球员档案、投篮热区、传球网络、排行榜、球队档案与伤病影响分析。" },
      { selector: ".project-card:nth-child(2) li:nth-child(1)", text: "设计球员检索、赛季查询、投篮明细、联盟热区基准、赛程、阵容和球队数据等 API。" },
      { selector: ".project-card:nth-child(2) li:nth-child(2)", text: "实现投篮分布、热力图、热区/冷区、对位散点、月历赛程与中英文界面等交互体验。" },
      { selector: ".project-card:nth-child(2) li:nth-child(3)", text: "补齐 Docker、Render、Nginx/systemd、健康检查、限流、安全响应头、preflight 与 smoke test 发布链路。" },
      { selector: ".project-card:nth-child(2) .tag-list span:nth-child(1)", text: "Python" },
      { selector: ".project-card:nth-child(2) .tag-list span:nth-child(2)", text: "JavaScript" },
      { selector: ".project-card:nth-child(2) .tag-list span:nth-child(3)", text: "NBA Stats API" },
      { selector: ".project-card:nth-child(2) .tag-list span:nth-child(4)", text: "Docker" },
      { selector: ".project-card:nth-child(2) .tag-list span:nth-child(5)", text: "Data Viz" },
      { selector: "#practice .section-kicker", text: "Campus & Practice" },
      { selector: "#practice .section-heading h2", text: "校园与课外实践" },
      { selector: ".practice-card:nth-child(1) h3", text: "厦门大学数据科学与大数据技术本科 2020 级生活委员" },
      { selector: ".practice-card:nth-child(1) li:nth-child(1)", text: "负责班费管理、班级活动组织、安全卫生协助与学校规定传达。" },
      { selector: ".practice-card:nth-child(1) li:nth-child(2)", text: "长期承担班级沟通、任务协调和执行跟进，提升团队协作与组织能力。" },
      { selector: ".practice-card:nth-child(2) h3", text: "厦门大学“拾时有你”社会实践队" },
      { selector: ".practice-card:nth-child(2) li:nth-child(1)", text: "担任联络组组长兼数据分析员，参与路线规划、政府部门联络与实地访谈。" },
      { selector: ".practice-card:nth-child(2) li:nth-child(2)", html: "基于 <span class=\"text-highlight\">TOPSIS-熵权法</span> 构建时间币发放体系，将调研信息转化为量化评价方案。" },
      { selector: "#contact .section-kicker", text: "Contact" },
      { selector: "#contact h2", text: "期待参与 AI 驱动的数据科学项目，把数据洞察真正推向业务决策。" },
      { selector: "footer span:nth-child(1)", text: "© 2026 赵泽恺" },
      { selector: "footer span:nth-child(2)", text: "Personal Homepage" }
    ]
  },
  en: {
    lang: "en",
    title: "Zekai Zhao | Data Analytics & Applied Statistics",
    description: "Zekai Zhao's personal homepage, featuring applied statistics, data analytics, commercial real estate insight, visualization, and project experience.",
    toggleText: "CN",
    toggleLabel: "切换到中文",
    entries: [
      { selector: ".brand", attr: "aria-label", text: "Back to overview" },
      { selector: ".brand-mark", attr: "alt", text: "Portrait of Zekai Zhao" },
      { selector: ".brand span", text: "Zekai Zhao" },
      { selector: ".site-nav", attr: "aria-label", text: "Main navigation" },
      { selector: ".site-nav a[href='#hero']", text: "Overview" },
      { selector: ".site-nav a[href='#profile']", text: "About" },
      { selector: ".site-nav a[href='#experience']", text: "Experience" },
      { selector: ".site-nav a[href='#skills']", text: "Skills" },
      { selector: ".site-nav a[href='#projects']", text: "Projects" },
      { selector: ".site-nav a[href='#practice']", text: "Practice" },
      { selector: ".site-nav a[href='#contact']", text: "Contact" },
      { selector: ".intro-section", attr: "aria-label", text: "Landing entrance" },
      { selector: ".intro-title-group", attr: "aria-label", text: "Hello, I am Zekai Zhao" },
      { selector: ".intro-title-group .intro-title:first-child", typewriter: "Hello there." },
      { selector: ".intro-title-name", typewriter: "I am Zekai Zhao" },
      { selector: ".intro-text", typewriter: "Welcome to my personal homepage. Here you will find my education, hands-on work, growing skill set, and project explorations. How I learn, build, and push past the next threshold is all here." },
      { selector: ".intro-button", text: "Enter Site" },
      { selector: ".hero .eyebrow", text: "Data Science · LLM Analytics · Business Decisioning" },
      { selector: ".hero-content h1", text: "Zekai Zhao" },
      { selector: ".hero-lead", html: "Graduate student in Applied Statistics at SUFE, focused on <span class=\"text-highlight\">AI-driven data science</span>, <span class=\"text-highlight\">business strategy validation</span>, <span class=\"text-highlight\">causal inference</span>, and <span class=\"text-highlight\">LLM-powered analytics</span>. I use Python, SQL, and statistical modelling to turn complex business questions into testable, reusable data solutions." },
      { selector: ".hero-bullets li:nth-child(1)", text: "Solid training in statistics and data science, spanning modelling, machine learning, time series, spatial statistics, and NLP." },
      { selector: ".hero-bullets li:nth-child(2)", text: "Hands-on experience with real commercial real estate analytics, from data collection and metric design to visualization delivery." },
      { selector: ".hero-bullets li:nth-child(3)", text: "Built independent AI Agent and sports analytics projects across business rules, data APIs, visualization, and deployment delivery." },
      { selector: ".hero-actions", attr: "aria-label", text: "Contact methods" },
      { selector: ".hero-actions .primary", text: "Email Me" },
      { selector: ".hero-actions .secondary", text: "Call Me" },
      { selector: ".hero-visual", attr: "aria-label", text: "Data capability overview" },
      { selector: ".radar-head .metric-label", text: "Capability Radar" },
      { selector: ".radar-head strong", text: "Capability Radar" },
      { selector: "#radar-title", text: "Zekai Zhao capability radar" },
      { selector: "#radar-desc", text: "A six-dimensional view of communication, teamwork, leadership, learning agility, execution, and problem solving." },
      { selector: ".radar-labels text:nth-of-type(1)", text: "Communication" },
      { selector: ".radar-labels text:nth-of-type(2)", text: "Teamwork" },
      { selector: ".radar-labels text:nth-of-type(3)", text: "Leadership" },
      { selector: ".radar-labels text:nth-of-type(4)", text: "Learning" },
      { selector: ".radar-labels text:nth-of-type(5)", text: "Execution" },
      { selector: ".radar-labels text:nth-of-type(6)", text: "Innovation" },
      { selector: ".radar-legend", attr: "aria-label", text: "Capability notes" },
      { selector: ".radar-legend span:nth-child(1)", html: "<i></i>Capability outline" },
      { selector: ".radar-legend span:nth-child(2)", text: "Based on self-assessment" },
      { selector: "#profile .section-kicker", text: "Profile" },
      { selector: "#profile h2", text: "I use statistical modelling and AI tools to turn business questions into interpretable, testable, reusable data-science solutions." },
      { selector: ".profile-copy li:nth-child(1)", html: "<span class=\"text-highlight\">Background:</span> Graduate student in Applied Statistics at SUFE, with a B.S. in Data Science and Big Data Technology from Xiamen University, trained across statistics, economics, and computer science." },
      { selector: ".profile-copy li:nth-child(2)", html: "<span class=\"text-highlight\">Tech stack:</span> Comfortable with Python, SQL, and R; strong in data mining, cleaning, feature engineering, statistical modelling, machine-learning workflows, and visual storytelling." },
      { selector: ".profile-copy li:nth-child(3)", html: "<span class=\"text-highlight\">Internship:</span> Worked in commercial real estate analytics and led core analysis around customer profiling, competitor metrics, commuting networks, and regional insight." },
      { selector: ".profile-copy li:nth-child(4)", html: "<span class=\"text-highlight\">Project practice:</span> Independently built a durian e-commerce AI after-sales Agent and the CheckMyStat NBA analytics platform, turning LLMs, rule engines, API data, and visual interfaces into demo-ready products." },
      { selector: "#education .section-kicker", text: "Education" },
      { selector: "#education .section-heading h2", text: "Education" },
      { selector: "#education .timeline-item:nth-child(1) .timeline-date", text: "2024.7 - Present" },
      { selector: "#education .timeline-item:nth-child(1) h3", text: "Shanghai University of Finance and Economics · School of Statistics and Management" },
      { selector: "#education .timeline-item:nth-child(1) li:nth-child(1)", html: "Graduate student in Applied Statistics, specializing in <span class=\"text-highlight\">big data technology and economic statistics</span>." },
      { selector: "#education .timeline-item:nth-child(1) li:nth-child(2)", text: "Core training: statistical modelling, machine learning, time series, spatial statistics, NLP, and economic index applications." },
      { selector: "#education .timeline-item:nth-child(1) .tag-list span:nth-child(1)", text: "Statistical Theory" },
      { selector: "#education .timeline-item:nth-child(1) .tag-list span:nth-child(2)", text: "Data Analysis & Modelling" },
      { selector: "#education .timeline-item:nth-child(1) .tag-list span:nth-child(3)", text: "Time Series & Spatial Statistics" },
      { selector: "#education .timeline-item:nth-child(1) .tag-list span:nth-child(4)", text: "Big Data Mining" },
      { selector: "#education .timeline-item:nth-child(1) .tag-list span:nth-child(5)", text: "Natural Language Processing" },
      { selector: "#education .timeline-item:nth-child(2) .timeline-date", text: "2020.9 - 2024.6" },
      { selector: "#education .timeline-item:nth-child(2) h3", text: "Xiamen University · School of Economics" },
      { selector: "#education .timeline-item:nth-child(2) li:nth-child(1)", text: "B.S. in Data Science and Big Data Technology, international track, with coursework across data science, databases, machine learning, and economics." },
      { selector: "#education .timeline-item:nth-child(2) li:nth-child(2)", text: "Weighted average score: 83/100. Served as class life affairs representative, supporting communication, coordination, and day-to-day organization." },
      { selector: "#education .timeline-item:nth-child(2) .tag-list span:nth-child(1)", text: "Probability" },
      { selector: "#education .timeline-item:nth-child(2) .tag-list span:nth-child(2)", text: "Mathematical Statistics" },
      { selector: "#education .timeline-item:nth-child(2) .tag-list span:nth-child(3)", text: "Machine Learning" },
      { selector: "#education .timeline-item:nth-child(2) .tag-list span:nth-child(4)", text: "Database Systems" },
      { selector: "#education .timeline-item:nth-child(2) .tag-list span:nth-child(5)", text: "Operations Research" },
      { selector: "#education .timeline-item:nth-child(2) .tag-list span:nth-child(6)", text: "Economics" },
      { selector: "#experience .section-kicker", text: "Experience" },
      { selector: "#experience .section-heading h2", text: "Internship Experience" },
      { selector: "#experience .feature-card .role-time", text: "2024.10 - 2025.10" },
      { selector: "#experience .feature-card h3", text: "Shanghai Yuanhan Data Technology Co., Ltd." },
      { selector: "#experience .role-title", text: "Commercial Real Estate Data Analyst · Data-driven Insight / Metric Innovation / Decision Visualization" },
      { selector: "#experience .feature-summary li:nth-child(1)", html: "Worked on real commercial real estate projects across the full loop of <span class=\"text-highlight\">data collection - metric design - insight analysis - visualization delivery</span>, turning scattered information into reusable analytical frameworks." },
      { selector: "#experience .feature-summary li:nth-child(2)", html: "Structured city economy, brand, transit, and customer data to provide <span class=\"text-highlight\">data-backed evidence</span> for investment judgment and operational strategy." },
      { selector: ".experience-grid > div:nth-child(1) h4", text: "Data Mining & Analysis" },
      { selector: ".experience-grid > div:nth-child(1) p", text: "Mined and analyzed multi-source data from statistical bulletins, WeChat mini-programs, Dianping, and other channels; cleaned scattered and unstructured data into clear, multi-dimensional tables." },
      { selector: ".experience-grid > div:nth-child(2) h4", text: "Metric-System Innovation" },
      { selector: ".experience-grid > div:nth-child(2) p", text: "Built metrics such as local commuting rate, average commute distance, and customer profiles with Python and SQL, turning fuzzy business questions into comparable and testable analytical measures." },
      { selector: ".experience-grid > div:nth-child(3) h4", text: "Spatial Insight Contribution" },
      { selector: ".experience-grid > div:nth-child(3) p", text: "Used geopandas to map transit networks, buffer zones, and grid data, identifying accessibility, commuting structure, and potential customer groups to support location judgment." },
      { selector: ".experience-grid > div:nth-child(4) h4", text: "Decision Visualization" },
      { selector: ".experience-grid > div:nth-child(4) p", text: "Delivered trend charts, distribution views, and analytical dashboards in Tableau, making insights easier for business stakeholders to understand and reuse." },
      { selector: "#skills .section-kicker", text: "Skills" },
      { selector: "#skills .section-heading h2", text: "Skill Matrix" },
      { selector: ".skill-grid article:nth-child(1) .skill-label", text: "Analysis" },
      { selector: ".skill-grid article:nth-child(1) h3", text: "Data Analysis" },
      { selector: ".skill-grid article:nth-child(1) li:nth-child(1)", text: "Python / SQL / R: data cleaning, feature engineering, statistical analysis, and automated processing." },
      { selector: ".skill-grid article:nth-child(1) li:nth-child(2)", text: "Matlab / Stata / C: modelling, computation, and econometric analysis in coursework and research contexts." },
      { selector: ".skill-grid article:nth-child(2) .skill-label", text: "Modelling" },
      { selector: ".skill-grid article:nth-child(2) h3", text: "Modelling Methods" },
      { selector: ".skill-grid article:nth-child(2) li:nth-child(1)", text: "Statistical modelling, machine-learning model calls and tuning, with attention to evaluation and feature interpretation." },
      { selector: ".skill-grid article:nth-child(2) li:nth-child(2)", text: "Familiar with CNNs, LLM-based classification, and the basics of Attention mechanisms." },
      { selector: ".skill-grid article:nth-child(3) .skill-label", text: "Visualization" },
      { selector: ".skill-grid article:nth-child(3) h3", text: "Visualization & Productivity" },
      { selector: ".skill-grid article:nth-child(3) li:nth-child(1)", text: "Tableau / Excel: metric dashboards, trend breakdowns, distribution analysis, and visual reports." },
      { selector: ".skill-grid article:nth-child(3) li:nth-child(2)", text: "PPT / Word: structured business-facing conclusions and presentation materials." },
      { selector: ".skill-grid article:nth-child(4) .skill-label", text: "Language" },
      { selector: ".skill-grid article:nth-child(4) h3", text: "Language" },
      { selector: ".skill-grid article:nth-child(4) li:nth-child(1)", text: "Completed English-taught major courses, CET-6 565, and won a national second prize in the National English Competition for College Students." },
      { selector: ".skill-grid article:nth-child(4) li:nth-child(2)", text: "Able to read English technical materials and prepare bilingual analytical documents." },
      { selector: "#projects .section-kicker", text: "Selected Projects" },
      { selector: "#projects .section-heading h2", text: "Project Outcomes" },
      { selector: ".project-card:nth-child(1) .project-type", text: "AI Agent · LangGraph" },
      { selector: ".project-card:nth-child(1) .project-topline a", text: "Project Link" },
      { selector: ".project-card:nth-child(1) h3", text: "Durian E-commerce AI After-sales Agent" },
      { selector: ".project-card:nth-child(1) img", attr: "alt", text: "Durian e-commerce AI after-sales Agent chat interface demo" },
      { selector: ".project-card:nth-child(1) p", text: "Built an e-commerce assistant with LangGraph, LLM-compatible APIs, and a rules engine, turning after-sales questions into issue type, priority, missing evidence, matched rules, handling advice, service scripts, and human-handoff decisions." },
      { selector: ".project-card:nth-child(1) li:nth-child(1)", text: "Implemented rules / langgraph dual modes so the demo can run fully without an API key, making it practical for portfolio and interview settings." },
      { selector: ".project-card:nth-child(1) li:nth-child(2)", text: "Used FastAPI, SSE, and a native H5 chat UI, with PostgreSQL persisting sessions, memory, products, and order demo data." },
      { selector: ".project-card:nth-child(1) li:nth-child(3)", text: "Wrapped traceability, product, order, and after-sales triage tools, plus a LangGraph Studio visualization entry." },
      { selector: ".project-card:nth-child(1) .tag-list span:nth-child(1)", text: "LangGraph" },
      { selector: ".project-card:nth-child(1) .tag-list span:nth-child(2)", text: "FastAPI" },
      { selector: ".project-card:nth-child(1) .tag-list span:nth-child(3)", text: "PostgreSQL" },
      { selector: ".project-card:nth-child(1) .tag-list span:nth-child(4)", text: "SSE" },
      { selector: ".project-card:nth-child(1) .tag-list span:nth-child(5)", text: "Rules Engine" },
      { selector: ".project-card:nth-child(2) .project-type", text: "Sports Analytics · Data Platform" },
      { selector: ".project-card:nth-child(2) .project-topline a", text: "Project Link" },
      { selector: ".project-card:nth-child(2) h3", text: "CheckMyStat NBA Analytics Platform" },
      { selector: ".project-card:nth-child(2) img", attr: "alt", text: "CheckMyStat NBA analytics platform mobile demo" },
      { selector: ".project-card:nth-child(2) p", text: "Built an NBA analytics website prototype around players, teams, schedules, and matchups using NBA Stats / Live data, covering player profiles, shot zones, passing networks, rankings, team profiles, and injury-impact analysis." },
      { selector: ".project-card:nth-child(2) li:nth-child(1)", text: "Designed APIs for player search, seasons, shot detail, league zone baselines, schedules, lineups, and team-level data." },
      { selector: ".project-card:nth-child(2) li:nth-child(2)", text: "Implemented shot distribution, heatmaps, hot/cold zones, matchup scatterplots, schedule calendars, and bilingual interactions." },
      { selector: ".project-card:nth-child(2) li:nth-child(3)", text: "Added Docker, Render, Nginx/systemd templates, health checks, rate limiting, security headers, preflight checks, and smoke tests." },
      { selector: ".project-card:nth-child(2) .tag-list span:nth-child(1)", text: "Python" },
      { selector: ".project-card:nth-child(2) .tag-list span:nth-child(2)", text: "JavaScript" },
      { selector: ".project-card:nth-child(2) .tag-list span:nth-child(3)", text: "NBA Stats API" },
      { selector: ".project-card:nth-child(2) .tag-list span:nth-child(4)", text: "Docker" },
      { selector: ".project-card:nth-child(2) .tag-list span:nth-child(5)", text: "Data Viz" },
      { selector: "#practice .section-kicker", text: "Campus & Practice" },
      { selector: "#practice .section-heading h2", text: "Campus & Extracurricular Practice" },
      { selector: ".practice-card:nth-child(1) h3", text: "Class Life Affairs Representative, Data Science and Big Data Technology, Xiamen University" },
      { selector: ".practice-card:nth-child(1) li:nth-child(1)", text: "Managed class funds, organized activities, supported safety and hygiene work, and communicated school policies." },
      { selector: ".practice-card:nth-child(1) li:nth-child(2)", text: "Handled long-term communication, task coordination, and follow-up, strengthening collaboration and execution." },
      { selector: ".practice-card:nth-child(2) h3", text: "Xiamen University “Time With You” Social Practice Team" },
      { selector: ".practice-card:nth-child(2) li:nth-child(1)", text: "Served as contact-team lead and data analyst, contributing to route planning, government outreach, and field interviews." },
      { selector: ".practice-card:nth-child(2) li:nth-child(2)", html: "Built a time-credit allocation system using <span class=\"text-highlight\">TOPSIS with entropy weighting</span>, turning field research into a quantitative evaluation framework." },
      { selector: "#contact .section-kicker", text: "Contact" },
      { selector: "#contact h2", text: "Open to AI-driven data science projects where data insight can genuinely move business decisions." },
      { selector: "footer span:nth-child(1)", text: "© 2026 Zekai Zhao" },
      { selector: "footer span:nth-child(2)", text: "Personal Homepage" }
    ]
  }
};
const getStoredLanguage = () => {
  try {
    return localStorage.getItem("site-language");
  } catch {
    return null;
  }
};
const setStoredLanguage = (language) => {
  try {
    localStorage.setItem("site-language", language);
  } catch {
    // Language switching still works for the current session if storage is unavailable.
  }
};
const storedLanguage = getStoredLanguage();
let currentLanguage = languageCopy[storedLanguage] ? storedLanguage : "zh";
let isClampingToHero = false;
let lastTouchY = 0;

const setElementCopy = ({ selector, text, html, attr, typewriter }) => {
  const element = document.querySelector(selector);

  if (!element) {
    return;
  }

  const value = typewriter ?? html ?? text ?? "";

  if (typewriter !== undefined) {
    element.dataset.typewriter = typewriter;
    element.setAttribute("aria-label", typewriter);
  }

  if (attr) {
    element.setAttribute(attr, value);
    return;
  }

  if (html !== undefined) {
    element.innerHTML = html;
    return;
  }

  element.textContent = value;
};

const applyLanguage = (language) => {
  const copy = languageCopy[language] ?? languageCopy.zh;
  currentLanguage = languageCopy[language] ? language : "zh";

  document.documentElement.lang = copy.lang;
  document.title = copy.title;
  document.body.dataset.language = currentLanguage;

  if (metaDescription) {
    metaDescription.setAttribute("content", copy.description);
  }

  copy.entries.forEach(setElementCopy);

  if (languageToggle) {
    languageToggle.textContent = copy.toggleText;
    languageToggle.setAttribute("aria-label", copy.toggleLabel);
  }

  setStoredLanguage(currentLanguage);
};

const getHeroScrollTop = () => (heroSection ? Math.max(0, heroSection.offsetTop) : 0);
const isMainSiteAtHeroTop = () =>
  document.body.classList.contains("intro-entered") && window.scrollY <= getHeroScrollTop() + 1;

const clampToHeroTop = () => {
  if (!document.body.classList.contains("intro-entered") || isClampingToHero) {
    return;
  }

  const heroTop = getHeroScrollTop();
  if (window.scrollY < heroTop - 1) {
    isClampingToHero = true;
    window.scrollTo({ top: heroTop, behavior: "auto" });
    isClampingToHero = false;
  }
};

const enterMainSite = (hash = "#hero") => {
  document.body.classList.remove("intro-locked");
  document.body.classList.add("intro-entered");

  if (hash && window.location.hash !== hash) {
    history.pushState(null, "", hash);
  }
};

const syncInitialRoute = () => {
  const hash = window.location.hash;

  if (hash && hash !== "#intro") {
    enterMainSite(hash);
    requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "auto" });
      clampToHeroTop();
      setActiveLink();
    });
  }
};

const setActiveLink = () => {
  let currentId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
  });
};

window.addEventListener("scroll", () => {
  clampToHeroTop();
  setActiveLink();
}, { passive: true });

window.addEventListener("wheel", (event) => {
  if (isMainSiteAtHeroTop() && event.deltaY < 0) {
    event.preventDefault();
  }
}, { passive: false });

window.addEventListener("touchstart", (event) => {
  lastTouchY = event.touches[0]?.clientY ?? 0;
}, { passive: true });

window.addEventListener("touchmove", (event) => {
  const touchY = event.touches[0]?.clientY ?? lastTouchY;
  const isDraggingDown = touchY > lastTouchY;
  lastTouchY = touchY;

  if (isMainSiteAtHeroTop() && isDraggingDown) {
    event.preventDefault();
  }
}, { passive: false });

window.addEventListener("hashchange", () => {
  if (document.body.classList.contains("intro-entered") && window.location.hash === "#intro") {
    history.replaceState(null, "", "#hero");
    clampToHeroTop();
  }
});

const typeText = (element, text, speed) =>
  new Promise((resolve) => {
    let index = 0;
    element.textContent = "";
    element.classList.add("is-typing");

    const tick = () => {
      element.textContent += text.charAt(index);
      index += 1;

      if (index < text.length) {
        window.setTimeout(tick, speed);
      } else {
        element.classList.remove("is-typing");
        resolve();
      }
    };

    tick();
  });

const runTypewriter = async () => {
  if (prefersReducedMotion) {
    typewriterItems.forEach((item) => {
      item.textContent = item.dataset.typewriter;
    });
    return;
  }

  for (const item of typewriterItems) {
    const speed = item.classList.contains("intro-title") ? 72 : 20;
    await typeText(item, item.dataset.typewriter, speed);
    await new Promise((resolve) => window.setTimeout(resolve, 120));
  }
};

applyLanguage(currentLanguage);
syncInitialRoute();

if (!document.body.classList.contains("intro-entered")) {
  runTypewriter();
} else {
  typewriterItems.forEach((item) => {
    item.textContent = item.dataset.typewriter;
  });
}

setActiveLink();

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (document.body.classList.contains("intro-locked")) {
      event.preventDefault();
    }
  });
});

introButton?.addEventListener("click", (event) => {
  event.preventDefault();
  enterMainSite("#hero");
  window.scrollTo({ top: getHeroScrollTop(), behavior: prefersReducedMotion ? "auto" : "smooth" });
});

languageToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "zh" ? "en" : "zh");
  setActiveLink();
});
