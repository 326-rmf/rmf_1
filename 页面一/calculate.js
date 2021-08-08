//croakFrogs问题
//用到的方法for let of    if  else if    Math.max
let out = function(){
    //变量的初始化-->记录数据 比较 规则
    let c=0,r=0,o=0,a=0,k=0,num=0;
    for(let i of croakFrogs){
    if(i == 'c'){c++}
    else if(i =='r'){r++}
    else if(i=='o'){o++}
    else if(i=='a'){a++}
    else if(i=='k'){k++}
    //其他多余的字母就会直接出错
    else return -1
    //后面记录的数据会小于前面记录的数据	规则
    if(r>c||o>r||a>o||k>a){return -1}
    //记录青蛙的数目
    num = Math.max(num,c)
    if(k == 1){
    c--;
    r--;
    o--;
    a--;
    k--;
    }
    return (c || r || o || a || k) ? -1:num
    }
    }
    



//数组min方法
//用到方法      push   Matn.min      length  []
var MinStack = function(){
this.stack1 = []
this.stack2 = [Infinity]
}
Minstack.prototype.push = function(x){
this.stack1.push(x)
this.stack2.push(Math.min(this.stack2[this.stack2.length-1],x))//函数的嵌套使用
}

    

//链表反转      数组的方式输出
//使用的方法  push   unshift  while   []
var listReverse = function(list){
var arr = []
while(list){
    //数组前插入了list链表的数据        头插入的方法
    arr.unshift(list.val)
list = list.next
}
return arr
}




//链表反转
//改变数据指向的问题
//1->2->3->null         null<-1<-2<-3
var out = function(head){
    //链表前一个值
    var prev =  null
    //链表后面一个值
    var curr = head
    while(curr){
        //存储链表的下一个数据值    用来循环改变指向问题    存储数据要提前存储
        var next = curr.next
        //curr.next节点被存储之后才能改变指向   改变指向
        curr.next = prev
        //反转完成一轮的时候  后面一个值  赋值给前面一个值  再来循环赋值
        prev = curr
        curr = next
    }
    return prev
}




//链表map添加数据   get数据来改变数据值
//map函数的应用
//判断是否为空的条件属性            next属性记得判断是否为空的条件
//map函数的实例化let myMap = new Map()
//map.set(node,new Node(node.val))----->给node设置node.val的值
//map.get(node).val = map.get(node.val)------->给node赋值node.val的值
var copyRandomList = function(head) {
    //判断链表是不是为空
    if(!head) return head;
    //取得链表的头部值索引
    let node = head;
    //利用map函数来遍历链表 map函数里面的set   get方法
    let map = new Map();
    // 复制节点，将新节点放入map中
    while(node){
        //map的set函数的应用
        map.set(node, new Node(node.val));
        //链表指针指向下一个值属性
        node = node.next;
    }
    //node遍历完成之后指向了最后的索引  重新定义指向
    node = head;

    //对map里的新节点进行遍历操作
    while(node){
        //map.get()函数的应用       next条件运算符判断是否为空的条件  map.get(node.next)
        map.get(node).next = map.get(node.next) === undefined ? null : map.get(node.next);
        map.get(node).random = map.get(node.random);
        node = node.next;
    }
    return map.get(head);
};





//字符串的左旋转的实现就是      从左边截取字符串放置到右边去
var result = function(s,n){
//slice函数是左闭右开区间截取字符串的       concat再来连接字符串
    return s.slice(n).concat(s.slice(0,n))
} 




//找到数组里面存在的所有重复的数字
//对象里面存在数组来记录数据的数量  比如字母a的数量 b的数量
//{}-->{a:2,b:3}        记录属性值的变化        {[]}模式记录数据量的变化        单纯的数字的变化
//难点      1.{}对象的想到来记录数据的数据量值        2.数据值的初始化 undefined的联想     3.在对象里面拿去数据的形式就是obj[i]的形式
var result = function(arr){
    let obj = {}
    //对象里面存在的属性值来记录对应的属性有多少的数量
    for(let i = 0;i < arr.length;i++){
        if(obj[arr[i]] === undefined){
//当属性值不存在的时候就初始化属性为1
            obj[arr[i]] = 1
        }else{

            //之后属性值存在的时候就持续加上存在的属性值
        obj[arr[i]]++;

        }
    }
    for(let i of obj)
    {
        //遍历属性值    长度大于2的就会输出
        if(obj[i]>2){
            return i
        }
    }
}



