<template>
    <div class="goodsgocomment-container">
        <cmtbox :id="$route.params.id"></cmtbox>
    </div>
</template>
<script>
import cmtbox from "../../../components/comment";
export default {
  components: {
    cmtbox
  }
};
</script>
<style lang="less">
</style>
