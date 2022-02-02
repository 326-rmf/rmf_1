(function () {

    // 提取相同的代码   重用代码 节省资源 高效开发
    // 所有子类同时拥有父类中的 属性 方法
    // 继承的好处就是不修改原来类的基础上 扩展原来的类
    // 抽象类   不能创建对象    是专门用来继承的对象
    // 抽象类当中可以添加抽象方法
    // 抽象方法只能定义在抽象类中   抽象方法必须被子类进行重写
    abstract class Animal {
        // 属性的修饰符
        // public 属性可以在任意位置访问(修改)  public 是默认的数据范围
        // private 属性只能在类内部进行访问(修改)   实例对象对象在类的外部访问会报错
        // private 设置之后 等于关闭了属性的访问权限
        // 属性私有化之后   想要访问属性    那么需要定义属性的 get set 函数 对属性进行访问和修改
        // get set 有了之后 属性的控制权掌握在自己手里
        // protected 受保护的属性 只能在当前类和当前类的子类中访问
        // 可以直接在构造函数中定义属性
        public name: string
        age: number
        private _favorite: string
        // 构造函数在对象创建时候调用
        constructor(name: string, age: number) {
            // 在实例方法中  this 表示当前是实例对象  
            // 可以通过 this 向实例对象添加属性
            // console.log(this)
            this.name = name
            this.age = age
        }
        abstract bark(): void
        // 定义方法 来获取私有属性
        // 实例就可以使用方法来间接访问属性
        // getFavorite() {
        //     return this.favorite
        // }
        // get 方法的另外一种写法
        get favorite() {
            return this._favorite
        }

        // 实例调用方法来间接修改属性
        // setFavorite(value: string) {
        //     this.favorite = value
        // }
        // set 方法的另外一种写法
        set favorite(value: string) {
            this._favorite = value
        }
    }

    class Dog extends Animal {
        gender: string
        // 如果子类中使用构造函数   那么相当于对父类中的 构造函数 进行一个重写
        constructor(name: string, age: number, gender: string) {
            super(name, age)
            this.gender = gender
        }

        run() {
            console.log(`${this.name}在跑`)
        }

        // 如果子类和父类有同样的方法 那么子类的方法可以覆盖父类的方法
        // 这种称为方法的重写
        bark() {
            // 在类的方法中 super 表示当前类的父类
            // super.bark()
            // console.log('dog is shouting')
        }
    }

    const dog = new Dog('旺财', 5, 'male')
    console.log(dog)
    dog.bark()
    dog.run()

    class Cat extends Animal {
        bark(): void {
            console.log('cat abstract')
        }
    }

    const cat = new Cat('咪咪', 5)
    console.log(cat)
    cat.bark()

    // 描述一个对象的数据类型       type
    type myType = {
        name: string,
        age: number
    }

    const obj: myType = {
        name: 'Tom',
        age: 20
    }

    // 接口用来定义一个类的结构
    // 定义一个类的属性和方法 
    // 接口是可以重复声明的 但是 type 数据类型是不可重复声明相同的数据名的
    // 接口重复声明 那么新的接口和旧的接口的属性是会自动合并的
    // 接口可以在定义类的时候   限制类的结构
    // 接口中所有属性都是不能有实际值的 接口只是定义对象的结构 不考虑实际值 
    // 接口中所有方法都是抽象方法
    // 定义类的时候 可以使用类实现一个接口 
    // 接口就是定义一个规范 对类的一个限制  类实现接口 才能满足相应的规范
    interface myInterface {
        name: string,
        age: number
    }

    const obj_2: myInterface = {
        name: 'Tom',
        age: 20
    }

    interface myInterface_2 {
        name: string,
        sayHello(): void
    }

    class myClass implements myInterface_2 {
        name: string
        constructor(name: string) {
            this.name = name
        }
        sayHello(): void {
            console.log('Hello')
        }
    }
})()