//错误使用了就是for(i of obj)的方法-->i本身代表了数据   
//错误用成了for基本循环的形式
//for(let i of obj)------》obj[i]---->这样对于普通的数组会出错      
//for of函数里面的i就代表了数组里面的数据 不用再次嵌套数据的变化  除非就是obj里面的数据是数组的形式 也就是说是{[]}的形式    


//链表相加的操作
//链表的反向相加操作
var addTwoNumbers = function(l1, l2) {
//链表的头和尾部        head   tail         转换链表的时候用到prev curr
    let head = null, tail = null;
//相加大于10的标记量
    let carry = 0;
    //链表存在
    while (l1 || l2) {
        //const 标记变量的时候      不允许改变  const val = l1?l1.val:0
        const n1 = l1 ? l1.val : 0;
        //链表取得数据值    前      判断链表是否为空的性质
        const n2 = l2 ? l2.val : 0;
        //相加的时候记得加上多余加数的标记量
        const sum = n1 + n2 + carry;
        if (!head) {
            //头部初始化        说明原先头部是不存在的
            head = tail = new ListNode(sum % 10);
        } else {
            //尾部链表插入数据
            tail.next = new ListNode(sum % 10);
            //改变指针的指向
            tail = tail.next;
        }
        //标记相加多余标记数       floor向下取得整数        ceil向上取得整数
        carry = Math.floor(sum / 10);
        if (l1) {
            //链表继续下去的标志        还有就是        改变指向问题
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        //取得标记多余整数      添加到对应的数据
        tail.next = new ListNode(carry);
    }
    return head;
};


//字符串里面最长的不含有重复字符的字符串    
//假设字符串的长度是n   那么就会产生n个标识长度的值     因为一个字符串包含了首和尾  那么长度为n的字符串应该依次从1到n  
// 进行n次比较得出n个值     得出最大的哪个数值
//字符串长度的获取就是右边指针的下标减去左边指针的下标+1    -->得出字符串的 长度
//难点  1.就是字符串想到用set函数来遍历       记录   2.右指针减去左指针+1       3.右边指针做限制就是不可有重复字符出现
//用到的函数    set()     has()判断右指针是否会出现相同的字符     delete()删除左边的指针        charAt(index)得到对应index下面的记录的数据值    Math.max
//while()循环可以轻松得到一轮下来的结果值
//经典代码总结
//container.delete(s.charAt(index))    删除左边指针
//!container.has(s.charAt(index+1))判断右指针是不是含有重复的字符     container.add(s.charAt(rPointer + 1))添加到字符串
var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过	set就是数组去重的操作
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        //因为第一次第一个字符开始遍历    那么就不用删除    注意是第一次才不删除    第二次就要删除了
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1));
        }
        //右边限制不可以超过字符串的长度        并且就是字符串中不可以包含重复的字符        一轮的不出现重复字符的字符串出来了
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            occ.add(s.charAt(rk + 1));
            //继续向右去遍历字符串
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串      右边的指针下标减去左边的指针下标加1 得出字符串的长度
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};




//求出两个数组来排列得出的中位数
//用到了方法 concat()来连接两个数组     还有就是sort()方法来对数组进行升降序的排序算法      箭头函数的应用
//Math.floor()向下取整      Math.ceil()向上取整     toFixed()就是指定结果保留到小数后面多少位数
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = []
    nums = nums1.concat(nums2)
    nums.sort((a,b)=>a-b)
    let len = nums.length
    if(len%2){
        var len1 = Math.floor(len/2)
        return nums[len1].toFixed(5)
    }
    else{
        var result = ((nums[len/2]+nums[len/2-1])/2).toFixed(5)
        return result
    }
    };





//得到回文字符串的长度最大  采用的是从中间依次解析法
    /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //字符串长度小于2的时候 直接返回字符串  例如''  直接返回空  'a' 直接返回a 
    if (s.length<2){
        return s
    }
    //用于比较的字符串量        还有就是一轮循环完毕之后的记录的作用
    let res = ''
    for (let i = 0; i < s.length; i++) {
    //从0开始循环比较
        // 回文子串长度是奇数
        helper(i, i)
        // 回文子串长度是偶数
        helper(i, i + 1) 
    }
    function helper(m, n) {
        //字符串的左右长度做好了限制    然后就是应对了回文的要求
        while (m >= 0 && n < s.length && s[m] == s[n]) {
            m--
            n++
        }
        // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻  也就是说s[m]!=s[n]的时候    长度的计算本来是n-m+1   
        //但是由于两边不相等    那么就会多减去2 也就是n-m-1
        // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
        if (n - m - 1 > res.length) {
            // slice也要取[m+1,n-1]这个区间 
            res = s.slice(m + 1, n)
        }
    }
    return res
};





