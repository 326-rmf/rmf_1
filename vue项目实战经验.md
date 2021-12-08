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
##	npm下载的坑就是
-	5.0.3只能是指定的版本
-	~5.0.X的最新的版本
-	^5.X.X的最新的版本
-	在npm i 下载依赖包的时候会出现版本问题很麻烦
##	yarn的优点
-	并行安装  速度快  同步执行所有任务
-	离线模式 之前安装了一个安装包就会从缓存里面获取 不会像npm 那样重新网络请求下载资源
- 	安装版本统一  为了防止拉取到不同的版本文件  yarn有一个锁定文件记录了被确切安装的模块的版本号
	每次新增一个模块  yarn就会创建更新yarn.lock文件  保证了拉去同一个项目依赖的时候就不会出现项目版本的问题
-	yarn更加简洁的输出	npm下载的时候会不断打印所有安装的依赖 yarn只会打印必要的输出信息
##	rmf引入






##	rmf326
-	elementui按需引入
	-	npm install babel-plugin-component -D
	-	babel.config.js里面引入文件配置
		-	"plugins": [
					[
					"component",
					{
						"libraryName": "element-ui",
						"styleLibraryName": "theme-chalk"
					}
					]
				]
-	container布局	Aside Main Header Footer
	--》装入组件commponent	Aside Main..这些组件都对应了自定义的组件展示
-	vuex		mutations里面传入的是state
	-	mutations:{
		fn(state){state.xx = !state.xx}
	}
	-	main.js文件里面引用
		-	import store from './store/index'
		-	new Vue({
				router,
				store,
				render: h => h(App),
				}).$mount('#app')
		-	mutations用的是this.$store.commit('')
	-	el-icon-${item.icon}
##	mock.js
-	拦截axios的请求  返回前端自己返回数据
	-	生成随机数据
-	eslint的语法错误取消提醒		vue.config.js里面配置
	-	module.exports={
			lintOnSave:false
		}
-	@请求夫路径的设置
	-	vue.config.js
		-	yarn add path
		-	const path = require("path");
			function resolve(dir) {
			return path.join(__dirname, dir);
			}
		-	chainWebpack: config => {
			config.resolve.alias
			.set("@", resolve("src"))
			.set("assets", resolve("src/assets"))
			}
-	category 单词拼写错误
##	echarts
-	是一款基于html5的图形库	图形创建简单 直接引用js即可
	-	是百度的项目
	-	文档详细
	-	图形丰富
-	封装思路
	-	没有封装代码就会冗余
	-	
##	页面审查元素直接找dom节点结构
##	路由重复点击出现的问题
-	//获取原型对象上的push函数
	const originalPush = VueRouter.prototype.push
	//修改原型对象中的push方法
	VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
	}
##	$route   $router
-	$route是局部
-	$router是全局
##	vue  get set
-	get覆盖取值行为		set覆盖赋值行为
-	function convert(){
	Object.keys(obj).forEach(key=>{
		let internalValue = obj[key]
		Object.defineProperty(obj,'foo',{
			get(){
				console.log(`getting '${key}':${internalValue}`)
				return internalValue
			},
			set(newValue){
				console.log(`setting '${key}':${newValue}`)
				internalValue = newValue
			}
		})
	})
}
-	依赖跟踪
-	Dep类有两个方法		depend   notify
	-	depend
		-	代表正在执行的代码  收集这种依赖项
	-	notify
		-	依赖发生改变的时候	任何之前被定义为依赖的表达式  计算  函数都会被通知重新执行
-	Window.Dep = class Dep {
	constructor(){
		this.subscribers = new Set()
	}
	depend(){
		if(activeUpdate){
			this.subscribers.add(activeUpdate)
		}
	}
	notify(){
		this.subscribers.forEach(sub=>sub())
	}
	}	
	let activeUpdate
	function autorun (update){
		//wrappedUpdate使用原因就是依赖关系发生改变的时候就会执行update()
		//autorun()函数是实时动态更新的  保持数据的实时更新
		function wrappedUpdate(){
			activeUpdate = wrappedUpdate
			update()
			activeUpdate = null
		}
		wrappedUpdate()
	}
