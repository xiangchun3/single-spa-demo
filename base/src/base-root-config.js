import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  //actionWhen是函数时可以通过location.pathname来⾃定义访问规则
  //默认使⽤"/"代表“/**”规则全部符合
  activeWhen: ["/"],
});

/**
 * registerApplication 中的 activeWhen 属性除了可以设置为数组外，还可以使⽤函数的形式进⾏配置。
 * 数组设置的⽅式可以⽀持同⼀个⼦应⽤匹配N个路由，该属性在使⽤时是模糊匹配的，若activeWhen:['/app']，
 * 则路由符合/app/**的情况时，应⽤都会被加载到视图中。函数要求返回⼀个boolean类型的数据，当数据为true的时候路由才能正确加载。
 * 函数的参数是location对象，可以通过pathname来识别url路径是否匹配，详细内容可以参考官⽅⽂档。
 */

// 注册子应用
registerApplication({
  //配置应⽤名称
  name: "@app/vue",
  //远程导⼊应⽤
  app: () => System.import("@app/vue"),
  //当访问/app/**时激活⼦应⽤
  activeWhen: ["/app"],
  //传⼊⾃定义属性
  customProps: {
    token: 'abcdefg'
  }
});

// 注册子应用2
registerApplication({
  //配置应⽤名称
  name: "@sub/app2",
  //远程导⼊应⽤
  app: () => System.import("@sub/app2"),
  //当访问/app/**时激活⼦应⽤
  activeWhen: ["/app2"],
  //传⼊⾃定义属性
  customProps:{
    token:'abcdefg'
  }
 });

// registerApplication({
//   name: "@base/navbar",
//   app: () => System.import("@base/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
