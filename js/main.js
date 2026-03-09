function switchBlogCategory(category, btnEl) {
  document.querySelectorAll('.blog-panel').forEach((panel) => {
    panel.classList.remove('active');
  });
  const activePanel = document.getElementById(`blog-panel-${category}`);
  if (activePanel) activePanel.classList.add('active');

  document.querySelectorAll('.blog-cat-btn').forEach((btn) => {
    btn.classList.remove('active');
  });
  const activeBtn = btnEl || document.querySelector(`.blog-cat-btn[data-category="${category}"]`);
  if (activeBtn) activeBtn.classList.add('active');
}

// 页面切换功能
function showPage(pageName, navEl) {
  // 隐藏所有页面
  document.querySelectorAll('.page-section').forEach((section) => {
    section.classList.remove('active');
  });

  // 显示目标页面
  const page = document.getElementById(pageName + '-page');
  if (page) page.classList.add('active');

  // 更新导航状态
  document.querySelectorAll('.top-nav a').forEach((link) => {
    link.classList.remove('active');
  });
  const targetNav = navEl || document.querySelector(`.top-nav a[data-page="${pageName}"]`);
  if (targetNav) targetNav.classList.add('active');

  // 从其他页面回来时，博客默认展示列表视图
  if (pageName === 'blog') {
    backToBlogList();
    switchBlogCategory('paper');
  }

  // 关闭移动端菜单
  const topNav = document.getElementById('top-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  if (topNav.classList.contains('open')) {
    topNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  // 滚动到顶部
  window.scrollTo(0, 0);
}

// 显示博客详情
function showBlogDetail(blogId) {
  const post = window.blogPosts[blogId];
  if (!post) return;
  
  document.getElementById('blog-content').innerHTML = post.content;
  document.getElementById('blog-list-view').classList.add('hidden');
  document.getElementById('blog-detail-view').classList.add('active');
  window.scrollTo(0, 0);
}

// 返回博客列表
function backToBlogList() {
  document.getElementById('blog-detail-view').classList.remove('active');
  document.getElementById('blog-list-view').classList.remove('hidden');
}

// 移动端菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const topNav = document.getElementById('top-nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = topNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
