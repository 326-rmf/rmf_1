<script src="https://unpkg.com/axios/dist/axios.min.js"></script>   //引入axios
1.
1-json-server   创建这个文件夹
去里面git   执行命令:npm intall -g json-serve
2.
创建db.json 文件来
{
	"posts": [{
		"id": 1,
		"title": "json-server",
		"author": "typicode"
	}],
	"comments": [{
		"id": 1,
		"body": "some comment",
		"postId": 1
	}],
	"profile": {
		"name": "typicode"
	}
}
//这是文件里面的内容
3.
命令行里面执行命令:  json-server --watch db.json
 http://localhost:3000/posts
  http://localhost:3000/comments
  http://localhost:3000/profile
这三个url可以访问数据来查看数据
json格式文件里面不可以有注释
还有一些操作例如:
axios的使用://分为三部分   method方法部分     url链接部分    data 请求体数据部分
axios({
method:'',//这是说明请求方法    例如get获取数据 put更新数据 delete删除数据
//post  发送请求
url:'';//这是请求的地址   例如http://localhost:3000/posts
data:{
}.then(function(res){
console.log(res);})
axios.default.method = 'GET';//设置axios的默认方法
axios.default.baseURL = 'http://localhost:3000';
axios.default.params = {id:100}; //
axios.default.timeout = 3000;
btns[0].onclick = function(){
axios({
url:'/posts'}).then(function(res){
concole.log(res);
})}
})
btns[0].onclick = function(){
axios({
method:"GET",
url:"http://localhost:3000/posts",}).then(function(res){
console.log(res);})}
axios让AJAX请求变得更加优雅
axios 是AJAX的请求的封装扩展
axios是基于promise的
axios 拦截器
