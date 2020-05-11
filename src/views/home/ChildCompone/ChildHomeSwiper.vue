<template>
  <swiper>
    <swiper-item v-for="item in cbanner">
      <a :href="item.link"><img :src="item.image" alt=""></a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem } from "components/common/swiper/index";
  export default {
    name: "ChildHome",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      cbanner:{
        type:Array,
        default() {
          return []
        }
      }
    }
  }
</script>
<style scoped>

</style>
