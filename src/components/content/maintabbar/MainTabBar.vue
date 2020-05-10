<template>
  <tab-bar>
    <!--active-color 定制字体的颜色-->
    <tabbar-item path="/home" active-color="red">

      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.png" alt="">
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.png" alt="">
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/Tabbar"; // 别名
  import TabbarItem from "components/common/tabbar/TabbarItem";// 别名
  export default {
    name: "MianTabBar",
    components:{
      TabbarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>
