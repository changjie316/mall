<template>
  <div class="control">
    <div class="control-item"  v-for="(title, index) in titles"
         :class="{active:index===currentIndex}"
          @click="titleClick(index)"
    >
      <span >{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      },

    },
    data(){
      return{
        currentIndex:0,
        active:true
      }

    },
    methods:{
      titleClick(index){ this.currentIndex = index;
      }

    }
  }
</script>

<style scoped>
.control{
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
}
  .control-item{
    flex: 1;
  }
.control-item span {
  padding: 5px;
}

.active {

  color: var(--color-high-text);
}
  .active span{
    border-bottom: 2px solid var(--color-tint);
  }
</style>
