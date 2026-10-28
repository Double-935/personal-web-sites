const PORTFOLIO = {
  brand: {
    mark: "李",
    name: "PORTFOLIO",
  },
  links: {
    resume: "./assets/docs/Double-rusume.pdf",
    mail: "mailto:jiabeilieee@foxmail.com",
  },
  auth: {
    // Fill these with Supabase's project URL and publishable key.
    supabaseUrl: "https://txvcpuusjwkmgjanhqlc.supabase.co",
    publishableKey: "sb_publishable_yQW2hR3tAKxzzyvlQl8X0A_DL3Q_g3U",
  },
  nav: [
    { label: "教育背景", href: "#education" },
    { label: "项目经历", href: "#about" },
    { label: "工作经历", href: "#work" },
    { label: "技能与爱好", href: "#other" },
    { label: "联系我", href: "#contact" },
  ],
  hero: {
    eyebrow: "在线",
    title: '<span class="hero-greeting">你可以喊我</span><span class="hero-name">加倍 Double</span>',
    subtitle: "虽然我不喜欢给人贴标签但是为了快速了解我",
    lead: "",
    tags: [
      "AI产品", "STEM教育", "课程研发", "跨学科融合", "教育产品",
      "vibe coding", "Python", "Scratch", "micro:bit", "基础 PRD",
      "原型与交互思考", "HTML", "GitHub Pages", "Keynote", "秀米",
      "剪映", "Premiere Pro",
    ],
  },
  projects: {
    summary: "从一个真实的小问题出发，独立完成从想法、原型到可用产品。",
    items: [
      {
        title: "个人网站｜轻量账户系统开发",
        navTitle: "个人网站",
        date: "2026.08 - 至今",
        role: "独立开发",
        lead: "使用 <span class=\"project-emphasis\">Codex、Gemini</span> 等工具，以原生 <span class=\"project-emphasis\">HTML、CSS、JavaScript</span> 完成个人网站从信息架构、视觉排版、响应式交互到 3D 内容展示的开发，网站已上线并支持真实用户访问。",
        model: {
          src: "./assets/models/3d-model.glb",
          alt: "个人网站项目 3D 模型",
        },
        scrollContent: true,
        sections: [
          { text: "完成<span class=\"project-emphasis\">域名购买、DNS 解析、HTTPS 配置；接入</span> <span class=\"project-emphasis\">Supabase Auth 与 Database</span>，实现邮箱验证、登录状态恢复、RLS 数据隔离和本地 JSONB 数据迁移/离线备份。" },
          { text: "在开发中持续处理<span class=\"project-emphasis\">页面结构、交互和数据状态</span>问题，形成从需求拆解、实现、验证到迭代的完整实践。" },
        ],
      },
      {
        title: "EvoTavern Hackathon｜AI 互动内容平台",
        navTitle: "黑客松",
        date: "2026.09",
        website: { label: "beeplay.top", url: "https://beeplay.top" },
        lead: "4 人团队探索“AI 生成互动内容 + 内容分发”方向。",
        images: [
          { src: "./assets/images/EvoTavern Hackathon-1.JPG", alt: "EvoTavern Hackathon 项目现场" },
          { src: "./assets/images/EvoTavern Hackathon-2.JPG", alt: "EvoTavern Hackathon 团队项目现场" },
          { src: "./assets/images/EvoTavern Hackathon-3.png", alt: "BeePlay 互动内容体验画面" },
        ],
        scrollContent: true,
        sections: [
          { text: "个人角色<span class=\"project-emphasis\">「产品」</span>。定义 <span class=\"project-emphasis\">MVP</span>：用户通过一句话生成轻量互动内容并发布；其他用户可在信息流中浏览、体验，并进行转发、关注、收藏和评论。参与产品方案和 <span class=\"project-emphasis\">PRD</span>的梳理。项目完成 60+ 用户登录测试。" },
          { text: "个人角色<span class=\"project-emphasis\">「UI / 前端设计」</span> ，前端代码提交于团队 GitHub 仓库分支，UI可见作品集。" },
        ],
      },
      {
        title: "北京天文馆｜硬件编程融合课程",
        navTitle: "课程开发",
        date: "2026.10 - 至今",
        role: "课程研发",
        lead: "面向北京城市学校 3-6 年级学生，设计 7.5 小时编程硬件融合天文科普课程，每班 20 余名学生，3 人为一小组协作完成项目。",
        placeholderImage: {
          src: "./assets/images/project-placeholder.svg",
          alt: "北京天文馆课程配图待补充",
        },
        scrollContent: true,
        sections: [
          { text: "选用 <span class=\"project-emphasis\">micro:bit V2 与扩展板</span>，设计电机、舵机、传感器与望远镜、探测仪等实体作品的互动方案，将静态手作转化为可控制、可展示的项目成果。" },
          { text: "独立负责课程结构、活动设计与课件/文档开发。与 3 位天文老师协作校准内容，后续将形成课件、课程文档与可参赛的学生作品方案。" },
        ],
      },
      {
        title: "个人 AI Agent 项目｜求职机会监测与能力雷达",
        navTitle: "Agent",
        compactTitle: true,
        date: "2026.10 - 至今",
        lead: "设计面向个人求职的公开信息监测流程，覆盖目标公司官网、官方招聘页和公开招聘公众号；后续按用户授权接入需登录渠道。",
        image: {
          src: "./assets/images/AI Agent -1.png",
          alt: "个人 AI Agent 项目资料截图",
        },
        scrollContent: true,
        sections: [
          { text: "建立岗位去重、官方链接验证、失效过滤、截止日标记与暂定匹配评分规则；以方向契合、可实习性、公司匹配、AI／教育相关度等维度排序。" },
          { text: "设定工作日定时扫描、日报、临期高匹配岗位提醒和每周市场与能力雷达；项目处于早期运行与迭代阶段，后续补充日报样例和反馈效果。" },
        ],
      },
      {
        title: "SAVUS",
        navTitle: "SAVUS",
        date: "2022.12 - 2023.06",
        role: "运营策划",
        metaInline: true,
        website: { label: "https://savus.mysxl.cn/", url: "https://savus.mysxl.cn/", prefix: "" },
        lead: "<span class=\"project-emphasis\">公众号排版设计与运营。</span>负责公众号日常运营，使用<span class=\"project-emphasis\">秀米</span>完成排版与编辑 30 余次；最高浏览量达 3400+，账号运营 2 个月从 0 增长至 1500+ 粉丝；沟通同类型公众号及知识科普账号，合作方案一次性通过率达 90%。",
        image: {
          src: "./assets/images/SAVUS-1.png",
          alt: "SAVUS 项目网站页面",
        },
        scrollContent: true,
        sections: [
          { text: "小红书<span class=\"project-emphasis\">内容运营。</span>熟悉小红书流量池机制，发布笔记 30 余篇；最高单篇获赞与收藏增长 150%，个人账号最高浏览量达 1.7 万+。" },
        ],
      },
    ],
  },
  education: {
    summary: "教育技术学本科，科学与机器人硕士",
    items: [
      {
        school: "香港教育大学",
        degree: "Master of Arts in Science and Robotics Education",
        date: "2026.09 - 2027.08",
        visualNote: "科学与机器人教育硕士，全日制。",
        visualImage: "./assets/images/hk-edu-background.jpg",
        badgeImage: "./assets/images/eduhk-logo.jpg",
        bullets: [
          "主修 AI in Science and Robotics Education、Principles and Methods in Science and Robotics Education Research、Engineering and Programming for School Science and Robotics",
          "担任学生代表与 Student Helper，代表班级参与课程相关会议，收集并反馈学生的学习意见与建议；同时协助校园摄影等支持工作",
        ],
        accent: "warm",
      },
      {
        school: "四川师范大学",
        degree: "教育技术学本科",
        date: "2020.09 - 2024.06",
        visualNote: "教育技术学本科打底，积累课程设计与技术应用基础。",
        visualImage: "./assets/images/scnu-background.jpg",
        badgeImage: "./assets/images/scnu-logo.svg",
        bullets: [
          "曾获全国大学生计算机设计大赛三等奖、全国第六届大学生艺术展演活动优秀志愿者、校级优秀共青团员、校级优秀学生干部、校级三等奖学金、校级学术科技竞赛奖等。",
          "好女不提当年勇～此处不再赘述！",
        ],
        accent: "fresh",
      },
    ],
  },
  work: {
    summary: "用户行为不可控，但做一个好产品的行动可控",
    items: [
      {
        date: "2024.07 - 2025.11",
        title: "猿编程",
        role: "编程教研",
        intro:
          "参与在线双师课课程的研发工作，并通过实际测试与调研来不断改进课程内容。该课程面向6-10岁学生，该课程内容包括Python与硬件。",
        images: [
          {
            src: "./assets/images/work-experience-2.jpg",
            alt: "猿编程线下课堂支持现场",
          },
          {
            src: "./assets/images/yuancheng-classroom.jpg",
            alt: "猿编程课堂现场",
          },
          {
            src: "./assets/images/yuancheng-dinner.jpg",
            alt: "猿编程相关活动照片",
          },
        ],
        text:
          "在线双师课程研发方面，熟悉从课程目标评审、传课测课、每周跟课到课后班主任答疑的完整流程，最终成果以 Keynote 形式呈现。课程制作过程中，能够使用 AI 工具生成代码题正则并应用到课上题目中，能够独立撰写脚本并使用剪映等工具制作视频，讲解直播课中不好描述的硬件原理。也能够使用 GPT、豆包等 AI 工具生成教案、辅助课程目标确立，并使用通义等工具提升会议效率。线下项目中，于 2024-2025 年春季学期在北京市航天图强小学跟课 16 次，负责教研方人员排期、讲师对接和项目复盘，观察学生正向反馈设计点并推动延续。",
      },
      {
        date: "2024.01 - 2024.03",
        title: "作业帮",
        role: "编程教研实习",
        layout: "split",
        highlights: [
          { label: "课程制作", value: "使用 Scratch 开发 AI 课、专业拓展课共 4 节，设计工程文件并完成课件及物料制作" },
          { label: "流程沉淀", value: "熟悉课程产品生产流程，参与文档沉淀，并提供跨部门支持与协作" },
        ],
        images: [
          { src: "./assets/images/zuoyebang-1.JPG", alt: "作业帮编程教研实习证件照片", fit: "contain" },
        ],
        text:
          "在教学教研部参与少儿编程课程研发，使用 Scratch 开发 AI 课、专业拓展课共 4 节，设计工程文件，完成课件及相关物料制作，对课程内容和呈现效果负责。负责新媒体平台日常运营维护，确保每周发布内容与教学计划同步，避免信息误差。深入研究目标学生群体特点，针对认知水平和兴趣点，对 10 余个工程文件进行适应性修改和优化，确保内容有趣且易于理解。",
      },
      {
        date: "2024.03 - 2024.06",
        title: "成都市迎宾路小学",
        role: "信息技术教师",
        highlights: [
          { label: "课堂教学", value: "面向 3-6 年级学生教授 Python、Scratch，每周 4 节，共计 40 节" },
          { label: "课程标准", value: "熟悉 2022 版《义务教育信息科技课程标准》，结合学生学段特点组织课堂内容" },
          { label: "竞赛支持", value: "按照学校要求，带领学生参加全国青少年信息素养大赛" },
          { label: "校园协作", value: "支持学校行政与摄影工作，能够独立使用秀米完成公众号文章排版" },
        ],
        images: [
          { src: "./assets/images/yingbing-1.JPG", alt: "成都市迎宾路小学教学分享现场" },
        ],
        text:
          "熟悉 2022 版《义务教育信息科技课程标准》，针对 3-6 年级学生，使用 Python、Scratch 进行教学工作，每周 4 节，共计 40 节。按照学校要求，带领学生参加全国青少年信息素养大赛。支持学校其他行政工作，参与摄影工作，并能够独立使用秀米对该校公众号文章进行排版。",
      },
      {
        date: "2023.02 - 2023.06",
        title: "成都市玉林小学",
        role: "信息技术教师",
        highlights: [
          { label: "课堂教学", value: "面向四、五年级开展 Scratch、3D One 教学；每周 4 节课，共计 48 节。" },
          { label: "校园支持", value: "组织班会等活动 10 余次；制作毕业纪念视频 5 份，并在校级活动中完成摄影、撰稿 10 余次，为学校公众号运营提供支持。" },
        ],
        images: [
          { src: "./assets/images/yulin-1.png", alt: "成都市玉林小学信息技术课堂现场" },
        ],
      },
    ],
  },
  skills: {
    summary: "也许你会想认识更真实的我",
    items: [
      {
        title: "登高望远",
        preview: "登高望远",
        detail:
          "不登高山，不知天之高也；不临深溪，不知地之厚也",
        image: "./assets/images/denggao-1.png",
        imageAlt: "登高远望海湾与群山的照片",
        imagePosition: "left center",
      },
      {
        title: "MBTI",
        preview: "ENTJ-A",
        role: "分析家",
        image: "./assets/images/entj-female.png",
        traits: [
          { label: "外向", value: 63 },
          { label: "天马行空", value: 53 },
          { label: "理性思考", value: 67 },
          { label: "运筹帷幄", value: 97 },
          { label: "自信果断", value: 83 },
        ],
      },
      {
        title: "潜水",
        preview: "潜水",
        detail:
          "在水里只需要呼吸",
        image: "./assets/images/qianshui-1.JPG",
        imageAlt: "戴潜水镜在水中潜游的照片",
      },
      {
        title: "游泳",
        preview: "游泳",
        detail:
          "有效避免颈椎病、腰椎病",
        image: "./assets/images/swimming.jpg?v=20260827-image-fix",
        imageAlt: "游泳配图",
      },
      {
        title: "吃饭",
        preview: "吃饭",
        detail:
          "吃饭是人生头等大事",
        image: "./assets/images/eating.jpg?v=20260827-image-fix",
        imageAlt: "吃饭配图",
      },
      {
        title: "旅行",
        preview: "旅行",
        detail:
          "也想去看看更大的世界呢～",
        image: "./assets/images/travel.jpg?v=20260827-image-fix",
        imageAlt: "旅行配图",
      },
      {
        title: "教育产品与课程研发",
        preview: "教育产品与课程研发",
        detail:
          "一个灵魂唤醒另一个灵魂",
        image: "./assets/images/jiaoyu-1.JPG",
        imageAlt: "课堂教学展示现场照片",
        imagePosition: "left center",
        imageZoom: 1.35,
      },
      {
        title: "AI 与产品工具",
        preview: "AI 与产品工具",
        detail:
          "看似寻常最奇崛，成如容易却艰辛",
        image: "./assets/images/AI-1.png",
        imageAlt: "纸上的手绘思路草图",
      },
    ],
  },
  contact: {
    summary: "如果您正在寻找对教育、产品、AI方面有浓厚兴趣的候选人，欢迎通过邮箱或电话联系我！",
    items: [
      { label: "邮箱", value: "jiabeilieee@foxmail.com" },
      { label: "电话/微信同号", value: "186-2838-7059" },
    ],
  },
  friend: {
    title: "欢迎来到朋友版",
    cards: [
      {
        kicker: "A LITTLE CLOSER",
        title: "这里会放只和朋友分享的内容",
        text: "朋友版的内容可以是近况、照片、旅行记录、碎碎念，或者你想单独保留的一小块私人空间。",
      },
      {
        kicker: "IN PROGRESS",
        title: "先把入口搭好",
        text: "等认证服务接入后，这里就只对注册并登录成功的朋友开放。",
      },
      {
        kicker: "YOUR SPACE",
        title: "内容可以慢慢长出来",
        text: "之后我们可以继续设计朋友版的首页、动态卡片、照片墙或留言功能。",
      },
    ],
  },
  footer: "李佳蓓 · AI · Education Technology",
};

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function renderNav(items) {
  const nav = document.getElementById("mainNav");
  if (!nav) return;
  nav.innerHTML = items
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");
}

