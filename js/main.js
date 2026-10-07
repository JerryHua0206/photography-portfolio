/* =========================================================
   1) 双语字典：想改文案，只改这里（zh = 中文, en = 英文）
   每个 key 对应 HTML 里 data-i18n="key" 的元素
   ========================================================= */
const i18n = {
  zh: {
    "nav.about": "关于我",
    "nav.journey": "影像之路",
    "nav.photo": "摄影作品",
    "nav.video": "视频作品",
    "nav.contact": "联系我",
    "hero.title": "华嘉言的摄影作品集",
    "hero.subtitle": "影像创造者",
    "hero.scroll": "向下滚动 ↓",
    "about.title": "关于我",
    "about.body1": "我是华嘉言（Jerry）。从 2020 年起我开始自学摄影，用镜头记录身边的人和事，也渐渐爱上了用影像讲故事。课余我很喜欢打篮球，如今也是校队的一员，但镜头始终是我的主语言。",
    "about.body2": "我目前就读于广东碧桂园学校，课余时间几乎都给了拍摄与剪辑。未来专业方向倾向传媒或经济（仍在探索中），但镜头会一直是我看世界的方式。",
    "about.school.label": "学校",
    "about.school.value": "广东碧桂园学校",
    "about.shoot.label": "摄影",
    "about.shoot.value": "自学 · 2020 起",
    "about.major.label": "专业",
    "about.major.value": "传媒 / 经济（待定）",
    "journey.title": "影像之路",
    "journey.intro": "点击下方时间线的节点，看看我每一步是怎么走过来的。",
    "journey.body": "我的影像之路，始于一架相机和天上掠过的飞机——那会儿迷航空，只想把它们拍下来。后来镜头慢慢转向别处：先是城市与自然风景（如今出门旅行仍会随手记录自然，只是拍得少了）；再后来，我开始用视频讲故事。我先是为学校拍摄、剪辑活动记录片，之后在高中『童篮无界』（下乡为小学生义务教篮球）活动中担任摄影与剪辑，完成了每日纪实与两部纪录片。",
    "photo.title": "摄影作品",
    "photo.intro": "镜头是我观察世界的方式。下面是一些我用相机记录的片段。",
    "photo.cat.nature": "自然风景",
    "photo.cat.city": "城市风景",
    "photo.cat.street": "街拍人文",
    "photo.cat.dragon": "端午节龙舟专区",
    "photo.cat.others": "其他",
    "photo.view": "查看作品",
    "photo.back": "返回作品",
    "photo.allPhotos": "以下为该分类的全部照片。",
    "video.title": "视频作品",
    "video.intro": "相比静态照片，我更擅长用动态影像讲故事——学校活动宣传、纪录片，以及从 2022 年起每年一部、记录全年的跨年片。",
    "video.group.promo": "学校活动宣传",
    "video.group.doc": "纪录片",
    "video.group.newyear": "跨年片",
    "video.newyear.note": "从 2022 年起，我每年都会做一部跨年片，总结这一年的影像。",
    "video.featured": "精选 · 学校宣传片",
    "video.v2": "活动纪录片",
    "video.v3": "个人短片",
    "contact.title": "联系我",
    "contact.text": "如果你对我的作品感兴趣，或想分享经验、交流想法，欢迎通过以下方式联系我。",
    "contact.email": "邮箱",
    "footer": "© 2026 华嘉言. 保留所有权利。"
  },
  en: {
    "nav.about": "About",
    "nav.journey": "My Journey",
    "nav.photo": "Photography",
    "nav.video": "Videography",
    "nav.contact": "Contact",
    "hero.title": "Jerry's Photography Portfolio",
    "hero.subtitle": "Visual Creator",
    "hero.scroll": "Scroll down ↓",
    "about.title": "About Me",
    "about.body1": "I'm Jerry. Since 2020 I've been teaching myself photography — framing the people and moments around me, and growing to love telling stories through images. I also love basketball and now play for the school team, but the lens has always been my first language.",
    "about.body2": "I study at Guangdong Country Garden School, and almost all of my free time goes into shooting and editing. My intended major leans toward Media or Economics (still exploring), but the lens will always be how I see the world.",
    "about.school.label": "School",
    "about.school.value": "Guangdong Country Garden School",
    "about.shoot.label": "Photography",
    "about.shoot.value": "Self-taught · since 2020",
    "about.major.label": "Major",
    "about.major.value": "Media / Economics (TBD)",
    "journey.title": "My Journey",
    "journey.intro": "Tap any node on the timeline to see how each step unfolded.",
    "journey.body": "My visual journey began with a camera and the planes overhead — back then I was into aviation and simply wanted to capture them. The lens gradually turned elsewhere: first to cityscapes and nature (I still snap nature on trips, though less often now); later I started telling stories through video. I first shot and edited event recaps for my school, then served as cinematographer and editor for my high school's 'Boundless Hoops' (童篮无界) rural basketball outreach, producing daily logs and two documentaries.",
    "photo.title": "Photography",
    "photo.intro": "The lens is how I observe the world. Here are some of the moments I've captured.",
    "photo.cat.nature": "Nature",
    "photo.cat.city": "Cityscapes",
    "photo.cat.street": "Street & People",
    "photo.cat.dragon": "Dragon Boat Festival",
    "photo.cat.others": "Others",
    "photo.view": "View works",
    "photo.back": "Back to works",
    "photo.allPhotos": "All photos in this category.",
    "video.title": "Videography",
    "video.intro": "More than stills, I tell stories through moving images — school promos, documentaries, and a year-in-review film I've made every year since 2022.",
    "video.group.promo": "School Promos",
    "video.group.doc": "Documentaries",
    "video.group.newyear": "Year-in-Review Films",
    "video.newyear.note": "Since 2022, I've made a year-in-review film each year to sum up that year's footage.",
    "video.featured": "Featured · School Promo",
    "video.v2": "Event Documentary",
    "video.v3": "Personal Short Film",
    "contact.title": "Contact Me",
    "contact.text": "If you're interested in my work, or would like to share experiences and ideas, feel free to reach me through the following.",
    "contact.email": "Email",
    "footer": "© 2026 Jerry. All rights reserved."
  }
};

