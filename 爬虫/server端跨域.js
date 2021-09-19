const express =require('express');
const app = express();
app.get('/home',(request,response)=>{
response.sendFile(__dirname + '/index跨域.html');
});
app.get('/data',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader("Access-Control-Allow-Headers", 'Authorization');
    var obj = {
        token:'tokenluanxuxianshi1232443',
        content:'rmf && data',
        guanzhu:'678',
        fensi:'234',
        huozan:'633',
        server:'rmf',
        tracecode:'rmf detail construction about much',
        wrongStatus:'401'
    }
    // console.log(request.headers)
    if(request.headers.authorization === 'server request content tokenluanxuxianshi1232443')
    response.send(obj)
    else{
        response.send(obj.wrongStatus)
    }

    
});
app.get('/data/login/getsetToken',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    // response.setHeader("Access-Control-Allow-Headers", 'Authorization');
    var obj2 = {
        token:'tokenluanxuxianshi1232443',
    }
    response.send(obj2)
});
// app.get('/error',(request,response)=>{
//     response.setHeader('Access-Control-Allow-Origin','*')
//     // response.setHeader("Access-Control-Allow-Headers", 'Authorization');
//     var obj = {
//         msg:'请先登录',
//     }
//     response.send(obj)
// });
app.listen(9000,()=>{
    console.log("服务已经启动...");
});