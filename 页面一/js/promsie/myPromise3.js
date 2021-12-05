//promise三个状态
const PENDING = 'pending'
const RESOLVE = 'resolve'
const REJECT = 'reject'


const handlePromise = (result, newPromise, resolve, reject) => {
    if (result === newPromise) {
        throw new Error('can not throw oneself')
    }
    //判断链式调用返回的对象    是不是promise对象   或者是普通的数据类型
    //number string undefined boolean
    //function可能是promise的构造函数的形式
    if (typeof result == 'function' || (typeof result === 'object' && result !== null)) {
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
//promise对象
class myPromise3 {
    status = PENDING
    result = undefined
    reason = undefined
    onRejectedArr = []
    onResolvedArr = []
    //构造函数  首当其冲
    //
    constructor(excution) {
        //resolve       reject是改变状态的函数
        const resolve = (result) => {
            if(this.status === PENDING){
            this.status = RESOLVE
            this.result = result
            this.onResolvedArr.map(fn => fn())}
        }
        const reject = (reason) => {
            if(this.status === PENDING){
            this.status = REJECT
            this.reason = reason
            this.onRejectedArr.map(fn => fn())}
        }
        try {
            excution(resolve, reject)

        } catch (e) {
            reject(e)
        }
    }


    then(onResolved, onRejected) {
        onResolved = typeof onResolved === 'function' ? onResolved : data => data
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw new Error(err)
        }

        //链式调用函数的执行需要外部函数的使用
        const newPromise = new myPromise3((resolve, reject) => {
            if (this.status === RESOLVE) {
                setTimeout(() => {
                    try {
                        const result =onResolved(this.result)
                        handlePromise(result, newPromise, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }


                }, 0)
            }
            if (this.status === REJECT) {
                setTimeout(() => {
                    try {
                        const result = onRejected(this.reason)
                        handlePromise(result, newPromise, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                    //链式调用需要接收参数来执行链式函数

                }, 0)
            }
            if (this.status === PENDING) {
                //发布订阅模式
                //数组中存储的是需要执行的异步函数
                this.onRejectedArr.push(() => {
                    try {
                        const result =onRejected(this.reason)
                        handlePromise(result, newPromise, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }

                })
                this.onResolvedArr.push(() => {
                    try {
                        const result =onResolved(this.result)
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



module.exports = myPromise3





