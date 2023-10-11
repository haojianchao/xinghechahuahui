<template>
  <view class="my_page">
    <view class="my_avatar">
      <up-avatar src="/static/img/avator.jpg"></up-avatar>
      <up-text text="星河茶话会" margin="12px"></up-text>
    </view>
    <view class="my_avatar">
      <up-avatar :src="useRes.avatarUrl"></up-avatar>
      <up-text :text="useRes.nickName" margin="12px"></up-text>
    </view>
    <u-button type="success" text="登录" @click="handleLogin"></u-button>
    <u-button type="success" text="加载" @click="handleLoaing"></u-button>
    <u-button type="success" text="确认" @click="handleConfirm"></u-button>
  </view>
</template>

<script>
export default {
  name: 'UserPage',
  data() {
    return {
      loginRes: {},
      useRes: {},
    }
  },
  onLoad() {},
  methods: {
    handleLogin() {
      uni.login({
        provider: 'weixin',
        success: (loginRes) => {
          console.log(loginRes)
          this.loginRes = loginRes
          // 获取用户信息
          uni.getUserInfo({
            provider: 'weixin',
            success: (infoRes) => {
              this.useRes = infoRes.userInfo
              console.log('用户：', infoRes)
              uni.showToast({
                title: '成功提示',
                icon: 'success',
                duration: 1000,
              })
            },
          })
        },
      })
    },
    handleLoaing() {
      uni.showLoading({
        title: '加载中...',
      })
      setTimeout(() => {
        uni.hideLoading()
      }, 2000)
    },
    handleConfirm() {
      uni.showModal({
        title: '提示',
        content: '确认删除该条信息吗？',
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3d46f5',
        success: function (res) {
          if (res.confirm) {
            // 执行确认后的操作
            uni.showToast({
              title: '确认删除',
              icon: 'success',
              duration: 1000,
            })
          } else {
            // 执行取消后的操作
            uni.showToast({
              title: '取消删除',
              icon: 'error',
              duration: 1000,
            })
          }
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.my_page {
  padding: 20px 50px;
}

.my_avatar {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
</style>
