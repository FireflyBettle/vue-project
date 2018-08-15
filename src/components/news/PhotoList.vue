<template>
    <div>
      <nav-bar :title="title" :path="path"></nav-bar>
      <main>
        <article v-for="item in list">
          <h3>{{item.title}}</h3>
          <img v-lazy="item.src" alt="">
          <p>{{item.content}}</p>
        </article>
      </main>
    </div>
</template>

<script>
  export default {
    name: "PhotoList",
    data(){
      return {
        title:'图文分享',
        path:'/',
        list:[],
      }
    },
    created(){
      this.getData(this.$route.params.categoryId);
    },
    methods:{
      getData(id){
        if (id==0) {
          this.axios.get('photo').then(res=>{
            res.data.forEach(value=>{
              value.src=require('../../assets/images/photo/'+value.src)
            })
            this.list=res.data;
          });
        }else {
          this.axios.get('photo',{params:{id:id}}).then(res=>{
            res.data.forEach(value=>{
              value.src=require('../../assets/images/photo/'+value.src)
            })
            this.list=res.data;
          });
        }
      }
    }
  }
</script>

<style scoped>
  main {
    margin-top: 40px;
    padding: 15px;
    margin-bottom: 50px;
  }
  article {
    border: 1px solid #e0e0e0;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  article h3 {
    text-align: center;
    margin: 10px 0;
  }
  article img {
    width: 100%;
    box-shadow: 1px 1px 1px rgb(212, 212, 212);
    box-sizing: border-box;
  }
  article p {
    font-size: 14px;
    line-height: 2;
    margin-top: 10px;
    padding: 0 8px;
  }
</style>
