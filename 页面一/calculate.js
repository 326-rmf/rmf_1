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




//matrix里面寻找给定的 数据是否存在
//从第一行最后一个数据是转行的节点位置
//算法的节点关键位置找准之后就轻而易举
//用变量数据的时候先考虑数据是否存在可用
//这道题目的关键节点就是每一行最末尾数据        决定了下一轮循环是前往下面一行数据      还是前往前面的数据内容
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length == 0){
     return false
         }
         //若是没有第一个判断语句  而直接就是用matrix[0].length 那么遇到空的matrix的时候就会报错    程序不可继续执行下去
    let n = 0;m = matrix[0].length - 1;
    //数据长度范围的限制
    while(n < matrix.length && m >= 0){
        if(target == matrix[n][m]){
            return true
        }else{
            if(target > matrix[n][m]){
                //前往下面一行
                n++
            }else{
                //前往上一个数据
                m--
            }
        }
        
        
    }
    
   return false
};







//第一个只出现一次的字符
var firstUniqChar = function(s) {
    //遍历数据得出第一次出现和最后一次出现的下标是一样的
    for(let x of s){
        if(s.indexOf(x) === s.lastIndexOf(x)) return x
    }
    return ' '
};




//自己写数组去重        indexOf()  push
var unique = function(arr1){
    let arr2 = []
    let len = arr1.length
    for(let i = 0;i < len;i++){
        if(arr2.indexOf(arr1[i]) == -1){
            arr2.push(arr[i])
        }
    }
    return arr2
}


//数组装水问题就是  两边向中心汇聚  来计算最大的值
var res = function(arr){
    let len = arr.length
    let R = len - 1,L = 0
    let res = 0
    while(R>L){
        let minNum = Math.min(arr[R],arr[L])
        res = Math.max(minNum*(R - L),res)
        if(arr[R]>arr[L]){
            L++
        }else{
            R--
        }
    }
}



//整数转换位罗马数字
// M 1000 CM 900  D 500 CD 400 C 100 
var intToRoman = function(num) {
    //二维数组形成了一对一的关系        那么就是value    和   symbol的关系
    const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    const roman = [];
    for (const [value, symbol] of valueSymbols) {
        //从大到小依次来循环进行输出
        while (num >= value) {
            //满足一个整数的标志
            num -= value;
            //那么就插入一个罗马字符串
            roman.push(symbol);
        }
        //直到数据为 0 的时候就推出循环
        if (num == 0) {
            break;
        }
    }
    //最后连接字符串
    return roman.join('');
};




//罗马数字转换为了整数数字
//创新用法  用到了map函数       用到了get   set函数     set(key,value)
var romanToInt = function(s){
    var mySet = new Map()
    mySet.set('I', 1);
    mySet.set('V', 5);
    mySet.set('X', 10);
    mySet.set('L', 50);
    mySet.set('C', 100);
    mySet.set('D', 500);
    mySet.set('M', 1000);  
    let arr = 0
    let len = s.length
    for(let i = 0;i < len;i++)
    {
        //get()获取属性值
        var value = mySet.get(s[i])
        if(i<len-1&&value<mySet.get(s[i+1])){
            //罗马数字的特点就是前面的字母小于后面的字母的时候      数字的大小就减去前面的数字  然后就获取了数据
            arr -= value
        }else{
            //前面字母不小于后面字母的时候      直接加上前面字母的大小对应值
            arr += value
        }
    }
    //最后返回结果值
return arr
}





//寻找最长的相同的字符串前缀        然后就是输出while()循环     条件最好添加在最后面    不然会出现纰漏
var longestCommonPrefix = function(strs) {
    let len = strs.length
let minLen = strs[0].length
let str1 = ''
//在数组里面的字符串找出长度最小的字符串长度        Math.min()      s.length
for(const s of strs){
    minLen  = Math.min(minLen,s.length)
}
while(minLen){
str1 = strs[0].slice(0,minLen)

for(let i = 0;i < len;i++){
    if(strs[i].slice(0,minLen) == str1){
        if(i == len - 1){
            //得出结论的条件就是        最后一个字符串满足前缀相同
            return str1
        }
        continue
    }else{
        break
    }

}
minLen--
}
return ''

};




