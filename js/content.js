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
    { label: "教育背景", href: "#education" },
    { label: "AI学习", href: "#about" },
    { label: "工作经历", href: "#work" },
    { label: "其他", href: "#other" },
    { label: "联系我", href: "#contact" },
  ],
  hero: {
    eyebrow: "在线",
    title: '<span class="hero-greeting">Hi，</span><span class="hero-name">我是李佳蓓</span>',
    subtitle: "Education Technology / 教育科技",
    file:
      "-a current master's student of Science and Robotics Education at The Education University of Hong Kong\n"
      + "-focus on curriculum development\n"
      + "-enjoy turning complex content into something clear, easy to follow and practically applicable.",
    lead: "",
    tags: ["AI", "STEM教育", "课程研发", "信息技术教学"],
    note: {
      label: "NOW",
      title: "AI × 教育",
      text: "正在继续探索最前沿的科学技术，确保课程设计与时俱进",
    },
  },
  projects: {
    summary: "把 AI 学习过程拆成两个项目来记录，方便看清目标、收获、问题和下一步的优化方向。",
    items: [
      {
        number: "项目一",
        title: "Codex 搭建个人简历网站",
        lead: "以静态网站为载体，练习内容拆分、响应式布局和部署维护。",
        sections: [
          {
            label: "项目基本介绍",
            text:
              "围绕个人简历网站搭建，完成页面结构、内容配置、图片资源管理和部署准备，让网站既能展示信息，也便于后续继续维护。",
          },
          {
            label: "学习到的新知识",
            text:
              "进一步理解了 HTML、CSS、JavaScript 分离的思路，也更熟悉了 data-driven 渲染、静态资源引用和多端适配。",
          },
          {
            label: "遇到的问题及解决方案",
            text:
              "遇到过图片路径、按钮定位、文字换行和布局溢出等问题，通过拆分 assets、调整 grid / flex、检查资源路径逐步解决。",
          },
          {
            label: "下次可以改进的",
            text:
              "后续可以继续把页面内容模块化，增加更清晰的配置层和可复用组件，减少重复修改的成本。",
          },
          {
            label: "有待思考和完善的",
            text:
              "还可以继续补充项目成果、过程截图和更完整的说明，让作品展示更有说服力。",
          },
        ],
      },
      {
        number: "项目二",
        title: "AI 学习与教育表达整理",
        lead: "围绕 AI、STEM 教育、课程研发和信息技术教学做结构化表达。",
        sections: [
          {
            label: "项目基本介绍",
            text:
              "把 AI 学习、课程研发和教学经历重新整理成更清晰的表达方式，方便在招聘场景里快速看懂我的重点方向。",
          },
          {
            label: "学习到的新知识",
            text:
              "在整理过程中更重视信息分层、重点提炼和表达节奏，也更清楚怎样把学习内容转成能直接阅读的项目描述。",
          },
          {
            label: "遇到的问题及解决方案",
            text:
              "最难的是避免内容太满、太散，于是通过标题层级、卡片化排版和短句拆分，让信息更容易被扫描和理解。",
          },
          {
            label: "下次可以改进的",
            text:
              "后续可以把每个项目补上成果图、时间线和真实输出，增强项目展示的完整度。",
          },
          {
            label: "有待思考和完善的",
            text:
              "还可以进一步思考怎样把 AI 学习和实际教学、课程开发、内容运营之间的联系写得更具体。",
          },
        ],
      },
    ],
  },
  education: {
    summary:
      "教育技术学本科为我打下课程设计与技术应用基础，接下来继续在科学、机器人和 AI 教育方向深入学习。",
    items: [
      {
        title: "香港教育大学 / 科学与机器人教育硕士",
        date: "2026.09 - 2027.07",
        text:
          "主修 AI in Science and Robotics Education、Engineering and Programming for School Science and Robotics、Assessment in Science and Robotics Education。",
      },
      {
        title: "四川师范大学 / 教育技术学本科",
        date: "2020.09 - 2024.06",
        text:
          "计算机科学学院全日制本科。曾获全国大学生计算机设计大赛三等奖、校级优秀共青团员、校级优秀学生干部、校级奖学金等。",
      },
    ],
  },
  work: {
    summary:
      "从课程内容研究院到一线小学课堂，我一直在做同一件事：让学习内容真正被理解、被使用、被持续优化。",
    items: [
      {
        date: "2024.07 - 2025.11",
        title: "猿编程",
        role: "编程教研",
        intro:
          "负责 Python 在线双师课程研发，完成 10 节课程、硬件与软件课件、手册、视频和互动题相关物料，并支持传课、测课、跟课、课后答疑和线下调研。",
        highlights: [
          { label: "课程研发", value: "从目标评审到行课维护的完整流程" },
          { label: "课堂支持", value: "课前传课测课、每周跟课、教师沟通" },
          { label: "跨团队协作", value: "设计、讲师、运营、产研多方协同" },
          { label: "内容表达", value: "课件、手册、视频、公众号与小红书" },
        ],
        images: [
          {
            src: "./assets/images/yuancheng-structure.png",
            alt: "猿编程课程研发内容卡片展示",
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
          "负责 Python 在线双师课程研发，完成 10 节课程、硬件与软件课件、手册、视频和互动题相关物料，并支持传课、测课、跟课、课后答疑和线下调研。",
      },
      {
        date: "2024.03 - 2024.06",
        title: "四川焱飞科技",
        role: "信息技术教师",
        text:
          "在成都市迎宾路小学面向 3-6 年级教授 Python、Scratch 等内容，每周 4 节，共计 40 节，并支持竞赛、摄影和公众号排版。",
      },
      {
        date: "2024.01 - 2024.03",
        title: "作业帮",
        role: "编程教研实习",
        text:
          "使用 Scratch 开发 AI 课和专业拓展课共 4 节，负责工程文件、课件和物料制作，并参与新媒体平台维护与内容同步。",
      },
      {
        date: "2023.02 - 2023.06",
        title: "成都市玉林小学",
        role: "信息技术教师",
        text:
          "教授 Scratch、3D One 等课程，每周 4 节，共计 48 节；完成 20 余个电子教案和课件，并参与班会、摄影、撰稿和纪念视频制作。",
      },
    ],
  },
  skills: {
    summary: "垂直之外的眷恋",
    items: [
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
        title: "自我评价",
        preview: "做事认真，学习速度快",
        detail:
          "做事认真，学习速度快，愿意主动尝试新工具，把复杂内容整理成清晰、能落地的表达。喜欢把事情拆开看，也习惯用更清楚的方式把信息讲明白。",
      },
      {
        title: "兴趣爱好",
        preview: "潜水 / 旅行 / 摄影 / 吃饭",
        detail:
          "喜欢潜水（AIDI 二星证书）、旅行、摄影和吃饭。潜水让我保持对环境和节奏的专注，旅行帮助我打开视角，摄影让我更愿意记录细节，也让我在日常里更容易发现有意思的内容。",
        image: "./assets/images/hobby-interest.jpg",
        imageAlt: "兴趣爱好配图：水面上的划桨场景",
      },
      {
        title: "我想说...",
        preview: "继续把 AI 与教育沉淀成能力",
        detail:
          "我希望把对 AI 和教育的兴趣继续沉淀为稳定能力，也期待在真实项目中持续实践和成长。比起单次亮眼的输出，我更在意长期积累出来的可靠性和迭代能力。",
      },
    ],
  },
  contact: {
    summary:
      "如果您正在寻找对AI有浓厚兴趣，愿意主动学习与尝试的候选人\n欢迎通过邮箱或电话联系我！",
    items: [
      { label: "邮箱", value: "jiabeilieee@foxmail.com" },
      { label: "电话/微信同号", value: "186-2838-7059" },
    ],
  },
  footer: "李佳蓓 · Education Technology",
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
      if (status) status.textContent = text;
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

function renderTags(containerId, tags) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
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
          (section) => `
            <div class="project-section">
              <span class="project-section__label">${section.label}</span>
              <p>${section.text}</p>
            </div>
          `,
        )
        .join("");

      return `
        <article class="project-item">
          <div class="project-header">
            <span class="project-number">${project.number}</span>
            <strong>${project.title}</strong>
            <p>${project.lead}</p>
          </div>
          <div class="project-sections">
            ${sections}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderEducation(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map(
      (item) => `
        <article class="education-item">
          <div>
            <strong>${item.title}</strong>
            <p>${item.text}</p>
          </div>
          <span class="date">${item.date}</span>
        </article>
      `,
    )
    .join("");
}

function renderTimeline(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item" data-work-item>
          <button class="timeline-head" type="button" aria-expanded="false">
            <span class="timeline-year">${item.date}</span>
            <span class="timeline-title">
              <strong>${item.title}</strong>
              <span>${item.role}</span>
            </span>
          </button>
          <div class="timeline-body ${item.highlights ? "timeline-body--featured" : ""}" aria-hidden="true">
            ${
              item.highlights
                ? `
                  <div class="timeline-feature__copy">
                    <p class="timeline-intro">${item.intro || item.text}</p>
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
                  <div class="timeline-feature__media">
                    ${
                      item.images
                        ? `
                          <div class="timeline-gallery" data-work-gallery>
                            <div class="timeline-gallery__stack">
                              ${item.images
                                .map(
                                  (image, index) => `
                                    <img
                                      class="timeline-gallery__image${index === 0 ? " is-active" : ""}"
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
                          <p class="timeline-gallery-note">把鼠标放上来试试吧～</p>
                        `
                        : ""
                    }
                  </div>
                `
              : `
                  <p>${item.text}</p>
                `
            }
          </div>
        </article>
      `,
    )
    .join("");
}

function bindWorkTimeline() {
  const items = document.querySelectorAll("[data-work-item]");
  items.forEach((item) => {
    const head = item.querySelector(".timeline-head");
    const body = item.querySelector(".timeline-body");
    if (!head || !body) return;

    const setOpen = (isOpen) => {
      item.classList.toggle("is-open", isOpen);
      head.setAttribute("aria-expanded", String(isOpen));
      body.setAttribute("aria-hidden", String(!isOpen));
    };

    const toggleItem = () => {
      setOpen(!item.classList.contains("is-open"));
    };

    const setHoverState = (isHovering) => {
      item.classList.toggle("is-hovering", isHovering);
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

    const start = () => {
      if (timer) return;
      timer = window.setInterval(step, 1500);
    };

    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    update();
    gallery.addEventListener("mouseenter", start);
    gallery.addEventListener("mouseleave", stop);
    gallery.addEventListener("focusin", start);
    gallery.addEventListener("focusout", stop);
  });
}

function renderSkills(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map((item) => {
      return `
        <article class="skill-item${item.traits ? " skill-item--mbti" : ""}" data-skill-item>
          <button class="skill-head" type="button" aria-expanded="false">
            <span class="skill-title">${item.title}</span>
            <span class="skill-preview">${item.preview || item.text || ""}</span>
          </button>
          <div class="skill-body" aria-hidden="true">
            ${
              item.traits
                ? `
                  <strong class="skill-role">角色：${item.role}</strong>
                  <div class="mbti-traits">
                    ${item.traits
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
                      .join("")}
                  </div>
                  <div class="skill-figure">
                    <img class="skill-image" src="${item.image}" alt="ENTJ-A 分析家形象" />
                  </div>
                `
                : `
                  <p class="skill-detail">${item.detail || item.text || ""}</p>
                  ${
                    item.image
                      ? `
                        <div class="skill-figure">
                          <img class="skill-image" src="${item.image}" alt="${item.imageAlt || item.title}" />
                        </div>
                      `
                      : ""
                  }
                `
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function bindSkillCards() {
  const items = document.querySelectorAll("[data-skill-item]");
  items.forEach((item) => {
    const head = item.querySelector(".skill-head");
    const body = item.querySelector(".skill-body");
    if (!head || !body) return;

    const setOpen = (isOpen) => {
      item.classList.toggle("is-open", isOpen);
      head.setAttribute("aria-expanded", String(isOpen));
      body.setAttribute("aria-hidden", String(!isOpen));
    };

    const toggleItem = () => {
      setOpen(!item.classList.contains("is-open"));
    };

    const setHoverState = (isHovering) => {
      item.classList.toggle("is-hovering", isHovering);
    };

    item.addEventListener("mouseenter", () => setHoverState(true));
    item.addEventListener("mouseleave", () => setHoverState(false));
    item.addEventListener("focusin", () => setHoverState(true));
    item.addEventListener("focusout", () => setHoverState(false));
    head.addEventListener("click", toggleItem);
  });
}

function renderContacts(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const phoneNumber = items[1].value.replaceAll("-", "");
  el.innerHTML = `
    <div class="contact-item contact-copy-item">
      <span class="copy-widget__label">一键复制邮箱</span>
      <button
        class="copy-widget__button"
        type="button"
        data-copy-value="${items[0].value}"
        data-copy-default="点击即可复制邮箱"
      >
        ${items[0].value}
      </button>
      <span class="copy-widget__status">点击即可复制邮箱</span>
    </div>
    <div class="contact-item contact-copy-item">
      <span class="copy-widget__label">一键复制电话/微信</span>
      <button
        class="copy-widget__button"
        type="button"
        data-copy-value="${phoneNumber}"
        data-copy-default="点击即可复制电话/微信"
      >
        ${phoneNumber}
      </button>
      <span class="copy-widget__status">点击即可复制电话/微信</span>
    </div>
  `;
}

function renderPortfolio(data) {
  renderNav(data.nav);
  bindNavActivation();
  setText("heroEyebrow", data.hero.eyebrow);
  setHTML("heroTitle", data.hero.title);
  setText("heroSubtitle", data.hero.subtitle);
  setText("heroFile", data.hero.file);
  setText("heroLead", data.hero.lead);
  setText("heroNoteLabel", data.hero.note.label);
  setText("heroNoteTitle", data.hero.note.title);
  setText("heroNoteText", data.hero.note.text);
  renderTags("heroTags", data.hero.tags);

  setText("aboutSummary", data.projects.summary);
  renderProjects("projectList", data.projects.items);

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
  bindSkillCards();

  setText("footer", data.footer);

  const resumeLinks = ["resumeLink"];
  resumeLinks.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", data.links.resume);
  });

  const photo = document.getElementById("heroPhoto");
  if (photo) photo.setAttribute("src", data.links.photo);
}

window.PORTFOLIO_DATA = PORTFOLIO;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => renderPortfolio(PORTFOLIO));
} else {
  renderPortfolio(PORTFOLIO);
}
