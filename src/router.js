import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const loadVue = name => () => import(/* webpackChunkName: "[request]" */ `./views/${name}.vue`)

export const routes = [
  {
    path: '/input',
    component: loadVue('input')
  },
  {
    path: '/arrow',
    component: loadVue('arrow')
  },
  {
    path: '/btn',
    component: loadVue('btn')
  },
  {
    path: '/close',
    component: loadVue('close')
  },
  {
    path: '/container',
    component: loadVue('container')
  },
  {
    path: '/loading',
    component: loadVue('loading')
  },
  {
    path: '/mask',
    component: loadVue('mask')
  },
  {
    path: '/modal',
    component: loadVue('modal')
  },
  {
    path: '/qrcode',
    component: loadVue('qrcode')
  },

  {
    path: '/grid',
    component: loadVue('grid')
  },
  {
    path: '/download-image',
    component: loadVue('download-image')
  },
  {
    path: '/load-data',
    component: loadVue('load-data')
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