//三个数的和        循环的时候忘记了数组去重的操作  有三处操作时数组去重
var threeSum = function(nums) {
    let len = nums.length
    let arr1 = []
    let arr2 = []
    //
    if(len < 3)return arr1
    //数组排序
    nums.sort((a,b)=>a-b)
    if(nums[0]>0 || nums[len-1]<0)return arr1
    let R = len - 1,L = 0
    for(let i = 0;i < len;i++){
        if(i>0&&nums[i]==nums[i-1])continue//去重   第一个数字相同  那么后面找到的数字就是  也会相同    避免重复就要去重操作
        L = i + 1
        R = len - 1
        while(L < R){
        if(nums[i] + nums[L] + nums[R] == 0)
        {
            arr2.push([nums[i],nums[L],nums[R]])
            while(L<R&&nums[L]==nums[L+1])L++//去重         同上
            while(L<R&&nums[R]==nums[R-1])R--//去重
            L++
            R--
        }
        else if(nums[i] + nums[L] + nums[R] > 0)
        {
            R--
        }else{
            L++
        }

        }
    }
    return arr2
}


//三个数之和最接近target的结果
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let L = 0,R = 0
    let len = nums.length
    let minNum = Infinity
    let res = 0
    for(let i = 0;i < len;i++){
        R = len - 1
        L = i + 1
        while(L<R){
            const sum = nums[i]+nums[L]+nums[R]
            const minNum1 = Math.abs(sum-target)

            if(minNum1<minNum){
                //和数和目标数相差更加小的时候就会赋值
                minNum = minNum1
                res = sum
            }
            //和数大于目标数    R--
            if(sum > target){
                R--
            }
            else{
                L++
            }
        }
    }
    return res
    };



//

    var letterCombinations = function (digits) {
        let arr = [];
        //对象存储属性值        数字对应的字母      {[]}
        const obj = {
            2: ["a", "b", "c"],
            3: ["d", "e", "f"],
            4: ["g", "h", "i"],
            5: ["j", "k", "l"],
            6: ["m", "n", "o"],
            7: ["p", "q", "r", "s"],
            8: ["t", "u", "v"],
            9: ["w", "x", "y", "z"],
        };
        //拆分输入的数据    放进arr数组存放     遍历数组的时候拿出来        意义比较循环输出结果
        let digits2arr = digits.split("");
        for (let i = 0; i < digits2arr.length; i++) {
            //第一轮 遍历开始
            let temp = obj[digits2arr[i]];
            //起始数据的装载        进入
            if (arr.length == 0) {
                //三点运算符的应用
                arr.push(...temp);
            } else {
                //进入else  代表就是进入了第二个数据的读入以及遍历
                let medium = [];
                for (const item of arr) {
                    //数据的读入操作始终是以第一个数据为开始来读取的
                    for (const item1 of temp) {
                        //字符串的添加读取操作
                        medium.push(item + item1);
                    }
                }
                //for循环
                arr = newArr;
            }
        }
        return arr;
    };


var res = function(digits){
    let arr = []
    const obj = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };
    for(let i = 0;i < digits.length;i++){
        const temp = obj[digits[i]]
        //第一轮循环开始
        if(!arr.length){
            arr.push(...temp)
        }else{
            let medium = []
            for( const c1 of arr){
                for(const c2 of temp){
                    medium.push(c1+c2)
                }
            }
            arr = medium
        }
    }
    return arr
}



//给定了二叉树的结构 [3,9,20,null,null,15,7]           输出没有null的完整结构二叉树 [3,9,20,15,7]
var res = function(root){//root是二叉树的头节点     仅仅只有头节点  不包含后续节点的属性值
    //返回值不是null        而是空数组[]
if(!root)return []
//二叉树转换为了队列进行运算
const queue = [root]
//装载新的二叉树的数组存储
let arr2 = []
while(queue.length){
    const medium = queue.shift()
    arr2.push(medium.val)
    //根据位运算符号&&的特点就是      前面运算为假的时候直接结束了运算  那么相当于  if(){}简写了代码块
    medium.left&&queue.push(medium.left)
    medium.right&&queue.push(medium.right)
}
return arr2
}




//二叉树的层序遍历
var  levelOrder = function(root){
    //根节点是空的  直接返回空数组
    if(!root){
        return []
    }
    let arr1 = []
    let queue = [root]
    //遍历二叉树节点的开始
    while(queue.length){
        let arr2 = []
        //因为queue的长度经过一轮循环之后   值是不确定变化的    每一轮的长度就是这一层数的节点的个数
    for(let i = queue.length;i > 0;i--){
        let n = queue.shift()
        arr2.push(n.val)
        //节点的左右节点是否插入的问题
        n.left&&queue.push(n.left)
        n.right&&queue.push(n.right)

    }
    arr1.push(arr2)
}
return arr1
}





