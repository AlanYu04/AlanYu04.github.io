var _blogRegistry = window._blogRegistry || (window._blogRegistry = []);
_blogRegistry.push({
  id: 1,
  date: "2026/03/16",
  tag: {
    zh: "AI Agent · Workflow · 经验分享",
    en: "AI Agent · Workflow · Notes"
  },
  metric: {
    type: { zh: "随笔分享", en: "Field note" },
    focus: { zh: "工作流 / Skill / 代码检查", en: "Workflow / Skills / Code review" }
  },
  content: {
    zh: `
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
    `,
    en: `
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
});
