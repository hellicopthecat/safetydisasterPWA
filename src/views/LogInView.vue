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
          return '이메일 형식의 아이디를 입력하세요'
        } else if (!value.match(emailRegExp) || !value.includes('.')) {
          return '.과 도메인주소를 입력하세요'
        }
      }
    }
    const pwRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[!@#$])|(?=.*[A-Z])[\da-z!@#$|A-Z]{6,}$/
    const password = ref('')
    const pwRules = {
      required: (value) => {
        if (!value.match(pwRegExp)) {
          return '숫자와 영어 특수문자 "!,@,#,$"를 이용해 6자리 이상 문자를 조합해서 작성하세요'
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
  <v-container class="mt-10">
    <h2>로 그 인</h2>
    <v-sheet width="600" rounded elevation="10">
      <v-form class="pa-10 mt-5" @submit.prevent="fnLogin">
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
        <v-container class="d-flex justify-end align-center pb-0">
          <v-btn :loading="loading" color="#393a40" class="text-white mr-1" type="submit">
            LOG IN
          </v-btn>
          <v-btn router to="/">CANCEL</v-btn>
        </v-container>

        <v-container class="d-flex justify-end align-center pt-0 mt-0">
          <v-btn :loading="loading" @click="fnGoogleLogin" color="#393a40">
            <v-icon color="#ffdc17" icon="mdi:mdi-google"></v-icon>
          </v-btn>
          <v-btn color="#2d539a" class="ml-1 text-white" router to="/join">Create Account</v-btn>
        </v-container>
      </v-form>
      <v-spacer></v-spacer>
      <v-alert type="error" dismissible v-model="jAlert"> {{ errMsg }}</v-alert>
    </v-sheet>
  </v-container>
</template>
<style lang="scss" scoped>
.v-btn {
  text-decoration: none;
}
</style>
