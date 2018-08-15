<template>
  <div id="app">
    <mt-header fixed title="后台管理系统"></mt-header>
    <router-view class="temp"/>
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
        购物车
      </mt-tab-item>
      <mt-tab-item id="Search">
        <img @click="change()" slot="icon" src="./assets/images/search_active.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:'',
      show:true
    }
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
</style>
