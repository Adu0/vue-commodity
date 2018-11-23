<template>
  <div class="newList-container">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" src="http://img.cdn.qiniu.dcloud.net.cn/shuijiao.jpg">
          <div class="mui-media-body">
            <h3 class="mui-ellipsis">{{item.title}}</h3>
            <p>
              <span class="mui-pull-left">发表时间:{{item.add_time | dateFormat}}</span>
              <span class="mui-pull-right">点击{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui"
export default {
  data() {
    return {
      newlist: [] //装新闻列表数据的数组
    };
  },
  created() {
    this.getNewlist();
  },
  methods: {
    getNewlist() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status == 0) {
          this.newlist = result.body.message;
        } else {
          Toast("获取数据失败");
        }
      });
    }
  }
};
</script>
<style lang='less'>
.newList-container {
  .mui-media-body {
    span {
      color: blueviolet;
    }
    h3 {
      font-size: 16px;
    }
  }
}
</style>