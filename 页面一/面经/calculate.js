//croakFrogs问题
//用到的方法for let of    if  else if    Math.max
let out = function () {
    //变量的初始化-->记录数据 比较 规则
    let c = 0, r = 0, o = 0, a = 0, k = 0, num = 0;
    for (let i of croakFrogs) {
        if (i == 'c') { c++ }
        else if (i == 'r') { r++ }
        else if (i == 'o') { o++ }
        else if (i == 'a') { a++ }
        else if (i == 'k') { k++ }
        //其他多余的字母就会直接出错
        else return -1
        //后面记录的数据会小于前面记录的数据	规则
        if (r > c || o > r || a > o || k > a) { return -1 }
        //记录青蛙的数目
        num = Math.max(num, c)
        if (k == 1) {
            c--;
            r--;
            o--;
            a--;
            k--;
        }
        return (c || r || o || a || k) ? -1 : num
    }
}




//数组min方法
//用到方法      push   Matn.min      length  []
var MinStack = function () {
    this.stack1 = []
    this.stack2 = [Infinity]
}
Minstack.prototype.push = function (x) {
    this.stack1.push(x)
    this.stack2.push(Math.min(this.stack2[this.stack2.length - 1], x))//函数的嵌套使用
}



//链表反转      数组的方式输出
//使用的方法  push   unshift  while   []
var listReverse = function (list) {
    var arr = []
    while (list) {
        //数组前插入了list链表的数据        头插入的方法
        arr.unshift(list.val)
        list = list.next
    }
    return arr
}




