import router from "@/router";
import store from "@/store";
// 白名单
const whiteList = ["/login"];
router.beforeEnter((to, from, next) => {
    if (store.getters.token) {
        // 登录过
        if (to.path === "/login") {
            next("/");
        } else {
            next();
        }
    } else {
        // 没登录
        // 没有token的情况下，可以进入白名单
        if (whiteList.indexOf(to.path) > -1) {
            next();
        } else {
            next("/login");
        }
    }
});