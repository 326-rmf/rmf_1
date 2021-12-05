const myPromise  = require('./myPromise')
const myPromise2  = require('./myPromise2')
const myPromise3  = require('./myPromise3')
const test = new myPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('myPromise')
    },1000)
})
test.then((res)=>{
    console.log(res)
    return {name:'ok'}
}).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
}
)
// console.log('sync')
const test2 = new myPromise2((resolve,reject)=>{
    setTimeout(()=>resolve('myPromise2'),1000)
})
test2.then((res)=>{
console.log(res)
})
// .then(res=>{
//     console.log(res)
// }).then(res=>{
//     console.log(res)
// })
// test2.then(res=>console.log(res),err=>console.log(err))


const test3 = new myPromise3((resolve,reject)=>{
    setTimeout(()=>resolve('myPromise3'),1000)
    // resolve('promise3')
})
test3.then((res)=>{console.log(res)})


