<template>
    <div>
      {{ $route.params.id }}
      <nav-bar :title="title" :path="path"></nav-bar>
      <Comment></Comment>
    </div>
</template>

<script>
  import Comment from '@/components/news/Comment'
  export default {
    name: "photoComment",
    data(){
      return {
        title:'商品评论',
        path:'/photo/list/0/3'
      }
    },
    components:{
      Comment
    },
    beforeRouteEnter(to,from,next){
      next(vm=>{
        vm.path=from.path;
      })
    }
  }
</script>

<style scoped>

</style>
