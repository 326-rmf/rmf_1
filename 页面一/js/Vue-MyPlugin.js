(function (window){

    // 定义插件对象
    const MyPlugin = {}


    //vue所有的插件对象都必须有一个install方法
    MyPlugin.install = function (Vue, options) {
        console.log('MyPlugin.install()')



        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
          // 逻辑...
          console.log('Vue.myGlobalMethod')
        }
      



        // 2. 添加全局资源
        Vue.directive('my-directive', {
          bind (el, binding, vnode, oldVnode) {
            // 逻辑...
            el.innerText = binding.value + '------'
          }
          
        })
      




        // 3. 注入组件选项
        Vue.mixin({
          created: function () {
            // 逻辑...
          }
          
        })
      




        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
          // 逻辑...
          console.log('vm $myMethod()')
        }
      }




    //暴露插件对象
    window.MyPlugin = MyPlugin
})(window)