/* =========================================================
   2) 语言切换逻辑
   ========================================================= */
const langToggle = document.getElementById("langToggle");
const html = document.documentElement;

function applyLang(lang) {
  html.lang = lang;
  // 把每个带 data-i18n 的元素文本换成对应语言
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  // 按钮显示"将要切换到的语言"
  langToggle.textContent = lang === "zh" ? "EN" : "中";
  localStorage.setItem("lang", lang);
}

langToggle.addEventListener("click", () => {
  const next = html.lang === "zh" ? "en" : "zh";
  applyLang(next);            // 立即换好文案
  // 优雅上浮淡入（去模糊），用 WAAPI 同步播放，不整页淡入淡出
  document.querySelectorAll("[data-i18n]:not(.reveal)").forEach((el) => {
    el.animate(
      [
        { opacity: 0, transform: "translateY(12px)", filter: "blur(3px)" },
        { opacity: 1, transform: "translateY(0)", filter: "blur(0)" }
      ],
      { duration: 550, easing: "cubic-bezier(.22,.61,.36,1)" }
    );
  });
});

// 进入页面时读取记忆的语言（默认中文）
applyLang(localStorage.getItem("lang") || "zh");

/* =========================================================
   6) 深色 / 浅色 主题切换
   ========================================================= */
const themeToggle = document.getElementById("themeToggle");
function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "浅色" : "深色";
  localStorage.setItem("theme", theme);
}
themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
});
// 默认浅色，并记忆用户选择
applyTheme(localStorage.getItem("theme") || "light");

/* =========================================================
   3) 导航：滚动变实底 + 移动端汉堡菜单
   ========================================================= */
const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
// 没有 hero 的页面（如 gallery.html）始终保持实底导航，避免白底白字
const hasHero = !!document.querySelector(".hero");

function updateNav() {
  nav.classList.toggle("scrolled", hasHero ? window.scrollY > 60 : true);
}
updateNav();
window.addEventListener("scroll", updateNav);

hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));

