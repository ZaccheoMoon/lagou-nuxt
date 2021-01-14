import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5c2d7d12 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _e4ea5e72 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _24079081 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _198c44c1 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _ad8737ea = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _505ea355 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _0056880e = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5c2d7d12,
    children: [{
      path: "",
      component: _e4ea5e72,
      name: "home"
    }, {
      path: "/login",
      component: _24079081,
      name: "login"
    }, {
      path: "/register",
      component: _24079081,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _198c44c1,
      name: "profile"
    }, {
      path: "/settings",
      component: _ad8737ea,
      name: "settings"
    }, {
      path: "/editor",
      component: _505ea355,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _0056880e,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
