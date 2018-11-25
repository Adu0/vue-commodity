<template>
  <div class="home-container">
    <!-- 轮播图 -->
    <swiper :bannerList="bannerList" :isfull='true'></swiper>
    <!-- 九宫格样式 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
          <img class="mui-icon mui-icon-home" src="../../images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoList">
          <img class="mui-icon mui-icon-home" src="../../images/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/Goodspurchased">
          <img class="mui-icon mui-icon-home" src="../../images/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img class="mui-icon mui-icon-home" src="../../images/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img class="mui-icon mui-icon-home" src="../../images/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img class="mui-icon mui-icon-home" src="../../images/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </a></li>

    </ul>

  </div>
</template>

<script>
//引入轮播图swiper
import swiper from "../../components/swiper/";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    this.getBannerData();
  },
  methods: {
    getBannerData() {
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.bannerList = result.body.message;
        } else {
          Toast("获取轮播图数据失败!请重试!");
        }
      });
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang="less">
.home-container {
  // 九宫格样式
  .mui-grid-view {
    background-color: #fff;
    border: none;
    .mui-table-view-cell {
      border: none;
      img {
        width: 60px;
        height: 60px;
      }
      .mui-media-body {
        font-size: 13px;
      }
    }
  }
}
</style>