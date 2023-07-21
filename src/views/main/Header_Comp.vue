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
  <v-app-bar color="#393A40" class="pa-0 d-flex align-center" :elevation="5">
    <v-app-bar-nav-icon
      color="#ffdc17"
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-app-bar-title class="text-left">
      <Router-link style="color: #ffdc17; text-decoration: none" to="/">
        <h3>Escape from Danger</h3>
      </Router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="!loggedIn" color="white" class="mr-5" router to="/login">
      <v-icon color="#ffdc17">mdi-login</v-icon>
      로그인
    </v-btn>
    <v-btn v-if="!loggedIn" color="white" class="mr-5" router to="/join">
      <v-icon color="#ffdc17">mdi-account</v-icon>
      회원가입
    </v-btn>
    <v-btn @click.prevent="fnLogOut" v-if="loggedIn" color="white" class="mr-5">
      <v-icon color="#ffdc17">mdi-logout</v-icon>
      로그아웃
    </v-btn>
  </v-app-bar>
  <v-card flat>
    <v-navigation-drawer
      v-model="drawer"
      style="background-color: #393a40"
      location="left"
      permanent
    >
      <MainNav />
    </v-navigation-drawer>
  </v-card>
</template>

<style lang="scss" scoped>
.v-icon {
  border: none;
  padding: 0;
}
.v-btn {
  text-decoration: none;
}
</style>
