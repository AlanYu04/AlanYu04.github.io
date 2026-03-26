const translations = {
  zh: {
    "meta.title": "朱冠宇 | 学术主页与博客",
    "brand.name": "朱冠宇",
    "brand.avatarAlt": "朱冠宇",
    "nav.aria": "主导航",
    "nav.intro": "首页",
    "nav.home": "主页",
    "nav.blog": "博客分享",
    "lang.aria": "语言切换",
    "menu.toggle": "菜单",
    "intro.line": "我沉迷于思想的爆破与重建",
    "intro.imageAlt": "抽象几何体背景",
    "sidebar.aria": "个人信息",
    "profile.name": "朱冠宇",
    "profile.avatarAlt": "朱冠宇头像",
    "profile.school": "华南农业大学 · 电子工程学院",
    "profile.location": "广州，中国",
    "section.about": "关于我",
    "about.body":
      "我目前就读于华南农业大学电子科学与技术专业，研究主要关注多模态大语言模型在复杂真实场景中的推理、决策与对齐问题。目前，我也在不断探索新的研究方向，例如 AI4Science，以及其他具有潜力的交叉领域。",
    "section.education": "教育经历",
    "education.item1.title": "华南农业大学 · 电子工程学院 · 电子科学与技术",
    "education.item1.sub": "本科在读",
    "education.item1.time": "2023.09 - 至今",
    "section.publications": "论文成果",
    "publication.1.meta": "KDD 2026 (CCF-A) · under review · 第一作者",
    "publication.1.desc": "研究语言表征在自动竞价系统中的作用机制，提出基于 LLM 的竞价策略优化框架。",
    "publication.2.meta": "ICML 2026 (CCF-A) · under review · 共同第一作者",
    "publication.2.desc": "与北京大学合作，围绕物理推理与预测任务构建 Sim/Real 评测基准。",
    "publication.3.meta": "ESWA (中科院一区) · under review · 共同第一作者",
    "publication.3.desc": "提出图引导注意力分析的白盒检测方法，用于评估大语言模型的新颖性与创造性。",
    "publication.4.meta": "Smart Agricultural Technology (中科院二区) · under review · 第一作者",
    "publication.4.desc": "构建农业多模态过程级推理基准数据集，用于可信诊断任务评测。",
    "section.projects": "科研经历",
    "project.1.title": "PhysicsMind 物理推理评测项目",
    "project.1.sub": "多模态 · 物理推理 · Sim-to-Real · 北京大学合作",
    "project.1.time": "2025.09 - 2025.12",
    "project.1.point1": "负责数据处理与评测管线搭建，完成核心指标实现、对比实验组织与误差分析。",
    "project.1.point2": "构建真实桌面实验与 2D 仿真配对数据，统一 benchmark 场景设置与评测协议。",
    "project.2.title": "Lychee-Bench / Lychee-Mind 农业多模态推理",
    "project.2.sub": "多模态 · CoT 推理 · GRPO 对齐 · 华南农业大学",
    "project.2.time": "2025.05 - 2025.11",
    "project.2.point1": "构建 6,553 张田间图像与 29,756 条 CoT-QA 样本，形成面向过程级推理的监督数据。",
    "project.2.point2": "基于 Qwen2.5-VL-7B 完成 SFT + GRPO 两阶段训练，提升模型推理稳定性与任务准确率。",
    "project.3.title": "MATH-VANE 数学推理白盒检测",
    "project.3.sub": "LLM · 数学推理 · 可解释性 · 白盒分析",
    "project.3.time": "2026.01 - 2026.03",
    "project.3.point1": "设计白盒可解释框架，用于区分数学推理中的有效创新路径与幻觉内容。",
    "project.3.point2": "在多个 SOTA 模型与数据集上完成验证，并取得更优的 Macro-F1 表现。",
    "project.4.title": "SemState 语义状态增强决策",
    "project.4.sub": "LLM · 强化学习 · Decision Transformer · 香港城市大学合作",
    "project.4.time": "2025.10 - 2026.02",
    "project.4.point1": "构建 Task/History/Strategy 语义状态表示，并与数值状态进行联合建模。",
    "project.4.point2": "实现 LLM embedding 与数值状态的注意力融合模块，并集成到 Decision Transformer。",
    "project.4.point3": "在相同设置下，SemState 相比 Decision Transformer 提升 70.4%，较最佳已有方法提升 4.8%。",
    "project.5.title": "基于 YOLOv8 的金属缺陷识别方法",
    "project.5.sub": "CV · YOLO · 缺陷检测 · 专利",
    "project.5.time": "2024.11 - 2025.04",
    "project.5.point1": "围绕检测性能优化，引入 BiFPN、GCNECA、TransformerSE/MultiScaleLSTMSimAM 等模块。",
    "project.5.point2": "将 mAP50 提升至 92.3%（+5.8%），小缺陷召回率提升 12.5%。",
    "project.6.title": "智能柚园机器人",
    "project.6.sub": "CV · YOLOv8s · 农业机器人 · 算法负责人",
    "project.6.time": "2024.05 - 2025.05",
    "project.6.point1": "面向果园场景对 YOLOv8s 进行结构增强，引入 DBB、RCS-OSA 与 LSKA 检测头注意力。",
    "section.awards": "奖励荣誉",
    "award.1": "国家奖学金（2025）· Top 1%",
    "award.2": "全国大学生集成电路创新创业大赛 · 全国二等奖",
    "award.3": "全国大学生数学建模竞赛（省二等奖）",
    "award.4": "优秀学生干部（2025）",
    "award.5": "学风建设先进个人（2024、2025）",
    "section.contact": "联系方式",
    "contact.emailLabel": "邮箱：",
    "contact.scholarLabel": "学术主页：",
    "blog.title": "博客分享",
    "blog.stats.posts": "2 篇文章",
    "blog.stats.words": "经验分享 · 学术观察",
    "blog.authorAlt": "作者",
    "blog.authorName": "朱冠宇",
    "blog.readMore": "阅读更多 →",
    "blog.back": "← 返回博客列表"
  },
  en: {
    "meta.title": "Guanyu Zhu | Academic Homepage & Blog",
    "brand.name": "Guanyu Zhu",
    "brand.avatarAlt": "Guanyu Zhu",
    "nav.aria": "Main navigation",
    "nav.intro": "Home",
    "nav.home": "Profile",
    "nav.blog": "Blog",
    "lang.aria": "Language switch",
    "menu.toggle": "Menu",
    "intro.line": "I am obsessed with breaking ideas apart and rebuilding them.",
    "intro.imageAlt": "Abstract geometric background",
    "sidebar.aria": "Personal information",
    "profile.name": "Guanyu Zhu",
    "profile.avatarAlt": "Portrait of Guanyu Zhu",
    "profile.school": "South China Agricultural University · College of Electronic Engineering",
    "profile.location": "Guangzhou, China",
    "section.about": "About",
    "about.body":
      "I am an undergraduate student in Electronic Science and Technology at South China Agricultural University. My research focuses on reasoning, decision-making, and alignment for multimodal large language models in complex real-world settings. I am also continuously exploring new directions, including AI4Science and other promising interdisciplinary areas.",
    "section.education": "Education",
    "education.item1.title":
      "South China Agricultural University · College of Electronic Engineering · Electronic Science and Technology",
    "education.item1.sub": "B.Eng. Candidate",
    "education.item1.time": "Sep 2023 - Present",
    "section.publications": "Publications",
    "publication.1.meta": "KDD 2026 (CCF-A) · under review · first author",
    "publication.1.desc":
      "Studies the role of language representations in auto-bidding systems and proposes an LLM-based bidding strategy optimization framework.",
    "publication.2.meta": "ICML 2026 (CCF-A) · under review · co-first author",
    "publication.2.desc":
      "Collaboration with Peking University on a Sim/Real benchmark for physical reasoning and prediction.",
    "publication.3.meta": "ESWA · under review · co-first author",
    "publication.3.desc":
      "Proposes a graph-guided white-box attention analysis method to assess novelty and creativity in large language models.",
    "publication.4.meta": "Smart Agricultural Technology · under review · first author",
    "publication.4.desc":
      "Builds a multimodal process-level reasoning benchmark for trustworthy diagnosis in lychee orchards.",
    "section.projects": "Research Experience",
    "project.1.title": "PhysicsMind Physical Reasoning Benchmark",
    "project.1.sub": "Multimodal · Physical reasoning · Sim-to-Real · Collaboration with Peking University",
    "project.1.time": "Sep 2025 - Dec 2025",
    "project.1.point1": "Built the data processing and evaluation pipeline, including core metrics, comparative experiments, and error analysis.",
    "project.1.point2": "Constructed paired real-world desktop experiments and 2D simulations with unified benchmark settings and evaluation protocols.",
    "project.2.title": "Lychee-Bench / Lychee-Mind Agricultural Multimodal Reasoning",
    "project.2.sub": "Multimodal · CoT reasoning · GRPO alignment · South China Agricultural University",
    "project.2.time": "May 2025 - Nov 2025",
    "project.2.point1":
      "Built 6,553 field images and 29,756 CoT-QA samples as supervision data for process-level reasoning.",
    "project.2.point2":
      "Completed two-stage SFT + GRPO training on Qwen2.5-VL-7B, improving reasoning stability and task accuracy.",
    "project.3.title": "MATH-VANE White-Box Analysis for Math Reasoning",
    "project.3.sub": "LLM · Math reasoning · Interpretability · White-box analysis",
    "project.3.time": "Jan 2026 - Mar 2026",
    "project.3.point1":
      "Designed a white-box interpretability framework to distinguish valid novel reasoning paths from hallucinated content.",
    "project.3.point2":
      "Validated the method on multiple SOTA models and datasets, achieving stronger Macro-F1 performance.",
    "project.4.title": "SemState Semantic-State Enhanced Decision Making",
    "project.4.sub": "LLM · Reinforcement learning · Decision Transformer · Collaboration with City University of Hong Kong",
    "project.4.time": "Oct 2025 - Feb 2026",
    "project.4.point1":
      "Constructed semantic state representations from Task/History/Strategy inputs and jointly modeled them with numeric states.",
    "project.4.point2":
      "Implemented an attention-based fusion module for LLM embeddings and numeric states, integrated into Decision Transformer.",
    "project.4.point3":
      "Under the same setup, SemState improved 70.4% over Decision Transformer and 4.8% over the best prior baseline.",
    "project.5.title": "Metal Defect Detection Based on YOLOv8",
    "project.5.sub": "CV · YOLO · Defect detection · Patent",
    "project.5.time": "Nov 2024 - Apr 2025",
    "project.5.point1":
      "Optimized detection performance by introducing modules including BiFPN, GCNECA, and TransformerSE/MultiScaleLSTMSimAM.",
    "project.5.point2": "Improved mAP50 to 92.3% (+5.8%), with recall for small defects increasing by 12.5%.",
    "project.6.title": "Intelligent Pomelo Orchard Robot",
    "project.6.sub": "CV · YOLOv8s · Agricultural robotics · Algorithm lead",
    "project.6.time": "May 2024 - May 2025",
    "project.6.point1":
      "Enhanced YOLOv8s for orchard scenarios by introducing DBB, RCS-OSA, and LSKA-based detection-head attention modules.",
    "section.awards": "Awards",
    "award.1": "National Scholarship (2025) · Top 1%",
    "award.2": "National Second Prize, China IC Innovation and Entrepreneurship Competition",
    "award.3": "Provincial Second Prize, China Undergraduate Mathematical Contest in Modeling",
    "award.4": "Outstanding Student Leader (2025)",
    "award.5": "Advanced Individual in Academic Culture Development (2024, 2025)",
    "section.contact": "Contact",
    "contact.emailLabel": "Email: ",
    "contact.scholarLabel": "Scholar: ",
    "blog.title": "Blog",
    "blog.stats.posts": "2 posts",
    "blog.stats.words": "Experience notes · Research reflections",
    "blog.authorAlt": "Author",
    "blog.authorName": "Guanyu Zhu",
    "blog.readMore": "Read more →",
    "blog.back": "← Back to blog list"
  }
};

