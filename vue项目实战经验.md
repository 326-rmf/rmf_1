##	el-dropdown-item
	-	添加点击时间无反应解决方法
	-	 @click.native
	-	这才是点击事件的正确方式
##	文本显示
	-	p标签绑定 v-html	v-text		<p v-html="news">{{ news }}</p></el-main>
	-	 var that = this;	创建的函数里面	要设置that	来记住当前页面对象	因为向后端发请求之后的指向会发生改变
	-	调用data里面的属性的时候	记得指定是谁来调用	也就是不要忘了加上this		that的问题	有根据得调用对象
##	elementui里面的  		:hover	是连续写的		不可分开
##	图片缩放大小	并且保持不失真的效果要加上代码	:src=""绑定图片路径
-	object-fit: fill;
	object-fit: contain;
	object-fit: scale-down;
##	多次点击一个路由连接	出现路由错误	在route	的index.js里面加上如下代码	就是原型对象上面push函数有些错误	catch的时候会继续执行错误的代码
-	//获取原型对象上的push函数
	const originalPush = VueRouter.prototype.push
	//修改原型对象中的push方法
	VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
	}
##	控件位置调整用margin		内容位置调整用padding
##	js引入顺序  css样式设置的顺序对程序都有影响   **书写顺序问题**
##	 设置从上到下的颜色渐变属性
-	 background: -webkit-linear-gradient(
      top,
      hsla(36, 97%, 64%, 0.6),
      hsla(60, 33%, 83%, 0),
      gray
    )
    no-repeat;
##	vue组件的标签内部设置样式
-	<h1 :style="{'text-align':'center'}">天气查询</h1>		双引号里面有单引号	
##	500ms是一个合适的消息显示区间
##	注意多样化样式的实现
##	调整环形进度条画布宽度	调整大小加上冒号
-	  <el-progress type="circle" :percentage="percent" :width="40" :height="40"></el-progress>				
##	页面常用的组件直接封装
-	在main.js文件引入vue文件
	-	import waves from './components/waves.vue'
-	再就是新建组件
-	Vue.component("waves",waves)		第一个参数是组件名称	第二个参数是引入时候的名称
-	在其他页面就可以使用<waves></waves>组件了