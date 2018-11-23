import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '../pages/home/'
import MemberComponent from '../pages/member/'
import ShopcarComponent from '../pages/shopcar/'
import SearchComponent from '../pages/search/'
import newList from '../pages/newList/'
import newInfo from '../pages/newinfo/'
import photoList from '../pages/photoList/'

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
    {path:'/home/photoList',component:photoList}
  ],
  linkActiveClass: "mui-bar-tab mui-tab-item mui-active"
});
