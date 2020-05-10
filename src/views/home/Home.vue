<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <div>

  </div>
</div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomemultiData} from "network/home";

  export default {
    name: "Home",
    components:{
      NavBar
    },
    data(){
      return {
        banner:[],
        dKeyword:[],
        keywords:[],
        recommend:[]
      }
    },
    created() {
      // 获取的后端数据
      getHomemultiData().then(res =>{
        this.banner = res.data.banner.list
        this.dKeyword = res.data.dKeyword.list
        this.keywords = res.data.keywords.list
        this.recommend = res.data.recommend.list


      })

    }
  }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>
