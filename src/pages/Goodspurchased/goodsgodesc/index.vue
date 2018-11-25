<template>
    <div class="goodsgodesc-container">
        <h3>华为（HUAWEI）荣耀6Plus 16G双4G版</h3>
        <hr>
        <div class="content" v-html="msginfo.content"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params,
      msginfo: {}
    };
  },
  created() {
    this.getmsginfo();
  },
  methods: {
    getmsginfo() {
      this.$http.get("api/goods/getdesc/" + this.id).then(result => {
        console.log(result);
        if (result.body.status == 0) {
          this.msginfo = result.body.message
        }
      });
    }
  }
};
</script>
<style lang="less">
@baceColor: rgb(143, 11, 148);
.goodsgodesc-container {
  h3 {
    line-height: 30px;
    height: 30px;
    text-align: center;
    font-size: 16px;
    color: @baceColor;
  }
}
</style>


