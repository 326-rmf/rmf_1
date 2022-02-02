var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hello = 'Hello World';
// console.log("hello: " + hello)
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
// obj.name()
var num_one = 10;
// 元素类型后面加上 []
var arr_one = [1, 2];
// 数组泛型
var arr_tow = [1, 2];
// 元组 就是数组的数量和类型是确定的
var arr_three = ['Tom', 20];
// null 表示对象值缺失 空对象指针
var instaceNull;
// undefined 初始化一个变量为未定义的值 
// null undefined 是其他任何类型的子类型    可以赋值给其他类型 但是 ts 启用严格空校验
// null undefined 只能赋值给 void 和本身对应的数据类型
var instanceUndefined;
// never 表示其他类型的子类型 代表从来不会出现的值  一般用于报错函数
// 函数中的表现通常为 抛出异常 无法执行到终止点 代表不会出现的值    never 类型可以赋值给 never 类型
function ErrorFn() {
    throw new Error('error');
}
// any 定义各种存储数据类型的数组的时候 any 变量的值是动态改变的    会直接跳过类型检查
var arr_four = ["Tom", 20];
// console.log("att_three_name: " + arr_three[0])
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
// console.log("Color Blue: " + c)
var a;
a = function (n1, n2) {
    return n1 + n2;
};
// class 类的简介 类类似于一个函数      
// 类中包含了两个部分 属性 方法
var Person = /** @class */ (function () {
    function Person() {
        // 实例属性
        this.name = 'Tom';
        this.age = 20;
        // 只读属性 readonly    不可修改
        this.hasParent = true;
    }
    // 定义方法
    // 直接书写的方法是实例方法
    Person.prototype.sayHello = function () {
        console.log('Hello 大家好');
    };
    // 定义类方法
    Person.sayGoodby = function () {
        console.log('Goodby');
    };
    // 定义类的静态属性 可以直接使用类名来访问 静态属性 (类属性)
    Person.hasGirl = false;
    // static readonly 一起使用 使用的变量是静态的只读的属性
    Person.gender = 'male';
    return Person;
}());
var pre = new Person();
// console.log(Person.hasGirl)
// 构造函数
var Dog = /** @class */ (function () {
    // 构造函数在对象创建时候调用
    function Dog(name, age) {
        // 在实例方法中  this 表示当前是实例对象  
        // 可以通过 this 向实例对象添加属性
        // console.log(this)
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        console.log(this.name);
    };
    return Dog;
}());
var dog = new Dog('WangWang', 2);
// dog.bark()
// 泛型的使用 
// 定义函数或者类的时候 遇到类型不确定的时候 可以使用泛型
// 避免使用 any 数据类型
function fn(a) {
    return a;
}
var result_1 = fn(0); // 不指定泛型类型    用到了 ts 的自动类型推断
var result_2 = fn('hello'); // 指定泛型数据类型
// console.log(result_1, result_2)
function fn_2(a, b) {
    console.log(b);
    return a;
}
// T 是一个泛型 并且实现了 Inter 接口的规范     下面例子代表传入的数据具有 length 属性
function fn3(a) {
    return a.length;
}
var result_3 = fn3({ length: 10 });
// console.log(result_3)
// 类型为 any
var item;
// 类型推断为 string
var item_2 = '1';
item = 1;
item = 'Tom';
// Declare a tuple type
var x;
// Initialize it
x = ['hello', 10]; // OK
// console.log(x[0].substr(1)); // OK
var Color_;
(function (Color_) {
    Color_[Color_["Red"] = 100] = "Red";
    Color_[Color_["Green"] = 101] = "Green";
    Color_[Color_["Blue"] = 102] = "Blue";
})(Color_ || (Color_ = {}));
var color = Color_.Green;
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
// console.log(mySquare)
var A = /** @class */ (function () {
    function A(a) {
        this.a = a;
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super.call(this, 'name') || this;
    }
    return B;
}(A));
var C = /** @class */ (function () {
    function C(a) {
        this.a = a;
    }
    return C;
}());
var a_ = new A('Tom');
var b = new B();
var c_ = new C('Tom');
a_ = b;
// 会报错是因为 即使 类 A 和 类 B 数据表面相同  但是并不是同一块数据区域进行声明的  那么不能兼容
// b a_ 是共享私有成员 a         但是 c_ 中的 a 并不是和 a_ 中的 a 共享的
// 那么这就是导致兼容性问题的缘由
// a_ = c_
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
var user = {
    name: 'Jack',
    age: 123
};
var SomeClass = /** @class */ (function () {
    function SomeClass() {
    }
    SomeClass.prototype.test = function (para, flag) {
        // 具体实现
        return 11;
    };
    return SomeClass;
}());
var someClass = new SomeClass();
// ok
// console.log(someClass.test(user))
// console.log(someClass.test(123, false))
// 函数传入第二个参数是字符串的形式     函数作用是通过对象的 name 获取对象的 value 数据
function getObjValue(obj, name_) { return obj[name_]; }
var obj_ = {
    nameMy: 'Tom'
};
// console.log(getObjValue(obj_, 'nameMy'))        // 函数参数是字符串形式
var Person_ = /** @class */ (function () {
    function Person_() {
    }
    return Person_;
}());
var person = {
    name: 'Tom'
};
// console.log(person.name, person.age)
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
(function (Color) {
    function mixColor(colorName) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
    Color.mixColor = mixColor;
})(Color || (Color = {}));
// console.log(Color.mixColor('yellow'))
