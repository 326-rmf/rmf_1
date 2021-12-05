//主要是缓存内容
const CACHE_NAME = 'cache_v2'
self.addEventListener('install',async function(event){
//开启一个cache
 const cache = await caches.open(CACHE_NAME)
 //cache对象可以存储资源
 await cache.addAll([
     //将来离线的情况下还是可以访问index.html文件的
     '/',
     '/images/milogo.jpg',
     '/manifest.json'

 ])
// event.waitUntil(self.skipWaiting())
await self.skipWaiting()

})
self.addEventListener('activate', async function(event){
//会清除旧的资源
 const keys = await caches.keys()   
 keys.forEach(key=>{
     if(key !== CACHE_NAME){
         
         caches.delete(key)
     }
 })
// event.waitUntil(self.clients.claim())
//因为有了async 可以不需要使用event.Until       await更加简洁
await self.clients.claim()

})


//fetch事件会在请求发送的时候触发
//资源请求成功      响应成功的结果      请求成功就会响应成功的结果
//断网的情况        读取cache缓存
self.addEventListener('fetch',function(event){
//
// console.log(event.request.url)
//请求对象
const req = event.request
//给浏览器响应          event.respondWith()     
event.respondWith(networkFirst(req))
// event.respondWith(cacheFirst(req))





//资源的判定    静态资源和网络资源的区别是url中的包含的字符串的 区别
// if(req.url.includes('/api')){
//     event.respondWith(networkFirst(req))
// }else{
//     event.respondWith(cacheFirst(req))
// }




//只缓存同源的内容
// const req = e.request
//http://localhost
const url = new URL(req.url)
// if(url.origin === location.origin){
    //请求的url的源         和      当前页面是同源的 
if(url.origin !== self.origin){
    //不同源的 内容直接返回 不做缓存
    return 
}


})



//网络优先的数据        我们获取了应该向缓存里面去存一份数据
   async   function networkFirst(req){
       //获取缓存
       const cache = await caches.open(CACHE_NAME)
       try{
           //从网络中读取最新的资源
             const fresh =  await fetch(req)
             //把响应的备份存储到缓存中         clone()api来克隆请求到的数据
             //cache.put(key,value)     api来将请求和请求对应的响应的内容来装进缓存当中去
             //key是唯一的      相同的请求会引发缓存的更新
                cache.put(req,fresh.clone())
        return fresh
       }catch(err){
        //没有网络才会出错
        //从缓存中读取      返回缓存资源
        // const cache = await caches.open(CACHE_NAME)
        const cached =await cache.match(req)
        return cached
       }

}

//缓存优先      适用于静态资源
async function cacheFirst(req){
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match(req)
    //如果从缓存中得到了cached      就返回匹配的缓存内容
    if(cached){
        return cached
    }else{
        //匹配不到缓存的内容        那么就去服务器请求内容返回
        const fresh = await fetch(req)
        return fresh
    }

}


