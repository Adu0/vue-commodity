<template>
  <div class="comment-counter">
    <h4>发表评论</h4>
    <hr>
    <textarea placeholder="请输入你要BB的内容(不能超过120字)" maxlength="120" v-model="str"></textarea>
    <mt-button type="primary" size="large" @click="postcomment">发表评论</mt-button>
    <div class="comments-list" v-for="(item,i) in comments" :key="i.add_time">
      <h4 class="comments-list-title">第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}</h4>
      <hr>
      <div class="comment-content">
        {{item.content=='undefined'?'此用户很懒啥都没留!':item.content}}
      </div>
      <hr>
      <h4>发表时间:{{item.add_time|dateFormat}}</h4>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore" class="comment-button">加载更多</mt-button>
  </div>
</template>
<script>
export { Toast } from "mint-ui";
export default {
  data() {
    return {
      str: "",
      pageIndex: 1, //默认为第一页
      comments: [] //所有评论的数据
    };
  },
  created() {
    this.getcomments();
  },
  methods: {
    postcomment() {
      if(this.str.trim().length==0){
        return Toast('评论内容不能为空!')
      }
      this.$http
        .post("api/postcomment/" + this.id, { content: this.str.trim() })
        .then(result => {
          if(result.body.status===0){
            const smt={
                user_name:'匿名用户',
                add_time:Date.now(),
                content: this.str.trim()
            };
            this.comments.unshift(smt)
            this.str=''
          }
       });
    },
    getcomments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status == 0) {
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("获取数据失败!");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getcomments();
    },
    publish() {}
  },
  props: ["id"]
};
</script>
<style lang="less">
@baceColor: rgb(143, 11, 148);
.comment-counter {
  h4 {
    margin-left: 10px;
  }
  textarea {
    height: 85px;
    font-size: 14px;
    margin-bottom: 5px;
  }
  .mint-button {
    background-color: @baceColor;
  }
  .comments-list {
    margin: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px;
    .comments-list-title {
      color: @baceColor;
    }
    .comment-content {
      text-indent: 1em;
    }
    h4 {
      height: 30px;
      text-align: left;
      line-height: 30px;
      font-size: 14px;
      color: @baceColor;
    }
  }
  .comment-button {
    background-color: @baceColor;
    color: #fff;
    border-color: @baceColor;
  }
}
</style>
