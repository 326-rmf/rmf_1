
const RESOLVE = 'resolved'
const REJECT = 'rejected'
const PENDING = 'pending'

const handlePromise = (result,newPromise,resolve,reject)=>{

    //promise是不能返回自己的
    if(result === newPromise){
        throw new Error('can not return oneself')
    }

    if((typeof result === 'object' &&  result !== null) || typeof result === 'function'){
        //返回数据是promise构造函数类型是function       
        //返回的数据是promise对象       数据类型是object
        let lock = false
        try{
            const then = result.then
            if(typeof then === 'function'){
    
                //返回的数据是一个promise对象       那么采取then的方法来继续调用函数
                then.call(result,
                    (r)=>{
                        if(lock)return 
                        handlePromise(r,newPromise,resolve,reject)
                        lock = true
                    },
                    (e)=>{
                        if(lock)return 
                        reject(e)
                        lock = true
                    }
                    )
            }else{
                //返回的数据不是promise     直接返回出去
                resolve(result)
            }
        }catch(e){
            reject(e)
        }
        
    }else{
        //result返回的是一个普通数据        number string boolean    undefined
        resolve(result)
    }
}
class myPromise{
    //promise的初始状态是pending 
status = PENDING;

//改变状态函数的默认参数
result = undefined
reject = undefined

//发布订阅模式来定义两个数组
//两个数组来接收异步执行的函数     异步执行函数搜集的数组
onResolvedArr = []
onRejectedArr = []
//promise的构造函数
constructor(excution){
    //promise的两个改变状态的函数
const resolve = (result)=>{
    //改变状态的函数会被调用者传入参数
    //定义响应的变量来接收调用者传入的参数
    if(this.status = PENDING){  
        //resolve来获取成功状态下面传入的参数
        this.result = result
        this.status = RESOLVE

        //成功的状态是异步获取数据的方式

        this.onResolvedArr.map((fn)=>fn())
    }
}
const reject = (reason)=>{
    if(this.status = PENDING){
        this.reason = reason
        this.status = REJECT
        this.onRejectedArr.map((fn)=>fn())
    }
}

try{
    //如果调用者错误使用promise会报错
excution(resolve,reject)
}catch(e){
    reject(e)
}
}

//onResolved       onRejected是两个状态回调函数        就是resolved  rejected状态的回调函数
then(onResolved,onRejected){
    //newPromise的作用是为了让promise具有链式调用的功能
    onResolved = typeof onResolved === 'function' ? onResolved:(data)=>data
    //
    onRejected = typeof onRejected === 'function' ? onRejected:(err)=>{
        throw new Error(err)
    }
    const  newPromise = new myPromise((resolve,reject)=>{
        if(this.status === RESOLVE){
            //then方法是异步执行的     不能是同步执行的         同步执行会阻塞其他主线程的同步任务
            //不使用setTimeout是不符合规定的执行函数

            setTimeout(()=>{
                try{
                    const result = onResolved(this.result)
                    handlePromise(result,newPromise,resolve,reject)
                }catch(e){
                    reject(e)

                }

                //result是用来接收then方法返回的参数
              
            },0 )
            
        }
        if(this.status === REJECT){
            setTimeout(()=>{

                try{
                    const result = onRejected(this.reason)
                    handlePromise(result,newPromise,resolve,reject)
                }catch(e){
                    reject(e)
                    
                }

                
            })
        }
        
        //then 一开始接收的数据状态是pending        那么就说明这需要异步接收数据        
        //使用发布订阅模式来实现        异步resolve     或者        异步reject接收数据
    
        if(this.status === PENDING){
            //then方法接收的两个异步函数        异步是需要装进对应的数组的
                //异步执行的函数        因为是需要传递参数的
            // this.onResolvedArr.push(onResolved(this.result))
            //我的想法直接使用参数的形式来推入函数      主播的想法是通过回调函数的形式来传递参数
            //因为是需要执行函数的      那么如果直接用函数参数 形式传递函数     那么就是传递的
            //函数执行的结果        结果是不能当作函数来执行的
            //那么我们需要用箭头函数的形式来传递这个函数参数        这样执行函数的时候就是执行 的箭头函数
            //而不是执行的函数执行的结果
            // this.onResolvedArr.push(function(){
            //     onResolved(this.result)
            // })
            //我使用普通函数的形式      和      箭头函数的形式
            //普通函数的形式this指向是最后调用的时候的函数作用域
            //箭头函数形式永远是指向上面一层作用域
            this.onResolvedArr.push(()=>{

                try{
                    const result =  onResolved(this.result)
                    handlePromise(result,newPromise,resolve,reject)
                }catch(e){
                    reject(e)
                    
                }

                //then方法中返回的数据接收机制
               
            })
            //传递参数的动作用函数的形式        和      直接用参数的形式
            // this.onRejectedArr.push(onRejected(this.reason))
            // this.onRejectedArr.push(function(){
            //     onRejected(this.reason)
            // })
            this.onRejectedArr.push(()=>{
                try{
                    const result = onRejected(this.reason)
                handlePromise(result,newPromise,resolve,reject)
                }catch(e){
                    reject(e)

                }
                
            })
        }
    })

    //return        promise最后then 的返回值是promise对象
    return newPromise
   

}
catch(onRejected){
return this.then(undefined,onRejected)
}
}


module.exports = myPromise