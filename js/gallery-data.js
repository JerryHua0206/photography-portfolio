/* 摄影作品分类数据 —— 首页模块卡片和 gallery.html 共用。
   之后填真实照片：在对应分类 / 城市的 images 数组里换成你的图片路径即可。
   自然风景、城市风景之后会按「城市」再分子类：给 groups 加 { city: "<城市id>", images: [...] } 即可。 */
window.GALLERY_DATA = [
  { id: "nature", groups: [ { city: null, images: ["assets/photo-01.svg", "assets/photo-02.svg"] } ] },
  { id: "city",   groups: [ { city: null, images: ["assets/photo-03.svg", "assets/photo-04.svg"] } ] },
  { id: "street", groups: [ { city: null, images: ["assets/photo-05.svg", "assets/photo-06.svg"] } ] },
  { id: "dragon", groups: [ { city: null, images: ["assets/photo-01.svg", "assets/photo-02.svg"] } ] },
  { id: "others", groups: [ { city: null, images: ["assets/photo-03.svg"] } ] }
];

/* 分类名称（双语）。城市名称之后由你给清单后补充到 GALLERY_CITY_I18N。 */
window.GALLERY_I18N = {
  zh: { nature: "自然风景", city: "城市风景", street: "街拍人文", dragon: "端午节龙舟", others: "其他" },
  en: { nature: "Nature", city: "Cityscapes", street: "Street & People", dragon: "Dragon Boat Festival", others: "Others" }
};

/* 城市 id → 名称（双语）。city: null 表示暂不分子类。 */
window.GALLERY_CITY_I18N = {
  zh: {},
  en: {}
};
