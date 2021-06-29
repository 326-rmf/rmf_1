##	el-dropdown-item
	-	添加点击时间无反应解决方法
	-	 @click.native
	-	这才是点击事件的正确方式
##	文本显示
	-	p标签绑定 v-html	v-text		<p v-html="news">{{ news }}</p></el-main>
	-	 var that = this;	创建的函数里面	要设置that	来记住当前页面对象	因为向后端发请求之后的指向会发生改变
	-	调用data里面的属性的时候	记得指定是谁来调用	也就是不要忘了加上this		that的问题	有根据得调用对象
##	elementui里面的  		:hover	是连续写的		不可分开