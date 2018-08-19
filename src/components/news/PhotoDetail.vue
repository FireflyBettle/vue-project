<template>
    <div>
      <nav-bar :title="title" :path="path"></nav-bar>
      <Slide :url="slide" />
      <div class="container">
        <h2>华为手机(荣耀6Plus) 16G双4G版</h2>
        <ul>
          <li><span>市场价:111</span>销售价:4444</li>
          <li>购买数量</li>
          <li>
            <mt-button size="small" type="primary">立即购买</mt-button>
            <mt-button size="small" type="danger">加入购物车</mt-button>
          </li>
          <li>商品参数</li>
          <li>库存情况:</li>
          <li>上架时间:</li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: "PhotoDetail",
    data(){
      return {
        title:'图文详情',
        slide:'url',
        path:'/photo/list/'+this.$route.params.categoryId,
        info:[]
      }
    },
    created(){
      this.axios.get('photoDetail?id='+this.$route.params.id).then(res=>{
        this.info=res.data[0]
        console.log(res.data);
      })
      console.log(this.$route.params.id);
    }
  }
</script>

<style scoped>
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
</style>