//链表反转
//改变数据指向的问题
//1->2->3->null         null<-1<-2<-3
var out_ = function (head) {
    //链表前一个值
    var prev = null
    //链表后面一个值
    var curr = head
    while (curr) {
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
var copyRandomList = function (head) {
    //判断链表是不是为空
    if (!head) return head;
    //取得链表的头部值索引
    let node = head;
    //利用map函数来遍历链表 map函数里面的set   get方法
    let map = new Map();
    // 复制节点，将新节点放入map中
    while (node) {
        //map的set函数的应用
        map.set(node, new Node(node.val));
        //链表指针指向下一个值属性
        node = node.next;
    }
    //node遍历完成之后指向了最后的索引  重新定义指向
    node = head;

    //对map里的新节点进行遍历操作
    while (node) {
        //map.get()函数的应用       next条件运算符判断是否为空的条件  map.get(node.next)
        map.get(node).next = map.get(node.next) === undefined ? null : map.get(node.next);
        map.get(node).random = map.get(node.random);
        node = node.next;
    }
    return map.get(head);
};





//字符串的左旋转的实现就是      从左边截取字符串放置到右边去
var result = function (s, n) {
    //slice函数是左闭右开区间截取字符串的       concat再来连接字符串
    return s.slice(n).concat(s.slice(0, n))
}




//找到数组里面存在的所有重复的数字
//对象里面存在数组来记录数据的数量  比如字母a的数量 b的数量
//{}-->{a:2,b:3}        记录属性值的变化        {[]}模式记录数据量的变化        单纯的数字的变化
//难点      1.{}对象的想到来记录数据的数据量值        2.数据值的初始化 undefined的联想     3.在对象里面拿去数据的形式就是obj[i]的形式
var result = function (arr) {
    let obj = {}
    //对象里面存在的属性值来记录对应的属性有多少的数量
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            //当属性值不存在的时候就初始化属性为1
            obj[arr[i]] = 1
        } else {

            //之后属性值存在的时候就持续加上存在的属性值
            obj[arr[i]]++;

        }
    }
    for (let i of obj) {
        //遍历属性值    长度大于2的就会输出
        if (obj[i] > 2) {
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
var addTwoNumbers = function (l1, l2) {
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
var lengthOfLongestSubstring = function (s) {
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
var findMedianSortedArrays = function (nums1, nums2) {
    let nums = []
    nums = nums1.concat(nums2)
    nums.sort((a, b) => a - b)
    let len = nums.length
    if (len % 2) {
        var len1 = Math.floor(len / 2)
        return nums[len1].toFixed(5)
    }
    else {
        var result = ((nums[len / 2] + nums[len / 2 - 1]) / 2).toFixed(5)
        return result
    }
};





//得到回文字符串的长度最大  采用的是从中间依次解析法
var longestPalindrome = function (s) {
    //字符串长度小于2的时候 直接返回字符串  例如''  直接返回空  'a' 直接返回a 
    if (s.length < 2) {
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
var convert = function (s, numRows) {
    //行数是一行的 时候直接返回原来的字符串    不用z字形排列
    if (numRows == 1)
        return s;
    //找出是字符串长度小还是给的行数少  作为一个最小值的基准
    const len = Math.min(s.length, numRows);
    const rows = [];
    //声明了一个数组        忘记每个元素加上一个空的字符串
    for (let i = 0; i < len; i++) rows[i] = "";
    //记录当前行
    let loc = 0;
    //是否改变添加的方向        注意判断的条件
    let down = false;
    //经典代码      遍历字符串 for of函数
    for (const c of s) {
        rows[loc] += c;
        //条件行数转换的关键点  就判断是不是在第一行或者是不是在最后一行
        if (loc == 0 || loc == numRows - 1)
            //条件满足就会改变加元素的方向  是向下      还是向上
            down = !down;
        loc += down ? 1 : -1;
    }

    let ans = "";
    //加上遍历的字符串数据
    for (const row of rows) {
        ans += row;
    }
    return ans;
};




//整数反转算法就是  先取余数    再来进行相加运算
//运算32位数据的时候要用的的是位运算符      !   ~   |  ^(这是异或符号)异或就是说两者不同才为真
//~	非	~ 5	~0101	1010	10
var reverse = function (x) {
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
var myAtoi = function (s) {
    let pre = "", num = "", idx = 0
    while (s[idx] === " ") {
        idx++;
    }

    while (s[idx] === "+" || s[idx] === "-") {
        if (pre) {
            return 0;
        }
        pre = s[idx++];
    }

    while (s[idx] && s[idx].charCodeAt() >= 48 && s[idx].charCodeAt() <= 57) {
        num += s[idx++];
    }

    let res = Number(pre + num) || 0;
    res = Math.max((-2) ** 31, res);
    res = Math.min(2 ** 31 - 1, res);
    return res
};




//数据的读入操作就是        判断空格和正负号
//charCodeAt()函数的操作        str[i].charCodeAt()返回的是数组元素的unicode编码

var myAtoi = function (s) {
    let index1 = 0
    let lastRes = ''
    let pre = ''
    //读取到空格字符的时候就省略读取        读取下一个index
    while (s[index1] == ' ') {
        index++
    }
    //读取正负号的时候
    while (s[index] == '+' || s[index] == '-') {
        //读取连续的正负号会报错        再次进入函数读取了正负号        当然来纳许的正负号的读取就会报错
        if (pre) return 0
        pre = s[index++]
    }
    //既然读取的是数字那么就会用到charCodeAt()返回的是unicode编码       0-9的数字编码是48-->57
    while (s[index] && s[index].charCodeAt() >= 48 && s[index].charCodeAt() <= 57) {
        //数据的持续读取操作
        lastRes += s[index++]

    }
    //读取到了数据就组合数据    否则就是直接返回0
    let lastNum = Number(pre + lastRes) || 0
    //从左到右取到合适的数据        因为要求数据值要在(-2)**31    (2)**31-1之间
    lastNum = Math.max((-2) ** 31, lastNum)
    lastNum = Math.min(2 ** 31 - 1, lastNum)
    return lastNum
}





//简单回文数        数据变化了记得保存原来的数据    在循环里面条件的变化     数据的计算   导致了数据的变化
var isPalindrome = function (x) {
    if (x < 0)
        return false
    let num = 0
    let num1 = 0
    //num2来保存数据        方便后面数据 的比较
    let num2 = x
    while (x) {
        num1 = x % 10
        num = num * 10 + num1
        //js的计算方式就是121/10        会以小数的方式呈现      12.1        那么就要取得整数    
        x = Math.floor(x / 10)
    }
    if (num == num2) {
        return true
    } else {
        //最终结果不等于的情况
        return false
    }
};




//matrix里面寻找给定的 数据是否存在
//从第一行最后一个数据是转行的节点位置
//算法的节点关键位置找准之后就轻而易举
//用变量数据的时候先考虑数据是否存在可用
//这道题目的关键节点就是每一行最末尾数据        决定了下一轮循环是前往下面一行数据      还是前往前面的数据内容
var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length == 0) {
        return false
    }
    //若是没有第一个判断语句  而直接就是用matrix[0].length 那么遇到空的matrix的时候就会报错    程序不可继续执行下去
    let n = 0; m = matrix[0].length - 1;
    //数据长度范围的限制
    while (n < matrix.length && m >= 0) {
        if (target == matrix[n][m]) {
            return true
        } else {
            if (target > matrix[n][m]) {
                //前往下面一行
                n++
            } else {
                //前往上一个数据
                m--
            }
        }


    }

    return false
};







//第一个只出现一次的字符
var firstUniqChar = function (s) {
    //遍历数据得出第一次出现和最后一次出现的下标是一样的
    for (let x of s) {
        if (s.indexOf(x) === s.lastIndexOf(x)) return x
    }
    return ' '
};




//自己写数组去重        indexOf()  push
var unique = function (arr1) {
    let arr2 = []
    let len = arr1.length
    for (let i = 0; i < len; i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
            arr2.push(arr[i])
        }
    }
    return arr2
}


//数组装水问题就是  两边向中心汇聚  来计算最大的值
var res = function (arr) {
    let len = arr.length
    let R = len - 1, L = 0
    let res = 0
    while (R > L) {
        let minNum = Math.min(arr[R], arr[L])
        res = Math.max(minNum * (R - L), res)
        if (arr[R] > arr[L]) {
            L++
        } else {
            R--
        }
    }
}



//整数转换位罗马数字
// M 1000 CM 900  D 500 CD 400 C 100 
var intToRoman = function (num) {
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
var romanToInt = function (s) {
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
    for (let i = 0; i < len; i++) {
        //get()获取属性值
        var value = mySet.get(s[i])
        if (i < len - 1 && value < mySet.get(s[i + 1])) {
            //罗马数字的特点就是前面的字母小于后面的字母的时候      数字的大小就减去前面的数字  然后就获取了数据
            arr -= value
        } else {
            //前面字母不小于后面字母的时候      直接加上前面字母的大小对应值
            arr += value
        }
    }
    //最后返回结果值
    return arr
}





//寻找最长的相同的字符串前缀        然后就是输出while()循环     条件最好添加在最后面    不然会出现纰漏
var longestCommonPrefix = function (strs) {
    let len = strs.length
    let minLen = strs[0].length
    let str1 = ''
    //在数组里面的字符串找出长度最小的字符串长度        Math.min()      s.length
    for (const s of strs) {
        minLen = Math.min(minLen, s.length)
    }
    while (minLen) {
        str1 = strs[0].slice(0, minLen)

        for (let i = 0; i < len; i++) {
            if (strs[i].slice(0, minLen) == str1) {
                if (i == len - 1) {
                    //得出结论的条件就是        最后一个字符串满足前缀相同
                    return str1
                }
                continue
            } else {
                break
            }

        }
        minLen--
    }
    return ''

};




//三个数的和        循环的时候忘记了数组去重的操作  有三处操作时数组去重
var threeSum = function (nums) {
    let len = nums.length
    let arr1 = []
    let arr2 = []
    //
    if (len < 3) return arr1
    //数组排序
    nums.sort((a, b) => a - b)
    if (nums[0] > 0 || nums[len - 1] < 0) return arr1
    let R = len - 1, L = 0
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue//去重   第一个数字相同  那么后面找到的数字就是  也会相同    避免重复就要去重操作
        L = i + 1
        R = len - 1
        while (L < R) {
            if (nums[i] + nums[L] + nums[R] == 0) {
                arr2.push([nums[i], nums[L], nums[R]])
                while (L < R && nums[L] == nums[L + 1]) L++//去重         同上
                while (L < R && nums[R] == nums[R - 1]) R--//去重
                L++
                R--
            }
            else if (nums[i] + nums[L] + nums[R] > 0) {
                R--
            } else {
                L++
            }

        }
    }
    return arr2
}


//三个数之和最接近target的结果
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let L = 0, R = 0
    let len = nums.length
    let minNum = Infinity
    let res = 0
    for (let i = 0; i < len; i++) {
        R = len - 1
        L = i + 1
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R]
            const minNum1 = Math.abs(sum - target)

            if (minNum1 < minNum) {
                //和数和目标数相差更加小的时候就会赋值
                minNum = minNum1
                res = sum
            }
            //和数大于目标数    R--
            if (sum > target) {
                R--
            }
            else {
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


var res = function (digits) {
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
    for (let i = 0; i < digits.length; i++) {
        const temp = obj[digits[i]]
        //第一轮循环开始
        if (!arr.length) {
            arr.push(...temp)
        } else {
            let medium = []
            for (const c1 of arr) {
                for (const c2 of temp) {
                    medium.push(c1 + c2)
                }
            }
            arr = medium
        }
    }
    return arr
}



//给定了二叉树的结构 [3,9,20,null,null,15,7]           输出没有null的完整结构二叉树 [3,9,20,15,7]
var res = function (root) {//root是二叉树的头节点     仅仅只有头节点  不包含后续节点的属性值
    //返回值不是null        而是空数组[]
    if (!root) return []
    //二叉树转换为了队列进行运算
    const queue = [root]
    //装载新的二叉树的数组存储
    let arr2 = []
    while (queue.length) {
        const medium = queue.shift()
        arr2.push(medium.val)
        //根据位运算符号&&的特点就是      前面运算为假的时候直接结束了运算  那么相当于  if(){}简写了代码块
        medium.left && queue.push(medium.left)
        medium.right && queue.push(medium.right)
    }
    return arr2
}




//二叉树的层序遍历
var levelOrder = function (root) {
    //根节点是空的  直接返回空数组
    if (!root) {
        return []
    }
    let arr1 = []
    let queue = [root]
    //遍历二叉树节点的开始
    while (queue.length) {
        let arr2 = []
        //因为queue的长度经过一轮循环之后   值是不确定变化的    每一轮的长度就是这一层数的节点的个数
        for (let i = queue.length; i > 0; i--) {
            let n = queue.shift()
            arr2.push(n.val)
            //节点的左右节点是否插入的问题
            n.left && queue.push(n.left)
            n.right && queue.push(n.right)

        }
        arr1.push(arr2)
    }
    return arr1
}





//链表标记删除元素      删除的是倒数的元素
//链表的结构就是        val  next结构
var removeNthFromEnd = function (head, n) {
    //定义要返回的链表的值属性
    let headList = new ListNode(0, head)
    //前后指针的定义
    slow = fast = headList
    //需要删除的元素的个数      fast后面移动n个元素
    while (n--) fast = fast.next
    //fast移动到了最后一个数据      防止移动到了最后一个数据
    if (!fast) return headList.next
    //假设链表的总长度是        N   fast移动了n     剩下了N-n =m      继续移动N-n=m     
    //利用数据的互补的性质就是      m下一个对应的就是要删除的元素
    while (fast.next) {
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
var isValid = function (s) {
    //定义一个栈队列        来进入栈  
    var stack = []
    //回文字符串的 长度是奇数的时候直接返回错误
    if (s.length % 2) {
        //返回错误
        return false
    }
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            //第一个进入栈队列      遍历的时候就是第一个出去栈队列     就是完全回文的操作
            stack.push(')')
        }
        else if (s[i] == '{') {
            stack.push('}')
        }
        else if (s[i] == '[') {
            stack.push(']')
        } else {
            if (stack.pop() != s[i])
                return false
        }

    }
    //最后栈遍历完成        长度应该是0
    return stack.length == 0
};




//链表的 应用       链表1和链表2的排序问题
var mergeTwoLists = function (l1, l2) {
    //新创建的链表      new ListNode(-1)
    var newList1 = new ListNode(-1)
    //链表的赋值引用        这样newList1就永远指向了头节点的值      但是总体的链表数据改变了
    let newList = newList1
    //链表都不可以为空链表
    while (l1 != null && l2 != null) {
        if (l1.val >= l2.val) {
            //链表交换数据       交换数据的时候是交换的指向数据方向的问题
            newList.next = l2
            //链表的指向已经被使用了     那么接下来就是链表下一个数据
            l2 = l2.next
        } else {
            newList.next = l1
            l1 = l1.next
        }
        //傀儡链表指向下一个数据
        newList = newList.next

    }

    //最后的数据体现        就是l1和l2中    有一个为空的时候        傀儡链表直接就指向了不为空的数据
    newList.next = l1 == null ? l2 : l1
    //newList1始终指向的是新链表头节点的数据指向问题        那么最后返回数据
    return newList1.next
};




//不重复括号        n对括号函数     不重复括号输出
var generateParenthesis = function (n) {
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
var swapPairs = function (head) {
    //交换问题涉及到的数据是两个以上的数据      那么就是长度小于2的时候 就直接返回原来的连表示数据
    if (head == null || head.next == null) {
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




//算法指针  判断链表是否存在闭环
//使用的是快慢指针的对比
function isCycle(head) {
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        slow = slow.next
        fast = fasr.next.next
        if (slow == fast) return true
    }
    //不存在闭环    返回false
    return false
}




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
var reverseKGroup = function (head, k) {
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
var removeDuplicates = function (nums) {
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
var strStr = function (haystack, needle) {
    let len = needle.length
    let len1 = haystack.length
    let count = len1 - len + 1
    if (len == 0) return 0
    for (var i = 0; i < count; i++) {
        if (haystack.slice(i, len + i) == needle) {
            return i
        }
    }
    return -1
};




//32位数据      范围限制        取整数设置
var divide = function (dividend, divisor) {
    let res = 0
    if (divisor > 0 && dividend < 0 || dividend > 0 && divisor < 0) { res = Math.ceil(dividend / divisor) } else {
        res = Math.floor(dividend / divisor)
    }
    if (res < (-2) ** 31) {
        return (-2) ** 31
    } else {
        return res > 2 ** 31 - 1 ? 2 ** 31 - 1 : res
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
var isSymmetric = function (root) {
    //二叉树的根节点是空的  直接返回null        代表空二叉树
    if (!root) return null
    return res(root.left, root.right)
};
var res = function (L, R) {
    //函数的递归调用就是    一个函数产生两个自己的递归函数      最后增加的是二倍数增加的速度来增加      符合二叉树的概念
    //左右节点都是空 的情况     说明比较到了最后为空 的情况 返回结果就是true
    if (L === null && R === null) return true
    //不满足上述条件说明有一个以上的树还有节点数据      那么其中有一个是空的就对应不上数据      就返回false
    else if (L === null || R === null || L.val !== R.val) return false
    //1--->2--->4----->8---->2**n           2的指数级增长速度       适应了二叉树的变化规则
    return res(L.left, R.right) && res(L.right, R.left)
}


//[4,5,6,7,0,1,2]       0
var search = function (nums, target) {
    let len = nums.length;
    let L = 0, R = len - 1;
    //数据/2
    while (L <= R) {
        let mid = (L + R) >> 1
        if (target == nums[mid]) return mid
        if (nums[L] < nums[mid]) {
            if (target >= nums[L] && target <= nums[mid]) R = mid - 1
            else L = mid + 1
        }
        else {
            if (target >= nums[mid] && target <= nums[R]) L = mid + 1
            else R = mid - 1
        }
    }
    return nums[L + 1] == target ? L + 1 : -1
};


//数独的遍历
var isValidSudoku = function (board, h = {}) {
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
var maxSubArray = function (nums) {
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
var translateNum = function (num) {
    //数字转换为字符串运算
    let str = num.toString()
    const dfs = (str, pointer) => {
        //字符串到达最后一个时候返回数据    是可以翻译的 
        if (pointer >= str.length - 1) return 1
        //字符串转换为数据计算
        let Num = Number(str[pointer] + str[pointer + 1])
        if (Num >= 10 && Num <= 25)
            //可以两位数据翻译  数据结果        可以两位数据翻译就选择两位数据翻译      
            //两位数据翻译里面包含了一位数据的翻译      返回数据相加
            return dfs(str, pointer + 1) + dfs(str, pointer + 2)
        else
            return dfs(str, pointer + 1)
    }
    return dfs(str, 0)
};



//最长不重复字符串的长度    对象来获取相应字符属性记录出现次数      只可以出现一次
//获取对象属性的长度        Object.keys(obj).length
var lengthOfLongestSubstring = function (s) {
    if (s.length == 0)
        return 0
    if (s.length == 1)
        return 1
    let obj = {}
    let maxNum = 0
    for (let i = 0; i < s.length; i++) {
        let j = i
        while (j < s.length) {
            if (obj[s[j]]) {
                maxNum = Math.max(maxNum, Object.keys(obj).length)
                for (let key in obj) {
                    delete obj[key]
                }
                break
            } else {
                obj[s[j]] = 1
                j++
            }
        }
    }
    return maxNum
};



//输出链表的数据        倒数链表中的倒数k个数据
var getKthFromEnd = function (head, k) {
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
    while (head1.next) {
        count++
        head1 = head1.next
    }
    while (count) {
        //正面计算      到达最后倒数第k个数据的时候     记得改变head2来链表数据的指向问题
        if (count == k) {
            head2.next = head3.next
            return head2.next
        }
        head3 = head3.next
        count--

    }
};


//数组里面不可重复使用数字

const combinationSum2 = (candidates, target) => {
    candidates.sort((a, b) => a - b); // 升序排序
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





var multiply = function (num1, num2) {
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
    while (p[0] === 0) {
        p.shift()
    }
    return p.join('')
};



//奇数头插入    偶数未插入
var exchange = function (nums) {
    let nums2 = []
    nums.filter((item, index) => {
        if (item % 2) {
            nums2.unshift(item)
        } else {
            nums2.push(item)
        }
    })
    return nums2
};

//值为偶数就向后面排列
var exchange = function (nums) {
    let len = nums.length
    let x = 0
    for (let i = 0; i < len; i++) {
        if (nums[i] % 2 == 0) {
            [nums[x], nums[len - x - 1]] = [nums[len - x - 1], nums[x]]
            x++
        }
    }
    return nums
}



//数据和等于target值
//巧用L  R  L<R
var twoSum = function (nums, target) {
    let R = nums.length - 1
    let L = 0;
    while (L < R) {
        let sum = nums[L] + nums[R]
        if (sum == target) return [nums[L], nums[R]]
        else if (sum > target) R--
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
var movingCount = function (m, n, k) {
    let total = 0
    let obj = {}
    function runing(i, j) {
        //边界直接返回
        if (i < 0 || j < 0 || i >= m || j >= n) return
        //变为数组        然后累加数据
        let sum = (i + '' + j).split('').reduce((a, b) => +a + +b)
        //变为JSON字符串来记录数据
        let axis = JSON.stringify([i, j])
        //JSON字符串不存在
        if (sum <= k && !obj[axis]) {  // 当该点还没走过 和 满足 不大于k 时 继续执行
            total++
            obj[axis] = true  // 标识该点已经走过, 下次不进
            // 当前的继续 上下左右 走
            runing(i + 1, j)
            runing(i, j + 1)
            runing(i - 1, j)
            runing(i, j - 1)
        }
    }
    runing(0, 0)
    return total
};



//贪心算法
//
var jump = function (nums) {
    let curIndex = 0
    let nexIndex = 0
    let step = 0
    for (let i = 0; i < nums.length - 1; i++) {
        //包括了全部下一条  到达一个数据的结束末尾选择其中最大的数据跳数
        nexIndex = Math.max(nums[i] + i, nexIndex)
        if (i == curIndex) {
            curIndex = nexIndex
            step++
        }
    }
    return step
};



//回溯算法
//全排列可用回溯的方法
var permute = function (nums) {

    let res = []
    let path = []
    backtracking(nums, nums.length, [])
    return res
    function backtracking(n, k, used) {
        if (k == path.length) {
            res.push(Array.from(path))
            return
        }
        //循环次数的决定性操作
        for (let i = 0; i < k; i++) {
            //将数据一个一个装入进去        用过就装下一个
            if (used[i]) { continue; }
            path.push(nums[i])
            //标记数据已经被使用
            used[i] = true
            backtracking(n, k, used)
            //一轮回溯结束取出后面的数据
            path.pop()
            used[i] = false
        }
    }
}



//这个函数的动作是里面包含了一个匿名函数自调用
function perm(arr) {
    (function fn(n) { //为第n个位置选择元素  
        for (var i = n; i < arr.length; i++) {
            //交换数据值
            swap(arr, i, n);
            if (n + 1 < arr.length - 1) //判断数组中剩余的待全排列的元素是否大于1个  
                fn(n + 1); //从第n+1个下标进行全排列  
            else
                show(arr); //显示一组结果  
            swap(arr, i, n);
        }
    })(0);  //匿名函数自调用的传递参数
}




/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    const res = [];
    const path = [];

    if (!root) {
        return []
    }

    function findPath(root, target) {
        if (root.left) {
            path.push(root.val);
            findPath(root.left, target - root.val)
            path.pop()
        }
        if (root.right) {
            path.push(root.val);
            findPath(root.right, target - root.val)
            path.pop()
        }
        if (!root.left && !root.right) {
            // 找到了一条路径
            if (target === root.val) {
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
for (let i = 0; i < searchNumber; i++) {
    //数据变为二维数组
    searchGroup[i] = readline().split(' ')
}
likeArray.forEach((item, index) => {
    if (arr[item] == undefined)
        arr[item] = []
    arr[item].push(index)
})
for (let i = 0; i < searchNumber; i++) {
    let start = searchGroup[i][0] - 1
    let end = searchGroup[i][1] - 1
    let value = searchGroup[i][2]
    if (!arr[value]) {
        console.log(0)
    }
    else {
        let result = 0
        arr[value].forEach((item, index) => {
            if (item >= start && item <= end) {
                result++
            }
        })
        print(result)
    }
}




//字节跳动手艺人

let ballNums, linkNums, colorNums, ballColor = [], sameColorBall = [], count = 0;
[ballNums, linkNums, colorNums] = readline().split(' ');

// 数组的每个元素都是一个数组，元素数组的第一位代表颜色个数，后续代表所用颜色
for (let i = 0; i < ballNums; ++i) {
    ballColor[i] = readline().split(' ').map(item => Number(item))
}

//将同一颜色出现的串珠序号进行收集
//要求的sameColorBall是[,[1],[1,3,4],[1,3,5]]
ballColor.forEach((item, index) => {
    // 若该串珠所用颜色种类大于0
    // console.log(item, 'item');
    if (item[0] > 0) {
        let colorArr = item.slice(1)
        // 下面的item代表不同的颜色种类
        colorArr.forEach(color => {
            // 如果之前已经保存过使用某颜色的串珠序号，则直接将其添加到数组中去
            if (sameColorBall[color]) {
                sameColorBall[color].push(index + 1)
            } else {
                sameColorBall[color] = [index + 1]
            }
        })
    }
})


sameColorBall.forEach(item => {
    for (let i = 0; i < item.length - 1; i++) {
        //原答主用的是++i
        if (item[i + 1] - item[i] < linkNums) {
            ++count;
            break;	//因为当前珠子已被检测出不符合要求，无需后续检测
        }
        //注意：这里的难点在于手串是一个圈，要考虑循环的情况，考虑头尾有没有出现不满足要求
        if (ballNums + item[0] - item[item.length - 1] < linkNums) {
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
var treeToDoublyList = function (root) {
    if (!root) return
    let head = 0
    let pre = 0
    dfs(root)
    pre.right = head
    head.left = pre
    return head
    function dfs(root) {
        if (!root) return
        //递归算法找出二叉搜索树最左边  也就是最小的一个数字    
        dfs(root.left)
        if (pre) pre.right = root
        //else执行一步来确定头节点
        else head = root
        root.left = pre
        //保存当前节点去往下一个节点数据
        pre = root
        //不要忘记寻找右边节点数据
        dfs(root.right)

    }

}


//字符串读取反转字符串返回
let str = readline()
let doNum = readline()
for (var i = 0; i < doNum; i++) {
    let pl = readline().split(' ')
    let start = pl[0]
    let len = pl[1]
    let temp = str.slice(start, len + start).reverse().join('')
    let str = str.slice(0, start) + temp + str.slice(start + len)
}
print(str)


//数组数据拼接为最小的 数据
var minNumber = function (nums) {
    nums.sort((a, b) => (a + '' + b) - (b + '' + a))
    return nums.join('')

};



//set函数
//set对象是值的集合 你可以插入的顺序来迭代它的元素  set中 的元素只出现一次      就是set中的元素是唯一的
var isStraight = function (nums) {
    let set = new Set()
    let min = 13
    let max = 0
    for (const num of nums) {
        if (!num) continue
        if (set.has(num)) return false
        set.add(num)
        min = Math.min(min, num)
        max = Math.max(max, num)

    }
    return max - min < 5

};



//回溯方法来解决不重复的全排列
var permuteUnique = function (nums) {
    //数组升序排列
    nums.sort((a, b) => a - b)
    let result = []
    let path = []
    function backtracing(used) {
        if (path.length === nums.length) {
            //path数组的长度等于原始数组的长度的时候	记得直接返回
            result.push(path.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            //前面一个数据和当前的数据是相等的	并且前面的数据没有使用过
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue
            }
            if (!used[i]) {
                //数据标记已经被使用了
                used[i] = true
                path.push(nums[i])
                //继续回溯下一个元素
                backtracing(used)
                //数据返回的时候	记得就是取出最后一个数据
                path.pop()
                //并且标记数据没有被使用过
                used[i] = false
            }
        }
    }
    backtracing([])
    return result
}





//一个函数来放置数据
//放置数据的格式是数组  还是对象    记得加上this指向问题
//var A = function(){this.data = []}
var MedianFinder = function () {
    this.data = []
};

/** 
 * @param {number} num
 * @return {void}
 */
//函数原型对象上面加上对应的函数方法        也就是动作      一个函数要完成怎样的动作    实现怎样的功能
//  A.prototype.functiona = function(){}        函数就是为实例对象添加要计算的属性
MedianFinder.prototype.addNum = function (num) {
    this.data.push(num)
};

/**
 * @return {number}
 */
//函数要找出数据里面的中位数        
//中位数的找出有一些情况        数据的个数是奇数个      数据的个数是偶数个
//奇数个数据直接找出排序后的数据的最中间的数据来返回数据        medium = (len-1)/2 | 0---->操作就是对求得的原始数据进行向下取整数Math.floor()
//用或的方法    比起        Math.floor()        更加快捷
MedianFinder.prototype.findMedian = function () {
    const len = this.data.length
    if (!len) return null
    //忘记了数据要排序
    this.data.sort((a, b) => a - b)
    //得出最中间的数据
    const medium = Math.floor((len - 1) / 2)
    //数据个数是奇数个
    if (this.data.length % 2) {
        return this.data[medium]
    }
    //数据个数是偶数个数据
    return (this.data[medium] + this.data[medium + 1]) / 2
};




//矩阵的翻转
//找出对应的数学规律
var rotate = function (matrix) {
    let n = matrix.length
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < Math.ceil(n / 2); j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[n - j - 1][i]
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
            matrix[j][n - i - 1] = temp
        }

    }
};





//寻找一个二叉树最深的长度就是二叉树有多少层
//根节点不可为0  1-->2--->4--->8
//下一层二叉树有一个都要加1
var maxDepth = function (root) {
    if (!root) return 0
    //计算最大的层数
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1

}




//平衡二叉树就是任意左右两个节点的层数相差是不大于1的
var isBalanced = function (root) {
    if (!root) return true
    //任意两个节点的层数相差是不大于1的
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(dfs(root.left) - dfs(root.right)) < 2
    function dfs(root) {
        if (!root) return 0
        //计算一个节点的最大的层数
        return Math.max(dfs(root.left), dfs(root.right)) + 1
    }
}




//前面n个数据的总和
var sumNums = function (n) {
    return n && n + sumNums(n - 1)
};



//找搜索二叉树两个节点的最近的祖先节点
//左边进去或者右边进去   会看成一颗新的树木来循环比较
//因为两个节点分布在树的两边的时候会返回树的根节点
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left
        }
        else if (p.val > root.val && q.val > root.val) {
            root = root.right
        }
        else {
            return root
        }
    }
};



//找一个普通二叉树的最近的祖先元素就是要有充足 的条件来确定数据的存在与否
var lowestCommonAncestor = function (root, p, q) {
    let ans;
    const dfs = (root, p, q) => {
        if (root === null) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        //  返回的数据不可能是没有子节点的  至少是倒数第二层的数据
        //保证倒数第二层数据的条件解释lson&&rson
        //一个节点的左右节点有一个存在并且根节点的数值等于其中一个目标数值
        //有两个节点值      或者        本身是节点值并且有一个节点值
        if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
            ans = root;
        }
        //一个单独节点若是节点数据等于其中一个目标数据就是返回的true否则返回的是false
        return lson || rson || (root.val === p.val || root.val === q.val);
    }
    dfs(root, p, q);
    return ans;
};



//数组中的字母异位词-------》就是两个单词包含的字母是相同的  但是位置是错位的
var groupAnagrams = function (strs) {
    //使用map函数来
    var myMap = new Map()
    for (let str of strs) {
        //数组里面的数据用for of 来迭代
        let arr1 = Array.from(str).sort()
        //这步操作之后获得了str的字典序
        let key = arr1.toString()
        //把原来的数据获取出来   没有的话就重启一个字典序的集合数组
        let list = myMap.get(key) ? myMap.get(key) : new Array()
        list.push(str)
        myMap.set(key, list)
    }
    //最后记得转换为数组
    return Array.from(myMap.values())
};


//低效率的自己写的阶乘函数
var myPow = function (x, n) {
    if (n == 0) return 1
    if (n == 1) return x
    let sum = 1
    if (x == -1 && n % 2) {
        return -1
    }
    else if (x == 1 || x == -1) return 1
    while (n > 0) {

        sum = sum * x
        n--
    }
    x = 1 / x

    while (n < 0) {
        sum = sum * x
        n++
    }
    return sum


}





//判断一个数组数据（后序遍历）是不是二叉搜索树
var verifyPostorder = function (postorder) {
    //数组长度为2以下都是对的
    if (postorder.length <= 2) return true
    //后序遍历最后一个数据是根节点
    let root = postorder.pop()
    let i = 0;
    //小于节点的数据都在树的左边
    while (postorder[i] < root) {
        i++
    }
    //剩余数据在节点的右边  都大于根节点
    let rightRoot = postorder.slice(i).every(item => item > root)
    return rightRoot && verifyPostorder(postorder.slice(0, i)) && verifyPostorder(postorder.slice(i))
};



//树的前序遍历  中序遍历来重建一个树
var buildTree = function (preorder, inorder) {
    //前序遍历长度为0   return null
    if (preorder.length == 0) return null
    //新建一个树的根节点
    let cur = new TreeNode(preorder[0])
    //获取树根节点在中序遍历的位置
    let curIndex = inorder.indexOf(preorder[0])
    //前序遍历左子树  中序遍历左子树
    cur.left = buildTree(preorder.slice(1, curIndex + 1), inorder.slice(0, curIndex))
    cur.right = buildTree(preorder.slice(curIndex + 1), inorder.slice(curIndex + 1))
    return cur
};




//不用加减乘除实现两数的和运算  位运算就是自动将数据转换为二进制数据进行运算
//用到的运算符是   &   ^   <<
var add = function (a, b) {
    while (b) {
        //计算ab的共同的数据位置        是加法的进一位 运算     当ab的共同位置和不同位置与 运算的时候结果是0就可以退出循环条件
        let c = (a & b) << 1
        //ab的不同位置的获取   ab的共同位置和不同位置的共同组成了ab的和
        a ^= b
        //b获取ab的共同位置
        b = c
    }
    return a
};


//返回 一个二进制数据中数字为1的个数
var hammingWeight = function (n) {
    let res = 0
    //0到31来依次遍历数位上的数据是不是1  是的话就返回res加1  最后返回结果
    //用到的运算符是&   <<左移到相应的位数上面去比较
    for (var i = 0; i < 32; i++) {
        if (n & (1 << i)) {
            res++
        }
    }
    return res
};


//自己的幂函数的写法就是
//考虑指数的正负
var myPow = function (x, n) {
    // 最后递归结果
    // 递归要有最终条件
    if (n === 0) return 1 // n=0直接返回1
    if (n < 0) {   				//n<0时 x的n次方等于1除以x的-n次方分 -n负负得正
        //负数的指数只是比整数的指数多了一个被除以1的操作  而后就是使用整数的写法去计算值
        return 1 / myPow(x, -n)
    }
    if (n % 2) {    // n是奇数时 x的n次方 = x*x的n-1次方 ===>转化为偶数
        //奇数的时候拉出一个原数据
        //剩下的偶数个数的数据来循环乘数
        return x * myPow(x, n - 1)
    }
    //利用2分的原理      减少运算的次数不断的运算结果    最后是二分结束的时候接的返回数据相乘的结果来拉出数据
    return myPow(x * x, n / 2) // n是偶数，使用分治，一分为二，等于x*x的n/2次方 （x*x）的n/2次方
}




//遍历一个matrix    m*n   要求顺时针输出数据值
var spiralOrder = function (matrix) {
    //矩阵的 行 或者  列为0的时候就会返回[]
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    //matrix的初始行数  列数
    const rows = matrix.length, columns = matrix[0].length;
    //初始化一个二维数组的方式
    const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));
    //二维数组总的数据的长度
    const total = rows * columns;
    //new  一个新的数组长度是total  添加初始值是0
    const order = new Array(total).fill(0);
    //一个方向性问题        顺时针的顺序就是右边  下边  左边  上边      myNum%4     来实现方向的转变
    //directionIndex来记录行的数据   改变s二维数组的行数  来操作数组的走向问题
    let directionIndex = 0, row = 0, column = 0;
    //[0,1]代表就是行数不变     列数到最后一列的数据  其他数据成员的操作是一样的    来操作数据是 行变化还是列变化的
    //这个二维数组的确立        二维数组的一行的 数据就两个  第一个来操作行数据的变化   第二个来操作列的数据变化
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    //数据的放入的操作就是依次去循环放入数据   判断数据有没有被使用过  到没到达边界位置数据
    for (let i = 0; i < total; i++) {
        //放入数据   row  column
        order[i] = matrix[row][column];
        //标记数据被使用过了
        visited[row][column] = true;
        //判断是下一行  还是下一列的数据变化了
        const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
        //得到了行列的数据来判断有无到达边界值
        if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))) {
            //数据的变化总共就四个方向 的变化       用除余的操作来记录数据是怎样的变化
            directionIndex = (directionIndex + 1) % 4;
        }
        row += directions[directionIndex][0];
        column += directions[directionIndex][1];
    }
    return order;
};





//计算数组当中只出现一次 的数据
//两个数据装换为二进制数据的时候就是相同的数据位置异或的结果是0
//找出不同的数据位置的特点就是要  num1^num2&1  那么相同的位置&1的操作结果就是0===0  
//然后标记一个数据长度来记录数据的长度变化      也即是有多少个相同的位置  直到找到数据不同的位置来计算数据
var singleNumbers = function (nums) {
    // 把结果保存到x，y中
    var x = 0
    var y = 0

    //根据异或的性质，的到异或结果，保存到res 
    //两个相同 的数据异或的结果是0 
    //那么最终的结果就是两个不同的数据的异或的结果
    var res = 0
    for (item of nums) {
        res ^= item
    }

    // 根据异或的结果，找出分组的位置，保存到l
    var l = 0
    //while循环的目的就是找出数据相同的位置做出相应的标记来记录数据
    //l++来记录数据的循环的 次数的 问题
    while ((res & 1) === 0) {
        res = res >>> 1
        l++
    }
    //然后遍历数组，根据l位置的不同分组，这样两个不同的数就会分到不同的组 
    for (var i = 0; i < nums.length; i++) {
        //找出数据不同的位置        一个数据的位置是0   一个数据的位置是1
        //l标记了相同的数据的长度  有多长的数据长度     直接右移来剪掉相同的数据的位置  来比较不同的数据的位置
        if ((nums[i] >> l) & 1) {
            x ^= nums[i]
        } else {
            y ^= nums[i]
        }
    }

    // 得到最终结果
    return [x, y]
};





//数据的 标志就是有着三种情况去书写数据的取值范围、
//数据在最开始  结尾位置   以及中间位置的取舍
var singleNumber = function (nums) {
    nums.sort((a, b) => a - b)
    let len = nums.length
    for (var i = 0; i < len; i++) {
        if ((nums[i] < nums[i + 1] && i === 0) || (nums[i] > nums[i - 1] && i === len - 1) || ((nums[i] < nums[i + 1]) && (nums[i] > nums[i - 1])))
            return nums[i]

    }
};


//算法分析
//对于32位数据的分析就是将数据转换为32位数据去处理数据
var singleNumber = function (nums) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        //32位数据的处理方式就是0---->32的处理的方式   记住就是32数据要处理完毕
        // 对于int每一位
        let bit = 0;
        // 计算该位上的和
        for (let num of nums) {
            //对于没一个数据都要进行&1的操作来记录不同的数据在32位数据当中  在这一位数据有无占有相应的位置
            //如果占有相应的位置  那么就会触发相应的响应的条件就是      原先右移的数据将会重新左移来恢复数据的存储
            bit += ((num >> i) & 1);
        }
        // 对3取余即为res在该位的值
        res += ((bit % 3) << i);
    }
    return res;
}



//记录一个数组当中数据的长度就是
//用一个对象来记录key    value  
//最后来比较value 的值的大小
//当然也可以使用map函数来遍历数组  更快的速度
var majorityElement = function (nums) {
    let len = nums.length
    if (len <= 2) return nums[0]
    let res = {}
    nums.map((item, index) => {
        if (!res[item]) res[item] = 1
        else res[item] += 1
    })
    // for(let num of nums){
    // if(!res[num])res[num]=1
    // else res[num]+=1
    // }
    for (const resNum in res) {
        if (res[resNum] >= Math.ceil(len / 2))
            return resNum
    }

};




var constructArr = function (a) {
    let res = []
    a.map((item1, index1) => {
        let sum = 1
        a.map((item2, index2) => {
            if (index1 != index2) {
                sum *= item2
            }
        })
        res.push(sum)
    })
    return res
};


var constructArr = function (a) {
    // 边界条件判断
    if (a == null || a.length == 0) {
        return a
    }
    let length = a.length;
    // 每个元素左边所有元素的乘积
    let resLeft = [];
    // 每个元素右边所有元素的乘积
    let resRight = [];
    // base case
    resLeft[0] = 1;
    resRight[length - 1] = 1;
    for (let i = 1; i < length; i++) {
        // 状态转移方程 resLeft[i]表示 当前元素左边的所有元素乘积（不包含当前元素）
        // resLeft[i - 1]不包括a[i - 1] 乘以✖️a[i-1]就表示当前 resLeft[i]
        resLeft[i] = resLeft[i - 1] * a[i - 1];
    }
    // 当前元素右边的所有元素乘积（不包含当前元素）
    for (let i = length - 2; i >= 0; i--) {
        resRight[i] = resRight[i + 1] * a[i + 1];
    }
    //左边乘以右边就是我们要求的结果
    let res = [];
    for (let i = 0; i < length; i++) {
        res[i] = resLeft[i] * resRight[i];
    }
    return res;
};


//螺旋矩阵
//方向的问题就是左到右   上到下     右到左   下到上
//数据循环交叉
var spiralOrder = function (matrix) {
    let row = matrix.length
    let col = matrix[0].length
    let t = 0
    let b = row - 1
    let l = 0
    let r = col - 1
    //找出总的数据的个数
    let sum = row * col
    let res = []
    //数据个数没有达标的情况
    while (sum !== res.length) {
        //从左到右
        for (let i = l; i <= r; i++) {
            res.push(matrix[t][i])
        }
        //下一次左到右的时候是从下一行开始  变换行数  既方便了下一次相同的变化  也方便了下次的遍历
        t++
        for (let i = t; i <= b; i++) {
            res.push(matrix[i][r])
        }
        //下一次上到下的时候是从倒数第二列开始
        r--
        if (res.length === sum) return res
        for (let i = r; i >= l; i--) {
            res.push(matrix[b][i])
        }
        //下一次右到左的时候行数变化了
        b--
        for (let i = b; i >= t; i--) {
            res.push(matrix[i][l])
        }
        //下一次下到上的时候 列数变化了
        l++
    }
    return res
}



//数据模仿进栈出栈的操作
var validateStackSequences = function (pushed, popped) {
    let arr = []
    let i = 0
    pushed.forEach((item, index) => {
        arr.push(item)
        //进栈的时候        长度大于0并且就是按可以按照出栈的顺序出栈
        //栈就是先进后出        后进先出
        while (arr.length > 0 && arr[arr.length - 1] === popped[i]) {
            arr.pop()
            i++
        }
    })
    return arr.length > 0 ? false : true
}



//匹配转换的数组
var strToInt = function (str) {
    //正则既是正负号开头        数字结尾
    str = str.trim().match(/^[+-]?\d+/)
    let max = Math.max((-2) ** 31, str)
    let min = Math.min(2 ** 31 - 1, max)
    return min


};


//滑动窗口就是分为左边和右边        来记录合适的窗口
//过了就缩小左边        少了就扩大右边
var findContinuousSequence = function (target) {
    let l = 1
    let r = 2
    let sum = 3
    let res = []
    // 滑动窗口框架
    while (l < r) {
        if (sum === target) {
            let ans = []
            for (let k = l; k <= r; k++) {
                ans[k - l] = k
            }
            res.push(ans)
            // 等于的情况 我们可以继续窗口往右搜索 同时缩小左边的
            sum = sum - l
            l++
        } else if (sum > target) {
            // 大于的条件 缩小窗口 sum已经加过了
            sum = sum - l
            l++
        } else {
            // 小于的情况 滑动窗口继续扩大
            r++
            sum = sum + r
        }
    }
    return res
};

//字符的全排列就是深度优先算法
var permutation = function (s) {
    let len = s.length
    let res = []
    let visited = []
    function dfs(path) {
        if (len === path.length) return res.push(path)
        for (var i = 0; i < len; i++) {
            //dfs每一层都有一个for循环去输出遍历    实现了全排列
            if (visited[i]) continue
            visited[i] = true
            dfs(path + s[i])
            //使用完成之后标记为 没有使用过
            visited[i] = false
        }
    }
    dfs('')
    return [...new Set(res)]
};



//字符串数据的二进制计算
//用到了BigInt()函数来接收字符串        并且转换二进制数据      
//最后是转换为二进制数据        并且是字符串形式
//toString(2)
//二进制数据是0b
// return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)


//位运算就是
//二进制数据的规律就是  
//奇数的二进制数据的1的个数是前面一个数据 的1的个数加上1
//偶数 的1的个数    是右移一位的数据的1的个数
var countBits = function (n) {
    const dp = new Array(n + 1);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        dp[i] = i % 2 ? dp[i - 1] + 1 : dp[i >> 1];
    }
    return dp;
};



//贪心算法      跳跃游戏就是求可以到达的最大的距离
//自己限定可以到达的高度游戏
var canJump = function (nums) {
    let len = nums.length
    if (len === 1) return true
    let num = 0
    //i<=num        说明可以达到的距离是受到每一步 的限制的
    for (var i = 0; i <= num; i++) {
        num = Math.max(num, i + nums[i])
        if (num >= len - 1) return true
    }
    return false
};


//百度算法      计算优质奶牛
let t = parseInt(readline());
while (t) {
    const arr = [];
    let n, m;
    const line1 = readline();
    n = parseInt(line1.split(' ')[0]);
    m = parseInt(line1.split(' ')[1]);
    let cur = m;
    while (cur) {
        let k = parseInt(readline());
        let tempArr = (new Array(n + 1)).fill(0);
        while (k) {
            const line2 = readline();
            const left = parseInt(line2.split(' ')[0]);
            const right = parseInt(line2.split(' ')[1]);
            for (let i = left; i <= right; i++) {
                tempArr[i] = 1;
            }
            k--;
        }
        arr.push(tempArr);
        cur--;
    }
    const res = [];
    for (let i = 1; i <= n; i++) {
        let flag = 1;
        for (let j = 0; j < m; j++) {
            if (arr[j][i] == 0) {
                flag = 0;
            }
        }
        if (flag) {
            res.push(i);
        }
    }
    print(res.length);
    print(res.join(' '));
    t--;
}



//二维数组的排序就是加上第一个索引的值  这样来进行排序
//放入数组的数据一直都是前面一个数据       
//前面一个数据放进去    之后        前面的数据应该变为现在的没有放入数据
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0]
    let result = []
    for (let i = 0; i < intervals.length; i++) {
        let cur = intervals[i]
        if (cur[0] > prev[1]) {
            result.push(prev)
            prev = cur
        } else {
            prev[1] = Math.max(cur[1], prev[1])
        }
    }
    //最后记得放入没有放入的数据
    result.push(prev)
    return result
};



//
var generateMatrix = function (n) {
    let total = n ** 2
    let t = 0
    let r = n - 1
    let b = n - 1
    let l = 0
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let count = 1
    while (count <= total) {
        for (let i = l; i <= r; i++) {
            res[t][i] = count
            count++
        }
        t++
        for (let i = t; i <= b; i++) {
            res[i][r] = count
            count++
        }
        r--
        for (let i = r; i >= l; i--) {
            res[b][i] = count
            count++
        }
        b--
        for (let i = b; i >= t; i--) {
            res[i][l] = count
            count++
        }
        l++
    }
    return res
};



//路径的匹配就是使用数组来取出特定的分隔符
//遇到符号记得相应的操作
var simplifyPath = function (path) {
    const dir = path.split('/'), stack = []
    for (const i of dir) {
        if (i === '.' || i === '') continue
        if (i === '..') {
            stack.length > 0 ? stack.pop() : null
            continue
        }
        stack.push(i)
    }
    return '/' + stack.join('/')
}



//链表的整体移动
//先将给定的链表连接成环，然后将指定位置断开
//特殊情况是  0     1       
var rotateRight = function (head, k) {
    if (k === 0 || !head || !head.next) {
        return head;
    }
    let n = 1;
    let cur = head;
    while (cur.next) {
        cur = cur.next;
        n++;
    }
    let add = n - k % n;
    if (add === n) {
        return head;
    }
    cur.next = head;
    while (add) {
        cur = cur.next;
        add--;
    }
    const ret = cur.next;
    cur.next = null;
    return ret;
};



//链表数据的重复值的去除    重复 的数据全部清除
//list1保存的是head链表的表头的地址值
//cur拿到head链表来进行改变成合适的输出链表
//list1就接着索引来输出合适的链表
//const list1 = new ListNode(0,head)
//let cur = list1
//设定一个初始数据值    这样可以用到next来两两比较数据的值
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head
    const list1 = new ListNode(0, head)
    let cur = list1
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const x = cur.next.val
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return list1.next
}



//链表数据的指向问题
//清除的重复的数据只保留一个数据
//使用链表的时候总是会用到辅助链表来完成    去除   的操作
//const list1 = new ListNode(0,head)
//let cur = list1
//list1来获取索引链表的表头树
//cur来实际操作来改变链表的数据
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head
    let cur = head
    while (cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
}



//考察的是链表的数据的基本存放链接数据
//小数值链表    的头信息的存储      链表具体数据的改变
//最后获取的是链表改变数据的值的最后的结果      也就是  list.next
//多余的0的数据直接记得省略这个多余无用的数据
//数据的存放结束之后记得指向下一个数据的地址
var partition = function (head, x) {
    let smallList = new ListNode()
    const smallHead = smallList
    let largeList = new ListNode()
    const largeHead = largeList
    while (head !== null) {
        if (head.val < x) {
            smallList.next = head;
            smallList = smallList.next
        } else {
            largeList.next = head
            largeList = largeList.next
        }
        head = head.next
    }
    largeList.next = null
    smallList.next = largeHead.next
    return smallHead.next
};



//
var reverseBetween = function (head, left, right) {
    // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;
    let pre = dummyNode;
    // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
    // 建议写在 for 循环里，语义清晰
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }
    // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
    let rightNode = pre;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next;
    }
    // 第 3 步：切断出一个子链表（截取链表）
    let leftNode = pre.next;
    let curr = rightNode.next;
    // 注意：切断链接
    pre.next = null;
    rightNode.next = null;
    // 第 4 步：同第 206 题，反转链表的子区间
    reverseLinkedList(leftNode);
    // 第 5 步：接回到原来的链表中
    pre.next = rightNode;
    leftNode.next = curr;
    return dummyNode.next;
};
const reverseLinkedList = (head) => {
    let pre = null;
    let cur = head;
    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
}


//链表数据的中间数据的翻转
//前面后面链表的链接部分是需要断开连接的    在来对中间需要翻转的链表来进行操作
//断开连接  接上翻转的链表的时候原来链表左边的数据接上翻转之后链表的右边的节点数据  
//返回虚拟节点的数据链表        拿取链表头节点的数据的索引的next
var reverseBetween = function (head, left, right) {
    let vNode = new ListNode()
    vNode.next = head
    let pre = vNode
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }
    let rightNode = pre
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next
    }
    let leftNode = pre.next
    let cur = rightNode.next
    pre.next = null
    rightNode.next = null
    let preNode = null
    let curNode = leftNode
    while (curNode) {
        const nextNode = curNode.next
        curNode.next = preNode
        preNode = curNode
        curNode = nextNode
    }
    pre.next = rightNode
    leftNode.next = cur
    return vNode.next

}


//链表转换为树数据
//链表的数据装入数组
//利用位运算来提高计算的速度
//不断获取中间数据  来个节点数据赋值
//链表本身就是一个有序链表  不用装入数组之后再来重新排序数组
//赋值树的根节点来依次向下赋值数组中的数据
var sortedListToBST = function (head) {
    const arr = []
    while (head) {
        arr[arr.length] = head.val
        head = head.next
    }
    function rmfCreateTree(start, end) {
        if (start > end) return null
        const mid = (start + end) >>> 1
        const root = new TreeNode(arr[mid])
        root.left = rmfCreateTree(start, mid - 1)
        root.right = rmfCreateTree(mid + 1, end)
        return root
    }
    return rmfCreateTree(0, arr.length - 1)
};



//扁平化链表的数据
//链表数据按照前序遍历放入一个数组中
//得到前序遍历的数组的数据再来操作  二叉树左右节点的数据
var flatten = function (root) {
    const list = []
    setData(root, list)
    const len = list.length
    for (let i = 1; i < len; i++) {
        let pre = list[i - 1]
        let cur = list[i]
        pre.left = null
        pre.right = cur
    }
}
function setData(root, list) {
    if (root) {
        list[list.length] = root
        setData(root.left, list)
        setData(root.right, list)
    }
}



//理解一个链表 数据结构     链表数据结构是val  next   random
//现在要创造一个链表的复制函数
//Node(val,next,random){this.val=val;this.next= next;this.random=random}
//map的数据结构是(key,val)      set的数据结构是(val,val)
function copyList(head) {
    let cur = head,
        res = new Map();
    while (cur) {
        res = res.set(cur, new Node(cur.val))
        cur = cur.next
    }
    //链表遍历之后再还原遍历一遍
    cur = head
    while (cur) {
        res.get(cur).next = res.get(cur.next) || null
        res.get(cur).random = res.get(cur.random) || null
        cur = cur.next
    }
    return res.get(head)
}



//双指针函数        左右可能会分别传入      奇数偶数 的情况函数
var longestPalindrome = function (s) {
    if (!s || s.length < 2) return s
    var len = s.length, res = ''
    function getRes(l, r) {
        while (l >= 0 && r < len && s[l] === s[r]) {
            l--
            r++
        }
        let len2 = r - l - 1
        // if(len2>res.length)
        // res = res.substr(l+1,len2)
        res = r - l - 1 > res.length ? s.slice(l + 1, r) : res;
    }
    for (let i = 0; i < len; i++) {
        getRes(i, i)
        getRes(i, i + 1)
    }
    return res
};




//手写call
//例子obj1.fn.call(obj2,...args)
Function.prototype.myCall = function (target) {
    //target为空的时候会指向window对象
    if (target === 'undefined' || target === null) {
        target = window
    }


    //target的函数      来改变调用者的指针指向
    target.fn = this
    //获取myCall函数的传入的参数
    var getArgs = [...arguments].slice(1)
    //最后对象上面是不能平白无故多出一个函数的      那么我们用一个变量来存储函数并且返回
    //并且记得删除平白无故多出的函数
    var res = target.fn(...getArgs)
    delete target.fn
    return res
}





//手写apply
//obj1.fn.apply(target,[args])
Function.prototype.myApply = function (target) {
    if (typeof this !== 'function') {
        throw new Error('wrong...')
    }
    target = target || window
    target.fn = this
    var getArgs = arguments[1]
    var res = target.fn(getArgs)
    Reflect.deleteProperty(target, 'fn')
    return res
}




//手写bind
//var fn2 = obj1.fn.bind(obj2)
//fn2()
Function.prototype.myBind = function (obj) {
    //改变函数的this指针    如果调用者类型不是函数      就是类型错误
    if (typeof this !== 'function') {
        throw new Error('Function.prototype error-what is tring to be bound')
    }

    //拿到调用者        也就是执行函数
    var _this = this
    //组合继承的方式
    var fn = function () { }
    var objArgs = Array.prototype.slice.call(arguments, 1)
    var bound = function () {
        let boundArgs = Array.prototype.slice.call(arguments)
        //bind函数返回的是一个函数          那么函数执行会立即执行调用的原本调用的函数
        //bound函数是调用函数的上一层封装       封装立即执行函数然后返回立即执行函数    
        //bound 函数还可以再次传入参数执行函数
        return _this.apply(this.constructor === _this ? this : obj, objArgs.concat(boundArgs))
    }
    fn.prototype = this.prototype
    bound.prototype = new fn()
    bound.prototype.constructor = bound
    return bound
}



//返回环相遇的节点      l存储的是链表的索引值       返回的也是链表的索引值
function getNode(head) {
    const visited = new Set()
    while (head) {
        if (visited.has(head)) {
            return head
        }
        visited.add(head)
        head = head.next
    }
    return null
}





//矩阵到达终点条件      跨过障碍物
//dp[m-1][n-1] = dp[m-2][n-1] + dp[m-1][n-2]
//当前到达的地点条件    是前面两个步骤达到地点添加的和数
var uniquePathsWithObstacles = function (obstacleGrid) {
    //矩阵行数
    let m = obstacleGrid.length,
        //矩阵列数
        n = obstacleGrid[0].length,
        //实例化一个二维矩阵        fill   map
        dp = Array(m).fill().map((item) => Array(n).fill(0))
    //第一行可以达到的添加是没有障碍物
    for (let i = 0; i < n && obstacleGrid[0][i] === 0; ++i) {
        dp[0][i] = 1
    }
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; ++i) {
        dp[i][0] = 1
    }
    //遍历矩阵  没有障碍物是可以达到的
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[m - 1][n - 1]
};



//状态压缩
var uniquePathsWithObstacles = function (obstacleGrid) {
    //矩阵行数
    let m = obstacleGrid.length,
        //矩阵列数
        n = obstacleGrid[0].length,
        dp = Array(n).fill(0);
    dp[0] = 1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0
            } else if (j > 0) {
                dp[j] += dp[j - 1]
            }
        }
    }
    return dp[n - 1]
};



