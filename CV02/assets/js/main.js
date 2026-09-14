const { slideTitles, timelineData, worksData, categoryData, keywordsData, galleryData } = window.portfolioData;

const slides = [
  {
    id: 'hero',
    className: 'hero-slide',
    content: `
      <div class="slide-content">
        <div class="hero-text">
          <span class="tag">环境设计作品集</span>
          <h1>王崧</h1>
          <p class="hero-subtitle">疗愈五感 · 童趣空间 · 营造有温度的人居环境</p>
          <p>广东东软学院 21 环境设计 1 班 | 学号 21246520122</p>
          <p>以空间为媒介，探索景观与室内的边界，关注儿童友好、生态疗愈与文化传承。</p>
          <div class="hero-stats">
            <div class="stat-item"><div class="stat-number">30+</div><div class="stat-label">设计作品</div></div>
            <div class="stat-item"><div class="stat-number">4</div><div class="stat-label">设计方向</div></div>
            <div class="stat-item"><div class="stat-number">2021</div><div class="stat-label">入学年份</div></div>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" alt="作品封面" />
          <div class="float-card" style="bottom: 24px; left: -50px;">
            <h4>毕业设计</h4>
            <p>疗愈五感 · 童趣空间</p>
          </div>
          <div class="float-card" style="top: 30px; right: -40px; animation-delay: 1s;">
            <h4>专业技能</h4>
            <p>CAD / PS / SU / 3Dmax</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'about',
    className: 'about-slide',
    content: `
      <div class="slide-content">
        <div class="about-image">
          <div class="about-image-main">
            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80" alt="关于我" />
          </div>
          <div class="about-image-deco"></div>
        </div>
        <div class="about-text">
          <span class="tag">关于我</span>
          <h2>用设计连接<span class="accent-text">人与空间</span></h2>
          <p>拥有较强的学习能力与表达沟通能力，能适应各种环境并融入其中。工作认真负责，不以自我为中心，不半途而废，用 100% 的热情和精力投入到工作中。</p>
          <div class="about-info">
            <div class="info-card"><h4>教育背景</h4><p>广东东软学院<br>环境设计本科<br>2021/9 至今</p></div>
            <div class="info-card"><h4>工作经历</h4><p>2023 深圳贝盈科技<br>2024 佛山维意定制</p></div>
            <div class="info-card"><h4>专业课程</h4><p>CAD 图纸、PS 应用、SU 模型、3Dmax 建模、Lumion 渲染</p></div>
            <div class="info-card"><h4>联系方式</h4><p>13048889898<br>1142549133@qq.com</p></div>
          </div>
          <div class="skills-list">
            <span class="skill-tag">景观设计</span>
            <span class="skill-tag">室内设计</span>
            <span class="skill-tag">手绘表现</span>
            <span class="skill-tag">三维渲染</span>
            <span class="skill-tag">全屋定制</span>
            <span class="skill-tag">施工图</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'timeline',
    className: 'timeline-slide',
    content: `
      <div class="slide-content">
        <div class="timeline-header">
          <span class="tag">成长轨迹</span>
          <h2>作品时间线</h2>
          <p>从设计基础到毕业设计，四年学习与创作历程</p>
        </div>
        <div class="timeline-container">
          <div class="timeline-line"></div>
          <div class="timeline-items" id="timelineItems"></div>
        </div>
      </div>
    `
  },
  {
    id: 'categories',
    className: 'categories-slide',
    content: `
      <div class="slide-content">
        <div class="category-list">
          <span class="tag">分类统计</span>
          <h2>作品类型分布</h2>
          <div class="category-card" data-category="landscape"><h3>景观设计</h3><span class="category-count">8 件作品</span><p>城市广场、公园景观、儿童友好空间、毕业设计等。</p></div>
          <div class="category-card" data-category="interior"><h3>室内设计</h3><span class="category-count">12 件作品</span><p>住宅空间、全屋定制、商业空间、手绘表现与方案推敲。</p></div>
          <div class="category-card" data-category="visual"><h3>视觉传达</h3><span class="category-count">6 件作品</span><p>海报设计、公益宣传、设计构成、NCDA 竞赛作品等。</p></div>
          <div class="category-card" data-category="modeling"><h3>三维建模</h3><span class="category-count">5 件作品</span><p>SketchUp、3Dmax 建模与渲染，VR 材质与灯光综合设计。</p></div>
        </div>
        <div class="chart-container">
          <div class="chart-title">作品分类占比</div>
          <canvas id="categoryChart"></canvas>
        </div>
      </div>
    `
  },
  {
    id: 'keywords',
    className: 'keywords-slide',
    content: `
      <div class="slide-content">
        <div class="keyword-stats">
          <span class="tag">关键词分析</span>
          <h2>创作主题分布</h2>
          <div class="keyword-stat"><div class="number">12</div><div class="label">生态/疗愈</div></div>
          <div class="keyword-stat"><div class="number">9</div><div class="label">儿童友好</div></div>
          <div class="keyword-stat"><div class="number">8</div><div class="label">文化传承</div></div>
          <div class="keyword-stat"><div class="number">11</div><div class="label">空间功能</div></div>
        </div>
        <div class="word-cloud" id="wordCloud"></div>
      </div>
    `
  },
  {
    id: 'featured',
    className: 'featured-slide',
    content: `
      <div class="slide-content">
        <div class="featured-info">
          <span class="tag">毕业设计 · 2025</span>
          <h2>疗愈五感 · 童趣空间</h2>
          <h3>五感疗愈视域下儿童友好广场设计研究</h3>
          <p>设计基地位于广东省深圳市南山区南油文化广场，旨在打造一座集五感疗愈与儿童友好于一体的广场。通过融合视觉、听觉、嗅觉、味觉和触觉的全方位体验，激发儿童的感官发展，促进身心健康。</p>
          <p>广场划分为亲子互动区、文化体验区、自然种植园、科普知识区和休闲放松区，遵循安全性、参与性、教育性、包容性和可持续性的设计原则。</p>
          <div class="skills-list">
            <span class="skill-tag">儿童友好</span>
            <span class="skill-tag">五感疗愈</span>
            <span class="skill-tag">城市广场</span>
            <span class="skill-tag">景观节点</span>
          </div>
        </div>
        <div class="featured-gallery">
          ${galleryData.slice(0, 3).map((img, index) => `<div class="featured-img ${index === 0 ? 'large' : ''}" data-img="${img}"><img src="${img}" alt="设计项目图${index + 1}" /></div>`).join('')}
        </div>
      </div>
    `
  },
  {
    id: 'works',
    className: 'works-slide',
    content: `
      <div class="slide-content">
        <div class="works-header">
          <span class="tag">精选作品</span>
          <h2>作品集锦</h2>
        </div>
        <div class="works-grid" id="worksGrid"></div>
      </div>
    `
  },
  {
    id: 'composition',
    className: 'composition-slide',
    content: `
      <div class="slide-content">
        <div class="composition-info">
          <span class="tag">设计构成 · 2022</span>
          <h2>公益海报系列</h2>
          <p>四组设计构成课程作业，以环境保护、反战和平、海洋生态为主题，通过图形创意与视觉隐喻传递社会关怀。</p>
          <div class="category-list" style="margin-top: 1.5rem;">
            <div class="category-card"><h3>《科技保护》</h3><p>以回收符号与绿色之手表达科技对环境的守护。</p></div>
            <div class="category-card"><h3>《自燃》</h3><p>以点燃的地球警示全球变暖的危机。</p></div>
            <div class="category-card"><h3>《鲸变》</h3><p>以鲸鱼身体化作垃圾的意象呼吁海洋保护。</p></div>
            <div class="category-card"><h3>《无害化》</h3><p>以胡萝卜与导弹的结合表达反战与和平愿景。</p></div>
          </div>
        </div>
        <div class="composition-grid">
          ${galleryData.map((img, index) => `<div class="composition-item" data-img="${img}"><img src="${img}" alt="构成作品 ${index + 1}" /></div>`).join('')}
        </div>
      </div>
    `
  },
  {
    id: 'interior',
    className: 'interior-slide',
    content: `
      <div class="slide-content">
        <div class="interior-gallery">
          ${galleryData.slice(0, 3).map((img, index) => `<div class="interior-img ${index === 0 ? 'large' : ''}" data-img="${img}"><img src="${img}" alt="室内设计 ${index + 1}" /></div>`).join('')}
        </div>
        <div class="interior-info">
          <span class="tag">室内设计</span>
          <h2>空间表现与<span class="accent-text">方案推敲</span></h2>
          <p>从三维渲染到彩平设计，从现代住宅到中式空间，探索不同风格与功能的空间表达。</p>
          <div class="category-list" style="margin-top: 1.5rem;">
            <div class="category-card"><h3>三维设计艺术</h3><p>3Dmax 室内空间日景渲染与 VR 材质灯光综合设计。</p></div>
            <div class="category-card"><h3>中式客厅空间</h3><p>传统元素与现代材质的融合，注重空间层次与文化氛围。</p></div>
            <div class="category-card"><h3>住宅彩平设计</h3><p>现代简约住宅空间平面布局，注重功能与美学统一。</p></div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'weiyi',
    className: 'weiyi-slide',
    content: `
      <div class="slide-content">
        <div class="works-header">
          <span class="tag">实习经历 · 2024</span>
          <h2>佛山维意定制 · 全屋定制设计</h2>
          <p>负责绘制全屋定制布局、提供效果图与总体布局给客户，通过软装搭配提升空间氛围。</p>
        </div>
        <div class="weiyi-grid">
          ${galleryData.map((img, idx) => `
            <div class="weiyi-card" data-img="${img}">
              <div class="weiyi-card-img"><img src="${img}" alt="维意定制 ${idx + 1}" /></div>
              <div class="weiyi-card-body">
                <h4 class="weiyi-card-title">${['现代客餐厅','中古风格','奶油风格','新中式客厅'][idx % 4]}</h4>
                <p class="weiyi-card-desc">${['简约电视柜与收纳系统','复古色调与经典家具','温馨柔和的用餐空间','传统元素与现代材质'][idx % 4]}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `
  },
  {
    id: 'contact',
    className: 'contact-slide',
    content: `
      <div class="slide-content">
        <span class="tag">联系我</span>
        <h2>期待与您<span class="accent-text">合作</span></h2>
        <p>欢迎交流设计想法、项目合作与就业机会</p>
        <div class="contact-info">
          <div class="contact-item"><div class="contact-icon">✉</div><h4>邮箱</h4><p>1142549133@qq.com</p></div>
          <div class="contact-item"><div class="contact-icon">☎</div><h4>电话</h4><p>13048889898</p></div>
          <div class="contact-item"><div class="contact-icon">◈</div><h4>专业</h4><p>环境设计</p></div>
        </div>
        <a class="resume-btn" href="#">查看简历</a>
      </div>
    `
  }
];

let currentIndex = 0;
let isAnimating = false;

function renderSlides() {
  const world = document.getElementById('prezi-world');
  world.innerHTML = slides.map((slide, index) => `
    <section class="slide ${slide.className} ${index === 0 ? 'active' : ''}" data-index="${index}">
      ${slide.content}
    </section>
  `).join('');

  document.getElementById('navDots').innerHTML = slideTitles.map((title, i) => `
    <div class="nav-dot ${i === 0 ? 'active' : ''}" data-index="${i}" data-label="${title}"></div>
  `).join('');

  document.getElementById('mobileNav').innerHTML = slideTitles.map((title, i) => `
    <div class="mobile-nav-item ${i === 0 ? 'active' : ''}" data-index="${i}">${String(i + 1).padStart(2, '0')} · ${title}</div>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById('timelineItems');
  if (!container) return;
  container.innerHTML = timelineData.map((item) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-title">${item.title}</div>
      <div class="timeline-desc">${item.desc}</div>
    </div>
  `).join('');
}

function renderWorksGrid() {
  const grid = document.getElementById('worksGrid');
  if (!grid) return;
  grid.innerHTML = worksData.map((work) => `
    <div class="work-card" data-img="${work.img}">
      <div class="work-card-img"><img src="${work.img}" alt="${work.title}" /></div>
      <div class="work-card-body">
        <div class="work-card-year">${work.year}</div>
        <h4 class="work-card-title">${work.title}</h4>
        <p class="work-card-category">${work.category}</p>
      </div>
    </div>
  `).join('');
}

function renderWordCloud() {
  const container = document.getElementById('wordCloud');
  if (!container) return;
  container.innerHTML = '';
  const width = container.offsetWidth || 500;
  const height = container.offsetHeight || 400;
  const placed = [];

  keywordsData.forEach((kw, index) => {
    const el = document.createElement('div');
    el.className = 'word-cloud-item';
    el.textContent = kw.text;
    el.style.fontSize = `${kw.size}px`;
    el.style.color = kw.color;
    el.style.opacity = '0';
    container.appendChild(el);

    let x = 50 + Math.random() * 200;
    let y = 50 + Math.random() * 200;
    let attempts = 0;
    while (attempts < 60) {
      x = 20 + Math.random() * (width - 120);
      y = 20 + Math.random() * (height - 80);
      const overlap = placed.some((item) => x < item.x + item.w + 12 && x + el.offsetWidth + 12 > item.x && y < item.y + item.h + 12 && y + el.offsetHeight + 12 > item.y);
      if (!overlap) break;
      attempts++;
    }
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    placed.push({ x, y, w: el.offsetWidth, h: el.offsetHeight });
    setTimeout(() => {
      el.style.opacity = '0.85';
      el.style.transform = `rotate(${Math.random() * 8 - 4}deg)`;
    }, index * 80);
  });
}

function initCategoryChart() {
  const ctx = document.getElementById('categoryChart');
  if (!ctx || typeof Chart === 'undefined') return;
  Chart.register(ChartDataLabels);
  new Chart(ctx.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: categoryData.labels,
      datasets: [{
        data: categoryData.data,
        backgroundColor: categoryData.colors,
        borderColor: '#1e1e2a',
        borderWidth: 3,
        hoverOffset: 12
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '58%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#a0a0b0', padding: 16, font: { family: "'Noto Sans SC', sans-serif", size: 11 } }
        },
        datalabels: {
          color: '#f5f5f7',
          font: { weight: 'bold', size: 13 },
          formatter: (value) => `${value}件`
        },
        tooltip: {
          backgroundColor: 'rgba(18,18,26,0.95)',
          titleColor: '#c8a45c', bodyColor: '#f5f5f7',
          borderColor: 'rgba(200,164,92,0.2)', borderWidth: 1, padding: 10,
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.raw} 件 (${Math.round(ctx.raw / 31 * 100)}%)`
          }
        }
      },
      animation: { animateRotate: true, duration: 1200 }
    }
  });
}

function updateSlide(index) {
  const slidesEls = document.querySelectorAll('.slide');
  if (isAnimating || index === currentIndex || index < 0 || index >= slidesEls.length) return;

  isAnimating = true;
  slidesEls.forEach((slide, i) => {
    slide.classList.remove('active', 'prev', 'next', 'animate-in');
    if (i === index) slide.classList.add('active');
    else if (i < index) slide.classList.add('prev');
    else slide.classList.add('next');
  });

  const world = document.getElementById('prezi-world');
  const transforms = [
    'translate(0,0) scale(1) rotate(0deg)',
    'translate(-2vw,-1vh) scale(0.98) rotate(-1deg)',
    'translate(2vw,-1vh) scale(0.98) rotate(1deg)',
    'translate(-1vw,1vh) scale(0.98) rotate(-0.5deg)',
    'translate(1.5vw,1vh) scale(0.97) rotate(0.8deg)'
  ];
  world.style.transform = transforms[Math.min(index, transforms.length - 1)] || transforms[0];

  currentIndex = index;
  updateNav();
  updateProgress();
  const activeContent = slidesEls[index]?.querySelector('.slide-content');
  if (activeContent) activeContent.scrollTop = 0;
  setTimeout(() => { isAnimating = false; }, 700);
}

function updateNav() {
  document.querySelectorAll('.nav-dot').forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  document.querySelectorAll('.mobile-nav-item').forEach((item, i) => item.classList.toggle('active', i === currentIndex));
  document.getElementById('currentSlide').textContent = String(currentIndex + 1).padStart(2, '0');
  document.getElementById('totalSlides').textContent = String(slides.length).padStart(2, '0');
  document.getElementById('prevBtn').disabled = currentIndex === 0;
  document.getElementById('nextBtn').disabled = currentIndex === slides.length - 1;
}

function updateProgress() {
  const progress = ((currentIndex + 1) / slides.length) * 100;
  document.getElementById('progressBar').style.width = `${progress}%`;
}

function nextSlide() { if (currentIndex < slides.length - 1) updateSlide(currentIndex + 1); }
function prevSlide() { if (currentIndex > 0) updateSlide(currentIndex - 1); }

function bindEvents() {
  document.getElementById('navDots').addEventListener('click', (event) => {
    const dot = event.target.closest('.nav-dot');
    if (dot) updateSlide(Number(dot.dataset.index));
  });

  document.querySelectorAll('.mobile-nav-item').forEach((item) => {
    item.addEventListener('click', () => {
      updateSlide(Number(item.dataset.index));
      closeMobileNav();
    });
  });

  document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileNav);
  document.getElementById('mobileNavOverlay').addEventListener('click', closeMobileNav);
  document.getElementById('nextBtn').addEventListener('click', nextSlide);
  document.getElementById('prevBtn').addEventListener('click', prevSlide);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') {
      event.preventDefault(); nextSlide();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault(); prevSlide();
    } else if (event.key === 'Escape') {
      closeLightbox(); closeMobileNav();
    }
  });

  const canvas = document.getElementById('prezi-canvas');
  let touchStartX = 0;
  let touchStartY = 0;
  canvas.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }, { passive: true });

  canvas.addEventListener('touchend', (event) => {
    const diffX = touchStartX - event.changedTouches[0].clientX;
    const diffY = touchStartY - event.changedTouches[0].clientY;
    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
      diffY > 0 ? nextSlide() : prevSlide();
    } else if (Math.abs(diffX) > 50) {
      diffX > 0 ? nextSlide() : prevSlide();
    }
  }, { passive: true });

  let wheelTimeout;
  canvas.addEventListener('wheel', (event) => {
    const slideContent = event.target.closest('.slide-content');
    if (slideContent && slideContent.scrollHeight > slideContent.clientHeight) {
      const atBottom = slideContent.scrollTop + slideContent.clientHeight >= slideContent.scrollHeight - 2;
      const atTop = slideContent.scrollTop <= 2;
      if ((event.deltaY > 0 && !atBottom) || (event.deltaY < 0 && !atTop)) return;
    }
    event.preventDefault();
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
      event.deltaY > 0 ? nextSlide() : prevSlide();
    }, 40);
  }, { passive: false });

  document.querySelectorAll('[data-img]').forEach((el) => {
    el.addEventListener('click', (event) => {
      event.stopPropagation();
      openLightbox(el.dataset.img);
    });
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', (event) => {
    if (event.target.id === 'lightbox') closeLightbox();
  });
}

function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('active');
  document.getElementById('mobileNavOverlay').classList.toggle('active');
}

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('active');
  document.getElementById('mobileNavOverlay').classList.remove('active');
}

function openLightbox(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

function init() {
  renderSlides();
  renderTimeline();
  renderWorksGrid();
  renderWordCloud();
  initCategoryChart();
  bindEvents();
  updateSlide(0);
}

window.addEventListener('load', init);
window.addEventListener('resize', () => {
  renderWordCloud();
});
