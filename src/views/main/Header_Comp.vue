<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { useAuthStore } from '../../stores/userAuth'
import router from '@/router'
import MainNav from '../main/Main_Nav.vue'
export default {
  components: {
    RouterLink,
    MainNav
  },
  setup() {
    const drawer = ref(false)
    const userAuth = useAuthStore()
    const loggedIn = ref(false)
    const auth = getAuth()

    onAuthStateChanged(auth, (user) => {
      if (user) {
        loggedIn.value = true
      } else {
        loggedIn.value = false
      }
    })

    const fnLogOut = async () => {
      try {
        await signOut(auth)
        userAuth.clearUser()
        router.push('/')
      } catch (err) {
        console.log(err)
      }
    }

    return {
      drawer,
      loggedIn,
      fnLogOut
    }
  }
}
</script>

<template>
  <v-app-bar class="pa-0 d-flex align-center" :elevation="5">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title class="text-left">
      <Router-link to="/"> Escape from Dangerous </Router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="!loggedIn" class="mr-15" icon router to="/login">
      <v-icon>mdi-login</v-icon>
      LOG IN
    </v-btn>
    <v-btn v-if="!loggedIn" class="mr-15" icon router to="/join">
      <v-icon>mdi-account</v-icon>
      JOIN
    </v-btn>
    <v-btn @click.prevent="fnLogOut" v-if="loggedIn" color="blue" class="mr-15" icon>
      <v-icon>mdi-logout</v-icon>
      LOG OUT
    </v-btn>
  </v-app-bar>
  <v-card flat>
    <v-navigation-drawer v-model="drawer" location="left" permanent>
      <MainNav />
    </v-navigation-drawer>
  </v-card>
</template>

<style lang="scss" scoped>
.v-icon {
  border: none;
  padding: 0;
}
</style>