//A-Z  对应的是1-->26     的编码和解码的条件
//一个字符解析是不为0   两个字符解析是前面一个字符不为0并且两个字符的数值是小于26
//状态方程  当前步数是前面两步步数的和      那么采取条件限制        注意数据的格式
var numDecodings = function (s) {
    const n = s.length;
    const f = new Array(n + 1).fill(0);
    f[0] = 1;
    for (let i = 1; i <= n; ++i) {
        if (s[i - 1] !== '0') {
            f[i] += f[i - 1];
        }
        if (i > 1 && s[i - 2] != '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
            f[i] += f[i - 2];
        }
    }
    return f[n];
};



//二叉搜索树是一种节点值之间具有一定数量级次序的二叉树，对于树中每个节点：
// 若其左子树存在，则其左子树中每个节点的值都不大于该节点值；
// 若其右子树存在，则其右子树中每个节点的值都不小于该节点值。

var generateTrees = function (n) {
    function buildTree(start, end) {
        let _result = []
        // 指针交错递归终止
        if (start > end) return [null] // 原来如此 
        // i指针滑动，枚举left和right分段的所有可能
        for (let i = start; i <= end; i++) {
            // 左侧和右侧生成树的集合 返回为数组
            let left = buildTree(start, i - 1)
            let right = buildTree(i + 1, end)
            // 循环左右两侧的树集合 分别拼接到新树上，并且存储到结果数组中
            // 从左子树集合中选出一棵左子树，从右子树集合中选出一棵右子树，拼接到根节点上
            for (const leftNode of left) {
                // left为空是这样的[null] 还是可以进来这个循环的 因为有这种场景你要想通 1==>2==>3 都是右子节点的情况
                for (const rightNode of right) {
                    let node = new TreeNode(i)
                    node.left = leftNode
                    node.right = rightNode
                    _result.push(node)
                }
            }
        }
        // 返回指定范围生成的树集合
        return _result
    }
    // n 为 0 是返回[]
    if (n === 0) return []
    // 指定最大范围
    return buildTree(1, n)
}



