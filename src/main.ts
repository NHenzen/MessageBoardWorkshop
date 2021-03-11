import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './quasar'

Vue.config.productionTip = false

new Vue({
  router,
  // @ts-ignore
  store,
  render: h => h(App)
}).$mount('#app')
