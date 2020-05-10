<template>
  <div>
    <div id="tab-bar">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>

  #tab-bar{
    /*水平排布*/
    display: flex;
    /*背景颜色*/
    background-color: #f6f6f6;
    /*跑到底部*/
    position: fixed;
    left:0;
    right: 0;
    bottom: 0;
    /*小阴影*/
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
    font-size: 14px;
  }
</style>