//链表标记删除元素      删除的是倒数的元素
//链表的结构就是        val  next结构
var removeNthFromEnd  = function(head,n){
    //定义要返回的链表的值属性
    let headList = new ListNode(0,head)
    //前后指针的定义
    slow = fast = headList
    //需要删除的元素的个数      fast后面移动n个元素
    while(n--)fast = fast.next
    //fast移动到了最后一个数据      防止移动到了最后一个数据
    if(!fast)return headList.next
    //假设链表的总长度是        N   fast移动了n     剩下了N-n =m      继续移动N-n=m     
    //利用数据的互补的性质就是      m下一个对应的就是要删除的元素
    while(fast.next){
        fast = fast.next
        slow = slow.next

    }

    //自己思考的逻辑是
    // while(fast){
    //     fast = fast.next
    //     slow = slow.next
    // }

    slow.next = slow.next.next
    return headList.next

}





//判断回文字符串是不是正确的
var isValid = function(s) {
    //定义一个栈队列        来进入栈  
    var stack = []
    //回文字符串的 长度是奇数的时候直接返回错误
    if(s.length % 2){
        //返回错误
        return false
    }
    for(var i = 0;i < s.length;i++){
        if(s[i] == '('){
            //第一个进入栈队列      遍历的时候就是第一个出去栈队列     就是完全回文的操作
        stack.push(')')}
        else if(s[i] == '{'){
        stack.push('}')}
        else if(s[i] == '['){
        stack.push(']')}else{
            if(stack.pop()!=s[i])
            return false
        }
    
    }
    //最后栈遍历完成        长度应该是0
    return stack.length == 0 
    };




//链表的 应用       链表1和链表2的排序问题
var mergeTwoLists = function(l1, l2) {
//新创建的链表      new ListNode(-1)
    var newList1 = new ListNode(-1)
    //链表的赋值引用        这样newList1就永远指向了头节点的值      但是总体的链表数据改变了
    let newList = newList1
    //链表都不可以为空链表
while(l1!=null && l2!=null)
{
   if(l1.val >= l2.val)
   {
       //链表交换数据       交换数据的时候是交换的指向数据方向的问题
       newList.next = l2
       //链表的指向已经被使用了     那么接下来就是链表下一个数据
       l2 = l2.next 
   }else
   {
       newList.next = l1
       l1 = l1.next 
   }
   //傀儡链表指向下一个数据
   newList = newList.next

}

//最后的数据体现        就是l1和l2中    有一个为空的时候        傀儡链表直接就指向了不为空的数据
newList.next = l1==null?l2:l1
//newList1始终指向的是新链表头节点的数据指向问题        那么最后返回数据
return newList1.next
};




//不重复括号        n对括号函数     不重复括号输出
var generateParenthesis = function(n) {
    const result = [];
    //n==0代表没有括号可以输出      那么最后直接输出空数组[]
    if (n == 0) {
        return result;
    }
    //Node()函数就是        节点的值,相关数据1,相关数据2
    const queue = [new Node('', n, n)];
    //n对括号说明有2n个数据的输入输出
    n = 2 * n;
    while (n > 0) {
        //队列的长度
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            //取出队列的头节点
            const curNode = queue.shift();
            if (curNode.left > 0) {
                //第一个数据        也就是说左边的括号还有剩余的 情况       push操作就会插入一个左边括号数据
                queue.push(new Node(curNode.res + "(", curNode.left - 1, curNode.right));
            }
            if (curNode.right > 0 && curNode.left < curNode.right) {
                //上同
                queue.push(new Node(curNode.res + ")", curNode.left, curNode.right - 1));
            }
        }
        //不明白为什么只除去了一个括号数据
        n--;
    }

    while (queue.length) {
        //取出queue队列里面的数据括号对应值     放入result数组输出
        result.push(queue.shift().res);
    }
    return result;
};





var generateParenthesis = function (n) {
    const res = [];
  
    //LRemain   rRemain是一种状态       广度优先算法就是不断消耗状态规律    直到状态消耗完成    是一种状态消除的递归算法
    const dfs = (lRemain, rRemain, str) => { // 左右括号所剩的数量，str是当前构建的字符串
      if (str.length == 2 * n) { // 字符串构建完成
        //一轮递归完成之后产生的不重复的数据    加入到对应的字符数集
        res.push(str);           // 加入解集
        return;                  // 结束当前递归分支
      }
      //要求左边状态括号数据还存在
      if (lRemain > 0) {         // 只要左括号有剩，就可以选它，然后继续做选择（递归）    
        //进入左边状态数据存在的递归调用情况
        dfs(lRemain - 1, rRemain, str + "(");
      }
      //必须有左边状态数据的消耗    右边状态数据才能允许消耗    递归
      if (lRemain < rRemain) {   // 右括号比左括号剩的多，才能选右括号
        dfs(lRemain, rRemain - 1, str + ")"); // 然后继续做选择（递归）
      }
    };
  
    dfs(n, n, ""); // 递归的入口，剩余数量都是n，初始字符串是空串
    return res;
  };




  var mergeKLists = function (lists) {
    const res = temp = new ListNode(null)
    //pre是计算结束之后的返回值     cur是当前元素
    lists.reduce((pre, cur) => {
        while (cur) {
            //链表节点插入pre数组里面
            pre.push(cur)
            //链表节点指向下一个节点
            cur = cur.next
        }
        return pre
    }, []).sort((n1, n2) => n1.val - n2.val).forEach(item => {
        //sort()排序链表的节点数据
        temp.next = new ListNode(item.val)
        console.log(temp)
        temp = temp.next
    })
    return res.next
};



