import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
	router
}).$mount('#app')
