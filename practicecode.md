*{
    margin:0;
    padding:0;
}
@root-font-size:100/750vw * 40;-->计算font-size基本的值(根标签)
@body-bg-color:#eff0f4;     -->设置背景颜色
html{
    font-size:@root-font-size;
}
.outer{
    margin:0 27/40rem;
}
.header{
    height:174/40rem;
    display:flex;
    justify-content:space-between;
    align-content:space-between;
}
<div class=""course-list>
<div class="list-head">
</div>-->course-img     course-title       course-author
</div>
width:$height;
overflow-x:hidden;      -->水平方向的滚动条
overflow-y:auto;          -->垂直方向的滚动条
@media{样式}
@media (width:800px) and (width:300px){}        -->同时满足条件
                                                -->但是此例不可满足
                                    and         -->条件同时满足
                                    ,           -->或者
orientation         
                        -->landscape        方向是横向
top-bar     menu-wrapper        logo-wrapper        user-wrapper    <a href="#">   <i class="fas fa-stream"></i>     </a>      可以点出东西
那么设置a标签
<!-- 隐藏菜单 -->
<ul>  <li>  <a></a>  <span></span>      </li>      </ul>
.topbar{height:40px;
display:flex;
background-color:#000;
justify-content:spcae-between;
padding:0 10px;
align-items:cneter;
}
a{color:#fff;
text-decoration:none;
opacity:.5;
transition:all 1s;
}
.menu-wrapper{
    .menu-btn{
        display:block;      -->a默认是行内元素
        width:120px;
        height:30px;
        background-img:;
        background-size:;       -->雪碧图记得改变大小
    }
}
title:"美图手机"
<!-- 设置左侧导航 -->
.menu-wrapper{
    .menu       position:absolute;
}
top:100%;left:0;bottom:0;right:0;
height:;line-height:;margin:;font-size:;border-bottom:1px solid #;display:block;a默认是行内元素rgba(,,);span{font-size:;line-height:;display:flex;}display:none;:hover{display:block;}display:flex;flex-flow:column;justify-content:space-between;background-color:#fff;.btn .inner:nth-child(1){transform-origin:left center;
transform:rotateX(45deg);}opacity:0;transition:all 1s;原点直接先取定768     769的点
@media only screen and (nim-width:768px){.menu-wrapper{}.user-wrapper{order:1}}.menu-btn{display:none;}.left-menu{display:block;position:static;}position:static;-->定位就没了display:flex;到达一定断点的时候再来设置样式justify-content:space-evenly;width:-->强制设置伸缩属性
***flex:auto        -->自己去伸缩
响应式布局就是用到@media        媒体查询
max-width:1200px;margin:0 auto;-->加一层来设置
<input type="reset">
<select name="" id=""> <option value="">1</option>     </select>
<textarea id="text"></textarea><table>   <tr>  <th></th>-->表头     </tr> <tr>    <td></td>-->普通表格      </tr>  </table>  
小驼峰来命名变量        classNumber     a=a+b;b=a-b;a=a-b;
var b = parseInt(str);
var money = parseFloat(prompt('输入数据'));
if(money>1000000){
    alert();
}else{}
var isFood = parseInt(prompt('shuju'));
if(isFood){}else{}
var num  = parseInt(prompt('data'));
if(num..){}else if(){}else if(){}
switch(num){case 1:break;..}
var  arr = [1,2,3,4,5];
var arr1 = new Array(1,2,3,4,5);
arr[arr.length] = 6;        -->数组末尾加数据
for(var i = arr.length -1;i>=0;i--){arr[i+1] = arr[i]}--》在数组前面去插入数值
for(var i = arr.length - 1;i>=0;i--){newArr[newArr.length] = arr[i];}console.log(newArr);-->数组的反转
function verifyUser(){
    var user = prompt("data");
    ..
    if(user==waiuser..){}else{verifyUser()}
}
var maopao = function(){
    功能 参数 返回值
}
function killRepeat(arr){

    return newArr;
}
a[a.length]=b[i];       -->a数组后面加上值
没reutrn        那么就是函数值就是undefined
局部变量        &&   传参和传值         &&全局变量
ES6块级作用域           
函数内部        参数实行就近原则
var a = 10;
function f1(){
var b = 11;
};
f1();
f1();       全局        --》局部
###面试题
1.
alert(a);//报错了   因为a不带var    不会提升
a=0;
2.
alert(a);   -->undefined
var a = 0;
alert(a);       -->输出0
3.
alert(a);
var a = 'n';
function a()(alert('n2'));
alert(a);       -->预解析   
                --》var a;-->提升
                function a(){alert('n2')};-->相当于a=function(){alert('n2')};
                alert(a);-->输出function a(){alert('n2')};
                a='n';
                alert(a);-->输出n
4.alert(a);
a++;
alert(a);
var a  = 'n';
function a(){alert('n2')};
alert(a);           -->预解析
                    --》var a;
                    function a(){alert('n2')};
                    alert(a);
                    a++;
                    alert(a);   -->NaN
                    a = 'n';
                    alert(a);
5.alert(a);
var a = 0;
alert (a);
function fn(){
alert(a);
var a = 1;
alert(a);
}
fn();
alert(a);       -->预解析
                --》自己的错误解析var a;
                function fn(){var a;alert(a);a = 1;alert(a);}
                fn();
                a = 0;
                alert(a);
                alert(a);
                -->正确解析
                var a;
                function fn(){..里面不变}
                alert(a)        --》undefined
                a  = 0;
                alert(a);       -->0
                fn();           -->开始局部环境
                                -->fn(){
                                    var a;
                                    alert(a);   -->undefined
                                    a = 1;
                                    alert(a)    -->1
                                }
                alert(a);       -->0
function addOrBad(a,b,c){
    if(arguments.length == 2){
        return a - b;
    }else if(arguments.length == 3){
        rerturn a + b + c;
    }
}       -->arguments可以存储参数
console.log(addOrBad(a,b))
console.log(addOrBad(a,b,c))        -->arguments很有作用
function f1(fn){var a =10;var b =10;fn(a,b);}
function add(a,b){return a+b;}
f1(add);  
##  预解析          
alert(a);
var a = 'a1';
function a(){alert('fa1')};
alert(a);
function a(){alert('fa1')};
var a = 'a2';
alert(a);       -->var 变量都在函数上时候，就正常预解析
                --》否则    由于函数优先级高    那么就函数先预解析
                --》预解析
                function a(){alert('fa1')}
                function a(){alert('fa2')}
                var a;
                var a;
                alert(a);
                a = 'a1';
                alert(a);
                a = 'a2';
                alert(a);