//链表的两两交换的问题就是      索引的转换  而没有涉及链表节点值 的转换
//用到了递归        递归是 两两数据递归     规定数据的长度是大于2的 
//链表的长度遍历时  head.next               
var swapPairs = function(head) {
    //交换问题涉及到的数据是两个以上的数据      那么就是长度小于2的时候 就直接返回原来的连表示数据
    if(head == null || head.next == null){
        return head;
    }
    //定义一个链表节点指向  当前准备交换的数据变量      保存第二个数据的索引        准备交换数据值的时候        避免数据值丢失的尴尬
    //定义了头节点的索引保存
    const newHead = head.next
    //swapPairs()代表的就是下一轮数据的循环     但是前面要求循环的长度必须大于2
    head.next = swapPairs(newHead.next)
    //交换数据
    newHead.next = head
    //由于前面已经定义了头节点的索引数据     那么就可以安心使用完成递归之后     返回头节点的索引
    return newHead
};




//链表反转链表节点      1->2->3->4      4->3->2->1
//head是 1      tail是4
const myReverse = (head, tail) => {
    //保存5的节点
    let prev = tail.next;
    //头节点1
    let p = head;
    while (prev !== tail) {
        //nex指向2  3   4    nex在开始的地方取值后面k-1个数值
        //k个节点内部置换的时候 也要保存下一个节点的索引    用来循环遍历
        const nex = p.next;
        //这里头节点直接指向关键转折点      后面节点指向前面的节点
        p.next = prev;//1->5        2->1  3->2
        //剩余的就是k个节点内部的置换操作       从1开始
        prev = p;//1    2     
        p = nex;//2     3
    }
    return [tail, head];
}
var reverseKGroup = function(head, k) {
    //结果返回的链表值
    const hair = new ListNode(0);
    //结果链表索引获取头节点的索引
    hair.next = head;
    //傀儡链表pre的生成
    let pre = hair;

    while (head) {
        //尾部从头开始循环      查看长度k是否满足条件限制
        let tail = pre;
        // 查看剩余部分长度是否大于等于 k
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                //k不满足链表数值的置换的条件   那么就会直接返回链表数据
                return hair.next;
            }
        }
        //改变指向的时候    记得保存下一个数值的索引
        const nex = tail.next;
        //链表置换完成之后      首位数值是交换的
        [head, tail] = myReverse(head, tail);
        // 把子链表重新接回原链表
        pre.next = head;
        //尾部数据指向下一轮循环的数据开始
        tail.next = nex;
        //pre指向下一轮数据循环的开始
        pre = tail;
        //
        head = tail.next;
    }
    return hair.next;
};





//数组原地去重      数据的输入是引用输入的    
//  尾部插入        头部插入的方法  
//这道题目的特殊之处    是第一个元素的默认插入了
var removeDuplicates = function(nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    let fast = 1, slow = 1;
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            //前后数据不相同的时候      就插入前面的数据    
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};



//契合字符串        用到slice()函数来进行截取字符串比较     s
var strStr = function(haystack, needle) {
    let len = needle.length
    let len1 = haystack.length
    let count = len1 - len + 1
    if(len == 0)return 0
    for(var i = 0;i < count;i++){
        if(haystack.slice(i,len+i) == needle){
            return i
        }
    }
    return -1
    };




//32位数据      范围限制        取整数设置
var divide = function(dividend, divisor) {
    let res = 0
    if(divisor>0&&dividend<0   ||   dividend>0&&divisor<0)
             {res = Math.ceil(dividend/divisor)}else{
                 res= Math.floor(dividend/divisor)
             }
             if(res < (-2)**31){
                 return (-2)**31
             }else{
                 return res>2**31-1?2**31-1:res
             }
return 0
};





