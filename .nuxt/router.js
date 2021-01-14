import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b1d13e2 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _4211db97 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _0061dfb1 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _488f87f1 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _5aa186db = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _01638bb6 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _2f59cb3e = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
    component: _0b1d13e2,
    children: [{
      path: "",
      component: _4211db97,
      name: "home"
    }, {
      path: "/login",
      component: _0061dfb1,
      name: "login"
    }, {
      path: "/register",
      component: _0061dfb1,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _488f87f1,
      name: "profile"
    }, {
      path: "/settings",
      component: _5aa186db,
      name: "settings"
    }, {
      path: "/editor",
      component: _01638bb6,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _2f59cb3e,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
