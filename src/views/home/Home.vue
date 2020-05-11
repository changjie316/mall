<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <child-home-swiper :cbanner="banner"/>
  <recommend-view :crecommends="recommend"/>
  <feature-view/>
  <tab-control class="control-nav" :titles="['流行','新款','精选']"/>
  <good-list :goods="goods"/>
  <ul>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
    <li>xxx</li>
  </ul>
</div>
</template>
<script>

  import ChildHomeSwiper from "./ChildCompone/ChildHomeSwiper";
  import RecommendView from "./ChildCompone/RecommendView";
  import FeatureView from "./ChildCompone/FeatureView";


  import NavBar from "components/common/navbar/NavBar";
  import tabControl from "components/content/tabControl/tabControl";
  import GoodList from "components/content/goods/GoodList";



  import {getHomemultiData,getHomeGoods} from "network/home";

  export default {
    name: "Home",
    components:{
      NavBar,
      ChildHomeSwiper,
      RecommendView,
      FeatureView,
      tabControl,
      GoodList
    },
    data(){
      return {
        banner:[],
        dKeyword:[],
        keywords:[],
        recommend:[],
        goods:{
          "pop":{page:0,list:[]},
          "news":{page:0,list:[]},
          "sell":{page:0,list:[]}
        }
      }
    },
    created() {
      // 获取的后端数据
      this.getHomemultiData()
      this.getHomeGoods('pop')
      this.getHomeGoods('news')
      this.getHomeGoods('sell')


    },
    methods:{
      getHomemultiData(){
        getHomemultiData().then(res =>{
          this.banner = res.data.banner.list
          this.dKeyword = res.data.dKeyword.list
          this.keywords = res.data.keywords.list
          this.recommend = res.data.recommend.list


        })
      },
      getHomeGoods(type){
        const page = this.goods["type"].page + 1
        getHomeGoods(type,page).then(res=>{
          this.goods.pop.list.push(...res.data.list)
          this.goods["type"].page += 1
        })
      }
    }


  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
.home-nav{
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index:8
}
  .control-nav{
    /*当导航滑到44px的时候 就停止滑动 内容还是可以滑动*/
    position: sticky;
    top: 44px;
  }
</style>
