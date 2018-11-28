import Vuex from 'vuex'
import account from './account'
import topic from './topic'
const createStore = () => {
    return new Vuex.Store({
        modules: {
            account,
            topic
        }
    })
}

export default createStore