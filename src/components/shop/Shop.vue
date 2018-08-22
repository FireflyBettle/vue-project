<template>
  <div class="container">
    <ul>
      <li v-for="(item,index) in shopcart" :key="item.id">
        <p style="overflow: hidden">
          <mt-switch style="float: left" v-model="item.isSelected"></mt-switch>
          <img src="../../assets/images/slide3.jpg" alt="">
        </p>
        <p>商品标题:{{ item.title }}</p>
        <p>¥{{ item.price }}
          <mt-button size="small" @click.native="decrease(item)">-</mt-button>
          <span>{{ item.num }}</span>
          <mt-button size="small" @click.native="increase(item)">+</mt-button>
          <mt-button type="danger" size="small" @click.native="del(index)">删除</mt-button>
        </p>
      </li>
      <div>
        <div class="top">总计:</div>
        <p>已经选择商品{{ payMent.count }}件:总价{{ payMent.price }}元<mt-button type="danger" size="small">去结算</mt-button></p>
      </div>
    </ul>
  </div>
</template>

<script>
  import GoodsList from '@/GoodsList'
  export default {
    name: "Shop",
    data(){
      return {
        shopcart:[],
      }
    },
    created(){
      let goodsList=GoodsList.getGoodList();
      let ids=Object.keys(goodsList).join(',');
      console.log(goodsList);
      this.axios.get('goods?myid_like=8').then(res=>{
        this.shopcart=res.data;
        this.shopcart.forEach(goods=>{
          if (goodsList[goods.myid]) {
            goods.num=goodsList[goods.myid]
          }
          goods.isSelected=true

        })
      }).catch(err=>{
        console.log(err);
      })
    },
    computed:{
      payMent(){
        let price=0;
        let count=0;
        this.shopcart.forEach(goods=>{
          if (goods.isSelected) {
            price += goods.num*goods.price;
            count += goods.num;
          }
        })
        return {
          count,
          price
        }
      }
    },
    methods:{
      decrease(goods){
        goods.num--;
      },
      increase(goods){
        goods.num++;
      },
      del(index){
        this.shopcart.splice(index,1)
      }
    },
    beforeRouteLeave(to,from,next){
      if (confirm("亲，真的要离开吗?")) {
        let obj={};
        this.shopcart.forEach(goods=>{
          obj[goods.myid]=goods.num;
          next()
        })
        GoodsList.saveGoods(obj);
      }else {
        next(false)
      }
    }
  }
</script>

<style scoped>
  img {
    width: 20%;
    display: inline-block;
  }
  .container {
    padding: 15px;
  }
  p {
    line-height: 2.5;
  }
  .mint-button {
    margin: 0 10px;
  }

</style>
