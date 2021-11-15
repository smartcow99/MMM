import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faSearch,faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)
library.add(faSearch)
library.add(faTimes)

const app = createApp(App);
app.component('font-awesome-icon',FontAwesomeIcon);
app.use(store).use(router).mount('#app')