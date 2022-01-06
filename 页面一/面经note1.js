// 'use strict'
const arr = [1, 2, 3]
const obj = { name: 'rmf', age: 21 }
const twoArr = [
    ["1", "str1"],
    [1, "num1"]
]
let objTestIterator = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3
    }
}

// const { log } = window.console
// 对象转化为具有迭代器的map数据结构        使用API Object.entries(obj)
// 相反map数据结构转化为对象的时候      let mapToObj = Object.fromEntries(map.entries())
// map数据结构的创建方式        可以用map的set方法 添加数据     map.set(key, value)
// 还可以使用let map = new Map(iterable)
// let map = new Map([
//     [key1, value1],
//     [key2, value2],
//      ...
// ])
// 二维数组的形式添加map数据        那么相反mapToArray = Array.from(map.entries())
let map = new Map(Object.entries(obj))




// for in 遍历对象key       for in可以遍历到对象的原型方法和属性    
// 不想遍历原型方法和属性       那么内部需要判断方法和属性是否是对象的实例属性      而不是原型属性
// 判断对象的实例属性和原型属性的API        obj.hasOwnProperty(key)     返回boolean值
function ergodicObject() {
    for (let myObj in obj) {
        if (obj.hasOwnProperty(myObj)) {
            console.log(myObj)
        }
    }
}
// ergodicObject()


// for of 遍历数组value
// for of 适合遍历数组/数组对象/字符串/map/set等拥有迭代器的对象的集合  但是不能遍历对象
// 因为对象是没有迭代器对象的       forEach不能正确响应break        continue    return 语句
// for of可以       一定要用for of遍历对象的话      加上Object.keys(obj)        返回数组形式进行遍历
// for in 本职工作是遍历对象
// for of循环背后调用的是iteration  就是说数组对象上部署来 iteration属性    那么数组是一个可迭代的对象
// iteration的作用：为各种数据结构提供统一的访问接口    使得数据结构成员可以按照某种次序排列
// iteration主要供for of消费
// iteration遍历的时候会生成一个指针对象    指向当前数据结构的起始位置  遍历器的本质就是一个指针对象
// 对象里面含有next方法 调用next方法会指向数据结构下一个元素    并且返回数据结构里面的成员信息
// 成员信息是一个包含value和done属性的对象      value代表当前成员的数据值   done代表遍历是否结束
// 用for of可遍历的对象都内置了iterator接口
// 默认的iterator接口部署在数据结构 Symbol.iterator中       Symbol.iterator本身是一个函数
// 具有iterator的数据结构可以自己调用iterator来使用遍历自身数据
// 
function ergodicArray() {
    // 自然方式遍历
    for (let myArr of arr) {
        console.log(myArr)
    }

    // 调用自身iterator来遍历数据
    let res = arr[Symbol.iterator]()
    console.log(res.next())
}
// ergodicArray()


// for of遍历map数据结构
function ergodicMap() {
    for (let [key, value] of map) {
        console.log(key + "'s age is: " + value)
    }
}
// ergodicMap()


// twoArrayToMap            mapToTwoArray
function arrayAndMap(twoArr, map) {
    // arrayToMap
    let twoArrToMap = new Map(twoArr)
    // mapToArray
    let mapToArray = Array.from(map.entries())
    console.log(twoArrToMap, mapToArray)
}
// arrayAndMap(twoArr, map)



// 对象的
function objectAndMap(obj, map) {
    // 对象-->Map
    let myMap = new Map(Object.entries(obj))
    console.log(myMap)

    // Map-->Object     map.entries()将map转换为迭代对象的表现形式
    // let myObj = Object.fromEntries(map.entries())
    // 不使用entries也是可以直接转换为对象的
    let myObj = Object.fromEntries(map)
    console.log(myObj)


}
// objectAndMap(obj, map)

// 实现一个iteration
function myIteration(target) {
    let index = 0
    return {
        next: function () {
            return index < target.length ?
                { value: target[index++], done: false } :
                { value: undefined, done: true }
        }
    }
}

// let res = myIteration(arr)
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())

// string-->array       [...str]        str.split('')       字符串转变为数组
// 使用扩展运算符的时候会涉及到迭代器
// generator函数的执行返回的是迭代器对象


// 扩展运算符的方式调用迭代器       for of方法使用迭代器
// console.log([...objTestIterator])
// for (let i of objTestIterator) {
//     console.log(i)
// }


// 测试 proxy
var proxy = new Proxy(obj, {
    // get 拦截对象属性的读取   
    // get 参数  
    // target 目标对象   
    // propKey 属性名 
    // receiver  proxy 实例本身 最后一个参数可选
    // 如果一个属性配置了不可配置 configurable 属性         不可写 writable 属性
    // configurable: false          writable: false
    // 那么 Proxy 是不能修改属性的  否则会报错
    get: function (target, propKey, receiver) {
        return Reflect.get(target, propKey)
    },

    // 拦截属性的赋值操作       拦截年龄的错误范围
    set: function (target, propKey, propValue, receiver) {
        if(propKey === 'age') {
            if(propValue > 200) {
                throw new RangeError('The age seems invalid')
            }
        }
        obj[propKey] = propValue
    },

    deleteProperty: function (target, propKey) {
        Reflect.deleteProperty(target, propKey)
    }
})
// delete proxy.age
// console.log(proxy.age)

// "5" + []     -->  "5"





