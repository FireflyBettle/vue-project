// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import MyUl from '@/components/common/MyUl'
import Myli from '@/components/common/Myli'
import NavBar from '@/components/common/NavBar'
import Slide from '@/components/common/Slide'
import Moment from 'moment'
import VuePreview from 'vue-preview'

Vue.component(MyUl.name,MyUl)
Vue.component(Myli.name,Myli)
Vue.component(NavBar.name,NavBar)
Vue.component(Slide.name,Slide)
Vue.use(MintUI)
Vue.use(VueAxios,axios)
Vue.use(VuePreview)

Vue.filter('moment',(data,formateStr)=>{
  return Moment(data).format(formateStr);
})
Moment.locale('zh-cn')

//拦截器
axios.interceptors.request.use(config=>{
  MintUI.Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
})
axios.interceptors.response.use(respone=>{
  MintUI.Indicator.close();
  return respone;
})


Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://localhost:3000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