function setActiveNav(hash) {
  const links = document.querySelectorAll("#mainNav a");
  links.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === hash);
  });
}

function bindNavActivation() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;

  nav.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    setActiveNav(link.getAttribute("href"));
  });
}

function copyTextToClipboard(value) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(value);
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success ? Promise.resolve() : Promise.reject(new Error("copy failed"));
  } catch (error) {
    document.body.removeChild(textarea);
    return Promise.reject(error);
  }
}

function bindCopyWidget() {
  const buttons = document.querySelectorAll("[data-copy-value]");
  buttons.forEach((button) => {
    const status = button.parentElement.querySelector(".copy-widget__status");
    const defaultStatus = button.dataset.copyDefault || "点击即可复制";
    const arrow = button.querySelector(".contact-action__arrow");
    const defaultArrow = arrow?.textContent;
    if (status) {
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
    }
    let resetTimer = null;

    const setStatus = (text) => {
      if (!status) return;
      if (text === defaultStatus && button.dataset.copyKeyword) {
        status.innerHTML = `点击即可复制<span class="copy-widget__keyword">${button.dataset.copyKeyword}</span>`;
        return;
      }
      status.textContent = text;
    };

    button.addEventListener("click", async () => {
      if (resetTimer) clearTimeout(resetTimer);
      button.classList.remove("is-copied");
      if (arrow) arrow.textContent = defaultArrow;
      try {
        await copyTextToClipboard(button.dataset.copyValue);
        button.classList.add("is-copied");
        setStatus("已复制 ✓");
        if (arrow) arrow.textContent = "✓";
        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          button.classList.remove("is-copied");
          if (arrow) arrow.textContent = defaultArrow;
          setStatus(defaultStatus);
        }, 1600);
      } catch (error) {
        setStatus("复制失败，请手动选择");
      }
    });
  });
}

function bindScrollCue() {
  const cue = document.getElementById("scrollCue");
  if (!cue) return;

  const setCueState = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    const nearBottom = scrollTop + viewportHeight >= docHeight - Math.max(260, viewportHeight * 0.28);

    if (nearBottom) {
      cue.textContent = "回到顶部";
      cue.setAttribute("href", "#top");
      cue.setAttribute("aria-label", "回到顶部");
      cue.dataset.scrollCueState = "top";
    } else {
      cue.textContent = "继续下滑，探索更多";
      cue.setAttribute("href", "#education");
      cue.setAttribute("aria-label", "继续下滑，探索更多");
      cue.dataset.scrollCueState = "down";
    }
  };

  cue.addEventListener("click", (event) => {
    event.preventDefault();
    if (cue.dataset.scrollCueState === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    const scrollStep = Math.min(Math.max(viewportHeight * 0.42, 260), 420);
    const maxTop = Math.max(0, docHeight - viewportHeight);
    window.scrollTo({ top: Math.min(scrollTop + scrollStep, maxTop), behavior: "smooth" });
  });

  setCueState();
  window.addEventListener("scroll", setCueState, { passive: true });
  window.addEventListener("resize", setCueState);
}

