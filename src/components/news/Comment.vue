<template>
    <div class="container">
      <!--<nav-bar :title="title" :path="path"></nav-bar>-->
      <mt-field label="请发表评论" placeholder="" type="textarea" rows="4" v-model="introduction"></mt-field>
      <mt-button type="primary" size="large" @click="sendComment(introduction)">提交</mt-button>
      <div class="comment" v-for="item in message">
        <p><span>{{item.author}}:</span><span>{{item.course_name}}</span></p>
        <p><span>{{item.time}}</span></p>
      </div>
      <mt-button class="btn" plain type="primary" size="large" icon="more" @click="getMessage()">加载更多</mt-button>
    </div>
</template>

<script>
  export default {
    name: "Comment",
    data(){
      return {
        title:'社区评论',
        path:'/',
        introduction:'',
        message:[],
        id:110,
        page:1,
        limit:20
      }
    },
    created(){
      this.id=localStorage.getItem('id')
      console.log(localStorage.getItem('id'));
      this.getMessage()
    },
    methods:{
      getMessage(_this){
        this.axios.get('comment?_sort=id&_order=DESC&_page='+this.page+'&_limit='+this.limit+'').then(res=>{
          if (res.data.length==0) {
            this.$toast('无更多数据');
            document.querySelector('.btn').style.display='none'
          }else {
            this.message=this.message.concat(res.data);
          }
        })
        this.page++;
      },
      sendComment(message){
        if (this.introduction.trim()=='') {
          return this.$toast('你的信息不能为空')
        }
        let data={
            id: this.id,
            course_name: message,
            author: "邹秀兰",
            time: "2018-08-16"
          }
       this.axios.post('comment',data).then(res=>{
         this.introduction='';
         this.message.unshift(res.data);
       })
        this.id++;
        localStorage.setItem('id',this.id)
      },
    }
  }
</script>

<style scoped>
  p {
    line-height: 2;
  }
  .container {
    padding:0 15px;
    margin-bottom: 65px;
  }
  .comment p span:first-child {
    margin-right: 20px;
  }
  .comment p:last-child {
    text-align: right;
  }
</style>
