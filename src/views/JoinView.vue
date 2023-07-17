<script>
import { ref } from 'vue'
// import { useVuelidate } from '@vuelidate/core'
// import { email, password, required } from '@vuelidate/validators'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useAuthStore } from '../stores/userAuth'
import router from '@/router'
export default {
  setup() {
    const jAlert = ref(false)
    const errMsg = ref('')
    const useAuth = useAuthStore()
    const title = ref('회원가입')

    const emailRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    const id = ref('')
    const idRules = {
      required: (value) => {
        if (!value.includes('@')) {
          return '@가 빠졌습니다. 이메일 형식으로 작성하세요.'
        } else if (!value.match(emailRegExp) || !value.includes('.')) {
          return '도메인 주소가 필요합니다. '
        }
      }
    }
    const pwRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[!@#$])|(?=.*[A-Z])[\da-z!@#$|A-Z]{6,}$/
    const password = ref('')
    const pwRules = {
      required: (value) => {
        if (!value.match(pwRegExp)) {
          return '숫자와 영어 특수문자 "!,@,#,$"를 이용해 6자리 이상 문자를 조합해서 작성하세요.'
        }
      }
    }

    const nameRegExp = /[a-zA-z]/g
    const userName = ref('')
    const nameRules = {
      required: (value) => {
        if (!nameRegExp.test(value)) {
          return '영문 이름을 작성해주세요'
        }
      }
    }
    const confirmPass = ref('')

    const auth = getAuth()

    const fnRegisterUser = async () => {
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
      if (nameRules.required(userName.value)) {
        errMsg.value = nameRules.required(userName.value)
        jAlert.value = true
        return
      }

      try {
        const createUser = await createUserWithEmailAndPassword(
          auth,
          id.value,
          password.value,
          userName.value
        )
        const user = createUser.user
        useAuth.setUser(user)
        router.push('/')
      } catch (err) {
        console.log(err)
        errMsg.value = err.message
        jAlert.value = true
      }
    }

    const syncPass = () => {
      if (password.value === confirmPass.value) {
        return true
      } else {
        return '비밀번호가 일치하지 않습니다.'
      }
    }
    return {
      title,
      id,
      password,
      confirmPass,
      userName,
      fnRegisterUser,
      syncPass,
      idRules,
      pwRules,
      nameRules,
      jAlert,
      errMsg
    }
  }
}
</script>
<template>
  <v-container class="my-5">
    <h2 class="text-center">{{ title }}</h2>
    <v-sheet class="mx-auto mt-2" width="600" rounded elevation="7">
      <v-form class="pa-10" @submit.prevent="fnRegisterUser">
        <v-text-field
          v-model="id"
          label="ID(EMAIL)"
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
        <v-text-field
          v-model="confirmPass"
          label="CONFIRM PASSWORD"
          :rules="[syncPass]"
          type="password"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="userName"
          label="NAME"
          type="text"
          :rules="[nameRules.required]"
          clearable
        ></v-text-field>

        <v-alert type="error" dismissible v-model="jAlert"> {{ errMsg }}</v-alert>
        <v-container class="d-flex flex-column align-center pa-0">
          <v-container class="d-flex flex-column">
            <v-btn color="#393a40" class="text-white mb-2" type="submit">가 입</v-btn>
            <v-btn router to="/">취 소</v-btn>
          </v-container>
          <v-spacer></v-spacer>
          <v-btn color="#2d539a" class="text-white" router to="/login">
            이미 계정을 가지고 있습니다
          </v-btn>
        </v-container>
      </v-form>
    </v-sheet>
  </v-container>
</template>
<style lang="scss" scoped>
.v-btn {
  font-size: 15px;
  text-decoration: none;
}
</style>