//一组排列数据的下一个数据      上升幅度要求最小
//132           213
 var nextPermutation = function (nums) {
    // 为了找更大的下一个数字
    // 1、需要将左边的小数和右边的大数交换
    // 2、然后将交换完的大数后改成升序

    // 找小数
    //
    let left = 0, temp = 0
    //循环结束就是      右边是一个递减序列left是一个小的数据
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            left = i - 1//0
            temp = i//1
            break
        }
    }
    // 找大数（因为temp后面都是递减的）
    //在一个递减数列里面找到最接近小的数据的数据作为两个数据的交换
    let right = 0
    for (let i = nums.length - 1; i >= temp; i--) {
        if (nums[i] > nums[left]) {
            right = i//2
            break
        }
    }
    // 交换
    let a = nums[left]
    nums[left] = nums[right]
    nums[right] = a
    // 交换完之后把temp到最后升序（直接取反）
    // nums = nums.slice(0, temp).concat(nums.slice(temp).reverse())
    for (let i = temp; i < temp + Math.floor((nums.length - temp) / 2); i++) {
        let p = nums[i]
        nums[i] = nums[temp + nums.length - i - 1]
        nums[temp + nums.length - i - 1] = p
    }
};


//判断二叉树本身是不是镜像树
var isSymmetric = function(root) {
    //二叉树的根节点是空的  直接返回null        代表空二叉树
    if(!root)return null
    return res(root.left,root.right)
    };
    var res = function(L,R){
        //函数的递归调用就是    一个函数产生两个自己的递归函数      最后增加的是二倍数增加的速度来增加      符合二叉树的概念
        //左右节点都是空 的情况     说明比较到了最后为空 的情况 返回结果就是true
    if(L===null && R===null)return true
    //不满足上述条件说明有一个以上的树还有节点数据      那么其中有一个是空的就对应不上数据      就返回false
    else if(L===null||R===null||L.val!==R.val)return false
    //1--->2--->4----->8---->2**n           2的指数级增长速度       适应了二叉树的变化规则
    return res(L.left,R.right)&&res(L.right,R.left)
    }


//[4,5,6,7,0,1,2]       0
    var search = function(nums, target) {
        let len = nums.length;
        let L=0,R = len -1;
        //数据/2
        while(L<=R){
        let mid = (L+R)>>1
            if(target == nums[mid])return mid
            if(nums[L] < nums[mid]){
            if(target >= nums[L] && target <= nums[mid])R=mid -1
            else L=mid+1}
            else{if(target >= nums[mid] && target <= nums[R])L=mid +1
            else R=mid-1}
        }
    return nums[L+1] == target?L+1:-1
    };


//数独的遍历
var isValidSudoku = function(board, h = {}) {
    //遍历一个熟读数据不重复        三目运算符
    var v = (k, n) => h[k] ? (h[k][n] ? false : h[k][n] = 1) : (h[k] = [], h[k][n] = 1)
    //双重for遍历       
    for (var i = 0; i < 9; i++)
        for (var j = 0, m = i / 3 | 0; n = j / 3 | 0, j < 9; j++) 
            if (board[i][j] !== '.' && (
               !v(18 + m * 3 + n, board[i][j]) ||
               !v(i, board[i][j]) ||
               !v(j + 9, board[i][j]))) return false
    return true
};    



//子数组和的最大值
//类似做生意    及时止损        因为是连续的    有损失了就重头开始
var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];//第一个数字
    //数据遍历
    nums.forEach((x) => {
        //第一个数据开始    连续变弱的话及时止损    选择当前    还是加上当前继续下去
        //目前情况和以前一起的情况是一起的
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};




//价值礼物的题目
//一条道路获得最大的数据
//有点像二维数组的叠加问题      先把第一行  第一列路径铺好
const maxValue = grid => {
    // 行、列
    const [m, n] = [grid.length, grid[0].length];
    // 创建行m列n的二维数组
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // const dp = new Array(m,n)
    // (0,0)位置初始化
    dp[0][0] = grid[0][0];
    // 第一列初始化
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    // for(let i = 1;i < m;i++){
    //     dp[i][0] = dp[i -1][0] + grid[i][0]
    // }

    // 第一行初始化
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    // 遍历，完善dp数组
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[m - 1][n - 1];
};


//dfs深度优先算法
//0--->25对应了字母表示
var translateNum = function(num) {
    //数字转换为字符串运算
    let str = num.toString()
const dfs = (str,pointer)=>{
    //字符串到达最后一个时候返回数据    是可以翻译的 
    if(pointer>=str.length-1)return 1
    //字符串转换为数据计算
    let Num = Number(str[pointer]+str[pointer+1])
    if(Num>=10&&Num<=25)
    //可以两位数据翻译  数据结果        可以两位数据翻译就选择两位数据翻译      
    //两位数据翻译里面包含了一位数据的翻译      返回数据相加
    return dfs(str,pointer+1)+dfs(str,pointer+2)
    else
    return dfs(str,pointer+1)
}
return dfs(str,0)
};



//最长不重复字符串的长度    对象来获取相应字符属性记录出现次数      只可以出现一次
//获取对象属性的长度        Object.keys(obj).length
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0)
    return 0
    if(s.length == 1)
    return 1
    let obj = {}
    let maxNum = 0
    for(let i = 0;i < s.length;i++){
    let j = i
    while(j<s.length){
    if(obj[s[j]]){
        maxNum=Math.max(maxNum,Object.keys(obj).length)
    for(let key in obj){
        delete obj[key]
    }
        break
    }else{
        obj[s[j]]=1
        j++
    }
    }
    }
    return maxNum
};



