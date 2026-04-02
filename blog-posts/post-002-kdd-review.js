var _blogRegistry=window._blogRegistry||(window._blogRegistry=[]);_blogRegistry.push({id:2,date:"2026/03/21",tag:{zh:"审稿 · KDD · 学术随笔",en:"Reviewing · KDD · Research Notes"},metric:{type:{zh:"审稿观察",en:"Review notes"},focus:{zh:"AI / 投稿 / 顶会",en:"AI / Submission / Top venues"}},content:{zh:`
      <header class="blog-detail-header">
        <h1 class="blog-detail-title">第三次审稿之后：我对 AI、投稿和顶会的一些新感受</h1>
        <div class="blog-detail-meta">
          <span>朱冠宇</span>
          <span>2026/03/21</span>
          <span>审稿 · KDD · 学术随笔</span>
        </div>
      </header>
      <div class="blog-detail-content">
        <p>这次跟着师兄一起审了三篇文章，也算是我第三次正式参与审稿了。第一次是 ICLR，第二次是 SIGMOD，这次是 KDD。前两次多少攒了一点经验，但毕竟还是本科生，很多地方都还在学。</p>
        <h3>1. AI 把学术推快了，但先涨起来的往往还是数量</h3>
        <p>这次最深的感受就是，AI 真的把学术这件事推得太快了。以前更多是从投稿数量上感受到"卷"，这次是直接从稿件质量上感受到。原本我以为 AI 来了之后，大家会一起把质量往上抬，结果更明显的变化反而是数量猛涨，质量参差不齐还是老样子。</p>
        <p>好的工作当然也变多了，但差的工作一点也没少。甚至从比例上看，好的未必更多了。很多文章的问题不是完全不能做，而是做得不扎实、写得不清楚、讲得也不够诚实。</p>
        <h3>2. 有些稿子不是没东西，而是糊弄感太强</h3>
        <p>我审的这三篇里，有两篇多少都有点小 trick 的感觉。要么是在 baseline 上刻意省掉一些比较新的 method，然后很自然地说自己是 SOTA，仿佛别人最近两年的工作都不存在；要么就是说自己做了一个模块 A，但这东西其实在别的领域早就有人做过了，只是换了个说法又端上来了，而且也没把区别到底在哪、为什么非得这么做讲清楚。</p>
        <p>看下来就会有一种很强的感觉：不是东西不能做，而是很多地方真的写得太糊弄了。还有不少工作做得很不扎实，感觉就是有了个 idea，就立刻让 AI 帮忙跑代码、复现、赶投稿，整套流程主打一个"先投了再说"。主图更是一言难尽，我甚至看到一篇的数据流图能画得特别乱，乱到我第一眼都没看懂它到底想表达什么。</p>
        <h3>3. AI 也在把审稿标准推向同质化</h3>
        <p>正式开始审之前，我先把这三篇文章丢给 AI 过了一遍，开了 web search，也调了几个合适的 skill，让它先给关键词和初步判断。结果分数都差不多，但仔细一推就会发现，它给出的很多 strength 其实并不成立。</p>
        <p>后来我也把自己的文章丢给 AI 审了一下，发现给出来的结论也挺像。再加上 research track 这次本来就只给 1 到 4 分，区间其实很窄，在 AI 的帮助下，感觉大家最后都更容易往 2 到 3 这个区间里挤。可能真正很不错的论文最后是 3、3，差一些的论文可能也是 2、3，分数一下就没那么拉得开了。所以我甚至有点怀疑，这轮审稿到最后可能还是得看 AC 怎么决定，单看分数本身，最后大概率都会集中在一个差不多的区间里。</p>
        <h3>4. AI 最厉害的地方，还是查文献特别快</h3>
        <p>不过 AI 最有杀伤力的地方，确实还是它查文献特别快，能给自己的 weakness 迅速找支撑。比如它指出一个问题，马上就能搜到相关工作来说明这个问题为什么成立。这种能力会让"老方法套新故事"越来越难混过去，也会让投稿这件事变得更难。</p>
        <h3>5. 说回自己的论文，心态还是复杂</h3>
        <p>再说回我自己的论文，是一篇广告竞价方向的算法框架论文。说句不太谦虚的话，我觉得至少比这次审到的大部分稿子都更完整一点。但真要说中稿概率，我也不敢太乐观。因为我感觉自己的文章多少也有一点上面提到的问题。</p>
        <p>最近顺手刷了下小红书，感觉大家现在也都挺 mean 的。顶会这条路，是真的越来越卷了，一次就中的概率也越来越低。某种意义上，AI 并没有让学术变轻松，它只是把节奏推得更快，也把那些原本就存在的问题放得更大、更显眼。</p>
        <p>对我来说，这次审稿之后最直接的提醒还是：别太相信第一反应，别太依赖表面包装，实验要做扎实，相关工作要补完整，图和故事也要讲清楚。至少先别让自己的稿子也变成那种"先投了再说"的文章。哎，继续改 paper 吧。</p>
      </div>
    `,en:`
      <header class="blog-detail-header">
        <h1 class="blog-detail-title">After My Third Round of Reviewing: New Thoughts on AI, Submission Pressure, and Top Conferences</h1>
        <div class="blog-detail-meta">
          <span>Guanyu Zhu</span>
          <span>2026/03/21</span>
          <span>Reviewing · KDD · Research Notes</span>
        </div>
      </header>
      <div class="blog-detail-content">
        <p>This time I reviewed three papers with my senior collaborator, which makes it my third round of conference reviewing. The first was ICLR, the second was SIGMOD, and this time it was KDD. I did gain some experience from the first two rounds, but I am still an undergraduate, and there is still a lot to learn.</p>
        <h3>1. AI is speeding research up, but what grows first is often volume</h3>
        <p>The strongest feeling I had this time is that AI is pushing academic work forward extremely fast. Before, I mostly felt the pressure from the number of submissions. This time I felt it directly in the quality of the papers. I had expected AI to lift overall quality together, but the more visible change is that the number of submissions has surged while the quality spread remains just as uneven as before.</p>
        <p>Yes, there are more strong papers too, but weak papers have not become any fewer. In relative terms, the proportion of genuinely good work may not even be higher. Many papers are not completely invalid ideas. They are simply underdeveloped, poorly written, or not fully honest in how they frame the story.</p>
        <h3>2. Some papers are not empty, but the sense of hand-waving is strong</h3>
        <p>Among the three papers I reviewed, two of them had a noticeable "small trick" feeling. One would intentionally omit some newer methods from the baselines, then naturally claim SOTA as if work from the last two years did not exist. Another would present a module A as if it were new, even though similar ideas had already appeared in other fields. It was mostly a renamed concept served again without clearly explaining what was actually different or why the design was necessary.</p>
        <p>That leaves a strong impression that the problem is not always that the work cannot be done. The bigger issue is that too many parts feel perfunctory. Quite a few papers also felt methodologically weak, as if the authors got an idea, immediately asked AI to help run code, reproduce things, and rush the submission, all under a "submit first and see later" mindset. Even the main figures could be rough. In one paper, the data-flow diagram was so messy that I could not even understand what it was trying to show at first glance.</p>
        <h3>3. AI is also pushing reviewing toward homogenization</h3>
        <p>Before I started reviewing formally, I first sent the three papers through AI, turned on web search, and used a few suitable skills so it could produce keywords and preliminary judgments. The scores were all fairly similar, but once I looked more carefully, many of the claimed strengths did not really hold.</p>
        <p>I later fed my own paper to AI for review and found that the overall conclusions looked similar there too. On top of that, the research track only gives scores from 1 to 4, so the range is already narrow. With AI assistance, it feels even easier for everyone to end up crowded into the 2 to 3 range. A genuinely strong paper may end with a 3,3, while a weaker one might also get a 2,3. The scores stop separating papers as clearly as before. Because of that, I even suspect that in the end this round may depend heavily on what the AC decides. Looking at the raw scores alone, many papers will probably cluster in roughly the same band.</p>
        <h3>4. The most powerful thing AI does is still fast literature search</h3>
        <p>The place where AI feels most powerful is still literature search. It can quickly find support for a weakness. Once it points out a problem, it can often immediately surface related work that explains why the issue is valid. That makes it harder and harder for "old methods with new stories" to slip through, and it also makes submission itself more difficult.</p>
        <h3>5. As for my own paper, my feelings are still mixed</h3>
        <p>My own paper is an algorithmic framework paper on auto-bidding in advertising. To say something slightly immodest, I think it is at least more complete than most of the submissions I reviewed this time. But when it comes to acceptance probability, I still cannot be too optimistic, because I also feel my own paper has a bit of the same problems I just described.</p>
        <p>I also scrolled through Xiaohongshu a bit recently, and it feels like people are getting pretty mean now. The top-conference route is becoming more and more competitive, and the chance of getting in on the first try keeps dropping. In that sense, AI has not made academia easier. It has only made the pace faster while magnifying problems that were already there.</p>
        <p>The clearest reminder I got from this round is simple: do not trust the first impression too much, do not rely too much on surface packaging, make the experiments solid, cover the related work properly, and make the figures and the story clear. At the very least, try not to let my own submission become the kind of paper that says "submit first and fix later." Back to revising the paper.</p>
      </div>
    `}});