// 点击菜单项后自动收起（手机上）
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

/* =========================================================
   4) 滚动渐显动画
   ========================================================= */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* =========================================================
   5) 视频卡片：占位提示
   之后把每个 .video-card 内部替换成真正的播放器：
   - YouTube / Bilibili：用 <iframe src="..."></iframe> 替换整块
   - 本地视频：用 <video src="assets/你的视频.mp4" controls></video>
   ========================================================= */
document.querySelectorAll(".video-card").forEach((card) => {
  card.addEventListener("click", () => {
    alert("这是占位视频。请在 js/main.js 第 5 部分或 index.html 中，把这张封面替换成你的真实视频。");
  });
});

/* =========================================================
   8) 影像之路 · 互动时间线（竖排 / 可点击 / 动态）
   时间线弧线：2020 拍飞机 → 2022 街拍（覆盖 2021–2022）→ 2023 城市风景 → 2024 自然旅游风景。
   每个阶段支持多张图（缩略图可点切换主图）。
   之后你把每个阶段的"拍摄日常"（文字 + 照片）发我，直接替换 journeyPhases 里对应项即可。
   ========================================================= */
const journeyPhases = [
  {
    id: "planes", year: { zh: "2020", en: "2020" },
    images: ["assets/photo-01.svg", "assets/photo-02.svg"],
    zh: { label: "拍飞机", heading: "初遇镜头 · 拍飞机", text: "2020 年，我拿起第一台相机，只是为了把天上掠过的飞机拍清楚。那份对蓝天的执念，成了我和影像的起点。" },
    en: { label: "Planes", heading: "Where it began · Planes", text: "In 2020 I picked up my first camera just to capture the planes crossing the sky. That fascination with the sky became my first step into imaging." }
  },
  {
    id: "street", year: { zh: "2022", en: "2022" },
    images: ["assets/photo-03.svg", "assets/photo-04.svg", "assets/photo-05.svg"],
    zh: { label: "街拍", heading: "走上街头 · 街拍", text: "2021 到 2022，镜头从天空转向人群与街道。这两年里，我开始在城市的角落里记录普通人的瞬间，渐渐学会用画面讲故事，也慢慢找到了自己的视角。" },
    en: { label: "Street", heading: "Onto the streets · Street photography", text: "Across 2021 and 2022, the lens turned from the sky to the streets. Over those two years I documented everyday people and moments in the city's corners, slowly learning to tell stories through a frame and finding my own perspective." }
  },
  {
    id: "city", year: { zh: "2023", en: "2023" },
    images: [
      "assets/photos/journey/city/city-07.jpg",
      "assets/photos/journey/city/city-01.jpg",
      "assets/photos/journey/city/city-02.jpg",
      "assets/photos/journey/city/city-03.jpg",
      "assets/photos/journey/city/city-04.jpg",
      "assets/photos/journey/city/city-05.jpg",
      "assets/photos/journey/city/city-06.jpg",
      "assets/photos/journey/city/city-08.jpg"
    ],
    zh: { label: "城市风景", heading: "城市风景", text: "2023年，我渐渐着迷于城市的光影与结构。我会在傍晚攀上高楼，俯瞰满城灯火顺着街道铺展，霓虹在夜色里晕开温柔的光。也会在这一年的旅途中，把陌生风景都收进镜头，城市的脉搏与旅途的细碎，成了这一年最鲜活的影像注脚。" },
    en: { label: "City", heading: "Cityscapes", text: "In 2023, I grew captivated by the city's play of light, shadow, and structure. At dusk I would climb to the tops of tall buildings and watch the city lights spread out along the streets, neon melting into a gentle glow against the night. And on that year's journeys, I kept framing the unfamiliar — the city's pulse and the small moments of travel became the most vivid footnotes to a year seen through my lens." }
  },
  {
    id: "nature", year: { zh: "2024往后", en: "2024 onward" },
    images: [
      "assets/photos/journey/nature/nature-01.jpg",
      "assets/photos/journey/nature/nature-02.jpg",
      "assets/photos/journey/nature/nature-03.jpg",
      "assets/photos/journey/nature/nature-04.jpg",
      "assets/photos/journey/nature/nature-05.jpg",
      "assets/photos/journey/nature/nature-06.jpg",
      "assets/photos/journey/nature/nature-07.jpg",
      "assets/photos/journey/nature/nature-08.jpg",
      "assets/photos/journey/nature/nature-09.jpg"
    ],
    zh: { label: "自然风景", heading: "自然 · 旅途风景", text: "2024 年，旅行让我把镜头带向远方的自然。如今拍得少了，但每一张旅途风景都更克制、更珍惜。" },
    en: { label: "Nature", heading: "Nature · Travel landscapes", text: "From 2024 on, travel carried my lens toward distant nature. I shoot less now, but every travel landscape feels more restrained and more cherished." }
  }
];