function renderTypographicWall(containerId, tags) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    <div class="typographic-wall__noise" aria-hidden="true"></div>
    <div class="typographic-wall__scan" aria-hidden="true"></div>
    <div class="typographic-wall__words">
      ${tags.map((tag) => `
        <button class="typographic-wall__word" type="button" data-wall-word data-wall-label="${escapeHTML(tag)}" aria-label="${escapeHTML(tag)}" tabindex="-1">
          <span data-wall-glyph aria-hidden="true">${escapeHTML(tag)}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function bindTypographicWall(containerId) {
  const wall = document.getElementById(containerId);
  if (!wall) return;
  const words = Array.from(wall.querySelectorAll("[data-wall-word]"));
  const noise = wall.querySelector(".typographic-wall__noise");
  const scan = wall.querySelector(".typographic-wall__scan");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const scanMs = 2600;
  const holdMs = 5000;
  const dissolveMs = 800;
  const restMs = 800;
  const cycleMs = scanMs + holdMs + dissolveMs + restMs;
  const backgroundChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const chineseChars = "学科产品教育研发展力交互编码创意";
  let frame = 0;
  let cycleStart = 0;
  let lastGlyphTick = 0;
  let lastNoiseTick = 0;
  let inView = false;
  let focusedWord = null;
  let lastWidth = 0;
  let lastHeight = 0;

  const randomChar = (chars) => chars[Math.floor(Math.random() * chars.length)];
  const scramble = (label, revealed) => Array.from(label).map((character, index) => {
    if (index < revealed || /[\s:／]/u.test(character)) return character;
    if (/[\u4e00-\u9fff]/u.test(character)) return randomChar(chineseChars);
    if (/[0-9]/u.test(character)) return randomChar("0123456789");
    if (/[a-z]/iu.test(character)) {
      const random = randomChar("abcdefghijklmnopqrstuvwxyz");
      return character === character.toUpperCase() ? random.toUpperCase() : random;
    }
    return character;
  }).join("");

  const fillNoise = () => {
    const columns = Math.ceil(wall.clientWidth / 11);
    const lines = Math.ceil(wall.clientHeight / 25);
    noise.textContent = Array.from({ length: lines }, () =>
      Array.from({ length: columns }, () => Math.random() < 0.7 ? randomChar(backgroundChars) : " ").join(""),
    ).join("\n");
  };

  const layout = (shuffle = false) => {
    const width = Math.max(220, wall.clientWidth || 360);
    const innerWidth = width - 40;
    const rows = [[]];
    const arrangedWords = [...words];
    if (shuffle) {
      for (let index = arrangedWords.length - 1; index > 0; index -= 1) {
        const other = Math.floor(Math.random() * (index + 1));
        [arrangedWords[index], arrangedWords[other]] = [arrangedWords[other], arrangedWords[index]];
      }
    }
    let used = 0;
    arrangedWords.forEach((word) => {
      const wordWidth = Math.min(word.offsetWidth, innerWidth);
      if (rows.at(-1).length && used + 18 + wordWidth > innerWidth) {
        rows.push([]);
        used = 0;
      }
      rows.at(-1).push({ word, width: wordWidth });
      used += (used ? 18 : 0) + wordWidth;
    });
    const mobile = window.innerWidth <= 700;
    wall.style.height = mobile ? `${Math.max(300, rows.length * 56 + 52)}px` : "";
    const height = wall.clientHeight;
    const rowPitch = rows.length > 1 ? (height - 82) / (rows.length - 1) : 0;
    rows.forEach((row, rowIndex) => {
      const wordWidth = row.reduce((total, item) => total + item.width, 0);
      const free = Math.max(0, innerWidth - wordWidth);
      const left = 20 + (row.length === 1 ? free * (rowIndex % 2 ? 0.65 : 0.25) : free * 0.06);
      const gap = row.length > 1 ? (free * 0.88) / (row.length - 1) : 0;
      let x = left;
      row.forEach(({ word, width: itemWidth }) => {
        const jitter = shuffle ? Math.round((Math.random() - 0.5) * 12) : 0;
        const y = 32 + rowIndex * rowPitch + jitter;
        word.style.left = `${Math.round(x)}px`;
        word.style.top = `${y}px`;
        word.dataset.wallTrigger = String((y / height) * scanMs);
        x += itemWidth + gap;
      });
    });
    fillNoise();
    lastWidth = width;
    lastHeight = height;
  };

  const setWord = (word, text, visible) => {
    const glyph = word.querySelector("[data-wall-glyph]");
    if (glyph.textContent !== text) glyph.textContent = text;
    word.classList.toggle("is-visible", visible);
    word.tabIndex = visible ? 0 : -1;
  };

  const showAll = () => {
    words.forEach((word) => setWord(word, word.dataset.wallLabel, true));
    scan.hidden = true;
  };

  const stop = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  };

  const tick = (now) => {
    frame = 0;
    if (!inView || reducedMotion.matches || focusedWord || document.hidden) return;
    if (now - cycleStart >= cycleMs) {
      cycleStart += Math.floor((now - cycleStart) / cycleMs) * cycleMs;
      layout(true);
    }
    const elapsed = (now - cycleStart) % cycleMs;
    const scanActive = elapsed < scanMs;
    scan.hidden = !scanActive;
    if (scanActive) scan.style.top = `${(elapsed / scanMs) * 100}%`;

    if (now - lastNoiseTick > 700) {
      fillNoise();
      lastNoiseTick = now;
    }
    if (now - lastGlyphTick > 83) {
      words.forEach((word) => {
        const label = word.dataset.wallLabel;
        if (elapsed < scanMs) {
          const progress = (elapsed - Number(word.dataset.wallTrigger)) / Math.min(850, 420 + label.length * 28);
          const visible = progress >= 0;
          const revealed = Math.floor(Math.max(0, Math.min(1, progress)) * Array.from(label).length);
          setWord(word, progress >= 1 ? label : scramble(label, revealed), visible);
        } else if (elapsed < scanMs + holdMs) {
          setWord(word, label, true);
        } else if (elapsed < scanMs + holdMs + dissolveMs) {
          const progress = (elapsed - scanMs - holdMs) / dissolveMs;
          const revealed = Math.floor((1 - progress) * Array.from(label).length);
          setWord(word, scramble(label, revealed), progress < 0.92);
        } else {
          setWord(word, label, false);
        }
      });
      lastGlyphTick = now;
    }
    frame = requestAnimationFrame(tick);
  };

  const start = () => {
    if (!inView || reducedMotion.matches || focusedWord || document.hidden || frame) return;
    frame = requestAnimationFrame(tick);
  };

  const restart = (shuffle = true) => {
    stop();
    layout(shuffle);
    cycleStart = performance.now();
    lastGlyphTick = 0;
    start();
  };

  words.forEach((word) => {
    const focus = () => {
      focusedWord = word;
      wall.dataset.focused = "true";
      words.forEach((item) => item.classList.toggle("is-dimmed", item !== word));
      stop();
      showAll();
    };
    const blur = () => {
      if (word.matches(":hover, :focus-visible")) return;
      if (focusedWord !== word) return;
      focusedWord = null;
      delete wall.dataset.focused;
      words.forEach((item) => item.classList.remove("is-dimmed"));
      cycleStart = performance.now() - scanMs;
      start();
    };
    word.addEventListener("mouseenter", focus);
    word.addEventListener("mouseleave", blur);
    word.addEventListener("focus", focus);
    word.addEventListener("blur", blur);
    word.addEventListener("click", (event) => event.stopPropagation());
  });
  wall.addEventListener("click", (event) => {
    if (event.target.closest("[data-wall-word]")) return;
    focusedWord = null;
    delete wall.dataset.focused;
    words.forEach((word) => word.classList.remove("is-dimmed"));
    restart(true);
  });

  const resize = () => {
    if (Math.abs(wall.clientWidth - lastWidth) < 2 && Math.abs(wall.clientHeight - lastHeight) < 2) return;
    layout(false);
    if (reducedMotion.matches || focusedWord) showAll();
    else restart(false);
  };
  if (window.ResizeObserver) new ResizeObserver(resize).observe(wall);
  else window.addEventListener("resize", resize);
  if (window.IntersectionObserver) {
    new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) {
        if (reducedMotion.matches) showAll();
        else restart(false);
      } else stop();
    }, { threshold: 0.1 }).observe(wall);
  } else {
    inView = true;
    cycleStart = performance.now();
  }
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) {
      stop();
      showAll();
    } else restart(false);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else if (inView) restart(false);
  });
  layout(false);
  if (reducedMotion.matches) showAll();
  else start();
}

function renderFacts(containerId, facts) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = facts
    .map(
      (fact) => `
        <div class="fact">
          <span>${fact.label}</span>
          <strong>${fact.value}</strong>
        </div>
      `,
    )
    .join("");
}

function renderProjects(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map((project, projectIndex) => {
      const sections = project.sections
        .map(
          (section) => {
            const body = Array.isArray(section.text)
              ? `<ul>${section.text.map((item) => typeof item === "string"
                ? `<li>${item}</li>`
                : `<li><strong>${item.label}</strong>：${item.text}</li>`).join("")}</ul>`
              : `<p>${section.text}</p>`;

            return `
              <div class="project-section">
                ${section.label ? `<span class="project-section__label">${section.label}</span>` : ""}
                ${body}
              </div>
            `;
          },
        )
        .join("");
      const chips = project.sections
        .slice(0, 3)
        .filter((section) => section.label)
        .map((section) => `<span>${section.label}</span>`)
        .join("");
      const hasModel = Boolean(project.model);
      const hasGallery = Array.isArray(project.images) && project.images.length > 1;
      const hasImage = Boolean(project.image || hasGallery);
      const hasPlaceholderImage = Boolean(project.placeholderImage);
      const visualClass = `project-visual${hasModel ? " project-visual--model" : ""}${hasImage || hasPlaceholderImage ? " project-visual--placeholder" : ""}${hasGallery ? " project-visual--gallery" : ""}`;
      const contentClass = `project-content${project.scrollContent ? " project-content--scroll" : ""}`;
      const visualMarkup = hasModel
        ? `
            <canvas
              class="project-model-canvas"
              data-project-model
              data-model-src="${project.model.src}"
              data-model-alt="${project.model.alt || project.title}"
              aria-hidden="true"
            ></canvas>
            <div class="project-model-status" data-project-model-status>3D 模型加载中</div>
            <div class="project-visual__frame project-visual__frame--model project-visual__frame--model-note">
              <span class="project-model-label">3D模型 拖动可查看</span>
            </div>
          `
        : hasGallery
          ? `
              <img
                class="project-placeholder-image${project.images[0].fit === "contain" ? " project-placeholder-image--contain" : ""}"
                src="${escapeHTML(project.images[0].src)}"
                alt="${escapeHTML(project.images[0].alt || project.title)}"
                loading="lazy"
              />
              <button class="project-gallery__arrow project-gallery__arrow--previous" type="button" data-project-gallery-direction="previous" aria-label="上一张图片">←</button>
              <button class="project-gallery__arrow project-gallery__arrow--next" type="button" data-project-gallery-direction="next" aria-label="下一张图片">→</button>
              <span class="project-gallery__count" data-project-gallery-count aria-live="polite">1 / ${project.images.length}</span>
            `
        : hasImage || hasPlaceholderImage
          ? `
              <img
                class="project-placeholder-image${project.image?.fit === "contain" ? " project-placeholder-image--contain" : ""}"
                src="${(project.image || project.placeholderImage).src}"
                alt="${(project.image || project.placeholderImage).alt || project.title}"
                loading="lazy"
              />
            `
        : `
            <div class="project-visual__frame">
              <strong class="project-visual__title">${project.title}</strong>
              <p class="project-visual__lead">${project.lead}</p>
              <div class="project-visual__chips">
                ${chips}
              </div>
            </div>
          `;

      return `
        <article class="project-item project-item--showcase">
          <div class="${visualClass}"${hasGallery ? ` data-project-gallery="${projectIndex}" role="group" aria-label="${escapeHTML(project.navTitle || project.title)}图片轮播"` : ' aria-hidden="true"'}>
            ${visualMarkup}
          </div>
          <div class="${contentClass}">
            <div class="project-header">
              <strong${project.compactTitle ? ' class="project-title--compact"' : ""}>${project.title}</strong>
              ${project.date || project.role || project.website ? `<p class="project-meta${project.metaInline ? " project-meta--inline" : ""}">${project.date ? `<span>${project.date}</span>` : ""}${project.role ? `<span>${project.role}</span>` : ""}${project.website ? `<span>${project.website.prefix ?? "项目网站："}<a class="project-website" href="${escapeHTML(project.website.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(project.website.label)}</a></span>` : ""}</p>` : ""}
              ${project.lead ? `<p>${project.lead}</p>` : ""}
            </div>
            <div class="project-sections">
              ${sections}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function bindProjectGalleries(items) {
  document.querySelectorAll("[data-project-gallery]").forEach((gallery) => {
    const project = items[Number(gallery.dataset.projectGallery)];
    const images = project?.images;
    const image = gallery.querySelector(".project-placeholder-image");
    const count = gallery.querySelector("[data-project-gallery-count]");
    if (!images?.length || !image || !count) return;

    let current = 0;
    const show = (next) => {
      current = (next + images.length) % images.length;
      image.src = images[current].src;
      image.alt = images[current].alt || project.title;
      image.classList.toggle("project-placeholder-image--contain", images[current].fit === "contain");
      count.textContent = `${current + 1} / ${images.length}`;
    };

    gallery.querySelectorAll("[data-project-gallery-direction]").forEach((button) => {
      button.addEventListener("click", () => {
        show(current + (button.dataset.projectGalleryDirection === "next" ? 1 : -1));
      });
    });
  });
}

function bindProjectDirectory(items) {
  const list = document.getElementById("projectList");
  if (!list || !items.length) return;
  const panels = Array.from(list.children);
  const directory = document.createElement("div");
  directory.className = "project-directory";
  directory.innerHTML = `
    <div class="project-directory__tabs" role="tablist" aria-label="项目目录">
      ${items.map((item, index) => `<button type="button" role="tab" id="project-tab-${index}" aria-label="${String(index + 1).padStart(2, "0")} ${escapeHTML(item.title)}" aria-controls="project-panel-${index}" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}"><span class="project-directory__number">${String(index + 1).padStart(2, "0")}</span><strong>${escapeHTML(item.navTitle || item.title)}</strong></button>`).join("")}
    </div>`;
  list.before(directory);
  const tabs = Array.from(directory.querySelectorAll('[role="tab"]'));
  const projectSection = list.closest("#about");
  const projectColors = ["#efe9db", "#eee9f7", "#e7f1e9", "#f6e9e0", "#e9edf6"];
  let current = 0;
  let transition;
  panels.forEach((panel, index) => {
    panel.id = `project-panel-${index}`;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", `project-tab-${index}`);
    panel.tabIndex = 0;
  });
  const select = (index, focus = false) => {
    const changed = index !== current;
    current = index;
    projectSection?.style.setProperty("--project-active-bg", projectColors[index % projectColors.length]);
    transition?.cancel();
    panels.forEach((panel, i) => { panel.hidden = i !== index; });
    tabs.forEach((tab, i) => {
      tab.setAttribute("aria-selected", String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    if (focus) tabs[index].focus();
    if (changed && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && panels[index].animate) {
      transition = panels[index].animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 250, easing: "ease-out" });
    }
    window.dispatchEvent(new Event("resize"));
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(index));
    tab.addEventListener("keydown", (event) => {
      let target;
      if (event.key === "ArrowRight") target = Math.min(current + 1, tabs.length - 1);
      if (event.key === "ArrowLeft") target = Math.max(current - 1, 0);
      if (event.key === "Home") target = 0;
      if (event.key === "End") target = tabs.length - 1;
      if (target === undefined) return;
      event.preventDefault();
      select(target, true);
    });
  });
  select(0);
}

let projectModelRuntimePromise = null;

async function loadProjectModelRuntime() {
  if (!projectModelRuntimePromise) {
    const fromImportMap = () =>
      Promise.all([
        import("three"),
        import("three/addons/loaders/GLTFLoader.js"),
        import("three/addons/controls/OrbitControls.js"),
      ]);
    const fromBundledCdn = () =>
      Promise.all([
        import("https://esm.sh/three@0.166.1?bundle"),
        import("https://esm.sh/three@0.166.1/examples/jsm/loaders/GLTFLoader.js?bundle"),
        import("https://esm.sh/three@0.166.1/examples/jsm/controls/OrbitControls.js?bundle"),
      ]);

    projectModelRuntimePromise = fromImportMap()
      .catch(() => fromBundledCdn())
      .then(([THREE, loaderModule, controlsModule]) => ({
        THREE,
        GLTFLoader: loaderModule.GLTFLoader,
        OrbitControls: controlsModule.OrbitControls,
      }));
  }

  return projectModelRuntimePromise;
}

async function mountProjectModel(canvas) {
  const container = canvas.closest(".project-visual");
  const status = container?.querySelector("[data-project-model-status]");
  const modelSrc = canvas.dataset.modelSrc;
  if (!container || !modelSrc) return;

  let runtime;
  try {
    runtime = await loadProjectModelRuntime();
  } catch (error) {
    console.warn("Three.js runtime failed, using native WebGL fallback:", error);
    await mountNativeProjectModel(canvas, container, status, modelSrc);
    return;
  }

  const { THREE, GLTFLoader, OrbitControls } = runtime;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0, 1.35, 4.4);

  scene.add(new THREE.HemisphereLight(0xffffff, 0xe9ece8, 2.8));
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
  keyLight.position.set(4, 6, 5);
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight(0x90d9c9, 1.05);
  fillLight.position.set(-4, 2, 3);
  scene.add(fillLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.05;
  controls.target.set(0, 0.55, 0);

  const loader = new GLTFLoader();
  let gltf;
  try {
    gltf = await loader.loadAsync(modelSrc);
  } catch (error) {
    console.warn("GLTFLoader failed, using native WebGL fallback:", error);
    renderer.dispose();
    await mountNativeProjectModel(canvas, container, status, modelSrc);
    return;
  }
  const model = gltf.scene;
  model.traverse((child) => {
    if (!child.isMesh) return;
    child.castShadow = false;
    child.receiveShadow = false;
    if (Array.isArray(child.material)) {
      child.material = child.material.map((material) => material.clone());
    } else if (child.material) {
      child.material = child.material.clone();
    }
    if (child.material && "metalness" in child.material) {
      child.material.metalness = 0.12;
    }
    if (child.material && "roughness" in child.material) {
      child.material.roughness = 0.58;
    }
  });

  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDimension = Math.max(size.x, size.y, size.z) || 1;
  const scale = 2.8 / maxDimension;
  model.scale.setScalar(scale);
  model.position.sub(center.multiplyScalar(scale));
  model.rotation.x = -0.06;
  model.rotation.y = 0.45;
  scene.add(model);

  const fittedBox = new THREE.Box3().setFromObject(model);
  const fittedSize = fittedBox.getSize(new THREE.Vector3());
  const fittedCenter = fittedBox.getCenter(new THREE.Vector3());
  const fittedMaxDimension = Math.max(fittedSize.x, fittedSize.y, fittedSize.z) || 1;
  const fov = THREE.MathUtils.degToRad(camera.fov);
  const cameraDistance = fittedMaxDimension / (2 * Math.tan(fov / 2));
  controls.target.copy(fittedCenter);
  camera.position.set(
    fittedCenter.x,
    fittedCenter.y + fittedMaxDimension * 0.16,
    fittedCenter.z + cameraDistance * 1.65,
  );
  camera.near = Math.max(cameraDistance / 100, 0.01);
  camera.far = cameraDistance * 100;
  camera.updateProjectionMatrix();
  controls.update();

  const resize = () => {
    const rect = container.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  let frameId = 0;
  const renderLoop = () => {
    frameId = window.requestAnimationFrame(renderLoop);
    controls.update();
    renderer.render(scene, camera);
  };
  renderLoop();

  canvas.dataset.modelReady = "true";
  container.classList.add("project-visual--model-ready");
  if (status) {
    status.textContent = "";
  }
  canvas.addEventListener(
    "load",
    () => {
      resize();
    },
    { once: true },
  );

  window.setTimeout(() => {
    resize();
  }, 0);

  canvas.addEventListener(
    "remove",
    () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
    },
    { once: true },
  );
}

function createMat4() {
  return new Float32Array(16);
}

function mat4Identity() {
  const out = createMat4();
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}

function mat4Multiply(a, b) {
  const out = createMat4();
  for (let col = 0; col < 4; col += 1) {
    for (let row = 0; row < 4; row += 1) {
      out[col * 4 + row] =
        a[0 * 4 + row] * b[col * 4 + 0] +
        a[1 * 4 + row] * b[col * 4 + 1] +
        a[2 * 4 + row] * b[col * 4 + 2] +
        a[3 * 4 + row] * b[col * 4 + 3];
    }
  }
  return out;
}

function mat4Perspective(fov, aspect, near, far) {
  const out = createMat4();
  const f = 1 / Math.tan(fov / 2);
  out[0] = f / aspect;
  out[5] = f;
  out[10] = (far + near) / (near - far);
  out[11] = -1;
  out[14] = (2 * far * near) / (near - far);
  return out;
}

function mat4Translate(x, y, z) {
  const out = mat4Identity();
  out[12] = x;
  out[13] = y;
  out[14] = z;
  return out;
}

function mat4Scale(value) {
  const out = mat4Identity();
  out[0] = value;
  out[5] = value;
  out[10] = value;
  return out;
}

function mat4RotateX(angle) {
  const out = mat4Identity();
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  out[5] = c;
  out[6] = s;
  out[9] = -s;
  out[10] = c;
  return out;
}

function mat4RotateY(angle) {
  const out = mat4Identity();
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  out[0] = c;
  out[2] = -s;
  out[8] = s;
  out[10] = c;
  return out;
}

function normalizeVector(value) {
  const length = Math.hypot(value[0], value[1], value[2]) || 1;
  return [value[0] / length, value[1] / length, value[2] / length];
}

function crossVector(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function subtractVector(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function dotVector(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function mat4LookAt(eye, target, up) {
  const z = normalizeVector(subtractVector(eye, target));
  const x = normalizeVector(crossVector(up, z));
  const y = crossVector(z, x);
  const out = mat4Identity();
  out[0] = x[0];
  out[1] = y[0];
  out[2] = z[0];
  out[4] = x[1];
  out[5] = y[1];
  out[6] = z[1];
  out[8] = x[2];
  out[9] = y[2];
  out[10] = z[2];
  out[12] = -dotVector(x, eye);
  out[13] = -dotVector(y, eye);
  out[14] = -dotVector(z, eye);
  return out;
}

function compileModelShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) || "Shader compile failed");
  }
  return shader;
}

function createModelProgram(gl) {
  const vertexShader = compileModelShader(
    gl,
    gl.VERTEX_SHADER,
    `
      attribute vec3 aPosition;
      attribute vec2 aUv;
      uniform mat4 uMvp;
      varying vec2 vUv;

      void main() {
        vUv = vec2(aUv.x, 1.0 - aUv.y);
        gl_Position = uMvp * vec4(aPosition, 1.0);
      }
    `,
  );
  const fragmentShader = compileModelShader(
    gl,
    gl.FRAGMENT_SHADER,
    `
      precision mediump float;
      varying vec2 vUv;
      uniform sampler2D uTexture;

      void main() {
        vec4 color = texture2D(uTexture, vUv);
        gl_FragColor = vec4(color.rgb, color.a);
      }
    `,
  );
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) || "Program link failed");
  }
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  return program;
}

function getTypedArrayForAccessor(arrayBuffer, json, binOffset, accessorIndex) {
  const accessor = json.accessors[accessorIndex];
  const view = json.bufferViews[accessor.bufferView];
  const componentMap = {
    5121: Uint8Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  };
  const componentCountMap = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
  };
  const ArrayType = componentMap[accessor.componentType];
  const componentCount = componentCountMap[accessor.type];
  if (!ArrayType || !componentCount) {
    throw new Error("Unsupported GLB accessor");
  }
  const byteOffset = binOffset + (view.byteOffset || 0) + (accessor.byteOffset || 0);
  return {
    array: new ArrayType(arrayBuffer, byteOffset, accessor.count * componentCount),
    accessor,
    componentCount,
  };
}

async function createTextureFromGlbImage(gl, arrayBuffer, json, binOffset, textureIndex) {
  const textureInfo = json.textures[textureIndex];
  const imageInfo = json.images[textureInfo.source];
  const view = json.bufferViews[imageInfo.bufferView];
  const imageData = arrayBuffer.slice(
    binOffset + (view.byteOffset || 0),
    binOffset + (view.byteOffset || 0) + view.byteLength,
  );
  const image = await createImageBitmap(new Blob([imageData], { type: imageInfo.mimeType }));
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  return texture;
}

async function mountNativeProjectModel(canvas, container, status, modelSrc) {
  const gl = canvas.getContext("webgl2", { antialias: true, alpha: true });
  if (!gl) {
    throw new Error("WebGL2 is not available");
  }

  const response = await fetch(modelSrc);
  if (!response.ok) {
    throw new Error(`Model request failed: ${response.status}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  const header = new DataView(arrayBuffer, 0, 20);
  const magic = String.fromCharCode(
    header.getUint8(0),
    header.getUint8(1),
    header.getUint8(2),
    header.getUint8(3),
  );
  if (magic !== "glTF") {
    throw new Error("Invalid GLB file");
  }
  const jsonLength = header.getUint32(12, true);
  const json = JSON.parse(new TextDecoder().decode(new Uint8Array(arrayBuffer, 20, jsonLength)));
  const binHeaderOffset = 20 + jsonLength;
  const binOffset = binHeaderOffset + 8;
  const primitive = json.meshes[0].primitives[0];
  const positions = getTypedArrayForAccessor(arrayBuffer, json, binOffset, primitive.attributes.POSITION);
  const uvs = getTypedArrayForAccessor(arrayBuffer, json, binOffset, primitive.attributes.TEXCOORD_0);
  const indices = getTypedArrayForAccessor(arrayBuffer, json, binOffset, primitive.indices);
  const material = json.materials[primitive.material || 0];
  const textureIndex = material.pbrMetallicRoughness.baseColorTexture.index;
  const texture = await createTextureFromGlbImage(gl, arrayBuffer, json, binOffset, textureIndex);

  const program = createModelProgram(gl);
  const positionLocation = gl.getAttribLocation(program, "aPosition");
  const uvLocation = gl.getAttribLocation(program, "aUv");
  const mvpLocation = gl.getUniformLocation(program, "uMvp");
  const textureLocation = gl.getUniformLocation(program, "uTexture");

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions.array, gl.STATIC_DRAW);

  const uvBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, uvs.array, gl.STATIC_DRAW);

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices.array, gl.STATIC_DRAW);

  const min = positions.accessor.min || [-1, -1, -1];
  const max = positions.accessor.max || [1, 1, 1];
  const center = [
    (min[0] + max[0]) / 2,
    (min[1] + max[1]) / 2,
    (min[2] + max[2]) / 2,
  ];
  const maxDimension = Math.max(max[0] - min[0], max[1] - min[1], max[2] - min[2]) || 1;
  const scale = 2.65 / maxDimension;

  let rotationY = 0.55;
  let rotationX = -0.06;
  let isDragging = false;
  let previousPointer = null;

  canvas.style.touchAction = "none";
  canvas.addEventListener("pointerdown", (event) => {
    isDragging = true;
    previousPointer = { x: event.clientX, y: event.clientY };
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!isDragging || !previousPointer) return;
    const dx = event.clientX - previousPointer.x;
    const dy = event.clientY - previousPointer.y;
    rotationY += dx * 0.008;
    rotationX = Math.max(-0.75, Math.min(0.55, rotationX + dy * 0.006));
    previousPointer = { x: event.clientX, y: event.clientY };
  });
  canvas.addEventListener("pointerup", (event) => {
    isDragging = false;
    previousPointer = null;
    canvas.releasePointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointercancel", () => {
    isDragging = false;
    previousPointer = null;
  });

  const resize = () => {
    const rect = container.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(rect.width * pixelRatio));
    const height = Math.max(1, Math.floor(rect.height * pixelRatio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    gl.viewport(0, 0, width, height);
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  gl.enable(gl.DEPTH_TEST);
  gl.disable(gl.CULL_FACE);
  gl.clearColor(0, 0, 0, 0);

  let frameId = 0;
  const renderLoop = () => {
    frameId = window.requestAnimationFrame(renderLoop);
    if (!isDragging) {
      rotationY += 0.006;
    }

    resize();
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.useProgram(program);

    const aspect = Math.max(1, canvas.width) / Math.max(1, canvas.height);
    const projection = mat4Perspective(Math.PI / 4.4, aspect, 0.1, 100);
    const view = mat4LookAt([0, 0.22, 5], [0, 0, 0], [0, 1, 0]);
    const model = mat4Multiply(
      mat4RotateY(rotationY),
      mat4Multiply(mat4RotateX(rotationX), mat4Multiply(mat4Scale(scale), mat4Translate(-center[0], -center[1], -center[2]))),
    );
    const mvp = mat4Multiply(projection, mat4Multiply(view, model));

    gl.uniformMatrix4fv(mvpLocation, false, mvp);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(textureLocation, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, positions.componentCount, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.enableVertexAttribArray(uvLocation);
    gl.vertexAttribPointer(uvLocation, uvs.componentCount, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.drawElements(gl.TRIANGLES, indices.accessor.count, gl.UNSIGNED_INT, 0);
  };

  renderLoop();

  canvas.dataset.modelReady = "true";
  container.classList.add("project-visual--model-ready");
  if (status) {
    status.textContent = "";
  }

  canvas.addEventListener(
    "remove",
    () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      gl.deleteProgram(program);
      gl.deleteBuffer(positionBuffer);
      gl.deleteBuffer(uvBuffer);
      gl.deleteBuffer(indexBuffer);
      gl.deleteTexture(texture);
    },
    { once: true },
  );
}

function bindProjectModels() {
  const canvases = document.querySelectorAll("[data-project-model]");
  canvases.forEach((canvas) => {
    if (canvas.dataset.modelReady === "true") return;
    mountProjectModel(canvas).catch((error) => {
      console.error("Project 3D model failed to load:", error);
      canvas.dataset.modelReady = "error";
      const container = canvas.closest(".project-visual");
      const status = container?.querySelector("[data-project-model-status]");
      container?.classList.add("project-visual--model-error");
      if (status) {
        status.textContent = "3D 模型加载失败，请刷新或检查网络";
      }
    });
  });
}

function renderEducation(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map((item, index) => {
      const accentClass = item.accent ? ` education-card--${item.accent}` : "";

      return `
        <article class="education-card${accentClass}">
          <div class="education-card__visual" aria-hidden="true">
            <img class="education-card__image" src="${item.visualImage}" alt="${item.school}背景图" />
            <div class="education-card__image-overlay"></div>
            <span class="education-card__badge">
              <img class="education-card__badge-image" src="${item.badgeImage}" alt="${item.school}校徽" />
            </span>
          </div>
          <div class="education-card__body">
            <strong class="education-card__title">${item.school}</strong>
            <div class="education-card__meta">
              <span class="education-card__date">${item.date}</span>
              <span class="education-card__degree-label">${item.degree}</span>
            </div>
            ${item.bullets
              ? `<ul class="education-card__bullets">${item.bullets.map((text) => `<li>${text}</li>`).join("")}</ul>`
              : `<p>${item.text}</p>${(item.supplementaryText || []).map((text) => `<p>${text}</p>`).join("")}`}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTimeline(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map((item, index) => {
      const side = index % 2 === 0 ? "left" : "right";
      const step = String(index + 1).padStart(2, "0");
      const isOpen = Boolean(item.defaultOpen);
      const highlights = [...(item.highlights || []), ...(item.supplementaryHighlights || [])];
      const hasFeaturedContent = Boolean(highlights.length || item.images?.length);
      const timelineIntro = item.intro || item.supplementaryIntro || (!highlights.length ? item.text : "");

      return `
        <div class="timeline-entry timeline-entry--${side}${item.layout === "split" ? " timeline-entry--split" : ""}" data-work-item data-step="${step}">
          <div class="timeline-marker" aria-hidden="true">
            <span>${step}</span>
          </div>
          <article class="timeline-item${isOpen ? " is-open" : ""}">
            <button class="timeline-head" type="button" aria-expanded="${isOpen ? "true" : "false"}">
              <span class="timeline-year">${item.date}</span>
              <span class="timeline-title">
                <strong>${item.title}</strong>
                <span>${item.role}</span>
              </span>
              <span class="timeline-click-hint" data-timeline-hint>${isOpen ? "点击收起" : "点击展开"}</span>
            </button>
            <div class="timeline-body ${hasFeaturedContent ? "timeline-body--featured" : ""}" aria-hidden="${isOpen ? "false" : "true"}">
            ${
              hasFeaturedContent
                  ? `
                    <div class="timeline-feature__copy">
                      ${timelineIntro ? `<p class="timeline-intro">${timelineIntro}</p>` : ""}
                      ${highlights.length ? `<div class="timeline-highlights">
                        ${highlights
                          .map(
                            (highlight) => `
                              <div class="timeline-highlight">
                                <span>${highlight.label}</span>
                                <strong>${highlight.value}</strong>
                              </div>
                            `,
                          )
                          .join("")}
                      </div>` : ""}
                    </div>
                    ${
                      item.images
                        ? `
                          <div class="timeline-feature__media">
                            <div class="timeline-gallery" data-work-gallery>
                              <div class="timeline-gallery__stack">
                                ${item.images
                                  .map(
                                    (image, index) => `
                                      <img
                                        class="timeline-gallery__image${image.fit === "contain" ? " timeline-gallery__image--contain" : ""}${index === 0 ? " is-active" : ""}"
                                        src="${image.src}"
                                        alt="${image.alt}"
                                        data-gallery-image
                                        loading="lazy"
                                      />
                                    `,
                                  )
                                  .join("")}
                              </div>
                            </div>
                          </div>
                        `
                        : ""
                    }
                  `
                  : item.pendingContent
                    ? `
                      <div class="timeline-placeholder">
                        <span>内容待补充</span>
                      </div>
                    `
                  : `
                      <p>${item.text}</p>
                    `
            }
            </div>
          </article>
        </div>
      `;
    })
    .join("");
}

function bindWorkTimeline() {
  const items = document.querySelectorAll("[data-work-item]");
  const light = (item) => {
    item.classList.add("work-is-seen");
  };
  items.forEach((item) => {
    const card = item.querySelector(".timeline-item");
    const head = item.querySelector(".timeline-head");
    const body = item.querySelector(".timeline-body");
    const hint = item.querySelector("[data-timeline-hint]");
    if (!card || !head || !body) return;
    body.inert = !card.classList.contains("is-open");

    const setOpen = (isOpen) => {
      card.classList.toggle("is-open", isOpen);
      head.setAttribute("aria-expanded", String(isOpen));
      body.setAttribute("aria-hidden", String(!isOpen));
      body.inert = !isOpen;
      if (isOpen) light(item);
      if (isOpen && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
        body.querySelectorAll(".timeline-intro, .timeline-highlight, .timeline-feature__media").forEach((element, index) => {
          element.animate?.([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 350, delay: Math.min(index, 5) * 60, fill: "backwards", easing: "ease-out" });
        });
      }
      if (hint) {
        hint.textContent = isOpen ? "点击收起" : "点击展开";
      }
    };

    const toggleItem = () => {
      setOpen(!card.classList.contains("is-open"));
    };

    const setHoverState = (isHovering) => {
      card.classList.toggle("is-hovering", isHovering);
    };

    item.addEventListener("mouseenter", () => setHoverState(true));
    item.addEventListener("mouseleave", () => setHoverState(false));
    item.addEventListener("focusin", () => setHoverState(true));
    item.addEventListener("focusout", () => setHoverState(false));
    head.addEventListener("click", toggleItem);
  });
}

function bindWorkGalleries() {
  document.querySelectorAll("[data-work-gallery]").forEach((gallery) => {
    const images = Array.from(gallery.querySelectorAll("[data-gallery-image]"));
    if (!images.length) return;
    let activeIndex = 0;
    const update = () => images.forEach((image, index) => {
      const offset = (index - activeIndex + images.length) % images.length;
      image.classList.toggle("is-active", offset === 0);
      image.classList.toggle("is-next", offset === 1);
      image.classList.toggle("is-back", offset > 1);
      image.style.zIndex = String(images.length - offset);
    });
    update();
    if (images.length < 2) return;
    window.setInterval(() => {
      if (document.hidden || !gallery.closest(".timeline-item")?.classList.contains("is-open")) return;
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      activeIndex = (activeIndex + 1) % images.length;
      update();
    }, 4000);
  });
}

function renderSkillTraits(traits) {
  return traits
    .map(
      (trait) => `
        <div class="mbti-trait">
          <div class="mbti-trait__header">
            <span>${trait.label}</span>
            <strong>${trait.value}%</strong>
          </div>
          <div class="mbti-progress" aria-hidden="true">
            <span style="width: ${trait.value}%"></span>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderSkillDetail(item) {
  const imageStyle = [
    item.imagePosition && `object-position: ${item.imagePosition}`,
    item.imageZoom && `transform: scale(${item.imageZoom}); transform-origin: left center`,
  ].filter(Boolean).join("; ");

  if (item.traits) {
    return `
      <div class="skills-detail__copy">
        <span class="skills-detail__eyebrow">MBTI</span>
        <h3 class="skills-detail__title">${item.preview}</h3>
        <p class="skills-detail__role">角色：${item.role}</p>
        <div class="mbti-traits">
          ${renderSkillTraits(item.traits)}
        </div>
      </div>
      <div class="skills-detail__media">
        <img class="skills-detail__image skills-detail__image--mbti" src="${item.image}" alt="ENTJ-A 分析家形象" />
      </div>
    `;
  }

  return `
    <div class="skills-detail__copy${item.image ? "" : " skills-detail__copy--wide"}">
      <h3 class="skills-detail__title">${item.preview || item.title}</h3>
      <p class="skills-detail__text">${item.detail || item.text || ""}</p>
    </div>
    ${
      item.image
        ? `
          <div class="skills-detail__media">
            <img class="skills-detail__image" src="${item.image}" alt="${item.imageAlt || item.title}"${imageStyle ? ` style="${imageStyle}"` : ""} />
          </div>
        `
        : ""
    }
  `;
}

function renderSkills(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const displayOrder = items.length === 8
    ? [1, 7, 3, 0, 5, 2, 4, 6]
    : items.map((_, index) => index);

  el.innerHTML = `
    <div class="skill-gallery" data-skill-gallery>
      ${displayOrder.map((index) => {
        const item = items[index];
        return `
        <article class="skills-detail skill-gallery__card${item.image && !item.traits ? " skills-detail--photo" : ""}${item.traits ? " skills-detail--mbti" : ""}" data-skill-card aria-label="${escapeHTML(item.title)}档案卡">
          <span class="skills-detail__shadow" aria-hidden="true"></span>
          <div class="skills-detail__rotor" data-skill-rotor>
            <div class="skills-detail__face skills-detail__face--front" data-skill-front>
              <canvas class="skills-detail__galaxy" aria-hidden="true"></canvas>
              <span class="skills-detail__glare" aria-hidden="true"></span>
            </div>
            <div class="skills-detail__face skills-detail__face--back" data-skill-back aria-hidden="true" inert>
              <div class="skills-detail__back-content">${renderSkillDetail(item)}</div>
              <span class="skills-detail__glare" aria-hidden="true"></span>
            </div>
          </div>
          <button class="skills-detail__flip-toggle" type="button" data-skill-flip-toggle aria-label="翻开${escapeHTML(item.title)}档案卡" aria-pressed="false">↻</button>
        </article>
      `;
      }).join("")}
    </div>
  `;
}

let skillFlipAudioContext = null;
let skillFlipNoiseBuffer = null;

function playSkillFlipSound() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  try {
    const audio = skillFlipAudioContext ||= new AudioContextClass();
    if (audio.state === "suspended") void audio.resume().catch(() => {});

    if (!skillFlipNoiseBuffer) {
      const sampleCount = Math.ceil(audio.sampleRate * 0.2);
      skillFlipNoiseBuffer = audio.createBuffer(1, sampleCount, audio.sampleRate);
      const samples = skillFlipNoiseBuffer.getChannelData(0);
      for (let index = 0; index < sampleCount; index += 1) {
        samples[index] = Math.random() * 2 - 1;
      }
    }

    const now = audio.currentTime;
    const swish = audio.createBufferSource();
    const filter = audio.createBiquadFilter();
    const swishGain = audio.createGain();
    swish.buffer = skillFlipNoiseBuffer;
    filter.type = "bandpass";
    filter.Q.value = 0.8;
    filter.frequency.setValueAtTime(850, now);
    filter.frequency.exponentialRampToValueAtTime(2300, now + 0.08);
    filter.frequency.exponentialRampToValueAtTime(650, now + 0.19);
    swishGain.gain.setValueAtTime(0.0001, now);
    swishGain.gain.exponentialRampToValueAtTime(0.055, now + 0.025);
    swishGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.19);
    swish.connect(filter).connect(swishGain).connect(audio.destination);
    swish.start(now);
    swish.stop(now + 0.19);

    const tap = audio.createOscillator();
    const tapGain = audio.createGain();
    tap.type = "triangle";
    tap.frequency.setValueAtTime(420, now + 0.11);
    tap.frequency.exponentialRampToValueAtTime(250, now + 0.18);
    tapGain.gain.setValueAtTime(0.0001, now + 0.11);
    tapGain.gain.exponentialRampToValueAtTime(0.014, now + 0.125);
    tapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    tap.connect(tapGain).connect(audio.destination);
    tap.start(now + 0.11);
    tap.stop(now + 0.18);
  } catch {
    // Audio may be unavailable in some browsers; flipping still works.
  }
}

function bindSkillFlipCard(card) {
  const rotor = card.querySelector("[data-skill-rotor]");
  const front = card.querySelector("[data-skill-front]");
  const back = card.querySelector("[data-skill-back]");
  const toggle = card.querySelector("[data-skill-flip-toggle]");
  const shadow = card.querySelector(".skills-detail__shadow");
  const cardLabel = card.getAttribute("aria-label") || "档案卡";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const spring = (state, target, stiffness, damping, dt) => {
    state.velocity += (-stiffness * (state.value - target) - damping * state.velocity) * dt;
    state.value += state.velocity * dt;
    if (Math.abs(state.value - target) < 0.01 && Math.abs(state.velocity) < 0.01) {
      state.value = target;
      state.velocity = 0;
    }
    return state.value !== target || state.velocity !== 0;
  };
  const turn = { value: 0, velocity: 0 };
  const tiltX = { value: 0, velocity: 0, target: 0 };
  const tiltY = { value: 0, velocity: 0, target: 0 };
  const lift = { value: 1, velocity: 0, target: 1 };
  const sheen = { value: 0, velocity: 0, target: 0 };
  let turnTarget = 0;
  let flipped = false;
  let grip = null;
  let frame = 0;
  let lastFrame = 0;

  const paint = () => {
    const facing = Math.abs(Math.cos((turn.value * Math.PI) / 180));
    rotor.style.transform = `perspective(1100px) scale(${lift.value}) rotateX(${tiltX.value}deg) rotateY(${turn.value + tiltY.value}deg)`;
    card.style.setProperty("--skill-sheen", String(sheen.value));
    shadow.style.transform = `scaleX(${0.08 + 0.92 * facing})`;
    shadow.style.opacity = String(0.1 + 0.9 * facing * facing);
  };

  const animateFrame = (now) => {
    const dt = Math.min((now - (lastFrame || now)) / 1000, 0.04);
    lastFrame = now;
    let moving = false;
    if (!grip?.moved) moving = spring(turn, turnTarget, 170, 20, dt) || moving;
    moving = spring(tiltX, tiltX.target, 240, 24, dt) || moving;
    moving = spring(tiltY, tiltY.target, 240, 24, dt) || moving;
    moving = spring(lift, lift.target, 320, 26, dt) || moving;
    moving = spring(sheen, sheen.target, 320, 26, dt) || moving;
    paint();
    frame = moving ? requestAnimationFrame(animateFrame) : 0;
    if (!moving) lastFrame = 0;
  };

  const startAnimation = () => {
    if (!frame && !reducedMotion.matches) frame = requestAnimationFrame(animateFrame);
  };

  const setFlipped = (next, instant = false, targetAngle = next ? 180 : 0) => {
    if (!instant && next !== flipped) playSkillFlipSound();
    flipped = next;
    turnTarget = targetAngle;
    card.dataset.flipped = String(next);
    front.setAttribute("aria-hidden", String(next));
    back.setAttribute("aria-hidden", String(!next));
    front.inert = next;
    back.inert = !next;
    toggle.setAttribute("aria-pressed", String(next));
    toggle.setAttribute("aria-label", next ? `翻到${cardLabel}封面` : `翻开${cardLabel}`);
    if (instant || reducedMotion.matches) {
      turn.value = turnTarget;
      turn.velocity = 0;
      paint();
    } else {
      startAnimation();
    }
  };

  const rest = () => {
    tiltX.target = 0;
    tiltY.target = 0;
    lift.target = 1;
    sheen.target = 0;
    startAnimation();
  };

  const flip = () => {
    const base = Math.round(turnTarget / 180) * 180;
    setFlipped(!flipped, false, base + (flipped ? -180 : 180));
  };

  card.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || event.target.closest("[data-skill-flip-toggle]") || grip) return;
    try {
      card.setPointerCapture(event.pointerId);
    } catch {
      // The card still supports click-to-flip when pointer capture is unavailable.
    }
    grip = {
      id: event.pointerId,
      x: event.clientX,
      base: turn.value,
      moved: false,
      slop: event.pointerType === "touch" ? 8 : 4,
      history: [],
    };
    turn.velocity = 0;
    lift.target = 1.03;
    startAnimation();
  });

  card.addEventListener("pointermove", (event) => {
    if (grip?.id === event.pointerId) {
      const distance = event.clientX - grip.x;
      if (!grip.moved && (Math.abs(distance) < grip.slop || reducedMotion.matches)) return;
      if (!grip.moved) {
        grip.moved = true;
        card.dataset.dragging = "";
        tiltX.target = tiltY.target = sheen.target = 0;
      }
      turn.value = grip.base + (distance / card.clientWidth) * 180;
      const now = performance.now();
      grip.history.push({ time: now, angle: turn.value });
      while (grip.history.length > 2 && now - grip.history[0].time > 90) grip.history.shift();
      paint();
      return;
    }
    if (event.pointerType === "touch" || reducedMotion.matches) return;
    const bounds = card.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    tiltX.target = (0.5 - y) * 24;
    tiltY.target = (x - 0.5) * 24;
    sheen.target = 1;
    card.style.setProperty("--skill-gx", `${x * 100}%`);
    card.style.setProperty("--skill-gy", `${y * 100}%`);
    startAnimation();
  });

  const release = (event, cancelled = false) => {
    if (grip?.id !== event.pointerId) return;
    const currentGrip = grip;
    grip = null;
    card.removeAttribute("data-dragging");
    try {
      if (card.hasPointerCapture(event.pointerId)) card.releasePointerCapture(event.pointerId);
    } catch {
      // A cancelled pointer may already have released capture.
    }
    if (event.pointerType === "touch" || !card.matches(":hover")) rest();
    if (!currentGrip.moved) {
      if (!cancelled) flip();
      else setFlipped(flipped, false, Math.round(currentGrip.base / 180) * 180);
      return;
    }
    const first = currentGrip.history[0];
    const last = currentGrip.history.at(-1);
    const velocity = !cancelled && first && last && last.time > first.time && performance.now() - last.time < 60
      ? ((last.angle - first.angle) / (last.time - first.time)) * 1000
      : 0;
    const projected = cancelled ? currentGrip.base : turn.value + velocity * 0.16;
    const base = Math.round(currentGrip.base / 180) * 180;
    const targetAngle = Math.max(base - 180, Math.min(base + 180, Math.round(projected / 180) * 180));
    turn.velocity = velocity;
    setFlipped(Math.abs(Math.round(targetAngle / 180)) % 2 === 1, false, targetAngle);
  };

  card.addEventListener("pointerup", (event) => release(event));
  card.addEventListener("pointercancel", (event) => release(event, true));
  card.addEventListener("lostpointercapture", (event) => release(event, true));
  card.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "touch") {
      lift.target = 1.03;
      startAnimation();
    }
  });
  card.addEventListener("pointerleave", () => {
    if (!grip) rest();
  });
  card.addEventListener("dragstart", (event) => event.preventDefault());
  toggle.addEventListener("click", flip);

  const reset = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    lastFrame = 0;
    grip = null;
    card.removeAttribute("data-dragging");
    [tiltX, tiltY, sheen].forEach((state) => {
      state.value = state.target = state.velocity = 0;
    });
    lift.value = lift.target = 1;
    lift.velocity = 0;
    setFlipped(false, true);
  };

  card.dataset.reducedMotion = String(reducedMotion.matches);
  reducedMotion.addEventListener("change", () => {
    card.dataset.reducedMotion = String(reducedMotion.matches);
    if (reducedMotion.matches) {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      lastFrame = 0;
      turn.value = turnTarget;
      turn.velocity = 0;
      [tiltX, tiltY, sheen].forEach((state) => {
        state.value = state.target = state.velocity = 0;
      });
      lift.value = lift.target = 1;
      lift.velocity = 0;
      paint();
    }
  });
  reset();
  return { reset, flipTo: setFlipped };
}

