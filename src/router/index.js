import Vue from "vue";
import Router from "vue-router";
import store from "@/store/index";
import routes from "./routes";
Vue.use(Router);

const router = new Router({
  routes,
  linkActiveClass: "active-link",
  scrollBehavior(to, from, savedPosition) {
    // 页面滚动的时候会记录savedPosition，返回的时候如果存在就默认滚动到上一页
    console.log("scrollBehavior", to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  // base:'/base/'
});

router.beforeEach((to, from, next) => {
  if (store.state.isLogin === false && to.path !== "/login") {
    next({ path: "/login" });
  } else {
    next();
  }
});

router.beforeResolve((to, from, next) => {
  console.log("beforeResolve");
  next();
});

export default router;
