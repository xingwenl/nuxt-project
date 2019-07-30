import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _07faebec = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _7ea18a6e = () => import('../pages/Home.vue' /* webpackChunkName: "pages/Home" */).then(m => m.default || m)
const _1181dc0e = () => import('../pages/edit.vue' /* webpackChunkName: "pages/edit" */).then(m => m.default || m)
const _69ceda92 = () => import('../pages/register.vue' /* webpackChunkName: "pages/register" */).then(m => m.default || m)
const _afa70b0a = () => import('../pages/topic/_id.vue' /* webpackChunkName: "pages/topic/_id" */).then(m => m.default || m)
const _325ae6f3 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/login",
			component: _07faebec,
			name: "login"
		},
		{
			path: "/Home",
			component: _7ea18a6e,
			name: "Home"
		},
		{
			path: "/edit",
			component: _1181dc0e,
			name: "edit"
		},
		{
			path: "/register",
			component: _69ceda92,
			name: "register"
		},
		{
			path: "/topic/:id?",
			component: _afa70b0a,
			name: "topic-id"
		},
		{
			path: "/",
			component: _325ae6f3,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
