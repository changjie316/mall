<template>
  <div class="tab-bar-item" @click="tabbarClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle" ><slot name="item-text"></slot></div>
  </div>
</template>
<script>
  export default {
    name: "TabbarItem",
    data(){
      return {

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !==-1// 判断活跃的路径是的和我们点击的路径
      },
      activeStyle(){
        return this.isActive? {color:this.activeColor} :{}
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:"blue",
      }
    },
    methods:{
      tabbarClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    /*均等平分 eg:1111 => 1 1 1 1 */
    flex: 1;
    /*居中*/
    text-align: center;
    /*高度*/
    height: 49px;
    /*垂直居中*/
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 3px;

  }
</style>
