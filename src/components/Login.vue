<script setup lang="ts">
import Taro, { useLoad } from '@tarojs/taro'
import { ref } from 'vue'
import { useSelectedStore } from '@/stores/selected'

interface Props {
  loginBtnTxt?: string 
}
withDefaults(defineProps<Props>(), {
  loginBtnTxt: '手机号快捷登录'
})
const store = useSelectedStore()
const redirect = ref('')
const index = ref()
useLoad((options) => {
  console.log('load', options)
  redirect.value = decodeURIComponent(options.redirect)
  index.value = Number(options.index)
})
function getPhoneNumber (e) {
  console.log('e', e)
  console.log('detail', e.detail)
  console.log('code', e.detail.code)
  const code = e.detail.code
  Taro.setStorageSync('isAuthorized', true)
  Taro.showToast({
    title: '授权成功',
    icon: 'success',
    mask: true,
    success: () => {
      store.setSelected(index.value)
      Taro.switchTab({
        url: redirect.value
      })
    }
  })
  // if (code) { // 授权成功
  //   Taro.setStorageSync('code', code)
  //   Taro.showToast({
  //     title: '授权成功',
  //     icon: 'success',
  //     mask: true
  //   })
  //   store.setSelected(index.value)
  //   Taro.switchTab({
  //     url: redirect.value
  //   })
  // } else { // 授权失败
  //   Taro.showToast({
  //     title: '授权失败',
  //     icon: 'error',
  //     mask: true
  //   })
  // }
}
</script>
<template>
  <view class="m-view">
    <image class="u-logo" src="https://download.jinhui365.cn/group1/M00/06/26/CgABcmYtq2mAM2EZABFFsMVmqMk104.jpg" />
    <button class="u-btn" open-type="getPhoneNumber" @getPhoneNumber="getPhoneNumber">
      <slot>{{ loginBtnTxt }}</slot>
    </button>
  </view>
</template>
<style lang="less">
.m-view {
  padding: 0 30px calc(30px + env(safe-area-inset-bottom));
  text-align: center;
  .u-logo {
    margin: 240px auto 200px;
    width: 640px;
    height: 512px;
    border-radius: 48px;
  }
  .u-btn {
    width: 600px;
    height: 88px;
    line-height: 88px;
    border-radius: 44px;
    background: @themeColor;
    font-weight: 400;
    font-size: 36px;
    color: #FFFFFF;
    text-align: center;
  }
}
</style>

