<script setup lang="ts">
import { ref } from 'vue'
import Taro, { useLoad, usePullDownRefresh, useShareAppMessage } from '@tarojs/taro'
import Carousel from '@/components/Carousel.vue'

const images = ref([
  {
    // src: 'https://download.jinhui365.cn/group1/M00/06/25/CgABcmYrCyyAGpfYACOwAdvw7-U664.jpg'
    src: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Mobile-CN-v2.png'
  },
  {
    // src: 'https://download.jinhui365.cn/group1/M00/06/25/CgABcmYrC0-AN4AuAEG_1BH2UC4235.jpg'
    src: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Mobile-LHD-v2.jpg'
  },
  {
    // src: 'https://download.jinhui365.cn/group1/M00/06/25/CgABcmYrC1-AI8CkACCfeeBYNiY179.jpg'
    src: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1624,w_750,c_fit,f_auto,q_auto:best/Model-S-homepage-mobile'
  },
  {
    // src: 'https://download.jinhui365.cn/group1/M00/06/25/CgABcmYrC22ARxJGACQ2VDqQ37M810.jpg'
    src: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1700,w_800,c_fit,f_auto,q_auto:best/Homepage-Model-X-Mobile-LHD_001'
  }
  // {
    
  //   src: 'https://download.jinhui365.cn/group1/M00/06/25/CgABcmYrC3mAVJ4NAFSY1hy3v_g975.jpg'
  // }
])
useLoad(() => {
})
usePullDownRefresh(async () => {
  // await getDetail()
  Taro.stopPullDownRefresh()
})
useShareAppMessage((res) => {
  console.log('share', res)
  if (res.from === 'button') {
    // 来自页面内转发按钮
    console.log(res.target)
  }
  return {
    title: '纵横命运之上',
    path: '/page/index/index'
  }
})
</script>
<template>
  <Carousel :images="images" />
</template>
