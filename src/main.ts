import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faCircleExclamation, faLocationDot, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
library.add(faUser,faCircleExclamation,faLocationDot,faMagnifyingGlass)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