//输出链表的数据        倒数链表中的倒数k个数据
var getKthFromEnd = function(head, k) {
    //head1链表记录链表节点的个数
    let head1 = new ListNode(-1)
    //head3链表记录节点的开始和k的互补的关系
    let head3 = new ListNode(-1)
    //取出 链表的头部索引
    head1.next = head
    head3.next = head
    //返回的链表的最终倒数的数据链表
    let head2 = new ListNode(-1)
    let count = 0
    while(head1.next){
    count++
    head1 = head1.next
    }
    while(count){
        //正面计算      到达最后倒数第k个数据的时候     记得改变head2来链表数据的指向问题
        if(count==k){
            head2.next = head3.next
            return head2.next
        }
        head3 = head3.next
        count--
        
    }
    };


//数组里面不可重复使用数字

const combinationSum2 = (candidates, target) => {
    candidates.sort((a,b) => a - b ); // 升序排序
    const res = [];
  
    const dfs = (start, temp, sum) => { // start是索引 当前选择范围的第一个
      if (sum >= target) {        // 爆掉了，不用继续选了
        if (sum == target) {      // 满足条件，加入解集
          res.push(temp.slice()); // temp是引用，所指向的内存后续还要操作，所以拷贝一份
        }
        return;                   // 结束当前递归
      }
      for (let i = start; i < candidates.length; i++) {             // 枚举出当前的选择
        if (i - 1 >= start && candidates[i - 1] == candidates[i]) { // 当前选项和左邻选项一样，跳过
          continue;
        }
        temp.push(candidates[i]);              // 作出选择
        dfs(i + 1, temp, sum + candidates[i]); // 基于该选择，继续选择，递归
        temp.pop();               // 上面的递归结束，撤销选择，回到选择前的状态，切入另一分支
      }
    };
  
    dfs(0, [], 0);
    return res;
  };
  




  var multiply = function(num1, num2) {
      //为0的字符串返回的是'0'
    if (num1 === '0' || num2 === '0') {
        return '0'
    }
    //new 了一个新的数组
    var l1 = num1.length, l2 = num2.length, p = new Array(l1 + l2).fill(0)
    for (var i = l1; i--;) {
        for (var j = l2; j--;) {
            var tmp = num1[i] * num2[j] + p[i + j + 1]
            p[i + j + 1] = tmp % 10
            p[i + j] += 0 | tmp / 10
        } 
    }
    while(p[0] === 0) {
        p.shift()
    }
    return p.join('')
};



//奇数头插入    偶数未插入
var exchange = function(nums) {
    let nums2 = []
    nums.filter((item,index)=>{
        if(item%2){
            nums2.unshift(item)
        }else{
            nums2.push(item)
        }
    })
    return nums2
};

//值为偶数就向后面排列
var exchange = function(nums){
    let len = nums.length
    let x = 0
    for(let i = 0;i < len;i++){
        if(nums[i]%2==0){
            [nums[x],nums[len-x-1]]=[nums[len-x-1],nums[x]]
            x++
        }
    }
    return nums
}



//数据和等于target值
//巧用L  R  L<R
var twoSum = function(nums, target) {
    let R = nums.length -1
    let L = 0;
    while(L < R){
        let sum  =nums[L]+nums[R]
        if(sum ==target)return [nums[L],nums[R]]
        else if(sum > target)R--
        else L++
    }
    };



//机器人行走步数问题
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function(m, n, k) {
    let total = 0
    let obj = {}
    function runing(i,j){
      //边界直接返回
      if(i < 0 || j < 0 || i >= m || j >= n) return
      //变为数组        然后累加数据
      let sum = (i + '' + j).split('').reduce((a,b) => +a + +b)
      //变为JSON字符串来记录数据
      let axis = JSON.stringify([i,j])
      //JSON字符串不存在
      if(sum <= k && !obj[axis]){  // 当该点还没走过 和 满足 不大于k 时 继续执行
        total++
        obj[axis] = true  // 标识该点已经走过, 下次不进
        // 当前的继续 上下左右 走
        runing(i + 1, j)
        runing(i, j + 1)
        runing(i - 1, j)
        runing(i, j - 1)
      }
    }
    runing(0,0)
    return total
  };



