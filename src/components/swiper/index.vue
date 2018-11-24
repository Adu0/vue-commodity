<template>
    <mt-swipe :auto="4000" class="binner-container">
        <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
            <a :href="item.url" :class="{'full':isfull}">
                <img src="../../images/home1 (1).jpg">
            </a>
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
export default{
    props: ["bannerList", "isfull"]
}
</script>
<style lang="less">
.binner-container {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: yellow;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: skyblue;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
    }
  }
  .isfull {
      width: 100%;
  }
}
</style>
