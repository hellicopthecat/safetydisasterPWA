import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    clearUser() {
      this.user = null
    }
  }
})
