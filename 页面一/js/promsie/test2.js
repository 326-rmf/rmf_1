const myPromise3  = require('./myPromise4')
// const myPromise2  = require('./myPromise2')

const test3 = new myPromise3((resolve,reject)=>{
    setTimeout(()=>resolve('myPromise3'),1000)
    // resolve('promise3')
})
test3.then((res)=>{console.log(res)})


