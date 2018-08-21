<template>
    <div>
      <nav-bar :title="title" :path="path"></nav-bar>
      <Slide :url="slide" />
      <div class="container">
        <h2>{{ info.title }}</h2>
        <ul>
          <li><span>市场价:{{ info.marketPrice }}</span>销售价:{{ info.sellPrice }}</li>
          <li style="margin-bottom: 8px">购买数量
            <mt-button size="small" type="primary" @click="decrease()">-</mt-button>
            <span>{{value}}</span>
            <mt-button size="small" type="danger" @click="increase()">+</mt-button>
          </li>
          <li style="position: relative;">
            <mt-button size="small" type="primary">立即购买</mt-button>
            <mt-button size="small" type="danger" @click="showFly()">加入购物车</mt-button>
            <transition name="ball" v-on:after-enter="afterEnter">
              <div class="ball" v-if="show"></div>
            </transition>
          </li>
          <li>商品参数</li>
          <li>库存情况:{{ info.stock }}</li>
          <li>上架时间:{{ info.time | moment('YYYY-MM-DD') }}</li>
          <li>
            <mt-button size="large" plain @click.native="joinDetail()">商品详情</mt-button></li>
        </ul>
      </div>
    </div>
</template>

<script>
  import EventBus from '@/EventBus'
  export default {
    name: "PhotoDetail",
    data(){
      return {
        title:'图文详情',
        slide:'url',
        path:'/photo/list/'+this.$route.params.categoryId,
        info:[],
        show:false,
        value:0
      }
    },
    created(){
      this.axios.get('photoDetail?id='+this.$route.params.id).then(res=>{
        this.info=res.data[0]
      })
    },
    methods:{
      decrease(){
        if (this.value==0) {
          this.value=0
          return;
        }
        this.value--;
      },
      increase(){
        if (this.value==this.info.stock) {
          return
        }
        this.value++;
      },
      showFly(){
        this.show=true;
      },
      afterEnter(){
        this.show=false;
        EventBus.$emit('addShopcart',this.value)
      },
      joinDetail(){
        this.$router.push({
          name:'photo.info',
          query:{
            id:parseInt(this.$route.params.id)+30
          }
        })
      }
    }
  }
</script>

<style scoped>
  .ball-enter-active {
    animation: bounce-in 1s;
  }
  .ball-leave {
    opacity: 0;
  }
  @keyframes bounce-in {
    0% {
      transform: translate3d(0,0,0);
    }
    50% {
      transform: translate3d(140px,-50px,0);
    }
    75% {
      transform: translate3d(160px,0,0);
    }
    100% {
      transform: translate3d(100px,850px,0);
    }
  }
  .container {
    padding: 15px;
  }
  .container li {
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    color: #8c8c8c;
  }
  .container li span {
    margin-right: 12px;
  }
  .container h2 {
    color: #26A2FF;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    border: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    outline: 0;
    line-height: 1.6;
    font-size: inherit;
    width:50px;
  }
  .ball {
    position: absolute;
    left: 100px;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
  }
</style>
