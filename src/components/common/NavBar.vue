<template>
  <mt-header class="title" :title="title">
    <router-link :to="path" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
</template>

<script>
  export default {
    name: "NavBar",
    data(){
      return {

      }
    },
    props:["title","path"]
  }
</script>

<style scoped>
  .title {
    position: fixed;
    top: 0;
    z-index: 5;
    width: 100%;
  }
</style>
