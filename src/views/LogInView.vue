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
    const jAlert = ref(false)
    const errMsg = ref('')
    const loading = ref(false)
    const emailRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

    const id = ref('')
    const idRules = {
      required: (value) => {
        if (!value.includes('@')) {
          return 'Email Full Domain and @ required'
        } else if (!value.match(emailRegExp) || !value.includes('.')) {
          return 'Domain is required'
        }
      }
    }
    const pwRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[!@#$])|(?=.*[A-Z])[\da-z!@#$|A-Z]{6,}$/
    const password = ref('')
    const pwRules = {
      required: (value) => {
        if (!value.match(pwRegExp)) {
          return 'More than 6 Letters and also combinate with number and "!,@,#,$"'
        }
      }
    }

    const fnLogin = async () => {
      if (idRules.required(id.value)) {
        errMsg.value = idRules.required(id.value)
        jAlert.value = true
        return
      }
      if (pwRules.required(password.value)) {
        errMsg.value = pwRules.required(password.value)
        jAlert.value = true
        return
      }

      try {
        await setPersistence(auth, browserSessionPersistence)
        const userLogin = await signInWithEmailAndPassword(auth, id.value, password.value)
        const user = userLogin.user
        userAuth.setUser(user)
        loading.value = true
        router.push('/')
      } catch (error) {
        router.push('/login')
        errMsg.value = '아이디 혹은 비밀번호를 잘못입력하셨거나 계정이 없습니다.'
        jAlert.value = true
      }
    }
    const fnGoogleLogin = async () => {
      try {
        await setPersistence(auth, browserSessionPersistence)
        const provider = new GoogleAuthProvider()
        const userGoogleLogin = await signInWithPopup(auth, provider)
        const user = userGoogleLogin.user
        userAuth.setUser(user)
        router.push('/')
      } catch (error) {
        router.push('/login')
        errMsg.value = '아이디 혹은 비밀번호를 잘못입력하셨거나 계정이 없습니다.'
        jAlert.value = true
      }
    }
    return {
      id,
      password,
      fnLogin,
      fnGoogleLogin,
      loading,
      idRules,
      pwRules,
      jAlert,
      errMsg
    }
  }
}
</script>

<template>
  <v-container>
    <h2>{{ title }}</h2>
    <v-sheet width="700">
      <v-form class="pa-10" @submit.prevent="fnLogin">
        <v-text-field
          v-model="id"
          label="ID"
          type="email"
          :rules="[idRules.required]"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="PASSWORD"
          type="password"
          :rules="[pwRules.required]"
          clearable
        ></v-text-field>
        <v-btn color="primary" type="submit">LOG IN</v-btn>
        <v-btn :loading="loading" router to="/">CANCEL</v-btn>
      </v-form>
      <v-spacer></v-spacer>
      <v-alert type="error" dismissible v-model="jAlert"> {{ errMsg }}</v-alert>
      <v-spacer></v-spacer>
      <v-btn @click="fnGoogleLogin">
        <v-icon icon="mdi:mdi-google"></v-icon>
      </v-btn>
      <v-btn router to="/join">Create Account</v-btn>
    </v-sheet>
  </v-container>
</template>
