## python保留字符
-   所有 Python 的关键字只包含小写字母。
## python变量类型
-   Python 中的变量赋值不需要类型声明。
-   每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建。
-   多个变量赋值 a = b = c = 1
-   为多个对象指定多个变量 a,b,c = 1,2，"john"
-   Python有五个标准的**数据类型**：
    -   Numbers String List列表 Tuple元组 Dictionary字典
-   del语法，del语句用来删除一些对象的引用
    -   del var_a,var_b
-   可以使用 [头下标:尾下标] 来截取相应的字符串。[头下标:尾下标] 获取的子**字符串包含头下标的字符，但不包含尾下标的字符**。
-   print str * 2      输出字符串两次
-   **列表用 [ ] 标识，是 python 最通用的复合数据类型。**
    -   list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
    -   列表截取可以接收第三个参数，参数作用是截取的步长
    -   list[1:4:2]输出的是[786,'john']
-   **元组用 () 标识**。内部元素用逗号隔开。但是**元组不能二次赋值，相当于只读列表**。
    -   tinytuple = (123, 'john')
    -   print tinytuple * 2       # 输出元组两次
    -   结果为 (123, 'john', 123, 'john')
-   **字典用"{ }"标识。字典由索引(key)和它对应的值value组成。**
    -   tinydict = {'name': 'runoob','code':6734, 'dept': 'sales'}
    -   print tinydict.keys()      # 输出所有键    print tinydict.values()    # 输出所有值
##  Python算术运算符
-   %	取模 - 返回除法的余数
-   **	幂 - 返回x的y次幂
-   //	取整除 - 返回商的整数部分（向下取整）
##  Python位运算符
-   & | ^ ~ << >>
## Python逻辑运算符
-   and or not