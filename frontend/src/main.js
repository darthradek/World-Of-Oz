import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.config.productionTip = false
Vue.use(vueSmoothScroll)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
