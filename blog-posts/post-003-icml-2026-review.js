var _blogRegistry=window._blogRegistry||(window._blogRegistry=[]);_blogRegistry.push({id:3,date:"2026/03/26",tag:{zh:"ICML · 投稿 · 学术随笔",en:"ICML · Submission · Research Notes"},metric:{type:{zh:"投稿感悟",en:"Submission Reflection"},focus:{zh:"物理推理 / Benchmark / 顶会投稿",en:"Physics Reasoning / Benchmark / Top Venue Submission"}},content:{zh:`
      <header class="blog-detail-header">
        <h1 class="blog-detail-title">ICML 2026 出分感悟：4333</h1>
        <div class="blog-detail-meta">
          <span>朱冠宇</span>
          <span>2026/03/26</span>
          <span>ICML · 投稿 · 学术随笔</span>
        </div>
      </header>
      <div class="blog-detail-content">
        <p>四个 reviewer，4/3/3/3，置信度全是 4，满分 6。</p>
        <p>不是 reject，但 rebuttal 基本没有加分可能。冷静下来想想，reviewer 的意见都是实打实的硬伤，反驳不了，所以打算转头投 ACM MM。</p>
        <p>这篇论文做的是 <strong>PhysicsMind</strong>，一个物理推理 benchmark。我们挑了高中物理最基本的三条力学定律——重心、杠杆平衡、牛顿第一定律，用 VQA 和视频生成两个任务去测当前大模型到底懂不懂物理。数据有真实桌面实验录像，也有 2D 仿真，评测对象基本覆盖了 GPT-5、Claude、Gemini、DeepSeek、Qwen，以及 Sora-2、Veo3.1 等主流模型。</p>
        <h3>Reviewer 的核心意见</h3>
        <p>归纳下来就几个核心：</p>
        <ul>
          <li><strong>数据量太小。</strong>81 个视频、122 个 VQA 题目，每个子任务 10-20 个样本，三位 reviewer 都锤了这个问题。</li>
          <li><strong>sim-to-real 结论写得太满。</strong>实际上只有重心做了 sim/real 配对，杠杆只有仿真、牛一只有真实，但论文里写成了 "unified sim and real benchmark"。</li>
          <li><strong>评测协议有疑点。</strong>比如用 VLM 去评判杠杆视频生成结果，但自己的 VQA 实验已经证明 VLM 在杠杆问题上不准——这不是循环论证吗？还有 SAM 在生成视频上提取掩码是否可靠、缺 human baseline 等等。</li>
          <li><strong>表述 overclaim。</strong>很多地方写得比实际做的要满。</li>
        </ul>
        <p>这些都是没法靠 rebuttal 扭转的，因为不是"reviewer 没看懂"，而是"reviewer 看懂了你的硬伤"。</p>
        <h3>说句心里话</h3>
        <p>这个项目我是十月份才加入的。之前团队已经做了很多前期工作，我算是中途上车。</p>
        <p>十一月底就要投 CVPR，满打满算也就一个多月的时间。那段时间真的是疯狂赶工。真实实验那边的场景搭建、录视频都是师兄们做的，我主要负责设计虚拟实验——仿真场景的参数调校、生成、标注这些。我还制作了重心和牛顿第一定律的轨迹评测指标，从设计到实现到跑通，中间踩了不少坑。大家加班加点赶在 deadline 之前投了出去。</p>
        <p>CVPR 那边分数 4/3/2，确实很差。后来转投了 ICML，这次 4/3/3/3，好了一些但 rebuttal 基本没加分可能。</p>
        <p>数据集数量确实是硬伤。做数据太耗时了，一个多月的时间能做出的东西确实有限。</p>
        <p>不过还没结束，打算转头投 ACM MM。这周正在紧急补数据量——现实数据集器材已经买了，争取两天后多拍一些；虚拟数据那边可以批量补充，每一类准备补到四五百。至少这次知道该往哪个方向使劲了。</p>
        <h3>写在最后</h3>
        <p>这是我第二次和他人合作完成一篇顶会工作，非常珍惜这次经历，也很感谢师兄们对我的帮助和包容。作为一个中途加入的成员，很多地方我都在学习，是他们带着我一起往前走的。</p>
        <p>接下来手头的事还挺多的——还有一篇 CIKM 的论文在推进，还要帮组里的朋友画图和润色论文。另外 4 月 5 号有复旦老师的面试，挺喜欢那个老师的研究方向的，真的要好好准备了。</p>
        <p>没有太多时间细说了，继续加油吧。</p>
      </div>
    `,en:`
      <header class="blog-detail-header">
        <h1 class="blog-detail-title">ICML 2026 Scores Are Out: 4333</h1>
        <div class="blog-detail-meta">
          <span>Guanyu Zhu</span>
          <span>2026/03/26</span>
          <span>ICML · Submission · Research Notes</span>
        </div>
      </header>
      <div class="blog-detail-content">
        <p>Four reviewers: 4/3/3/3, confidence all at 4 out of 6.</p>
        <p>Not a reject, but there is basically no chance of gaining points during rebuttal. Once I calmed down and thought about it, the reviewers' comments pointed out genuine, hard flaws that cannot be argued away. So the plan is to redirect and submit to ACM MM.</p>
        <p>This paper is about <strong>PhysicsMind</strong>, a physics reasoning benchmark. We selected three of the most fundamental mechanics laws from high school physics — center of gravity, lever balance, and Newton's first law — and used VQA and video generation tasks to test whether current large models actually understand physics. The data includes real desktop experiment recordings as well as 2D simulations. The evaluated models essentially cover GPT-5, Claude, Gemini, DeepSeek, Qwen, as well as Sora-2, Veo3.1 and other mainstream models.</p>
        <h3>Core Reviewer Concerns</h3>
        <p>Summarized, the main points are:</p>
        <ul>
          <li><strong>Dataset is too small.</strong>81 videos, 122 VQA questions, 10-20 samples per subtask. Three reviewers all hammered this issue.</li>
          <li><strong>sim-to-real claims are overstated.</strong>In reality, only center of gravity had paired sim/real data. Lever only had simulations, and Newton's first law only had real data, but the paper framed it as a "unified sim and real benchmark."</li>
          <li><strong>Evaluation protocol is questionable.</strong>For example, using VLMs to judge lever video generation results, when their own VQA experiments already showed that VLMs are inaccurate on lever problems — isn't that circular reasoning? There are also concerns about whether SAM mask extraction is reliable on generated videos, and the lack of a human baseline.</li>
          <li><strong>Overclaiming in writing.</strong>Many places claim more than what was actually done.</li>
        </ul>
        <p>None of these can be reversed through rebuttal, because the issue is not "the reviewers didn't understand" — it's "the reviewers understood your weaknesses perfectly."</p>
        <h3>Honest Thoughts</h3>
        <p>I only joined this project in October. The team had already done a lot of preliminary work before that, so I was essentially hopping on halfway through.</p>
        <p>The CVPR deadline was at the end of November, giving us barely over a month. Those weeks were a frantic rush. The real-world experiment setup and video recording were handled by my senior collaborators. I was mainly responsible for designing the virtual experiments — tuning simulation parameters, generating data, and annotating. I also built the trajectory evaluation metrics for center of gravity and Newton's first law, from design through implementation to getting everything working. I ran into quite a few pitfalls along the way. Everyone worked overtime to get the submission out before the deadline.</p>
        <p>CVPR came back with 4/3/2 — genuinely bad. Later we pivoted to ICML, and this time we got 4/3/3/3. Better, but basically no room to gain during rebuttal.</p>
        <p>Dataset size is indeed a hard weakness. Creating data is extremely time-consuming, and what can be produced in just over a month is inherently limited.</p>
        <p>But the story isn't over yet — the plan is to submit to ACM MM. This week we are urgently supplementing the data volume. Physical experiment equipment has already been purchased, and we hope to film more within two days. On the virtual data side, we can batch-generate more, aiming for four to five hundred per category. At least this time we know exactly where to direct our efforts.</p>
        <h3>Final Words</h3>
        <p>This is my second time collaborating on a top-venue paper, and I truly value the experience. I am very grateful to my senior collaborators for their help and patience. As someone who joined mid-project, I was learning in many areas, and they were the ones who guided me forward.</p>
        <p>There is still quite a lot on my plate — a CIKM paper in progress, helping friends in the group with figures and paper polishing, and an interview with a Fudan professor on April 5th. I genuinely like that professor's research direction, so I really need to prepare well.</p>
        <p>Not much time to elaborate. Time to keep pushing forward.</p>
      </div>
    `}});