const blogPosts = {};
// 博客文件通过 <script> 标签在 main.js 之前同步加载
// 每个博客文件将数据 push 到 window._blogRegistry
if (window._blogRegistry) {
  window._blogRegistry.forEach(function (post) {
    blogPosts[post.id] = post;
  });
}
delete window._blogRegistry;

function renderBlogList() {
  const listEl = document.getElementById("blog-list");
  if (!listEl) return;
  const lang = currentLanguage;
  const dict = translations[lang] || translations.zh;

  listEl.innerHTML = "";
  for (const id of Object.keys(blogPosts).sort((a, b) => b - a)) {
    const post = blogPosts[id];
    const title = post.content[lang]?.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1] ||
                  post.content.zh?.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1] || "";
    const excerpt = post.content[lang]?.match(/<p>(.*?)<\/p>/)?.[1] ||
                    post.content.zh?.match(/<p>(.*?)<\/p>/)?.[1] || "";
    const tag = post.tag[lang] || post.tag.zh;
    const metricType = post.metric.type[lang] || post.metric.type.zh;
    const metricFocus = post.metric.focus[lang] || post.metric.focus.zh;

    const card = document.createElement("article");
    card.className = "blog-card";
    card.onclick = () => showBlogDetail(Number(id));
    card.innerHTML = `
      <span class="blog-tag">${tag}</span>
      <div class="blog-card-header">
        <img
          src="assets/avatar.jpg"
          alt="${dict["blog.authorAlt"] || ""}"
          class="blog-author-avatar"
          onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22%3E%3Crect width=%2224%22 height=%2224%22 fill=%22%236b7280%22/%3E%3C/svg%3E'"
        />
        <span class="blog-author-name">${dict["blog.authorName"] || ""}</span>
        <time class="blog-date">${post.date}</time>
      </div>
      <h2 class="blog-card-title">${title}</h2>
      <p class="blog-card-excerpt">${excerpt}</p>
      <div class="blog-card-footer">
        <div class="blog-metrics">
          <span class="blog-metric">${metricType}</span>
          <span class="blog-metric">${metricFocus}</span>
        </div>
        <button class="read-more-btn">${dict["blog.readMore"] || ""}</button>
      </div>
    `;
    listEl.appendChild(card);
  }
}

