import { getUserData } from "@/api/user.js";
import { setItem , getItem } from '@/utils/storag.js'
export default {
    namespaced: true,
    state: {
        userInfo: {},
        siderOped: true,
        currentlan: getItem('LANG') || 'zh'
    },
    mutations: {
        setUserInfo(state, payload) {
            state.userInfo = payload;
        },
        setOpen(state) {
            state.siderOped = !state.siderOped
        },
        setCurrentLan(state, payload) {
            state.currentlan = payload
            setItem('LANG', payload)
        }
    },
    actions: {
        async getUserInfo({ commit }) {
            let res = await getUserData();
            commit("setUserInfo", res);
        },
    },
};