function bindSkillGalaxy(card) {
  const canvas = card.querySelector(".skills-detail__galaxy");
  const context = canvas?.getContext("2d");
  if (!context) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = { x: 0, y: 0, active: false };
  const palette = ["255, 255, 255", "220, 225, 255", "248, 224, 255", "196, 213, 255"];
  const stars = Array.from({ length: 170 }, () => ({
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2,
    z: 0.2 + Math.random(),
    speed: 0.65 + Math.random() * 0.9,
    phase: Math.random() * Math.PI * 2,
    color: palette[Math.floor(Math.random() * palette.length)],
    bright: Math.random() < 0.14,
  }));
  let width = 0;
  let height = 0;
  let visible = false;
  let frame = 0;
  let previousTime = 0;

  const project = (star) => ({
    x: width / 2 + (star.x / star.z) * width * 0.46,
    y: height / 2 + (star.y / star.z) * height * 0.46,
  });

  const paint = (elapsed, time) => {
    if (!width || !height) return;
    context.fillStyle = "#0c0b13";
    context.fillRect(0, 0, width, height);
    const haze = context.createRadialGradient(width * 0.5, height * 0.52, 0, width * 0.5, height * 0.52, Math.max(width, height) * 0.65);
    haze.addColorStop(0, "rgba(48, 38, 82, 0.22)");
    haze.addColorStop(1, "rgba(10, 9, 18, 0)");
    context.fillStyle = haze;
    context.fillRect(0, 0, width, height);

    for (const star of stars) {
      const previous = project(star);
      if (elapsed) star.z -= elapsed * (0.11 + star.speed * 0.09);
      let point = project(star);
      if (star.z < 0.16 || point.x < -14 || point.x > width + 14 || point.y < -14 || point.y > height + 14) {
        star.x = (Math.random() - 0.5) * 2;
        star.y = (Math.random() - 0.5) * 2;
        star.z = 1.2;
        point = project(star);
      }

      if (pointer.active) {
        const dx = point.x - pointer.x;
        const dy = point.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        const radius = Math.min(width, height) * 0.4;
        if (distance > 0 && distance < radius) {
          const push = ((radius - distance) / radius) ** 2 * 16;
          point.x += (dx / distance) * push;
          point.y += (dy / distance) * push;
        }
      }

      const twinkle = 0.72 + Math.sin(time * 0.0018 * star.speed + star.phase) * 0.28;
      const opacity = Math.min(1, (0.28 + (1.2 - star.z) * 0.62) * twinkle);
      const radius = star.bright ? 1.1 + (1.2 - star.z) * 1.4 : 0.35 + (1.2 - star.z) * 0.65;
      if (star.bright) {
        const glow = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius * 5);
        glow.addColorStop(0, `rgba(${star.color}, ${opacity * 0.55})`);
        glow.addColorStop(1, `rgba(${star.color}, 0)`);
        context.fillStyle = glow;
        context.beginPath();
        context.arc(point.x, point.y, radius * 5, 0, Math.PI * 2);
        context.fill();
      }
      if (elapsed && star.z < 0.38 && Math.hypot(point.x - previous.x, point.y - previous.y) < 14) {
        context.strokeStyle = `rgba(${star.color}, ${opacity * 0.35})`;
        context.lineWidth = Math.max(0.4, radius * 0.6);
        context.beginPath();
        context.moveTo(previous.x, previous.y);
        context.lineTo(point.x, point.y);
        context.stroke();
      }
      context.fillStyle = `rgba(${star.color}, ${opacity})`;
      context.beginPath();
      context.arc(point.x, point.y, radius, 0, Math.PI * 2);
      context.fill();
    }
  };

  const shouldAnimate = () => visible && !document.hidden && !reducedMotion.matches && card.dataset.flipped !== "true";
  const tick = (time) => {
    frame = 0;
    if (!shouldAnimate()) return;
    const elapsed = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 0;
    previousTime = time;
    paint(elapsed, time);
    frame = requestAnimationFrame(tick);
  };
  const sync = () => {
    if (shouldAnimate()) {
      if (!frame) frame = requestAnimationFrame(tick);
    } else if (frame) {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
    }
  };
  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    paint(0, performance.now());
  };

  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    pointer.x = event.clientX - bounds.left;
    pointer.y = event.clientY - bounds.top;
    pointer.active = true;
  });
  card.addEventListener("pointerleave", () => { pointer.active = false; });
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    sync();
  }).observe(card);
  new MutationObserver(sync).observe(card, { attributes: true, attributeFilter: ["data-flipped"] });
  reducedMotion.addEventListener("change", sync);
  document.addEventListener("visibilitychange", sync);
  resize();
}

