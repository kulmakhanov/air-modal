import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import rules from "@/filters/rules"
import VueMask, { VueMaskFilter } from "v-mask"

Vue.config.productionTip = false

Vue.prototype.$rules = rules
Vue.use(VueMask)
Vue.filter('VMask', VueMaskFilter)


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
