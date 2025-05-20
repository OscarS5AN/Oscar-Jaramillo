import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// Configuración actualizada de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faTrash, faPlus, faBank } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faTrash, faPlus, faBank)

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
