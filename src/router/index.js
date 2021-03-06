import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '../pages/home/'
import MemberComponent from '../pages/member/'
import ShopcarComponent from '../pages/shopcar/'
import SearchComponent from '../pages/search/'
import newList from '../pages/newList/'
import newInfo from '../pages/newinfo/'
import photoList from '../pages/photoList/'
import Goodspurchased from '../pages/Goodspurchased'
import GoodsInfo from '../pages/Goodspurchased/goodsinfo'
import Goodsdesc from '../pages/Goodspurchased/goodsgodesc'
import Goodscomment from '../pages/Goodspurchased/goodsgocomment'

Vue.use(Router)


export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeComponent },
    { path: "/member", component: MemberComponent },
    { path: "/shopcar", component: ShopcarComponent },
    { path: "/search", component: SearchComponent },
    { path: "/home/newList", component: newList },
    { path: "/home/newsinfo/:id", component: newInfo },
    { path:'/home/photoList',component:photoList},
    { path: '/home/Goodspurchased', component: Goodspurchased },
    { path: '/home/GoodsInfo/:id', component: GoodsInfo, name:'goodsinfo'},
    { path: '/home/Goodsdesc/:id',component: Goodsdesc,name: 'goodsgodesc'},
    { path: '/home/Goodscomment/:id',component: Goodscomment,name: 'goodsgocomment'}
  ],
  linkActiveClass: "mui-bar-tab mui-tab-item mui-active"
});
