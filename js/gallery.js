/* =========================================================
   gallery.html 专属逻辑
   读取 URL 的 ?cat=<id>，只渲染该分类的照片；
   若该分类含多座城市，顶部生成「城市索引条」——
   点击城市名即可筛选该城照片，网格淡出/淡入切换；"全部"显示所有城市。
   点击照片弹出灯箱查看大图。
   共享的 i18n / 主题 / 语言 / 导航已由 main.js 提供。
   ========================================================= */
(function () {
  const params = new URLSearchParams(window.location.search);
  const catId = params.get("cat");
  const lang = () => document.documentElement.lang || "zh";

  const titleEl = document.getElementById("galleryTitle");
  const introEl = document.getElementById("galleryIntro");
  const gridEl = document.getElementById("galleryGrid");
  const notFoundEl = document.getElementById("galleryNotFound");
  const indexEl = document.getElementById("cityIndex");
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");

  const data = window.GALLERY_DATA || [];
  const cat = data.find((c) => c.id === catId);
  let activeCity = "all";

  function t(key, fallback) {
    const L = lang();
    return (window.i18n && window.i18n[L] && window.i18n[L][key]) || fallback;
  }
  function catName(id) {
    const L = lang();
    const m = (window.GALLERY_I18N && window.GALLERY_I18N[L]) || {};
    return m[id] || id;
  }
  function cityName(cityId) {
    const L = lang();
    const m = (window.GALLERY_CITY_I18N && window.GALLERY_CITY_I18N[L]) || {};
    return m[cityId] || cityId;
  }
  // 该分类下出现过的城市（去重，保持顺序）
  function citiesInCat() {
    if (!cat) return [];
    const seen = [];
    cat.groups.forEach((g) => { if (g.city && !seen.includes(g.city)) seen.push(g.city); });
    return seen;
  }
  // 某城市的封面图（取该城市第一张照片）
  function coverFor(cityId) {
    if (!cat) return null;
    const g = cat.groups.find((x) => x.city === cityId);
    return g && g.images && g.images.length ? g.images[0] : null;
  }

  function renderGrid() {
    if (!cat || !gridEl) { if (gridEl) gridEl.innerHTML = ""; return; }
    const groups = activeCity === "all"
      ? cat.groups
      : cat.groups.filter((g) => g.city === activeCity);

    let html = "";
    groups.forEach((g) => {
      // 仅在「全部」视图下显示城市小标题；单选某城时不重复
      if (activeCity === "all" && g.city) {
        html += '<h3 class="gallery__group">' + cityName(g.city) + "</h3>";
      }
      g.images.forEach((src) => {
        html +=
          '<a class="gallery__item" href="' + src + '" data-full="' + src + '" ' +
          'aria-label="' + catName(cat.id) + '">' +
            '<img src="' + src + '" alt="' + catName(cat.id) + '" loading="lazy" />' +
          "</a>";
      });
    });
    gridEl.innerHTML = html;
    bindLightbox();
  }

  function render() {
    const L = lang();
    if (!cat) {
      if (titleEl) titleEl.textContent = t("photo.title", "Gallery");
      if (introEl) introEl.textContent = "";
      if (gridEl) gridEl.innerHTML = "";
      if (indexEl) { indexEl.innerHTML = ""; indexEl.style.display = "none"; }
      if (notFoundEl) notFoundEl.style.display = "block";
      document.title = t("photo.title", "Gallery") + " · Jerry";
      return;
    }

    document.title = catName(cat.id) + " · " + t("photo.title", "Gallery");
    if (titleEl) titleEl.textContent = catName(cat.id);
    if (introEl) introEl.textContent = t("photo.allPhotos", "");
    if (notFoundEl) notFoundEl.style.display = "none";

    // 城市大图索引：仅当该分类含多座城市时出现
    const cities = citiesInCat();
    if (indexEl) {
      if (cities.length > 1) {
        let cards = '<button class="city-card city-card--all' + (activeCity === "all" ? " is-active" : "") +
          '" data-city="all"><span class="city-card__label">' + t("photo.all", "All") + "</span></button>";
        cities.forEach((c) => {
          const cover = coverFor(c);
          cards += '<button class="city-card' + (c === activeCity ? " is-active" : "") +
            '" data-city="' + c + '">' +
            (cover ? '<img class="city-card__img" src="' + cover + '" alt="' + cityName(c) + '" loading="lazy">' : "") +
            '<span class="city-card__overlay"></span>' +
            '<span class="city-card__label">' + cityName(c) + "</span>" +
            "</button>";
        });
        indexEl.innerHTML = cards;
        indexEl.style.display = "grid";
        indexEl.querySelectorAll(".city-card").forEach((btn) => {
          btn.addEventListener("click", () => switchCity(btn.getAttribute("data-city")));
        });
      } else {
        indexEl.innerHTML = "";
        indexEl.style.display = "none";
      }
    }

    renderGrid();
  }

  function switchCity(city) {
    if (!city || city === activeCity) return;
    activeCity = city;
    if (indexEl) {
      indexEl.querySelectorAll(".city-chip").forEach((b) => {
        b.classList.toggle("is-active", b.getAttribute("data-city") === city);
      });
    }
    // 网格淡出 → 重渲染 → 淡入
    if (gridEl) {
      gridEl.classList.add("is-switching");
      window.setTimeout(() => {
        renderGrid();
        gridEl.classList.remove("is-switching");
      }, 200);
    } else {
      renderGrid();
    }
  }

  function bindLightbox() {
    if (!gridEl) return;
    gridEl.querySelectorAll(".gallery__item").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const full = a.getAttribute("data-full");
        if (lbImg) lbImg.src = full;
        if (lb) { lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); }
      });
    });
  }

  function closeLightbox() {
    if (lb) { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); }
    if (lbImg) lbImg.src = "";
  }

  if (lb) {
    lb.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  // 语言切换时重新渲染（城市名 / 分类名 / 文案）
  const langToggle = document.getElementById("langToggle");
  if (langToggle) langToggle.addEventListener("click", () => render());

  render();
})();
