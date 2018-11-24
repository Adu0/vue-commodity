<template>
    <div class="Goodspurchased-container">
        <div class="goods-list" v-for="item in pagelist" :key="item.id" @click="goDetail(item.id)">
            <img src="../../images/phtot.jpg" alt="">
            <h1>{{item.title}}</h1>
            <div class="rate">
                <p>
                    <span class="now">${{item.market_price}}</span>
                    <span class="old">${{item.sell_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>
        <mt-button type="primary" size="large" @click="postcomment" class="goods-btn">获取更多</mt-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      pageindex: 1,
      pagelist: [] //存放列表的数组
    };
  },
  created() {
    this.GetGoodsList();
  },
  methods: {
    GetGoodsList() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          console.log(result);
          if (result.body.status == 0) {
            this.pagelist = this.pagelist.concat(result.body.message);
          }
        });
    },
    postcomment() {
      this.pageindex++;
      this.GetGoodsList();
    },
    goDetail(id) {
      this.$router.push({ name: "goodsinfo", params: { id } });
    }
  }
};
</script>
<style lang="less">
@baceColor: rgb(143, 11, 148);
.Goodspurchased-container {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goods-btn {
    background-color: @baceColor;
  }
  .goods-list {
    width: 49%;
    border: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 6px 0;
    box-shadow: 0 0 2px @baceColor;
    img {
      width: 100%;
    }
    h1 {
      font-size: 14px;
      padding: 5px;
      line-height: 20px;
    }
    .rate {
      padding: 3px;
      background-color: #eee;
      .now {
        color: @baceColor;
        font-size: 18px;
        font-weight: 700;
        margin-left: 6px;
        margin: 6px;
      }
      .old {
        text-decoration: line-through;
        margin-left: 10px;
        font-size: 14px;
      }
      .sell {
        span {
          margin-right: 30px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
