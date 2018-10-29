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
```