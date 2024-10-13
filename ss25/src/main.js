


import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'

// Import the FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faArrowsRotate, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowsRotate, faXmark)
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon) // Register the component globally
  .mount('#app')