##	vue插件
-	Vue.mixin(options)
	-	mixin复用重复的代码	到达对应的组件
	-	使用插件接口包装全局的mixins
	-	$options
-	function(Vue,options){

	}
-	const myPlugin = {
	install (Vue) {
		Vue.mixin({
			created () {
				if (this.$options.rules) {
					Object.keys(this.$options.rules).forEach(key => {
						const rule = this.$options.rules[key]
						this.$watch(key,newValue => {
							oconst res = rule.validate(newValue)
							if(!res){
								console.log(rule.message)
							}
						})
					})
				}
			}
		})
	}
}
Vue.use(myPlugin)
const vm = new Vue({
	data: { foo: 10 },
	rules: {
		foo: {
			validate: value => value > 1,
			message: 'foo must be getter than one'
		}
	}

})
##	渲染函数
-	完整的响应式原理的另一半
-	template是渲染函数渲染出来的
	-	渲染函数和所有的data属性都有依赖关系	data属性具有响应性	data属性会帮助组件的渲染函数搜集依赖
		data改变就会触发渲染函数调用	返回一个新的VDOM	旧的VDOM和新的VDOM进行比较和区分
		把最少的更改应用到真是的DOM中
##	VDOM
-	内部是使用C++编写的浏览器引擎实现的
-	vue的虚拟DOM会在每个实例会在document.createElement之后返回一个虚拟节点		这个虚拟节点是一个纯的
	js对象		例如div的上面的属性接口有很多	所有操作dom节点是开销很大的
-	Actual DOM
	[object HTMLDivElement]
-	Virtual DOM
	{tag:'div',data:{attrs:{},...},children:[]}
	一个tag标签	一个数据对象(包括一些属性) children代表这个节点还有很多的虚拟节点
	虚拟节点组成的虚拟DOM树
##	虚拟DOM的本质就是轻量的js数据格式来表示真是的DOM在特定时间的外观
-	innerHTML更新应用会丢弃以前的真实的DOM节点 然后重新生成所有的DOM真实节点	成本高昂	
	-	只生成一个新的虚拟DOM快照
-	虚拟DOM提供了声明方式构成你想要的DOM结构
-	虚拟DOM把渲染逻辑从真是DOM中分离出来	先计算差异 然后再把更改渲染应用到DOM上面
	省略渲染的最后一步的话就是	应用所有的更新逻辑都是在无形中执行的	不需要接触真实的DOM
	我们可以抽象出这些最终的连接点	操作DOM的API应用到别的地方  我们可以应用到任何支持虚拟环境的js应用
	但不一定是DOM 相反可以是原生的渲染引擎	例如IOS Android 或者在服务端	我们可以将VDOM转换为字符串
	或者字符串查找器  让VDOM进行原生的渲染成为可能	js引用实际上就是嵌入到js引擎中运行的	
-	渲染函数只是	返回虚拟DOM的函数
##	渲染函数的工作原理
-	每个组件都有一个渲染函数
	-	渲染函数包装到我们之前实现的autorun函数		渲染函数执行时候就会搜集组件的依赖	每个组件都有一个负
		监视的观察者来搜集依赖项	清理他们并通知所有内容	渲染函数返回的是VDOM 每个组件都有自己的自动
		循环渲染	组件树由这些组件组成	每个组件只负责自己的依赖	精确的依赖跟踪系统	不会造成过多的
		组件重新渲染	
	-	get set会有一定的开销
-	export default{
	render(h){
		return h('div',{},[...])
	}
	}
-	{}代表节点的配置项		[...]代表当前节点的子节点
-	h是一个约定		VDOM称h是超脚本		虚拟DOM渲染函数的风格
##	jsx渲染和模板的问题
-	模板的静态性更加容易优化编译
-	jsx具有动态性	优化较少
##	动态渲染标签
-	Vue.component('example',{
	props:['tags'],
	return (h){
		return h('div',this.tags.map((tag,i)=>h(tag,i)))
	}
})
##	动态渲染组件
-	const Foo = {render:h=>h('div','foo')}
-	函数组件和正常组件的差别是
	-	普通组件支持实例化		但是函数组件不支持实例化
	-	函数组件接收参数	然后返回VDOM	不拥有任何状态	函数组件更容易扩展
	-	父组件中使用函数组件	函数组件的render函数会比父组件的render函数更早调用
	-	如果组件只是简单接收数据展示	使用函数组件是适合的	组件在很多地方复用了
