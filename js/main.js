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
    "publication.2.desc": "北京大学（远程科研）合作，围绕物理推理与预测任务构建 Sim/Real 评测基准。",
    "publication.3.meta": "ESWA (中科院一区) · under review · 共同第一作者",
    "publication.3.desc": "提出图引导注意力分析的白盒检测方法，用于评估大语言模型的新颖性与创造性。",
    "publication.4.meta": "Smart Agricultural Technology (中科院二区) · under review · 第一作者",
    "publication.4.desc": "构建农业多模态过程级推理基准数据集，用于可信诊断任务评测。",
    "section.projects": "项目经历",
    "project.1.title": "PhysicsMind 物理推理评测项目",
    "project.1.sub": "多模态 · 物理推理 · Sim-to-Real · 北京大学（远程科研）",
    "project.1.time": "2025.09 - 2025.12",
    "project.1.point1": "搭建数据处理与评测流程，完成对比实验与误差分析。",
    "project.1.point2": "构建真实桌面实验与 2D 仿真配对数据，并统一 benchmark 场景。",
    "project.2.title": "Lychee-Bench / Lychee-Mind 农业多模态推理",
    "project.2.sub": "多模态 · CoT 推理 · GRPO 对齐 · 华南农业大学",
    "project.2.time": "2025.05 - 2025.11",
    "project.2.point1": "构建 6,553 张田间图像与 29,756 条 CoT-QA 样本用于过程级推理监督。",
    "project.2.point2": "基于 Qwen2.5-VL-7B 进行 SFT + GRPO 两阶段训练并提升准确率。",
    "project.3.title": "MATH-VANE 数学推理白盒检测",
    "project.3.sub": "LLM · 数学推理 · 可解释性 · 中国移动合作项目",
    "project.3.time": "2026.01 - 2026.03",
    "project.3.point1": "提出白盒可解释框架，区分数学推理中的有效创新路径与幻觉内容。",
    "project.3.point2": "在多个 SOTA 模型与数据集上验证并获得 Macro-F1 提升。",
    "project.4.title": "SemState 语义状态增强决策",
    "project.4.sub": "LLM · 强化学习 · Decision Transformer · 香港城市大学（远程科研）",
    "project.4.time": "2025.10 - 2026.02",
    "project.4.point1": "构建 Task/History/Strategy 文本并预计算 embedding，融合数值状态与 LLM 表征。",
    "project.4.point2": "实现 LLM embedding 与数值状态融合注意力模块并与 Decision Transformer 集成。",
    "project.4.point3": "同设置下 SemState 相比 Decision Transformer 提升 70.4%，相较最佳已有方法提升 4.8%。",
    "project.5.title": "基于 YOLOv8 的金属缺陷识别方法",
    "project.5.sub": "CV · YOLO · 专利 · 学生第一发明人",
    "project.5.time": "2024.11 - 2025.04",
    "project.5.point1": "引入 BiFPN、GCNECA、TransformerSE/MultiScaleLSTMSimAM 等模块。",
    "project.5.point2": "mAP50 92.3%（+5.8%），小缺陷召回率 +12.5%。",
    "project.6.title": "智能柚园机器人",
    "project.6.sub": "CV · YOLOv8s · 算法负责人",
    "project.6.time": "2024.05 - 2025.05",
    "project.6.point1": "增强 YOLOv8s：DBB、RCS-OSA、LSKA 检测头注意力。",
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
    "blog.stats.posts": "1 篇文章",
    "blog.stats.words": "经验分享",
    "blog.authorAlt": "作者",
    "blog.authorName": "朱冠宇",
    "blog.post1.tag": "AI Agent · Workflow · 经验分享",
    "blog.post1.title": "从 Cursor 到 Claude Code 再到 Codex：我的 AI Agent 使用经验",
    "blog.post1.excerpt":
      "从 2025 年 10 月开始接触 Cursor，到现在持续使用 Claude Code 和 Codex，我陆续花了近千元 token，也踩过不少坑。这里不讲概念，只分享一些关于上下文管理、skills 设计和代码审查的实际经验。",
    "blog.metric.type": "随笔分享",
    "blog.metric.focus": "工作流 / Skill / 代码检查",
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
      "Collaboration with Peking University (remote research) on a Sim/Real benchmark for physical reasoning and prediction.",
    "publication.3.meta": "ESWA · under review · co-first author",
    "publication.3.desc":
      "Proposes a graph-guided white-box attention analysis method to assess novelty and creativity in large language models.",
    "publication.4.meta": "Smart Agricultural Technology · under review · first author",
    "publication.4.desc":
      "Builds a multimodal process-level reasoning benchmark for trustworthy diagnosis in lychee orchards.",
    "section.projects": "Projects",
    "project.1.title": "PhysicsMind Physical Reasoning Benchmark",
    "project.1.sub": "Multimodal · Physical reasoning · Sim-to-Real · Peking University (remote research)",
    "project.1.time": "Sep 2025 - Dec 2025",
    "project.1.point1": "Built the data processing and evaluation pipeline, and completed comparative experiments with error analysis.",
    "project.1.point2": "Constructed paired real-world desktop experiments and 2D simulations with unified benchmark scenarios.",
    "project.2.title": "Lychee-Bench / Lychee-Mind Agricultural Multimodal Reasoning",
    "project.2.sub": "Multimodal · CoT reasoning · GRPO alignment · South China Agricultural University",
    "project.2.time": "May 2025 - Nov 2025",
    "project.2.point1":
      "Built 6,553 field images and 29,756 CoT-QA samples for process-level reasoning supervision.",
    "project.2.point2":
      "Ran two-stage SFT + GRPO training on Qwen2.5-VL-7B and improved task accuracy.",
    "project.3.title": "MATH-VANE White-Box Analysis for Math Reasoning",
    "project.3.sub": "LLM · Math reasoning · Interpretability · China Mobile collaboration",
    "project.3.time": "Jan 2026 - Mar 2026",
    "project.3.point1":
      "Designed a white-box interpretability framework to separate valid novel reasoning paths from hallucinated content.",
    "project.3.point2":
      "Validated the method on multiple SOTA models and datasets, achieving higher Macro-F1.",
    "project.4.title": "SemState Semantic-State Enhanced Decision Making",
    "project.4.sub": "LLM · Reinforcement learning · Decision Transformer · City University of Hong Kong (remote research)",
    "project.4.time": "Oct 2025 - Feb 2026",
    "project.4.point1":
      "Constructed Task/History/Strategy text states with precomputed embeddings, then fused them with numeric states.",
    "project.4.point2":
      "Implemented an attention fusion module for LLM embeddings and numeric states, integrated with Decision Transformer.",
    "project.4.point3":
      "Under the same setup, SemState improved 70.4% over Decision Transformer and 4.8% over the best prior baseline.",
    "project.5.title": "Metal Defect Detection Based on YOLOv8",
    "project.5.sub": "CV · YOLO · Patent · First student inventor",
    "project.5.time": "Nov 2024 - Apr 2025",
    "project.5.point1":
      "Introduced modules including BiFPN, GCNECA, and TransformerSE/MultiScaleLSTMSimAM.",
    "project.5.point2": "mAP50 reached 92.3% (+5.8%), and recall for small defects improved by 12.5%.",
    "project.6.title": "Intelligent Pomelo Orchard Robot",
    "project.6.sub": "CV · YOLOv8s · Algorithm lead",
    "project.6.time": "May 2024 - May 2025",
    "project.6.point1": "Enhanced YOLOv8s with DBB, RCS-OSA, and LSKA-based detection-head attention modules.",
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
    "blog.stats.posts": "1 post",
    "blog.stats.words": "Experience note",
    "blog.authorAlt": "Author",
    "blog.authorName": "Guanyu Zhu",
    "blog.post1.tag": "AI Agent · Workflow · Notes",
    "blog.post1.title": "From Cursor to Claude Code and Codex: What I Learned from Using AI Agents",
    "blog.post1.excerpt":
      "I first started using Cursor in October 2025, and later moved into regular use of Claude Code and Codex. After spending nearly a thousand yuan on tokens and making plenty of mistakes, I ended up with a few concrete lessons about context management, skills, and code review.",
    "blog.metric.type": "Field note",
    "blog.metric.focus": "Workflow / Skills / Code review",
    "blog.readMore": "Read more →",
    "blog.back": "← Back to blog list"
  }
};

