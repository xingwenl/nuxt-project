import Vue from 'vue'
import http from "../request/http";

const plugin = {
    install (vm) {
        vm.mixin({
            created () {
                this.$http = http
            }
        })
        vm.prototype.$http = http
    }
}
Vue.use(plugin)