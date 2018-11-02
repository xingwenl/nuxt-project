import http from '../request/http'

export const state = () => ({
    userinfo: {},
    isLogin: null
})

export const mutations = {
    SET_USER_INFO (state, userinfo) {
        state.userinfo = userinfo
    },
    SET_LOGIN (state, isLogin) {
        state.isLogin = isLogin
    }
}

export const actions = {
    async userinfo ({ commit }, cookies) {
        let res = await http({
            url: '/account/userinfo',
            cookies
        })
        if (res.code === 200) {
            commit('SET_USER_INFO', res.data)
            commit('SET_LOGIN', true)
            return;
        }
        commit('SET_LOGIN', false)
        return res;
    },
    async logout ({ commit }) {
        let res = await http('/account/logout')
        if (res.code === 200) {
            commit('SET_USER_INFO', {})
            commit('SET_LOGIN', null)
        }
        return res
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}