-	Vue.component('example',{
	props:['ok']
	return (h){
		return this.ok ? h(Foo) : h(Bar)
	}
})
	const Foo = {
		render:h=>h('div','foo')
	}
##	高阶组件的使用	可复用性更高	内部实现	只需要传入参数便可以获取数据
-	<smart-avator username='vuejs'></smart-avator>
-	function fetchURL(username,cb){
	setTimeout(()=>{
		cb('https://photo')
	},500)
	}
	const Avator = {
		props:['src'],
		template:`<img :src='src'>`
	}
	function withAvatorURL(InnerComponent){
		return {
			props:['username'],
			data(){
				return {url:`https://photo`}
			},
			created(){
				fetchURL('username',url=>{
					this.url = url
				})
			},
			render (h){
				return h(InnerComponent,{
					props:{
						src:this.url
					}
				})
			}
		}
	}
	const SmartAvator = withAvatorURL(Avator)
	new Vue({
		el:'#app',
		components:{SmartAvator}
	})
##	状态管理和路由
-	vuex里面的mutations   actions把状态的改变和异步代码分开了
-	mutations接收参数	并且改变参数状态
-	actions可以做出更多的操作
-	createStore模仿一个简单的vuex
-	function createStore({state,mutations}){
	return new Vue({
		data:{state},
		methods:{
			commit(mutationType){
				mutations[mutationType](this.state)
			}
		}
	})
	}
	const store = createStore({
		state:{count:0},
		mutations:{
			inc(state){
				state.count++
			}
		}
	})
-	vuex的核心**基于vue实例实现响应性**
-	**函数式编程**
-	function app({el,model,view,actions}){
	const wrappedActions = {}

	Object.keys(actions).forEach(key => {
		const originalAction = actions[key]
		wrappedActions[key] = () => {
			const nextModel = originalAction(vm.model)
			vm.model = nextModel
		}
	})

	 const vm = new Vue({
		el,
		data:{
			model,
		},
		render (h){
			//wrappedActions返回的是响应式的数据	所以要包裹一层调用
			return view(h,this.model,wrappedActions)
		}
	})
	}
-	app({
	el:'#app',
	model:{
		count:0
	},
	actions:{
		inc:({count}) => {{count:count+1}},
		dec:({count}) => {{count:count-1}},
	},
	view:(h,model,actions) => h('div',{attrs:{id:'app'}},[
		model.count,'',
		h('button',{on:{click:action.inc}},'+'),
		h('button',{on:{click:action.dec}},'-'),
	])
})
##	vue-router
-	hash
-	window.addEventListener('hashchange',()=>{
	app.url = window.location.hash.slice(1)
})
-	hashchange侦听器里面  我们更新URL	足以触发响应性的更新	帮助更新应用
-	页面切换是组件之间的切换
-	history	
	-	支持弹出状态	需要服务器配置
