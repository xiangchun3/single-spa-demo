import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';
//初始化publicPath
import './set-public-path'
import App from './App.vue';
import router from "./router";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
  //实例化成功后触发的函数
  handleInstance(app) {
    app.use(router);
  },
});

// export const bootstrap = vueLifecycles.bootstrap;
// export const mount = vueLifecycles.mount;
// export const unmount = vueLifecycles.unmount;


// single-spa加载⼦应⽤的过程为：
// 1. 下载⼦应⽤
// 2. 执⾏⼦应⽤的bootstrap并传⼊应⽤信息
// 3. 执⾏⼦应⽤的mount并传⼊应⽤信息


console.log('加载⼦应⽤：1、下载vue应⽤')
export const bootstrap = function(props){
 console.log('通过props对象获取主应⽤传⼊的⾃定义属性 =>', props)
 console.log('2、vue应⽤执⾏bootstrap')
 return vueLifecycles.bootstrap(props);
}
export const mount = function(props){
 console.log('3、vue应⽤执⾏mount')
 return vueLifecycles.mount(props);
}
export const unmount = function(){
 console.log('4、vue应⽤执⾏unmount')
 return vueLifecycles.unmount()
}


// document的body指向的是基座应⽤的body对象，这就意味着single-spa的⼦应⽤并不是完全沙箱模式。
console.log("读取基座应用中的全局变量：", window.message, document.body)
