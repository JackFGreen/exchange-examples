import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ExchangeUi from 'exchange-ui'
import * as directives from 'exchange-lib/tools/directives'
import VConsole from 'vconsole'
import headMixin from 'exchange-lib/vue/head-mixin'

Vue.mixin(headMixin)

Vue.use(ExchangeUi)

Object.keys(directives).forEach(el => {
  Vue.directive(el, directives[el])
})

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new VConsole()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
