# nuxt-test

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

### 添加插件

``` bash
# 根目录创建plugins 
# 创建插件js ：element-ui.js
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import { Loading } from "element-ui";
Vue.use(Loading)
# nuxt.config.js 
#...
plugins: [
    {
      src: '~/plugins/element-ui.js'
    },
]
#...
```
### 解决跨域

``` bash
# 例如 /api/topic -> https://cnodejs.org/api/v1/topic
# 把前缀带/api的接口替换 
proxy: [
    [
        '/api',
        { 
            target: 'https://cnodejs.org/api/v1', # api
            pathRewrite: { '^/api' : '/' } #/api 替换成 /
        }
    ]
],
```

### nuxt api

``` bash 
# asyncData
# 界面初始化时 服务端渲染 只在/pages界面组件里执行 
# 界面之间跳转是 客户端执行
#...
data () {
    return {
        topicData: [],
    }
},
async asyncData ({isDev, isServer}) {
    let res = await api.topics({
        page: 1,
    })
    return {
        topicData: res.data
    }
}
#...

# 路由
# pages创建界面，自动生成路由
# /pages
#   index.vue
#   /topic
#       _id.vue
{
    path: "/topic/:id?",
    component: Topic,
    name: "topic-id"
},
{
    path: "/",
    component: Index,
    name: "index"
}

# head title 做SEO
head () {
    return {
        title: 'nihao',
        meta: [
            { hid: 'test', name: 'home', content: 'My custom home' }
        ]
    }
}
```