##	computed:{}//通过计算动态产生一个结果数据	包装getter	**依赖数据**发生改变的时候 就会再次调用
	-	计算属性	只用getter	就是一个函数
	-	计算属性	用getter/setter	就是一个对象
	-	计算属性存在缓存	多次读取只执行一次getter计算
	-	属性变换的时候	回调函数自动调用	在函数内部进行计算
	-	因为computed:{xxx:function(){return yyy}}
	-	那么可以用v-model来绑定computed返回的数据
	-	v-model='xxx'
##	descriptor是配置对象==》属性描述符
-	属性描述符对应了两个东西就是	
	-	**数据描述符和存取描述符**
-	所有vue控制的回调函数的this都是vm或者组件对象
-	挂载节点的方法
	-	new Vue({}).$mount('#app')//这样就可以**不用写el配置**
##  修饰符
-	事件修饰符
	-	阻止事件的默认行为(prevent)		.prevent
	-	比如a标签的默认行为是点击跳转	那么就阻止默认行为
	-	`<a href="" @click.prevent="test4">study</a>`
	-	停止事件冒泡(stop)		.stop
	-	`@click.stop="test5"`
	-	.once事件就是第一次触发之后	事件就被销毁了
	-	`@click.once="test6"`
-	按键修饰符
	-	`<input type="text" v-model="msg" @keyup.enter="test7"/>`
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
不像其它只能对原生的 DOM 事件起作用的修饰符，.once 修饰符还能被用到自定义的组件事件上。

##  使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。

-	webpack官方建议局部安装		不要全局安装	因为不同的项目可以基于不同的webpack版本来打包项目		那么webpack全局安装会影响项目的开发		建议不同的项目就用对应需求需要用到的webpack版本打包文件
-	async	await语法远端获取数据的时候就是要加入对应的配置
	-	npm i runtime-corejs2	这是下载的依赖包
		-	corejs处理了async		await语法不认识的问题	corejs处理了一些新语法
	-	还要再webpack.config.js里面的module模块去添加响应的配置
		-	options:{presets:[['@babel/preset-env',{
			useBuiltIns:'usage',
			'corejs':2
		}]]}
-	**将伪数组转换为真数组	[].slice.call(lis)**
-	const lis = document.getElementsByTagName('li')//lis是伪数组
###	数据劫持
-	是vue中实现数据绑定的一种技术
-	基本思想:通过defineProperty()监视data中所有属性数据的变化	一旦变化就去更新界面
-	dep对象	
	-	在给data中的属性添加监视/劫持前创建
	-	与**data中的属性**	一一对应	就是data中属性的个数
-	watcher对象
	-	对模板中的某个节点实现初始化更新后创建
	-	与**模板中表达式**一一对应	(插值/一般指令)
-	dep和watcher是相互关联的	就是说属性和标签是相互关联的
	-	订阅者 watcher对象	包含更新对应节点的回调函数
	-	发布者 observer对象	包含了监视data数据的setter
	-	订阅器 dep对象	每个属性的setter都引用对应的dep
## for in遍历数组的毛病
    1.index索引为字符串型数字，不能直接进行几何运算
    2.遍历顺序有可能不是按照实际数组的内部顺序
    3.使用for in会遍历数组所有的可枚举属性，包括原型。例如原型方法method和name属性
    所以for in更适合遍历对象，不要使用for in遍历数组
-   for of遍历的只是数组内的元素，而不包括数组的原型属性method和索引name
-   for in 可以遍历到myObject的原型方法method,如果不想遍历原型方法和属性的话，可以在循环内部判断一下,hasOwnPropery方法可以判断某属性是否是该对象的实例属性
##	每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置**数据监听、编译模板、将实例挂载到 DOM**并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。
-	Vue.js 使用了**基于 HTML 的模板语法**，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析
-	v-on 事件	v-on:xx		@:		v-bind	属性   :xx		v-bind:xx
-	操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是 attribute，所以我们可以用 v-bind 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 **v-bind 用于 class 和 style 时**，Vue.js 做了专门的增强。**表达式结果的类型除了字符串之外，还可以是对象或数组。**
-	<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
	></div>
-	<div v-bind:class="classObject"></div>
	data: {
	classObject: {
		active: true,
		'text-danger': false
	}
	}