const blogPosts = {
  1: {
    zh: {
      content: `
        <header class="blog-detail-header">
          <h1 class="blog-detail-title">从 Cursor 到 Claude Code 再到 Codex：我的 AI Agent 使用经验</h1>
          <div class="blog-detail-meta">
            <span>朱冠宇</span>
            <span>2026/03/16</span>
            <span>AI Agent · Workflow · 经验分享</span>
          </div>
        </header>
        <div class="blog-detail-content">
          <p>最近 AI Agent 很火。我从 2025 年 10 月开始接触 Cursor，到现在主要使用 Claude Code 和 Codex，陆陆续续花了近千元 token，也踩过不少坑。这篇文章不讲太多概念，主要是把一些个人使用经验整理出来。</p>
          <p>不过实话说，很多经验其实都能从 Claude Code 和 Codex 的技术报告里找到更系统的解释。所以这篇更像是一份个人使用记录，大家看个乐呵，也许能少踩几个坑。</p>
          <h3>1. AI 越聊越笨，本质上往往是上下文失控</h3>
          <p>很多人会感觉模型一开始挺聪明，聊久了就越来越笨。我的理解很简单：上下文一长，噪音就会不断堆积，模型注意力被稀释，关键约束也会慢慢漂移。</p>
          <p>简单任务可以靠 compact 或者手动压缩上下文来缓解，但复杂项目更应该从第一性原理去设计工作流。我现在更常用的方式是 Plan + Agent Teams：先让 AI 站在架构师视角，把整体方案、边界和技术路线盘清楚，比如先做技术调研，再拆任务、分角色、分上下文，让不同 agent 各自执行。这样能从源头减少冗余，而不是等上下文爆炸之后再补救。</p>
          <p>具体的操作细节，Claude Code 的技术报告里其实已经讲得比较清楚了。</p>
          <h3>2. 多写一些 skill，重复性任务不要靠临场发挥</h3>
          <p>AI 本质上还是在做概率预测。链路一长，同一个问题每次给出的解决方案都可能不一样。对于开放性问题这未必是坏事，但对于重复性任务，这种不稳定性是很致命的。</p>
          <p>就拿最简单的 PDF 转 TXT 来说，如果不借助 skill 固化步骤和约束，哪怕是很强的模型也可能在文件读取、编码处理或者输出格式上翻车。skill 的价值不只是省事，更关键的是把一段容易漂移的操作变成相对稳定的流程。</p>
          <p>再多说一句，如果是工业场景里的 agent 落地，很多时候单 agent 就够了。一上来就堆多 agent，通常只会带来更高的成本、更复杂的调试和更难排查的问题。学术界不少多 agent 工作，本质上也是用成本换分数、用系统复杂度换榜单表现而已。</p>
          <h3>3. 核心代码一定要自己看，尤其是数据流</h3>
          <p>这可能是我最近最痛的一个教训。之前有段时间过度依赖 vibe coding，没有认真检查核心代码和数据流，结果 AI 把 Transformer 的 mask 机制写错了，导致模型在预测 token 时没有正确看到新增信息。</p>
          <p>这个问题直到投稿最后一天才被发现。最后只能撤稿，错过原本的目标会议，改投别的地方。回头看，这不是模型背锅的问题，而是核心链路没有被人类认真审过。以后只要涉及训练、推理、评测和数据预处理，我都会优先检查数据流，再看 loss、指标和可视化。</p>
          <h3>最后</h3>
          <p>其实还有很多好用的 skill 和工作流值得分享，比如我最近在用的一些 workflow 和 superpower，也都很强，值得自己上手试试。</p>
          <p>如果后面我把这些流程再整理得更具体一些，可能会继续写第二篇。</p>
        </div>
      `
    },
    en: {
      content: `
        <header class="blog-detail-header">
          <h1 class="blog-detail-title">From Cursor to Claude Code and Codex: What I Learned from Using AI Agents</h1>
          <div class="blog-detail-meta">
            <span>Guanyu Zhu</span>
            <span>2026/03/16</span>
            <span>AI Agent · Workflow · Notes</span>
          </div>
        </header>
        <div class="blog-detail-content">
          <p>AI agents are everywhere right now. I first started using Cursor in October 2025, and later moved into regular use of Claude Code and Codex. Along the way I spent nearly a thousand yuan on tokens and made plenty of mistakes. This post is simply a practical record of what I learned.</p>
          <p>To be honest, many of these ideas are already explained more systematically in the technical reports for Claude Code and Codex. So this article is better read as a personal field note rather than a formal guide.</p>
          <h3>1. When AI gets dumber over time, the problem is usually context overload</h3>
          <p>A common experience is that the model feels sharp at first, then gradually becomes worse as the conversation grows. My view is straightforward: once context gets too long, noise accumulates, attention gets diluted, and important constraints start drifting.</p>
          <p>For simple tasks, compacting the conversation can help. For complex projects, though, it is better to design the workflow from first principles. What I use more often now is a Plan + Agent Teams setup: first let the model act as an architect and clarify the overall plan, boundaries, and technical direction, such as doing technical research before execution. Then split the work across agents with separate roles and separate context. That reduces redundancy at the source instead of trying to rescue a blown-up context window afterward.</p>
          <p>The concrete operational patterns are already described quite well in the Claude Code technical report.</p>
          <h3>2. Write more skills, and stop relying on improvisation for repetitive tasks</h3>
          <p>At the end of the day, the model is still doing probabilistic next-step prediction. Once the chain gets longer, the solution for the same problem may vary from run to run. That is fine for open-ended exploration, but it is a real problem for repetitive tasks.</p>
          <p>Take something as basic as converting PDF to TXT. Without a skill that fixes the steps and constraints, even a strong model can fail on file reading, encoding, or output formatting. The value of a skill is not just convenience. More importantly, it turns a drifting process into a relatively stable one.</p>
          <p>One more point: for real industrial deployment, a single agent is often enough. Starting with a multi-agent setup too early usually means higher cost, harder debugging, and more failure modes. A lot of academic multi-agent work is essentially trading cost and system complexity for benchmark gains.</p>
          <h3>3. Always inspect core code yourself, especially the data flow</h3>
          <p>This is probably the most painful lesson for me recently. For a while I relied too much on vibe coding and did not inspect the core code path carefully enough. The model ended up implementing the Transformer mask mechanism incorrectly, which meant the predicted tokens were not properly seeing the newly added information.</p>
          <p>We only discovered the bug on the final day before submission. In the end we had to withdraw the paper, miss the original target venue, and resubmit elsewhere. Looking back, this was not a case of blaming the model. It was a case of failing to review the critical path as humans. Now whenever training, inference, evaluation, or preprocessing is involved, I check the data flow first, then the loss, metrics, and visualizations.</p>
          <h3>Closing note</h3>
          <p>There are still many useful skills and workflows worth sharing. Some of the workflow and superpower setups I have been using lately are also genuinely strong and worth trying yourself.</p>
          <p>If I organize those workflows in a more concrete way later, I may write a follow-up post.</p>
        </div>
      `
    }
  }
};

const LANGUAGE_STORAGE_KEY = "preferred-language";
let currentLanguage = "zh";
let currentBlogId = null;

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
  return post[lang] || post.zh || null;
}

function renderBlogDetail(blogId) {
  const post = getBlogPost(blogId);
  if (!post) return;
  document.getElementById("blog-content").innerHTML = post.content;
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
