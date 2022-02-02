var hello = 'Hello World';
console.log("hello: " + hello);
var Site = /** @class */ (function () {
    function Site() {
    }
    // 函数的返回值类型是 void 
    Site.prototype.name = function () {
        console.log('name: Runoob');
    };
    return Site;
}());
var obj = new Site();
obj.name();
var num_one = 10;
var arr_one = [1, 2];
var arr_tow = [1, 2];
// 元组
var arr_three = ['Tom', 20];
// any 定义各种存储数据类型的数组的时候
var arr_four = ["Tom", 20];
console.log("att_three_name: " + arr_three[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log("Color Blue: " + c);
var a;
a = function (n1, n2) {
    return n1 + n2;
};
// class 类的简介 类类似于一个函数      
// 类中包含了两个部分 属性 方法
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Tom';
        this.age = 20;
    }
    return Person;
}());
var pre = new Person();
console.log(pre);
