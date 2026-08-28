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
