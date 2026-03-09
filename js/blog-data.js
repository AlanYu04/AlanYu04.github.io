// 博客文章数据
window.blogPosts = {
  1: {
    title: "PhysicsMind 项目复盘：从仿真到现实的物理推理评测",
    date: "2025/12/31",
    tag: "多模态 · 物理推理",
    content: `
      <div class="blog-detail-header">
        <span class="blog-tag" style="display: inline-block; margin-bottom: 12px;">多模态 · 物理推理</span>
        <h1 class="blog-detail-title">PhysicsMind 项目复盘：从仿真到现实的物理推理评测</h1>
        <div class="blog-detail-meta">
          <span>朱冠宇</span>
          <span>·</span>
          <time>2025/12/31</time>
          <span>·</span>
          <span>北京大学（远程科研）</span>
        </div>
      </div>
      <div class="blog-detail-content">
        <p>在参与 PhysicsMind 项目的三个月里，我深刻体会到了 Sim-to-Real 问题在多模态学习中的复杂性。这个项目旨在评测视觉语言模型（VLMs）和世界模型在物理推理与预测任务上的能力，特别是在从仿真环境迁移到真实场景时的表现差异。</p>
        
        <h3>1. 项目背景与动机</h3>
        <p>当前的 VLMs 在静态图像理解上表现出色，但在物理推理方面仍存在明显短板。我们设计了一个包含 2D 仿真和真实桌面实验的配对数据集，涵盖了牛顿力学、材料特性、碰撞预测等多个维度的物理场景。</p>
        
        <h3>2. 数据采集与处理流程</h3>
        <p>数据构建是整个项目最耗时的部分。我们采用了以下流程：</p>
        <ul>
          <li><strong>仿真数据生成：</strong>使用 PyBullet 物理引擎创建可控的 2D 物理场景，包括不同质量、摩擦系数的物体交互</li>
          <li><strong>真实实验搭建：</strong>在实验室搭建标准化桌面环境，使用固定机位拍摄，确保与仿真场景视角一致</li>
          <li><strong>配对标注：</strong>对 Sim/Real 场景进行配对标注，建立物理参数与视觉表现的映射关系</li>
        </ul>
        
        <h3>3. 关键发现</h3>
        <p>在对比 GPT-4V、Claude 3 等主流模型时，我们发现了一个有趣的现象：模型在仿真数据上的表现普遍优于真实场景，差距平均达到 15-20%。这种"仿真鸿沟"主要体现在对材质纹理、光照变化的敏感性上。</p>
        
        <pre><code>// 示例：物理推理评测指标计算
function calculatePhysicsScore(pred, ground_truth) {
  const trajectoryMatch = compareTrajectories(pred.path, gt.path);
  const forceEstimation = cosineSimilarity(pred.forces, gt.forces);
  return 0.6 * trajectoryMatch + 0.4 * forceEstimation;
}</code></pre>
        
        <h3>4. 未来工作</h3>
        <p>目前 PhysicsMind 正在投稿 ICML 2026。下一步我们计划扩展 3D 物理场景，并引入更多细粒度的物理属性预测任务，如液体动力学、柔性体形变等。</p>
        
        <p>这个项目让我对"物理世界模型"有了更深的理解，也期待与更多研究者的交流。</p>
      </div>
    `
  },
  2: {
    title: "Lychee-Bench：构建农业领域的过程级多模态推理基准",
    date: "2025/09/07",
    tag: "农业 AI · 多模态",
    content: `
      <div class="blog-detail-header">
        <span class="blog-tag" style="display: inline-block; margin-bottom: 12px;">农业 AI · 多模态</span>
        <h1 class="blog-detail-title">Lychee-Bench：构建农业领域的过程级多模态推理基准</h1>
        <div class="blog-detail-meta">
          <span>朱冠宇</span>
          <span>·</span>
          <time>2025/09/07</time>
          <span>·</span>
          <span>华南农业大学</span>
        </div>
      </div>
      <div class="blog-detail-content">
        <p>农业 AI 是一个被低估的领域。与通用的 VQA 任务不同，农业场景诊断需要模型具备过程级推理能力——不仅要识别病害，还要理解发病机制、传播路径和防治措施的因果关系。Lychee-Bench 正是为了填补这一评测空白而诞生的。</p>
        
        <h3>1. 田间数据采集实录</h3>
        <p>2025 年 5 月至 8 月，我们在华南农业大学从化荔枝果园进行了为期三个月的数据采集。面对广东多变的天气，我们设计了防雨拍摄装置，确保在不同光照条件下都能获得高质量的图像。</p>
        <p>最终收集到 6,553 张有效图像，覆盖 12 种常见的荔枝病害和营养缺乏症状，包括霜疫霉病、炭疽病、蛀蒂虫危害等。</p>
        
        <h3>2. CoT 数据构建策略</h3>
        <p>传统的农业诊断数据集只提供"图像-标签"对，缺乏推理过程。我们邀请了 5 位植保专家，采用以下方式构建思维链（Chain-of-Thought）数据：</p>
        <ul>
          <li><strong>观察阶段：</strong>记录叶片/果实的颜色、形状、病斑特征</li>
          <li><strong>推理阶段：</strong>根据发病部位、季节因素排除其他可能性</li>
          <li><strong>决策阶段：</strong>给出确诊结论和防治建议</li>
        </ul>
        
        <p>最终生成了 29,756 条结构化的 CoT-QA 样本，用于过程级推理监督。</p>
        
        <h3>3. 模型训练与 GRPO 对齐</h3>
        <p>基于 Qwen2.5-VL-7B，我们采用了两阶段训练策略：</p>
        <pre><code>阶段一：SFT（监督微调）
- 学习率：2e-5
- Batch size：16
- Epochs：3
- 重点学习视觉-语言对齐

阶段二：GRPO（组相对策略优化）
- 奖励函数：准确性 + 推理步骤完整性
- KL 系数：0.1
- 提升诊断准确率 8.3%</code></pre>
        
        <h3>4. 挑战与反思</h3>
        <p>项目中最困难的部分是处理农业场景的长尾分布。某些罕见病害的样本量极少，我们采用了数据增强和专家知识蒸馏相结合的方法来缓解这一问题。</p>
        
        <p>Lychee-Bench 目前投稿至 Smart Agricultural Technology，代码和数据集将在接收后开源。希望能为农业 AI 社区提供一个可信的评测基准。</p>
      </div>
    `
  },
  3: {
    title: "科研推进的三个节奏：读、做、复盘",
    date: "2026/03/08",
    tag: "科研经验 · 方法论",
    content: `
      <div class="blog-detail-header">
        <span class="blog-tag" style="display: inline-block; margin-bottom: 12px;">科研经验 · 方法论</span>
        <h1 class="blog-detail-title">科研推进的三个节奏：读、做、复盘</h1>
        <div class="blog-detail-meta">
          <span>朱冠宇</span>
          <span>·</span>
          <time>2026/03/08</time>
          <span>·</span>
          <span>经验杂谈</span>
        </div>
      </div>
      <div class="blog-detail-content">
        <p>很多时候，科研停滞不是因为能力不够，而是节奏混乱。对我最有效的一套流程是：先读、再做、最后复盘。每一轮都不求完美，但求有产出、有反馈。</p>

        <h3>1. 读：先把问题读清楚</h3>
        <p>读论文不是为了“看过很多”，而是为了判断问题值不值得做。建议每周固定读 5-8 篇，重点记录三个点：任务定义、关键假设、失败案例。</p>

        <h3>2. 做：短周期实验拿反馈</h3>
        <p>把实验周期压缩到 2-3 天一轮，哪怕是小规模验证。先证明方向是否可行，再做大规模训练。避免一上来就堆算力，最后才发现假设本身有问题。</p>
        <pre><code>每轮实验最小闭环：
1) 明确一个可验证假设
2) 设计一个最小实验
3) 输出一页结果总结
4) 基于结果决定继续/放弃/转向</code></pre>

        <h3>3. 复盘：把经验沉淀成方法</h3>
        <p>每次实验结束后，我会固定写三段：做对了什么、做错了什么、下一步怎么改。长期看，这些记录会变成你自己的研究方法库。</p>

        <p>当“读-做-复盘”形成稳定节奏后，项目推进会明显更快，也更不容易陷入焦虑。</p>
      </div>
    `
  }
};
