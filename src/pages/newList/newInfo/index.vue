<template>
    <div class="new-info-container">
        <div class="new-info-title">
            <h4>1季度房价大跌</h4>
        </div>
        <div class="new-info-subtitle">
            <span class="ctime">发表时间:1212-12-12 12:12:12</span>
            <span class="click mui-pull-right">点击1次</span>
        </div>
        <hr>
        <div class="new-info-counter"></div>
        <comment></comment>

    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    methods:{
        getNewInfo(){
        
        }
    }
}
</script>
<style lang="less">
.new-info-container {
  .new-info-title {
      height: 30px;
    h4 {
      text-align: center;
    }
  }
}
</style>
