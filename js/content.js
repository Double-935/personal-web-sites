const PORTFOLIO = {
  brand: {
    mark: "李",
    name: "PORTFOLIO",
  },
  links: {
    resume: "./assets/docs/li-jiabei-resume.pdf",
    photo: "./assets/images/home-photo.png",
    mail: "mailto:jiabeilieee@foxmail.com",
  },
  auth: {
    // Fill these with Supabase's project URL and publishable key.
    supabaseUrl: "https://txvcpuusjwkmgjanhqlc.supabase.co",
    publishableKey: "sb_publishable_yQW2hR3tAKxzzyvlQl8X0A_DL3Q_g3U",
  },
  nav: [
    { label: "关于我", href: "#about-me" },
    { label: "教育背景", href: "#education" },
    { label: "AI学习", href: "#about" },
    { label: "工作经历", href: "#work" },
    { label: "技能与爱好", href: "#other" },
    { label: "联系我", href: "#contact" },
  ],
  hero: {
    eyebrow: "在线",
    title: '<span class="hero-greeting">Hi，</span><span class="hero-name">我是李佳蓓</span>',
    subtitle: "AI产品 x 教育科技",
    file: [
      "A current master's student of Science and Robotics Education at The Education University of Hong Kong",
      "Have a strong interest in AI products and will actively seek out the latest information and give them a try",
      "Enjoy turning complex content into something clear, easy to follow and practically applicable",
    ],
    lead: "",
    tags: ["AI", "STEM教育", "课程研发", "跨学科融合"],
    note: {
      label: "NOW",
      title: "立即到岗",
      text: "每周 4 天，持续 3 个月，期待参与AI产品与教育研发的相关工作",
    },
  },
  projects: {
    summary: "从一个真实的小问题出发，独立完成从想法、原型到可用产品。",
    items: [
      {
        number: "项目一",
        title: "AI 辅助 - 个人网页搭建",
        lead: "基于 Codex、Gemini、triverse 等 AI 辅助开发工具，完成个人网站搭建、分层开发和 GitHub Pages 部署准备。",
        model: {
          src: "./assets/models/3d-model.glb",
          alt: "项目一 3D 模型",
        },
        scrollContent: true,
        sections: [
          {
            label: "项目基本介绍",
            text:
              "围绕个人能力展示需求，独立完成个人网站从 0 到 1 搭建。网站用于系统展示教育背景、AI 学习项目、课程研发经历、编程教研经历和联系方式。",
          },
          {
            label: "学习到的新知识",
            text:
              "熟悉Prompt调优，并在实际项目中进一步理解了 HTML、CSS、JavaScript 分层开发。也熟悉了内容配置、视觉排版、交互功能、图片资源管理、3D 模型展示和 GitHub Pages 部署准备。",
          },
          {
            label: "遇到的问题及解决方案",
            text:
              "开发过程中重点处理了响应式适配、文字与按钮重叠、固定元素遮挡正文、抽卡结果按钮层级、邮箱电话单行显示、项目内容触摸滚动和本地资源引用等问题。",
          },
          {
            label: "下次可以改进的",
            text: [
              "先确定最小可行性的方案（mvp），如网页中，必须包含的模块有哪些。",
              "先确定项目的基本结构，如html+css+js，便于更换模型/迁移/维护。",
            ],
          },
          {
            label: "有待思考和完善的",
            text: ["token的成本控制问题。", "是否可以把该网页做成一个可供用户复刻使用的产品。"],
          },
        ],
      },
      {
        number: "项目二",
        title: "黑客松比赛",
        lead: "围绕黑客松比赛经历，记录从选题、协作到作品呈现的完整过程。",
        placeholderImage: {
          src: "./assets/images/project-placeholder.svg",
          alt: "黑客松比赛项目图片占位",
        },
        scrollContent: true,
        sections: [
          {
            label: "项目基本介绍",
            text:
              "待补充：比赛名称、比赛主题、参赛时间、团队成员、项目目标和最终作品。后续可以在这里完整记录黑客松项目从想法到呈现的过程。",
          },
          {
            label: "学习到的新知识",
            text:
              "待补充：比赛过程中接触到的新工具、新技术、产品方法、团队协作方式，以及如何在有限时间内完成方案验证。",
          },
          {
            label: "遇见的问题和解决方案",
            text:
              "待补充：记录比赛过程中遇到的技术、沟通、时间管理或方案取舍问题，以及团队最终采取的解决方式。",
          },
          {
            label: "下次可以改进的",
            text: [
              "待补充：赛前准备、任务拆分、时间安排和最终展示方面可以改进的地方。",
              "待补充：如果再次参赛，希望提前验证哪些关键假设。",
            ],
          },
          {
            label: "有待思考和完善的",
            text: [
              "待补充：项目后续是否可以继续开发，或转化为一个真正可使用的产品。",
              "待补充：如何进一步验证用户需求和项目价值。",
            ],
          },
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
        date: "2026.08 - 2027.07",
        visualNote: "科学与机器人教育硕士，全日制。",
        visualImage: "./assets/images/hk-edu-background.jpg",
        badgeImage: "./assets/images/eduhk-logo.jpg",
        text:
          "主修 AI in Science and Robotics Education、Principles and Methods in Science and Robotics Education Research、Engineering and Programming for School Science and Robotics.",
        accent: "warm",
      },
      {
        school: "四川师范大学",
        degree: "教育技术学本科",
        date: "2020.09 - 2024.06",
        visualNote: "教育技术学本科打底，积累课程设计与技术应用基础。",
        visualImage: "./assets/images/scnu-background.jpg",
        badgeImage: "./assets/images/scnu-logo.svg",
        text:
          "计算机科学学院全日制本科。曾获全国大学生计算机设计大赛三等奖、全国第六届大学生艺术展演活动优秀志愿者、校级优秀共青团员、校级优秀学生干部、校级三等奖学金、校级学术科技竞赛奖等。",
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
          "参与在线双师课课程的研发工作，并通过实际测试与调研来不断改进课程内容。该课程面向6-10岁学生，该课程内容包括Python与硬件（类似乐高积木）。",
        highlights: [
          { label: "AI工具应用", value: "即梦生成图片、通义总结会议、mia搭建个人知识库......我勇于尝试" },
          { label: "多方沟通与协作", value: "与研发、与设计、与产品......我乐于沟通" },
          { label: "用户洞察与转化", value: "真实的环境、真实的人，看看这节课的目标能否达成、看看这个产品能够走得多远" },
          { label: "随材物料的制作", value: "Canva、Sketch、秀米、剪映......基础的设计工具我都能使用" },
        ],
        images: [
          {
            src: "./assets/images/work-experience-2.jpg",
            alt: "猿编程线下课堂支持现场",
          },
          {
            src: "./assets/images/img-6385.jpg?v=20260828-work-image-6385",
            alt: "猿编程课程支持现场",
            fit: "contain",
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
        highlights: [
          { label: "课程制作", value: "使用 Scratch 开发 AI 课、专业拓展课共 4 节，设计工程文件并完成课件及物料制作" },
          { label: "流程沉淀", value: "熟悉课程产品生产流程，参与文档沉淀，并提供跨部门支持与协作" },
          { label: "运营维护", value: "负责新媒体平台日常运营维护，确保内容更新及时、准确，并与主讲老师同步教学计划" },
          { label: "内容优化", value: "围绕目标学生认知水平和兴趣点，对 10 余个工程文件进行适应性修改和优化" },
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
        text:
          "熟悉 2022 版《义务教育信息科技课程标准》，针对 3-6 年级学生，使用 Python、Scratch 进行教学工作，每周 4 节，共计 40 节。按照学校要求，带领学生参加全国青少年信息素养大赛。支持学校其他行政工作，参与摄影工作，并能够独立使用秀米对该校公众号文章进行排版。",
      },
    ],
  },
  skills: {
    summary: "也许你会想认识更真实的我",
    items: [
      {
        title: "快速学习的能力",
        preview: "快速学习的能力",
        detail:
          "仅用五天就部署完成该网站，仅用10分钟就上手桨板（后半句是想加个配图）",
        image: "./assets/images/hobby-interest.jpg?v=20260828-paddleboarding",
        imageAlt: "桨板配图",
      },
      {
        title: "高中信息技术教师资格证",
        preview: "高中信息技术教师资格证",
        detail:
          "一棵树摇动另一棵树，一朵云推动另一朵云，一个灵魂唤醒另一个灵魂",
        image: "./assets/images/teacher-certification.jpg",
        imageAlt: "高中信息技术教师资格证配图",
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
        image: "./assets/images/diving.jpg",
        imageAlt: "潜水配图",
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
        title: "稳中求进的心态",
        preview: "稳中求进的心态",
        detail:
          "比起单次亮眼的输出，我更在意长期积累出来的可靠性和迭代能力",
      },
    ],
  },
  contact: {
    summary: "如果您正在寻找对 AI 、产品方面有浓厚兴趣的候选人，欢迎通过邮箱或电话联系我！",
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
      try {
        await copyTextToClipboard(button.dataset.copyValue);
        button.classList.add("is-copied");
        setStatus("已复制到剪贴板");
        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          button.classList.remove("is-copied");
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

function renderTags(containerId, tags) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = tags
    .map(
      (tag) => `
        <button class="tag" type="button" data-tag-button data-tag-text="${tag}" aria-label="${tag}">
          ${Array.from(tag)
            .map(
              (character, index) =>
                `<span class="tag-letter" style="--tag-index: ${index}">${character}</span>`,
            )
            .join("")}
        </button>
      `,
    )
    .join("");
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function playTagSequence() {
  const tags = document.querySelectorAll("[data-tag-button]");
  const targetLabels = ["课程研发", "跨学科融合", "AI"];
  const targetButtons = targetLabels
    .map((label) => Array.from(tags).find((tag) => tag.dataset.tagText === label))
    .filter(Boolean);

  if (!targetButtons.length) return;

  while (document.body && document.documentElement) {
    for (const tag of targetButtons) {
      const letterCount = tag.querySelectorAll(".tag-letter").length || 1;
      tag.classList.remove("is-jumping");
      void tag.offsetWidth;
      tag.classList.add("is-jumping");
      await sleep(letterCount * 1000 + 150);
      tag.classList.remove("is-jumping");
      await sleep(180);
    }
  }
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
    .map((project) => {
      const sections = project.sections
        .map(
          (section) => {
            const body = Array.isArray(section.text)
              ? `<ul>${section.text.map((item) => `<li>${item}</li>`).join("")}</ul>`
              : `<p>${section.text}</p>`;

            return `
              <div class="project-section">
                <span class="project-section__label">${section.label}</span>
                ${body}
              </div>
            `;
          },
        )
        .join("");
      const chips = project.sections
        .slice(0, 3)
        .map((section) => `<span>${section.label}</span>`)
        .join("");
      const hasModel = Boolean(project.model);
      const hasPlaceholderImage = Boolean(project.placeholderImage);
      const visualClass = `project-visual${hasModel ? " project-visual--model" : ""}${hasPlaceholderImage ? " project-visual--placeholder" : ""}`;
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
        : hasPlaceholderImage
          ? `
              <img
                class="project-placeholder-image"
                src="${project.placeholderImage.src}"
                alt="${project.placeholderImage.alt || project.title}"
                loading="lazy"
              />
            `
        : `
            <div class="project-visual__frame">
              <span class="project-number project-number--large">${project.number}</span>
              <strong class="project-visual__title">${project.title}</strong>
              <p class="project-visual__lead">${project.lead}</p>
              <div class="project-visual__chips">
                ${chips}
              </div>
            </div>
          `;

      return `
        <article class="project-item project-item--showcase">
          <div class="${visualClass}" aria-hidden="true">
            ${visualMarkup}
          </div>
          <div class="${contentClass}">
            <div class="project-header">
              <span class="project-number">${project.number}</span>
              <strong>${project.title}</strong>
              <p>${project.lead}</p>
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
            <p>${item.text}</p>
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
      const timelineIntro = item.intro || (!item.highlights ? item.text : "");

      return `
        <div class="timeline-entry timeline-entry--${side}" data-work-item data-step="${step}">
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
            <div class="timeline-body ${(item.highlights && !item.pendingContent) ? "timeline-body--featured" : ""}" aria-hidden="${isOpen ? "false" : "true"}">
            ${
              item.pendingContent
                ? `
                  <div class="timeline-placeholder">
                    <span>内容待补充</span>
                  </div>
                `
                : item.highlights
                  ? `
                    <div class="timeline-feature__copy">
                      ${timelineIntro ? `<p class="timeline-intro">${timelineIntro}</p>` : ""}
                      <div class="timeline-highlights">
                        ${item.highlights
                          .map(
                            (highlight) => `
                              <div class="timeline-highlight">
                                <span>${highlight.label}</span>
                                <strong>${highlight.value}</strong>
                              </div>
                            `,
                          )
                          .join("")}
                      </div>
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
  items.forEach((item) => {
    const card = item.querySelector(".timeline-item");
    const head = item.querySelector(".timeline-head");
    const body = item.querySelector(".timeline-body");
    const hint = item.querySelector("[data-timeline-hint]");
    if (!card || !head || !body) return;

    const setOpen = (isOpen) => {
      card.classList.toggle("is-open", isOpen);
      head.setAttribute("aria-expanded", String(isOpen));
      body.setAttribute("aria-hidden", String(!isOpen));
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
  const galleries = document.querySelectorAll("[data-work-gallery]");
  galleries.forEach((gallery) => {
    const images = Array.from(gallery.querySelectorAll("[data-gallery-image]"));
    if (!images.length) return;

    let activeIndex = 0;
    let timer = null;

    const update = () => {
      images.forEach((image, index) => {
        const offset = (index - activeIndex + images.length) % images.length;
        image.classList.toggle("is-active", offset === 0);
        image.classList.toggle("is-next", offset === 1);
        image.classList.toggle("is-back", offset > 1);
        image.style.zIndex = String(images.length - offset);
      });
    };

    const step = () => {
      activeIndex = (activeIndex + 1) % images.length;
      update();
    };

    update();
    gallery.dataset.autoplay = "true";
    window.setInterval(step, 2000);
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
            <img class="skills-detail__image" src="${item.image}" alt="${item.imageAlt || item.title}" />
          </div>
        `
        : ""
    }
  `;
}

function renderSkills(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = `
    <div class="skills-showcase" data-skill-showcase>
      <div class="skills-stack">
        <div class="skills-stack__deck" aria-label="技能与爱好档案卡">
          ${items
            .map(
              (item, index) => `
                <div
                  class="skills-stack-card"
                  data-skill-index="${index}"
                  style="--skill-index: ${index};"
                  aria-hidden="true"
                >
                  <span class="skills-stack-card__back">Skills x life</span>
                </div>
              `,
            )
            .join("")}
        </div>
        <button class="skills-draw" type="button" data-skill-random>
          随机抽一张
          <span aria-hidden="true">✦</span>
        </button>
      </div>
      <article class="skills-detail" data-skill-detail aria-live="polite"></article>
    </div>
  `;
}

async function playShuffleSound(durationMs = 2000) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  try {
    const context = new AudioContext();
    if (context.state === "suspended") {
      await context.resume();
    }

    const master = context.createGain();
    master.gain.value = 0.16;
    master.connect(context.destination);

    const filter = context.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1100;
    filter.Q.value = 1.2;
    filter.connect(master);

    const startAt = context.currentTime + 0.02;
    const burstLength = 0.18;
    const interval = 0.24;
    const burstCount = Math.max(1, Math.ceil(durationMs / (interval * 1000)));

    for (let index = 0; index < burstCount; index += 1) {
      const source = context.createBufferSource();
      const buffer = context.createBuffer(1, Math.floor(context.sampleRate * burstLength), context.sampleRate);
      const data = buffer.getChannelData(0);
      for (let sample = 0; sample < data.length; sample += 1) {
        const fade = 1 - sample / data.length;
        data[sample] = (Math.random() * 2 - 1) * fade;
      }

      const burstGain = context.createGain();
      const burstFilter = context.createBiquadFilter();
      burstFilter.type = "highpass";
      burstFilter.frequency.value = 260 + index * 18;

      const burstStart = startAt + index * interval;
      burstGain.gain.setValueAtTime(0, burstStart);
      burstGain.gain.linearRampToValueAtTime(0.32, burstStart + 0.03);
      burstGain.gain.linearRampToValueAtTime(0.1, burstStart + 0.11);
      burstGain.gain.linearRampToValueAtTime(0, burstStart + burstLength);

      source.buffer = buffer;
      source.connect(burstGain);
      burstGain.connect(burstFilter);
      burstFilter.connect(filter);
      source.start(burstStart);
      source.stop(burstStart + burstLength + 0.02);
    }

    window.setTimeout(() => {
      context.close().catch(() => {});
    }, durationMs + 280);
  } catch (error) {
    // 音效失败时不影响视觉抽卡流程。
  }
}

function bindSkillCards(items) {
  const showcase = document.querySelector("[data-skill-showcase]");
  if (!showcase) return;

  const detail = showcase.querySelector("[data-skill-detail]");
  const cards = Array.from(showcase.querySelectorAll("[data-skill-index]"));
  const randomButton = showcase.querySelector("[data-skill-random]");
  let isAnimating = false;
  const scatterLayouts = [
    { x: -240, y: -160, rotate: -12, scale: 0.82 },
    { x: 250, y: -130, rotate: 10, scale: 0.78 },
    { x: -230, y: 170, rotate: -8, scale: 0.8 },
    { x: 240, y: 160, rotate: 13, scale: 0.76 },
  ];

  const setScatterLayout = (activeIndex) => {
    cards.forEach((card, cardIndex) => {
      const scatter = scatterLayouts[cardIndex % scatterLayouts.length];
      const offset = cardIndex - activeIndex;
      const jitterX = Math.round((Math.random() - 0.5) * 36);
      const jitterY = Math.round((Math.random() - 0.5) * 30);
      const jitterRotate = ((Math.random() - 0.5) * 6).toFixed(1);
      const isActive = cardIndex === activeIndex;
      const x = scatter.x + jitterX + offset * 18;
      const y = scatter.y + jitterY + offset * 10;
      const rotate = scatter.rotate + Number(jitterRotate) + offset * 2;

      card.classList.toggle("is-active", isActive);
      card.style.setProperty("--scatter-x", `${x}px`);
      card.style.setProperty("--scatter-y", `${y}px`);
      card.style.setProperty("--scatter-rotate", `${rotate}deg`);
      card.style.setProperty("--scatter-scale", isActive ? "0.92" : String(scatter.scale));
      card.style.setProperty("--scatter-opacity", isActive ? "0" : "0.72");
    });
  };

  const resetScatterLayout = () => {
    cards.forEach((card) => {
      card.classList.remove("is-active", "is-flipping");
      card.style.removeProperty("--scatter-x");
      card.style.removeProperty("--scatter-y");
      card.style.removeProperty("--scatter-rotate");
      card.style.removeProperty("--scatter-scale");
      card.style.removeProperty("--scatter-opacity");
    });
  };

  const revealCard = (index) => {
    const activeIndex = (index + items.length) % items.length;
    setScatterLayout(activeIndex);

    if (detail) {
      detail.classList.toggle("skills-detail--photo", Boolean(items[activeIndex].image && !items[activeIndex].traits));
      detail.classList.toggle("skills-detail--mbti", Boolean(items[activeIndex].traits));
      detail.innerHTML = renderSkillDetail(items[activeIndex]);
    }

    showcase.classList.add("has-result", "is-revealing");

    window.setTimeout(() => {
      showcase.classList.remove("is-revealing");
      isAnimating = false;
      if (randomButton) {
        randomButton.disabled = false;
        randomButton.innerHTML = `随机抽一张 <span aria-hidden="true">✦</span>`;
      }
    }, 1000);
  };

  if (randomButton) {
    randomButton.addEventListener("click", () => {
      if (isAnimating) return;

      isAnimating = true;
      randomButton.disabled = true;
      randomButton.innerHTML = `洗牌中 <span aria-hidden="true">✦</span>`;
      showcase.classList.remove("has-result", "is-revealing");
      showcase.classList.add("is-shuffling");
      resetScatterLayout();
      if (detail) {
        detail.classList.remove("skills-detail--photo", "skills-detail--mbti");
        detail.innerHTML = "";
      }
      playShuffleSound(2000);

      window.setTimeout(() => {
        showcase.classList.remove("is-shuffling");
        revealCard(Math.floor(Math.random() * items.length));
      }, 2000);
    });
  }
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
        const result = Array.isArray(results) ? results[0] : null;
        const latitude = Number(result?.lat);
        const longitude = Number(result?.lon);
        if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
          throw new Error("PLACE_NOT_FOUND");
        }
        routeMap.setView([latitude, longitude], 12, { animate: true });
        selectPoint(latitude, longitude, `已定位到：${result.display_name || place}`);
      } catch (error) {
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
      const latitude = Number(formData.get("latitude"));
      const longitude = Number(formData.get("longitude"));
      if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
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

  return window.supabase.createClient(
    data.auth.supabaseUrl,
    data.auth.publishableKey,
  );
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

  window.addEventListener("pagehide", () => {
    if (!shouldRememberSession && supabaseClient) {
      supabaseClient.auth.signOut({ scope: "local" });
    }
  });

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
      renderedFriendEmail = currentUserEmail;
      renderFriendContent(
        data,
        currentUserEmail,
        supabaseClient,
        result.user?.id || result.session?.user?.id,
        () => supabaseClient.auth.signOut(),
      );
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

function renderPortfolio(data) {
  renderNav(data.nav);
  bindNavActivation();
  setText("heroEyebrow", data.hero.eyebrow);
  setHTML("heroTitle", data.hero.title);
  setText("heroSubtitle", data.hero.subtitle);
  setHTML(
    "heroFile",
    `
      ${data.hero.file
        .map((line) => `<li>${line}</li>`)
        .join("")}
    `,
  );
  setText("heroLead", data.hero.lead);
  setText("heroNoteLabel", data.hero.note.label);
  setText("heroNoteTitle", data.hero.note.title);
  setText("heroNoteText", data.hero.note.text);
  renderTags("heroTags", data.hero.tags);
  playTagSequence();

  setText("aboutSummary", data.projects.summary);
  renderProjects("projectList", data.projects.items);
  bindProjectModels();

  setText("educationSummary", data.education.summary);
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
  bindSkillCards(data.skills.items);

  setText("footer", data.footer);
  bindFriendMode(data);

  const resumeLinks = ["resumeLink"];
  resumeLinks.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", data.links.resume);
  });

  const photo = document.getElementById("heroPhoto");
  if (photo) photo.setAttribute("src", data.links.photo);

  bindScrollCue();
}

window.PORTFOLIO_DATA = PORTFOLIO;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => renderPortfolio(PORTFOLIO));
} else {
  renderPortfolio(PORTFOLIO);
}
