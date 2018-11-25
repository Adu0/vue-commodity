<template>
    <div class="goodsinfo-contaniner">
        <!-- 轮播图部分 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="bannerList" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品名称 -->
        <div class="mui-card">
            <h4>{{GoodsInfo.title}}</h4>
            <hr>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <h5>市场价:<i class="del">${{GoodsInfo.market_price}}</i>销售价: <i class="stro">${{GoodsInfo.sell_price}}</i> </h5>
                    <p>购买数量：
                        <span class="mui-numbox" data-numbox-min='0' data-numbox-max='100'>
                            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                            <input class="mui-numbox-input" type="number" />
                            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
                        </span>
                    </p>
                    <mt-button type="primary" size="small" class="small" >立即购买</mt-button>
                    <mt-button type="danger" size="small">加入购物车</mt-button>
                </div>
            </div>
        </div>
        <!-- 商品详细信息 -->
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{GoodsInfo.goods_no}}</p>
                    <p>库存情况：{{GoodsInfo.stock_quantity}}件</p>
                    <p>上架时间：{{GoodsInfo.add_time|dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="godesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="gocomment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import swiper from "../../../components/swiper/";
export default {
  data() {
    return {
      id: this.$route.params.id,
      bannerList: [], //定义装取轮播图的数组
      GoodsInfo: {} //定义商品详细信息
    };
  },
  created() {
    this.getbannerList();
    this.getGoodsInfo();
  },
  methods: {
    //获取轮播图数据
    getbannerList() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status == 0) {
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.bannerList = result.body.massage;
        }
      });
    },
    //获取商品详细信息
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        console.log(result);
        if (result.body.status === 0) {
          this.GoodsInfo = result.body.message[0];
        }
      });
    },
    //跳转到商品详情页
    godesc(id) {
      this.$router.push({ name: "goodsgodesc", params: { id } });
    },
    //跳转到商品评论列表
    gocomment(id){
        this.$router.push({name:"goodsgocomment",params:{id}})
    }
  },
  components: {
    swiper
  }
};
</script>
<style lang="less">
@baceColor: rgb(143, 11, 148);
.goodsinfo-contaniner {
  background-color: #eee;
  margin-top: 0;
  .mui-card {
    box-shadow: 0 0 4px @baceColor;
    border-radius: 4px;
    padding: 5px;
    h4 {
      line-height: 30px;
      font-size: 18px;
    }
    .mui-card-content-inner {
      h5 {
        line-height: 20px;
        font-size: 16px;
      }
      .del {
        margin: 0 10px 0 0;
        text-decoration: line-through;
      }
      .stro {
        font-weight: 700;
        font-size: 22px;
        color: @baceColor;
      }
      p {
        font-size: 16px;
      }
      .small {
        background-color: @baceColor;
      }
    }
    .mui-card-footer {
      display: block;
      button {
        margin: 15px 0;
      }
    }
  }
}
</style>
