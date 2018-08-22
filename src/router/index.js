import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Homes'
import Member from '@/components/member/Member'
import Shop from '@/components/shop/Shop'
import Search from '@/components/search/Search'
import NewList from '@/components/news/NewList'
import NewDetail from '@/components/news/NewDetail'
import PhotoList from '@/components/news/PhotoList'
import PhotoDetail from '@/components/news/PhotoDetail'
import photoComment from '@/components/news/photoComment'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {path: '/',redirect:{name:'Home'}},
    {path: '/home',name: 'Home',component: Home},
    {path: '/member',name: 'Member',component: Member},
    {path: '/shop',name: 'Shop',component: Shop},
    {path: '/search',name: 'Search',component: Search},
    {path: '/news',name: 'news',component: NewList},
    {path: '/news/detail',name: 'news.detail',component: NewDetail},
    {path: '/photo/detail',name: 'photo.info',component: NewDetail},
    {path: '/photo/comment',name: 'photo.comment',component: photoComment},
    {path: '/photo/list/:categoryId',name: 'photo.list',component: PhotoList},
    {path: '/photo/list/:categoryId/:id',name: 'photo.detail',component: PhotoDetail}
  ]
})