//1-n二叉搜索树的不同树     的      总数
//当前根节点可以组成的二叉树的数量    是左边数据可组成的二叉树数量  乘以    右边数据可组成的二叉树的数量
//遍历n个节点   每个节点来做一次根节点      最后将各节点可以组成 的二叉树的和加起来求取总和
//因为遍历n个节点   那么数组是n+1个节点     
//零个节点  一个节点可以组成一个二叉树
//那么从两个节点开始
var numTrees = function (n) {
    const G = new Array(n + 1).fill(0);
    G[0] = 1;
    G[1] = 1;

    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            //G[j-1]代表的左边的数据    以i为根节点的二叉搜索树的个数
            //G[n]得到需要前面的数据
            G[i] += G[j - 1] * G[i - j];
        }
    }
    return G[n];
};






//第三个字符串是否是前面两个字符串交叉组成的
//先要初始化第一行  第一列
//然后从第二行第二列开始查找数据
var isInterleave = function (s1, s2, s3) {
    let n1 = s1.length
    let n2 = s2.length
    if (n1 + n2 != s3.length) return false

    let dp = Array.from(new Array(n1 + 1), () => new Array(n2 + 1))
    dp[0][0] = true
    // 初始化   第一行和第一列初始化    类似机器人走达到终点
    for (let i = 1; i <= n1; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] == s3[i - 1]
    }
    for (let i = 1; i <= n2; i++) {
        dp[0][i] = dp[0][i - 1] && s2[i - 1] == s3[i - 1]
    }

    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            //从第二行的第二列开始查找
            //行数据满足条件        也就是第一个字符串满足条件
            //列数据满足条件        也就是第一个字符串满足条件
            dp[i][j] = dp[i - 1][j] && s1[i - 1] == s3[i - 1 + j] || dp[i][j - 1] && s2[j - 1] == s3[i + j - 1]
        }
    }

    // s1的前i项，当前项就是 s1[i-1] 
    return dp[n1][n2]
};




//杨辉三角      左上角[i-1][j-1]        右上角[i-1][j]
var generate = function (numRows) {
    const ret = [];

    for (let i = 0; i < numRows; i++) {
        //第i行数据 有i+1个数据         第i行数据 有i+1个数据  
        //首先初始化前面两行数据
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
        }
        ret.push(row);
    }
    return ret;
};





//最短的路径的长度
//首先初始化第一行      第一列的数据        数据初始化  是目标移动到对应的地方所需要的步数
//然后从第二行  第二列的数据开始遍历选择行走的最短的路径步数
//两边向中心包围的趋势来获取最终最短的路径
var minPathSum = function (grid) {
    let m = grid.length,
        n = grid[0].length
    //遍历初始化第一行数据      
    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    //
    for (let i = 1; i < n; i++) {
        grid[0][i] += grid[0][i - 1]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let top = grid[i][j] + grid[i - 1][j]
            let left = grid[i][j] + grid[i][j - 1]
            grid[i][j] = top > left ? left : top
        }
    }
    return grid[m - 1][n - 1]
};




//验证字符串是不是回文字符串
//先用正则表达式来将字符串中的空格  下划线  去除掉并且将字符串改为小写字符串    
//\W匹配的是非数字  字母    下划线
//\w匹配的是数字    字母    下划线
//在[./-+]内均表示字符本身；
var isPalindrome = function (s) {
    s = s.replace(/[\W|_]/g, "").toLowerCase();
    if (s.length < 2) {
        return true;
    }
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {//对撞指针判断左右两边是否是相同的字符
            return false;
        }
        left++;
        right--;
    }
    return true;
};




//分割字符串    每个字符串都是回文字符串
//不懂
var partition = function (s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (f[i][j]) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    const n = s.length;
    const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
    let ret = [], ans = [];

    for (let i = n - 1; i >= 0; --i) {
        for (let j = i + 1; j < n; ++j) {
            f[i][j] = (s[i] === s[j]) && f[i + 1][j - 1];
        }
    }
    dfs(0);
    return ret;
};



//单词的拆分
//字符串s       是可以有字典wordDict中的单词重复组成的
//重复意味这for of循环遍历          后面一个单词是由前面一个单词和字典中的任意一个单词组成的
//写成代码逻辑  便是        dp[j-woreLen] + word === str        还需要有长度的限制
var wordBreak = function (s, wordDict) {
    let len = s.length;

    //初始化为''        这种后面    是前面数据组成的思想是需要多初始化一个元素的
    let dp = new Array(len + 1).fill('');

    //j从1至len保证字符串能从第一位截取到最后一位
    for (let j = 1; j <= len; j++) {
        let str = s.slice(0, j);

        //遍历wordDict
        for (let word of wordDict) {
            let wlen = word.length;
            //
            if (wlen <= j && dp[j - wlen] + word === str) {

                //判断成功，更新状态
                dp[j] += dp[j - wlen] + word;
            }
        }
    }
    return dp[len] === s;
};



//链表存在环的时候		返回环相遇的节点
var detectCycle = function (head) {
    const visited = new Set();
    while (head !== null) {
        if (visited.has(head)) {
            return head;
        }
        visited.add(head);
        head = head.next;
    }
    return null;
};



// 手写forEach()
Array.prototype.myEach = function (callback, thisArg) {
    if (!Array.isArray(this) || typeof (callback) !== 'function') {
        throw new Error('wrong...')
    }
    let T = thisArg
    for (let i of this) {
        callback.call(T, i)
    }
}


// 手写 map
Array.prototype._map = function (fn) {
    if (typeof fn !== 'function') {
        throw new TypeError('what is to be a function')
    }
    let array = this
    let len = array.length
    let res = []
    for (let i = 0; i < len; i++) {
        res[i] = fn.call(arguments[1], array[i], i, array)
    }
    return res
}



//手写
if (!Array.prototype.myEach) {
    Array.prototype.myEach = function (callback, thisArg) {
        var T, k;
        console.log("this===", this, thisArg)
        if (this === null) {
            throw new TypeError('this is null or not defined');
        }

        var O = Object(this);
        console.log("O===", O, O.length >>> 0)
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(callback + 'is not a function');
        }

        if (arguments.length > 1) {
            T = thisArg;
        }

        k = 0;

        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    }
}

let a = [1, 2, 3, 4];
a.myEach((value, index) => {
    console.log(value, index)
})




//手写forEach函数
arr.myEach((i) => console.log(i))
Array.prototype.myEach = function (callback) {
    if (!Array.isArray(this)) { throw new Error('wrong...') }
    let T = this
    for (let i of this)
        callBack.call(this, i)

}










//手写call
//例子obj1.fn.call(obj2,...args)
Function.prototype.myCall = function (target) {
    //target为空的时候会指向window对象
    if (target === 'undefined' || target === null) {
        target = window
    }


    //target的函数      来改变调用者的指针指向
    target.fn = this
    //获取myCall函数的传入的参数
    var getArgs = [...arguments].slice(1)
    //最后对象上面是不能平白无故多出一个函数的      那么我们用一个变量来存储函数并且返回
    //并且记得删除平白无故多出的函数
    var res = target.fn(getArgs)
    delete target.fn
    return res
}


Function.prototype.myBind = function (target) {
    if (typeof this !== 'function') { throw new Error('TypeError') }
    var that = this
    var args1 = [].slice.call(arguments, 1)
    var bind2 = function () {
        var args2 = [].slice.call(arguments)
        // 判断有没有使用 new 运算符
        return that.apply(typeof this.constructor === that ? this : target, args1.concat(args2))
    }
    var fn = function () { }
    fn.prototype = this.prototype
    bind2.prototype = new fn()
    bind2.prototype.constructor = bind2
    return bind2

}





//栈实现队列
let stack1 = []
let stack2 = []
function pop() {
    if (stack2.length === 0) {
        while (stack1.length)
            stack2.push(stack1.pop())
    }
    return stack2.pop()
}
function push(node) {
    while (stack2.length) {
        stack1.push(stack2.pop())
    }
    stack1.push(node)
}



//队列实现栈
var myQueue = function () { var stack = [] }
myQueue.prototype.add = function (node) { this.stack.push(node) }
myQueue.prototype.poll = function () {
    var temp = []
    while (stack.length) temp.push(stack.pop())
    let res = temp.pop()
    while (temp.length) stack.push(temp.pop())
    return res
}



//indexOf函数的实现
function myIndexOf(str1, str2, n) {
    let len1 = str1.length
    let len2 = str2.length
    let i = 0
    if (n <= -1 || n === undefined || n === null) {
        i = 0
    } else if (n > len2) {
        return -1
    } else {
        i = n
    }
    if (len1 > len2) return -1
    for (var j = i; j < len2 - len1 + 1; j++) {
        let target = str2.substr(j, len1)
        if (str1 === target) return j
    }
    return -1
}


//定时器的创建和清除	setInterval		setTimeout
function b() {
    let timer = setInterval(() => {
        //...doSomething
        clearInterval(timer)
        b()
    }, 50)
}
b()


function b(time) {
    return function c() {
        clearTimeout(timer)
        var timer = setTimeout(() => {
            console.log(this)
            c()
        }, time)
    }
}
b(500)()




//promise封装ajax
function promiseAJAX(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.send()
        xhr.onreadystatechange = function () {
            //数据的流程        因为没有写上这一句流程语句      报错不能正确获取数据
            //因为这个readyState状态不是4的话       说明数据还是在传输的过程        那么直接return 
            //否则传输的数据是不完整不正确 的       那么这个时候需要填上这一句流程控制最后获取正确的数据
            //readyState的状态表示
            //每当readyState发生改变的时候会触发onreadystatechange事件
            //0请求还没有初始化     1服务器连接已经建立     2请求已经接收   3请求处理中     4请求已经完成  响应已经就绪
            //我没有设置readyState监视其状态值的改变        只有正确的状态才能够得到正确的结果

            if (this.readyState !== 4) return//没有正确的状态   会直接返回      状态的改变自然会触发onreadystatechange函数的执行

            if (this.status < 300 && this.status >= 200) {
                resolve(JSON.parse(this.responseText))
            } else {
                reject(new Error('wrong...'))
            }
        }
    })
}

promiseAJAX('https://api.apiopen.top/getJoke?page=1&count=2&type=video')
    .then(
        data => {
            console.log('yes', data)//正确数据的输出
        },
        error => {
            alert(error.message)//错误数据的输出
        }
    )

//promise基础版本
//三个状态      resolved   rejected  pending        promise状态变化执行
//then方法      catch方法       构造函数        代码更加简洁    清晰    根据状态来执行响应的回调函数
//resolve函数       reject函数      来改变promise的状态
//基础promise       -->     进阶异步promise  setTimeout       -->发布订阅模式解决
//resolve reject的一个异步状态      -->
//promise的三种初始状态的常量书写
const RESOLVE = 'resolved'
const REJECT = 'rejected'
const PENDING = 'pending'
class myPromise {
    //promise的初始状态是pending 
    status = PENDING;

    //改变状态函数的默认参数
    result = undefined
    reject = undefined
    //promise的构造函数
    constructor(excution) {
        //promise的两个改变状态的函数
        const resolve = (result) => {
            //改变状态的函数会被调用者传入参数
            //定义响应的变量来接收调用者传入的参数
            if (this.status = PENDING) {
                //resolve来获取成功状态下面传入的参数
                this.result = result
                this.status = RESOLVE
            }
        }
        const reject = (reason) => {
            if (this.status = PENDING) {
                this.reason = reason
                this.status = REJECT
            }
        }
        excution(resolve, reject)
    }

    //onResolved       onRejected是两个状态回调函数        就是resolved  rejected状态的回调函数
    then(onResolved, onRejected) {
        if (this.status === RESOLVE) {
            onResolved(this.result)
        }
        if (this.status === REJECT) {
            onRejected(this.reason)
        }

    }
}



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let cover = 0,
        len = nums.length;

    for (let i = 0; i <= cover; i++) {
        cover = cover > nums[i] + i ? cover : nums[i] + i
        if (i + nums[i] >= len - 1) return true
    }
    return false
};





//矩阵的置零计算
//行数组        列数组  如果数据为零        那么使用两个数组来标记  当前的行数或者列数
//循环矩阵之后      标记行数    列数之后
//再次遍历二维数组  将标记的行数列数置为0       返回置零 的数组
var setZeroes = function (matrix) {
    const m = matrix.length, n = matrix[0].length;
    const row = new Array(m).fill(false);
    const col = new Array(n).fill(false);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row[i] = col[j] = true;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};






//二维数组的路径条数问题        没有任何阻碍        那么路径数量是前面一列      上面一行的路径数量和数
var uniquePaths = function (m, n) {
    let arr = Array(m).fill().map(() => Array(n).fill(1))
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = (arr[i - 1][j] + arr[i][j - 1])
        }
    }
    return arr[m - 1][n - 1]
};




//岛屿数量问题      赋值号和判断等号混淆视觉            耽误5min
//判断岛屿数量  每个岛屿的陆地之间是相互连接的  那么就存在四个方向的判断执行函数
//i j 当前      i-1 j上         i+1 j下     i j-1左     i j+1右
//四个方向的判断        可以用置零      就是说相反的数据方向来转换思维
//从岛屿的一点触发   直到不能继续执行为止       那么就会导致岛屿的数量增加1
//边界条件是<0      >=行数/列数     本身为0的情况
//dfs深度优先遍历特征
//相反的数据方向        判断数据的特征值