function bindSkillCards() {
  document.querySelectorAll("[data-skill-card]").forEach((card) => {
    bindSkillFlipCard(card);
    bindSkillGalaxy(card);
  });
}

function renderContacts(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const phoneNumber = items[1].value.replaceAll("-", "");
  el.innerHTML = `
    <div class="contact-action contact-copy-item">
      <button
        class="copy-widget__button contact-action__button"
        type="button"
        data-copy-value="${items[0].value}"
        data-copy-default="点击即可复制邮箱"
        data-copy-keyword="邮箱"
      >
        <span class="contact-action__value">${items[0].value}</span>
        <span class="contact-action__arrow" aria-hidden="true">↗</span>
      </button>
      <span class="copy-widget__status">点击即可复制<span class="copy-widget__keyword">邮箱</span></span>
    </div>
    <div class="contact-action contact-copy-item">
      <button
        class="copy-widget__button contact-action__button"
        type="button"
        data-copy-value="${phoneNumber}"
        data-copy-default="点击即可复制电话/微信"
        data-copy-keyword="电话/微信"
      >
        <span class="contact-action__value">${phoneNumber}</span>
        <span class="contact-action__arrow" aria-hidden="true">↗</span>
      </button>
      <span class="copy-widget__status">点击即可复制<span class="copy-widget__keyword">电话/微信</span></span>
    </div>
  `;
}

const FRIEND_STORAGE_PREFIX = "friend-space-v1:";
const MEETING_REMINDER_DAYS = 60;
const FARM_ACTIONS_FOR_FRUIT = 6;

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getTodayKey() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function daysSince(dateString) {
  if (!dateString) return 0;
  const target = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(target.getTime())) return 0;
  return Math.max(0, Math.floor((Date.now() - target.getTime()) / 86400000));
}

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, Number(value) || 0));
}

function createFriendState(email) {
  const displayName = email.split("@")[0] || "朋友";
  return {
    profile: {
      name: displayName,
      email,
      avatar: "",
    },
    coins: 0,
    level: 1,
    lastDailyClaim: "",
    notice: "",
    mapMarkers: [],
    meetings: [],
    farm: {
      wish: "身体健康",
      progress: 0,
      fruit: "",
      lastWatered: "",
      lastFertilized: "",
    },
    bottles: [],
    pet: {
      type: "cat",
      name: "",
      closeness: 0,
      hunger: 82,
      hygiene: 82,
      health: 100,
      clothes: "#b7dc55",
      sick: false,
      lastCareAt: "",
    },
  };
}

function getFriendStorageKey(email) {
  return `${FRIEND_STORAGE_PREFIX}${email.toLowerCase()}`;
}

function normalizeFriendState(email, saved) {
  const fallback = createFriendState(email);
  if (!saved || typeof saved !== "object") return fallback;
  return {
    ...fallback,
    ...saved,
    profile: { ...fallback.profile, ...saved.profile, email },
    farm: { ...fallback.farm, ...saved.farm },
    pet: { ...fallback.pet, ...saved.pet },
    mapMarkers: Array.isArray(saved.mapMarkers) ? saved.mapMarkers : [],
    meetings: Array.isArray(saved.meetings) ? saved.meetings : [],
    bottles: Array.isArray(saved.bottles) ? saved.bottles : [],
  };
}

