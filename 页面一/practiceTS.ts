const hello : string = 'Hello World'
console.log("hello: "+hello)
class Site {
    // 函数的返回值类型是 void 
    name () : void {
        console.log('name: Runoob')
    }
}
var obj = new Site()
obj.name()
let num_one : number | string= 10
let arr_one : number[] = [1, 2]
let arr_tow : Array<number> = [1, 2]
// 元组
let arr_three : [string, number] = ['Tom', 20]
// any 定义各种存储数据类型的数组的时候
let arr_four : any[] = ["Tom", 20]
console.log("att_three_name: "+arr_three[0])
enum Color {Red, Green, Blue}
let c : Color = Color.Blue
console.log("Color Blue: "+c)