const numIslands = grid => {
    // 定义深度优先遍历函数
    const dfs = (i, j) => {
        // 越界、遇到水，则不访问了
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') return;
        // 访问过的的地方，标记为0
        grid[i][j] = '0';
        // 四个方向继续访问
        dfs(i + 1, j);
        dfs(i, j + 1);
        dfs(i - 1, j);
        dfs(i, j - 1);
    };
    // 矩阵的行、列
    const m = grid.length;
    const n = grid[0].length;
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 找到矩阵中，为1的地方，开始深度优先遍历
            if (grid[i][j] === '1') {
                dfs(i, j);
                // 每遍历完一整趟，会把相连的所有1，变成0
                // 代表访问完了一个岛屿，res++
                res++;
            }
        }
    }
    return res;
};


//二维数组快速找去目标值
//先寻找目标所在的行        没有行直接返会false
//继续寻找所在行的数据有无符合目标值        返回找寻结果
var searchMatrix = function (matrix, target) {
    let m = matrix.length,
        n = matrix[0].length,
        resm = false,
        resn = false
    if (target < matrix[0][0] || target > matrix[m - 1][n - 1])
        return false
    for (let i = 0; i < m; i++) {
        if (target >= matrix[i][0] && target <= matrix[i][n - 1]) {
            resm = i
            break
        }
    }
    if (resm === false) return false
    for (let i = 0; i < n; i++) {
        if (target === matrix[resm][i]) {
            resn = true
            break
        }
    }
    return resn
};




//反转字符串里面的单词
//多余的连续空格是直接用一个空格替换    s.replace(/(\s)\1+/g," ")
//正则表达式使用
var reverseWords = function (s) {
    s = s.replace(/(\s)\1+/g, " ")
    let arr = s.trim().split(' ')
    let res = arr.reverse().join(' ')
    return res
};






//杨辉三角形返回指定行数的杨辉三角形的数据
//二维数组的巧妙使用    首位数据 的抢先初始化   
//继续下面数据的执行的时候  是需要跳过首位数据的 
var getRow = function (rowIndex) {
    const C = new Array(rowIndex + 1).fill(0);
    for (let i = 0; i <= rowIndex; ++i) {
        C[i] = new Array(i + 1).fill(0);
        C[i][0] = C[i][i] = 1;
        for (let j = 1; j < i; j++) {
            C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
        }
    }
    return C[rowIndex];
};




//树    根节点  左子树      右子树
//TreeNode(val,left,right){}    
//递归生成左子树        递归生成右子树
//前序遍历      第一个节点为根节点          中序遍历        根节点的左边是左子树的形成
//换句话说前序遍历的关键节点是第一个节点        中序遍历的关键节点是中间根节点划分左右边界
//根据前序遍历      中序遍历生成二叉树
var buildTree = function (preorder, inorder) {
    //
    if (inorder.length === 0) return null
    //第一个根节点是前序遍历的第一个元素
    let root = new TreeNode(preorder[0])
    //mid右边的节点是右子树的全部数据节点
    let mid = inorder.indexOf(preorder[0])
    //根节点 的左子树的前序遍历     和      中序遍历的节点截取  递归生成树
    //左子树递归的终点是左边可以截取的字符数量为零
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
    return root
};






//二进制加法    后面是取余数操作        前面是取剩余数据操作
//计算的条件是存在字符      存在就转换字符为数字
//二进制数据计算对2取余数的操作         十进制计算数据是对10取余数的操作
//n进制计算是对n取余数的操作        记得前面数据溢出的加上

var addBinary = function (a, b) {
    let ans = "";
    let ca = 0;
    //两个字符串只要有一个字符没有结束就继续执行函数
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        let sum = ca;
        sum += i >= 0 ? parseInt(a[i]) : 0;
        sum += j >= 0 ? parseInt(b[j]) : 0;
        ans += sum % 2;
        //查看是否有余数        除以2       向下取余数
        ca = Math.floor(sum / 2);
    }
    //前面溢出  的数据加上1     或者没有溢出不加任何东西
    ans += ca == 1 ? ca : "";
    return ans.split('').reverse().join('');
};


//二叉树的中序遍历
//遍历左子树的所有节点  插入根节点  遍历右子树的所有节点    空数组插入遍历的节点数据
var inorderTraversal = function (root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};



//双指针影响 是两边的   数据必须极度耦合    在一块变化的数据
//指针节点的范围是在动态变化    跟随内部函数体内容相互绑定的    那么需要数据相互牵连
//范围因为数据的牵连产生动态变化        每一次的数据交换导致范围的变化
//左边数据的变化是整齐划一的    但是右边可能会交换相同数据值    那么这时候需要另外一个循环来规范数据整齐
//规范范围正确
const sortColors = nums => {
    // 交换数组的两个元素
    const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

    // 定义双指针
    let [p0, p2] = [0, nums.length - 1];
    for (let i = 0; i <= p2; i++) {
        // 遇到2，交换p2指针的值，p2左移
        // 因为交换过来的，也可能是2，所以需要while继续判断
        while (i <= p2 && nums[i] === 2) swap(i, p2--);
        // 遇到0，交换p1指针的值，p1右移
        // 交换过来的不可能再是0了，因为从左往右遍历的，如果有，左边就已经过了
        if (nums[i] === 0) swap(i, p0++);
    }
};




//数组里面的数据        1-n的数据       返回含有k个数据的不同数据组合
//深度优先遍历包含当前数据是否      返回数组条件        组合数据的长度加上剩余数据的长度小于
//标准数据的长度那么会return        当长度合适的时候会返回数据组合
//深度优先遍历包不包含当前的数据会产生两种数据组合方向
//数组数据的 组合       [...arr,param]
var combine = function (n, k) {
    const ans = [];
    const dfs = (cur, n, k, temp) => {
        // 剪枝：temp 长度加上区间 [cur, n] 的长度小于 k，不可能构造出长度为 k 的 temp
        if (temp.length + (n - cur + 1) < k) {
            return;
        }
        // 记录合法的答案
        if (temp.length == k) {
            ans.push(temp);
            return;
        }
        // 考虑选择当前位置
        dfs(cur + 1, n, k, [...temp, cur]);
        // 考虑不选择当前位置
        dfs(cur + 1, n, k, temp);
    }
    dfs(1, n, k, []);
    return ans;
};



//arr.myAt(index)
Array.prototype.myAt = function (index) {
    let len = this.length
    if (len < index) return undefined
    if (index >= 0) return this[index]
    return this[len + index]
}




//arr.myConcat()
Array.prototype.myConcat = function (target) {
    if (Array.isArray(target)) {
        return [...this, target]
    }
    throw new Error('TypeError..')
}







//分隔回文串    可能的分隔方案中每一个元素都是回文串

var partition = function (s) {
    const dfs = (i) => {
        //字符串截取完毕    长度是等于字符串的长度
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        //start  end之间的 字符串是否满足前后指针字符相等的情况
        for (let j = i; j < n; ++j) {
            if (f[i][j]) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    const n = s.length;
    const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
    let ret = [], ans = [];

    for (let i = n - 1; i >= 0; --i) {
        for (let j = i + 1; j < n; ++j) {
            f[i][j] = (s[i] === s[j]) && f[i + 1][j - 1];
        }
    }
    dfs(0);
    return ret;
};





//恢复ip地址
var restoreIpAddresses = function (s) {
    const SEG_COUNT = 4;
    const segments = new Array(SEG_COUNT);
    const ans = [];

    const dfs = (s, segId, segStart) => {
        // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
        if (segId === SEG_COUNT) {
            if (segStart === s.length) {
                ans.push(segments.join('.'));
            }
            return;
        }

        // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
        if (segStart === s.length) {
            return;
        }

        // 由于不能有前导零，如果当前数字为 0，那么这一段 IP 地址只能为 0
        if (s.charAt(segStart) === '0') {
            segments[segId] = 0;
            dfs(s, segId + 1, segStart + 1);
        }

        // 一般情况，枚举每一种可能性并递归
        let addr = 0;
        for (let segEnd = segStart; segEnd < s.length; ++segEnd) {
            addr = addr * 10 + (s.charAt(segEnd) - '0');
            if (addr > 0 && addr <= 0xFF) {
                segments[segId] = addr;
                dfs(s, segId + 1, segEnd + 1);
            } else {
                break;
            }
        }
    }

    dfs(s, 0, 0);
    return ans;
};


//千位分隔符
//1,200,200     fengefn(num)
function fengefn(num) {
    let [len, arr] = [num.toString().length, num.toString().split('')]

    if (len <= 3) {
        return num
    }
    let sign = len / 3 | 0
    for (let i = 0; i < sign; i++) {
        arr.splice(-3 * (i + 1) - i, 0, ',')
    }
    return arr.join('')

}


//正则表达式实现分隔符号
function fengereg(num) {
    let [len] = [num.length]
    if (len <= 3) return num
    let res = num.toString().replace(/(\d)(?=(\d{3})+$)/g, () => {
        return ','
    })
    return res

}




//数据的状态方程
//上面一层的数据是下面一层的数据来得出的结论结果
//最小的路径求和
//数据的求和        前路是迷茫未知的数据解释        但是反过来求取数据是清晰明了的
//算法不可死脑筋       反着想象数据结构的表示代码解释
//初始化最后一行的数据表示      再来逐步求解数据的最小值的表达
//正下方数据        以及        右下方数据的和数表示        求取路径的小数据 
const minimumTotal = (triangle) => {
    const h = triangle.length;
    // 初始化dp数组
    const dp = new Array(h);
    for (let i = 0; i < h; i++) {
        dp[i] = new Array(triangle[i].length);
    }

    for (let i = h - 1; i >= 0; i--) { // 自底而上遍历
        for (let j = 0; j < triangle[i].length; j++) { // 同一层的
            if (i == h - 1) {  // base case 最底层
                dp[i][j] = triangle[i][j];
            } else { // 状态转移方程，上一层由它下面一层计算出
                dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
            }
        }
    }
    return dp[0][0];
};



//版本号的比较      1   -1    0
//1.0.1     1.0.0
//比较存在三种情况  长度不足的数据是以0来补齐数据的     那么想象的数据是存在的
//
var compareVersion = function (version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    for (let i = 0; i < v1.length || i < v2.length; ++i) {
        let x = 0, y = 0;
        if (i < v1.length) {
            x = parseInt(v1[i]);
        }
        if (i < v2.length) {
            y = parseInt(v2[i]);
        }
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
    }
    return 0;
};






//初始化数据最大的      最小的数据      当前数据都是初始化的数组的第一个数据
//继续向后面进行数据的计算  不断选取最大值最小值
//每一次循环新建三个数据来装载最大值    最小值      当前值
//当前数据的来源是上一次数据的依据

var maxProduct = function (nums) {
    if (nums.length == 0) return 0

    //       [   2,    3,    -2,    4,    5,    -10,    -1   ]
    // curMax    2     6     -2     4     20     2400   200
    // curMin    2     3     -12    -48   -240   -200   -2400

    let cur = 0
    // 把 cur 处理掉时，能得到的最小值
    let curMin = nums[cur]

    // 把 cur 处理掉时，能得到的最大值
    let curMax = nums[cur]

    // 所有 curMax 中最大的值，最后的 curMax 不一定是答案
    let resMax = nums[cur]

    for (let i = 1; i < nums.length; ++i) {

        let tmp1 = nums[i] * curMax
        let tmp2 = nums[i] * curMin
        let tmp3 = nums[i] // 不与过往的最大、最小数相乘，自己自立门户，说不定就是最值

        curMax = Math.max(tmp1, tmp2, tmp3)
        curMin = Math.min(tmp1, tmp2, tmp3)

        if (curMax > resMax) {
            resMax = curMax
        }

        // console.log(`${curMax}  ${curMin}`)
    }

    return resMax
};





//字符串形式返回小数
//小数循环部分放在括号里面
//得出的数据符号首先是看两个数据的符号的        异或的结果
//
var fractionToDecimal = function (numerator, denominator) {
    if (numerator % denominator == 0) {
        return '' + Math.floor(numerator / denominator);
    }

    const sb = [];
    //异或得出结果数据的符号
    if (numerator < 0 ^ denominator < 0) {
        sb.push('-');
    }

    // 整数部分
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    const integerPart = Math.floor(numerator / denominator);
    sb.push(integerPart);
    sb.push('.');

    // 小数部分
    const fractionPart = [];
    const remainderIndexDic = new Map();
    let remainder = numerator % denominator;
    let index = 0;
    while (remainder !== 0 && !remainderIndexDic.has(remainder)) {
        remainderIndexDic.set(remainder, index);
        remainder *= 10;
        fractionPart.push(Math.floor(remainder / denominator));
        remainder %= denominator;
        index++;
    }
    if (remainder !== 0) { // 有循环节
        let insertIndex = remainderIndexDic.get(remainder);
        fractionPart.splice(insertIndex, 0, '(');
        fractionPart.push(')');
    }
    sb.push(fractionPart.join(''));

    return sb.join('');
}






//二分法来查找数组中是否存在合适的数据值
//left      right       (right-left)/2|0
//mid+1         mid-1           mid         return -1
//每一行数据的搜索
var searchMatrix = function (matrix, target) {
    for (const row of matrix) {
        const index = search(row, target);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};

const search = (nums, target) => {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        const num = nums[mid];
        if (num === target) {
            return mid;
        } else if (num > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}




//列表数据的搜索
//数据具有规律性    每一次比较数据      交换的 是行数据     列数据
//左下角数据的转化
var searchMatrix = function (matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    for (let i = m - 1, j = 0; i >= 0 && j < n;) {
        if (matrix[i][j] == target)
            return true;
        else if (matrix[i][j] < target)
            j += 1;
        else
            i -= 1;
    }
    return false;
};


// 动态规划     打家劫舍
// dp[i] = Math.max(dp[i-1], dp[i-2] + num[i-1])
// 动态规划 从最基础的部分开始比较数据      得出的结果是前面的数据所得
// 那么数组的数据长度是会比提供数据的长度多一个结果数据的
// 数据初始化做好
// 得出公式 根据公式求解
var rob = function (nums) {
    let [dp, len] = [[], nums.length]
    if (len == 1) {
        return nums[0]
    }
    dp[0] = 0
    dp[1] = nums[0]
    for (let i = 2; i <= len; i++) {
        dp[i] = dp[i - 1] > dp[i - 2] + nums[i - 1] ? dp[i - 1] : dp[i - 2] + nums[i - 1]
    }
    return dp[len]

};



// 打家劫舍
// 房屋相邻情况     首尾房间相邻是不允许的
var rob = function (nums) {
    const length = nums.length;
    if (length === 1) {
        return nums[0];
    } else if (length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
};

const robRange = (nums, start, end) => {

    let [first, second] = [nums[start], Math.max(nums[start], nums[start + 1])]

    for (let i = start + 2; i <= end; i++) {
        const temp = second
        second = Math.max(nums[i] + first, second)
        first = temp
    }

    return second
}



// 股票最佳的时机
// 每一次循环都会计算最大值 最小值
var maxProfit = function (prices) {

    let [max, min] = [0, prices[0]]

    for (const price of prices) {
        max = Math.max(max, price - min)
        min = Math.min(min, price)
    }

    return max

};

// 可以形成正方形的最大面积
var maximalSquare = function (matrix) {
    const [m, n] = [matrix.length, matrix[0].length]
    let dp = []
    let max_len = 0
    // gouj
    for (let i = 0; i < m; i++) {
        dp.push([])
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                dp[i][j] = 0
            } else {
                dp[i][j] = 1
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (dp[i][j] == 0) {
                continue;
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                max_len = Math.max(max_len, dp[i][j])
            }
        }
    }
    // 边界问题 因为i是从开始j也是从1开始 会造成 dp[0][1] 和 dp[1][0]位置的解没考录到
    if (!max_len) {
        max_len = Math.max(max_len, dp[0][0] || 0, dp[0]?.[1] || 0, dp?.[1]?.[0] || 0)
    }
    return max_len * max_len;

};





// 找出计算公式中的全部可能的计算情况

var diffWaysToCompute = function (expression) {
    let map = new Map();
    let results = [];
    if (map.has(expression)) return map.get(expression);
    if (!isNaN(expression - 0)) {
        results.push(expression - 0);
        return results;
    }
    for (let i = 0; i < expression.length; i++) {
        if (isNaN(expression[i])) {
            const op = expression[i];
            const left = diffWaysToCompute(expression.slice(0, i));
            const right = diffWaysToCompute(expression.slice(i + 1));
            for (const l of left) {
                for (const r of right) {
                    if (op === '+') {
                        results.push(l + r);
                    } else if (op === '-') {
                        results.push(l - r);
                    } else {
                        results.push(l * r);
                    }
                }
            }
        }
    }
    map.set(expression, results);
    return results;
};



// 后序遍历和中序遍历
var buildTree = function (inorder, postorder) {
    let post_idx;
    const idx_map = new Map();
    const helper = (in_left, in_right) => {
        // 如果这里没有节点构造二叉树了，就结束
        if (in_left > in_right) {
            return null;
        }

        // 选择 post_idx 位置的元素作为当前子树根节点
        const root_val = postorder[post_idx];
        const root = new TreeNode(root_val);

        // 根据 root 所在位置分成左右两棵子树
        const index = idx_map.get(root_val);

        // 下标减一
        post_idx--;
        // 构造右子树
        // 必须先构造右边子树       右子树遍历完成  那么 post_idx的下标数目达到相应的程度
        // 从右到左的顺序是不可变的
        root.right = helper(index + 1, in_right);
        // 构造左子树
        root.left = helper(in_left, index - 1);
        return root;
    }

    // 从后序遍历的最后一个元素开始
    post_idx = postorder.length - 1;

    // 建立（元素，下标）键值对的哈希表
    let idx = 0;
    inorder.forEach((val, idx) => {
        idx_map.set(val, idx);
    });
    return helper(0, inorder.length - 1);
};




// 最长严格递增序列的长度
const lengthOfLIS = (nums) => {
    let dp = Array(nums.length).fill(1);
    let result = 1;

    for (let i = 1; i < nums.length; i++) {
        // 数据的每一轮循环得出一个最大的长度   
        for (let j = 0; j < i; j++) {
            // 满足递增数据的要求 递增数据的默认长度是1
            // 从右向左的数据取值判断
            if (nums[i] > nums[j]) {//当nums[i] > nums[j]，则构成一个上升对
                dp[i] = Math.max(dp[i], dp[j] + 1);//更新dp[i]
            }
        }
        // 每一轮循环的更新结果
        result = Math.max(result, dp[i]);//更新结果
    }

    return result;
};





// 
var nthUglyNumber = function (n) {

    if (n === 1) {
        return 1
    }

    let [a, b, c, n1, n2, n3, min, res] = [0, 0, 0, 1, 1, 1, 1, []]
    res[0] = 1

    for (let i = 1; i < n; i++) {
        n1 = res[a] * 2
        n2 = res[b] * 3
        n3 = res[c] * 5

        min = Math.min(n1, n2, n3)
        res[i] = min

        if (min === n1) {
            a++
        }
        if (min === n2) {
            b++
        }
        if (min === n3) {
            c++
        }
    }

    return res[n - 1]
};



// 除去自身元素的乘积数组   
const productExceptSelf = nums => {
    const len = nums.length;
    // 定义左累积数组、右累积数组，初始值都为 1
    const [resLeft, resRight] = [new Array(len).fill(1), new Array(len).fill(1)];
    for (let i = 1; i < len; i++) {
        // 从i=1开始，作左累积运算
        resLeft[i] = resLeft[i - 1] * nums[i - 1];
    }
    for (let i = len - 2; i >= 0; i--) {
        // 从i=len - 2开始，作右累积运算
        resRight[i] = resRight[i + 1] * nums[i + 1];
    }
    const res = [];
    for (let i = 0; i < len; i++) {
        // 两个数组的元素对应相乘，即可得到当前元素的答案
        res.push(resLeft[i] * resRight[i]);
    }
    return res;
};


// shellSort       插入排序分组的排序算法
function shellSort(arr, sendGap = 5) {
    let [len, gap, temp] = [arr.length, 1, 0]
    while (gap < len / sendGap) {
        gap = gap * sendGap + 1
    }
    for (gap; gap > 0; gap = Math.floor(gap / sendGap)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i]
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j]
            }
            arr[j + gap] = temp
        }
    }
    return arr
}



