<script>
import { ref } from 'vue'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
export default {
  setup() {
    const auth = getAuth()
    const loggedIn = ref(false)

    onAuthStateChanged(auth, (user) => {
      if (user) {
        loggedIn.value = true
      } else {
        loggedIn.value = false
      }
    })
    return {
      loggedIn
    }
  }
}
</script>
<template>
  <v-layout>
    <v-list>
      <v-list-item color="#ffdc17" rounded="shaped" router to="/">
        <template v-slot:prepend>
          <v-icon color="#ffdc17" icon>mdi-home</v-icon>
        </template>
        <v-list-item-title>HOME</v-list-item-title>
      </v-list-item>

      <v-list-item color="#ffdc17" rounded="shaped" router to="/disasternow">
        <template v-slot:prepend>
          <v-icon color="#ffdc17" icon>mdi-alert</v-icon>
        </template>
        <v-list-item-title>현 재난상황전파</v-list-item-title>
      </v-list-item>

      <v-list-item color="#ffdc17" rounded="shaped" router to="/safemap">
        <template v-slot:prepend>
          <v-icon color="#ffdc17" icon>mdi-near-me</v-icon>
        </template>
        <v-list-item-title>대피시설</v-list-item-title>
      </v-list-item>

      <v-list-item v-if="loggedIn" color="#ffdc17" rounded="shaped" router to="/chat">
        <template v-slot:prepend>
          <v-icon color="#ffdc17" icon="mdi:mdi-chat"></v-icon>
        </template>
        <v-list-item-title>채팅방</v-list-item-title>
      </v-list-item>

      <v-list-item color="#ffdc17" rounded="shaped" router to="/behaviordisaster">
        <template v-slot:prepend>
          <v-icon color="#ffdc17" icon="mdi:mdi-exit-run"></v-icon>
        </template>
        <v-list-item-title>위급시 행동요령</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-layout>
</template>

<style lang="scss" scoped>
.v-list-item,
.v-icon {
  text-decoration: none;
  color: white;
  border: none;
}
</style>
