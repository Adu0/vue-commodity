<template>
	<div id="app-counter">
		<!-- 头部导航 -->
		<mt-header fixed title='VUE'></mt-header>
		<!-- 底部tabBar -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-extra mui-icon-extra-addpeople"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		<!-- 中间部分 -->
		<transition>
			<router-view></router-view>
		</transition>

	</div>
</template>

<script>
</script>

<style lang="less">
@baceColor: rgb(143, 11, 148);

body {
  background-color: #fff;
}
#app-counter {
  padding-top: 40px;
  padding-bottom: 50px;
  font-size: 16px;
  overflow-x: hidden;
  .mint-header {
    background-color: @baceColor;
  }
  .mui-bar-tab .mui-tab-item.mui-active {
    color: @baceColor;
	}
	#app-counter .mui-bar-tab .mui-tab-item.mui-active {
    color: #8f0b94;
}
.mui-bar-tab .mui-tab-item {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
