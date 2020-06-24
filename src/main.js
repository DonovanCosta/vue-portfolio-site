import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
// user-secret icon - following guide on github
import { faUserSecret , faSpinner, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome,faGithub, faLinkedin)

library.add(faUserSecret, faSpinner, faGlobe)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
