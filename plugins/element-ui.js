import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Pagination, Loading } from "element-ui";
// Vue.use(Button)
Vue.component(Button.name, Button);
Vue.use(Pagination)
Vue.use(Loading)