"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "HomePage",
  data() {
    return {
      swiperList: [
        {
          title: "身无彩凤双飞翼，心有灵犀一点通",
          image: "https://t7.baidu.com/it/u=1126218742,3382842115&fm=193&f=GIF"
        },
        {
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
          image: "https://t7.baidu.com/it/u=260205896,218106217&fm=193&f=GIF"
        },
        {
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
          image: "https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF"
        }
      ],
      tabList: [
        {
          name: "情感",
          key: 1
        },
        {
          name: "旅游",
          key: 2
        },
        {
          name: "健身",
          key: 3
        },
        {
          name: "科技",
          key: 4
        },
        {
          name: "水果",
          key: 5
        }
      ],
      listData: []
    };
  },
  onLoad() {
    this.scrolltolower();
  },
  methods: {
    handleTab(val) {
      console.log("切换tab", val);
    },
    handleDetail() {
      common_vendor.index.navigateTo({
        url: "/pages-sub/detail?id=1&name=uniapp"
      });
    },
    scrolltolower() {
      for (let i = 0; i < 30; i++) {
        this.listData.push({
          text: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
          imgs: [
            "https://t7.baidu.com/it/u=1126218742,3382842115&fm=193&f=GIF",
            "https://t7.baidu.com/it/u=260205896,218106217&fm=193&f=GIF",
            "https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF"
          ]
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  const _easycom_up_image2 = common_vendor.resolveComponent("up-image");
  const _easycom_up_text2 = common_vendor.resolveComponent("up-text");
  const _easycom_up_album2 = common_vendor.resolveComponent("up-album");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_list_item2 = common_vendor.resolveComponent("u-list-item");
  const _easycom_u_list2 = common_vendor.resolveComponent("u-list");
  (_easycom_u_swiper2 + _easycom_u_tabs2 + _easycom_up_image2 + _easycom_up_text2 + _easycom_up_album2 + _easycom_u_button2 + _easycom_u_list_item2 + _easycom_u_list2)();
}
const _easycom_u_swiper = () => "../../node-modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_u_tabs = () => "../../node-modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_up_image = () => "../../node-modules/uview-plus/components/u-image/u-image.js";
const _easycom_up_text = () => "../../node-modules/uview-plus/components/u-text/u-text.js";
const _easycom_up_album = () => "../../node-modules/uview-plus/components/u-album/u-album.js";
const _easycom_u_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_list_item = () => "../../node-modules/uview-plus/components/u-list-item/u-list-item.js";
const _easycom_u_list = () => "../../node-modules/uview-plus/components/u-list/u-list.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u_tabs + _easycom_up_image + _easycom_up_text + _easycom_up_album + _easycom_u_button + _easycom_u_list_item + _easycom_u_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      list: $data.swiperList,
      showTitle: true,
      circular: true,
      keyName: "image",
      height: "200",
      radius: "0"
    }),
    b: common_vendor.o($options.handleTab),
    c: common_vendor.p({
      list: $data.tabList,
      lineColor: "#3d46f5"
    }),
    d: common_vendor.f($data.listData, (item, index, i0) => {
      return {
        a: "0cd09a48-4-" + i0 + "," + ("0cd09a48-3-" + i0),
        b: "0cd09a48-5-" + i0 + "," + ("0cd09a48-3-" + i0),
        c: common_vendor.p({
          text: item.text,
          margin: "0 0 10px 0"
        }),
        d: "0cd09a48-6-" + i0 + "," + ("0cd09a48-3-" + i0),
        e: common_vendor.p({
          urls: item.imgs
        }),
        f: "0cd09a48-7-" + i0 + "," + ("0cd09a48-3-" + i0),
        g: common_vendor.o($options.handleDetail, index),
        h: "0cd09a48-8-" + i0 + "," + ("0cd09a48-3-" + i0),
        i: index,
        j: "0cd09a48-3-" + i0 + ",0cd09a48-2"
      };
    }),
    e: common_vendor.p({
      src: "/static/img/avator.jpg",
      shape: "square",
      radius: "4px",
      width: "36px",
      height: "36px"
    }),
    f: common_vendor.p({
      type: "primary",
      text: "复制文案",
      plain: true,
      hairline: true
    }),
    g: common_vendor.p({
      type: "success",
      text: "复制图片",
      plain: true,
      hairline: true
    }),
    h: common_vendor.o($options.scrolltolower)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0cd09a48"], ["__file", "/Users/haojianchao/Desktop/xinghechahuahui/src/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
