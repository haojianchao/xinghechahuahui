"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "UserPage",
  data() {
    return {
      loginRes: {},
      useRes: {}
    };
  },
  onLoad(options) {
    console.log("详情页参数", options);
  },
  methods: {
    handleLogin() {
      common_vendor.index.login({
        provider: "weixin",
        success: (loginRes) => {
          console.log(loginRes);
          this.loginRes = loginRes;
          common_vendor.index.getUserInfo({
            provider: "weixin",
            success: (infoRes) => {
              this.useRes = infoRes.userInfo;
              console.log("用户：", infoRes);
              common_vendor.index.showToast({
                title: "成功提示",
                icon: "success",
                duration: 1e3
              });
            }
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_up_avatar2 = common_vendor.resolveComponent("up-avatar");
  const _easycom_up_text2 = common_vendor.resolveComponent("up-text");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_up_avatar2 + _easycom_up_text2 + _easycom_u_button2)();
}
const _easycom_up_avatar = () => "../node-modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_up_text = () => "../node-modules/uview-plus/components/u-text/u-text.js";
const _easycom_u_button = () => "../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_up_avatar + _easycom_up_text + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      src: $data.useRes.avatarUrl
    }),
    b: common_vendor.p({
      text: $data.useRes.nickName,
      margin: "12px"
    }),
    c: common_vendor.o($options.handleLogin),
    d: common_vendor.p({
      type: "success",
      text: "登录"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ed4eecdf"], ["__file", "/Users/haojianchao/Desktop/xinghechahuahui/src/pages-sub/detail.vue"]]);
wx.createPage(MiniProgramPage);