-	我们也可以在这里绑定一个返回对象的计算属性
-	我们可以把一个数组传给 v-bind:class，以应用一个 class 列表：
-	v-bind:style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。
-	直接绑定到一个样式对象通常更好，这会让模板更清晰：
	<div v-bind:style="styleObject"></div>
	data: {
	styleObject: {
		color: 'red',
		fontSize: '13px'
	}
	}
-	<h1 v-if='isOK'>if</h1>
	<h2 v-else>else</h2>
-	因为 v-if 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 <template> 元素当做不可见的包裹元素，并在上面使用 v-if。最终的渲染结果将不包含 <template> 元素。
-	<template v-if="ok">
	<h1>Title</h1>
	<p>Paragraph 1</p>
	<p>Paragraph 2</p>
	</template>
-	v-if   v-else-if 	v-else
-	<template v-if="loginType === 'username'">
	<label>Username</label>
	<input placeholder="Enter your username">
	</template>
	<template v-else>
	<label>Email</label>
	<input placeholder="Enter your email address">
	</template>
-	那么在上面的代码中切换 loginType 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，<input> 不会被替换掉——仅仅是替换了它的 placeholder。
-	这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 **key** attribute 即可：
-	<input placeholder="Enter your username" key="username-input">
-	现在，每次切换时，输入框都将被重新渲染。
-	注意，**v-show 不支持 <template> 元素**，也不支持 v-else。但是v-if支持
##	不推荐同时使用 v-if 和 v-for。请查阅风格指南以获取更多信息。
-	当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级，这意味着 v-if 将分别重复运行于每个 v-for 循环中
所以，不推荐v-if和v-for同时使用		不要再同一个标签里面使用
-	可以在父元素用v-if 		子元素用v-for 
-	或者元素标签用:key=''
-	我们可以用 v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。
-	<ul>
	<li v-for="item in items" :key="item.id">
	{{item.text}}
	</li>
	</ul>
-	在 v-for 块中，我们可以访问所有父作用域的 property。v-for 还支持一个可选的第二个参数，即当前项的索引。
-	你也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法：
	<div v-for="item of items"></div>
-	v-for遍历[{},{}]		(item,index) of items		item.msg 	
-	v-for遍历	{}		(value,name,index) of items
-	一般情况就是拿一个值就算了		所以value在前面
-	当 Vue 正在更新使用 v-for 渲染的元素列表时，**它默认使用“就地更新”的策略**。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。这个类似 Vue 1.x 的 track-by="$index"。
-	不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值
-	<li v-for='item in num'>	//num的计算属性返回的一个数组	
	{{item}}
	</li>
	computed:{
		num:function(){
			return this.items.filter((item)=>{
				return item%2 === 0
			})
		}
	}//item在一个计算属性里面		但是计算属性返回的是一个数组		那么就是正确的
-	遍历二维数组		**用methods**		而不是用computed
-	<ul v-for='item1 in item1s'>		item1是一维数组		item1s是二维数组
	<li v-for='item2 in bianli(item1)'>{{item2}}}</li>		//bianli1()是一个函数
	</ul>
	methods:{
		bianli1:function(parameter){
			return parameter.filter((item)=>{
				return item%2 === 0
			})
		}
	}//遍历二维数组		
	//二维数组放在父元素里面
	//二维数组的子元素被当成参数放入函数		子元素遍历这个函数返回的符合条件的数据
-	v-for 也可以接受整数。在这种情况下，它会把模板重复对应次数。
	<div>
	<span v-for="item in 10">{{item}}</span>//12345678910
	</div>
-	类似于 v-if，你也可以利用带有 v-for 的 <template> 来循环渲染一段包含多个元素的内容。
	-	当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。当你只想为部分项渲染节点时，这种优先级的机制会十分有用，如下：
	<li v-for="todo in todos" v-if="!todo.isComplete">
	{{ todo }}
	</li>
 -  2.2.0+ 的版本里，当在组件上使用 v-for 时，**key 现在是必须的**。
    然而，任何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。**为了把迭代数据传递到组件里，我们要使用 props**：
-   ul里面只有li 
-   <ul>
    <li 
        is='M=myComponent'//避开一些潜在的浏览器解析错误        is来
        v-for="(item,index) in items"
        :item="item.title"
        :key="index"
        v-on:remove='items.splice(index,1)'
    ></li>
    </ul>
-   <form v-on:submit.prevent='add'>
    </form>
