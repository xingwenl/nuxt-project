import Vue from 'vue'
import { formatDate, DATE_NORMAL } from "../assets/utils/date";

const plugin = {
    install (vm) {
        vm.mixin({
            filters: {
                formatDate (time) {
                    if (!time) {
                        return time
                    }
                    return formatDate(time, DATE_NORMAL)
                }
            }
        })
    }
}
Vue.use(plugin)