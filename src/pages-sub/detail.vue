<template>
  <view class="my_page">
    <view class="my_avatar">
      <up-avatar :src="useRes.avatarUrl"></up-avatar>
      <up-text :text="useRes.nickName" margin="12px"></up-text>
    </view>
    <u-button type="success" text="登录" @click="handleLogin"></u-button>
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
  onLoad(options) {
    console.log('详情页参数', options)
  },
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
