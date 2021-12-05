// var crePromise = new myPromise2((resolve,reject)=>{
//     resolve('ok')
// })
// crePromise.then(
//     res=>console.log(res),
//     err=>console.log(err)
// )



const RESOLVE = 'resolve'
const REJECT = 'reject'
const PENDING = 'pending'
const handlePromise = (result, newPromise, resolve, reject) => {
    if (result === newPromise) {
        throw new Error('can not throw oneself')
    }
    //递归的promise可能会出错
    if (typeof result === 'function' || (typeof result === 'object' && result !== null)) {
        let lock = false
        try {
            const then = result.then
            if (typeof then === 'function') {
                then.call(result,
                    (res) => {
                        if (lock) return
                        handlePromise(res, newPromise, resolve, reject)
                        lock = true
                    },
                    (err) => {
                        if (lock) return
                        reject(err)
                        lock = true
                    }
                )
            } else {
                resolve(result)
            }
        } catch (error) {
            reject(error)
        }


    } else {
        resolve(result)
    }
}
class myPromise2 {
    status = PENDING
    result = undefined
    reason = undefined
    onRejectedArr = []
    onResolvedArr = []
    //promise构造函数里是执行的有改变状态的函数
    //构造函数里面的resolve     reject来接收参数        改变状态
    //const resolve = ()=>{}
    constructor(excution) {
        const resolve = (result) => {
            if (this.status === PENDING) {
                this.status = RESOLVE
                this.result = result
                //执行用户的延迟回调函数
                this.onResolvedArr.map(fn => fn())
            }
        }
        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECT
                this.reason = reason
                this.onRejectedArr.map(fn => fn())
            }
        }
        //构造函数书写错误的时候
        try {
            excution(resolve, reject)

        } catch (e) {
            reject(e)
        }
    }
    //then里面接收的是方法function      执行函数需要传递参数
    //then方法里面有两个函数    成功函数    失败函数
    //判断函数的类型    是根据状态来判断函数的类型  this.status     pending         resolve     reject
    //初步完成同步函数的执行
    //执行异步任务的promise     需要异步执行函数的时候      promise中的then需要异步来执行函数
    //内部执行异步函数直接添加setTimeout        但是开发者请求数据异步的时候会出现异步执行
    //解决异步执行  
    //promise对象的then方法是同步执行       如果对象里面是异步数据延迟的话  
    //if(this.)
    //具备then的链式调用        那么需要then 返回的是promise对象        或者普通数据
    then(onResolved, onRejected) {
        onResolved = typeof onResolved === 'function' ? onResolved : data => data
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw new Error(err)
        }


        const newPromise = new myPromise2((resolve, reject) => {
            if (this.status === RESOLVE) {
                setTimeout(() => {

                    try {
                        const result = onResolved(this.result)
                        handlePromise(result, newPromise, resolve, reject)
                    } catch (error) {
                        reject(error)

                    }


                }, 0);
            }
            if (this.status === REJECT) {

                setTimeout(() => {

                    try {
                        const result = onRejected(this.reason)
                        handlePromise(result, newPromise, resolve, reject)
                    } catch (error) {
                        reject(error)

                    }

                }, 0);
            }
            if (this.status === PENDING) {
                this.onRejectedArr.push(() => {
                    try {
                        const result = onRejected(this.reason)
                        handlePromise(result, newPromise, resolve, reject)
                    } catch (error) {
                        reject(error)

                    }

                })
                this.onResolvedArr.push(() => {
                    try {
                        const result = onResolved(this.result)
                        handlePromise(result, newPromise, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }

                })
            }
        })
        return newPromise
    }

    catch(onRejected) {
        return this.then(undefined, onRejected)
    }
}
module.exports = myPromise2


