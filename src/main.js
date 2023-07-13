import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//vuetify
import 'vuetify/styles'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// vue pinia
import pinia from './stores/index'
//firebase
import { firebaseApp } from './firebase/firebase'

const app = createApp(App)

loadFonts()

app.use(router).use(vuetify).use(pinia).mount('#app')
