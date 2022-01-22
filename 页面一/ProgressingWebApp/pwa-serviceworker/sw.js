self.addEventListener('install',event=>{
    console.log('install',event)
    //等待skipwaiting结束   才会进入到activate状态
    event.waitUntil(self.skipWaiting())

})
self.addEventListener('activate',event=>{
    console.log('activate',event)
    //表示service worker激活之后    会立即获取控制权
    event.waitUntil(self.clients.claim())

})
//fetch事件会在请求发送的时候触发
self.addEventListener('fetch',event=>{
    console.log('fetch',event)

})