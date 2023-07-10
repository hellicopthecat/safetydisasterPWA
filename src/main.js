import { createApp } from 'vue'
//vuetify
import 'vuetify/styles'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import App from './App.vue'
import router from './router'
// vue pinia
import pinia from './stores/index'
import { firebaseApp } from './firebase/firebase'

const app = createApp(App)

loadFonts()

app.use(router).use(vuetify).use(pinia).mount('#app')
