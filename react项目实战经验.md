##  react项目的index.html里面的root根标签
-   设置样式的时候注意
-   根标签下面隐藏了App.js里面的渲染模板
    -   给它的模板添加className="app"       给app也要设置样式
##  react引入antd的方式
-   import .. from ''
-   const xxx = ()=>{}
-   使用<xxx />
##  登录界面
-   声明式验证
    -   用别人写好的    直接声明调用
-   自定义验证
    -   自己写的        调用自己的
##  高阶函数
-   一个函数接收一个函数作为参数    
    -   或者函数调用的返回值是一个函数
    -   setTimeout
    -   Form.create()
    -   new Promise(()=>{})
##  高阶组件
-   组件的本质
    -   函数
-   一个组件接收一个组件    加工生成一个新组件  那么这样的组件就是高阶组件
-   高阶组件是一个特殊的高阶函数
##  Icon' is not exported from 'antd'.
-   这是antd v3到v4升级导致的
    官方：
    从 4.0 开始，antd 不再内置 Icon 组件，请使用独立的包 @ant-design/icons。
##      reducer里面不可修改传递过来的参数
    
