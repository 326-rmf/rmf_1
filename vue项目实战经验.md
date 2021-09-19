##	el-dropdown-item
	-	添加点击时间无反应解决方法
	-	 @click.native
	-	这才是点击事件的正确方式
##	文本显示
	-	p标签绑定 v-html	v-text		<p v-html="news">{{ news }}</p></el-main>
	-	 var that = this;	创建的函数里面	要设置that	来记住当前页面对象	因为向后端发请求之后的指向会发生改变
	-	调用data里面的属性的时候	记得指定是谁来调用	也就是不要忘了加上this		that的问题	有根据得调用对象
##	elementui里面的  		:hover	是连续写的		不可分开
##	图片缩放大小	并且保持 	不失真的效果要加上代码	:src=""绑定图片路径
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
#	组件的封装
1.	页面常用的组件直接封装
	-	在main.js文件引入vue文件
		-	import waves from './components/waves.vue'
		-	再就是新建组件
		-	Vue.component("waves",waves)		第一个参数是组件名称	第二个参数是引入时候的名称
	-	在其他页面就可以使用<waves></waves>组件了
2.	局部定义组件		<myCom></myCom>		用到了Vue的extend
-	在想要的组件里面定义组件		script里面写入
	-	 /*创建组件*/
        var myCom = Vue.extend({
            template: '<div>这是我的组件</div>'
        });
        /*全局注册组件*/
        Vue.component('my-com',myCom);
3.	仅限于app1里面使用组件	<my-com></my-com>
	var app1 = new Vue({	
				el: '#app1',
				components:{
					'my-com':myCom
				}
			});
##	事件触发传递参数e		e指定对应携带的参数
##	正则表达式			制作翻译功能		限定输入框的内容时候用到了正则表达式
-	定义一个正则表达式
-	 dP1:/^[u4e00-u9fa5aa-zA-Z]{2,}$/		   			至少有一个中文汉字		{2,}//至少两个中文汉字	不设置上限
-	测试的时候
-	this.dP1.test(xxx)				xxx式要测试的字段是否匹配正则表达式的标准	符合才返回true		否则返回false
##	npm i font-awesome --save
-	mian.js
	-	import 'font-awesome/scss/font-awesome.scss'
##	全屏
-	npm i screenfull
-	import screenfull from "screenfull";
##	el-tooltip消息提示里面装东西
-	<el-tooltip
                content="全屏缩放"
                effect="dark"
                placement="bottom"
                fullscreen
              ></el-tooltip>
##	能不浮动就不适用浮动
##	比较喜欢的颜色
-	hsla(0, 3%, 12%, 0.479)
##	页面显示
-	window.location.href="/tiaozhuan_5"
##	自定义主题
-	npm i element-theme -g
-	npm i element-theme-chalk -d
-	element-red.scss		红色主题的文件
	-	里面填写内容	
	/* 改变主题色变量 */
	$--color-primary: teal;

	/* 改变 icon 字体路径变量，必需 */
	$--font-path: '~element-ui/lib/theme-chalk/fonts';

	@import "~element-ui/packages/theme-chalk/src/index";
-	创建一个theme.scss文件	来汇总写的各种颜色的主题文件
-	里面这样来引入	当然路径根据自己定义的路径来写入
-	.greenTheme{
    @import './element-green.scss';
}
-	最后在main.js或者index.js文件里去写入代码
-	import Element from 'element-ui'
	import './assets/theme.scss'//这个路径根据自己定义的路径来
	Vue.use(Element)
-	template
	- <el-select v-model="currentTheme" @change="changeTheme">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      >

      </el-option>
    </el-select>
-	data
	-	 options:[
        {value:'redTheme',label:'红色主题'},
        {value:'greenTheme',label:'绿色主题'},
        {value:'blueTheme',label:'蓝色主题'},
        {value:'yellowTheme',label:'黄色主题'},
        {value:'purpleTheme',label:'紫色主题'},
      ],
      currentTheme:'greenTheme'
-	method
	-	changeTheme(){
      document.getElementsByTagName('body')[0].className = this.currentTheme
    }
