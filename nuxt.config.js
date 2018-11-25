module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    baseUrl: 'http://localhost:3000'
  },
  dev: (process.env.NODE_ENV !== 'production'),
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
      '@nuxtjs/axios',
      '@nuxtjs/proxy'
  ],
  proxy: [
      // [
      //   '/api', 
      //   { 
      //     target: 'https://cnodejs.org/api/v1', // api主机
      //     pathRewrite: { '^/api' : '/' }
      //   }
      // ]
  ],
  css: [
    {src: './assets/css/index.less', lang: 'less'},
    {
      src: "mavon-editor/dist/css/index.css"
    }
  ],
  plugins: [
    {
      src: '~/plugins/element-ui.js'
    },
    {
      src: '~/plugins/http.js'
    },
    {
      src: '~/plugins/vue-markdown.js',
      ssr: false
    }
  ],
  router: {
      middleware: 'auth'
  }
}
