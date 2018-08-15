<template>
  <div>
    <nav-bar :title="title" :path="path"></nav-bar>
    <div class="container">
      <ul>
        <li v-for="(list,index) in content" :key="index">
          <router-link :to="{name:'news.detail',query:{id:list.id}}">
            <img src="../../assets/images/list.jpg" alt="">
            <div class="article-right">
              <h3>{{list.title}}</h3>
              <p>{{list.content}}</p>
              <p><span>{{list.time | moment('YYYY-MM-DD')}}</span></p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewList",
    data(){
      return {
        title:"后台管理系统",
        path:'/',
        content:[]
      }
    },
    created(){
      this.axios.get('news').then(res=>{
        this.content=res.data;
      })
    }
  }
</script>

<style scoped>
/*  .title {
    position: fixed;
    top: 0;
    z-index: 5;
    width: 100%;
  }*/
  .container {
    padding: 15px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .container li {
    overflow: hidden;
    margin-bottom: 10px;
    border-bottom: 1px solid #e2e2e2;
    box-sizing: border-box;
  }
  .container img {
    width: 23%;
    float: left;
    border-radius: 2px;
  }
  .container .article-right {
    overflow: hidden;
    padding-left: 5px;
    box-sizing: border-box;
  }
  .container .article-right h3 {
    line-height: 2;
  }
  .container .article-right p {
    line-height: 1.8;
    text-align: justify;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .container .article-right p:last-child {
    text-align: right;
    line-height: 2;
  }
</style>