//贪心算法
//
  var jump = function(nums) {
    let curIndex = 0
    let nexIndex = 0
    let step = 0
    for(let i = 0;i < nums.length-1;i++){
        //包括了全部下一条  到达一个数据的结束末尾选择其中最大的数据跳数
    nexIndex = Math.max(nums[i]+i,nexIndex)
    if(i == curIndex){
        curIndex = nexIndex
        step++
    }
    }
    return step
    };
  


//回溯算法
//全排列可用回溯的方法
    var permute = function(nums) {

        let res = []
        let path = []
        backtracking(nums,nums.length,[])
        return res
        function backtracking(n,k,used){
        if(k==path.length)
        {
        res.push(Array.from(path))
        return 
        }
        //循环次数的决定性操作
        for(let i = 0;i < k;i++){
            //将数据一个一个装入进去        用过就装下一个
            if(used[i]) {continue;}
            path.push(nums[i])
            //标记数据已经被使用
            used[i]=true
            backtracking(n,k,used)
            //一轮回溯结束取出后面的数据
            path.pop()
            used[i]=false
        }        }}



//这个函数的动作是里面包含了一个匿名函数自调用
function perm(arr) {  
    (function fn(n) { //为第n个位置选择元素  
        for(var i=n;i<arr.length;i++) {  
            //交换数据值
            swap(arr,i,n);  
            if(n+1<arr.length-1) //判断数组中剩余的待全排列的元素是否大于1个  
                fn(n+1); //从第n+1个下标进行全排列  
            else 
                show(arr); //显示一组结果  
            swap(arr,i,n);  
        }  
    })(0);  //匿名函数自调用的传递参数
}




/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    const res = [];
    const path = [];

    if(!root) {
        return []
    }

    function findPath(root, target) {
        if(root.left) {
            path.push(root.val);
            findPath(root.left, target - root.val)
            path.pop()
        }
        if(root.right) {
            path.push(root.val);
            findPath(root.right, target - root.val)
            path.pop()
        }
        if(!root.left && !root.right) {
            // 找到了一条路径
            if(target === root.val) {
                path.push(root.val);
                // 注意这里是 path 的拷贝
                res.push(path.slice())
                path.pop();
            }
            return;
        }
    }

    findPath(root, target);

    return res
};




//字节跳动遍历数组数据
let userNumber = readline()
let likeArray = readline().split(' ')
let searchNumber = readline()
let searchGroup = []
let arr = []
let result = 0
for(let i = 0;i < searchNumber;i++){
    //数据变为二维数组
searchGroup[i] =readline().split(' ')
}
likeArray.forEach((item,index)=>{
if(arr[item] == undefined)
arr[item] = []
arr[item].push(index)
})
for(let i = 0;i <searchNumber;i++){
    let start = searchGroup[i][0] - 1
    let end = searchGroup[i][1] - 1
    let value = searchGroup[i][2]
    if(!arr[value])
    {console.log(0)
    }
    else{
        let result = 0
    arr[value].forEach((item,index)=>{
        if(item>=start&&item<=end){
            result++
        }
    })
    print(result)
}
}




//字节跳动手艺人

let ballNums,linkNums, colorNums, ballColor =[], sameColorBall = [], count = 0;
[ballNums,linkNums, colorNums]=readline().split(' ');

// 数组的每个元素都是一个数组，元素数组的第一位代表颜色个数，后续代表所用颜色
for(let i = 0; i < ballNums; ++i) {
    ballColor[i] = readline().split(' ').map(item => Number(item))
}

//将同一颜色出现的串珠序号进行收集
//要求的sameColorBall是[,[1],[1,3,4],[1,3,5]]
ballColor.forEach((item, index) => {
    // 若该串珠所用颜色种类大于0
    // console.log(item, 'item');
    if(item[0] > 0) {
        let colorArr = item.slice(1)
        // 下面的item代表不同的颜色种类
        colorArr.forEach(color => {    
            // 如果之前已经保存过使用某颜色的串珠序号，则直接将其添加到数组中去
            if(sameColorBall[color]) {
                sameColorBall[color].push(index + 1)
            } else {
               sameColorBall[color] = [index + 1]
            }
        })
    }
})


sameColorBall.forEach(item=>{
    for(let i=0;i<item.length-1;i++){
        //原答主用的是++i
        if(item[i+1]-item[i]<linkNums){
            ++count;
            break;	//因为当前珠子已被检测出不符合要求，无需后续检测
		}
		//注意：这里的难点在于手串是一个圈，要考虑循环的情况，考虑头尾有没有出现不满足要求
		if(ballNums+item[0]-item[item.length-1]<linkNums){	
		//item.length-1也可以写成-1，即item[item.length-1]
		//此时的第1颗珠子相当于第6颗珠子，即ballNums+item[0]
			++count;
			break;
		}     
    }    
})

