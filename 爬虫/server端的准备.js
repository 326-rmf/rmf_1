const express = require('express');
const app = express();
app.all('/server',(request,response)=>{
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO AJAX　GET1');

});
app.all('/json-server',(request,response)=>{
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    const data = {
        name: 'atguigu'
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
    response.send(JSON.stringify(data));

});
app.all('/axios-server',(request,response)=>{
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.setHeader('Access')
    // response.send('Hello jQuery AJAX');
    const data = {name: '尚硅谷'};
    response.send(JSON.stringify(data));

});
app.all('/fetch-server',(request,response)=>{
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.setHeader('Access')
    // response.send('Hello jQuery AJAX');
    const data = {name: '尚硅谷'};
    response.send(JSON.stringify(data));

});
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中...");
})