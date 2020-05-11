<template>
 <div class="recommend">
   <div v-for="item in crecommends" class="recommend-item">
     <a :href="item.link">
       <img :src="item.image" alt="">
     </a>
     <div class="item">{{item.title}}</div>
   </div>
 </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      crecommends:{
        type:Array,
        default() {
          return []
        }
      }
    }
  }

</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 20px 0 25px;

  border-bottom:  8px solid #eee;


}
.recommend-item{
  flex: 1;
  margin-top: 10px;
}
  .recommend img {
    width: 70px;
    height: 70px;


  }
  .item{
    padding-top: 10px;
  }

</style>