// 数组当中只出现一次的数据值   用到es6新的数据结构 map数据
// map数据结构   entries()   [item, value]格式数据
var singleNumber = function (nums) {
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    const ans = [];
    for (const [num, occ] of freq.entries()) {
        if (occ === 1) {
            ans.push(num);
        }
    }
    return ans;
};



// 还是需要得出26的余数 不能直接对26取余数  不然26mod26为0  不可得出26
// 数据Z不能正确返回
var convertToTitle = function (columnNumber) {
    const sb = [];
    while (columnNumber !== 0) {
        columnNumber--;
        sb.push(String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt()));
        columnNumber = Math.floor(columnNumber / 26);
    }
    return sb.reverse().join('');
};


// 正整数n  求出最少的平方数的和等于正整数      输出平方数的个数
// 公式是n = f(n) = 1 + min(j是从1->根号i)  f(n - j*j)
// f(i)代表组成i的平方数的个数

var numSquares = function (n) {
    const f = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        let minn = Number.MAX_VALUE;
        for (let j = 1; j * j <= i; j++) {
            minn = Math.min(minn, f[i - j * j]);
        }
        f[i] = minn + 1;
    }
    return f[n];
};


// 判断二叉搜索树
// 根节点的左/右子树    在不为空的情况下    是满足小于/大于根节点的

const helper = (root, lower, upper) => {
    if (root === null) {
        return true;
    }
    if (root.val <= lower || root.val >= upper) {
        return false;
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
var isValidBST = function (root) {
    return helper(root, -Infinity, Infinity);
};


// 链表的插入操作
var insertionSortList = function (head) {
    if (head === null) {
        return head;
    }
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let lastSorted = head, curr = head.next;
    while (curr !== null) {
        if (lastSorted.val <= curr.val) {
            lastSorted = lastSorted.next;
        } else {
            let prev = dummyHead;
            while (prev.next.val <= curr.val) {
                prev = prev.next;
            }
            lastSorted.next = curr.next;
            curr.next = prev.next;
            prev.next = curr;
        }
        curr = lastSorted.next;
    }
    return dummyHead.next;
};



// 数组中[0,n]中不存在的 一个数据
var missingNumber = function (nums) {
    nums = nums.sort((a, b) => a - b)
    const len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] !== i) {
            return i
        }
    }
    return len
};



// 返回数据的列序号     A-->1           B-->2       ZY-->701
// 获取字符的unicode编码        a-->97          A-->65      myChar.charCodeAt()
// 从右向左计算数据     每一次计算完成之后指数的数据乘积是需要乘以26
// 转化思维     从左向右        从右向左    从上到下    从外到内    从下到上
var titleToNumber = function (columnTitle) {
    let number = 0;
    let multiple = 1;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        const k = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1;
        number += k * multiple;
        multiple *= 26;
    }
    return number;
};


//  前缀树  存储数据    高效存储和检索字符串数据集中的键    
// 
var Trie = function () {
    this.children = {};
};

Trie.prototype.insert = function (word) {
    let node = this.children;

    for (const ch of word) {
        if (!node[ch]) {
            node[ch] = {};
        }
        node = node[ch];
    }

    node.isEnd = true;
};

Trie.prototype.search = function (word) {
    const node = this.searchPrefix(word);
    return node !== undefined && node.isEnd !== undefined;
};

Trie.prototype.startsWith = function (prefix) {
    let node = this.children;
    for (const ch of prefix) {
        if (!node[ch]) {
            return false;
        }
        node = node[ch];
    }
    return node;
};




// 股票冷冻期   获取最大收益计算
var maxProfit = function (prices) {

    let len = prices.length

    if (len < 2) {
        return 0
    }
    // 买股票   卖股票  获取的收益

    const res = Array(len).fill(0).map(() => Array(3).fill(0))
    // 收益
    res[0][0] = 0
    // 买股票的花费小
    res[0][1] = -prices[0]
    // 卖股票的收益
    res[0][2] = 0

    for (let i = 1; i < len; i++) {
        // 股票收益
        res[i][0] = Math.max(res[i - 1][0], res[i - 1][2])

        // 买股票
        res[i][1] = Math.max(res[i - 1][0] - prices[i], res[i - 1][1])

        // 卖股票
        res[i][2] = res[i - 1][1] + prices[i]

    }

    return Math.max(res[len - 1][0], res[len - 1][2])

};


// 两个数组中重复的数据部分
var intersect = function (nums1, nums2) {
    //将两个数组从小到大排序
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let res = []
    let key1 = 0, key2 = 0, index = 0
    //在两个指针不达边界的前提下不断推进
    while (key1 < nums1.length && key2 < nums2.length) {
        //判断nums1[key1]与nums2[key2]的大小，分出大于小于等于三种情况
        if (nums1[key1] < nums2[key2]) key1++
        else if (nums1[key1] > nums2[key2]) key2++
        else {
            res[index++] = nums1[key1]
            key1++
            key2++
        }
    }
    return res
};


// 给定一个数组 返回数组中的数据可以组成的最大数字
// 组成的字符串是一个部分降序排序   因为数据 0 的影响
// 排除全是 0 的情况
var largestNumber = function (nums) {
    return nums.sort((a, b) => ('' + b + a) - ('' + a + b)).join('').replace(/^0*$/, '')
};



// DNA序列总重复的序列
var findRepeatedDnaSequences = function (s) {
    const L = 10;
    const ans = [];
    const cnt = new Map();
    const n = s.length;
    for (let i = 0; i <= n - L; ++i) {
        const sub = s.slice(i, i + L)
        cnt.set(sub, (cnt.get(sub) || 0) + 1);
        // 字符串重复一次之后直接插入数组   后面重复的数据是不需要理会的
        if (cnt.get(sub) === 2) {
            ans.push(sub);
        }
    }
    return ans;
};



// 同构的字符串 字符串的数据值是固定一一对应的
// 双向奔赴的字符串 你中有我    我中有你    必须相互牵制
var isIsomorphic = function (s, t) {
    let [s1, t1, len] = [{}, {}, s.length]
    for (let i = 0; i < len; i++) {
        let [x, y] = [s[i], t[i]]
        if ((s1[x] && s1[x] !== y) || (t1[y] && t1[y] !== x)) {
            return false
        }
        s1[x] = y
        t1[y] = x
    }
    return true
};



// 数据结构提供查找 插入数据的功能  采用对象链式调用的方式  最后有一个标识符表示数据是否查找完毕    
// 或者数据是否插入完毕

var WordDictionary = function () {
    this.root = Object.create(null);
};

WordDictionary.prototype.addWord = function (word) {
    let cur = this.root;
    for (const ch of word) {
        if (!cur[ch]) {
            cur[ch] = {};
        }
        cur = cur[ch];
    }
    cur.isWord = true;
};

WordDictionary.prototype.search = function (word, cur = this.root) {
    let ch = undefined;
    for (let i = 0; i < word.length; i++) {
        ch = word.charAt(i);
        if (ch === '.') {

            /**
              当 ch === '.'
                if(cur还有其他的字符) {
                  递归search
                  if(search('.'所处层级的其他字符的剩余部分继续搜索)) {
                    任意一个搜索成功返回true
                  }
                  没搜到返回false
                }
              其他部分与基础的Trie一致
            **/
            for (const key in cur) {
                if (this.search(word.slice(i + 1, word.length), cur[key])) {
                    return true;
                }
            }
            return false;
        } else if (!cur[ch]) {
            return false;
        }
        cur = cur[ch];
    }
    return Boolean(cur.isWord);
};


// 数字连续的最长序列   从中间向两边扩散查找数据    left-- right++
// 初始长度是 1     数据的去重处理  数据的删除处理  Set数据结构的运用
var longestConsecutive = function (nums) {
    let [mySet, max] = [new Set(nums), 0]
    for (let item of mySet) {
        let len = 1
        let [left, right] = [item - 1, item + 1]
        while (mySet.has(left)) {
            mySet.delete(left)
            left--
            len++
        }
        while (mySet.has(right)) {
            mySet.delete(right)
            right++
            len++
        }
        max = max > len ? max : len
    }
    return max
};


// 数据进栈 数据出栈
// 运算符的运用 + - * /     charCodeAt()
var calculate = function (s) {
    s = s.trim();
    const stack = new Array();
    let preSign = '+';
    let num = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        // isNaN(' ') --> false      空格是定义好的数据      
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
        }
        if (isNaN(Number(s[i])) || i === n - 1) {
            switch (preSign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                default:
                    stack.push(stack.pop() / num | 0);
            }
            preSign = s[i];
            num = 0;
        }
    }
    let ans = 0;
    while (stack.length) {
        ans += stack.pop();
    }
    return ans;
};



// 
var wordPattern = function (pattern, s) {
    const word2ch = new Map();
    const ch2word = new Map();
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    for (const [i, word] of words.entries()) {
        const ch = pattern[i];
        if (word2ch.has(word) && word2ch.get(word) != ch || ch2word.has(ch) && ch2word.get(ch) !== word) {
            return false;
        }
        word2ch.set(word, ch);
        ch2word.set(ch, word);
    }
    return true;
};




// 1 2 3
// 0 -1     卖0 买1
// 1 -1     卖2 2
// 2 -1     卖3 
var maxProfit = function (prices) {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
    dp[0][0] = 0, dp[0][1] = -prices[0];
    for (let i = 1; i < n; ++i) {
        // 卖出股票
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        // 买入股票
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[n - 1][0];
};



// 高度平衡二叉树   每个节点的左右两个子树的高度差绝对值不超过 1
// 不断构建左右两边的子树   
var sortedArrayToBST = function (nums) {
    // 将闭区间 [left, right] 中的元素转化成 BST，返回根节点
    let build = (left, right) => {
        // 区间为空
        if (left > right) return null;
        // 构造根节点
        // BST 节点左小右大，中间的元素就是根节点
        let mid = left + ((right - left) >> 1);

        let root = new TreeNode(nums[mid]);
        root.left = build(left, mid - 1);
        root.right = build(mid + 1, right);
        return root;
    };
    return build(0, nums.length - 1);
};

// 二分法查找元素的左右位置 从右边向左边不断查找元素
// 
const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1, ans = nums.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}

var searchRange = function (nums, target) {
    let ans = [-1, -1];
    const leftIdx = binarySearch(nums, target, true);
    const rightIdx = binarySearch(nums, target, false) - 1;
    // target 可以只出现一次
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        ans = [leftIdx, rightIdx];
    }
    return ans;
};

// 各位上的数据之和是 10 以内的数据
var addDigits = function (num) {
    return num < 10 ? num : (num % 9 || 9)
};


// 二分法查找元素的算术平方根
var sqrtMy = function (target) {
    let [left, right] = [0, target]
    while (left <= right) {
        let mid = (left + right) / 2 | 0
        if (mid * mid <= target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
}



//
var isSymmetric = function (root) {
    return checkMy(root, root)
};
const checkMy = function (p, q) {
    if (p == null || q == null) {
        return p == q
    }
    return p.val == q.val && checkMy(p.left, q.right) && checkMy(p.right, q.left)
}


// 回溯算法 去重处理 for 循环生成了回溯的形状
// 回溯算法全排列 穷举的思想 加上剪枝的操作 简化部分算法
var subsetsWithDup = function (nums) {
    let result = []
    let path = []
    let sortNums = nums.sort((a, b) => {
        return a - b
    })
    function backtracing(startIndex, sortNums) {
        result.push(path.slice(0))
        if (startIndex > nums.length - 1) {
            return
        }
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue
            }
            path.push(nums[i])
            backtracing(i + 1, sortNums)
            path.pop()
        }
    }
    backtracing(0, sortNums)
    return result
};


// 双指针接雨水
// 左边墙壁的高度小于右边墙壁的高度 可以接收的雨水是 左边最高的墙壁 - 当前墙壁的高度
// 右边相同的原理   最后返回可接雨水的最大值
var trap = function (height) {
    let ans = 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (height[left] < height[right]) {
            ans += leftMax - height[left];
            ++left;
        } else {
            ans += rightMax - height[right];
            --right;
        }
    }
    return ans;
};


// 正则匹配字符串 状态方程  s(0, sLen - 1)   和   p(0, pLen - 1) 的匹配情况是和状态方程相关的
// res[sLen][pLen] = s(0, sLen - 1) 和 p(0, pLen - 1) 的匹配情况
const isMatch = (s, p) => {
    if (s == null || p == null) return false;

    const sLen = s.length, pLen = p.length;

    const dp = new Array(sLen + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(pLen + 1).fill(false); // 将项默认为false
    }
    // base case
    dp[0][0] = true;
    for (let j = 1; j < pLen + 1; j++) {
        if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
    }
    // 迭代
    for (let i = 1; i < sLen + 1; i++) {
        for (let j = 1; j < pLen + 1; j++) {

            if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] == "*") {
                if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }
    return dp[sLen][pLen]; // 长sLen的s串 是否匹配 长pLen的p串
};



// map 数据结构中寻找最长的回文字符串的长度
// 出现偶数次数的字符直接加上字符出现的次数 最后剩余的字符一定是奇数次  那么最后判断 map 的长度的时候加上
// 一个奇数长度即可
var longestPalindrome = function (s) {
    let myMap = new Map()
    let res = 0
    for (let ch of s) {
        if (myMap.has(ch)) {
            myMap.delete(ch)
            res += 2
        } else {
            myMap.set(ch)
        }
    }
    return res + (myMap.size ? 1 : 0)
};


// 
var removeKdigits = function (num, k) {
    const stack = [];
    for (let i = 0; i < num.length; i++) {
        const c = num[i];
        while (k > 0 && stack.length && stack[stack.length - 1] > c) {
            stack.pop();
            k--;
        }
        if (c != '0' || stack.length != 0) {
            stack.push(c);
        }
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    return res.length ? res.join('') : '0'
};


// 一个二维矩阵中找出单词的形成路线
// 边界的条件的形成 标记数据的使用情况
const exist = (board, word) => {
    const m = board.length;
    const n = board[0].length;
    const used = new Array(m);    // 二维矩阵used，存放bool值
    for (let i = 0; i < m; i++) {
        used[i] = new Array(n);
    }
    // canFind 判断当前点是否是目标路径上的点
    const canFind = (row, col, i) => { // row col 当前点的坐标，i当前考察的word字符索引
        if (i == word.length) {        // 递归的出口 i越界了就返回true
            return true;
        }
        if (row < 0 || row >= m || col < 0 || col >= n) { // 当前点越界 返回false
            return false;
        }
        if (used[row][col] || board[row][col] != word[i]) { // 当前点已经访问过，或，非目标点
            return false;
        }
        // 排除掉所有false的情况，当前点暂时没毛病，可以继续递归考察
        used[row][col] = true;  // 记录一下当前点被访问了
        // canFindRest：基于当前选择的点[row,col]，能否找到剩余字符的路径。
        const canFindRest = canFind(row + 1, col, i + 1) || canFind(row - 1, col, i + 1) ||
            canFind(row, col + 1, i + 1) || canFind(row, col - 1, i + 1);

        if (canFindRest) { // 基于当前点[row,col]，可以为剩下的字符找到路径
            return true;
        }
        used[row][col] = false; // 不能为剩下字符找到路径，返回false，撤销当前点的访问状态
        return false;
    };

    for (let i = 0; i < m; i++) { // 遍历找起点，作为递归入口
        for (let j = 0; j < n; j++) {
            if (board[i][j] == word[0] && canFind(i, j, 0)) { // 找到起点且递归结果为真，找到目标路径
                return true;
            }
        }
    }
    return false; // 怎么样都没有返回true，则返回false
};


// 后面一个字符串里面的字符 可不可以组成前面一个字符串数据 
// 一个字符数据只能使用一次
// 使用的是小写字母
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false
    }
    const res = Array(26).fill(0)
    for (let ch of magazine) {
        res[ch.charCodeAt() - 'a'.charCodeAt()]++
    }
    for (let ch of ransomNote) {
        res[ch.charCodeAt() - 'a'.charCodeAt()]--
        if (res[ch.charCodeAt() - 'a'.charCodeAt()] < 0) {
            return false
        }
    }
    return true
}


// 相同数据值 不同数据索引的下标    索引下标相减小于等于给定的目标值
var containsNearbyDuplicate = function (nums, k) {
    let myMap = new Map()
    for (let [key, value] of nums.entries()) {
        if (myMap.has(value) && key - myMap.get(value) <= k) {
            return true
        }
        myMap.set(value, key)
    }
    return false
};



// h 指数   一个学者的 h 指数代表 学者有 h 篇文章是被至少引用 h 次次数的
var hIndex = function (citations) {
    citations.sort((a, b) => a - b)
    let [i, h] = [citations.length - 1, 0]
    while (i >= 0 && citations[i] > h) {
        h++
        i--
    }
    return h
};

// 
var removeDuplicates = function (nums) {
    let len = nums.length,
        count = 0
    if (len < 3) {
        return len
    }
    for (let i = 0; i < nums.length; i++) {
        let left = nums.indexOf(nums[i], i)
        let right = nums.lastIndexOf(nums[i])
        if (right - left < 2) {
            count++
        } else {
            nums.splice(left, right - left - 1)
            count++
        }
    }
    return count

};


// 两个字符串中寻找不同的一个字符数据
var findTheDifference = function (s, t) {
    let arr1 = s.split('').sort()
    let arr2 = t.split('').sort()
    let [len1, len2] = [arr1.length, arr2.length]
    for (let i = 0; i < len1; i++) {
        if (arr1[i] !== arr2[i]) {
            return arr2[i]
        }
    }
    return arr2[len2 - 1]
};



