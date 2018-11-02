import Vuex from 'vuex'
import account from './account'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            account
        }
    })
}

export default createStore