## 对象
var obj = {
    name:'abc',
    age:32;
    gender:'male';
    sing:function(){
        console.log('sing');
    }
}
console.log(obj);       -->Object       对象当中存在的东西
var obj = {};       -->对象
obj.name = 'abc';
obj.age  = 1;
obj["color"] = 'yellow';
obj.age   <-->  obj["age"]      -->两者完全等价
var cry = 'call';
obj[cry]<-->obj["call"]
obj[cry] = function(){
    console.log('wang');
}
不是对象里面的function      那么这个functionq的执行者是window
function a(){console.log(this)};      -->是window
function a(name,age){this.name = name;window.age = age;}
var result = new Person('','','');
console.log(result);
a.prototype.run = function(){console.log('fast');}
        -->原型对象里面去添加run这个函数
Object.prototype.run = function(){console.log('fasr')};
        -->Object是原型对象的原型对象
var dataTest = {
    name:'abc',
    age:32
}
var dataStr = JSON.stringify(dataTest);-->JSON化了
var dataTestArr = [{name:'abc',age:32},{name:'bcd',age:33}]
-->是数组数据格式       
var dataStrarr = JSON.stringify(dataTestArr);
--> 变为了  JSON串
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var date = date.getDate();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
console.log(year+'年'+month+'月'+''..);
"use strict"
a = 1;
console.log(a);
var a = 10;
if(a > 0){let b= 10;
console.log(b);}
console.log(b);     -->由于是块级作用域     那么在函数外部就不可以console.log();
var str = 'afdadfjn 12 ad23';'
console.log(str.charAt(n));     -->返回下标为8的元素
console.log(str.charCodeAt(0));     -->返回第n个字符的编码
console.log(str.concat('rmf'));     -->返回拼接后的字符串
console.log(str.fromCharCode(49));
console.log(str.indexOf('123'));        -->返回字串在字符串当中的位置
console.log(str.indexOf('12',8));       -->从下标8开始来搜寻'12'这个字符串的位置
str.length      str.localeCompare('')       -->两个字符串比较的Unicode码    直接从第一个字符开始依次比较   大小直接开始比较
 str.match(/12/);       -->正则匹配     寻找12这个子串
str.replace(/12/g,'**');
str.slice(6,9);     --》抽取字串    传递参数起始位置 但不包含结束位置
str.split('12');    -->以传递的参数为分割标志，将字符串转化为数组，传递的参数在数组中没有
console.log(str.substr(6,3));  -->起始位置是下标为6开始截取长度为3的字符串
console.log(str.toLocalUpperCase());-->全部大写
console.log(str.toLocalLowerCase());--》全部小写
str.toUpperCase();-->大写字母
str.toLowerCase();-->小写字母
arr.concat(4);      -->返回一个新数组   新数组不会影响原来数组  遇到添加数组的时候  数组会被拆解    来添加到后面
arr.join()  -->数组转换为字符串
arr1.from();-->将伪数组对象或者可以遍历的对象转换为真数组
arr1.of(1,2,3);-->将一系列值转换为数组
arr1.findIndex(function(item,index){
    return item > 19;
})-->返回第一个值大于19的下标
var arr = new Array(3); -->3代表数组的长度
new Array();-->是构造函数
Array();-->普通函数
function HuaWeiMobile(name,color,size,money){
            this.name = name;
            this.color = color;
            ..
}
Mobile.prototype.brand = '华为';-->**原型对象**
Mobile.prototype.callPhone = function()
{
}
..
var phone1 = new HuaWeiPhone();-->**功能  参数    返回值**
var str = 'afa2u33iajdfj3'
var arr  = str.split('');       -->字符串转换为了数组
arr.reverse();
str = arr.join('');   -->数组=转换为字符串
splice()        -->万能方法     增删改
splice(1,2,'abc');      -->从下标1开始删除两个字符 然后插入'abc'
var str = 'dasjfaufbueoafgnoerug234235adfa';
var obj = {};
---------------------------------------------------

for(var i = 0;i < str.length;i++){
        var charS = str[i];--》字符串元素
        if(obj[charS]){
            obj[charS]++;
        }else{
            obj[charS] = 1;
        }-->obj[charS]?obj[charS]++:obj[charS]=1;
        -->if   else-->改为三元运算符很常见
}obj[charS+'arr']?obj[charS+'arr'].push(i):obj[charS+'arr'] = [i];-->取得相同元素的下标值
var max = 0;
var resultKey = '';
for(var key in obj){
    if(typeof obj[key] == 'number'){
        if(obj[key] >= max){
            max = obj[key];     --》最多出现的次数
            resultKey =  key;}}}        --》最多出现的出现的键
---------------------------------------------------------------

window.onload = function()
{
    var btn = document.getElementById('button1');
    btn.onclick = function(){
        alert('abc');
        aa.href = 'htts://..';
        check.checked = true;
        **imgNode.setAttribute('aa','cc');-->aa改为cc**
        **setAttribute函数**
        **img里面有属性aa**
        imgNode.src = 'img/6.jpg';}}-->简单该图片路径代码
        -->script建议放在body最末尾
