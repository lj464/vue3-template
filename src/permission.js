import router from "./router/index";
import store from "./store/index";
// store.dispatch('user/getUserInfo')
const whiteList = ['/login']
router.beforeEach(async(to, from, next) => {
    if (store.getters.token) {
        // 有
        if (!store.getters.hasUserInfo) {
            // 没有用户数据获取
            await store.dispatch("user/getUserInfo");
        }
        if (to.path === "/login") {
            next("/");
        } else {
            next();
        }
        // next()
    } else {
        if (whiteList.indexOf(to.path) > -1) {
            next();
        } else {
            next("/login");
        }
    }
});