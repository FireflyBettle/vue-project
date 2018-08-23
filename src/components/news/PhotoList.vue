<template>
    <div :style="{ height }" >
      <nav-bar :title="title" :path="path"></nav-bar>
      <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" :bottom-method="loadBottom" @top-status-change="handleTopChange" ref="loadmore" :autoFill="false">
        <ul>
          <li v-for="item in list" :key="item.id">
            <router-link :to="{name:'photo.detail',params:{id:item.id}}">
              <h3>{{item.title}}</h3>
              <img v-lazy="item.src" alt="">
              <p>{{item.content}}</p>
            </router-link>
          </li>
        </ul>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">Loading...</span>
        </div>
      </mt-loadmore>
     <!-- <ul>
        <li v-for="item in list">
          <h3>{{item.title}}</h3>
          <img v-lazy="item.src" alt="">
          <p>{{item.content}}</p>
        </li>
      </ul>-->
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
        topStatus: '',
        page:1,
        allLoaded:false,
        height:''
      }
    },
    props:['getHeight'],
    created(){
      this.getData(this.$route.params.categoryId,this.page);
    },
    mounted(){
      let headerHeight=this.getHeight.headerHeight.$el.offsetHeight;
      let footerHeight=this.getHeight.footerHeight.$el.offsetHeight;
      this.height=document.body.clientHeight-headerHeight-footerHeight+'px';
    },
    methods:{
      getData(id){
        if (id==0) {
          this.axios.get('photo?_page=' + this.page + '&_limit=5').then(res => {
            res.data.forEach(value => {
              value.src = require('../../assets/images/photo/' + value.src);
            })
            if (res.data.length==0) {
              this.$toast('无更多数据')
              this.allLoaded=true;
            }
            this.page++;
            this.list = this.list.concat(res.data);
            this.$refs.loadmore.onBottomLoaded();
          });
        }else {
          this.axios.get('photo',{params:{id:id}}).then(res=>{
            res.data.forEach(value=>{
              value.src=require('../../assets/images/photo/'+value.src)
            })
            this.list=res.data;
          });
        }
      },
      loadTop(){
        this.$refs.loadmore.onTopLoaded();
        console.log("函数呗调用了");
      },
      loadBottom(){
        this.getData(this.$route.params.categoryId,this.page);
        console.log("上啦了");
      },
      handleTopChange(status) {
        this.topStatus = status;
      },
    }
  }
</script>

<style scoped>
  ul {
    padding: 15px;
  }
  li {
    border: 1px solid #e0e0e0;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  li h3 {
    text-align: center;
    margin: 10px 0;
  }
  li img {
    width: 100%;
    box-shadow: 1px 1px 1px rgb(212, 212, 212);
    box-sizing: border-box;
  }
  li p {
    font-size: 14px;
    line-height: 2;
    margin-top: 10px;
    padding: 0 8px;
  }
</style>
