<template>
  <div id="app">
    <mt-header fixed title="后台管理系统"></mt-header>
    <transition name="Opacity" mode="out-in">
      <router-view class="temp"/>
    </transition>
    <mt-tabbar v-model="selected" class="fixed">
      <mt-tab-item id="Home">
        <img @click="change()" slot="icon" src="./assets/images/home_active.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="Member">
        <img @click="change()" slot="icon" src="./assets/images/vip_active.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="Shop">
        <img @click="change()" slot="icon" src="./assets/images/shop_active.png">
        购物车<mt-badge size="small" color="#F44336">{{ num }}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="Search">
        <img @click="change()" slot="icon" src="./assets/images/search_active.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import EventBus from './EventBus'
import GoodsTools from './GoodsList'
export default {
  name: 'App',
  data(){
    return {
      selected:'',
      show:true,
      num:0
    }
  },
  created(){
    this.num=GoodsTools.getTotalCount();
    EventBus.$on('addShopcart',data=>{
      this.num=data;
    })
  },
  methods:{
    change(){
      this.$nextTick(()=>{
        this.$router.push({
          name:this.selected
        })
      })
      // console.log(this.selected);
    }
  },
  watch:{
    // selected(newObj,OldObj){
    //   console.log(newObj+'----'+OldObj);
    //   this.$router.push({
    //     name:newObj
    //   })
    // }
  }
}
</script>

<style scoped>
  .fixed {
    position: fixed;
    bottom: 0;
  }
  .Opacity-enter-active,.Opacity-leave-active {
    transition: opacity .2s;
  }
  .Opacity-enter,.Opacity-leave-to {
    opacity: 0;
  }
</style>
