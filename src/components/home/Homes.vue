<template>
  <div>
    <Slide :url="slide" />
    <div class="wrap">
      <my-ul>
        <my-li v-for="(img,index) in imgs" :key="index">
          <router-link :to="img.router">
            <a href="javascript:;">
              <img :src="img.src" alt="">
              <span>{{img.title}}</span>
            </a>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "homes",
    data(){
      return{
        slide:'slide',
        imgs:[]
      }
    },
    created(){
      /*let _this=this;
      function Slide() {
        return _this.axios.get('slide');
      }
      function Imgs() {
        return _this.axios.get('imgs')
      }
      this.axios.all([Slide(),Imgs()]).then(this.axios.spread((one,two)=>{
        one.data.forEach((value)=>{
          value.src=require('../../assets/images/'+value.src)
        })
        two.data.forEach((value)=>{
          value.src=require('../../assets/images/icons/'+value.src)
        })
        this.slide=one.data;
        this.imgs=two.data;
      })).catch(err=>{
        console.log(err);
      })*/


      this.axios.get('imgs').then(res=>{
        res.data.forEach(value=>{
          value.src=require('../../assets/images/icons/'+value.src)
        })
        this.imgs=res.data;
      }).catch(err=>{
        console.log(err);
      })

      /*this.axios.get('slide').then(res=>{
        res.data.forEach((value,index)=>{
          value.src=require('../../assets/images/'+value.src)
        })
        this.slide=res.data;
      })*/

    }
  }
</script>

<style scoped>
  .mint-swipe {
    height: 200px;
    margin-top: 40px;
  }
  ul li a {
    width: 100%;
    display: inline-block;
  }
  ul li img {
    width: 50px;
    display: block;
    margin: 0 auto;
  }
  .slider img {
    width: 100%;
    display: block;
  }
</style>