// 一颗树当中寻找路径上节点数据的和是否等于给定的目标数据的值
// 遍历函数标识外部变量 boolean 值  来进行数据的校验    路径是否存在    然后返回 boolean 值
var hasPathSum = function (root, targetSum) {
    if (!root) return false
    let res = false
    const dfs = (n, s) => {
        if (!n.left && !n.right && s === targetSum) {
            res = true
        }
        if (n.left) dfs(n.left, s + n.left.val)
        if (n.right) dfs(n.right, s + n.right.val)
    }
    dfs(root, root.val)
    return res
};


// 一个容器具有一定的可以容纳的数据数量 
// 数据可以进行相应的存取操作   超出容器容量的时候  数据删除的是最近最少使用的一个数据
// this.map.delete(this.map.keys().next().value)
// this.map.size
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key) {
        if (this.map.has(key)) {
            // get表示访问该值
            // 所以在访问的同时，要将其调整位置，放置在最后
            const temp = this.map.get(key);
            // 先删除，再添加
            this.map.delete(key);
            this.map.set(key, temp);
            // 返回访问的值
            return temp;
        } else {
            // 不存在，返回-1
            return -1;
        }
    }
    put(key, value) {
        // 要将其放在最后，所以若存在key，先删除
        if (this.map.has(key)) this.map.delete(key);
        // 设置key、value
        this.map.set(key, value);
        if (this.map.size > this.capacity) {
            // 若超出范围，将map中头部的删除
            // map.keys()返回一个迭代器
            // 迭代器调用next()方法，返回包含迭代器返回的下一个值，在value中
            this.map.delete(this.map.keys().next().value);
        }
    }
}



// 归并排序     数据量
// let a = new ListNode(-1); let b = a; // b 代替 a 去改变链表的元素的位置变化
// 改变靠着链表 b       输出靠着 链表 a.next    
var sortList = function (head) {
    // 链表节点数目小于等于 1   直接返回 不用排序
    if (!head || head.next === null) return head;
    // 使用快慢指针找到中间节点 双指针排序
    let slow = head,
        fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 将链表分成两半并返回后半部分链表的头节点
    let newList = slow.next;
    slow.next = null;

    // 对前后两个链表进行排序
    let left = sortList(head);
    let right = sortList(newList);
    // 将排序好的两个有序链表合并为一个链表
    // 改变指针的新的链表去替代改变链表元素的顺序
    let res = new ListNode(-1);
    let nHead = res;
    // 合并链表只需要调整指针的指向
    // 两个链表哪个节点的值小就先指向它
    while (left !== null && right !== null) {
        if (left.val < right.val) {
            nHead.next = left;
            left = left.next;
        } else {
            nHead.next = right;
            right = right.next;
        }
        nHead = nHead.next;
    }
    nHead.next = left === null ? right : left;
    return res.next;
};



// 0 1 背包
// 动态规划 当背包中的容量变化 会在相应的结果数据上加 1
// i-- j-- 是假想其他字符串数据将占据的位置
// 结果应该是最大的容量 
// 输入的是字符串数组   结果是最大容量的字符串数组的子集    但是子集最多有 m 个 0, n 个 1
const findMaxForm = (strs, m, n) => {
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    let numOfZeros, numOfOnes;
    for (let str of strs) {
        numOfZeros = 0;
        numOfOnes = 0;
        for (let c of str) {
            if (c === '0') {
                numOfZeros++;
            } else {
                numOfOnes++;
            }
        }
        for (let i = m; i >= numOfZeros; i--) {
            for (let j = n; j >= numOfOnes; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1);
            }
        }
    }
    return dp[m][n];
};


// 一个二进制数据字符串 找出二进制字符串中字符为 1 的 数据的总数
// 数据是左移操作
var hammingWeight = function (n) {
    let res = 0
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            res++
        }
    }
    return res
};



// 计算逆波兰表达式     运算符不在操作数的中间  运算符写在操作数的后面
// 一个执行栈不断执行运算数据   数据推入栈  符号取出数据运算
var evalRPN = function (tokens) {
    let stack = []
    let num1 = 0,
        num2 = 0
    for (let ch of tokens) {
        if (isNumber(ch)) {
            stack.push(parseInt(ch))
        } else {
            num2 = stack.pop()
            num1 = stack.pop()
            switch (ch) {
                case '+':
                    stack.push(num1 + num2)
                    break
                case '-':
                    stack.push(num1 - num2)
                    break
                case '*':
                    stack.push(num1 * num2)
                    break
                case '/':
                    stack.push(num1 / num2 | 0)
                    break
            }
        }
    }
    return stack[0]
};
function isNumber(target) {
    return !(target === '+' || target === '-' || target === '*' || target === '/')
}



// 寻找数组中最小的数据     数据的元素数据具有重复的元素
var findMin = function (nums) {
    let len = nums.length
    if (len === 1) {
        return nums[0]
    }
    for (let i = 1; i < len; i++) {
        if (nums[i] < nums[i - 1]) {
            return nums[i]
        }
    }
    return nums[len - 1] < nums[0] ? nums[len - 1] : nums[0]
};



// 使用辅助栈的方式 将最小的数据进行每一次的存储操作
// this.minNum = [Infinity]
var MinStack = function () {
    this.stack = []
    this.minNum = [Infinity]
};

MinStack.prototype.push = function (val) {
    this.stack[this.stack.length] = val
    this.minNum.push(Math.min(this.minNum[this.minNum.length - 1], val))
    return val
};



// 二次幂的数据的二进制形式 100000
// 那么数据减一 并且和原来的数据进行与操作  应该得出的结果是 0 那么原来的数据就是二次幂数据
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) === 0
};


// 数组元素中缺失的第一个正整数 数组元素需要去重
var firstMissingPositive = function (nums) {
    nums = [... new Set(nums.filter((item) => item > 0).sort((a, b) => a - b))]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return nums.length + 1
};


// s 中是否存在由 words 连接组成的字符串数据    顺序不限制
// words 数据不可重用       返回符合的字符串的起始位置 
var findSubstring = function (s, words) {
    let map = new Map()
    let res = []
    for (const ch of words) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    let wordLen = words[0].length
    let wordsLen = wordLen * words.length
    let sLen = s.length
    for (let i = 0; i < sLen - wordsLen + 1; i++) {
        let getStr = s.slice(i, i + wordsLen)
        let newMap = new Map(map)
        let flag = true
        for (let j = 0; j < wordsLen - wordLen + 1; j += wordLen) {
            let str = getStr.slice(j, j + wordLen)
            if (newMap.get(str)) {
                newMap.set(str, newMap.get(str) - 1)
            } else {
                flag = false
                break
            }
        }
        if (flag === true) {
            res.push(i)
        }
    }
    return res
};


// 
var cloneGraph = function (node) {
    if (!node) return;
    const visited = new Map();//存放遍历过的节点
    const dfs = (n) => {
        const nCopy = new Node(n.val);//拷贝节点
        visited.set(n, nCopy);//节点值和新建节点以键值对存入visited
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                dfs(ne);//递归遍历相邻节点
            }
            nCopy.neighbors.push(visited.get(ne));//复制相邻节点
        })
    }
    dfs(node);//深度优先遍历
    return visited.get(node);//返回visited中的新创建的节点
};



// 
var cloneGraph = function (node) {
    if (!node) return
    const visited = new Map()
    const dfs = (n) => {
        const nCopy = new Node(n.val)
        visited.set(n, nCopy)
            (n.neighbors || []).forEach(ne => {
                if (!visited.has(ne)) {
                    dfs(ne)
                }
                nCopy.neighbors.push(visited.get(ne))
            })
    }
    dfs(node)
    return visited.get(node)
};


// 最长的连续括号
// ()           首先会假定首部 -1
var longestValidParentheses = function (s) {
    let [res, len, maxLen] = [[-1], s.length, 0]
    for (let i = 0; i < len; i++) {
        if (s[i] === '(') {
            res.push(i)
        } else {
            // 去除前括号标记位置
            res.pop()
            if (res.length) {
                maxLen = maxLen > i - res.at(-1) ? maxLen : i - res.at(-1)
            } else {
                res[0] = i
            }
        }
    }
    return maxLen
};


// 格雷编码     n 位格雷序列码是一个 2**n 个整数组成的序列
// 相邻数据之间的二进制表示只有一个数据是不同的
// 100 10    101 10 
var grayCode = function (n) {
    let num = 1 << n
    let res = []
    for (let i = 0; i < num; i++) {
        res.push((i >> 1) ^ i)
    }
    return res
};




// 千分位数字
function thousandNum(num) {
    let str = num + ''
    // + 代表至少一个三位数的匹配 0 个三位数是不匹配的
    return str.replace(/(\d)(?=(?:\d{3})+$)/, '$1,')
}


// 查找子字符串在父字符串中出现的次数
function getSum(str1, str2) {
    let res = 0
    let index = str1.indexOf(str2)
    while (index !== -1) {
        res++
        index = str1.indexOf(str2, index + 1)
    }
    return res
}


// 尾递归   斐波那契
function getNum(target, pre, cur) {
    if (target === 0) {
        return 0
    }
    return target < 2 ? cur : getNum(target - 1, cur, pre + cur)
}


// 数组的扁平化
const dp = (arr) => {
    arr.forEach((item) => {
        return Array.isArray(item) ? dp(item) : res.push(item)
    })
}

// set 数据结构比较
function setCompare(set1, set2) {
    for (let value of set1) {
        if (!set2.has(value)) {
            return false
        }
    }
    return true
}


// 回文字符串 双指针    
function PalindromeFn(str) {
    let left = 0
    let right = str.length - 1
    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        } else {
            left++
            right--
        }
    }
    return true
}


// 对象设置访问器描述符的代理
// 访问器描述符的参数设置的是 当前代理的对象    以及获取的当前对象的属性
function _setProxy(obj) {
    let proxy = new Proxy(obj, {
        get: function (target, propKey) {
            if (propKey in target) {
                count++
            } else {
                count--
            }
        }
    })
}


// 访问对象的属性不能是没有权限访问的
function _proxy(obj, ...props) {
    let arr = props
    return new Proxy(obj, {
        get: function (target, propKey) {
            if (arr.includes(propKey)) {
                return 'noright'
            }
            return target[propKey]
        }
    })
}



// 两个节点的第一个共同父节点
function getCommanParent(node1, node2) {
    while (true) {
        node1 = node1.parentNode
        if (node1.contains(node2)) {
            return node1
        }
    }
}


// url中获取参数
// 参数重复时候的连接相同参数值的方式   obj[key] = [].concat(obj[key], value)       对象中嵌套数组数据
// 字符串的截取 不断 split('sign')  加上数组的索引值的牵引得到最终结果
function getUrlParam(sUrl, sKey) {
    let arr = sUrl.split('?')[1].split('#')[0].split('&')
    let obj = {}
    arr.forEach((item) => {
        let [key, value] = item.split('=')
        if (obj[key] === undefined) {
            obj[key] = value
        } else {
            obj[key] = [].concat(obj[key], value)
        }
    })
    return sKey !== undefined ? obj[sKey] || '' : obj
}


// bindThis     f 中的 this 指针指向了 target
function bindThis(f, target) {
    let args1 = Array.prototype.slice.call(arguments, 2)
    return function () {
        return f.apply(target, Array.prototype.slice.call(arguments).concat(args1))
    }
}


// 在指定空间中创建对象
// createObj({a:{test: 1, b: 2}}, 'a.b.c.d')
// 在 a 的空间中创建 b 对象 b 的空间中创建 c 对象   c 的空间中创建 d 对象
function createObj(namespace_, target) {
    let arr = target.split('.')
    arr.forEach((item) => {
        namespace_ = namespace_[item] = Object.assign({}, namespace_[item])
    })
    return namespace_
}


// 邮箱正则     \w 字母数字下划线   
function testEmail(emailStr) {
    let pattern = /^[\w\.]+@[\da-z\.-]+\.([a-z]+|[\u4E00-\u9FFF]+)$/
    return pattern.test(emailStr)
}

// 返回函数数组 也就是说返回值数组的元素是函数
function returnFnArr(arr, fn) {
    let res = []
    arr.forEach((item, index) => {
        res[index] = fn.bind(this, item)
    })
    return res
}

// 函数的柯里化
// var fn2 = curryIt(fn); fn2(para1)(para2)(para3)      返回的函数支持链式调用
function curryIt(fn) {
    let argsArr = []
    return function curried(arg) {
        argsArr.push(arg)
        if (argsArr.length >= fn.length) {
            return fn.apply(this, argsArr)
        } else {
            return function curried2(args2) {
                // 注意是 call 函数 参数是单独的形式    若是用 apply 那么参数会变为数组的形式
                return curried.call(this, args2)
            }
        }
    }
}

// 数据计算的精度问题
function multiply(a, b) {
    let aPoint = (a + '').indexOf('.') !== -1 ? (a + '').split('.')[1].length : 1
    let bPoint = (b + '').indexOf('.') !== -1 ? (b + '').split('.')[1].length : 1
    return a * Math.pow(10, aPoint) * b * Math.pow(10, bPoint) / (Math.pow(10, aPoint) * Math.pow(10, bPoint))
}


// 测试美元数据是否符合标准
function testUSD(str) {
    let pattern = /^\$\d{1,3}(,\d{3})*(\.\d{2})*$/
    return pattern.test(str)
}



// 驼峰式命名 匹配第一个字符将其转换大小写 但是 replace 方法返回的新的字符串 那么需要赋值操作
// 
function cssStyle2DomStyle(sName) {
    let arr1 = sName.split('-')
    let arr2 = arr1.map((item) => {
        item = item.replace(/./, (item) => item.toUpperCase())
        return item
    })
    return arr2.join('').replace(/./, (item) => item.toLowerCase())
}


// fn.call(target, ...args)
Function.prototype._call = function (target) {
    if (typeof this !== 'function') {
        throw new TypeError('..')
    }
    var args = [...arguments].slice(1)
    target.fn = this
    let res = target.fn(...args)
    delete target.fn
    return res
}


// 
Array.prototype._reduce = function (fn, initialValue) {
    let len = this.length
    for (let i = 0; i < len; i++) {
        if (initialValue == undefined) {
            initialValue = fn(this[i], this[i + 1], i + 1, this)
            i++
        } else {
            initialValue = fn(initialValue, this[i], i, this)
        }
    }
    return initialValue
}

// 
Object.prototype._create = function (proto) {
    if (typeof proto !== 'object' || proto == null) {
        return
    }
    let fn = function () { }
    fn.prototype = proto
    return new fn()
}


// new 一个实例对象 需要用到函数对象
const _new = function () {
    const object1 = {}
    const fn = [...arguments].shift()
    object1.__proto__ = fn.prototype
    const object2 = fn.apply(object1, arguments)
    return object2 instanceof Object ? object2 : object1
}


// Object_freeze
Object.prototype._freeze = function (object) {
    for (key in object) {
        let keyType = Object.prototype.toString.call(key).slice(8, -1)
        if (keyType === 'object' || keyType === 'array') {
            Object.prototype._freeze(object[key])
        } else {
            Object.defineProperty(object, key, {
                writable: false
            })
        }
    }
    Object.seal(object)
}




// 数据的浅拷贝      
const _shallowClone = target => {
    // 补全代码
    if (typeof target === 'object' && target !== null) {
        // 构造函数的合理应用       constructor.name
        let cons = target.constructor
        let pattern = /^(Function | RegExp | Date | Map | Set)$/i
        if (pattern.test(cons.name)) {
            return target
        } else {
            let _target = Array.isArray(target) ? [] : {}
            for (let prop in target) {
                // hasOwnProperty 避免了原型对象上面的属性和方法的拷贝
                // 不能忘记 for in 在原型上面的弊端
                if (target.hasOwnProperty(prop)) {
                    _target[prop] = target[prop]
                }
            }
            return _target
        }
    } else {
        return target
    }
}


// 简单的深拷贝对象的方法   预先定义一个结果变量来返回拷贝的对象
// 对对象中的数据多次递归直到得出基本数据类型的值用来返回
const _sampleDeepClone = target => {
    // 补全代码
    if (typeof target === 'object' && target !== null) {
        var _target = Array.isArray(target) ? [] : {}
        for (let prop in target) {
            // 不能忘记 for in 在原型上面可以遍历方法和属性的这一个弊端
            if (target.hasOwnProperty(prop)) {
                _target[prop] = _sampleDeepClone(target[prop])
            }
        }
        return _target
    } else {
        return target
    }
}



// 循环引用的解决方案用到了 map 数据结构 
// map.get(target)
const _completeDeepClone = (target, map = new Map()) => {
    // 补全代码
    if (typeof target === 'object' && target !== null) {
        let pattern = /^(Function | Map | Set | RegExp | Date)$/
        let _constructor = target.constructor
        if (pattern.test(_constructor.name)) {
            return new _constructor(target)
        }
        let _cloneTarget = Array.isArray(target) ? [] : {}
        // 数据存在循环引用数据的时候 会直接获取数据值来返回
        if (map.has(target)) {
            return map.get(target)
        }
        map.set(target, _cloneTarget)
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                _cloneTarget[prop] = _completeDeepClone[prop]
            }
        }
        return _cloneTarget
    } else {
        return target
    }
}



// 寄生组合式继承
function Human(name) {
    this.name = name
    this.kingdom = 'animal'
    this.color = ['yellow', 'white', 'brown', 'black']
}
Human.prototype.getName = function () {
    return this.name
}

function Chinese(name, age) {
    Human.call(this, name)
    this.color = 'yellow'
    this.age = age
}
// 寄生组合式继承   那么一个对象的原型指向另外一个对象的原型    构造函数的修正
Chinese.prototype = Object.create(Human.prototype)
Chinese.prototype.constructor = Chinese
Chinese.prototype.getAge = function () {
    return this.age
}


// 发布订阅模式
// emit 发布事件        on 定义事件
class EventEmitter {
    // 补全代码
    constructor() {
        // 装载事件的对象
        this.events = {}
    }
    emit(functionName) {
        // 发布了一个事件名称   当事件名称触发 会触发事件名称数组中装载的回调函数
        if (this.events[functionName]) {
            this.events[functionName].forEach(callback => callback())
        }
    }
    on(event, fn) {
        if (!this.events[event]) {
            // 回调函数的装载使用数组的形式
            this.events[event] = [fn]
        } else {
            this.events[event].push(fn)
        }
    }
}


// 一个整数的质数因子的获取和输出
// 180 --> 2 2 3 3 5
function getNumber(target) {
    let str = ''
    while (true) {
        let i = 2
        while (i * i <= target) {
            // 直接把某一个质因数列举完 能被 4 整除的数据   早已经被 2 列举完毕
            while (target % i === 0) {
                target /= i
                str += i + ' '
            }
            i++
        }
        if (target - 1) {
            str += target + ' '
        }
        break
    }
}


