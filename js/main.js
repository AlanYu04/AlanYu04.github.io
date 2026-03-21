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
    "blog.stats.posts": "2 篇文章",
    "blog.stats.words": "经验分享 · 学术观察",
    "blog.authorAlt": "作者",
    "blog.authorName": "朱冠宇",
    "blog.post1.tag": "AI Agent · Workflow · 经验分享",
    "blog.post1.title": "从 Cursor 到 Claude Code 再到 Codex：我的 AI Agent 使用经验",
    "blog.post1.excerpt":
      "从 2025 年 10 月开始接触 Cursor，到现在持续使用 Claude Code 和 Codex，我陆续花了近千元 token，也踩过不少坑。这里不讲概念，只分享一些关于上下文管理、skills 设计和代码审查的实际经验。",
    "blog.post2.tag": "审稿 · KDD · 学术随笔",
    "blog.post2.title": "第三次审稿之后：我对 AI、投稿和顶会的一些新感受",
    "blog.post2.excerpt":
      "这次跟着师兄一起审了三篇 KDD 稿件。比起前两次 ICLR 和 SIGMOD 的经历，这次更强烈地感受到 AI 正在把投稿和审稿一起推向高频、同质又更拥挤的状态。",
    "blog.metric.type": "随笔分享",
    "blog.metric.focus": "工作流 / Skill / 代码检查",
    "blog.post2.metric.type": "审稿观察",
    "blog.post2.metric.focus": "AI / 投稿 / 顶会",
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
    "blog.stats.posts": "2 posts",
    "blog.stats.words": "Experience notes · Research reflections",
    "blog.authorAlt": "Author",
    "blog.authorName": "Guanyu Zhu",
    "blog.post1.tag": "AI Agent · Workflow · Notes",
    "blog.post1.title": "From Cursor to Claude Code and Codex: What I Learned from Using AI Agents",
    "blog.post1.excerpt":
      "I first started using Cursor in October 2025, and later moved into regular use of Claude Code and Codex. After spending nearly a thousand yuan on tokens and making plenty of mistakes, I ended up with a few concrete lessons about context management, skills, and code review.",
    "blog.post2.tag": "Reviewing · KDD · Research Notes",
    "blog.post2.title": "After My Third Round of Reviewing: New Thoughts on AI, Submission Pressure, and Top Conferences",
    "blog.post2.excerpt":
      "This time I reviewed three KDD submissions with my senior collaborator. Compared with my earlier ICLR and SIGMOD experience, I felt much more clearly that AI is pushing both submission and reviewing toward a faster, more crowded, and more homogenized state.",
    "blog.metric.type": "Field note",
    "blog.metric.focus": "Workflow / Skills / Code review",
    "blog.post2.metric.type": "Review notes",
    "blog.post2.metric.focus": "AI / Submission / Top venues",
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
  },
  2: {
    zh: {
      content: `
        <header class="blog-detail-header">
          <h1 class="blog-detail-title">第三次审稿之后：我对 AI、投稿和顶会的一些新感受</h1>
          <div class="blog-detail-meta">
            <span>朱冠宇</span>
            <span>2026/03/21</span>
            <span>审稿 · KDD · 学术随笔</span>
          </div>
        </header>
        <div class="blog-detail-content">
          <p>这次跟着师兄一起审了三篇文章，也算是我第三次正式参与审稿了。第一次是 ICLR，第二次是 SIGMOD，这次是 KDD。前两次多少攒了一点经验，但这次最后还是被师兄帮着大改了一轮，也让我更清楚地意识到，自己有些判断还是会不自觉地想当然。毕竟还是本科生，很多地方都还在学。</p>
          <h3>1. AI 把学术推快了，但先涨起来的往往还是数量</h3>
          <p>这次最深的感受就是，AI 真的把学术这件事推得太快了。以前更多是从投稿数量上感受到“卷”，这次是直接从稿件质量上感受到。原本我以为 AI 来了之后，大家会一起把质量往上抬，结果更明显的变化反而是数量猛涨，质量参差不齐还是老样子。</p>
          <p>好的工作当然也变多了，但差的工作一点也没少。甚至从比例上看，好的未必更多了。很多文章的问题不是完全不能做，而是做得不扎实、写得不清楚、讲得也不够诚实。</p>
          <h3>2. 有些稿子不是没东西，而是糊弄感太强</h3>
          <p>我审的这三篇里，有两篇多少都有点小 trick 的感觉。要么是在 baseline 上刻意省掉一些比较新的 method，然后很自然地说自己是 SOTA，仿佛别人最近两年的工作都不存在；要么就是说自己做了一个模块 A，但这东西其实在别的领域早就有人做过了，只是换了个说法又端上来了，而且也没把区别到底在哪、为什么非得这么做讲清楚。</p>
          <p>看下来就会有一种很强的感觉：不是东西不能做，而是很多地方真的写得太糊弄了。还有不少工作做得很不扎实，感觉就是有了个 idea，就立刻让 AI 帮忙跑代码、复现、赶投稿，整套流程主打一个“先投了再说”。主图更是一言难尽，我甚至看到一篇的数据流图能画得特别乱，乱到我第一眼都没看懂它到底想表达什么。</p>
          <h3>3. AI 也在把审稿标准推向同质化</h3>
          <p>正式开始审之前，我先把这三篇文章丢给 AI 过了一遍，开了 web search，也调了几个合适的 skill，让它先给关键词和初步判断。结果分数都差不多，但仔细一推就会发现，它给出的很多 strength 其实并不成立。</p>
          <p>后来我也把自己的文章丢给 AI 审了一下，发现给出来的结论也挺像。再加上 research track 这次本来就只给 1 到 4 分，区间其实很窄，在 AI 的帮助下，感觉大家最后都更容易往 2 到 3 这个区间里挤。可能真正很不错的论文最后是 3、3，差一些的论文可能也是 2、3，分数一下就没那么拉得开了。所以我甚至有点怀疑，这轮审稿到最后可能还是得看 AC 怎么决定，单看分数本身，最后大概率都会集中在一个差不多的区间里。</p>
          <h3>4. AI 最厉害的地方，还是查文献特别快</h3>
          <p>不过 AI 最有杀伤力的地方，确实还是它查文献特别快，能给自己的 weakness 迅速找支撑。比如它指出一个问题，马上就能搜到相关工作来说明这个问题为什么成立。这种能力会让“老方法套新故事”越来越难混过去，也会让投稿这件事变得更难。</p>
          <h3>5. 说回自己的论文，心态还是复杂</h3>
          <p>再说回我自己的论文，是一篇广告竞价方向的算法框架论文。说句不太谦虚的话，我觉得至少比这次审到的大部分稿子都更完整一点。但真要说中稿概率，我也不敢太乐观。因为我感觉自己的文章多少也有一点上面提到的问题。</p>
          <p>最近顺手刷了下小红书，感觉大家现在也都挺 mean 的。顶会这条路，是真的越来越卷了，一次就中的概率也越来越低。某种意义上，AI 并没有让学术变轻松，它只是把节奏推得更快，也把那些原本就存在的问题放得更大、更显眼。</p>
          <p>对我来说，这次审稿之后最直接的提醒还是：别太相信第一反应，别太依赖表面包装，实验要做扎实，相关工作要补完整，图和故事也要讲清楚。至少先别让自己的稿子也变成那种“先投了再说”的文章。哎，继续改 paper 吧。</p>
        </div>
      `
    },
    en: {
      content: `
        <header class="blog-detail-header">
          <h1 class="blog-detail-title">After My Third Round of Reviewing: New Thoughts on AI, Submission Pressure, and Top Conferences</h1>
          <div class="blog-detail-meta">
            <span>Guanyu Zhu</span>
            <span>2026/03/21</span>
            <span>Reviewing · KDD · Research Notes</span>
          </div>
        </header>
        <div class="blog-detail-content">
          <p>This time I reviewed three papers with my senior collaborator, which makes it my third round of conference reviewing. The first was ICLR, the second was SIGMOD, and this time it was KDD. I did gain some experience from the first two rounds, but this time my senior still had to heavily revise my comments in the end. That made me realize more clearly that some of my judgments still drift toward unchecked assumptions. I am still an undergraduate, and there is still a lot to learn.</p>
          <h3>1. AI is speeding research up, but what grows first is often volume</h3>
          <p>The strongest feeling I had this time is that AI is pushing academic work forward extremely fast. Before, I mostly felt the pressure from the number of submissions. This time I felt it directly in the quality of the papers. I had expected AI to lift overall quality together, but the more visible change is that the number of submissions has surged while the quality spread remains just as uneven as before.</p>
          <p>Yes, there are more strong papers too, but weak papers have not become any fewer. In relative terms, the proportion of genuinely good work may not even be higher. Many papers are not completely invalid ideas. They are simply underdeveloped, poorly written, or not fully honest in how they frame the story.</p>
          <h3>2. Some papers are not empty, but the sense of hand-waving is strong</h3>
          <p>Among the three papers I reviewed, two of them had a noticeable “small trick” feeling. One would intentionally omit some newer methods from the baselines, then naturally claim SOTA as if work from the last two years did not exist. Another would present a module A as if it were new, even though similar ideas had already appeared in other fields. It was mostly a renamed concept served again without clearly explaining what was actually different or why the design was necessary.</p>
          <p>That leaves a strong impression that the problem is not always that the work cannot be done. The bigger issue is that too many parts feel perfunctory. Quite a few papers also felt methodologically weak, as if the authors got an idea, immediately asked AI to help run code, reproduce things, and rush the submission, all under a “submit first and see later” mindset. Even the main figures could be rough. In one paper, the data-flow diagram was so messy that I could not even understand what it was trying to show at first glance.</p>
          <h3>3. AI is also pushing reviewing toward homogenization</h3>
          <p>Before I started reviewing formally, I first sent the three papers through AI, turned on web search, and used a few suitable skills so it could produce keywords and preliminary judgments. The scores were all fairly similar, but once I looked more carefully, many of the claimed strengths did not really hold.</p>
          <p>I later fed my own paper to AI for review and found that the overall conclusions looked similar there too. On top of that, the research track only gives scores from 1 to 4, so the range is already narrow. With AI assistance, it feels even easier for everyone to end up crowded into the 2 to 3 range. A genuinely strong paper may end with a 3,3, while a weaker one might also get a 2,3. The scores stop separating papers as clearly as before. Because of that, I even suspect that in the end this round may depend heavily on what the AC decides. Looking at the raw scores alone, many papers will probably cluster in roughly the same band.</p>
          <h3>4. The most powerful thing AI does is still fast literature search</h3>
          <p>The place where AI feels most powerful is still literature search. It can quickly find support for a weakness. Once it points out a problem, it can often immediately surface related work that explains why the issue is valid. That makes it harder and harder for “old methods with new stories” to slip through, and it also makes submission itself more difficult.</p>
          <h3>5. As for my own paper, my feelings are still mixed</h3>
          <p>My own paper is an algorithmic framework paper on auto-bidding in advertising. To say something slightly immodest, I think it is at least more complete than most of the submissions I reviewed this time. But when it comes to acceptance probability, I still cannot be too optimistic, because I also feel my own paper has a bit of the same problems I just described.</p>
          <p>I also scrolled through Xiaohongshu a bit recently, and it feels like people are getting pretty mean now. The top-conference route is becoming more and more competitive, and the chance of getting in on the first try keeps dropping. In that sense, AI has not made academia easier. It has only made the pace faster while magnifying problems that were already there.</p>
          <p>The clearest reminder I got from this round is simple: do not trust the first impression too much, do not rely too much on surface packaging, make the experiments solid, cover the related work properly, and make the figures and the story clear. At the very least, try not to let my own submission become the kind of paper that says “submit first and fix later.” Back to revising the paper.</p>
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