(function () {
  const navEl = document.getElementById("timelineNav");
  const panelEl = document.getElementById("timelinePanel");
  const imgEl = document.getElementById("journeyImg");
  const yearEl = document.getElementById("journeyYear");
  const headEl = document.getElementById("journeyHeading");
  const textEl = document.getElementById("journeyText");
  const thumbsEl = document.getElementById("journeyThumbs");
  const progressEl = document.getElementById("timelineProgress");
  if (!navEl || !panelEl) return;

  let active = 0;

  journeyPhases.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "timeline__node" + (i === 0 ? " is-active" : "");
    btn.setAttribute("aria-label", p.zh.label);
    btn.innerHTML =
      '<span class="timeline__dot"></span>' +
      '<span class="timeline__year">' + p.year[html.lang || "zh"] + '</span>';
    btn.addEventListener("click", () => setJourney(i, true));
    navEl.appendChild(btn);
  });

  function updateProgress(i) {
    if (!progressEl) return;
    const nodes = navEl.querySelectorAll(".timeline__node");
    const node = nodes[i];
    const navRect = navEl.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    const center = (nodeRect.top + nodeRect.height / 2) - navRect.top;
    progressEl.style.height = Math.max(0, center) + "px";
  }

  function playKenBurns() {
    imgEl.style.animation = "none";
    void imgEl.offsetWidth;
    imgEl.style.animation = "kenburns 9s ease-out forwards";
  }

  function setMainImage(src, alt) {
    imgEl.src = src;
    if (alt) imgEl.alt = alt;
    playKenBurns();
  }

  function buildThumbs(images, alt) {
    if (!thumbsEl) return;
    thumbsEl.innerHTML = "";
    images.forEach((src, idx) => {
      const thumbSrc = src.replace(/(\.\w+)$/, "_t$1"); // 缩略图用压缩小图
      const t = document.createElement("button");
      t.type = "button";
      t.className = "timeline__thumb" + (idx === 0 ? " is-active" : "");
      t.setAttribute("aria-label", "查看第 " + (idx + 1) + " 张");
      t.innerHTML = '<img src="' + thumbSrc + '" data-full="' + src + '" alt="" loading="lazy" onerror="this.onerror=null;this.src=this.getAttribute(\'data-full\');" />';
      t.addEventListener("click", () => {
        setMainImage(src, alt);
        thumbsEl.querySelectorAll(".timeline__thumb")
          .forEach((el, j) => el.classList.toggle("is-active", j === idx));
      });
      thumbsEl.appendChild(t);
    });
  }

  function setJourney(i, animate) {
    active = i;
    const p = journeyPhases[i];
    const lang = document.documentElement.lang || "zh";
    const t = p[lang] || p.zh;
    navEl.querySelectorAll(".timeline__node").forEach((n, idx) => {
      n.classList.toggle("is-active", idx === i);
      const y = n.querySelector(".timeline__year");
      if (y) y.textContent = journeyPhases[idx].year[lang];
    });
    yearEl.textContent = p.year[lang];
    headEl.textContent = t.heading;
    textEl.textContent = t.text;
    setMainImage(p.images[0], t.heading);
    buildThumbs(p.images, t.heading);
    updateProgress(i);
    if (animate) {
      panelEl.style.animation = "none";
      void panelEl.offsetWidth; // 重新触发入场动画
      panelEl.style.animation = "fadeUp .55s cubic-bezier(.22,.61,.36,1)";
    }
  }

  setJourney(0, false); // 初始渲染（语言已由 applyLang 设好）

  // 语言切换时同步刷新时间线文案与标签（不重播动画）
  langToggle.addEventListener("click", () => setJourney(active, false));

  // 窗口尺寸变化后重新计算进度条位置
  window.addEventListener("resize", () => updateProgress(active));
})();

