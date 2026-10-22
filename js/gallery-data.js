/* 摄影作品分类数据 —— 由 tools/import_photos.py 从 Photo/ 导入真实照片生成。
   城市风景 / 自然风景 按「城市」分子类：每个 { city: "<城市id>", images: [...] } 即一座城市。
   城市双语名见下方 GALLERY_CITY_I18N。 */
window.GALLERY_DATA = [
  {
    id: "nature",
    groups: [
      { city: "yunnan", images: [
        "assets/photos/gallery/nature/yunnan/img-01.jpg",
        "assets/photos/gallery/nature/yunnan/img-02.jpg",
        "assets/photos/gallery/nature/yunnan/img-03.jpg",
        "assets/photos/gallery/nature/yunnan/img-04.jpg",
        "assets/photos/gallery/nature/yunnan/img-05.jpg",
        "assets/photos/gallery/nature/yunnan/img-06.jpg",
        "assets/photos/gallery/nature/yunnan/img-07.jpg"
      ] },
      { city: "neimenggu", images: [
        "assets/photos/gallery/nature/neimenggu/img-01.jpg",
        "assets/photos/gallery/nature/neimenggu/img-02.jpg",
        "assets/photos/gallery/nature/neimenggu/img-03.jpg",
        "assets/photos/gallery/nature/neimenggu/img-04.jpg",
        "assets/photos/gallery/nature/neimenggu/img-05.jpg",
        "assets/photos/gallery/nature/neimenggu/img-06.jpg",
        "assets/photos/gallery/nature/neimenggu/img-07.jpg",
        "assets/photos/gallery/nature/neimenggu/img-08.jpg",
        "assets/photos/gallery/nature/neimenggu/img-09.jpg",
        "assets/photos/gallery/nature/neimenggu/img-10.jpg",
        "assets/photos/gallery/nature/neimenggu/img-11.jpg",
        "assets/photos/gallery/nature/neimenggu/img-12.jpg",
        "assets/photos/gallery/nature/neimenggu/img-13.jpg",
        "assets/photos/gallery/nature/neimenggu/img-14.jpg",
        "assets/photos/gallery/nature/neimenggu/img-15.jpg",
        "assets/photos/gallery/nature/neimenggu/img-16.jpg",
        "assets/photos/gallery/nature/neimenggu/img-17.jpg",
        "assets/photos/gallery/nature/neimenggu/img-18.jpg",
        "assets/photos/gallery/nature/neimenggu/img-19.jpg"
      ] },
      { city: "ningxia", images: [
        "assets/photos/gallery/nature/ningxia/img-01.jpg",
        "assets/photos/gallery/nature/ningxia/img-02.jpg",
        "assets/photos/gallery/nature/ningxia/img-03.jpg",
        "assets/photos/gallery/nature/ningxia/img-04.jpg",
        "assets/photos/gallery/nature/ningxia/img-05.jpg",
        "assets/photos/gallery/nature/ningxia/img-06.jpg",
        "assets/photos/gallery/nature/ningxia/img-07.jpg",
        "assets/photos/gallery/nature/ningxia/img-08.jpg"
      ] },
      { city: "xinjiang", images: [
        "assets/photos/gallery/nature/xinjiang/img-01.jpg",
        "assets/photos/gallery/nature/xinjiang/img-02.jpg",
        "assets/photos/gallery/nature/xinjiang/img-03.jpg",
        "assets/photos/gallery/nature/xinjiang/img-04.jpg",
        "assets/photos/gallery/nature/xinjiang/img-05.jpg",
        "assets/photos/gallery/nature/xinjiang/img-06.jpg",
        "assets/photos/gallery/nature/xinjiang/img-07.jpg",
        "assets/photos/gallery/nature/xinjiang/img-08.jpg"
      ] },
      { city: "japan", images: [
        "assets/photos/gallery/nature/japan/img-01.jpg",
        "assets/photos/gallery/nature/japan/img-02.jpg"
      ] },
      { city: "zhuhai", images: [
        "assets/photos/gallery/nature/zhuhai/img-01.jpg",
        "assets/photos/gallery/nature/zhuhai/img-02.jpg"
      ] },
      { city: "guizhou", images: [
        "assets/photos/gallery/nature/guizhou/img-01.jpg"
      ] }
    ]
  },
  {
    id: "city",
    groups: [
      { city: "guangzhou", images: [
        "assets/photos/gallery/city/guangzhou/img-01.jpg",
        "assets/photos/gallery/city/guangzhou/img-02.jpg",
        "assets/photos/gallery/city/guangzhou/img-03.jpg",
        "assets/photos/gallery/city/guangzhou/img-04.jpg",
        "assets/photos/gallery/city/guangzhou/img-05.jpg",
        "assets/photos/gallery/city/guangzhou/img-06.jpg",
        "assets/photos/gallery/city/guangzhou/img-07.jpg",
        "assets/photos/gallery/city/guangzhou/img-08.jpg",
        "assets/photos/gallery/city/guangzhou/img-09.jpg",
        "assets/photos/gallery/city/guangzhou/img-10.jpg",
        "assets/photos/gallery/city/guangzhou/img-11.jpg",
        "assets/photos/gallery/city/guangzhou/img-12.jpg",
        "assets/photos/gallery/city/guangzhou/img-13.jpg",
        "assets/photos/gallery/city/guangzhou/img-14.jpg"
      ] },
      { city: "shanghai", images: [
        "assets/photos/gallery/city/shanghai/img-01.jpg",
        "assets/photos/gallery/city/shanghai/img-02.jpg",
        "assets/photos/gallery/city/shanghai/img-03.jpg",
        "assets/photos/gallery/city/shanghai/img-04.jpg",
        "assets/photos/gallery/city/shanghai/img-05.jpg",
        "assets/photos/gallery/city/shanghai/img-06.jpg"
      ] },
      { city: "japan", images: [
        "assets/photos/gallery/city/japan/img-01.jpg",
        "assets/photos/gallery/city/japan/img-02.jpg",
        "assets/photos/gallery/city/japan/img-03.jpg",
        "assets/photos/gallery/city/japan/img-04.jpg",
        "assets/photos/gallery/city/japan/img-05.jpg",
        "assets/photos/gallery/city/japan/img-06.jpg",
        "assets/photos/gallery/city/japan/img-07.jpg",
        "assets/photos/gallery/city/japan/img-08.jpg",
        "assets/photos/gallery/city/japan/img-09.jpg",
        "assets/photos/gallery/city/japan/img-10.jpg",
        "assets/photos/gallery/city/japan/img-11.jpg"
      ] },
      { city: "macau", images: [
        "assets/photos/gallery/city/macau/img-01.jpg",
        "assets/photos/gallery/city/macau/img-02.jpg"
      ] }
    ]
  },
  {
    id: "street",
    groups: [
      { city: null, images: [
        "assets/photos/gallery/street/img-01.jpg",
        "assets/photos/gallery/street/img-02.jpg",
        "assets/photos/gallery/street/img-03.jpg",
        "assets/photos/gallery/street/img-04.jpg",
        "assets/photos/gallery/street/img-05.jpg",
        "assets/photos/gallery/street/img-06.jpg"
      ] }
    ]
  },
  {
    id: "dragon",
    groups: [
      { city: null, images: [
        "assets/photos/gallery/dragon/img-01.jpg",
        "assets/photos/gallery/dragon/img-02.jpg",
        "assets/photos/gallery/dragon/img-03.jpg",
        "assets/photos/gallery/dragon/img-04.jpg",
        "assets/photos/gallery/dragon/img-05.jpg",
        "assets/photos/gallery/dragon/img-06.jpg"
      ] }
    ]
  },
  {
    id: "others",
    groups: [
      { city: null, images: [
        "assets/photos/gallery/others/img-01.jpg"
      ] }
    ]
  }
];

/* 分类名称（双语）。 */
window.GALLERY_I18N = {
  zh: { nature: "自然风景", city: "城市风景", street: "街拍人文", dragon: "端午节龙舟", others: "其他" },
  en: { nature: "Nature", city: "Cityscapes", street: "Street & People", dragon: "Dragon Boat Festival", others: "Others" }
};

/* 城市 id → 名称（双语）。 */
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
