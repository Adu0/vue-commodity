// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from "moment"  //定义时间组件
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "MMM Do YYYY ,h:mm:ss a") {
  return moment(dataStr).format(pattern)
})

//导入VueResource
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

/// 按需导入需要的mint-ui组件
import{Header, Swipe, SwipeItem } from 'mint-ui'

// 注册组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//引入根路径
Vue.http.options.root = "http://www.lovegf.cn:8899"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
