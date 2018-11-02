import Vue from 'vue'
import api from "../request/api";

const plugin = {
    install (vm) {
        vm.mixin({
            created () {
                this.$api = api
            }
        })
        vm.prototype.$api = api
    }
}
Vue.use(plugin)