-	应用中的URL保存为响应式状态	应用响应路由的变化
-	const app = new Vue({
	el:'#app',
	data:{
		url:window.location.hash.slice(1)
	},
	render(h){
		return h('div',[
			h(routeTable[this.url] || NotFound),
			h('a',{attrs:{href:'#foo'}},'foo'),
			h('a',{attrs:{href:'#bar'}},'bar'),
		])
	}
})
-	**path-to-regexp是路由正则匹配的类库**
-	动态路由
-	compileRoutes是存储路由的数组	里面包含了渲染组件	路径	动态路由
-	const compileRoutes = []
	Object.keys(routeTable).forach(path => {
		const dynamicSegments = []
		//regex记录了动态的参数匹配
		const regex = pathToRegexp(path,dynamicSegments)
		//component是要渲染的组件
		const component = routeTable[path]
		//检测传入的路径是否符合某个条件		确定路径和显示的组件的匹配
		compileRoutes.push({
			component,
			regex,
			dynamicSegments
		})
##	Vue
##	对前端的认识
-	和美工设计打交道  实现页面效果	  
-	前端处于设计和后台的中间领域	服务器要知道	产品和交互也要知道
-	前端的未来
	-	有很多软件开始在浏览器中运行	浏览器的api会代替系统的sdk成为软件开发的标准
		随着h5的发展	浏览器运行的不再是简单的页面	而是复杂的web应用		
		未来是web时代	还是app时代	 仍然是一个难题
-	sdk就似乎软件开发工具包
	-	可以为某个程序的设计语言提供应用程序接口的api
	-	但是也可能和某种嵌入式系统通讯的负载硬件
	-	最开始的时候api的集合成为sdk		随着时间的的演化sdk成为了一个以api接口的输入  
		以另一种api的输出的中间件
	
-	动态路由的解析使用的函数库是path-to-regexp
-	dynamicSegments来记录得到的正则匹配的路径


##	vue组件之间的通信
##	vue-router
-	Vue.use()实际执行的是模块的install方法		**会把Vue实例传入进去**
-	插件的方法在Vue不引入的情况下是可以直接使用Vue的
	不需要import Vue from 'vue'
	引入vue的话		最后插件打包的时候体积会很大
-	let Vue 
	class vueRouter{
		static install(_Vue){
		Vue = _Vue
		Vue.mixin({
			beforeCreate(){
				Vue.prototype.$myrouter = 'string what you want'
			}
		})
	}
	}
	export default vueRouter
-	import vueRouter from './router'
	Vue.use(vueRouter)
	这样就可以直接使用{{myrouter}}
-	mixin的实现
-	路由的懒加载的效果
	-	component:()=>import('./xx/xx')
##	vue单页面原理的实现
-	
##	项目Login
-	遇到元素被其他元素的边框挡住的问题
	-	点击事件无法触发
		-	解决方案
			-	元素放入框中
-	element-ui	中message的引入出现了问题	和其他小的组件的引入的方式是不同的
	需要用到的是
	Vue.prototype.$message = Message
	而不是
	Vue.use(Message)
-	在vuex里面的状态管理的时候出现了问题
	-	import { mapState } from 'vuex'
		-	用来获取共享的状态数据赋值
		-	一般用来在computed里面来赋值新的数据来使用	**注意是新的数据赋值再来使用**
		-	数据赋值不可以是data里面已经存在的数据		
		-	例如
			-	computed:{
				...mapState({
					userName:(state)=>state.tab.userName
				})
			}
			-	这里的userName是新的数据	**不是data里面已经定义好的数据**
			-	这时候取到了vuex里面的数据自己就可以使用数据了		{{userName}}
			-	这是获取vuex里面的共享数据的方式
			-	那么接下来是改变vuex里面的共享状态的数据
-	改变vuex里面的共享的状态数据就是会用到
	-	this.$store.commit('fnName',val)
	-	其中val传入的是组件里面数据		这个提交的函数会到达vuex里面定义好的mutations里面的方法去
		改变vuex里面的共享的状态数据
-	prefix-icon  输入框前面的图标不可展示的问题
	-	直接在代码的属性框中输入数据值
-	用vuex来设置用户名称的时候	刷新的时候会数据消失
	-	那么用到了window.localStorage.setItem('userName',this.inpurUser)
	-	window.localStorage.getItem('userName')
	-	解决了数据消失的问题
##	vuei18n		语言国际化
-	
##	对象转换为数组
-	Object.values(obj)
##	日期格式化
-	new Date().getFullYear()
-	new Date().getMonth()
-	new Date().getDate()
##	使用less的时候把样式文件写错了
-	lang='less'		写成了    style='less'
##	父组件里面的样式影响了子组件的样式
-	父组件设置  line-height:160px
-	子组件的span 元素超出了div
##	a标签去除下划线
-	text-decoration:none
##	直接在js上面绑定事件监听很快
-	要在window.location=function(){}里面设置函数
##	display   opacity的区别就是
-	display:none
-	opacity:0
-	opactify		visibility:hidden元素还是会占据页面的空间
-	display是不会占据页面的空间的
-	opacity dispaly是会影响子元素的
-	visibility不会影响子元素
-	visibility 和 display 属性，自身的事件不会触发，而使用 opacity 属性，自身绑定的事件还是会触发的。
-	visibility 和 display 属性是不会影响其他元素触发事件的，而 opacity 属性 如果遮挡住其他元素，其他的元素
	就不会触发事件了
-	display-->不占据空间-->会影响子元素-->不影响其他元素-->会回流-->display 不仅不支持transition
	transition 要起作用，元素必须是已经渲染在页面上的元素
-	opacity-->会占据空间-->会影响子元素-->会影响其他元素-->不会回流
-	visibility-->会占据空间-->不会影响子元素-->不会影响其他元素-->不会回流
##	设置退出登录不会退的
-	组件里面使用beforeRouteEnter
-	boforeRouteEnter(to,from,next){
	if(sessionStorage.getItem('userName')){
		next(true)
	}else{
	(next=>{
		vm.$router.push('/')
	})
	}
}
-	配合sessionStorage来监督用户的登录状态
##	dialog位置放置不佳
-	样式设置出现问题
##	复制一个文件	修改变量名称导致文件结构出错误
##	数据库的搜索返回一个对象数据
-	取得对象数据的方式有所变化
-	起始取得数据的方式		results.name
-	但是正确的形式是		results[0].name才正确
##	字体加粗
-	font-weight:400
##	路由方面的展示
-	app.vue		只有一个main.vue


-	main.vue的布局


-	布局
	-	header    aside		main


	-	包含固定的组件header.vue			aside.vue


	-	main板块的布局用到是router-view来展示想要展示的内容


##	路由的配置

-	/main				来显示main组件


	-	main组件下面有一些组件来进行展示


		-	/		用来展示首页的内容


		-	home是main的children


		-	main里面含有<router-view>来展示效果


		-	一个组件里面的有一个<router-view>来展示		配置子路径children来展示内容

-	组件是复用的	只有刷新的时候会重载


-	一个页面就是main.vue
	-	包含	header.vue		main.vue		footer.vue
	-	
-	...mapState({
	count:(state)=>state.shop.num//count 是实例中不存在的		通过vuex获取state
})
-	...mapMutations({
	newFn:'mutationsFn'//newFn是不存在的		通过vuex来获取mutations函数
})


-	地区信息的插件		element-china-area-data

-	出现的问题		获取数据的时候

-	el-cascader	组件的获取数据的方式	自身的级联器中的获取数据的方法val

-	**区域码需要转换为汉字**
		
-	fn(val){
this.province = CodeToText(val[0])
this.city = CodeToText(val[1])
this.country = CodeToText(val[2])
}

-	fixed定位相对于窗口定位
	窗口滚动是不会移动的

-	图片路径动态传递出现的问题
	-	vue-cli项目文件下assets    static文件的区别
	-	assets文件项目编译时候		被webpack理解为模块依赖		只支持相对路径
	-	static目录下面的文件不会被webpack处理		是存放第三方文件的地方		必须使用绝对路径
		引用文件
	-	webpack的特性就是static放置的是不会变动的文件		assets放置的是可能变动的文件
	-	require方式来传入图片的地址
		-	vuex多模块文件的获取方式是
			-	this.$store.state.shop.shopData
			-	this.$store.state.tab.tabData
		-	动态引入图片路径的时候至少是需要三个部分的
			-	总的格式是		
				-	<img :src='require("../../"+item.url+".jpg")'>
				-	也就是说格式应该是至少包含三个部分的格式	这样才能完全引入图片的路径资源
				-	第一个格式是		../../		告诉webpack取得文件的相对路径是哪里
				-	第二个格式是		item.url		就是文件的字符串路径
				-	第三个格式是		'.jpg'			也就是图片的格式的获取
	-	import方法来引入图片
		-	import imgUrl from '../../assets/images/xx.jpg'
		-	<img src={imgUrl}>

-	商品总价的问题
	-	商品的价格是￥249		需要用到截取相应的数据字符串进行计算总价	
	-	最后传入sessionStorage		获取数据来展示


-	存储一个数组对象数据的时候				存储的时候先要使用JSON.stringify()来存储数据

-	取出数据使用的 时候记得还原数据			Object.parse()		还原数据

-	否则可能出现错误就是		数据遍历的时候		返回的格式是[Object,Object]的数据格式

	-	不可完成数据遍历获取

##	vue项目使用cookie
-	yarn add vue-cookie

-	beforeRouteEnter(to,from,next){}		里面的next()		方法是必须要调用的

-	import cookie from 'vue-cookies'
	Vue.use(cookie)
	
	this.$cookies.set('token',value[,expireTimes[,path[,doamin]]])
	this.$cookies.config(expireTimes[,path])
	this.$cookies.get('token')
	this.$cookies.remove('token')

-	检查cookie	 name是否存在
	-	this.$cookies.isKey('token')
-	获取所有的cookie  name 
	-	this.$cookies.keys()
-	设置cookie的过期时间
	-	this.$cookies.config('30d')
-	mysql里面的CRUD语句			使用${name}		进行CRUD
	-	'${name}'		'${password}'
	-	加上引号不然会出现		Unknown column 'q' in 'field list		这种类似的错误


-	加密字符串
-	npm install crypto-js
	-	import CryptoJS from "crypto-js"			vue组件内import
	-	加密
	-	var cipherText = CryptoJS.AES.encrypt(
		"my message",
		"secretkey123"
		).toString();
	-	解密
	-	var bytes = CryptoJS.AES.decrypt(cipherText, "secretkey123");
		var originalText = bytes.toString(CryptoJS.enc.Utf8);
		
	-	mymessage是加密的内容
	-	secretkey123是解密的密钥方式
##	国际化的时候遇到了项目的版本问题
-	vue-i18n的版本首先下载的是5.x		版本过低导致项目出错	但是下载vue-i18n之后
	项目顺利运行起来
-	然后就是使用$t函数进行	语言转换的时候出现的问题就是很愚蠢的就是
	-	$t()函数传入的参数可以是字符串		可以是一个普通参数
	-	错误认为只可以传入字符串		整了大半天
	-	yarn add vue-i18n@8
	-	自己配置zh.js   以及  en.js文件
	-	main.js里面使用到了i18n的组件
	-	使用涉及 的用法
		-	this.$i18n.locale	组件里面使用可以更改语言类型
		-	$t('string')		$t(parameter)
##	input输入框的边框的默认样式清除
-	outline:none
##	事件的绑定和传参
-	@focus			@blur
-	输入框有着焦点		
##	input框的双向数据绑定
-	v-model
-	ref
	-	this.refs.refName.xx
-	router-view必须是要被驱动才会被触发
##	keep-alive来缓存一些具体的组件的名字
-	可以设置一些属性来书写缓存具体的组件	注意是组件的名称
	-	也就是说是组件的name属性
	-	**include的属性是组件的name属性**
	-	组件自己设置一个自己的 name属性
		-	name:'componentName1'
	-	include='componentName1,componentName2'
-	keep-alive遇到多层嵌套路由会出现问题
	-	多层嵌套路由keep-alive只会嵌套第一层路由展示的信息	不会缓存第二层及以下的页面信息
	-	那么需要将内部的组件进行一个缓存的时候就需要将不需缓存的路由进行过滤删除的操作
		-	function deleUnuse(to){
			if(to.matched && to.matched.length > 2)
			{
				for(let i = 0;i < to.matched.length;i++){
					const element = to.matched[i]
					//element可以去匹配要删除的组件的name属性
					if(element.components.default.name === 'layout')
					{
						to.matched.splice(i,1)
						deleUnuse(to)
					}
				}
			}
		}
-	函数deleUnuse来对无用的组件进行删除的操作	多层嵌套的外层的组件删除的操作
-	尝试用路由来进行对应想要的组件缓存信息
	-	路由组件的属性增加一个属性是meta:{
		keepAlive:true//true代表的是缓存组件		false代表的是不缓存组件
	}
-	数据库的操作的时候	数据库名称是小写数据库名称		但是服务端书写的时候写成了大写的数据库名称
	耽误了一个半小时
	-	数据库的名称书写错误返回了502错误
	-	服务器收到了无效的响应		不意味上游服务器关闭(无响应网关/代理)	而是上游服务器和网关/代理使用不统一的协议交换数据
		意味一个或者两个机器不正确或者不完全编程
-	502返回码
	-	web服务器接收响应的http数据流	数据流包括状态编码	和其他有用的信息	
		502错误是客户端收到http状态编码  并且识别其为502错误
-	固定的502错误
	-	ISP出现了重大的设备故障/过载(网络服务供应商)		--》502
		-	互联网服务供应商
			-	接入服务
				-	用户接入互联网
			-	导航服务
				-	帮助用户在互联网中找到需要的信息
			-	信息服务
				-	建立数据服务系统	搜集 加工 存储信息	定期维护更新	通过网络向用户提供信息内容服务
	-	内部的互联网连接你的防火墙无法正常工作				--》502
-	调制解调器
	-	modem(猫)主要的功能是将数据的数字信号和模拟信号之间的转换	实现在电话线上的传输
	-	这种接入的方式	通常所说是拨号上网	主机通过**调制解调器**和电话线路与ISP网络服务器的**调制解调器**相连实现主机和网络服务器的连接
##	时间格式化
-	function getTime(){setInterval(fn,1000)}
	fn中含有fn2来格式时间		fn2(m){return m<10?"0"+m:m}
##	改变数据库中数据的类型
-	varchar		--> double
-	maxLength		-->input框的字数限制
-	**中文输入法状态下输入的回车键，检测的 keyCode为 229 而不是13**
-	@input一边输入		一边进行一些逻辑运算		**比如字数限制**
	-	字数限制用v-model拿取input框的数据	
-	**flex布局小技巧之让某个子元素靠右或靠左显示**
	-	margin-left: auto		元素向右边靠
	-	margin-right: auto		元素向左边靠
-	span元素的文字溢出问题
	-	overflow:hidden;width:200px;(限制span元素的宽度);white-space:nowrap;(span元素不可换行)
		text-overflow:ellipsis(省略符号表示溢出元素)
-	elementui		消息提示	弹框提示	**局部引入方法的时候**		需要在vue原型上面来
	局部引入方法
	-	Vue.prototype.$alert = MessageBox.alert
		Vue.prototype.$notify = Notification
	-	这样使用方法才不会报错
##	express中url参数动态获取
-	
##	数据库操作就是不能使用一些保留字段index  
-	使用之后	会发生识别错误	耗时4小时
-	**字段的使用尽量避开保留字段**
##	选中不是不是最后一个元素的其他子元素
-	father:not(:last-child)
##	首屏优化
-	图片压缩
	-	cnpm install --save-dev  image-webpack-loader   
	-	vue.config.js
		-	config.module
			.rule('images')
			.test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
			.use('image-webpack-loader')
			.loader('image-webpack-loader')
			.options({
				bypassOnDebug: true
			}) 
			.end()
-	overflow-x:none		overflow-y:none		
	outline:none//鼠标聚焦的时候外边框不出现
##	拖拽代办事项时候的坑位
-	首先是添加事件
	-	数组里面放置对象数据的时候
		-	var obj = {}
				obj.para = xx
			this.arr.push(obj)
		-	sessionStorage里面放置数据的时候放置的是json格式的数据		JSON.stringify()
		-	去除JSON格式的数据的时候		将数据转换为		js对象		JSON.parse()
-	拖拽事件元素的变化
	-	一个div里面由ul			ul里面有li			拖拽的数据可能会碰到的数据有div   ul  li这三种元素
		这三种节点碰到的时候 		分不同的情况来区分		最后都是找到ul元素来appendChild
	-	遇到li 
		-	**e.target.parentNode**.parentNode.appendChild()
	-	遇到ul
		-	e.target.parentNode.appendChild()
	-	遇到div
		-	e.target.**children**[ulindex].appendChild()
-	删除事件
	-	取出事件指定的id
	-	var ulId = document.getElementById('ulId')
	-	ulId.removeChild(ulId.**childNodes**[0])
	-	在原有的数据里面寻找需要删除的数据元素
	-	这种数据对象更改的时候	需要双向数据绑定的方法
		-	this.$set(this.arr,newArr)
		-	如果**直接赋值是不会成功的**
	-	可能this.$set之后的 数据没有怎么改变		还是要newArr来改变其他数据
##	拖拽事件元素
-	被拖拽元素在上方		allowdrop(e)
	-	e.preventDefault()
-	被拖拽元素被放置		drop(e)
	-	e.preventDefault()
		var data = 	e.dataTransfer.getData("Text")
		e.target.appendChild(document.getElementById(data))
-	被拖放的元素		@drag="drag($event)"
	-	e.dataTransfer.setData("Text",e.target.id)



