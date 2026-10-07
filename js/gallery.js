/* =========================================================
   gallery.html 专属逻辑
   读取 URL 的 ?cat=<id>，只渲染该分类的照片；
   支持按城市分子类（groups[].city 不为 null 时显示城市小标题）；
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
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");

  const data = window.GALLERY_DATA || [];
  const cat = data.find((c) => c.id === catId);

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

  function render() {
    const L = lang();
    if (!cat) {
      if (titleEl) titleEl.textContent = t("photo.title", "Gallery");
      if (introEl) introEl.textContent = "";
      if (gridEl) gridEl.innerHTML = "";
      if (notFoundEl) notFoundEl.style.display = "block";
      document.title = (t("photo.title", "Gallery")) + " · Jerry";
      return;
    }

    document.title = catName(cat.id) + " · " + t("photo.title", "Gallery");
    if (titleEl) titleEl.textContent = catName(cat.id);
    if (introEl) introEl.textContent = t("photo.allPhotos", "");
    if (notFoundEl) notFoundEl.style.display = "none";

    let html = "";
    cat.groups.forEach((g) => {
      if (g.city) {
        html += '<h3 class="gallery__group">' + cityName(g.city) + '</h3>';
      }
      g.images.forEach((src) => {
        html +=
          '<a class="gallery__item" href="' + src + '" data-full="' + src + '" ' +
          'aria-label="' + catName(cat.id) + '">' +
            '<img src="' + src + '" alt="' + catName(cat.id) + '" loading="lazy" />' +
          '</a>';
      });
    });
    if (gridEl) gridEl.innerHTML = html;

    bindLightbox();
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

  // 语言切换时重新渲染分类名称 / 城市小标题 / 提示文案
  const langToggle = document.getElementById("langToggle");
  if (langToggle) langToggle.addEventListener("click", () => render());

  render();
})();
