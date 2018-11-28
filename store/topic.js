import http from '../request/http'

export const state = () => ({
    render_content: ''
})

export const mutations = {
    SET_ARTICLE (state, render_content) {
        state.render_content = render_content
    }
}

export const getters = {
    render_content (state) {
        return state.render_content
    }
}

export const actions = {
    async topic ({ commit }, cookies) {
        let res = await http({
            url: '/topic',
            cookies
        })
        return res;
    },

    async uploadTopic ({ commit }, data) {
        let res = await http({
            url: '/topic',
            data,
            method: 'POST'
        })
        return res;
    },

}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}