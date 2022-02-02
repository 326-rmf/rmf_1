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
(function () {
    // 提取相同的代码   重用代码 节省资源 高效开发
    // 所有子类同时拥有父类中的 属性 方法
    // 继承的好处就是不修改原来类的基础上 扩展原来的类
    // 抽象类   不能创建对象    是专门用来继承的对象
    // 抽象类当中可以添加抽象方法
    // 抽象方法只能定义在抽象类中   抽象方法必须被子类进行重写
    var Animal = /** @class */ (function () {
        // 构造函数在对象创建时候调用
        function Animal(name, age) {
            // 在实例方法中  this 表示当前是实例对象  
            // 可以通过 this 向实例对象添加属性
            // console.log(this)
            this.name = name;
            this.age = age;
        }
        Object.defineProperty(Animal.prototype, "favorite", {
            // 定义方法 来获取私有属性
            // 实例就可以使用方法来间接访问属性
            // getFavorite() {
            //     return this.favorite
            // }
            // get 方法的另外一种写法
            get: function () {
                return this._favorite;
            },
            // 实例调用方法来间接修改属性
            // setFavorite(value: string) {
            //     this.favorite = value
            // }
            // set 方法的另外一种写法
            set: function (value) {
                this._favorite = value;
            },
            enumerable: false,
            configurable: true
        });
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        // 如果子类中使用构造函数   那么相当于对父类中的 构造函数 进行一个重写
        function Dog(name, age, gender) {
            var _this = _super.call(this, name, age) || this;
            _this.gender = gender;
            return _this;
        }
        Dog.prototype.run = function () {
            console.log("".concat(this.name, "\u5728\u8DD1"));
        };
        // 如果子类和父类有同样的方法 那么子类的方法可以覆盖父类的方法
        // 这种称为方法的重写
        Dog.prototype.bark = function () {
            // 在类的方法中 super 表示当前类的父类
            // super.bark()
            // console.log('dog is shouting')
        };
        return Dog;
    }(Animal));
    var dog = new Dog('旺财', 5, 'male');
    console.log(dog);
    dog.bark();
    dog.run();
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.bark = function () {
            console.log('cat abstract');
        };
        return Cat;
    }(Animal));
    var cat = new Cat('咪咪', 5);
    console.log(cat);
    cat.bark();
    var obj = {
        name: 'Tom',
        age: 20
    };
    var obj_2 = {
        name: 'Tom',
        age: 20
    };
    var myClass = /** @class */ (function () {
        function myClass(name) {
            this.name = name;
        }
        myClass.prototype.sayHello = function () {
            console.log('Hello');
        };
        return myClass;
    }());
})();
