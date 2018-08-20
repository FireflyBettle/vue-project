<template>
  <mt-swipe :auto="40000" class="slider">
    <mt-swipe-item v-for="(item,index) in slide" :key="index">
      <img :src="item.src || item.img" alt="">
      <!--<img src="../../assets/images/slide1.jpg" alt="">-->
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  export default {
    name: "Slide",
    data(){
      return{
        slide:[]
      }
    },
    props:['url'],
    created(){
      // this.slide=this.url;
      console.log(this.url);
      this.axios.get(this.url).then(res=>{
        res.data.forEach(value=>{
          value.src=require('../../assets/images/'+value.src)
        })
        this.slide=res.data;
        console.log(res.data);
      })
    }
  }
</script>

<style scoped>
  .mint-swipe {
    height: 200px;
    margin-top: 40px;
  }
  .slider img {
    width: 100%;
    display: block;
  }
</style>