-	忘记在app.vue里面添加	router-view
-	页面加载不出来
##	new RegExp(str)------->字面量正则变为了真正的正则表达式
##	axios解决跨域问题
-	vue.config.js		配置devServer:{proxy:{}}
-	axios异步请求
##	promise		async使用场景
-	先来了解以下作用域
-	function fn(){var a = 10}		fn()		console.log(a)		-->a is not defined		a不可跨函数
-	var temp = null; function fn(){var a = 10;temp = a;}		fn();		console.log(temp)		-->可以拿到a的值		a
-	var temp = null; function fn(){setTimeout(()=>{var a = 10;temp = a;})}		fn();		console.log(temp)		-->不可以拿到a的值		因为setTimeout是异步的 		那么先执行了console.log(temp)
-	那么涉及到了**异步操作导出数据的方法**
-	**callback**
-	function fn(callback){setTimeout(()=>{var a = 10;callback(a)})}		a被callback抛出去了
-	fn(function(a){console.log(a)})		fn里面有一个callback来获取抛出的数据		匿名函数接住了callback
-	**promise**
-	function fn(){
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		var a = 10
		resolve(a)
	})
	})	}	
	export default fn//记得暴露fn
-	组件使用fn的操作
-	fn().then((a)=>{console.log(a)})
##	promsie 和async 的区别
-	代码要封装处理的时候		用promise
-	代码异步操作		通常await后面是一个promise的结果
-	async function fn(){const res = await new Promise(()=>{})}//可以得到异步的数据res		用来处理
##	vue-cli项目使用less		版本太高了		使用错误
-	npm i less less-loader		
-	less-loader@6.0.0
##	div:nth-child(3){}
-	伪类选择器设置属性
##	localStorage.setItem()
-	是向本地存储	存储数据
-	getItem()		是向本地存储取出数据
-	参数的设置		是res还是response		自己看清楚
-	localStorage.setItem()		设置之后	是在application里面查看数据		开发者工具里面的application
-	跳转之后		可以从localStorage里面取得存储的数据
-	用到了created函数		进入页面调用了函数		做一些初始化处理
-	created函数	里面使用methods里面的定义的函数功能		做一些拿取数据的操作		来完成页面数据的完整		
-	发送一些		请求		用到了async await
-	localStorage.getItem('')//setItem的时候设置的属性的名称			拿取 的时候	就用同样的名称
-	localStorage.setItem('id',respones.data)		&& 	localStorage.getItem('id')
-	id被存入的缓存		可以在页面设计 的时候来拿去	设置 的数据		这样异步获取的数据有了相应的作用
-	在开发者工具		里面的application里面设置localStorage里面的属性的值		这样后端没有限制的情况		可能获取非本人的数据
-	这样就必须要用到校验身份 的设置		一个是token
-	token的使用用于造假信息的验证		保障了用户数据的安全		完成了网站的安全的设置要求
-	用到token 的时候涉及到了请求头的使用限制
-	利用请求头来发送token		headers:{}
-	headers:{'Authorization':'后端要求的内容书写'+localStorage.getItem('token')}
-	这样可以完成数据的校验任务		用户身份的验证就是发送请求头的时候		和服务端对接一下token是不是一样的数据
-	是的话就会完成校验任务		允许用户通过		否则用户身份信息验证失败		导致验证失败	无法进一步获取数据
-	后端验证token的方法是
-	const token = String(req.headers.authorization || '').split(' ').pop()-->要么有token		要么直接返回空字符串
-	后端拿到token 	来进行if验证		是否含有
-	if()		后台验证token 		符合规则返回相应的数据		否则不返回数据
-	用async		await 来接收请求的异步数据		async function f(){const res = await axios.get('url',{})}
-	axios.defaults.baseURL = '基本相同的请求的URL的相同的部分'
-	response.setHeader('Access-Control-Allow-Origin',*)
-	response.setHeader("Access-Control-Allow-Headers", "Authorization");
-	服务端设置响应头允许响应头带有Authorization
-	
##	axios的请求拦截器
-	
##	router.beforeEach((to,from,next)=>{
	if(localStorage.getItem('token'))
	next()
	return
	})
-	router.beforeEach()是针对所有路由的		这样不合适
-	是路由导航守卫