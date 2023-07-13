<script>
import { ref, reactive } from 'vue'
export default {
  setup() {
    const API_KEY = ref(import.meta.env.VITE_ENCODING_KEY)
    const API_URL = `http://apis.data.go.kr/1741000/MisfortuneSituationNoticeMsg3/getMisfortuneSituationNoticeMsg1List?ServiceKey=${API_KEY.value}&type=json&pageNo=1&numOfRows=10`
    const dMsgTitle = reactive([])
    const msgTextCont = ref([])
    const fetchDisasterURL = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()

      let i = 0

      for (; i < data.MisfortuneSituationNoticeMsg[1].row.length; i++) {
        const title = data.MisfortuneSituationNoticeMsg[1].row[i].titl
        const msgText = data.MisfortuneSituationNoticeMsg[1].row[i].cnts1
        dMsgTitle.push(title)
        msgTextCont.value = msgText
      }
    }
    fetchDisasterURL()
    return {
      dMsgTitle,
      msgTextCont
    }
  }
}
</script>
<template>
  <v-container>
    <h2>현 재난상황전파문</h2>
    <v-container v-for="title in dMsgTitle" :key="title">
      <v-card class="pa-5" :title="title">
        <v-card-text v-html="msgTextCont"> </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>