-   for 属性规定 label 与**哪个表单元素id绑定**。
-   <label for='input_id'></label>
-   <input v-model="newTodoText"></input>
-   data里面的数据和v-model里面的数据绑定
-   Vue.component('myComponent',
    template:'<button v-on:click="$emit(\'remove\')">Remove</button>'
    props:['title']//props拿去v-for循环数据的值属性)
-   event.target.tagName        拿到目标标签的值        是什么样的标签
-   <button v-on:click='alertU("oook")'>alertU</button>
-   有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法：
-   event.stopPropagation()     event.preventDefault()
-   passive
    一个布尔值，如果true，表示由 指定的函数listener永远不会调用 preventDefault()。如果被动侦听器确实调用了preventDefault()，则用户代理除了生成控制台警告之外什么也不做。
-   <input v-on:keyup.enter='submit'>//打出enter键的时候来submit
-   为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名：
    .enter
    .tab
    .delete (捕获“删除”和“退格”键)
    .esc
    .space
    .up
    .down
    .left
    .right
-   可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。
    .ctrl
    .alt
    .shift
    .meta
-   ctrl--->17
##  .exact 修饰符
-    .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。

    <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
    <button v-on:click.ctrl="onClick">A</button>

    <!-- 有且只有 Ctrl 被按下的时候才触发 -->
    <button v-on:click.ctrl.exact="onCtrlClick">A</button>

    <!-- 没有任何系统修饰符被按下的时候才触发 -->
    <button v-on:click.exact="onClick">A</button>

-   <!-- Alt + C -->
    <input v-on:keyup.alt.67="clear">

    <!-- Ctrl + Click -->
    <div v-on:click.ctrl="doSomething">Do something</div>

-   **keyCode 的事件用法已经被废弃**了并可能不会被最新的浏览器支持。
##  你还可以通过全局 config.keyCodes 对象自定义按键修饰符别名：
    // 可以使用 `v-on:keyup.f1`
    Vue.config.keyCodes.f1 = 112
##  v-on 的好处
-   <div v-on:click.ctrl.exact='fn1'></div>
-   扫一眼知道html就知道定位js事件的绑定函数
-   **不用在js里面手动绑定事件**       vm代码是**存粹逻辑**的      **和dom是完全解耦的**   方便测试
-   当一个vm        destroy的时候会删除所有的事件处理器
##  双向数据绑定        v-model
-   但 v-model 本质上不过是**语法糖**。它负责**监听用户的输入事件以更新数据**，并对一些极端场景进行一些特殊处理。
-   **v-model 会忽略所有表单元素**的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源
##  绑定影响变化
-  input的id属性           和          label的for属性
-   iframe的name属性        &&      a的target属性绑定影响变化

-   **复选框v-model=''        para的可能性是[],{},选中之后会放进响应的数据结构**
-   <input v-model='checked' value='zhuangRuValue' id='label' type='checkbox'>//checked是data状态数据里面的数据      结构可以是[]  {}    或者基本数据类型
-   value是装入数据的值     id方便label数据(for)    v-model(绑定的数据结构把value放进去)
-   selection中的option         value是装入数据的值
-   <option value='ok'>OK</option>
-   option用一个数组来遍历 v-for='item in items'    父元素来绑定数据里面的值 v-model='key'
##	<input type='checkbox' v-model='toggle' true-value='yes' false-value='no'>
-	<select v-model='selected'><option :value='{name:"rmf"}'></select>
##	.lazy
-	在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步：
	<!-- 在“change”时而非“input”时更新 -->
	<input v-model.lazy='msg'>//双向数据绑定	还有就是不是持续输入时时刻改变	而是类似于防抖改变
##	.number
-	如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：
	<input v-model.number='age' type='number'>	
##	.trim
-	<input v-model.trim='msg'>
##	组件		这是组件全局注册的方式
-	Vue.component('myok',{
		data:function(){
			return {
				count:0
			}
		},
		template:'<p v-on:click='count++'>click {{count}} times</p>'
	})
-	自定义组件最好不要带有component
##	每个组件都会各自独立维护它的 count。因为你每用一次组件，就会有一个它的**新实例被创建。**
-	取而代之的是，一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：
	data: function () {
	return {
		count: 0}}
-	Prop 是你可以在组件上**注册的一些自定义 attribute**。当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个 property。
-	用props来定义自定义组件的属性		props用数组来承接属性['name','age']
##	指定事件change
-	父组件	v-on:functionName='datalimian += $event'
-	子组件	v-on:click='$emit("functionName",para)'
-	para用$event来访问
##	is来改变组件性质
-	<table><tr is='rmf2'></tr></table>
-	你给予组件的名字可能依赖于你打算拿它来做什么。当直接在 DOM 中使用一个组件 (而不是在字符串模板或单文件组件) 的时候，我们强烈推荐遵循 W3C 规范中的**自定义组件名 (字母全小写且必须包含一个连字符)**。这会帮助你避免和当前以及未来的 HTML 元素相冲突。
##	全局注册往往是不够理想的。比如，如果你使用一个像 webpack 这样的构建系统，全局注册所有的组件意味着即便你已经不再使用一个组件了，它仍然会被包含在你最终的构建结果中。这造成了用户下载的 JavaScript 的无谓的增加。
	在这些情况下，你可以通过一个普通的 JavaScript 对象来定义组件：
	var ComponentA = { /* ... */ }
	var ComponentB = { /* ... */ }
-	new Vue({
		el: '#app',
		components: {
			'component-a': ComponentA,
			'component-b': ComponentB
		}
		})
-	注意局部注册的组件在其子组件中不可用。例如，如果你希望 ComponentA 在 ComponentB 中可用，
-	var ComponentA = { /* ... */ }
	var ComponentB = {
	components: {
		'component-a': ComponentA
	},
	// ...
	}
-	<input @keydown.enter='search'>//enter键被按下的时候
-	HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase **(驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名**
##	porp		使用数组和对象的形式来设置prop的属性值		来动态绑定data里面的数据	
-	到这里，我们只看到了以字符串数组形式列出的 prop：
	props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
-	通常你希望每个 prop 都有指定的值类型。这时，你可以以对象形式列出 prop，这些 property 的名称和值分别是 prop 各自的名称和类型：
-	props: {
		title: String,
		likes: Number,
		isPublished: Boolean,
		commentIds: Array,
		author: Object,
		callback: Function,}
-	<!-- 包含该 prop 没有值的情况在内，都意味着 `true`。-->
##	<blog-post is-published></blog-post>//boolean没有值的情况是true
-	所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。
##	传入一个对象的所有 property		传入一个对象直接就是v-bind=objName
-	如果你想要将一个对象的所有 property 都作为 prop 传入，你可以使用不带参数的 v-bind (取代 v-bind:prop-name)。
-	<blog-post v-bind="post"></blog-post>
-	props:{
	propA:{type:Number,default:100}
	propB:{type:String,required:true}
}
##	对于绝大多数 attribute 来说，从外部提供给组件的值会替换掉组件内部设置好的值。所以如果传入 type="text" 就会替换掉 type="date" 并把它破坏！庆幸的是，class 和 style attribute 会稍微智能一些，即两边的值会被合并起来，从而得到最终的值：form-control date-picker-theme-dark。
## inheritAttrs:false		$attrs
-	组件的**根元素不继承没有在props里面声明的属性**
-	比如一个组件
-	Vue.component('rmf-rmf1',{
	props:['prop1','prop2'],
	template:`<div><p v-bind='$attrs'>test inheritAttrs  attrs</p></div>`
	})
-	定义好的组件的使用
-	<rmf-rmf1
	inheritAttrs:false,//表示组件根元素不使用未注册的属性	**在使用定义的组件的时候使用**
	v-bind:a='a'
	placeholder='enter msg'
	></rmf-rmf1>		//a 和 placeholder是组件里面没用props声明的属性
-						//那么组件里面p标签可以用$attrs来使用这些属性		用v-bind='$attrs'	在template里面去使用
##	vue里面的事件
-	this.$emit('myEvent')		
-	v-on:my-event=''		这样是错误不可生效的
-	v-on 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 **HTML 是大小写不敏感的**)，所以 v-on:myEvent 将会变成 v-on:myevent——导致 myEvent 不可能被监听到。
-	**始终使用 kebab-case 的事件名**
##	真正的双向绑定会带来维护上的问题，因为子组件可以变更父组件，
-	父组件是使用 props 传递数据给子组件，但如果**子组件要把数据传递回去**，就需要使用自定义事件！
	-	我们可以使用 **v-on 绑定自定义事件**, 每个 Vue 实例都实现了事件接口(Events interface)，即：
		使用 $on(eventName) **监听事件**
		使用 $emit(eventName) **触发事件**
	-	Vue.component('rmf-rmf1',{
		data: function(){//data是一个函数	每个实例可以返回一个独立的拷贝		data是一个对象会影响其他实例
				return {
					count:0//组件之间的数据是相互不影响的	function(){return{}}
				}
			},
		methods:{
			incrementHandler:function(){
				this.count++
				this.$emit('increment')//指定属性名来触发事件
			}
		}
		})
	-	使用组件
	-	<rmf-rmf1 v-on:increment='increment-father'></rmf-rmf1>
	-	//increment是自定义组件**新加的属性**是自定义事件来触发vue实例上面的方法increment-father
	-	this指向很重要
##	组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件。
-	Vue.component('rmf-rmf1',{
	template:`
	<div>
	<input
		:value='value'
		@input="$emit('input',$event.target.value)"//emit分发input 事件		带上input框的值value	input是分发的事件类型
	 />
	</div>
	`,
	props:['value']
	})
-	使用组件
-	<rmf-rmf1 v-model='num'></rmf-rmf1>//num是vm上的data中的一个属性	v-model会自动绑定到名为value的prop名为input的事件
-	**使用v-model的时候**		记得props用上value		input框用上:value='value'	@input=$emit('input',$event.target.value)
##	由于 v-model 默认传的是 value，不是 checked，所以对于复选框或者单选框的组件时，我们需要使用 model 选项，**model 选项可以指定当前的事件类型和传入的 props。**
-	Vue.component('rmf-rmf1',{
	model:{
		prop:'checked',//用冒号传递属性值		事件类型		事件传入 的属性值
		event:'change'
	},
	template:`
	<input
	type='checkbox'//赋值号和冒号的使用			template里面用赋值号
	v-on:change='$emit('change',$event.target.value)'//change是分发的事件类型是change		$event.target.value		事件的属性值
	/>
	`
})
##	<base-input v-on:focus.native="onFocus"></base-input>
-	自定义组件的重构可能会有外层标签的包裹		比如包裹了一层label标签
-	<label>
	{{ label }}
	<input
		v-bind="$attrs"
		v-bind:value="value"
		v-on:input="$emit('input', $event.target.value)"
	/>
	</label>
-	那么用到.native标签上面的原生事件的时候父级的 .native 监听器将**静默失败**。它**不会产生任何报错**，但是 onFocus 处理函数**不会如你预期地被调用。**
-	为了解决这个问题，Vue 提供了一个 **$listeners property**，它是一个对象，**里面包含了作用在这个组件上的所有监听器**。
-	有了这个 $listeners property，你就可以配合 **v-on="$listeners"** 将**所有的事件监听器指向这个组件的某个特定的子元素**
-	{
	focus: function (event) { /* ... */ }
	input: function (value) { /* ... */ },
	}
-	input框里面所有的原生监听事件
-	computed: {
    inputListeners: function () {
      **var vm = this**		//vm指向的是computed属性
      // `Object.assign` 将所有的对象合并为一个新对象
      return **Object.assign**({},
        // 我们从**父级添加所有的监听器**
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
-	<input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
    />//记得模板元素里面绑定computed属性		计算属性名称
-	记住的要点就是Object.assign({},this.$listeners,{input:function(evnet){vm.$emit('input',evnet.target.value)}})
-	Object.assign()//来把所有对象合并为一个新对象	第一个参数给定一个初始值{}	
-	第二个参数在父级挂载所有的监听器		用this而不是vm	this指向的是所有的Object.assign	this.$listeners
-	第三个参数是一个返回的对象		里面包含了分发的事件		
-	{input:function(event){vm.emit('input',event.target.value)}}
-	<base-com v-bind:prop1.sync='data1'><base-com>//加上sync就会	子组件的变化不会影响父组件	但是父组件的data变化会影响子组件
-	注意带有 .sync 修饰符的 v-bind **不能和表达式一起使用** (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)	
-	当我们用一个对象同时**设置多个 prop 的时候**，也可以将这个 **.sync 修饰符和 v-bind 配合使用**
-	<text-document v-bind.sync="doc"></text-document>//doc是一个对象	
-	v-bind可以绑定多个也可以一个		v-model只可以一个
-	将 v-bind.sync **用在一个字面量的对象上**，例如 v-bind.sync=”{ title: doc.title }”，是无法正常工作的，因为在解析一个像这样的复杂表达式的时候，有很多边缘情况需要考虑。
##	插槽	
-	插槽内可以包含任何模板代码，包括 HTML
-	<navigation-link> 的模板中可能会写为：
	<a
	v-bind:href="url"
	class="nav-link"
	>
	<slot></slot>
	</a>
-	<navigation-link url="/profile">
	Your Profile
	</navigation-link>
-	<slot></slot> 将会被替换为“Your Profile”
-	如果 <navigation-link> 的 template 中**没有包含一个 <slot> 元素**，则该组件起始标签和结束标签之间的任何内容都会被抛弃。
-	当你想在一个插槽中使用数据时
-	该插槽跟模板的其它地方一样可以访问相同的实例 property (也就是相同的“作用域”)，而**不能访问 <navigation-link> 的作用域**。例如 url 是访问不到的
-	**父级模板里的所有内容都是在父级作用域中编译的**；子模板里的所有内容都是在子作用域中编译的。
-	有时为一个插槽设置具体的后备 (也就是**默认的**) 内容是很有用的，它**只会在没有提供内容的时候被渲染**。
-	 <slot>Submit</slot>//Submit在没有内容的时候默认显示
##	具名插槽		name
-	<slot> 元素有一个特殊的 attribute：name。这个 attribute 可以用来定义额外的插槽
-	<slot name="header"></slot>
-	<slot name="footer"></slot>
-	<slot name="default"></slot>
-	一个不带 name 的 <slot> 出口会带有隐含的名字“default”
-	在**向具名插槽提供内容**的时候，我们可以在一个 <template> 元素上使用 v-slot 指令，并以 **v-slot 的参数的形式提供其名称**
-	 <template v-slot:header>//header是name 的属性值
		<h1>Here might be a page title</h1>
	</template>
-	任何**没有被包裹在带有 v-slot** 的 <template> 中的内容都会被视为**默认插槽**的内容
-	 <template v-slot:default>
		...
	</template>
-	明确了default插槽的内容
##	有时让**插槽内容能够访问子组件**中才有的数据是很有用的。
-	为了让 user 在父级的插槽内容中可用，我们可以**将 user 作为 <slot> 元素的一个 attribute 绑定上去**
-	<slot v-bind:user='user'>{{user.firstName}}</slot>
-	绑定在 <slot> 元素上的 attribute 被称为**插槽 prop**	user是一个插槽属性
-	现在在父级作用域中，我们可以使用带值的 **v-slot 来定义我们提供的插槽 prop 的名字**
-	<template v-slot:default="slotProps">//slitProps里面是所有的插槽prop的总称		包含所有prop	用.来访问prop
    {{ slotProps.user.firstName }}
	</template>
-	v-slot:header='headerProps'		//header是slot的名字name
-	**当被提供的内容只有默认插槽时**，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上
-	<current-user v-slot:default="slotProps">
	{{ slotProps.user.firstName }}
	</current-user>
-	注意**默认插槽的缩写语法不能和具名插槽混用**，因为它会导致作用域不明确
-	<template v-slot:slotName='slotProp'></template>
-	v-slot:插槽的名字='插槽的所有属性'
##	解构插槽prop
-	可以使用 ES2015 解构来传入具体的插槽 prop，如下：
-	<current-user v-slot="{ user }">		//v-slot='xx'---》传入插槽要使用的属性
	{{ user.firstName }}
	</current-user>
-	<current-user v-slot='{user:person}'>		//user被重命名了	同样开启了 prop 重命名等其它可能
	{{person.firstName}}
	</current-user>
-	你甚至可以**定义后备内容**，用于插槽 prop 是 undefined 的情形
-	<current-user v-slot='{user=  {firstName:"rmf"}}'>	//用赋值号
-	当然在template里面slot绑定了user属性才可以这传入		解构传入	
##	定义动态的插槽名
-	<base-layout>
	<template v-slot:[dynamicSlotName]>
		...
	</template>
	</base-layout>
-	**v-slot 也有缩写**，即把参数之前的所有内容 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被重写为 **#header**
-	<template #header><h1>okokrmf</h1></template>
-	你希望使用缩写的话，你必须始终以**明确插槽名取而代之**：
	<current-user #default="{ user }">	//prop的解构
	{{ user.firstName }}
	</current-user>
-	user是default插槽上面绑定的参数		v-bind:user='user'
##	动态组件
-	我们更希望那些标签的组件实例能够被在它们第**一次被创建的时候缓存下来**。为了解决这个问题，我们可以用一个 <keep-alive> 元素将其动态组件包裹起来。<keep-alive></keep-alive>
-	<!-- 失活的组件将会被缓存！-->
	<keep-alive>
	<component v-bind:is="currentTabComponent"></component>
	</keep-alive>
##	动态组件		异步组件
##	访问根实例
-	在每个 new Vue 实例的子组件中，其根实例可以通过 **$root** property 进行访问。
-	this.$root.para		this.$root.fn()		this.$root.computedPara
-	$parent property 可以用来从一个子组件访问父组件的实例
##	访问子组件实例或子元素
-	通过 ref 这个 attribute 为子组件赋予一个 ID 引用
-	<base-input ref="usernameInput"></base-input>
-	现在在你已经定义了这个 ref 的组件里，你可以使用：
	this.$refs.usernameInput
	来访问这个 <base-input> 实例，以便不时之需
-	父级元素可以用this.$refs来访问想访问的ref的属性
-	$refs **只会在组件渲染完成之后生效**，并且它们不是响应式的。这仅作为一个**用于直接操作子组件的“逃生舱”**——你应该**避免在模板或计算属性**中访问 $refs。
##	依赖注入
-	使用 **$parent** property 无法很好的扩展到更深层级的嵌套组件上
-	依赖注入的用武之地，它用到了两个新的实例选项：**provide 和 inject**
-	provide 选项允许我们指定我们想要提供给后代组件的数据/方法
-	provide: function () {
	return {
		getMap: this.getMap
	}
	}
-	然后在**任何后代组件**里，我们都可以使用 **inject** 选项来接收指定的我们想要添加在这个实例上的 property
-	inject: ['getMap']
-	这个用法可以让我们在任意后代组件中访问 getMap
-	你可以把**依赖注入看作一部分“大范围有效的 prop”**
-	**祖先组件不需要知道哪些后代组件使用它提供的 property**
	**后代组件不需要知道被注入的 property 来自哪里**
-	依赖注入还是**有负面影响**的。它将你**应用程序中的组件与它们当前的组织方式耦合起来**，使重构变得更加困难。同时**所提供的 property 是非响应式的。**
-	mounted: function () {
	this.picker = new Pikaday({
		field: this.$refs.input,
		format: 'YYYY-MM-DD'
	})
	},//它需要在这个组件**实例中保存这个 picker**，如果**可以的话最好只有生命周期钩子可以访问到它**
	beforeDestroy: function () {
	this.picker.destroy()
	}//我们的**建立代码独立于我们的清理代码**，这使得我们比较**难于程序化地清理**我们建立的所有东西。
-	mounted: function () {
	var picker = new Pikaday({
		field: this.$refs.input,
		format: 'YYYY-MM-DD'
	})
	this.$once('hook:beforeDestroy', function () {
		picker.destroy()
	})
	}
##	通过 $on(eventName, eventHandler) 侦听一个事件
	通过 $once(eventName, eventHandler) 一次性侦听一个事件
	通过 $off(eventName, eventHandler) 停止侦听一个事件
##	两个组件称为 A 和 B。模块系统发现它需要 A，但是首先 A 依赖 B，但是 B 又依赖 A，但是 A 又依赖 B，如此往复。这变成了一个循环，不知道如何不经过其中一个组件而完全解析出另一个组件。为了解决这个问题，我们需要给模块系统一个点，在那里“A 反正是需要 B 的，但是我们不需要先解析 B。
-	<tree-folder> 组件设为了那个点。我们知道那个产生悖论的子组件是 <tree-folder-contents> 组件，所以我们会等到生命周期钩子 beforeCreate 时去注册它：
-	beforeCreate: function () {
  this.$options.components.TreeFolderContents = require('./tree-folder-contents.vue').default
}
-	当 **inline-template** 这个特殊的 attribute 出现在一个子组件上时，**这个组件将会使用其里面的内容作为模板**，而不是将其作为被分发的内容。这使得模板的撰写工作更加灵活。
-	<my-component inline-template>
	...
	</my-component>
-	注意首先是包含一个根元素
##	通过 v-once 创建低开销的静态组件
-	根元素上添加 v-once attribute 以**确保这些内容只计算一次然后缓存起来**
##	混入
-	混入 (mixin) 提供了一种非常灵活的方式，来**分发 Vue 组件中的可复用功能。**一个混入对象可以包含任意组件选项
-	var myMixin = {}
-	组件里面引入myMixix			mixins:[myMixin]
-	当组件和混入对象含有**同名选项**时，这些选项将以恰当的方式进行“合并”。发生冲突时以**组件数据优先**。
-	console.log(this.$data)
-	**同名钩子函数将合并为一个数组**，因此都将被调用。另外，**混入对象的钩子将在组件自身钩子之前调用**
-	全局混入
-	Vue.mixin({})
-	使用全局混入，因为它会**影响每个单独创建的 Vue 实例 (包括第三方组件)**
-	自定义选项将使用默认策略，即**简单地覆盖已有值**
-	Vue.mixin({var myOption = this.$options.vueOption})
-	想让**自定义选项以自定义逻辑合并**，可以向 Vue.config.optionMergeStrategies 添加一个函数：
-	Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
	// 返回合并后的值
	}
-	var strategies = Vue.config.optionMergeStrategies
	strategies.myOption = strategies.methods//可以使用与 **methods 相同的合并策略：**
##	自定义指令
-	全局指令
-	Vue.directive('focus',{inserted:function(el){el.focus()}})
-	局部指令
-	directives:{focus:{inserted:function(el){el.focus()}}}
-	<input v-focus>
##	一个指令定义对象可以提供如下几个钩子函数 (均为可选)：
-	bind：**只调用一次**，**指令第一次绑定到元素时调用**。在这里可以进行一次性的初始化设置。
-	inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
-	update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
-	componentUpdated：**指令所在组件的 VNode 及其子 VNode 全部更新后调用**。
-	unbind：只调用一次，指令与元素解绑时调用。
-	**指令钩子函数会被传入以下参数**：
	el：指令所绑定的元素，可以用来直接操作 DOM。
	binding：一个对象，包含以下 property：
		name：指令名，不包括 v- 前缀。
		value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
		oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
		expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
		arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
		modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
	vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
	oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
-	指令的层次关系		
-	指令--》钩子函数--》钩子函数参数(el,binding,vnode,oldVnode)
-	Vue.directive('myDirective',{
	bind:function(el,binding,vnode){
		var s = JSON.stringify
		el.innerHTML='name:'+s(binding.name)
	}
	})
-	如果**指令需要多个值**，可以传入一个 JavaScript 对象字面量。记住，指令函数能够接受所有合法的 JavaScript 表达式。
-	<div v-demo="{ color: 'white', text: 'hello!' }"></div>
-	bind:function(el,binding){console.log(binding.value.color)}
-	return createElement('h1', this.blogTitle)
-	有一点要注意：**正如 v-bind:class 和 v-bind:style 在模板语法中会被特别对待一样**，它们在 VNode 数据对象中也有对应的顶层字段。
##	VNode约束
-	组件树中的所有 VNode 必须是唯一的
-	var myParagraphVNode = createElement('p', 'hi')
	return createElement('div', [
		// 错误 - 重复的 VNode
		myParagraphVNode, myParagraphVNode
	])
-	如果你真的**需要重复很多次的元素/组件**，你可以使用工厂函数来实现。例如，下面这渲染函数用完全合法的方式渲染了 20 个相同的段落：
-	return createElement('div',
	Array.apply(null,{length:20}).map(function(){
		return createElement('p','h1')
	})
	)
##	渲染函数
-	**渲染函数中没有与 v-model 的直接对应**——你必须自己实现相应的逻辑
-	render:function(createElement){var self = this ;return createElement('input',{
	domProps:{value:self.value},on:{input:function(event){self.$emit('input',event.target.value)}}
	})}
-	对于 .passive、.capture 和 .once 这些**事件修饰符**，Vue 提供了相应的前缀可以**用于 on**：
	修饰符	前缀
	.passive	&
	.capture	!
	.once	~
	.capture.once 或
	.once.capture	~!
-	on: {
	'!click': this.doThisInCapturingMode,
	'~keyup': this.doThisOnce,
	'~!mouseover': this.doThisOnceInCapturingMode
	}
-	on:{
	keyup:function(event){
		if(event.target !== event.currentTarget)return
		else if(!event.shiftKey || event.keyCode !== 13)return
		event.stopPropagation()
		event.preventDefault()
	}}
##	插槽
-	你可以通过 **this.$slots 访问静态插槽的内容**，每个插槽都是一个 **VNode 数组**
-	如果要用渲染函数向子组件中传递作用域插槽，可以利用 VNode 数据对象中的 scopedSlots 字段
-	return createElement('div',[ createElement('child',{
	scopedSlots:{default:function(props){return createElement('span',props.text)}}
	})])
##	预处理器
##	点分离
-	关注点分离不等于文件类型分离
-	在现代 UI 开发中，我们已经发现相比于把**代码库分离成三个大的层次**并将其相互交织起来，把它们划分为**松散耦合的组件**再将其组合起来更合理一些。