function updateBlogStats() {
  const lang = currentLanguage;
  const count = Object.keys(blogPosts).length;
  const statsEl = document.querySelector(".blog-stats");
  if (statsEl) {
    const postLabel = lang === "zh" ? `${count} 篇文章` : `${count} posts`;
    statsEl.querySelector("span:first-child").textContent = postLabel;
  }
}

const LANGUAGE_STORAGE_KEY = "preferred-language";
let currentLanguage = "zh";
let currentBlogId = null;

renderBlogList();
updateBlogStats();

function showPage(pageName, navEl) {
  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.remove("active");
  });

  const page = document.getElementById(`${pageName}-page`);
  if (page) page.classList.add("active");

  document.querySelectorAll(".top-nav a").forEach((link) => {
    link.classList.remove("active");
  });
  const targetNav = navEl || document.querySelector(`.top-nav a[data-page="${pageName}"]`);
  if (targetNav) targetNav.classList.add("active");

  if (pageName === "blog") {
    backToBlogList();
  }

  const topNav = document.getElementById("top-nav");
  const menuToggle = document.querySelector(".menu-toggle");
  if (topNav && menuToggle && topNav.classList.contains("open")) {
    topNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  window.scrollTo(0, 0);
}

function getBlogPost(blogId, lang = currentLanguage) {
  const post = blogPosts[blogId];
  if (!post) return null;
  return post.content[lang] || post.content.zh || null;
}