console.log(count)





//双向链表头尾的指向问题就是注意最后一个以及第一个
//pre是最后一个pre.right = head     head.left = pre
var treeToDoublyList = function(root) {
    if(!root)return
    let head = 0
    let pre=0
    dfs(root)
    pre.right=head
    head.left=pre
    return head
    function dfs(root){
        if(!root)return
        //递归算法找出二叉搜索树最左边  也就是最小的一个数字    
        dfs(root.left)
        if(pre)pre.right=root
        //else执行一步来确定头节点
        else head=root
        root.left=pre
        //保存当前节点去往下一个节点数据
        pre=root
        //不要忘记寻找右边节点数据
        dfs(root.right)
    
    }
    
    }


//字符串读取反转字符串返回
let str = readline()
let doNum = readline()
for(var i=0;i<doNum;i++){
let pl = readline().split(' ')
let start  = pl[0]
let len = pl[1]
let temp = str.slice(start,len+start).reverse().join('')
let str = str.slice(0,start)+temp+str.slice(start+len)
}
print(str)


//数组数据拼接为最小的 数据
var minNumber = function(nums) {
    nums.sort((a,b)=>(a+''+b)-(b+''+a))
    return nums.join('')
    
    };



//set函数
    //set对象是值的集合 你可以插入的顺序来迭代它的元素  set中 的元素只出现一次      就是set中的元素是唯一的
    var isStraight = function(nums) {
        let set = new Set()
        let min = 13
        let max = 0
        for(const num of nums){
        if(!num)continue
        if(set.has(num))return false
        set.add(num)
        min = Math.min(min,num)
        max = Math.max(max,num)
        
        }
        return max-min<5
        
        };



//回溯方法来解决不重复的全排列
        var permuteUnique = function(nums){
            //数组升序排列
            nums.sort((a,b)=>a-b)
            let result = []
            let path = []
            function backtracing(used){
            if(path.length === nums.length){
            //path数组的长度等于原始数组的长度的时候	记得直接返回
            result.push(path.slice())
            return 
            }
            for(let i = 0;i < nums.length;i++){
            //前面一个数据和当前的数据是相等的	并且前面的数据没有使用过
            if(i>0&& nums[i] === nums[i-1]&&!used[i-1]){
            continue
            }
            if(!used[i]){
            //数据标记已经被使用了
            used[i]=true
            path.push(nums[i])
            //继续回溯下一个元素
            backtracing(used)
            //数据返回的时候	记得就是取出最后一个数据
            path.pop()
            //并且标记数据没有被使用过
            used[i]=false
            }
            }
            }
            backtracing([])
            return result
            }





//一个函数来放置数据
//放置数据的格式是数组  还是对象    记得加上this指向问题
//var A = function(){this.data = []}
var MedianFinder = function() {
    this.data = []
    };
    
    /** 
     * @param {number} num
     * @return {void}
     */
//函数原型对象上面加上对应的函数方法        也就是动作      一个函数要完成怎样的动作    实现怎样的功能
//  A.prototype.functiona = function(){}        函数就是为实例对象添加要计算的属性
    MedianFinder.prototype.addNum = function(num) {
    this.data.push(num)
    };
    
    /**
     * @return {number}
     */
//函数要找出数据里面的中位数        
//中位数的找出有一些情况        数据的个数是奇数个      数据的个数是偶数个
//奇数个数据直接找出排序后的数据的最中间的数据来返回数据        medium = (len-1)/2 | 0---->操作就是对求得的原始数据进行向下取整数Math.floor()
//用或的方法    比起        Math.floor()        更加快捷
    MedianFinder.prototype.findMedian = function() {
        const len = this.data.length
    if(!len)return null
    //忘记了数据要排序
    this.data.sort((a,b)=>a-b)
    //得出最中间的数据
    const medium =Math.floor((len-1)/2)
    //数据个数是奇数个
    if(this.data.length%2){
        return this.data[medium]
    }
    //数据个数是偶数个数据
    return (this.data[medium] + this.data[medium+1])/2
    };
    



//矩阵的翻转
//找出对应的数学规律
var rotate = function(matrix) {
    let n = matrix.length
    for(let i = 0;i < Math.floor(n/2);i++){
    for(let j = 0;j < Math.ceil(n/2);j++){
        let temp = matrix[i][j]
        matrix[i][j]  = matrix[n-j-1][i]
        matrix[n-j-1][i] = matrix[n-i-1][n-j-1]
        matrix[n-i-1][n-j-1] = matrix[j][n-i-1]
        matrix[j][n-i-1] = temp
    }
    
    }
    };