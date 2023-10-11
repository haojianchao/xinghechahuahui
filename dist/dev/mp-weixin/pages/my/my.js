"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "UserPage",
  data() {
    return {
      loginRes: {},
      useRes: {}
    };
  },
  onLoad() {
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
    },
    handleLoaing() {
      common_vendor.index.showLoading({
        title: "加载中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
      }, 2e3);
    },
    handleConfirm() {
      common_vendor.index.showModal({
        title: "提示",
        content: "确认删除该条信息吗？",
        cancelText: "取消",
        cancelColor: "#000000",
        confirmText: "确定",
        confirmColor: "#3d46f5",
        success: function(res) {
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "确认删除",
              icon: "success",
              duration: 1e3
            });
          } else {
            common_vendor.index.showToast({
              title: "取消删除",
              icon: "error",
              duration: 1e3
            });
          }
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
const _easycom_up_avatar = () => "../../node-modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_up_text = () => "../../node-modules/uview-plus/components/u-text/u-text.js";
const _easycom_u_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_up_avatar + _easycom_up_text + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      src: "/static/img/avator.jpg"
    }),
    b: common_vendor.p({
      text: "星河茶话会",
      margin: "12px"
    }),
    c: common_vendor.p({
      src: $data.useRes.avatarUrl
    }),
    d: common_vendor.p({
      text: $data.useRes.nickName,
      margin: "12px"
    }),
    e: common_vendor.o($options.handleLogin),
    f: common_vendor.p({
      type: "success",
      text: "登录"
    }),
    g: common_vendor.o($options.handleLoaing),
    h: common_vendor.p({
      type: "success",
      text: "加载"
    }),
    i: common_vendor.o($options.handleConfirm),
    j: common_vendor.p({
      type: "success",
      text: "确认"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d3687551"], ["__file", "/Users/haojianchao/Desktop/xinghechahuahui/src/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