// n -> m 的操作只有三种 n += 1          n -= 1       n = n**2
function solve(n, m) {
    // write code here
    if (n >= m) {
        return n - m
    }
    let sqrtNum = Math.sqrt(m) | 0
    // 左边平方数字 还是 右边平方数字 距离目标数据更近
    if (m - sqrtNum * sqrtNum > (sqrtNum + 1) * (sqrtNum + 1) - m) {
        sqrtNum++
    }
    let choose1 = m - n
    let choose2 = solve(n, sqrtNum) + Math.abs(m - sqrtNum * sqrtNum) + 1
    return Math.min(choose1, choose2)
}



// 字母
// 'aaaa'       -->     'ccgk'
// 选定字符串的开始位置 剩余的字符从左到右依次加上 2 3 5
// 超过 26 那么对 26 取余数
// 相反的方向思考就是 目标字符串的获取 是由于其余三个字符的作为起始位置变化而来的字符数据
function solve(s1, s2) {
    // write code here
    let arr = []
    let min = 200
    for (let i = 0; i < 4; i++) {
        arr[i] = (s2[i].charCodeAt() - s1[i].charCodeAt() + 26) % 26
    }
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            for (let k = 0; k < 26; k++) {
                for (let q = 0; q < 26; q++) {
                    if ((2 * (j + k + q)) % 26 === arr[0]
                        && (2 * i + 3 * (k + q)) % 26 === arr[1]
                        && (3 * (i + j) + 5 * q) % 26 === arr[2]
                        && 5 * (i + j + k) % 26 === arr[3]
                    ) {
                        min = min < (i + j + k + q) ? min : (i + j + k + q)
                    }
                }
            }
        }
    }
    return min
}

// 数字规律的临界值的取舍问题
function solve(a, b, n) {
    // write code here
    // a b b-a -a -b a-b         a b b-a
    let res = [a, b, b - a, -a, -b, a - b]
    let num = n % 6 - 1
    num = num == -1 ? 5 : num
    let _num = res[num]
    return _num % 1000000007 < 0 ? _num % 1000000007 + 1000000007 : _num % 1000000007
}


// 
function digSum(potatoNum, connectRoad) {
    // write code here
    if (!connectRoad.length) {
        return potatoNum.indexOf(Math.max(...potatoNum)) + 1 + ''
    }
    let len = connectRoad.length
    let res = []
    let max = 0
    let cal = 0
    let temp = 0
    let res_ = ''
    const dp = (potatoNum, connectRoad, start, end) => {
        if (end == len - 1) {
            res.push(connectRoad[end][0], connectRoad[end][1])
            for (let value of res) {
                cal += potatoNum[value - 1]
            }
            if (max < cal) {
                max = cal
                res_ = res.join('-')
            }
            res.pop()
            cal = 0
            return
        }
        for (let i = start; i < len - 1; i++) {
            res.push(connectRoad[i][0], connectRoad[i][1])
            temp = i
            for (let j = temp + 1; j < len; j++) {
                if (connectRoad[temp][1] === connectRoad[j][0]) {
                    temp = j
                    dp(potatoNum, connectRoad, temp, j)
                    res.pop()
                }

            }

        }
    }

    dp(potatoNum, connectRoad, 0, 0)
    return res_
}

// 和为 n 的 k 个数字的组合
// 数字不重复
var combinationSum3 = function (k, n) {
    let temp = [];
    const ans = [];
    const check = (mask, k, n) => {
        temp = [];
        for (let i = 0; i < 9; ++i) {
            if ((1 << i) & mask) {
                temp.push(i + 1);
            }
        }
        return temp.length === k && temp.reduce((previous, value) => previous + value, 0) === n;
    }

    for (let mask = 0; mask < (1 << 9); ++mask) {
        if (check(mask, k, n)) {
            ans.push(temp);
        }
    }
    return ans;
};



// 权值最大的路径
// potatoNum 是对应的权值点的权值       connectRoad 是对应权值点可指向的权值
function digSum(potatoNum, connectRoad) {
    // write code here
    if (!connectRoad.length) {
        return potatoNum.indexOf(Math.max(...potatoNum)) + 1 + ''
    }

    let res = []
    let len = connectRoad.length
    let arr = []
    let start = 0
    let max = 0
    let str = ''
    let newres = []
    let cal = 0

    const dp = (choices, arr_) => {
        if (choices == 0) {

            newres = [...new Set(res)]

            for (let value of newres) {
                cal += potatoNum[value - 1]
            }

            if (max < cal) {
                max = cal
                str = newres.join('-')
            }

            cal = 0
            res.pop()
            res.pop()
            return
        }

        for (let i = 0; i < choices; i++) {

            res.push(arr_[i][0], arr_[i][1])

            arr = connectRoad.filter((item) => item[0] == res[res.length - 1])
            start = arr.length
            dp(start, arr)

            if (i == choices - 1) {
                res.pop()
                res.pop()
            }

        }
    }

    dp(len, connectRoad)

    return str

}


// S 当中寻找 520 字符串    '?' 可以作为 '5' '2' '0'

function findOccurrences(S) {
    // write code here
    let a = 0, b = 0, c = 0, mod = 998244353
    let len = S.length

    for (let i = 0; i < len; i++) {
        if (S[i] == '5') {
            a++                 // 5 的个数
        } else if (S[i] == '2') {
            b += a              // 52 的个数
        } else if (S[i] == '0') {
            c += b              // 520 的个数   作为 当前字符为 '0' 并且加上前面为 '52' 的个数 
        } else if (S[i] == '?') {
            c += b
            b += a
            a++
        }
        a %= mod
        b %= mod
        c %= mod
    }
    return c
}

// 动态规划
// dp[i] = dp[i - 5] + dp[i - 6] + ... + dp[0]
// dp[i - 1] = dp[i - 6] + dp[i - 7] + ... + dp[0]
// dp[i] - dp[i - 1] = dp[i - 5]
// dp[i] = dp[i - 1] + dp[i - 5]
function messageCount(N) {
    // write code here
    if (N < 5) {
        return 0
    }
    let res = [1, 1, 1, 1, 1, 2]
    let mod = 998244353
    for (let i = 11; i <= N; i++) {
        res[i - 5] = (res[i - 6] + res[i - 10]) % mod
    }
    return res[N - 5]
}

// 8    -> [] [1] [2] [3] [1,2] [1,3] [2,3] [1,2,3]
//      -> 000 001 010 011 100 101 110 111
function solve(n, m, limit) {
    // write code here
    let res = 0

    const check = (mask, u, v) => {
        if (((mask >> (u - 1)) & 1) == 1 && ((mask >> (v - 1)) & 1) == 1) {
            return true
        }
        return false
    }

    for (let mask = 0; mask < (1 << n); mask++) {
        let pass = true
        for (let value of limit) {
            if (check(mask, value.x, value.y)) {
                pass = false
                break
            }
        }
        if (pass) {
            res++
        }
    }

    return res

}

// 二叉树的右视图的获取
var rightSideView = function (root) {

    if (!root) {
        return []
    }

    let res = []

    const dp = (root, res, step) => {
        if (root) {
            if (res.length == step) {
                res.push(root.val)
            }
            dp(root.right, res, step + 1)
            dp(root.left, res, step + 1)
        }
    }

    dp(root, res, 0)

    return res

};

// 节流
function throttle(fn, delay) {
    let pre = Date.now()
    let timer = null
    let run = () => {
        timer = setTimeout(() => {
            fn.apply(context, args)
            clearTimeout(timer)
            timer = null
        }, delay)
    }
    return function () {
        let context = this
        let args = arguments
        if (!timer) {
            fn.apply(context, args)
            run()
        }
    }
}

// 防抖
function debounce(fn, delay, immediate) {
    let startTime = 0
    let timer = null
    let run = (timeInterval) => {
        timer = setTimeout(() => {
            let now = Date.now()
            let timeDuration = now - startTime
            if (timeInterval < timeDuration) {
                fn.call(context, args)
                clearTimeout(timer)
                timer = null
            } else {
                startTime = now
                run(delay - timeDuration)
            }
        }, timeInterval)

    }
    return function () {
        let context = this
        let args = arguments
        startTime = Date.now()
        if (!timer) {
            if (immediate) {
                fn.apply(context, args)
            }
            run(delay)
        }
    }
}

// 重复的两个字符是需要去除的
function delComChar(s) {
    let res = []
    for (let value of s) {
        if (res.length && res[res.length - 1] == value) {
            res.pop()
        } else {
            res.push(value)
        }
    }
    return res.join('')
}

// 归并排序     O(n)最佳    O(nlogn)最差
function mergeSort(arr) {
    let len = arr.length
    if (len < 2) {
        return arr
    }
    let middle = len / 2 | 0
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
    let res = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    while (left.length) {
        res.push(left.shift())
    }
    while (right.length) {
        res.push(right.shift())
    }
    return res
}

// 快速排序         最佳 O(nlogn)   最差 O(n**2)
function quickSort(arr) {
    let len = arr.length
    if (len <= 1) {
        return arr
    }
    let middle = arr.shift()
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < middle) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(middle, quickSort(right))
}

// 计数排序     数组 C 存储的是 数据的个数的综合
// [empty, 2, 10, 12, 14, 14, 15, 17, 19, 21]
// 数组 B 存储的是结果
// O(n + k)     情况都是 n + k
function countingSort(arr) {
    let len = arr.length
    if (len == 1) {
        return arr
    }
    let min = 0
    let max = 0
    let B = []
    let C = []
    for (let i = 0; i < len; i++) {
        min = min < arr[i] ? min : arr[i]
        max = max > arr[i] ? max : arr[i]
        C[arr[i]] = (C[arr[i]] || 0) + 1
    }
    for (let i = min; i < max; i++) {
        // [empty, 2, 10, 12, 14, 14, 15, 17, 19, 21]
        C[i + 1] = (C[i] || 0) + (C[i + 1] || 0)
    }
    console.log(C)
    for (let i = len - 1; i >= 0; i--) {
        // [empty, 2, 10, 12, 14, 14, 15, 17, 19, 21]
        // 数据是从右边向左边的数据进行插入的
        B[C[arr[i]] - 1] = arr[i]
        C[arr[i]]--
    }
    return B
}

// 基数排序     count 代表最长的数据的位数长度
// 从低位的等级逐步向高位的等级进发         O(n * k)
function baseNumSort(arr, count) {
    let [mod, dec, len, arr2] = [10, 1, arr.length, []]
    const dp = (arr, count) => {
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < len; j++) {
                let level = parseInt((arr[j] % mod) / dec)
                if (arr2[level] == null) {
                    arr2[level] = []
                }
                arr2[level].push(arr[j])
            }
            let start = 0
            for (let k = 0; k < arr2.length; k++) {
                let value = null
                if (arr2[k] != null) {
                    while ((value = arr2[k].shift()) != null) {
                        // 改变的是原来的数组 不必重新声明一个数组存储数据
                        arr[start++] = value
                    }
                }
            }
            mod *= 10
            dec *= 10
        }
    }
    dp(arr, count)
    return arr
}

// 插入排序         O(n)        O(n**2)
function insertSort(arr) {
    let len = arr.length
    for (let i = 1; i < len; i++) {
        let left = 0, right = i - 1, key = arr[i]
        while (left <= right) {
            let mid = (left + right) / 2 | 0
            if (key < arr[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        for (let j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j]
        }
        arr[left] = key
    }
    return arr
}

// 希尔排序是插入排序加上分段       O(nlog2n)
function shellSort(arr) {
    let len = arr.length
    let gap = 1
    let temp = 0
    while (gap < len / 5) {
        gap = gap * 5 + 1
    }
    for (gap; gap > 0; gap = Math.floor(gap / 5)) {
        for (let i = gap; i < len; i++) {
            temp = arr[i]
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j]
            }
            arr[j + gap] = temp
        }
    }
    return arr
}

// 数组数据中选择 k 个数据  要求最大值和最小值的差值最小化
var minimumDifference = function (nums, k) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n - k + 1; i++) {
        ans = Math.min(ans, nums[i + k - 1] - nums[i]);
    }
    return ans;
};

// 
var closeStrings = function (word1, word2) {
    if (word1.length != word2.length) return false;
    let tab1 = new Array(26).fill(0);
    let tab2 = new Array(26).fill(0);
    for (let i = 0; i < word1.length; i++) {
        tab1[word1.charCodeAt(i) - 97]++;
        tab2[word2.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
        if (tab1[i] && tab2[i]) continue;
        if (tab1[i] || tab2[i]) return false;
    }
    tab1.sort((a, b) => a - b);
    tab2.sort((a, b) => a - b);
    for (let i = 0; i < 26; i++) {
        if (tab1[i] != tab2[i]) return false;
    }
    return true;
};

// 以 i 结尾的和为 k 的子数组的个数
var subarraySum = function (nums, k) {
    const mp = new Map();
    // 必须初始化 (0, 1)
    mp.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if (mp.has(pre - k)) {
            // 后面的数据等于前面的数据
            count += mp.get(pre - k);
        }
        if (mp.has(pre)) {
            // 当前数据是需要增加 1 
            mp.set(pre, mp.get(pre) + 1);
        } else {
            mp.set(pre, 1);
        }
    }
    return count;
};

// 加油站的秘密是加油的数量必须是大于路程的长度的
var canCompleteCircuit = function (gas, cost) {
    const n = gas.length;
    let i = 0;
    while (i < n) {
        let sumOfGas = 0, sumOfCost = 0;
        let cnt = 0;
        while (cnt < n) {
            const j = (i + cnt) % n;
            sumOfGas += gas[j];
            sumOfCost += cost[j];
            if (sumOfCost > sumOfGas) {
                break;
            }
            cnt++;
        }
        if (cnt === n) {
            return i;
        } else {
            // 若是出现一个断点不能达到想要的目的 那么前面的一切作废
            i = i + cnt + 1;
        }
    }
    return -1;
};

// 
var reorderList = function (head) {
    let res = []
    let len = 0
    // 数组中放入链表的节点
    while (head) {
        // 提前存入链表的后续节点
        let temp = head.next
        head.next = null
        res.push(head)
        head = temp
        len++
    }
    let left = -1, right = len
    while (++left < --right) {
        // 链表指针的指向是 向后指向的
        res[left].next = res[right]
        // 左右指针还存在间隔的数据 那么需要指向下面一个数据
        if (left + 1 != right) {
            res[right].next = res[left + 1]
        }
    }
    return res[0]
};

// 二叉树的层序遍历
var levelOrder = function (root) {
    let res = []
    if (!root) {
        return res
    }
    let nodeArr = [root]
    while (nodeArr.length) {
        let len = nodeArr.length
        res.push([])
        for (let i = 0; i < len; i++) {
            let node = nodeArr.shift()
            res[res.length - 1].push(node.val)
            if (node.left) {
                nodeArr.push(node.left)
            }
            if (node.right) {
                nodeArr.push(node.right)
            }
        }
    }
    return res
};

// [m, n] 之间的所有数据进行按位与的操作的结果数据
// 
var rangeBitwiseAnd = function (m, n) {
    let shift = 0;
    // 找到公共前缀
    // 当 m n 数据在按位与的过程中数据相同的时候
    while (m < n) {
        m >>= 1;
        n >>= 1;
        ++shift;
    }
    return n << shift;
};

// 
function goNext(generatorfn) {
    let fn = generatorfn()
    function next(data) {
        var res = fn.next(data)
        if (res.done) {
            return res.value
        }
        res.value.then(function (data) {
            next(data)
        })
    }
    next()
}
goNext(gen)

// 包围的字母 
var solve = function (board) {
    // 创建二维数组，默认全部置0
    let m = board.length, n = board[0].length
    let visited = new Array(m).fill(0).map(() => new Array(n).fill(0))
    // dfs模板代码
    var dfs = (i, j, flag) => {
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] === 'X') return
        visited[i][j] = 1
        if (flag) board[i][j] = 'X'
        dfs(i + 1, j, flag)
        dfs(i, j + 1, flag)
        dfs(i - 1, j, flag)
        dfs(i, j - 1, flag)
    }
    // 处理边缘的O  与边缘 O 有关联的 O 将会被标记为 used   
    // 再次总的遍历的时候将会跳过相应的 O
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((i === 0 || i === m - 1 || j === 0 || j === n - 1) && board[i][j] === 'O') {
                dfs(i, j, false);
            }
        }
    }
    // 处理非边缘的O
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== 0 && i !== m - 1 && j !== 0 && j !== n - 1 && board[i][j] === 'O') {
                dfs(i, j, true);
            }
        }
    }
    return board
};

// 猜测数字的结果是 公牛 奶牛两种结果
// 数据拥有并且位置正确 为公牛 数据拥有但是位置不正确那么 为母牛
var getHint = function (secret, guess) {
    let map = new Map()
    let a = 0, b = 0
    let len = secret.length
    for (let i = 0; i < len; i++) {
        map.set(secret[i], (map.get(secret[i]) || 0) + 1)
    }
    for (let i = 0; i < len; i++) {
        if (guess[i] == secret[i] && map.get(guess[i])) {
            map.set(guess[i], map.get(guess[i]) - 1)
            a++
        }
    }
    for (let i = 0; i < len; i++) {
        if (guess[i] !== secret[i] && map.get(guess[i])) {
            map.set(guess[i], map.get(guess[i]) - 1)
            b++
        }
    }
    return a + 'A' + b + 'B'
};

// 
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    function getId(x) {
        return Math.floor(x / (t + 1));
    }
    if (t < 0) return false;

    // 大桶，里面最多有k个小桶。（超过k的时候会删除第一个小桶，滑动窗口的概念
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        // m是当前遍历元素将要在的桶
        const m = getId(nums[i]);

        // 当前大桶中有这个小桶的话，说明存在重复且符合条件，下面两个条件也一样。每次会对比桶的左右小桶。
        if (map.has(m)) {
            return true;
            // 如果当前小桶的右边桶存在，且两个桶相差小于t
        } else if (map.has(m + 1) && Math.abs(map.get(m + 1) - nums[i]) <= t) {
            return true;
            // 如果当前小桶的左边桶存在，且两个桶相差小于t
        } else if (map.has(m - 1) && Math.abs(map.get(m - 1) - nums[i]) <= t) {
            return true;
        }
        // 将这个桶存到大桶里面
        map.set(m, nums[i]);
        // 如果i大于k，也就是大桶装满了，则需要把大桶里面的第一个小桶删了。
        if (i >= k) {
            map.delete(getId(nums[i - k]));
        }
    }
    return false;
};

// sum(1)(2).sumof()    // 3
function sum() {
    let total = [...arguments].reduce((pre, cur) => pre + cur)
    const res = (...args) => {
        return sum(total, ...args)
    }
    res.sumof = () => total
    return res
}

//
function debounce(fn, delay) {
    let now = Date.now()
    let timer = null
    let remain = 0
    let context = this
    const run = (timerRemain) => {
        timer && clearTimeout(timer)
        let cur = Date.now()
        remain = cur - now
        timer = setTimeout(() => {
            if (remain > timerRemain) {
                fn.call(context)
                now = Date.now()
            } else {
                run(remain)
            }
        }, timerRemain)
    }
    run(delay)
    
}