import Vue from 'vue'
import App from './App.vue'
import VCharts from 'v-charts'
import VeLine from 'v-charts/lib/line.common'
Vue.component(VeLine.name, VeLine)
Vue.config.productionTip = false
Vue.use(VCharts)
new Vue({
  el: "#app",
  render: h => h(App),
}).$mount('#app')
