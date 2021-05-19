#	string 变量
	-	string a,b;
	-	string类里面有很多方法
	-	a.ToUpper();-->字母大写
#	StringBuilder	用到这个东西的时候是有大量的字符串修改的时候会用到
-	StringBuilder sb = new StringBuilder();
-	sb.append(i.ToString());
#	c#里面测量时间会用到
-	using System.Diagnostics;
-	Stopwatch 计时器 = new Stopwatch();
-	计时器.Start();
-	计时器.Stop();
-	计时器.ElapsedMilliseconds
#	变量命名的规范
	-	字母或下划线开头
	-	后面计算字母 数字 下划线
#	输出指令
	-	System.Console.WriteLine(mes);
	-	项目前面有using System;的时候可以省略System
	-	不换行
	-	System.Console.Write(mes);
#	格式化输出
	-	string a = '1';
	-	string b = '2';
	-	System.Console.WriteLine("{0}{1}",a,b);
	-	会输出12
#	输入指令
	-	mes = System.Console.ReadLine();
#	ctrl+alt 
	-	一起选要改的相同的地方
#	xml注释
-	'///'这三杠是注释	还有//**//
#	decimal类型	是精准数据类型
#	double a = 2E2;
-	就是200的意思
#	@"F:\\123.txt\123\123";
-	加上@符合就是忽略转义符
#	值类型	引用类型
#	var  a = 1;
-	变量类型可以用var
#	int a = int.MaxValue;
-	checked{
	a=a+1;
	//检查是否有问题	溢出问题
}
#	ReadLine返回的是string 
#	Parse()是用来解析字符串的
#	TryParse(str,out)解析字符串	out查看是否解析成功 成功out为成功转换的int数据 失败out为false
-	if(int.TryParse(str,out b)){
	Console.WriteLine("a1");
}else{
	Console.WriteLine("失败");
}
#	const int a = 10;-->常量
#	switch()	或者	switch("")
#	空接合运算符就是   表达式1??表达式2		二元运算符
-	a = a??"false";//a是null返回false   不是null返回a...
#	数组
-	int[] a = new int[10];
#	#region+代码块+#endregion
-	当代码太多的时候来使用
#	List叫做链表	概念类似数组
-	var list = new List<int>();
-	list.Add();..	
-	list.Sort();排序
-	foreach(int num in list){}
#	静态只能调用静态的	动态都可以
#	值传递	引用传递
#	ref int a这是定义函数时的参数形式	ref a是传递参数时的形式
#	ref是为基本类型准备的
#	重载	函数名字可以相同	但是后面的参数是不同的
#	泛型（有别的语言也叫模板）
-	static void Swap<T>(ref T a,ref T b){
	T t;
	t = a; a = b; b = t;
}
#	统计file的个数
-	var files = Directory.GetFiles(path);
-	count+=files.length;
#	面向对象	就是一种思路	封装	继承	多态 
#	变量为private	直接有函数来返回和获取	get  set函数
#	c#里变量的操作	
-	public string Name{
	get{return _Name;}
	set{_Name = value;}}
-	public string Name{get;set;}//简写了获取Name属性的函数
-	public string Name{
	get{return _Name;}; 
	set{
	if(string.isNullOrEmpty(value)){
	throw new ArgumentNullException();}
	_Name = value;}
	}
-	set get要么同时打开	要么都关闭
#	对象初始化器
-	A a = new A(){name = '';}
#	静态成员就具有全局性
#	partial void Func()//partial函数必须是void 类型的	这是一个'分部'方法
#	继承	用：继承
-	class Animal{
	public string Name{get;set;}}
-	class Dog:Animal{public void Shout(){}}
#	base  访问基类的成员  或者构造函数
-	class B:A{
	public B():base(123){Console.WriteLine("B() ");}}
#	多态	virtual和override
-	父类里面public virtual void Shout(){}
-	那么子类里面public override void Shout(){}这属于覆写了父类里的函数
-	当子类里	public new void Shout(){}这属于没有覆写函数
#	抽象类	abstract
-	List<Dashborad> dbs = new List<Dashborad>();对象链表
#	面向对象
#	接口
-	弥补单一继承的缺陷	是一种跨继承的多态
