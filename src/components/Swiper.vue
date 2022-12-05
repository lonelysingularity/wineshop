<template>
  <div class="container">
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        :loop="true"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <!--tag slides-per-view:每页显示多少张
          tag pagination和scrollbar分别是底部小圆点和滚动条
          tag autoplay可以控制轮播图的自动播放
          tag navigation 是左右箭头
      -->

      <swiper-slide><img src="@static/water.jpg"></swiper-slide>
      <swiper-slide><img src="@static/water_2.jpg"></swiper-slide>
      <swiper-slide><img src="@static/mountain.jpg"></swiper-slide>
      <swiper-slide><img src="@static/mountain_1.jpg"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {EffectCube, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const imgUrl = new URL('@static/water.jpg', import.meta.url).href
    console.log(imgUrl)
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y,EffectCube],
    };
  },
};
</script>

<style lang="less" scoped>
    .container{
      width:1280px;
      height: 500px;
      background-color: #ffffff;
      //display: flex;
      place-items: center;
      .swiper:deep {
        .swiper-slide {
          background-color: #bfc;
          height: 500px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
</style>