function readLocalFriendState(email) {
  try {
    return JSON.parse(localStorage.getItem(getFriendStorageKey(email)) || "null");
  } catch (error) {
    return null;
  }
}

async function loadFriendState(email, supabaseClient, userId) {
  const localState = normalizeFriendState(email, readLocalFriendState(email));
  if (!supabaseClient || !userId) return localState;

  try {
    const { data, error } = await supabaseClient
      .from("friend_space_states")
      .select("state")
      .eq("user_id", userId)
      .maybeSingle();
    if (error) throw error;

    if (data?.state) {
      const databaseState = normalizeFriendState(email, data.state);
      localStorage.setItem(getFriendStorageKey(email), JSON.stringify(databaseState));
      return databaseState;
    }

    if (readLocalFriendState(email)) {
      await supabaseClient.from("friend_space_states").upsert({
        user_id: userId,
        state: localState,
      });
    }
  } catch (error) {
    console.warn("Friend Space database read failed; using local backup.", error);
  }

  return localState;
}

function saveFriendState(email, state, supabaseClient, userId) {
  localStorage.setItem(getFriendStorageKey(email), JSON.stringify(state));
  if (!supabaseClient || !userId) return;

  supabaseClient
    .from("friend_space_states")
    .upsert({
      user_id: userId,
      state,
    })
    .then(({ error }) => {
      if (error) {
        console.warn("Friend Space database save failed; local backup kept.", error);
      }
    });
}

function getPetName(type) {
  return type === "dog" ? "狗狗" : "猫猫";
}

function getPetDisplayName(pet) {
  return String(pet?.name || "").trim() || getPetName(pet?.type);
}

