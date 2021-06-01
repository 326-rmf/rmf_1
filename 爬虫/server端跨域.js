const express =require('express');
const app = express();
app.get('/home',(request,response)=>{
response.sendFile(__dirname + '/index跨域.html');
});
app.get('/data',(requset,response)=>{
    response.send('用户数据')
});
app.listen(9000,()=>{
    console.log("服务已经启动...");
});