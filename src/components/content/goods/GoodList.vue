<template>
  <div class="goods">
    {{goo}}
  </div>
</template>

<script>
  export default {
    name: "GoodList",
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
