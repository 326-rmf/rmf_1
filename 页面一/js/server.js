//引入node内置的http模块
let http = require('http')
//引入一个内置模块  用于解析key=value&...这种形式的字符串为js中的对象
//key=value&key=...这种形式是查询字符串参数     编码形式是urlencoded编码形式
//请求地址里携带urlencoded编码形式的参数
//引入qs是一个对象  身上有很多方法  例如parse()
let qs = require('querystring')
//创造一个服务员
let server = http.createServer(function(request,response){
	//request是客户给服务器的东西		response是服务器返回给客户端的东西
	//一次请求	一次响应
    //获取客户端携带过来的urlencoded形式的参数
    let params = request.url.split('?')[1]
    let objParams = qs.parse(params)
    console.log(objParams)
    let {name,age} = objParams;
    // console.log(request.url.split('?')[1])
    response.setHeader('content-type','text/html;charset=utf-8')//设置响应头
	response.end(`<h1>你好${name},你的年龄是${age}</h1>`)
})
//指定服务器运行的端口号(绑定端口监听)
server.listen(3000,function(err){
	if(!err){console.log('ok')}
	else{console.log('no')}
	
})//3000~8000




