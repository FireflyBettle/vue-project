<template>
    <div>
      <nav-bar :title="title" :path="path"></nav-bar>
      <div class="box">
        <h2>{{content.title}}</h2>
        <p class="time"><span>发表时间:{{content.time | moment('YYYY-MM-DD')}}</span></p>
        <div class="flex">
          <vue-preview :slides="content.src"></vue-preview>
          <!--<img class="img" v-for="item in content.src" :src="item.img" alt="">-->
        </div>
        <p>{{content.content}}</p>
      </div>
      <Comment></Comment>
    </div>
</template>

<script>
  import Comment from '@/components/news/Comment'
  export default {
    name: "NewDetail",
    data(){
      return {
        title:'新闻列表详情',
        path:'/news',
        content:{},
        imgs:[]
      }
    },
    components:{
      Comment
    },
    created(){
      this.axios.get('news/'+this.$route.query.id).then(res=>{
        res.data.src.forEach(value=>{
          value.img=require('../../assets/images/photo/'+value.img);
          value.src=value.img;
          value.msrc=value.img;
          value.w=600;
          value.h=400;
        })
        // console.log(res.data);
        this.content=res.data;
      }).catch(err=>{
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  .box {
    margin-top: 40px;
    overflow: hidden;
  }
  .box h2 {
    text-align: center;
    margin: 10px 0;
  }
  .box .time {
    text-align: right;
    padding-right: 15px;
    color: #ff2121;
  }
  .box p {
    line-height: 2;
    text-align: justify;
    padding:0 15px;
    text-indent: 20px;
    letter-spacing: 1px;
    color: #4a4a4a;
    font-size: 14px;
  }
  .box p:not(.time) {
    margin-bottom: 40px;
  }
  .flex {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
</style>
