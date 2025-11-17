import { defineStore } from 'pinia'
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
  },
  getters: {
    fnGetUser(state) {
      return state.user
    },
    getAuthStatus(state) {
      return state.user != null
    }
  }
})
