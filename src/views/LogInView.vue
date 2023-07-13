<script>
import { ref } from 'vue'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence
} from 'firebase/auth'
import { useAuthStore } from '../stores/userAuth'
import router from '@/router'
export default {
  data() {
    return {
      title: 'Log In'
    }
  },
  setup() {
    const auth = getAuth()
    const userAuth = useAuthStore()
    const id = ref('')
    const password = ref('')

    const fnLogin = async () => {
      try {
        await setPersistence(auth, browserSessionPersistence).then(() => {
          const userLogin = signInWithEmailAndPassword(auth, id.value, password.value)
          const user = userLogin.user
          userAuth.setUser(user)
          router.push('/')
        })
      } catch (err) {
        alert('로그인 실패')
        console.log(err)
      }
    }
    const fnGoogleLogin = async () => {
      try {
        await setPersistence(auth, browserSessionPersistence).then(() => {
          const provider = new GoogleAuthProvider()
          const userGoogleLogin = signInWithPopup(auth, provider)
          const user = userGoogleLogin.user
          userAuth.setUser(user)
          router.push('/')
        })
      } catch (err) {
        alert('로그인 실패')
        console.log(err)
      }
    }
    return {
      id,
      password,
      fnLogin,
      fnGoogleLogin
    }
  }
}
</script>

<template>
  <v-container>
    <h2>{{ title }}</h2>
    <v-sheet width="700">
      <v-form class="pa-10" @submit.prevent="fnLogin">
        <v-text-field v-model="id" label="ID" type="email" clearable></v-text-field>
        <v-text-field v-model="password" label="PASSWORD" type="password" clearable></v-text-field>
        <v-btn color="primary" type="submit">LOG IN</v-btn>
        <v-btn router to="/">CANCEL</v-btn>
      </v-form>
      <v-spacer></v-spacer>
      <v-btn @click="fnGoogleLogin">
        <v-icon icon="mdi:mdi-google"></v-icon>
      </v-btn>
      <v-btn router to="/join">Create Account</v-btn>
    </v-sheet>
  </v-container>
</template>