`<img src="img/1.jpg" alt="" id="img_1">`
`window.onload = function(){`
`var imgArr = ['img/1.jpg',..];}`
`var imgNode = document.getElementById('img_1');`
var num = 0;
imgNode.onclick = function(){
num++;
imgNode.src = imgArr[num%imgArr.length];
}
pList[i].onclick = function(){
    for(var j = 0;j < pList.length;j++){

    }
}
------------------------------------------------------
**鼠标移入移出的事件案例**
var a = 200;
var  box = document.querySelector('div');
box.onmouseenter = function(){
    box.style.width = a + 'px';
    this.style.height = '200px';
    this.style.backgroundColor = 'skyblue';
}
box.onmouseleave = function(){
    box.style.width = '100px';
    ..
}
-----------------------------------------------------
**写结构时候用class     写js的时候用id**
`<div class='nav'>  <ul class='list'><li>项目1</li><li>项目2</li><li>项目3</li><li>项目4</li></ul><style>ul>li{}</style>`
querySelectorAll('ul>li')-->选择器的选择
------------------------------------------------------
var box = document.getElementById('box');
var top = ..
var bottom = ..
box.onmouseenter = function(){
                                -->top是css里面的属性值
}---》css里面transition过渡     right:0     left:0
-->childNodes
--------------------------------------------------------
var arr = [];
for(var i = 0;i <)
window.onload = function(){
    document.write('<h2>标题</h2>‘);
}
--------------------------------------------------
拼接字符串
var btn = document.querySelector('button');
var movies = ['m1','m2','m3','m4'];
btn.onclick = function(){
var str = '<ul>';
for(var i = 0; i < movies.length; i++){
    str +='<li>'+movies[i]+'</li>';
}
str +='</ul>';
document.body.innerHTML = str;-->innerHTML有覆盖的效果
--------------------------------------------------------
var arr  = [];
var str = '<ul>';-->
for(var i = 0; i < arr.length ;i++){
str += '<li>' + arr[i] +'</li>';
}
str +='</ul>';
document.body.innerHTML +=str;-->body加上元素是必然的   行成一个新的文档流
var list  = document.getElementById('list');
var liNodes = document.querySelectorAaa('#list>li');
for(var i = 0;i < liNodes.length;i++){
    if(i%2==0){liNodes[i].style.backgroundcolor='hotpink';}
}
-------------------------------------------
var ulNode = document.createElement('ul');
for(var i = 0; i < arr.length; i++){
    var liNode  = document.createElement('li');--》创建元素
    liNode.innerText = arr[i];--》新创建的来赋值s
    ulNode.appendChild(liNode);
}
把ul追加给body      不追加不显示
---------------------------------------------------------
var ulNode = document.querySelector('.list');-->拿到父元素
var liNode = document.createElement('li');-->创建新的li
liNode.innerText = 'abc';
ulNode.appendChild(liNode);-->**追加添加新的元素**
ulNode.insertBefore(liNode,liNode1);-->**插入新的元素**
ulNode.removeChild(liNode);-->**删除元素**
--------------------------------------------------------
**trim()函数--》去除两边的空格  内容不可以为空**
var inputNode = document.querySelector('input');
var ulNode = document.querySelector('.list');
inputNode.onkeyup = function(event){
if(event.keyCode == 13){-->13是回车
        var value = inputNode.value;-->拿到输入框文本内容
        if(value.trim()){var liNode = document.createElement('li');
        liNode.innerText = value;
        ulNode.appendChild(liNode);
       }
        else{
            alert('no none');
        }
         inputNode.value = '';-->输入框为空
}}
-----------------------------------------------------------
firstChild      这个元素可以包含空格 换行   其值可以是#text
firstElementChild       --》第一个子元素节点
-----------------------------------------------------------
**dom0事件的绑定和解绑**
var btns = document.querySelectorAll('input');
btns[0].onclick = function(){
    console.log('up');
}-->dom0绑定事件
btns[1].onclick = function(){
    btns[0].onclick = null;-->解绑事件
}
-----------------------------------------------------------
**dom2事件的绑定和解绑**
var btns = document.querySelectorAll('input');
btns[0].addEventListener('click',function(){
    console.log('abc')
},false);     -->事件监听-->绑定点击事件--》触发实现的函数
        -->默认是false-->函数参数
function fn(){
    console.log('');
}--》可以作为函数参数--》btns[0].addEventListener('click',fn,false);
函数写在外面方便复用
**btns[0].removeEventListener('click',fn,false);-->解绑函数成功**
btns[1].addEventListener('click',function(){
    btns[0].removeEventListener('click',fn,flase);
},false);
----->函数解绑      dom2函数解绑比较麻烦
funciton addEvent(obj,eventType，fn,isBubble){
        if(obj.addEventListener){obj.addEventListener(eventType,fn,isBuble);
        }else{
        }
}-->添加函数
**eventType-->事件添加的是什么类型的**
-----------------------------------------------------------
laosan.addEventListener('click',function(event){
    event = event||window.event;-->事件的兼容性处理
    console.log('..');
    event.stopPropagation();-->阻止了冒泡发生
},false)
event = event || window.event;-->处理了event    浏览器兼容性处理的问题
-----------------------------------------------------------
ulNode.onmouseover = function(event){
    var liNode = event.target;-->**寻找发生事件的儿子ulNode里面寻找liNode**

    liNode.sty..;
}-->**事件的委派**
-----------------------------------------------------------
var box = document.getElementById('box');
box.onmouseenter = function(){
    con..
}
box.onmouseleave = function(){con..}
-----------------------------------------------------------
`<table>         <tr><th>`        -->表头
                `<tr><td>`        -->普通表头的数据
-----------------------------------------------------------
var inputNodes = document.querySelectorAll('input[type='text']');
var tBodyNode = document.querySelector()
btn.addEventListener('click',function(){
    var name = inputNodes[0].value;
    ..
    var trNode = document.createElement('tr');

    var tdName = document.createElement('td');
    tdName.innerHTML = name;
    trNode.appendChild(tdName);
    ..
    tBodyNode.appendChild(trNode);
})
-----------------------------------------------------------
`location`
var btn = document.querySelector('button');
btn.addEventListener('click',function(){
    console.log(window.location.href);-->获取当前的网址
    window.location.href = 'https://www.baidu.com'-->重定向页面的地址
})
-----------------------------------------------------------
`history`
history.back(-1);       -->后退一步
history.forward(1);     -->向前一步
-----------------------------------------------------------
`onresize`
window.onload = function(){
    window.onresize = function(){
        -->窗口大小变化执行的函数体
    }
}
-----------------------------------------------------------
`<div id='box'></div>`
var box = document.getElementById('box');
box.onclick = function(event){
    console.log(event);-->点击事件的一些信息
}
-----------------------------------------------------------
var imgNode = document.querySelector('img');
document.onmousemove = function(event){
    event = event || window.event;
    <!-- console.log('move'); -->
var left = event.clientX;
var top = event.clientY;
imgNode.style.left = left + 'px';
imgNode.style.top = top + 'px';
}
-----------------------------------------------------------
div.box     button
var btn = document.querySelector('button');
var flag = true;
var box = document.getElementById('box');
btn.onclick = function(){
        if(flag){
            box.style.display = 'none';
        }else{
            box.style.display = 'block';
        }
        flag = !flag;
}
-----------------------------------------------------------
box(box)-->ul(list) overflow:hidden;-->li
#box .list li:nth-child(1){
    border-radius:0 150px 0 150px;
}
**动画**
animation:move 1s linear infinite;
@keyframe move{
    from{transform:rotate(0);}
    to{transform:rotate(360deg);}}
-----------------------------------------------------------
box.style.animationPlayState = 'running';-->动画进行
box.style.animationPlayState = 'paused';--》动画停止
-----------------------------------------------------------
**定时器**
var a = 4;
var b = 6;
var c = a + b;
var timer = null;
console.log(c);
**setTimeout是延迟定时器        是window下的一个全局方法**
**第一个值  回调函数        到时间干嘛**
**第二个值      限定的时限**
timer = setTimeout(function(){
}，5000);-->放置定时器
clearTimeout(timer);-->清除定时器
var inputNode = document.querySelector('input');
var num = 5;
setInterval(function(){
        num--;
        inputNode.value = '阅读协议（'+num+'s)';
        if(num == 0){
            clearInterval(timer);
            inputNode.disabled = false;
        }
},1000)
----------------------------------------------------------------
console.log(box.OffsetWidth)        
var str = 'asfienure234dgd';
var patt = /\d/;
var result = patt.test(str);
console.log(result);
**反斜杠是转义的意思 \ 。**
/\d\d\d/-->三个数字连在一块的规则
/\d{2,10}/
----------------------------------------------------------------
var b = {name:'kobe'};
b.name = 'wade';-->b存储的地址没有改变  变量指针的指向不发生改变
var a = {};var b ={};-->堆里面分配了内存空间
----------------------------------------------------------------
双飞翼布局
min-width
< div class="main">width:100%;
< div class="inner">zhongjian</div>padding:0 200px;
< /div>
< div class="left">zuo</div>margin-left:-100%;
< div class="right">you</div>margin-left:-200px;
----------------------------------------------------------------
for(var i = 0;i < btns.length;i++){
var btn = btns[i];
btn.onclick = function(){
    alert(i);
}-->**回调函数在鼠标点击的时候，for循环已经结束了**}
----------------------------------------------------------------
**常见闭包示例**
function fun(){
    var a = 123;
function fun2(){console.log(a);}
return fun2;
}
vavr fun2 = fun();--》fn2多了一个引用关系   指向了外部函数的变量对象   闭包的作用就体现了出来   函数外部可以操作函数内部的数据
fun2();
----------------------------------------------------------------
**闭包自定义模块**
function myModule(){-->函数内部的数据是私有的
    var msg = 'mymodule msg';
    function doSomething(){
        console.log(msg);
    }
    function doOtherthing(){
        return msg;
    }
    return{doSomething:doSomething,doOtherthing:doOtherthing};
}
var myModule = new myModule();
-->**进阶挂在到window上面**
(function myModule(w){-->函数内部的数据是私有的
    var msg = 'mymodule msg';
    function doSomething(){
        console.log(msg);
    }
    function doOtherthing(){
        return msg;
    }
   w.myModuleObj2 = {-->myModuleObj2变成了对象  对象里面有方法
       doSomething:doSomething,
       doOtherthing:doOtherthing
   };
})(window)
----------------------------------------------------------------
**f 应用了闭包函数**
var f = fun1();
f();f();
f = fun1();f();--》f函数会重新再次来过赋值执行
-   **函数体预解析的时候就定义完了**
--> function getName(){alert(5)}-->函数提升
------------------------------------------------------------
function Child(name,age){
    this.name = name;
    this.age = age;
}
var obj3 = {
    name:'kobe',
    age:43
}
-   defineProperty扩展属性
Object.defineProperty(obj4,'sex',{
    get:function(){
        return '男'
    },
    set:funtion(msg){
        console.log(msg)
    }
})
----------------------------------------------------
let obj = {user:'kobe',age:23};
let str = `我的名字是${obj.user},我的年龄是${obj.age}`
let obj = {
    username,-->同名的属性可以省略  key和value一样的时候username:username
    age,-->age:age
    showName(){
        console.log(this.username);-->function也可省略
    }
}
----------------------------------------------------
箭头函数和普通函数的区别
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
btn1.onclick = function(){
    console.log(this);-->输出btn1的对象
}
btn2.onclick = () => console.log(this);-->输出window
let Person = () => this.name = 'kobe';
let person1 = new Person();-->根本不是一个构造器    因为this是window
----------------------------------------------------
function fun(...values){
    values.forEach(function (item,index){
        console.log(item,index);
    })
}
let arr = [1,6];
let arr2 = [2,3,4,5];
let arr3 = [1,...arr2,6];
console.log(arr3);-->...运算符遍历指定数组拿了值
--》也可以说...运算符去拆包指定的数组
...运算符不能直接去遍历对象
----------------------------------------------------
**最好自己去实现这个底层原理**
**iterator遍历器对象  遍历数组       iterator书写接口底层原理**
function iteratorUtil(target){-->iterator的接口
    let that = this;-->缓存this
    let index = 0;-->标识指针的起始位置
    let keys = Object.keys(that);//获取对象里面key 的数组
    if(this instanceof Array){//用来遍历数组
        return {--》生成iterator遍历器  
    next:function(){
        return index < that.length?{value:that[index++],done:false}:{value:that[index++],done:true};
    }
    }
    }else{//用来遍历对象
 return {--》生成iterator遍历器  
    next:function(){
        return index < keys.length?{value:that[keys[index++]],done:false}:{value:that[keys[index++]],done:true};
    }
    }
    }
    
}
let iteratorObj = iteratorUtil(arr);
console.log(iteratorObj.next());--》输出数组的值

Array.prototype[Symbole.iterator] = iteratorUtil; 
-->iterator**书写接口底层原理**
**...运算符不可以遍历对象**因为数组原型上面没有响应的接口
当然我们可以为其添加接口
Object.prototype[Symbol.iterator] = iteratorUtil;-->原型对象上面添加了我们书写的接口
**Object.keys(obj)-->用来判断对象里面有几个键值对**
----------------------------------------------------
**说说类**
class Person(){
    static num  = 123;//static静态资源修饰符    可以给类对象    自身添加属性
    constructor(name,age){-->构造器 类的构造方法
        this.name = name;
        this.age = age;
    }
    showInfo(){
        console.log(this.name,this.age);
    }}-->共享方法会放在公共的地方   避免代码的冗余  放在Person的原型上面
let person1 = new Person('kobe',23);
Person.msg;
**继承类**
子类的原型成为父类的实例
子类的构造函数.prototype = new 父类的构造函数()
Child.prototype = new Person();
继承类也做到了这一步操作
class Child extends Person(){
    constructor(name,age){
        super(name,age);//super是调用父类的构造方法 改变父类构造方法的this指向子类的实例
    }
    showInfo(){//此为父类方法的重写 以为父类存在同名的函数
        console.log(this.name,this.age..);
    }
}
let child1 = new Child();
console.log(child1);
**字符串函数**
includes(str)判断是否包含指定的字符串
startWith(str)判断是否以指定字符串开头
endsWith(str)判断是否以指定字符串结尾
repeat(count)指定当前字符串重复的次数
**数字函数**
Number.isFinite(i)判断是否是有限大的数
Number.isNaN(i)判断是否是NaN
Number.isInteger(i)判断是否是整数
Number.parseInt(i)将字符串转换为相应的数值
Number.trunc(i)直接去除小数部分
**数组函数**
Array.from(v)将伪数组对象或者可以遍历的对象转换为真数组
Array.of(v1,v2,v3)将一系列值转换为数组
find(function(value,index,arr){return true;})找出第一个满足条件返回true的元素
findIndex(function(value,index,arr){return true})找出第一个满足条件返回tru的元素下标
**比较**
0===0//true
NaN === NaN //false
**Object.assign(target,source1,source2,..)**
将源对象属性赋值到目标对象上面
let target = {};
let sources1 = {name:'kobe'};
let sources2 = {name:43};
let result = Object.assign(target,sources1,sources2);
**直接操作__proto__属性**
ES6里面可以操作隐式原型对象了
let obj3 = {};
obj3.__proto__ = target;
**Set()容器**
set容器：无序不可重复的多个value的集合体
Set(array)-->因为不可重复那么就会给数组去重复的数
add(value)-->添加值
delete(value)-->删除指定的值
has(value)-->是否有值
clear()-->直接清空
size--》输出大小
let set = new Set();
**Map容器**
let map = new Map([[1,2]]);-->里面丢的必须是二维数组
拥有Set里面的函数
for of遍历数组  for of可以遍历  那么也可以用...运算符来遍历
let str = 'abc';
for(let item of str){
    console.log(item);
}
**slice函数**
let str = 'abcdef';
console.log(str.slice(3));-->输出def
console.log(str.slice(3,5));-->输出de   包含开始下标为3的数不包含结尾
**for in枚举对象 当然也可以遍历数组的下标注意是下标**
----------------------------------------------------------------
# jQuery
<!-- $.trim(str)去除字符串两边的空格 -->
$(function(){
<!-- 查找按钮的dom -->
$('#btn2').click(function(){
    <!-- alert($('#username').val()) -->
<!-- this参数本来是dom对象  但是经过$函数将dom对象封装成了jQuery对象 -->
    alert($(this).html())})})
var btns = $('button');
-   $btns[1]有.html()-->是错的 因为btns[1]单独拿出来 那么btns[1]就是dom对象而不是jQuery对象       拿出来的btn就成为了dom对象  拿出来就应该使用btns[1].innerHTML
-   $btns.each(function(){
    console.log(this.innerHTML)
})
-   $('#btn3').index()-->返回的是btn3的索引值   index()返回的是兄弟元素中排第几
##  选择器
-   $('#div1').css('background','pink');
-   $('div').css('background','pink');
-   $('.box').css('background','pink');
-   $('div,span').css('background','pink');
-   $('div.box').css('background','pink');-->div的class是box
-   $('ul li').css('background','pink');-->ul下面的li
-   $('ul>span').css('background','pink');-->ul下面的子元素span
-   $('.box +').css('background','pink');-->class为box的下一个元素
-   $('.box ~').css()-->兄弟元素是class是box的
-   $('div:first').css()-->选择第一个div
-   $('.box:last').css()-->class是box的最后一个元素
-   $('div:not(.box)').css()-->divclass不是box的元素
-   $('li:gt(0):lt(3)').css()-->大于零小于三    **但是会出现问题就是大于零之后会得到新的数组下标再从零开始来赋予下标  所以要注意下标的问题    但是如果li:lt(3):gt(0)就避免了问题的发生**
-   $('li:contains(BB)').css()-->选择li里面内容是BB的li
-   $('li:hidden').show(1000)-->本来隐藏的li来显示
-   $('li[title]').css()-->选择有title的li
-   $('li[title=hello]').css()-->选择有title为hello的li
-   $(':input:text:disabled').css()-->表单form里面选择不可用的文本输入框
-   $('select option').length-->下拉框的长度
-   $('select option:selected').html]()显示选择的名称
-   $.isFunction($)-->true
**attr用来操作标签自定义属性比如title class id name**
**prop  用来操作元素的固有属性    布尔值属性**
-   $('div:first').attr('title')-->读取第一个div的title
-   $('div').attr('name','abx')-->给所有div的name设置abx
-   $('div').attr('class','abx')-->给所有div的class设置abx
-   $('div').removeAttr('title')-->给所有div的title移除
**按钮全选的操作**
-   $('button:first').click(function(){
        $(':checkbox').prop('checked',true)
})
**tab切换显示**
var index = 0;
$btns.click(function(){
    var clickIndex = $(this).inedx();-->点击获取按钮的index
    if(index == clickIndex){
        return;-->重复点击直接return
    }
    $divs[index].style.display = 'none';
    $divs[clickIndex].style.display = 'block';
    index = clickIndex;
})
----------------------------------
$('p:first').css('color')-->拿到第一个p标签的颜色
**设置jQuery对象的css样式**
$('p:last').css({
    'color':'#ffe',
    'background':'blue',
    'width':'200px'
    'height':'200px'
});
**jQuery里面offset相对于页面的      position相对于父元素**
$('.div2').offset({
    left:200,
    top:300
})
-->设置left和top是不用加上引号的
**获取滚动条的位置**
$('#btn1').click(function(){
    console.log($('.box').scrollTop());-->获取滚动条的位置
    console.log($('html').scrollTop());
    console.log($('body').scrollTop()); 
    $(document).scrollTop(300);-->设置滚动条位置jQuery新版本
})
**元素尺寸**
console.log($div.innerWidth(),$div.innerHeight())
console.log($div.outerWidth(),$div.outerHeight())
**筛选过滤 filter()函数**
var $list = $('ul li')
$list.first().css();
$list.filter('[title=hello]')
$list.has('span').css()-->操作的是li 但是li里面有span
**定时器**
var time = 3000;
var itemTime = 30;
-  单击回调
$('#to_top').click(function(){
    //距离顶部的距离=总偏移量
    var offset = $('html').scrollTop()+$('body').scrollTop();
    //总偏移量/总帧数=单次偏移量
    var itemOffset = offset/(time/itemTime);
    //启动定时器    单位时长走单次偏移
    var timer = setInterval(function(){
        offset -=itemOffset;
    if(offset <= 0){
        clearInterval(timer)
    }
        //最终目标是
        $('html,body').scrollTop();
    },itemTime)
})
**ul练习**
var $ul = $('ul');
//  children找直接子级
//eq()函数根据索引来指定
$ul.children('span:eq(1)').css();//eq指定索引去查找指定子级
$ul.find('span:eq(1)')//ul里面所有的span 包裹不是直接子级的
$ul.parent().css('background','pink')//ul的父级元素
$('#cc').prev().css()//prev()前面一个元素   next()后面一个元素
//还有preAll()  nextAll()前面/后面所有兄弟元素
$('#cc').sibling('li').css();//**sibling()查找兄弟元素li**    还可以改为span..
$('#ul').append('<span>新增的soan</span>')//ul最后添加了一个span
$('<span>新增的span</span>').appendTo('#ul');
//还有prepend()   prependTo()       前面增加元素
$('#ul>li[title=hello]').before('<span>before的span</span>')//伪元素  
$('ul>li[title]=hello').replaceWith('<p>替换的p</p>')
$('#ul>li').remove()//删除整个ul
$('#ul').remove()//删除ul里面的li
$('#ul').empty()//**empty()掏空节点**
##  append() appendTo() 
#   数据输入展示    拼接字符串  append()
var $empName = $('#empName');
$('#addEmpButton').click(function(){
    var empName = $empName.val();
    var email = $email.val();
    var salary = $salary.val();
    $('<tr></tr>')
    .append('<td>'+empName+'</td>')
    .append('<td>'+email+'</td>')
    .append('<td>'+salary+'</td>')
    .append('<td><a href='deleteEmp?id=003'>Delete</a></td>')
    .appendTo('#employeeTable tbody').find('a').click(clickA)   ;
    $empName.val('');
    $email.val('');
    $salary.val('');//清空传了空串
})
function clickA(event){
//**阻止默认行为**
   **event.preventDefault();**
   **confirm()判断函数执行操作**
   var $tr = $(this).parent().parent();
   var name = $tr.children(':first').html();
   if(confirm('你确定删除'+name+'的信息吗')){
       $tr.remove();
   }
})
}
$('a').click(clickA);
**全选按钮 反选按钮**
var $items = $(':checkbox[name=items]');
var $checkAllBox = $('#checkedAllBox');
$('#checkedAllBtn').click(function(){
    $items.prop('checked',true);//prop()操作元素的固有属性
    $checkedAllBox.prop('checked',true);
});
$('#checkedRevBtn').click(function(){
    //因为反选功能需要设置的值不同  所以需要遍历
    $items.each(function(){
        this.checked = !this.checked;
    })
    $checkedAllBox.prop('checked',$items.filter(':checked').length == $items.length)//全部选满
    $checkedAllBox.prop('checked',$items.filter(':not(:checked')).length == 0)//没选中的为0
})
$checkedAllBox.click(function(){
    $items.prop('checked',this.checked);//this.checked是什么items的checked属性就是什么
})
$('#sendBtn').click(function(){
    $items.filter(':checked').each(function(){
        alert(this.value)
    })
})
**内容尺寸**
height()width()     height
**内部尺寸**
innerHeight()innerWidth()   height+padding
**外部尺寸**
outerHeight(false/true)//height+padding+border如果是true加上margin
outerWidth(false/true)
//单击监听
$('.out').click(function(){
    console.log('click listener');
});
//**on 绑定的单击回调 on可以做事件委托 on也可以绑定多个事件 但是事件的回调函数 也就是触发后的行为是一样的**
$('.out').on('click',function(){
    console.log('on绑定的单击回调')
})
//鼠标移入移出事件监听
$('.inner').on('mouseenter',function(){
console.log('mouseenter')
}).on('mouseleave',function(){
console.log('mouseleave')
})
$('.inner').on('mouseover',function(){
    console.log('mouseover')
}).on('mouseout',function(){
    console.log('mouseout')
})
**hover第一个回调函数，移入逻辑 第二个函数  移出逻辑    hover底层用的是mouseenter   mouseleave**
**off()函数来取消事件绑定**
$('.inner').hover(function(){
console.log('移入');
},function(){
    console.log('移出')
})
$('#btn1').click(function(){
    $('.inner').off('click mouseenter');//取消了click mouseenter等事件绑定
})
$('#btn1').click(function(){
    $('ul').append('<li>新增的li</li>')
})
**事件委托就想到冒泡**
将多个子元素的事件监听委托到父元素ul处理
监听事件加在了父元素身上
操作一个子元素的时候    事件会冒泡到父元素上
好处是  1.减少监听数量  2.新增节点不用再来绑定事件
**delegate来执行事件委托 undelegate来去除事件委托 on也可以做事件委托    但是delegate来执行委托更好  官方推荐的delegate**
$(function(){
    $('ul').delegate('li','click',function(){
        $(this).css()
    })
    $('#btn2').click(function(){
        $('ul').undelegate()
    })
})
**fadeOut()淡出函数 fadeIn()淡入函数 fadeToggle()淡入淡出切换**
$(function(){
    $('#btn1').click(function(){
        $('.div1').fadeOut(3000);//3秒淡出
    })
    $('#btn2').click(function(){
        $('.div1').fadeIn(2000);//2秒淡入
    })
    $('#btn3').click(function(){
        $('.div1').fadeToggle(2000);//淡入淡出切换用的  两个转台来切换
    })
})
**slideUp   slideDown Toggle慢慢收缩 慢慢展开   收缩展示切换**
$('#btn1').click(function(){
    $('.div1').slideUp(2000);
})
$('#btn2').click(function(){
    $('.div1').slideDown(2000);
})
$('.div1').show();//立即显示
$('.div1').show(2000);//慢慢显示
$('.div1').hide();//隐藏
**animate()动画属性**
$('.div1').animate({
    width:'200px',//加上引号
    height:'200px',
    left:'+=20px'//总是相对于当前的位置来变化
},2000)//2s的时间变化
**stop()函数停止动画**
$('.div1').stop();//立即停止当前的动画  但是不清空动画队列  还会执行下一个动画
$('.div1').stop(true,true);//立即停止动画   元素直接到动画最终的位置    清空队列
$('.dvi1').stop(false,true);//立即结束当前动画  元素到当前动画最后位置 不清空队列
$('.div1').stop(ture,false);//立即结束当前动画  元素停在当前位置    清空队列
//**stop()    第一个参数是是否清空队列    默认为false 第二个参数是当前动画是否停止**
**轮播图**
var $prev = $('#prev');
var $next = $('#next');
var $list = $('#list');
var $container = $('#container');
var $points = $('#pointsDiv span');
var img_num = $points.length;
var PAGE_WIDTH = 600;//定义图片宽度
var isMove = false;//动画正在执行的标识
var oldIndex = 0;//小圆点的默认index
//动画总时长
var time = 3000;
var itemTime = 30;//动画单位时长    总时长/每帧时长=总帧数
$prev.click(function(){
    nextPage(false)
})
$next.click(function(){
    nextPage(true)
})
//更新小圆点
$points.click(function(){
    nextPage($(this).index())
})
function nextPage(next){
    if(isMove){
        return;
    }
    isMove = true;
    if(typeof next == 'boolean'){
        var offset = next?-PAGE_WIDTH:PAGE_WIDTH;
    }else{
        var offset = -(next - oldInext) * PAGE_WIDTH;
    }
var itemOffset =    offset/(time/itemTime);//每帧的长度
//获取当前位置
var left = $list.position().left;
var targetLeft=left+offset;
var timer = setInterval(funtion(){
    left+=itemOffset;
if(left==targetLeft){
    clearInterval(timer)
    if(left==0){
        left=-(img_num*PAGE_WIDTH);
    }else if(left==-(img_num*PAGE_WIDTH)){
        left=-PAGE_WIDTH;
    }
    isMove=false;
}
        $list.css('left',left);

},itemTime)
upDate(next);
}  
//自动翻页
var autoTimer = setInterval(function(){
    nextPage(true);
},3000)
//移入  取消自动轮播    移出再启动
$container.hover(function(){
    clearInterval(autoTimer)
},function(){
     autoTimer=setInterval(function(){
        nextPage(true);
    },3000)
})
function upDate(next){
    //判断形参类型
    if(typeof next == 'boolean'){
    var index = next ? oldInex+1:oldInedx-1;
    }else{
        var index = next;
    }
    //计算当前应该显示的小圆点的下标
    //小圆点索引值边界判断
    if(index>$points.length-1){
        index = 0;
    }else if(index<0){
        index = $points.length-1;
    }
    $points[oldIndex].className = '';
    $points[oldIndex+index].className = 'on';
    oldIndex+=index;
    //更新下标
}
----------------------------------------------------------
**扩展插件**
jQuery里面来扩展    那么单独写一个my_jQuery_plugin.js
<script type='text/javascript' src='js/jquery-1.10.1.js'></script>
<script type='text/javascript' src='js/my_jQuery_plugin.js'></script>
------------------------------------
my_jQuery_plugin.js里面的代码:
$.extend({
    min:function(a,b){
        return a>b?b:a;
    },
    max:function(a,b){
        return a>b?a:b;
    },
    leftTrim:function(str){
        return str.replace(/^\s+/,'');//正则表达式
    },//去除左边的空格
    rightTrim:function(str){
        return str.replace(/\s+$/,'');//正则表达式
    },//去除右边的空格
    reverCheck:function(){
        this.each(function(){//this指向当前调用方法的jQuery对象
            this.checked = !this.checked;//this指向dom元素
        })
    }
})//扩充到了jQuery对象上面的方法    可以直接使用

