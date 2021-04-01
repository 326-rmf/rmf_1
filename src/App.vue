<template>
	<div id="app">
		<div class="block">
			<!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
			<el-carousel id="el-carousel_1">
				<el-carousel-item v-for="item in lunbotu_1" :key="item.src">
					<img :src="item" width="100%" height="100%" />
				</el-carousel-item>
			</el-carousel>
			<el-container id="container_2">
				<el-link href="https://element.eleme.io" target="_blank" class="link_1">
					<i class="el-icon-platform-eleme"></i>
					ELEMENT
				</el-link>
				<el-link href="http://nodejs.cn/" target="_blank" class="link_1">
					<i class="el-icon-view"></i>
					NODE
				</el-link>
				<el-link href="https://www.bootcss.com/" target="_blank" class="link_1">
					<i class="el-icon-more-outline"> </i>
					BOOTSTRAP
				</el-link>
				<el-link href="https://cn.vuejs.org/" target="_blank" class="link_1">
					<i class="el-icon-star-off"></i>
					VUE
				</el-link>
				<el-link href="https://www.baidu.com" target="_blank" class="link_1">

					百度一下
				</el-link>
				<el-link href="assets/my-first-project/index.html">adfa</el-link>
			</el-container>
			<!-- <div id="div_3">
				<span>小组成员:</span>
				<br />
				<span> 冉梦发</span>

				<span> 王凯</span>
				<br />
				<p id="p_1">
					完成了轮播图，图表展示，数据请求，页面样式编写等功能。
				</p>
			</div> -->

		</div>

		<el-container router="true" id="container_1">

			<el-button type="primary" id="button_1" @click="tiaozhuan() ">数据汇总</el-button>
			<el-button type="primary" id="button_2" @click="tiaozhuan_2() ">地区信息</el-button>
			<el-button type="primary" id="button_3" @click="tiaozhuan_3() ">图表展示</el-button>
			<el-button type="primary" id="button_4" @click="tiaozhuan_4() ">信息搜索</el-button>

			<!-- <router-link :to="{ path: '/tiaozhuan'}" replace>one</router-link> -->
		</el-container>
		<router-view></router-view>

		<div class="copyright">
			&copy; 2021 rmf&wk Project. All rights reserved.
		</div>


	</div>

</template>
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.15.1/lib/index.js"></script>
<script type="text/javascript">
	export default {
		data() {
			return {
				lunbotu_1: [
					require('./assets/vue_1.jpg'),
					require('./assets/bootstrap.jpg'),
					require('./assets/element_1.jpg'),
					require('./assets/node.jpg')

				]
			}

		},
		methods: {
			tiaozhuan() {
				this.$router.push({
					path: "/tiaozhuan"
				})
			},
			tiaozhuan_2() {
				this.$router.push({
					path: "/tiaozhuan_2"
				})
			},
			tiaozhuan_3() {
				this.$router.push({
					path: "/tiaozhuan_3"
				})
			},
			tiaozhuan_4() {
				this.$router.push({
					path: "/tiaozhuan_4"
				})
			},

		},
	}
</script>
<style lang="scss">
	#a_1 {
		// position: absolute;
		// margin-right: 0;
		// margin-top: 0;
		// float: left;
		text-decoration: none;
		float: right;
		// background-color: blue;
		margin-top: 10px;
		margin-right: 10px;
		transition: all 1s;
		color: blue;


	}

	#a_1:hover {
		color: red;
	}

	body {
		width: 100%;
		height: 2000px;
		background: -webkit-linear-gradient(top, hsla(113, 96%, 50%, 0.6), hsla(51, 100%, 1%, 0.0), black) no-repeat;

	}

	#container_1 {
		margin-top: 10px;
		margin-bottom: 80px;
	}

	#button_1 {
		margin-left: 170px;
		color: blue;
		width: 100px;
		height: 100px;
		background: -webkit-linear-gradient(top, hsla(124, 98%, 50%, 0.6), hsla(56, 91%, 50%, 0.0), black) no-repeat;

	}

	#button_2 {
		margin-left: 170px;
		color: saddlebrown;
		width: 100px;
		height: 100px;
		background: -webkit-linear-gradient(top, hsla(345, 99%, 49%, 0.6), hsla(250, 99%, 47%, 0.0), black) no-repeat;

	}

	#button_3 {
		margin-left: 170px;
		color: saddlebrown;
		width: 100px;
		height: 100px;
		background: -webkit-linear-gradient(top, hsla(58, 98%, 49%, 0.6), hsla(250, 99%, 47%, 0.0), black) no-repeat;

	}

	#button_4 {
		margin-left: 170px;
		color: saddlebrown;
		width: 100px;
		height: 100px;
		background: -webkit-linear-gradient(top, hsla(180, 69%, 63%, 0.6), hsla(250, 99%, 47%, 0.0), black) no-repeat;

	}
.copyright{
	float: left;
	margin-bottom: 0;
	margin-left: 500px;
}
	// .el-carousel__item h3 {
	// 	color: #475669;
	// 	font-size: 14px;
	// 	opacity: 0.75;
	// 	line-height: 150px;
	// 	margin: 0;
	// }

	// .el-carousel__item:nth-child(2n) {
	// 	background-color: #99a9bf;
	// }

	// .el-carousel__item:nth-child(2n+1) {
	// 	background-color: #d3dce6;
	// }

	.block {
		// float: left;

		// margin: 0 auto;
		// sfloat: left;
		position: relative;
		width: 100%;
		height: 400px;
		// background-color: pink;
		// margin: 0 auto;
		// /margin-top: 100px;

	}

	.link_1 {
		color: green;
		// background-color: yellow;
		transition: all 1s;
		margin-left: 100px;
		margin-top: 20px;
		float: left;
		font-size: 25px;
		// border: 1px solid black;
		text-decoration: none;
	}

	.link_1:hover {
		background-color: red;

	}

	#el-carousel_1 {
		width: 400px;
		height: 400px;
		float: left;
		margin-left: 0;
	}
</style>