/* =========================================================
   9) 摄影作品 · 分类模块（点击跳转到 gallery.html 单独页面）
   五大板块：自然风景 / 城市风景 / 街拍人文 / 端午节龙舟 / 其他。
   点击任意模块 → gallery.html?cat=<id>，只展示该分类照片。
   之后在 js/gallery-data.js 的 GALLERY_DATA 对应分类里填真实照片即可（城市子类用 groups[].city）。
   ========================================================= */
const galleryModulesEl = document.getElementById("galleryModules");
function renderGalleryModules(lang) {
  if (!galleryModulesEl) return;
  const L = lang || document.documentElement.lang || "zh";
  galleryModulesEl.innerHTML = "";
  GALLERY_DATA.forEach((cat) => {
    const title = (GALLERY_I18N[L] && GALLERY_I18N[L][cat.id]) || cat.id;
    const cover = (cat.groups[0] && cat.groups[0].images[0]) || "";
    const view = (i18n[L] && i18n[L]["photo.view"]) || "查看作品";
    const a = document.createElement("a");
    a.className = "gallery-module";
    a.href = "gallery.html?cat=" + encodeURIComponent(cat.id);
    a.innerHTML =
      '<div class="gallery-module__cover"><img src="' + cover + '" alt="' + title + '" loading="lazy" /></div>' +
      '<div class="gallery-module__body">' +
        '<h3 class="gallery-module__title">' + title + '</h3>' +
        '<span class="gallery-module__more">' + view + ' →</span>' +
      '</div>';
    galleryModulesEl.appendChild(a);
  });
}

renderGalleryModules(document.documentElement.lang || "zh");
langToggle.addEventListener("click", () => renderGalleryModules(document.documentElement.lang || "zh"));

/* =========================================================
   7) 封面全屏轮播（方向 C）
   自动每隔 DURATION 切换一张，交叉淡入 + 缓慢推近；
   底部进度条、圆点、计数器同步；点击圆点可跳转；鼠标悬停暂停。
   ========================================================= */
(function () {
  const slides = Array.from(document.querySelectorAll(".hero__slide"));
  const dots = Array.from(document.querySelectorAll(".hero__dot"));
  const bar = document.querySelector(".hero__bar");
  const idxEl = document.getElementById("heroIndex");
  if (!slides.length || !bar) return;

  const DURATION = 5500; // 每张停留毫秒数
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = 0;
  let timer = null;

  function paintBar() {
    if (reduce) { bar.style.transition = "none"; bar.style.width = "100%"; return; }
    bar.style.transition = "none";
    bar.style.width = "0%";
    void bar.offsetWidth; // 强制重排，确保进度条过渡能重新触发
    bar.style.transition = "width " + DURATION + "ms linear";
    bar.style.width = "100%";
  }

  function goTo(i) {
    slides[current].classList.remove("is-active");
    if (dots[current]) dots[current].classList.remove("is-active");
    current = (i + slides.length) % slides.length;
    slides[current].classList.add("is-active");
    if (dots[current]) dots[current].classList.add("is-active");
    if (idxEl) idxEl.textContent = String(current + 1).padStart(2, "0");
    paintBar();
  }

  function start() {
    if (reduce) return; // 尊重"减少动态效果"偏好：不自动轮播
    stop();
    timer = setInterval(() => goTo(current + 1), DURATION);
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  dots.forEach((d, i) => d.addEventListener("click", () => { goTo(i); start(); }));

  const heroEl = document.querySelector(".hero");
  if (heroEl) {
    heroEl.addEventListener("mouseenter", stop);
    heroEl.addEventListener("mouseleave", start);
  }

  goTo(0);
  start();
})();
