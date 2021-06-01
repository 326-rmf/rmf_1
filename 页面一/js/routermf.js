let express = require('express')
let app = express()
//跟路由
app.get('/',function(request,response){
    response.send('ok')
})

app.listen(3000,function(err){
    if(!err)console.log('ok')
    else console.log(err)
})