/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//字符串和行数
 var convert = function(s, numRows) {
     //行数是一行的 时候直接返回原来的字符串    不用z字形排列
    if(numRows == 1)
        return s;
//找出是字符串长度小还是给的行数少  作为一个最小值的基准
    const len = Math.min(s.length, numRows);
    const rows = [];
    //声明了一个数组        忘记每个元素加上一个空的字符串
    for(let i = 0; i< len; i++) rows[i] = "";
    //记录当前行
    let loc = 0;
    //是否改变添加的方向        注意判断的条件
    let down = false;
//经典代码      遍历字符串 for of函数
    for(const c of s) {
        rows[loc] += c;
        //条件行数转换的关键点  就判断是不是在第一行或者是不是在最后一行
        if(loc == 0 || loc == numRows - 1)
        //条件满足就会改变加元素的方向  是向下      还是向上
            down = !down;
        loc += down ? 1 : -1;
    }

    let ans = "";
    //加上遍历的字符串数据
    for(const row of rows) {
        ans += row;
    }
    return ans;
};




//整数反转算法就是  先取余数    再来进行相加运算
//运算32位数据的时候要用的的是位运算符      !   ~   |  ^(这是异或符号)异或就是说两者不同才为真
//~	非	~ 5	~0101	1010	10
var reverse = function(x) {
    let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        //转换为32位数据来计算
        x = ~~(x / 10);
        rev = rev * 10 + digit;
        //32位有效数据的数据范围
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return rev;
};





/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let pre="",num="",idx=0
    while(s[idx]===" "){
        idx++;
    }

    while(s[idx]==="+"||s[idx]==="-"){
        if(pre){
            return 0;
        }
        pre=s[idx++];
    }

    while(s[idx]&&s[idx].charCodeAt()>=48&&s[idx].charCodeAt()<=57){
        num+=s[idx++];
    }

    let res=Number(pre+num)||0;
    res=Math.max((-2)**31,res);
    res=Math.min(2**31-1,res);
    return res
};




//数据的读入操作就是        判断空格和正负号
//charCodeAt()函数的操作        str[i].charCodeAt()返回的是数组元素的unicode编码

var myAtoi = function(s){
    let  index1 = 0
    let lastRes = ''
    let pre = ''
    //读取到空格字符的时候就省略读取        读取下一个index
    while(s[index1] == ' '){
        index++
    }
    //读取正负号的时候
    while(s[index] == '+' || s[index] == '-')
    {
        //读取连续的正负号会报错        再次进入函数读取了正负号        当然来纳许的正负号的读取就会报错
        if(pre)return 0
        pre = s[index++]
    }
    //既然读取的是数字那么就会用到charCodeAt()返回的是unicode编码       0-9的数字编码是48-->57
    while(s[index]&&s[index].charCodeAt()>=48&&s[index].charCodeAt()<=57){
        //数据的持续读取操作
        lastRes+=s[index++]

    }
    //读取到了数据就组合数据    否则就是直接返回0
    let lastNum = Number(pre+lastRes)||0
    //从左到右取到合适的数据        因为要求数据值要在(-2)**31    (2)**31-1之间
     lastNum = Math.max((-2)**31,lastNum)
     lastNum = Math.min(2**31-1,lastNum)
    return lastNum
}





//简单回文数        数据变化了记得保存原来的数据    在循环里面条件的变化     数据的计算   导致了数据的变化
var isPalindrome = function(x) {
    if(x<0)
    return false
    let num = 0
    let num1 = 0
    //num2来保存数据        方便后面数据 的比较
    let num2 = x
    while(x){
         num1 = x%10
        num = num*10 + num1
        //js的计算方式就是121/10        会以小数的方式呈现      12.1        那么就要取得整数    
        x = Math.floor(x/10)
    }
    if(num == num2){
        return true
    }else{
        //最终结果不等于的情况
        return false
    }
    };



