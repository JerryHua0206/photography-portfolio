/* 摄影作品分类数据 —— 首页模块卡片和 gallery.html 共用。
   填真实照片：把对应城市 groups[].images 里的占位 svg 换成你的图片路径即可。
   城市风景 / 自然风景 已按「城市」分子类：每个 { city: "<城市id>", images: [...] } 即一座城市。
   城市双语名见下方 GALLERY_CITY_I18N。 */
window.GALLERY_DATA = [
  {
    id: "nature",
    groups: [
      { city: "yunnan",    images: ["assets/photo-01.svg", "assets/photo-02.svg", "assets/photo-03.svg"] },
      { city: "neimenggu", images: ["assets/photo-04.svg", "assets/photo-05.svg", "assets/photo-06.svg"] },
      { city: "ningxia",   images: ["assets/photo-01.svg", "assets/photo-02.svg"] },
      { city: "xinjiang",  images: ["assets/photo-03.svg", "assets/photo-04.svg", "assets/photo-05.svg"] },
      { city: "japan",     images: ["assets/photo-06.svg", "assets/photo-01.svg", "assets/photo-02.svg"] },
      { city: "zhuhai",    images: ["assets/photo-03.svg", "assets/photo-04.svg"] },
      { city: "guizhou",   images: ["assets/photo-05.svg", "assets/photo-06.svg", "assets/photo-01.svg"] }
    ]
  },
  {
    id: "city",
    groups: [
      { city: "guangzhou", images: ["assets/photo-02.svg", "assets/photo-03.svg", "assets/photo-04.svg"] },
      { city: "shanghai",  images: ["assets/photo-05.svg", "assets/photo-06.svg", "assets/photo-01.svg"] },
      { city: "japan",     images: ["assets/photo-02.svg", "assets/photo-03.svg"] },
      { city: "macau",     images: ["assets/photo-04.svg", "assets/photo-05.svg", "assets/photo-06.svg"] }
    ]
  },
  { id: "street", groups: [ { city: null, images: ["assets/photo-01.svg", "assets/photo-02.svg"] } ] },
  { id: "dragon", groups: [ { city: null, images: ["assets/photo-03.svg", "assets/photo-04.svg"] } ] },
  { id: "others", groups: [ { city: null, images: ["assets/photo-05.svg"] } ] }
];

/* 分类名称（双语）。 */
window.GALLERY_I18N = {
  zh: { nature: "自然风景", city: "城市风景", street: "街拍人文", dragon: "端午节龙舟", others: "其他" },
  en: { nature: "Nature", city: "Cityscapes", street: "Street & People", dragon: "Dragon Boat Festival", others: "Others" }
};

/* 城市 id → 名称（双语）。新增/改名城市在这里加即可。 */
window.GALLERY_CITY_I18N = {
  zh: {
    guangzhou: "广州", shanghai: "上海", japan: "日本", macau: "澳门",
    yunnan: "云南", neimenggu: "内蒙古", ningxia: "宁夏", xinjiang: "新疆", zhuhai: "珠海", guizhou: "贵州"
  },
  en: {
    guangzhou: "Guangzhou", shanghai: "Shanghai", japan: "Japan", macau: "Macau",
    yunnan: "Yunnan", neimenggu: "Inner Mongolia", ningxia: "Ningxia", xinjiang: "Xinjiang", zhuhai: "Zhuhai", guizhou: "Guizhou"
  }
};
