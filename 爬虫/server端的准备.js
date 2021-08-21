const express = require('express');
const app = express();
// var util = require('util')
// var cookieParser = require('cookie-parser')
// app.use(cookieParser())
app.all('/server',(request,response)=>{
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('server');

});
app.all('/json-server',(request,response)=>{
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    const data = {
        name: 'jsonserver'
    };
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);

});
app.all('/jquery-server',(request,response)=>{
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.send('Hello jQuery AJAX');
    const data = {name: '尚硅谷'};
    response.send(JSON.stringify(data+'jquery'));

});
app.all('/axios-server',(request,response)=>{
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.sendFile(__dirname+'../picture/bootstrap.jpg')
    // response.status(326)
    // response.setHeader('Access')
    // response.send('Hello jQuery AJAX');
    const data = {name: '尚硅谷'};
    // response.send(JSON.stringify(data)+new Date().toLocaleString());
    // response.send(JSON.stringify(data)+JSON.stringify(request.params));
    // console.log('Cookies: '+ util.inspect(req.cookies));
    response.send(JSON.stringify(data)+JSON.stringify(request.params));

});
app.all('/fetch-server',(request,response)=>{
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.setHeader('Access')
    // response.send('Hello jQuery AJAX');
    const data = {name: '尚硅谷'};
    response.send(JSON.stringify(data)+'fetch');

});
var server = app.listen(8000,()=>{

    console.log("服务已经启动，8000端口监听中..");
})