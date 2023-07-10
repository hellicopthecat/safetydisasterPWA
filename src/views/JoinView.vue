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

    const emailRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    const title = ref('회원가입')
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

    const nameRegExp = /[a-zA-z]/g
    const name = ref('')
    const nameRules = {
      required: (value) => {
        if (!nameRegExp.test(value)) {
          return 'You Can Only Write English'
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
      if (nameRules.required(name.value)) {
        errMsg.value = nameRules.required(name.value)
        jAlert.value = true
        return
      }

      try {
        const createUser = await createUserWithEmailAndPassword(
          auth,
          id.value,
          password.value,
          name.value
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
      name,
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
    <h2>{{ title }}</h2>
    <v-sheet width="700" class="mt-2">
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
          v-model="name"
          label="NAME"
          type="text"
          :rules="[nameRules.required]"
          clearable
        ></v-text-field>

        <v-alert type="error" dismissible v-model="jAlert"> {{ errMsg }}</v-alert>

        <v-btn type="submit">SUBMIT</v-btn>
        <v-btn router to="/">CANCEL</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" router to="/login">I already have Account</v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>
