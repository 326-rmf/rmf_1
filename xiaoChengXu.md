##	小程序
-   文件
    - wxml
    - wxss
-	css计量单位rpx
-   wx:for="{{cateArr}}"
    -   data-index="{{index}}"
-   函数形式
    -    setColor:function(e){
    console.log(e)
    this.setData({
      cateActive:e.currentTarget.dataset.index
    })
  } 
-   单位的换算
-   style="height:{{clockHeight}}rpx"
-   flex-wrap层叠样式表
-   让弹性盒元素在必要的时候拆行：
display:flex;
flex-wrap: wrap;
-   undefined就是说明可能为空的数据不存在的情况
-    if(logs[i].date){
        if(logs[i].date.substr(0,10) == util.formatTime(new Date).substr(0,10)){
          day = day + 1
          dayTime = dayTime + parseInt(logs[i].time)
        }
        totalTime = totalTime + parseInt(logs[i].time)
      
      }
##  遇到 速度匹配问题