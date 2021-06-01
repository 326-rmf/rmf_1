//引入express
const express = require('express')
//创建app服务对象
const app = express()
//配置路由  对请求的url分类
//在node.js课程里   路由默认都是后端路由
//  / 和  /rmf  是uri路径
//  相同的路由先写先用      后写的一样的路由会被忽略
//禁止服务器返回X-Powered-By
app.disable('x-powered-by')
app.use(express.static(__dirname))
console.log(__dirname)
app.get('/ajaxGet',function(request,response){
    //  /是什么意思  
    console.log(request.query)//拿到内容uri
    console.log(request.url)
    response.send('home net')
})//home路由    根路由
app.get('/rmf',function(request,response){
    //  /rmf是什么意思  
    response.send('is rmf net')
})//rmf路由         一级路由
app.get('/rmf/c17',function(request,response){
    //  /rmf是什么意思  
    response.send('is c17 net')
})//rmf路由         二级路由
//事件监听  指定端口号
app.listen(3000,function(err){
    if(!err)console.log('ok')
    else console.log(err)
})