**根据工具对象扩展$.extend({})**
**根据jQuery对象扩展$.fn.extend({})**
------------------------------
<script>
console.log($.min(3,9));
var str = '    at guigu  '
console.log('----'+$.leftTrim(str))
console.log($.rightTrim(str)+'----')
</script>
--------------------------------------------------
function $(){
    var obj = {};
    obj.name='abc';
    obj.say=function(){
        alert()
        return this
    }
    obj.eat=function(){
        alert();
        return  this;
    }
    return obj;
}
$().say().eat().say().eat();//**对象链式开发**
--------------------------------------------------------
**多库共存**
jQuery.noConflict();//jQuery可以释放$的使用权,让另一个库正常使用$   那么jQuery就只可以使用jQuery
jQuery(function(){
    alert()
})//约等于window.onload执行时间有点慢
$();//执行快
**加载图片和代码执行速度不匹配**
<img/>//有一个加载图片
script里面有一个console.log($img.width())//拿取图片尺寸的操作 那么  但是图片还没加载完 而且代码执行得快 那么拿到的就是0
1.  解决的方法可以是
window.onload=function(){
    console.log($img.width());//页面加载完再来执行代码
}
2.  $(fucntion(){
    console.log()
})等同于$(document).ready(function(){

})
**document.ready是 dom加载完成只看dom 可以绑定多个**
**window.onload是外部资源全部加载完成才来执行 只能绑定一个**
**简易的便签**
$(function(){
    var dataJson = [{
        'content':'吃饭'
    },{
        'content':'打豆豆'
    },{
        'content':'睡觉'
    }];
    //获取ul元素
    var $todoMain = $('.todp-main');
    var $checkAll = $('#checkAll');
    function bingData(data){
        for(var i = 0;i< data.length;i++){
            $todoMain.append('<li>吃饭</li>..<span>'+data[i].content+'</span>')
        }
        //更新任务总数
        allTodos();       
    }
    function allTodos(){
            $('#allTodos').html($todoMain.children('li').length)
        }
        //更新已完成的任务数
        function allCompletedTodos(){
            $('#allCompleteTodos').html($todoMain.find(':checkbox:checked').length)
        }

    bingData(dataJson);
    //判断任务是否全部被选中
    $todoMain.delegate('.todoItemn input','click',function(){

    })
    $checkAll.click(function(){
        $todoMain.find(':checkbox').prop('checked',this.checked);
        allCompleteTodos()
    });
    //移入移出显示删除按钮
    $todoMain.delegate('.todoItem','mouseenter',function(){
        $(this).css();
        $(this).children('button').show();
    })
    $todoMain.delegate('.todoItem','mouseleave',function(){
        $(this).css();
        $(this).children('button').hidden();
    });
    //删除按钮的功能
    $todoMain.delegate('.todoItem button','click',function(){
        $(this).parent().remove();
        //更新任务总数
        allTodos()
        $checkAll.prop('checked',$todoMain.find(':checked:not(:checked)').length==0 && $todoMain.find('li').length!=0)
    })
    $('#removeAllCompleted').click(function(){
        $todoMain.find(':checkbox:checked').parent().parent().remove();
        allTodos();
    })
    //根据输入内容创建
    $('#newTodo').keydown(function(event){
        //所有创建相关的逻辑    都要在回车前提下
        if(event.keyCode=='13'){
            //判断输入的值  去除空格
            if($.trim($(this).val())){
                //执行创建的逻辑
                var data = [{
                    'content':$(this).val()
                }]
                bindData();
                //更新全选状态  新增的任务是未选择状态
                $checkAll.prop('checked',false);
            }else{
                alert('不要输入空信息');
            }
                $(this).val('');
        }
    })
})
-----------------------------------------------------
**字体溢出隐藏width:0;overflow:hidden;**
//居中对齐  他的一半    我的一半
二次触发事件的时候  引起权重问题    那么可以设置一些值为空值
0
#   less练习
@zero:0;
*{margin:@zero;}
变量
@zero:0;
@wrap:wrap;
@w:width;
#@{wrap}{}//用到了wrap名    相当于#wrap{}
@{w}:200px;//作为属性值来使用
li{width:200px;height:200px;line-height:40px;
&:hover{background:pink;//**&代表当前元素li**}}
# 独立实现栅格系统
    <!-- 全局设置 -->
    <!--在自己的myGrid.less里面 引入了normalize.less -->
@import 'normalize';
<!-- 清除浮动 -->
.clearfix{
    &:after{
        content:'';
        display:block;
        clear:both;
    }
}
<!-- 变量声明 -->
@screen-lg:1200px;
@screen-md:992px;
@screen-sm:768px;
<!-- container容器的宽度 -->
@container-lg-width:1170px;
@container-md-width:970px;
@container-sm-width:750px;
<!-- 列宽 -->
@grid-gutter-width:30px
<!-- 总的列数 -->
@grid-columns:12;
<!-- 实现容器 -->
.make-container(){
    <!-- container容器的实现 -->
    .container{
               .container-common-style();
.clearfix();
<!-- 等同于&.extend(.clearfix all);清除浮动 -->
        @media(min-width:@screen-xs){
            width:@container-xs-width;
        }
        @media(min-width:@screen-sm){
            width:@container-sm-width;
        }
        @media(min-width:@screen-md){
            width:@container-md-width;
        }
        @media(min-width:@screen-lg){
            width:@container-lg-width;
        }
    }
     .container-fluid{
         .container-common-style();
     }
     <!-- 混合了一个通用的样式 -->
     .container-common-style(){
          margin-right:auto;
        margin-left:auto;
        padding-left:@grid-gutter-width/2;
        padding-right:@grid-gutter-width/2;
     }
}
.make-container();
<!-- 行的设置 -->
.make-row{
    .row{
        margin-left:-@grid.gutter.width/2;
        margin-right:-@grid.gutter.width/2;
    }
}
.make-row();
<!-- 1-12列的设置 -->
.make-grid-columns(){
    .col(@index){
        .col(@index+1,@index);
    }
    .col(@index,@list) when (@index <=@grid-columns){
        <!-- 变量拼接 -->
        @selector:~'@{list},@{index}';
        .col(@index+1,@selector);
    }
    .col(@index,@list)when(@index>@grid-columns){
        @{list}{
            padding-left:@grid-gutter-width/2;
            padding-right:@grid-gutter-width/2;
        }
    }
    .col(1);
}
.make-grid-columns();
<!-- 1-12列修改版的设置 -->
.make-grid-columns(){
    .col(@index){
        @selector:~'.col-xs-@{index},.col-sm-@{index},.col-md-@{index},.col-lg-@{index}';
        .col(@index+1,@selector);
    }
    .col(@index,@list) when (@index <=@grid-columns){
        <!-- 变量拼接 -->
        @selector:~'@{list},.col-xs-@{index}',.col-sm-@{index},.col-md-@{index},.col-lg-@{index};
        .col(@index+1,@selector);
    }
    .col(@index,@list)when(@index>@grid-columns){
        @{list}{
            padding-left:@grid-gutter-width/2;
            padding-right:@grid-gutter-width/2;
            position:relative;
            min-height:1px;
            float:left;
        }
    }
    .col(1);
}
.make-grid-columns();
<!-- 超小屏幕的宽度设置 -->
.make-xs-column-width(){
    .col(@index) when(@index<=@grid-columns){
        <!-- 拼接变量 -->
        @selector:~'.col-xs-@{index}';
        <!-- 样式 -->
        @{selector}{
            @w:@index/@grid-columns * 100;;
            width: ~'@{w}%';
            <!--等同于 width:percentage(@index/@grid-columns); -->
        }
        .col(@index+1);
    }
    .col(1);
}
.make-xs-column-width();
<!-- 超小屏幕下的偏移设置 -->
.make-xs-column-offser(){
    .col(@index) when(@index<=@grid-columns){
        @selector:~'.col-xs-offset-@{index}';
        <!-- 样式控制 -->
        @{selector}{
            margin-left:percentage{@index/@grid-columns};
        }
        .col(@index+1);
    }
    .col(1);
}
.make-xs-column-offser();
<!-- 媒体查询阶段 小屏幕情况 -->
@media (min-width:@screen-sm){
    .make-sm-column-width(){
        .col(@index) when(@index<=@grid-columns){
            @selector:~'.col-sm-@{index}';
        }
        @selector{
            width:percentage(@index/@grid-columns);
        }
        .col(@index+1);
    }.col(1);
}
<!-- 封装函数来随着屏幕大小的变换来变换 -->
.make-column-width(@type){
    .col(@index) when(@index<=@grid-columns){
            @selector:~'.col-@{type}-@{index}';
        }
        @selector{
            width:percentage(@index/@grid-columns);
        }
        .col(@index+1);
    }.col(1);
}
.make-column-width(sm);
------------------------------------------------
var a = document.getElementByTagName('div');
window.onclick = function(){
	document.body.style.background='black';
}
------------------------------
#   手机端练习
var close = document.quertSelector('')
close.addEventListener('touchstart',function(){
    b.style.display='none';
})
##  解决点击穿透问题
函数参数传递一个参数
然后        e.preventDefault();-->解决了穿透问题
