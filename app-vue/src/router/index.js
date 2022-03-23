// cli4之后，不能全部引入，否则报错：Uncaught TypeError: application '@app/vue' died in status LOADING_SOURCE_CODE: vue_router__WEBPACK_IMPORTED_MODULE_1__.default is not a constructor
// import VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

// const router = new VueRouter({
// cli4引入方式
const router = createRouter({
  // vil4设置history模式
  history: createWebHistory(),
  routes,
});

export default router;
