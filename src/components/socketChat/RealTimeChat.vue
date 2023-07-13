<script>
import { ref, onMounted } from 'vue'
import { chatDB } from '../../firebase/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
export default {
  setup() {
    const chats = ref([])
    const newMessage = ref('')
    const userName = ref('')

    const fnSendMessage = () => {
      chatDB.push({
        user: userName.value,
        my_message: newMessage.value
      })
      newMessage.value = ''
    }

    onMounted(() => {
      const auth = getAuth()
      chatDB.on('value', (snapshot) => {
        chats.value = snapshot.val()
      })
      onAuthStateChanged(auth, (user) => {
        if (user.displayName === null) {
          userName.value = user.email
        } else {
          userName.value = user.displayName
        }
      })
    })

    return {
      chats,
      newMessage,
      userName,
      fnSendMessage
    }
  }
}
</script>
<template>
  <v-container>
    <h1>Emergency Chat</h1>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-list v-for="item in chats" :key="item.key">
            <v-list-item> {{ item.user }} : {{ item.my_message }} </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-form @submit.prevent="fnSendMessage()">
        <v-col class="d-flex" cols="12">
          <v-text-field label="메세지 내용" v-model="newMessage" autofocus></v-text-field>
          <v-btn type="submit" icon>
            <v-icon color="yellow" icon="mdi:mdi-send-circle"></v-icon>
          </v-btn>
        </v-col>
      </v-form>
    </v-row>
  </v-container>
</template>
