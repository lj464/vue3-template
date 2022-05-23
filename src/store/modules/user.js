import { getUserData } from "@/api/user.js";
export default {
    namespaced: true,
    state: {
        userInfo: {},
        siderOped:true
    },
    mutations: {
        setUserInfo(state, payload) {
            state.userInfo = payload;
        },
        setOpen(state){
            state.siderOped = !state.siderOped
        }
    },
    actions: {
        async getUserInfo({ commit }) {
            let res = await getUserData();
            commit("setUserInfo", res);
        },
    },
};