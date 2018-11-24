<template>
    <div class="new-info-container">
        <div class="new-info-title">
            <h4>{{newinfo.title}}</h4>
        </div>
        <div class="new-info-subtitle">
            <span class="ctime">发表时间:{{newinfo.add_time|dateFormat}}</span>
            <span class="click mui-pull-right">点击{{newinfo.click}}次</span>
        </div>
        <hr>
        <div class="new-info-counter" v-html="newinfo.content"></div>
        <comment :id="id"></comment>

    </div>
</template>
<script>
import comment from "../../components/comment/";
import { Toast } from "mint-ui"
export default {
  data() {
    return {
      id: this.$route.params.id,
      newinfo: {}
    };
  },
  created() {
    this.getNewInfo();
  },
  methods: {
    getNewInfo() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        console.log(result);
        if (result.body.status === 0) {
          this.newinfo = result.body.message[0];
        } else {
            Toast('请重试')
        }
      });
    }
  },
  components :{
      comment
  }
};
</script>
<style lang="less">
.new-info-container {
  .new-info-title {
    height: 30px;
    h4 {
      font-size: 16px;
      text-align: center;
    }
  }
  .new-info-subtitle {
    padding: 0 10px;
    color: blueviolet;
  }
  .new-info-counter {
    padding: 0 10px;
    text-indent: 2em;
    line-height: 25px;
    p {
      img {
        width: 100%;
        margin-right: 50px;
        display: block;
      }
    }
  }
}
</style>
