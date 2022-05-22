import { getUserData } from "@/api/user.js";
export default {
    namespaced: true,
    state: {
        userInfo: {},
    },
    mutations: {
        setUserInfo(state, payload) {
            state.userInfo = payload;
        },
    },
    actions: {
        async getUserInfo({ commit }) {
            let res = await getUserData();
            commit("setUserInfo", res);
        },
    },
};