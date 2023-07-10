import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { vueFire, vueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase/firebase'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(vueFire, { firebaseApp, modules: [vueFireAuth()] })
  .mount('#app')
