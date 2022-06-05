import { getItem, setItem } from '@/utils/storag.js'
import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import variables from '@/assets/style/variables.scss'
export default {
    namespaced: true,
    state: () => ({
        mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
        variables
    }),
    mutations: {
        /**
         * 设置主题色
         */
        setMainColor(state, newColor) {
            state.mainColor = newColor
            state.variables.menuBg = newColor
            setItem(MAIN_COLOR, newColor)
        }
    }
}