function renderBlogDetail(blogId) {
  const post = getBlogPost(blogId);
  if (!post) return;
  document.getElementById("blog-content").innerHTML = post;
}

function showBlogDetail(blogId) {
  if (!getBlogPost(blogId)) return;

  currentBlogId = blogId;
  renderBlogDetail(blogId);
  document.getElementById("blog-list-view").classList.add("hidden");
  document.getElementById("blog-detail-view").classList.add("active");
  window.scrollTo(0, 0);
}

function backToBlogList() {
  currentBlogId = null;
  document.getElementById("blog-detail-view").classList.remove("active");
  document.getElementById("blog-list-view").classList.remove("hidden");
}

function applyTranslations(lang) {
  const dictionary = translations[lang] || translations.zh;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = dictionary[key];
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    const value = dictionary[key];
    if (typeof value === "string") {
      element.setAttribute("alt", value);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const value = dictionary[key];
    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    const isActive = button.dataset.langSwitch === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function saveLanguagePreference(lang) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    // Ignore storage failures in private mode or restricted browsers.
  }
}

function getStoredLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }
  } catch (error) {
    // Ignore storage failures and fall back to browser language.
  }

  return null;
}

function getInitialLanguage() {
  const savedLanguage = getStoredLanguage();
  if (savedLanguage) return savedLanguage;

  const browserLanguage = (navigator.language || "").toLowerCase();
  return browserLanguage.startsWith("zh") ? "zh" : "en";
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  applyTranslations(lang);
  if (currentBlogId !== null) {
    renderBlogDetail(currentBlogId);
  }
  renderBlogList();
  updateBlogStats();
  saveLanguagePreference(lang);
}

const menuToggle = document.querySelector(".menu-toggle");
const topNav = document.getElementById("top-nav");

if (menuToggle && topNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = topNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langSwitch);
  });
});

setLanguage(getInitialLanguage());
