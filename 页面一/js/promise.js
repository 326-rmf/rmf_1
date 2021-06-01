(function (window) {
    const PENDING = 'pending'
    const RESOLVED = 'resolved'
    const REJECTED = 'rejected'
    //promise构造函数
    //改成了类的版本来
    class Promise{
        constructor (excutor) {
            //代表Promise的实例对象
            const self = this
            //初始值是pending	未确定的
            self.status = PENDING
            //用来存储结果数据的属性	初始值是undefined
            self.data = undefined
            self.callbacks = []
            //调用excutor来启动异步任务
            //改变promise状态	改为成功	value
            
            function resolve (value) {
                //如果当前不是pending 直接结束
                if (self.status !== PENDING) return
                self.status = RESOLVED
                self.data = value
                //异步调用所有缓存的待执行的成功的回调函数
                if (self.callbacks.length > 0) {
                    //启动一个定时器	执行所有成功的回调
                    setTimeout(() => {
                        self.callbacks.forEach(cbsObj => {
                            cbsObj.onResolved(value)
                        })
                    })
    
                }
            }
            //状态改为失败	reason
            function reject (reason) {
                //如果当前不是pending 直接结束
                if (self.status !== PENDING) return
                self.status = REJECTED
                self.data = reason
                //异步调用所有缓存的待执行的失败的回调函数
                if (self.callbacks.length > 0) {
                    //启动一个定时器	执行所有失败的回调
                    setTimeout(() => {
                        self.callbacks.forEach(cbsObj => {
                            cbsObj.onRejected(reason)
                        })
                    })
    
                }
            }
            try {
                excutor(resolve, reject)
            } catch (error) {
                //执行器执行出错	promise变为失败
                reject(error)
            }
    
    
        }
         
    //指定成功/失败回调函数的方法
    //返回一个新的promise对象
   
        then (onResolved, onRejected) {
            const self = this
            //reason向下传递
            onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
            //value向下传递
            onResolved = typeof onResolved === 'function' ? onResolved :  value => value
            return new Promise((resolve, reject) => {
                function handle(callback) {
                    try {
                        const result = callback(self.data)
                        if (result instanceof Promise) {
                            result.then(
                                value => resolve(value),
                                reason => reject(reason)
                            )//简写result.then(resolve,reject)
                        } else {
                            resolve(result)
                        }
                    }
                    catch (error) {
                        reject(error)
                    }
                }
                if (self.status === RESOLVED) {
                    setTimeout(() => {
                        handle(onResolved)
                    })
    
                } else if (self.status === REJECTED) {
                    setTimeout(() => {
                        handle(onRejected)
                    })
                } else {
                    self.callbacks.push({
                        onResolved(value) {
                            handle(onResolved)
                        },
                        onRejected(reason) {
                            handle(onRejected)
                        }
                    })
                }
            })
    
        }
        //指定失败回调函数的方法
    //catch是then 的语法糖
   catch (onRejected) {
    return this.then(undefined,onRejected)
}
 //用来产生一个指定value的成功的promise
 static resolve = function (value) {
    return new Promise((resolve,reject)=>{
        if(value instanceof Promise){
            //value是一个promise    结果由value决定
            value.then(resolve,reject)
        }else{
            resolve(value)
        }
    })
}
//用来产生一个指定reason的失败的promise
static reject = function (reason) {
    return new Promise((resolve,reject)=>{
        reject(reason)
    })
}
//返回一个promise	只有当数组中的所有promise都成功才成功	否则失败
static all = function (promises) {
    return new Promise((resolve,reject) => {
        //已经成功的数量
        let resolvedCount = 0
        //保存成功promise的value值
        const values = new Array(promises.length)
        promises.forEach((p,index) => {
           p.then(
               value => {
                   resolvedCount++
                   values[index] = value
                   if(resolvedCount===promises.length){
                       resolve(values)
                   }
               },
               reason => reject(reason)
           )
        })
    })
}
//返回一个promise 由第一个完成的promise决定
static race = function (promises) {
    return new Promise((resolve,reject) => {
        //比哪里promise  取得对应的结果
        promises.forEach(p => {
            //返回promise由第一个来决定其结果
           p.then(resolve,reject)
        })
    })
}
//返回一个延迟指定时间才成功的promise
static resolveDelay = function (value,time){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(value instanceof Promise){
                //value是一个promise    结果由value决定
                value.then(resolve,reject)
            }else{
                resolve(value)
            }
        },time)
    })
}
//返回一个延迟指定时间才失败的promise
static rejectDelay = function (reason,time){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(reason)
        },time)
    })
}
    }
    window.Promise = Promise
})(window)
