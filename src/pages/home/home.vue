<template>
  <view>
    <view>
      <u-swiper
        :list="swiperList"
        :showTitle="true"
        :circular="true"
        keyName="image"
        height="200"
        radius="0"
      ></u-swiper>
    </view>
    <view>
      <u-tabs :list="tabList" lineColor="#3d46f5" @click="handleTab"></u-tabs>
    </view>
    <u-list @scrolltolower="scrolltolower">
      <u-list-item v-for="(item, index) in listData" :key="index">
        <view class="list_item">
          <up-image
            src="/static/img/avator.jpg"
            shape="square"
            radius="4px"
            width="36px"
            height="36px"
            class="list_item_avatar"
          ></up-image>
          <view class="list_item_cont">
            <up-text :text="item.text" margin="0 0 10px 0"></up-text>
            <up-album :urls="item.imgs"></up-album>
            <view class="list_item_btn">
              <view class="_btn">
                <u-button
                  type="primary"
                  text="复制文案"
                  :plain="true"
                  :hairline="true"
                ></u-button>
              </view>
              <view class="_btn">
                <u-button
                  type="success"
                  text="复制图片"
                  :plain="true"
                  :hairline="true"
                  @click="handleDetail"
                ></u-button
              ></view>
            </view>
          </view>
        </view>
      </u-list-item>
    </u-list>
  </view>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      swiperList: [
        {
          title: '身无彩凤双飞翼，心有灵犀一点通',
          image: 'https://t7.baidu.com/it/u=1126218742,3382842115&fm=193&f=GIF',
        },
        {
          title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
          image: 'https://t7.baidu.com/it/u=260205896,218106217&fm=193&f=GIF',
        },
        {
          title: '昨夜星辰昨夜风，画楼西畔桂堂东',
          image: 'https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF',
        },
      ],
      tabList: [
        {
          name: '情感',
          key: 1,
        },
        {
          name: '旅游',
          key: 2,
        },
        {
          name: '健身',
          key: 3,
        },
        {
          name: '科技',
          key: 4,
        },
        {
          name: '水果',
          key: 5,
        },
      ],
      listData: [],
    }
  },
  onLoad() {
    this.scrolltolower()
  },
  methods: {
    handleTab(val) {
      console.log('切换tab', val)
    },
    handleDetail() {
      //在起始页面跳转到test.vue页面并传递参数
      uni.navigateTo({
        url: '/pages-sub/detail?id=1&name=uniapp',
      })
    },
    scrolltolower() {
      for (let i = 0; i < 30; i++) {
        this.listData.push({
          text: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
          imgs: [
            'https://t7.baidu.com/it/u=1126218742,3382842115&fm=193&f=GIF',
            'https://t7.baidu.com/it/u=260205896,218106217&fm=193&f=GIF',
            'https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF',
          ],
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.list_item {
  padding: 10px 12px;
  display: flex;

  .list_item_avatar {
    margin-top: 6px;
  }

  .list_item_cont {
    margin-left: 12px;
  }

  .list_item_btn {
    display: flex;
    margin-top: 12px;

    ._btn {
      width: 35%;

      &:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>
