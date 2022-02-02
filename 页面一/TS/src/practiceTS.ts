
const hello: string = 'Hello World'
// console.log("hello: " + hello)
class Site {
    // 函数的返回值类型是 void 
    name(): void {
        console.log('name: Runoob')
    }
}
var obj = new Site()
// obj.name()
let num_one: number | string = 10
// 元素类型后面加上 []
let arr_one: number[] = [1, 2]
// 数组泛型
let arr_tow: Array<number> = [1, 2]
// 元组 就是数组的数量和类型是确定的
let arr_three: [string, number] = ['Tom', 20]
// null 表示对象值缺失 空对象指针
let instaceNull: null
// undefined 初始化一个变量为未定义的值 
// null undefined 是其他任何类型的子类型    可以赋值给其他类型 但是 ts 启用严格空校验
// null undefined 只能赋值给 void 和本身对应的数据类型
let instanceUndefined: undefined
// never 表示其他类型的子类型 代表从来不会出现的值  一般用于报错函数
// 函数中的表现通常为 抛出异常 无法执行到终止点 代表不会出现的值    never 类型可以赋值给 never 类型
function ErrorFn(): never {
    throw new Error('error')
}

// any 定义各种存储数据类型的数组的时候 any 变量的值是动态改变的    会直接跳过类型检查
let arr_four: any[] = ["Tom", 20]
// console.log("att_three_name: " + arr_three[0])
enum Color { Red, Green, Blue }
let c: Color = Color.Blue
// console.log("Color Blue: " + c)
let a: (a: number, b: number) => number
a = function (n1, n2) {
    return n1 + n2
}

// class 类的简介 类类似于一个函数      
// 类中包含了两个部分 属性 方法
class Person {
    // 实例属性
    name: string = 'Tom'
    age: number = 20

    // 定义类的静态属性 可以直接使用类名来访问 静态属性 (类属性)
    static hasGirl: boolean = false

    // 只读属性 readonly    不可修改
    readonly hasParent: boolean = true

    // static readonly 一起使用 使用的变量是静态的只读的属性
    static readonly gender: string = 'male'

    // 定义方法
    // 直接书写的方法是实例方法
    sayHello() {
        console.log('Hello 大家好')
    }

    // 定义类方法
    static sayGoodby() {
        console.log('Goodby')
    }
}

const pre = new Person()
// console.log(Person.hasGirl)


// 构造函数
class Dog {
    // 在类 class 中定义实例属性
    name: string
    age: number
    // 构造函数在对象创建时候调用
    constructor(name: string, age: number) {
        // 在实例方法中  this 表示当前是实例对象  
        // 可以通过 this 向实例对象添加属性
        // console.log(this)
        this.name = name
        this.age = age
    }
    bark() {
        console.log(this.name)
    }
}

const dog = new Dog('WangWang', 2)
// dog.bark()

// 泛型的使用 
// 定义函数或者类的时候 遇到类型不确定的时候 可以使用泛型
// 避免使用 any 数据类型
function fn<T>(a: T): T {
    return a
}
let result_1 = fn(0)   // 不指定泛型类型    用到了 ts 的自动类型推断
let result_2 = fn<string>('hello')     // 指定泛型数据类型
// console.log(result_1, result_2)

function fn_2<T, K>(a: T, b: K): T {
    console.log(b)
    return a
}

// fn_2<number, string>(123, 'hello')

// 泛型可以使用类  可以使用接口限制泛型的范围   
interface Inter {
    length: number
}

// T 是一个泛型 并且实现了 Inter 接口的规范     下面例子代表传入的数据具有 length 属性
function fn3<T extends Inter>(a: T): number {
    return a.length
}
let result_3 = fn3({ length: 10 })
// console.log(result_3)


// 类型为 any
var item;
// 类型推断为 string
var item_2 = '1'
item = 1
item = 'Tom'



// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// console.log(x[0].substr(1)); // OK


enum Color_ { Red = 100, Green, Blue }
let color: Color_ = Color_.Green;
// console.log(color)

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });
// console.log(mySquare)

class A { private a: string; constructor(a: string) { this.a = a } }

class B extends A { constructor() { super('name') } }

class C { private a: string; constructor(a: string) { this.a = a } }

let a_ = new A('Tom'); let b = new B(); let c_ = new C('Tom')

a_ = b;


// 会报错是因为 即使 类 A 和 类 B 数据表面相同  但是并不是同一块数据区域进行声明的  那么不能兼容
// b a_ 是共享私有成员 a         但是 c_ 中的 a 并不是和 a_ 中的 a 共享的
// 那么这就是导致兼容性问题的缘由
// a_ = c_

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();



interface User {
    name: string;
    age: number;
}

const user = {
    name: 'Jack',
    age: 123
};

class SomeClass {

    /**
     * 注释 1
     */
    public test(para: User): number;
    /**
     * 注释 2
     */
    public test(para: number, flag: boolean): number;
    public test(para: User | number, flag?: boolean): number {
        // 具体实现
        return 11;
    }
}

const someClass = new SomeClass();


// ok
// console.log(someClass.test(user))
// console.log(someClass.test(123, false))


// 函数传入第二个参数是字符串的形式     函数作用是通过对象的 name 获取对象的 value 数据
function getObjValue<T, K extends keyof T>(obj: T, name_: K): T[K] { return obj[name_] }

let obj_ = {
    nameMy: 'Tom'
}

// console.log(getObjValue(obj_, 'nameMy'))        // 函数参数是字符串形式

class Person_ {
    name: string;
    age: number
}

type Person_choose<T> = {
    [P in keyof T]?: T[P]
}

let person: Person_choose<Person_> = {
    name: 'Tom'
}

// console.log(person.name, person.age)

enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
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
}

// console.log(Color.mixColor('yellow'))

