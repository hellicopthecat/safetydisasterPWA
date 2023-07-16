<script>
import { ref, onMounted, nextTick } from 'vue'
import { chatDB } from '../../firebase/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
export default {
  setup() {
    const scrollNum = ref(null)
    const auth = getAuth()
    const chats = ref([])
    const newMessage = ref('')
    const userName = ref('')
    const DAY = `${new Date().getFullYear()}년 ${
      new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1
    }월 ${new Date().getDate()}일`
    const TIME = `${new Date().getHours()}:${new Date().getMinutes()}:${
      new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
    }`

    const date = ref(`${DAY} ${TIME}`)

    const fnSendMessage = () => {
      chatDB.push({
        user: userName.value,
        my_message: newMessage.value,
        happen: date.value
      })
      newMessage.value = ''
    }
    const messasgeClass = (user) => {
      const cUser = auth.currentUser
      if (cUser.email !== user.user) {
        return 'text-start'
      } else {
        return 'text-end'
      }
    }

    onMounted(() => {
      chatDB.on('value', (snapshot) => {
        chats.value = snapshot.val()
        nextTick(() => {
          const scrollTaget = document.getElementById('scroll-target')
          scrollTaget.scrollTop = scrollTaget.scrollHeight
        })
      })
      onAuthStateChanged(auth, (user) => {
        if (user.displayName === null) {
          userName.value = user.email
        } else {
          userName.value = user.email
        }
      })
    })

    return {
      chats,
      newMessage,
      userName,
      fnSendMessage,
      messasgeClass,
      scrollNum
    }
  }
}
</script>
<template>
  <v-container>
    <h1>Chat</h1>
    <v-container class="d-flex flex-column align-center">
      <v-row>
        <v-col cols="12">
          <v-container class="pb-0">
            <v-card
              id="scroll-target"
              min-width="600"
              height="300"
              class="overflow-y-auto"
              elevation="4"
              ref="scrollNum"
            >
              <v-list v-for="item in chats" :key="item.key" :class="[messasgeClass(item)]">
                <v-list-item>
                  <p class="my-0 py-0">{{ item.user }} : {{ item.my_message }}</p>
                  <small>{{ item.happen }}</small>
                </v-list-item>
              </v-list>
            </v-card>
          </v-container>
        </v-col>
      </v-row>

      <v-row>
        <v-sheet min-width="600" class="mt-0" elevation="7">
          <v-form @submit.prevent="fnSendMessage()" class="d-flex align-center px-10 py-0">
            <v-col class="d-flex align-center" cols="12">
              <v-text-field
                label="메세지 내용"
                v-model="newMessage"
                autofocus
                variant="plain"
              ></v-text-field>
              <v-btn type="submit" icon>
                <v-icon color="yellow-darken-3" icon="mdi:mdi-send-circle"></v-icon>
              </v-btn>
            </v-col>
          </v-form>
        </v-sheet>
      </v-row>
    </v-container>
  </v-container>
</template>

<!-- 기획서 대충 만들고 / 배포 / readme.md 프로젝트 보는 방법 작성 -->