async function renderFriendContent(data, userEmail, supabaseClient, userId, onLogout) {
  const oldRoot = document.getElementById("friendSpaceRoot");
  if (!oldRoot || !userEmail) return;
  const root = oldRoot.cloneNode(false);
  oldRoot.replaceWith(root);
  if (!root || !userEmail) return;

  root.innerHTML = `<p class="friend-loading">正在加载朋友版空间...</p>`;
  const state = await loadFriendState(userEmail, supabaseClient, userId);
  const today = getTodayKey();
  let dailyClaimed = false;

  if (state.lastDailyClaim !== today) {
    state.lastDailyClaim = today;
    state.coins += 1;
    state.notice = "今日登录奖励 +1 金币，慢慢把自己的小世界养起来。";
    dailyClaimed = true;
  }

  if (
    state.pet.lastCareAt &&
    daysSince(state.pet.lastCareAt) >= 3 &&
    !state.pet.sick
  ) {
    state.pet.sick = true;
    state.pet.health = Math.min(state.pet.health, 28);
    state.notice = `${getPetName(state.pet.type)}生病了，记得照顾它。`;
  }

  saveFriendState(userEmail, state, supabaseClient, userId);

  const getLatestMeetings = () => {
    const latest = new Map();
    state.meetings.forEach((meeting) => {
      const old = latest.get(meeting.name);
      if (!old || meeting.date > old.date) latest.set(meeting.name, meeting);
    });
    return [...latest.values()];
  };

  const getReminderMeetings = () =>
    getLatestMeetings().filter((meeting) => daysSince(meeting.date) >= MEETING_REMINDER_DAYS);

  let routeMap = null;
  let locateRoutePlace = null;
  let placeLookupVersion = 0;

  const renderBoard = () => {
    const reminders = getReminderMeetings();
    const reminderMarkup = reminders.length
      ? reminders
          .map(
            (meeting) => `
              <div class="friend-alert">
                <span class="friend-alert__icon" aria-hidden="true">!</span>
                <p>好久没和<strong>${escapeHTML(meeting.name)}</strong>见面了，友情需要常联系！快去找她玩吧！</p>
              </div>
            `,
          )
          .join("")
      : `<div class="friend-empty-state">还没有需要提醒的见面记录，先约下一次见面吧。</div>`;

    return `
      <div class="friend-route-map" id="friendRouteMap" role="application" aria-label="朋友路线地图">
        <div class="friend-map-loading">地图加载中...</div>
      </div>
      <div class="friend-map-caption">
        <span class="friend-map-caption__dot" aria-hidden="true"></span>
        点击地图选择下一站，已保存的地点会用小人棋子显示，并按添加顺序连成路线。
      </div>
      <div class="friend-board__side">
        <div class="friend-map-summary">
          <strong>${state.mapMarkers.length}</strong>
          <span>个路线地点</span>
        </div>
        <div class="friend-alerts">
          <p class="friend-mini-label">FRIENDSHIP CHECK-IN</p>
          ${reminderMarkup}
        </div>
        <div class="friend-record-list">
          <p class="friend-mini-label">最近见面</p>
          ${
            state.meetings.length
              ? state.meetings
                  .slice()
                  .sort((a, b) => b.date.localeCompare(a.date))
                  .slice(0, 4)
                  .map(
                    (meeting) => `
                      <div class="friend-record">
                        <strong>${escapeHTML(meeting.name)}</strong>
                        <span>${escapeHTML(meeting.date)} · ${escapeHTML(meeting.place)}</span>
                      </div>
                    `,
                  )
                  .join("")
              : `<div class="friend-empty-state">还没有见面记录。</div>`
          }
        </div>
      </div>
    `;
  };

  const setupRouteMap = () => {
    const mapElement = root.querySelector("#friendRouteMap");
    if (!mapElement) return;

    if (!window.L) {
      mapElement.innerHTML = `
        <div class="friend-map-error">
          地图组件暂时没有加载成功，请检查网络后刷新页面。
        </div>
      `;
      return;
    }

    routeMap?.remove();
    routeMap = window.L.map(mapElement, {
      zoomControl: true,
      scrollWheelZoom: true,
    }).setView([30.5, 114], 4.5);

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>',
    }).addTo(routeMap);

    const routePoints = state.mapMarkers
      .map((marker) => ({
        ...marker,
        latitude: Number(marker.latitude),
        longitude: Number(marker.longitude),
      }))
      .filter(
        (marker) =>
          Number.isFinite(marker.latitude) &&
          Number.isFinite(marker.longitude),
      );

    const createPieceIcon = (marker) => window.L.divIcon({
      className: "friend-map-piece-icon",
      html: `<span aria-hidden="true">${escapeHTML(marker.piece || "🧍")}</span>`,
      iconSize: [38, 38],
      iconAnchor: [19, 34],
      popupAnchor: [0, -30],
    });

    routePoints.forEach((marker, index) => {
      const popup = `
        <strong>${index + 1}. ${escapeHTML(marker.name)}</strong>
        <br />${escapeHTML(marker.place)}
        ${marker.date ? `<br />${escapeHTML(marker.date)}` : ""}
        ${marker.note ? `<br /><span>${escapeHTML(marker.note)}</span>` : ""}
      `;
      window.L.marker([marker.latitude, marker.longitude], { icon: createPieceIcon(marker) })
        .addTo(routeMap)
        .bindPopup(popup);
    });

    if (routePoints.length > 1) {
      window.L.polyline(
        routePoints.map((marker) => [marker.latitude, marker.longitude]),
        {
          color: "#7eaa31",
          weight: 4,
          opacity: 0.9,
          dashArray: "8 8",
        },
      ).addTo(routeMap);
    }

    if (routePoints.length > 1) {
      routeMap.fitBounds(
        routePoints.map((marker) => [marker.latitude, marker.longitude]),
        { padding: [28, 28], maxZoom: 8 },
      );
    } else if (routePoints.length === 1) {
      routeMap.setView([routePoints[0].latitude, routePoints[0].longitude], 8);
    }

    let pendingPin = null;
    const selectPoint = (latitude, longitude, label = "") => {
      const latitudeInput = root.querySelector('[name="latitude"]');
      const longitudeInput = root.querySelector('[name="longitude"]');
      const pointStatus = root.querySelector("#friendMapPointStatus");
      if (latitudeInput) latitudeInput.value = String(latitude);
      if (longitudeInput) longitudeInput.value = String(longitude);
      if (pointStatus) {
        pointStatus.textContent = label || `已选择：${latitude}, ${longitude}`;
        pointStatus.dataset.state = "selected";
      }
      pendingPin?.remove();
      pendingPin = window.L.circleMarker([latitude, longitude], {
        radius: 9,
        color: "#1d2420",
        weight: 3,
        fillColor: "#f3d98b",
        fillOpacity: 1,
      }).addTo(routeMap);
    };

    locateRoutePlace = async () => {
      const placeInput = root.querySelector('[name="place"]');
      const place = String(placeInput?.value || "").trim();
      const lookupVersion = ++placeLookupVersion;
      const pointStatus = root.querySelector("#friendMapPointStatus");
      if (!place) {
        if (pointStatus) pointStatus.textContent = "先输入想去的地点，再为你定位。";
        placeInput?.focus();
        return;
      }
      if (pointStatus) {
        pointStatus.textContent = `正在定位“${place}”…`;
        pointStatus.dataset.state = "loading";
      }
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&accept-language=zh-CN&q=${encodeURIComponent(place)}`,
          { headers: { Accept: "application/json" } },
        );
        if (!response.ok) throw new Error("PLACE_LOOKUP_FAILED");
        const results = await response.json();
        if (lookupVersion !== placeLookupVersion || place !== String(placeInput?.value || "").trim()) return;
        const result = Array.isArray(results) ? results[0] : null;
        const latitude = Number(result?.lat);
        const longitude = Number(result?.lon);
        if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
          throw new Error("PLACE_NOT_FOUND");
        }
        routeMap.setView([latitude, longitude], 12, { animate: true });
        selectPoint(latitude, longitude, `已定位到：${result.display_name || place}`);
      } catch (error) {
        if (lookupVersion !== placeLookupVersion) return;
        if (pointStatus) {
          pointStatus.textContent = "暂时找不到这个地点；可以换一个更完整的地点名称，或直接点击地图选点。";
          pointStatus.dataset.state = "error";
        }
      }
    };

    routeMap.on("click", (event) => {
      const latitude = Number(event.latlng.lat.toFixed(6));
      const longitude = Number(event.latlng.lng.toFixed(6));
      selectPoint(latitude, longitude);
    });

    window.setTimeout(() => routeMap?.invalidateSize(), 0);
  };

  const renderFarm = () => {
    const farm = state.farm;
    const waterReady = farm.lastWatered !== today;
    const fertilizerReady = farm.lastFertilized !== today;
    const progress = Math.min(100, Math.round((farm.progress / FARM_ACTIONS_FOR_FRUIT) * 100));
    return `
      <div class="friend-farm-visual">
        <div class="friend-farm-sky">
          <span class="friend-cloud friend-cloud--one"></span>
          <span class="friend-cloud friend-cloud--two"></span>
          <div class="friend-sun" aria-hidden="true">☼</div>
        </div>
        <div class="friend-farm-soil">
          <div class="friend-sprout${farm.progress >= 3 ? " is-growing" : ""}${farm.fruit ? " is-fruitful" : ""}">
            <span class="friend-sprout__stem"></span>
            <span class="friend-sprout__leaf friend-sprout__leaf--left"></span>
            <span class="friend-sprout__leaf friend-sprout__leaf--right"></span>
            ${farm.fruit ? `<span class="friend-sprout__fruit" title="${escapeHTML(farm.fruit)}">●</span>` : ""}
          </div>
        </div>
      </div>
      <div class="friend-farm-copy">
        <p class="friend-mini-label">WISH FARM</p>
        <h3>${farm.fruit ? `愿望已经结成果实：${escapeHTML(farm.fruit)}` : `正在种下：${escapeHTML(farm.wish)}`}</h3>
        <p>${farm.fruit ? "可以重新选择一个愿望，继续照顾下一颗种子。" : "每天浇水和施肥，让愿望一点点长出来。"}</p>
        <div class="friend-progress">
          <div class="friend-progress__header">
            <span>成长进度</span>
            <strong>${progress}%</strong>
          </div>
          <div class="friend-progress__track"><span style="width:${progress}%"></span></div>
        </div>
        <div class="friend-farm-actions">
          <button class="friend-action-button" type="button" data-friend-action="water" ${waterReady && !farm.fruit ? "" : "disabled"}>
            浇水 <small>${waterReady && !farm.fruit ? "+1 金币" : "今天完成"}</small>
          </button>
          <button class="friend-action-button" type="button" data-friend-action="fertilize" ${fertilizerReady && !farm.fruit ? "" : "disabled"}>
            施肥 <small>${fertilizerReady && !farm.fruit ? "+1 金币" : "今天完成"}</small>
          </button>
        </div>
      </div>
    `;
  };

  const renderPet = () => {
    const pet = state.pet;
    const petName = getPetDisplayName(pet);
    const reaction = String(pet.reaction || "");
    return `
      <div class="friend-pet-visual">
        <div class="friend-pet-orbit friend-pet-orbit--one"></div>
        <div class="friend-pet-orbit friend-pet-orbit--two"></div>
        <div class="friend-pet-avatar${reaction ? " is-reacting is-reacting--" + escapeHTML(pet.reactionAction || "pet") : ""}" style="--pet-clothes:${pet.clothes}">
          <span class="friend-pet-clothes"></span>
          <span class="friend-pet-face" aria-label="${escapeHTML(petName)}">${pet.type === "dog" ? "🐶" : "🐱"}</span>
        </div>
        ${reaction ? `<span class="friend-pet-reaction" aria-live="polite">${escapeHTML(reaction)}</span>` : ""}
        <span class="friend-pet-status">${pet.sick ? "需要照顾" : "状态很好"}</span>
      </div>
      <div class="friend-pet-copy">
        <p class="friend-mini-label">MY COMPANION</p>
        <h3>${escapeHTML(petName)}</h3>
        <p>${pet.sick ? `${escapeHTML(petName)}好像生病了，先多陪陪它。` : "每天做一点小事，亲密度就会慢慢增加。"}</p>
        <div class="friend-stat-list">
          <div><span>亲密度</span><strong>${pet.closeness}</strong></div>
          <div><span>饱腹</span><strong>${pet.hunger}</strong></div>
          <div><span>清洁</span><strong>${pet.hygiene}</strong></div>
          <div><span>健康</span><strong>${pet.health}</strong></div>
        </div>
        <div class="friend-pet-actions">
          ${[
            ["pet", "摸头"],
            ["train", "社会化训练"],
            ["walk", "遛一遛"],
            ["feed", "喂食"],
            ["clean", "铲屎"],
          ]
            .map(
              ([action, label]) =>
                `<button type="button" class="friend-small-action" data-friend-action="pet-${action}">${label}</button>`,
            )
            .join("")}
        </div>
        <div class="friend-clothes">
          <span>换一件衣服</span>
          ${["#b7dc55", "#f3d98b", "#91c8bc", "#e4a86c", "#c3b2dd"]
            .map(
              (color) =>
                `<button type="button" class="friend-color-swatch${pet.clothes === color ? " is-active" : ""}" style="--swatch:${color}" data-friend-clothes="${color}" aria-label="选择${color}衣服"></button>`,
            )
            .join("")}
        </div>
        <form class="friend-inline-form" data-friend-form="pet-name">
          <label>给${getPetName(pet.type)}起名
            <input name="petName" maxlength="20" value="${escapeHTML(pet.name)}" placeholder="例如：团子" />
          </label>
          <button class="friend-secondary-button" type="submit">保存名字</button>
        </form>
      </div>
    `;
  };

  const renderBottles = () => {
    const bottles = state.bottles
      .slice()
      .sort((a, b) => a.openAt.localeCompare(b.openAt));
    return bottles.length
      ? bottles
          .map((bottle) => {
            const opened = bottle.openAt <= today;
            return `
              <article class="friend-bottle${opened ? " is-open" : ""}">
                <span class="friend-bottle__cap" aria-hidden="true">✦</span>
                <div>
                  <strong>${opened ? "今天可以打开" : `将在 ${escapeHTML(bottle.openAt)} 漂来`}</strong>
                  <small>写给${escapeHTML(bottle.recipientName || "未来的自己")}</small>
                  <p>${opened ? escapeHTML(bottle.message) : `先把这封信交给${escapeHTML(bottle.recipientName || "未来的自己")}。`}</p>
                </div>
              </article>
            `;
          })
          .join("")
      : `<div class="friend-empty-state">还没有漂流瓶，写一封信给未来的自己吧。</div>`;
  };

  const draw = () => {
    root.innerHTML = `
      <div class="friend-space" aria-label="朋友版互动空间">
        <header class="friend-space__header">
          <div class="friend-profile">
            <label class="friend-avatar" title="上传头像">
              ${
                state.profile.avatar
                  ? `<img src="${state.profile.avatar}" alt="我的头像" />`
                  : `<span aria-hidden="true">${escapeHTML(state.profile.name.slice(0, 1).toUpperCase())}</span>`
              }
              <input id="friendAvatarInput" type="file" accept="image/*" />
              <small>更换头像</small>
            </label>
            <div>
              <p class="friend-space__eyebrow">FRIEND MODE</p>
              <h1>${escapeHTML(state.profile.name)}</h1>
              <p>${escapeHTML(state.profile.email)}</p>
              <form class="friend-name-form" data-friend-form="profile">
                <input name="profileName" maxlength="24" value="${escapeHTML(state.profile.name)}" aria-label="修改我的名字" />
                <button type="submit">修改名字</button>
              </form>
            </div>
          </div>
          <div class="friend-space__controls">
            <div class="friend-level">
              <span class="friend-level__star" aria-hidden="true">★</span>
              <div><small>LEVEL</small><strong>LV.${state.level}</strong></div>
            </div>
            <div class="friend-coins"><span aria-hidden="true">●</span><strong>${state.coins}</strong><small>金币</small></div>
            <button class="friend-logout" data-friend-action="logout" type="button">回到游客版 <span aria-hidden="true">↗</span></button>
          </div>
        </header>

        <p class="friend-toast" role="status" aria-live="polite">${escapeHTML(state.notice || (dailyClaimed ? "今日登录奖励 +1 金币" : ""))}</p>

        <section class="friend-module friend-module--board">
          <div class="friend-module__heading">
            <div><p class="friend-space__eyebrow">FRIEND ROUTES</p><h2>友谊棋盘</h2><p>把下一次见面和想去的地方，放到同一张地图上。</p></div>
            <span class="friend-module__stamp">PLAY TOGETHER</span>
          </div>
          <div class="friend-board-layout">
            <div>${renderBoard()}</div>
            <form class="friend-form friend-form--route" data-friend-form="route">
              <p class="friend-mini-label">放下一颗棋子</p>
              <label>朋友 / 目的地<input name="name" placeholder="例如：小王" required /></label>
              <label>地点<input name="place" data-friend-locate placeholder="例如：南京夫子庙" required /></label>
              <button class="friend-location-button" type="button" data-friend-action="locate-place">定位到地图</button>
              <label>时间<input name="date" type="month" required /></label>
              <label>备注<input name="note" placeholder="例如：九月份一起看展" /></label>
              <label>选择小人形象
                <select name="piece">
                  ${["🧍", "👩", "👨", "🧑", "🧙", "🦸", "🐱", "🐶"]
                    .map((piece) => `<option value="${piece}">${piece} ${piece === "🧍" ? "默认小人" : "棋子"}</option>`)
                    .join("")}
                </select>
              </label>
              <input name="latitude" type="hidden" />
              <input name="longitude" type="hidden" />
              <p class="friend-map-point-status" id="friendMapPointStatus">输入地点会自动定位；也可以点击地图微调位置。</p>
              <button class="friend-primary-button" type="submit">放到棋盘上 <span aria-hidden="true">↗</span></button>
            </form>
          </div>
        </section>

        <section class="friend-module friend-module--meet">
          <div class="friend-module__heading"><div><p class="friend-space__eyebrow">MEET LOG</p><h2>见面记录</h2><p>记录每一次真实见面，也让棋盘提醒我们不要失联。</p></div></div>
          <div class="friend-meet-layout">
            <div class="friend-meet-cards">
              ${
                state.meetings.length
                  ? state.meetings
                      .slice()
                      .sort((a, b) => b.date.localeCompare(a.date))
                      .map(
                        (meeting) => `
                          <article class="friend-meet-card">
                            <span>${escapeHTML(meeting.date)}</span>
                            <strong>${escapeHTML(meeting.name)}</strong>
                            <p>${escapeHTML(meeting.place)}</p>
                          </article>
                        `,
                      )
                      .join("")
                  : `<div class="friend-empty-state">第一次见面记录，等你来写。</div>`
              }
            </div>
            <form class="friend-form" data-friend-form="meeting">
              <p class="friend-mini-label">新增一次见面</p>
              <label>和谁<input name="name" placeholder="朋友名字" required /></label>
              <label>在哪里<input name="place" placeholder="见面地点" required /></label>
              <label>什么时候<input name="date" type="date" required /></label>
              <button class="friend-primary-button" type="submit">保存见面记录 <span aria-hidden="true">↗</span></button>
            </form>
          </div>
        </section>

        <div class="friend-feature-grid">
          <section class="friend-module friend-module--farm">
            <div class="friend-module__heading"><div><p class="friend-space__eyebrow">WISH FARM</p><h2>愿望农场</h2></div></div>
            <div class="friend-farm-layout">
              ${renderFarm()}
              <form class="friend-form friend-form--wish" data-friend-form="farm">
                <p class="friend-mini-label">选择一颗愿望种子</p>
                <label>我的愿望
                  <select name="wish">
                    ${["身体健康", "吃一顿寿喜烧", "去看一次海", "顺利完成一个作品"]
                      .map((wish) => `<option value="${wish}"${state.farm.wish === wish ? " selected" : ""}>${wish}</option>`)
                      .join("")}
                    <option value="custom"${["身体健康", "吃一顿寿喜烧", "去看一次海", "顺利完成一个作品"].includes(state.farm.wish) ? "" : " selected"}>自定义愿望…</option>
                  </select>
                </label>
                <label class="friend-custom-wish${["身体健康", "吃一顿寿喜烧", "去看一次海", "顺利完成一个作品"].includes(state.farm.wish) ? "" : " is-visible"}">自定义愿望
                  <input
                    name="customWish"
                    maxlength="60"
                    value="${escapeHTML(
                      ["身体健康", "吃一顿寿喜烧", "去看一次海", "顺利完成一个作品"].includes(state.farm.wish)
                        ? ""
                        : state.farm.wish,
                    )}"
                    placeholder="例如：今年通过潜水证考试"
                  />
                </label>
                <button class="friend-secondary-button" type="submit">重新播种</button>
              </form>
            </div>
          </section>

          <section class="friend-module friend-module--pet">
            <div class="friend-module__heading"><div><p class="friend-space__eyebrow">PET LIFE</p><h2>宠物小屋</h2></div></div>
            <div class="friend-pet-layout">
              ${renderPet()}
              <div class="friend-pet-choice">
                <span>选择陪伴者</span>
                <button type="button" class="${state.pet.type === "cat" ? "is-active" : ""}" data-friend-pet="cat">🐱 猫猫</button>
                <button type="button" class="${state.pet.type === "dog" ? "is-active" : ""}" data-friend-pet="dog">🐶 狗狗</button>
              </div>
            </div>
          </section>
        </div>

        <section class="friend-module friend-module--bottle">
          <div class="friend-module__heading"><div><p class="friend-space__eyebrow">MESSAGE IN THE RIVER</p><h2>漂流瓶</h2><p>写给未来的自己，也可以把心意交给一位好朋友。</p></div></div>
          <div class="friend-bottle-layout">
            <div class="friend-bottle-scene"><div class="friend-river-illustration" aria-label="一条流向远方的河"><span class="friend-river-mountain friend-river-mountain--one"></span><span class="friend-river-mountain friend-river-mountain--two"></span><span class="friend-river-flow"></span><span class="friend-river-boat">⌁</span></div><div class="friend-bottle-list">${renderBottles()}</div></div>
            <form class="friend-form" data-friend-form="bottle">
              <p class="friend-mini-label">投递一封信</p>
              <label>打开时间<input name="openAt" type="date" min="${today}" required /></label>
              <label>写给谁
                <select name="recipientType">
                  <option value="self">未来的自己</option>
                  <option value="friend">一位好朋友</option>
                </select>
              </label>
              <label class="friend-recipient-name">朋友的名字<input name="recipientName" maxlength="24" placeholder="例如：小王" /></label>
              <label>想说的话<textarea name="message" rows="5" placeholder="把想说的话交给河流吧。" required></textarea></label>
              <button class="friend-primary-button" type="submit">投进时间的河里 <span aria-hidden="true">↗</span></button>
            </form>
          </div>
        </section>
      </div>
    `;
    setupRouteMap();
  };

  const update = (notice = "") => {
    if (notice) state.notice = notice;
    saveFriendState(userEmail, state, supabaseClient, userId);
    draw();
  };

  root.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-friend-action]");
    if (actionButton) {
      const action = actionButton.dataset.friendAction;
      if (action === "logout") {
        onLogout?.();
        return;
      }
      if (action === "locate-place") {
        locateRoutePlace?.();
        return;
      }
      if (action === "water" || action === "fertilize") {
        const farmKey = action === "water" ? "lastWatered" : "lastFertilized";
        if (state.farm[farmKey] === today || state.farm.fruit) return;
        state.farm[farmKey] = today;
        state.farm.progress += 1;
        state.coins += 1;
        if (state.farm.progress >= FARM_ACTIONS_FOR_FRUIT) {
          state.farm.fruit = `${state.farm.wish}的果实`;
          state.coins += 5;
          update("愿望结成果实了！额外获得 5 金币。");
        } else {
          update(`${action === "water" ? "浇水" : "施肥"}完成，+1 金币。`);
        }
        return;
      }
      if (action.startsWith("pet-")) {
        const petAction = action.replace("pet-", "");
        const pet = state.pet;
        const changes = {
          pet: [3, 0, 0, 2],
          train: [4, -4, 0, 3],
          walk: [2, -6, -5, 4],
          feed: [2, 25, -2, 3],
          clean: [1, 0, 22, 4],
        }[petAction];
        if (!changes) return;
        pet.closeness = clampNumber(pet.closeness + changes[0], 0, 100);
        pet.hunger = clampNumber(pet.hunger + changes[1], 0, 100);
        pet.hygiene = clampNumber(pet.hygiene + changes[2], 0, 100);
        pet.health = clampNumber(pet.health + changes[3], 0, 100);
        pet.lastCareAt = today;
        if (pet.health > 50 && pet.sick) pet.sick = false;
        const reactions = {
          pet: "蹭一蹭～",
          train: "眼睛亮晶晶！",
          walk: "开心地转圈圈！",
          feed: "吃得香香的！",
          clean: "变得干干净净！",
        };
        const actionLabels = {
          pet: "摸头",
          train: "社会化训练",
          walk: "遛一遛",
          feed: "喂食",
          clean: "铲屎",
        };
        pet.reaction = reactions[petAction];
        pet.reactionAction = petAction;
        update(`${getPetDisplayName(pet)}${pet.reaction}`);
        window.setTimeout(() => {
          if (state.pet.reaction !== reactions[petAction]) return;
          state.pet.reaction = "";
          state.pet.reactionAction = "";
          update(`${getPetDisplayName(pet)}很喜欢这次“${actionLabels[petAction]}”。`);
        }, 1300);
        return;
      }
    }

    const petChoice = event.target.closest("[data-friend-pet]");
    if (petChoice) {
      state.pet.type = petChoice.dataset.friendPet;
      state.pet.sick = false;
      update(`现在由${getPetName(state.pet.type)}陪你生活。`);
      return;
    }

    const clothesButton = event.target.closest("[data-friend-clothes]");
    if (clothesButton) {
      state.pet.clothes = clothesButton.dataset.friendClothes;
      update("换好新衣服了。");
    }
  });

  let placeLookupTimer = null;

  root.addEventListener("input", (event) => {
    if (!event.target.matches("[data-friend-locate]")) return;
    placeLookupVersion += 1;
    const routeForm = event.target.closest('[data-friend-form="route"]');
    const latitudeInput = routeForm?.querySelector('[name="latitude"]');
    const longitudeInput = routeForm?.querySelector('[name="longitude"]');
    if (latitudeInput) latitudeInput.value = "";
    if (longitudeInput) longitudeInput.value = "";
    window.clearTimeout(placeLookupTimer);
    placeLookupTimer = window.setTimeout(() => locateRoutePlace?.(), 750);
  });

  root.addEventListener("change", (event) => {
    if (event.target.matches('[name="wish"]')) {
      const customWish = root.querySelector(".friend-custom-wish");
      if (customWish) customWish.classList.toggle("is-visible", event.target.value === "custom");
      return;
    }
    if (event.target.matches('[name="recipientType"]')) {
      const recipientName = root.querySelector(".friend-recipient-name");
      if (recipientName) recipientName.classList.toggle("is-visible", event.target.value === "friend");
      return;
    }
    if (event.target.matches("[data-friend-locate]")) {
      locateRoutePlace?.();
      return;
    }
    if (event.target.id !== "friendAvatarInput") return;
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    if (file.size > 2 * 1024 * 1024) {
      update("头像图片请控制在 2MB 以内。");
      return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      state.profile.avatar = String(reader.result || "");
      update("头像已经换好了。");
    });
    reader.readAsDataURL(file);
  });

  root.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-friend-form]");
    if (!form) return;
    event.preventDefault();
    const formData = new FormData(form);
    const formType = form.dataset.friendForm;

    if (formType === "profile") {
      const name = String(formData.get("profileName") || "").trim();
      if (!name) {
        update("名字不能为空。请再试一次。");
        return;
      }
      state.profile.name = name;
      update(`好呀，现在叫你“${name}”。`);
      return;
    }

    if (formType === "route") {
      const latitudeValue = String(formData.get("latitude") || "").trim();
      const longitudeValue = String(formData.get("longitude") || "").trim();
      const latitude = Number(latitudeValue);
      const longitude = Number(longitudeValue);
      if (!latitudeValue || !longitudeValue || !Number.isFinite(latitude) || !Number.isFinite(longitude)
        || Math.abs(latitude) > 90 || Math.abs(longitude) > 180) {
        update("请先在地图上点击选择路线位置。");
        return;
      }
      state.mapMarkers.push({
        name: String(formData.get("name") || "").trim(),
        place: String(formData.get("place") || "").trim(),
        date: String(formData.get("date") || ""),
        note: String(formData.get("note") || "").trim(),
        piece: String(formData.get("piece") || "🧍"),
        latitude,
        longitude,
      });
      update("一颗新的路线棋子已经放到真实地图上。");
      return;
    }

    if (formType === "meeting") {
      state.meetings.push({
        name: String(formData.get("name") || "").trim(),
        place: String(formData.get("place") || "").trim(),
        date: String(formData.get("date") || ""),
      });
      update("见面记录保存好了。");
      return;
    }

    if (formType === "farm") {
      const selectedWish = String(formData.get("wish") || "身体健康").trim();
      const customWish = String(formData.get("customWish") || "").trim();
      const wish = selectedWish === "custom" ? customWish : selectedWish;
      if (!wish) {
        update("请填写一个愿望，或者选择一个预设愿望。");
        return;
      }
      if (wish.length > 60) {
        update("愿望请控制在 60 个字以内。");
        return;
      }
      state.farm.wish = wish;
      state.farm.progress = 0;
      state.farm.fruit = "";
      state.farm.lastWatered = "";
      state.farm.lastFertilized = "";
      update(`已经播下“${state.farm.wish}”这颗愿望种子。`);
      return;
    }

    if (formType === "pet-name") {
      state.pet.name = String(formData.get("petName") || "").trim();
      update(state.pet.name ? `${state.pet.name}有了自己的名字！` : `已恢复使用“${getPetName(state.pet.type)}”作为名字。`);
      return;
    }

    if (formType === "bottle") {
      const recipientType = String(formData.get("recipientType") || "self");
      const recipientName = recipientType === "friend"
        ? String(formData.get("recipientName") || "").trim()
        : "未来的自己";
      if (!recipientName) {
        update("写给好朋友时，请填上对方的名字。 ");
        return;
      }
      state.bottles.push({
        message: String(formData.get("message") || "").trim(),
        openAt: String(formData.get("openAt") || ""),
        recipientName,
      });
      update("漂流瓶已经投进时间的河里。");
    }
  });

  draw();
}

function setSiteMode(mode, userId = "") {
  const isFriend = mode === "friend";
  const guestContent = document.getElementById("guestContent");
  const friendContent = document.getElementById("friendContent");
  const modeSwitch = document.getElementById("modeSwitch");
  const modeSwitchLabel = document.getElementById("modeSwitchLabel");
  const friendGreeting = document.getElementById("friendGreeting");

  if (guestContent) guestContent.hidden = isFriend;
  if (friendContent) friendContent.hidden = !isFriend;
  document.body.dataset.siteMode = isFriend ? "friend" : "guest";

  if (modeSwitch) {
    modeSwitch.setAttribute("aria-label", isFriend ? "退出朋友版" : "切换至朋友版");
  }
  if (modeSwitchLabel) {
    modeSwitchLabel.textContent = isFriend ? "游客版" : "朋友版";
  }
  if (friendGreeting && userId) {
    friendGreeting.textContent = `你好，${userId}。这里是一块只在朋友版里出现的空间。`;
  }

  if (isFriend) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function closeAuthModal() {
  const modal = document.getElementById("authModal");
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("is-auth-open");
}

function openAuthModal() {
  const modal = document.getElementById("authModal");
  const emailInput = document.getElementById("authEmail");
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add("is-auth-open");
  window.requestAnimationFrame(() => emailInput?.focus());
}

function setAuthStatus(message, state = "") {
  const status = document.getElementById("authStatus");
  if (!status) return;
  status.textContent = message;
  status.dataset.state = state;
}

function getAuthRedirectUrl() {
  const currentUrl = window.location.href.split("#")[0];
  if (window.location.protocol === "http:" || window.location.protocol === "https:") {
    return currentUrl;
  }
  return "https://doublelee.cn/";
}

function setAuthMode(mode) {
  const isSignIn = mode === "signIn";
  const authTitle = document.getElementById("authTitle");
  const authIntro = document.getElementById("authIntro");
  const authSubmit = document.getElementById("authSubmit");
  const password = document.getElementById("authPassword");
  const authModePrompt = document.getElementById("authModePrompt");
  const authModeToggle = document.getElementById("authModeToggle");
  const authResend = document.getElementById("authResend");

  if (authTitle) authTitle.textContent = isSignIn ? "登录朋友版" : "注册朋友版";
  if (authIntro) {
    authIntro.textContent = isSignIn
      ? "输入邮箱和密码，登录后进入朋友版。"
      : "填写邮箱和密码，注册后请先完成邮箱验证。";
  }
  if (authSubmit) {
    authSubmit.textContent = isSignIn ? "登录并进入" : "注册并发送验证邮件";
  }
  if (password) {
    password.autocomplete = isSignIn ? "current-password" : "new-password";
  }
  if (authModePrompt) {
    authModePrompt.textContent = isSignIn ? "还没有账号？" : "已经有账号？";
  }
  if (authModeToggle) {
    authModeToggle.textContent = isSignIn ? "先来注册吧" : "返回登录";
  }
  if (authResend) authResend.hidden = true;
  setAuthStatus("");
}

function createSupabaseClient(data) {
  if (
    !data.auth.supabaseUrl ||
    !data.auth.publishableKey ||
    !window.supabase?.createClient
  ) {
    return null;
  }

  const authStorage = {
    getItem(key) {
      return localStorage.getItem("friend-remember-session") === "false"
        ? sessionStorage.getItem(key)
        : localStorage.getItem(key);
    },
    setItem(key, value) {
      const remember = localStorage.getItem("friend-remember-session") !== "false";
      const target = remember ? localStorage : sessionStorage;
      const other = remember ? sessionStorage : localStorage;
      target.setItem(key, value);
      other.removeItem(key);
    },
    removeItem(key) {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    },
  };

  return window.supabase.createClient(data.auth.supabaseUrl, data.auth.publishableKey, {
    auth: { storage: authStorage },
  });
}

async function authenticateFriend(mode, credentials, client) {
  if (!client) {
    throw new Error("SUPABASE_CONFIG_MISSING");
  }

  if (mode === "signUp") {
    const { data, error } = await client.auth.signUp({
      email: credentials.email,
      password: credentials.password,
      options: {
        emailRedirectTo: getAuthRedirectUrl(),
      },
    });
    if (error) throw error;
    return data;
  }

  const { data, error } = await client.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });
  if (error) throw error;
  return data;
}

function bindFriendMode(data) {
  const supabaseClient = createSupabaseClient(data);
  let authMode = "signIn";
  let currentUserEmail = "";
  let renderedFriendEmail = "";

  const modeSwitch = document.getElementById("modeSwitch");
  const modal = document.getElementById("authModal");
  const closeButton = document.getElementById("authClose");
  const form = document.getElementById("authForm");
  const authModeToggle = document.getElementById("authModeToggle");
  const authResend = document.getElementById("authResend");
  const submit = document.getElementById("authSubmit");
  const rememberInput = document.getElementById("authRemember");
  let pendingVerificationEmail = "";
  let shouldRememberSession = localStorage.getItem("friend-remember-session") !== "false";

  if (rememberInput) rememberInput.checked = shouldRememberSession;

  modeSwitch?.addEventListener("click", () => {
    if (document.body.dataset.siteMode === "friend") {
      if (supabaseClient) {
        supabaseClient.auth.signOut();
      } else {
        currentUserEmail = "";
        setSiteMode("guest");
      }
      return;
    }
    setAuthMode("signIn");
    if (rememberInput) rememberInput.checked = shouldRememberSession;
    openAuthModal();
  });

  closeButton?.addEventListener("click", closeAuthModal);
  modal?.addEventListener("click", (event) => {
    if (event.target.matches("[data-auth-close]")) closeAuthModal();
  });
  authModeToggle?.addEventListener("click", () => {
    authMode = authMode === "signIn" ? "signUp" : "signIn";
    setAuthMode(authMode);
  });
  authResend?.addEventListener("click", async () => {
    if (!supabaseClient || !pendingVerificationEmail) return;
    authResend.disabled = true;
    setAuthStatus("正在重新发送验证邮件...", "loading");
    const { error } = await supabaseClient.auth.resend({
      type: "signup",
      email: pendingVerificationEmail,
      options: {
        emailRedirectTo: getAuthRedirectUrl(),
      },
    });
    if (error) {
      setAuthStatus("验证邮件暂时没有发送成功，请检查 Supabase 邮件设置。", "error");
    } else {
      setAuthStatus("验证邮件已重新发送，请检查收件箱和垃圾邮件文件夹。", "notice");
    }
    authResend.disabled = false;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.hidden) {
      closeAuthModal();
    }
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("authEmail");
    const passwordInput = document.getElementById("authPassword");
    const email = emailInput?.value.trim() || "";
    const password = passwordInput?.value || "";
    shouldRememberSession = Boolean(rememberInput?.checked);
    localStorage.setItem("friend-remember-session", String(shouldRememberSession));

    if (!emailInput?.validity.valid) {
      setAuthStatus("请输入有效的邮箱地址。", "error");
      emailInput?.focus();
      return;
    }
    if (password.length < 8) {
      setAuthStatus("密码至少需要 8 位。", "error");
      passwordInput?.focus();
      return;
    }

    if (!supabaseClient) {
      setAuthStatus(
        "页面入口已经准备好，但还没有配置 Supabase。请先填写项目配置。",
        "notice",
      );
      return;
    }

    if (submit) submit.disabled = true;
    setAuthStatus(authMode === "signIn" ? "正在登录..." : "正在创建账号...", "loading");

    try {
      const result = await authenticateFriend(
        authMode,
        { email, password },
        supabaseClient,
      );
      if (authMode === "signUp" && !result.session) {
        pendingVerificationEmail = email;
        setAuthStatus(
          "注册成功。请查收验证邮件，点击邮件中的验证按钮后，页面会自动进入朋友版。当前页面会保持不变。",
          "notice",
        );
        if (passwordInput) passwordInput.value = "";
        if (authResend) authResend.hidden = false;
        return;
      }
      currentUserEmail = email;
      closeAuthModal();
      setSiteMode("friend", currentUserEmail);
      if (renderedFriendEmail !== currentUserEmail) {
        renderedFriendEmail = currentUserEmail;
        renderFriendContent(
          data,
          currentUserEmail,
          supabaseClient,
          result.user?.id || result.session?.user?.id,
          () => supabaseClient.auth.signOut(),
        );
      }
      form.reset();
      if (rememberInput) rememberInput.checked = shouldRememberSession;
    } catch (error) {
      const rawMessage = String(error?.message || "");
      const message = rawMessage.toLowerCase().includes("invalid login credentials")
        ? "邮箱或密码不正确，请检查后再试。"
        : rawMessage.toLowerCase().includes("email not confirmed")
          ? "请先完成邮箱确认，再登录朋友版。"
          : rawMessage.toLowerCase().includes("already registered")
            ? "这个邮箱已经注册过，请切换到登录。"
            : "认证服务暂时无法完成操作，请稍后再试。";
      setAuthStatus(message, "error");
    } finally {
      if (submit) submit.disabled = false;
    }
  });

  if (supabaseClient) {
    const mountFriendSpace = (user) => {
      const email = user?.email || "";
      if (!email || renderedFriendEmail === email) return;
      renderedFriendEmail = email;
      renderFriendContent(
        data,
        email,
        supabaseClient,
        user.id,
        () => supabaseClient.auth.signOut(),
      );
    };

    supabaseClient.auth.getSession().then(({ data: sessionData }) => {
      const session = sessionData?.session;
      if (session?.user?.email) {
        currentUserEmail = session.user.email;
        closeAuthModal();
        setSiteMode("friend", currentUserEmail);
        mountFriendSpace(session.user);
      }
    });

    supabaseClient.auth.onAuthStateChange((_event, session) => {
      if (session?.user?.email) {
        currentUserEmail = session.user.email;
        closeAuthModal();
        setSiteMode("friend", currentUserEmail);
        mountFriendSpace(session.user);
      } else {
        currentUserEmail = "";
        renderedFriendEmail = "";
        setSiteMode("guest");
      }
    });
  }
}

// Small progressive enhancements: content stays visible if animation is unavailable.
function bindPortfolioEffects() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealAnimations = new Set();
  let revealObserver;
  if (!reducedMotion.matches && "IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealObserver.unobserve(entry.target);
        if (reducedMotion.matches || typeof entry.target.animate !== "function") return;
        const animation = entry.target.animate([
          { opacity: 0, transform: "translateY(18px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 600, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
        revealAnimations.add(animation);
        animation.onfinish = () => revealAnimations.delete(animation);
      });
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });
    document.querySelectorAll("#guestContent .section-header, #educationList > *, #projectList > *, #workList > *, #skillList > *, #contact .contact-panel").forEach((element) => {
      // Leave initially visible content steady; animate only content reached by scrolling.
      if (element.getBoundingClientRect().top >= window.innerHeight) revealObserver.observe(element);
    });
  }
  const title = document.getElementById("heroTitle");
  let titleAnimation;
  if (title && !reducedMotion.matches && typeof title.animate === "function") {
    titleAnimation = title.animate([
      { opacity: 0, filter: "blur(12px)", transform: "translateY(16px)" },
      { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
    ], { duration: 850, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
  }

  const cards = document.querySelectorAll("#projectList .project-item");
  const clearSpotlight = () => cards.forEach((card) => card.classList.remove("has-spotlight"));
  cards.forEach((card) => {
    card.classList.add("project-spotlight");
    card.addEventListener("pointermove", (event) => {
      if (reducedMotion.matches || event.pointerType === "touch") return;
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
      card.classList.add("has-spotlight");
    }, { passive: true });
    card.addEventListener("pointerleave", () => card.classList.remove("has-spotlight"));
    card.addEventListener("pointercancel", () => card.classList.remove("has-spotlight"));
  });
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) {
      revealObserver?.disconnect();
      revealAnimations.forEach((animation) => animation.cancel());
      revealAnimations.clear();
      titleAnimation?.cancel();
      clearSpotlight();
    }
  });
}

function renderPortfolio(data) {
  renderNav(data.nav);
  bindNavActivation();
  setText("heroEyebrow", data.hero.eyebrow);
  setHTML("heroTitle", data.hero.title);
  setText("heroSubtitle", data.hero.subtitle);
  setText("heroLead", data.hero.lead);
  renderTypographicWall("heroTags", data.hero.tags);
  bindTypographicWall("heroTags");

  setText("aboutSummary", data.projects.summary);
  renderProjects("projectList", data.projects.items);
  bindProjectGalleries(data.projects.items);
  bindProjectDirectory(data.projects.items);
  bindProjectModels();

  renderEducation("educationList", data.education.items);

  setText("workSummary", data.work.summary);
  renderTimeline("workList", data.work.items);
  bindWorkTimeline();
  bindWorkGalleries();

  setText("skillsSummary", data.skills.summary);
  renderSkills("skillList", data.skills.items);

  setText("contactSummary", data.contact.summary);
  renderContacts("contactList", data.contact.items);
  bindCopyWidget();
  bindSkillCards();

  setText("footer", data.footer);
  bindFriendMode(data);

  const resumeLinks = ["resumeLink"];
  resumeLinks.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", data.links.resume);
  });

  bindScrollCue();
  bindPortfolioEffects();
}

window.PORTFOLIO_DATA = PORTFOLIO;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => renderPortfolio(PORTFOLIO));
} else {
  renderPortfolio(PORTFOLIO);
}
