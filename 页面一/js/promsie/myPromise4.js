const PENDING = 'pending'
const RESOLVE = 'resolve'
const REJECT = 'reject'
const handlePromise = (result, newPromise, resolve, reject) => {
    if (result === newPromise) {
        throw new Error('can not return onsself')
    }
    if ((typeof result === 'object' && result !== null) || typeof result === 'function') {
        let lock = false
        try {
            const then = result.then
            if (typeof then === 'function') {
                then.call(result,
                    res => {
                        if (lock) return

                        handlePromise(res, newPromise, resolve, reject)
                        lock = true
                    },
                    err => {
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
class myPromise4 {
    status = PENDING
    result = undefined
    reason = undefined
    onRejectedArr = []
    onResolvedArr = []
    constructor(excution) {
        const resolve = (result) => {
            if (this.status === PENDING) {
                this.status = RESOLVE
                this.result = result
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
        try {
            excution(resolve, reject)

        } catch (error) {
            reject(error)
        }

    }
    then(onResolved, onRejected) {
        onResolved = typeof onResolved === 'function' ? onResolved : data => data
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw new Error(err)
        }
        const newPromise = new myPromise4((resolve, reject) => {
            if (this.status === RESOLVE) {
                setTimeout(() => {
                    try {
                        const result = onResolved(this.result)
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

                }, 0)

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


module.exports = myPromise4