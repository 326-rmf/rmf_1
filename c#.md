#	string ����
	-	string a,b;
	-	string�������кܶ෽��
	-	a.ToUpper();-->��ĸ��д
#	StringBuilder	�õ����������ʱ�����д������ַ����޸ĵ�ʱ����õ�
-	StringBuilder sb = new StringBuilder();
-	sb.append(i.ToString());
#	c#�������ʱ����õ�
-	using System.Diagnostics;
-	Stopwatch ��ʱ�� = new Stopwatch();
-	��ʱ��.Start();
-	��ʱ��.Stop();
-	��ʱ��.ElapsedMilliseconds
#	���������Ĺ淶
	-	��ĸ���»��߿�ͷ
	-	���������ĸ ���� �»���
#	���ָ��
	-	System.Console.WriteLine(mes);
	-	��Ŀǰ����using System;��ʱ�����ʡ��System
	-	������
	-	System.Console.Write(mes);
#	��ʽ�����
	-	string a = '1';
	-	string b = '2';
	-	System.Console.WriteLine("{0}{1}",a,b);
	-	�����12
#	����ָ��
	-	mes = System.Console.ReadLine();
#	ctrl+alt 
	-	һ��ѡҪ�ĵ���ͬ�ĵط�
#	xmlע��
-	'///'��������ע��	����//**//
#	decimal����	�Ǿ�׼��������
#	double a = 2E2;
-	����200����˼
#	@"F:\\123.txt\123\123";
-	����@���Ͼ��Ǻ���ת���
#	ֵ����	��������
#	var  a = 1;
-	�������Ϳ�����var
#	int a = int.MaxValue;
-	checked{
	a=a+1;
	//����Ƿ�������	�������
}
#	ReadLine���ص���string 
#	Parse()�����������ַ�����
#	TryParse(str,out)�����ַ���	out�鿴�Ƿ�����ɹ� �ɹ�outΪ�ɹ�ת����int���� ʧ��outΪfalse
-	if(int.TryParse(str,out b)){
	Console.WriteLine("a1");
}else{
	Console.WriteLine("ʧ��");
}
#	const int a = 10;-->����
#	switch()	����	switch("")
#	�սӺ����������   ���ʽ1??���ʽ2		��Ԫ�����
-	a = a??"false";//a��null����false   ����null����a...
#	����
-	int[] a = new int[10];
#	#region+�����+#endregion
-	������̫���ʱ����ʹ��
#	List��������	������������
-	var list = new List<int>();
-	list.Add();..	
-	list.Sort();����
-	foreach(int num in list){}
#	��ֻ̬�ܵ��þ�̬��	��̬������
#	ֵ����	���ô���
#	ref int a���Ƕ��庯��ʱ�Ĳ�����ʽ	ref a�Ǵ��ݲ���ʱ����ʽ
#	ref��Ϊ��������׼����
#	����	�������ֿ�����ͬ	���Ǻ���Ĳ����ǲ�ͬ��
#	���ͣ��б������Ҳ��ģ�壩
-	static void Swap<T>(ref T a,ref T b){
	T t;
	t = a; a = b; b = t;
}
#	ͳ��file�ĸ���
-	var files = Directory.GetFiles(path);
-	count+=files.length;
#	�������	����һ��˼·	��װ	�̳�	��̬ 
#	����Ϊprivate	ֱ���к��������غͻ�ȡ	get  set����
#	c#������Ĳ���	
-	public string Name{
	get{return _Name;}
	set{_Name = value;}}
-	public string Name{get;set;}//��д�˻�ȡName���Եĺ���
-	public string Name{
	get{return _Name;}; 
	set{
	if(string.isNullOrEmpty(value)){
	throw new ArgumentNullException();}
	_Name = value;}
	}
-	set getҪôͬʱ��	Ҫô���ر�
#	�����ʼ����
-	A a = new A(){name = '';}
#	��̬��Ա�;���ȫ����
#	partial void Func()//partial����������void ���͵�	����һ��'�ֲ�'����
#	�̳�	�ã��̳�
-	class Animal{
	public string Name{get;set;}}
-	class Dog:Animal{public void Shout(){}}
#	base  ���ʻ���ĳ�Ա  ���߹��캯��
-	class B:A{
	public B():base(123){Console.WriteLine("B() ");}}
#	��̬	virtual��override
-	��������public virtual void Shout(){}
-	��ô��������public override void Shout(){}�����ڸ�д�˸�����ĺ���
-	��������	public new void Shout(){}������û�и�д����
#	������	abstract
-	List<Dashborad> dbs = new List<Dashborad>();��������
#	�������
#	�ӿ�
-	�ֲ���һ�̳е�ȱ��	��һ�ֿ�̳еĶ�̬
