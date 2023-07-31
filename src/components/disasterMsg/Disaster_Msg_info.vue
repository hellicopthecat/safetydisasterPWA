<script>
import { ref, reactive, onMounted } from 'vue'
export default {
  setup() {
    const API_KEY = ref(import.meta.env.VITE_ENCODING_KEY)
    const API_URL = `http://apis.data.go.kr/1741000/MisfortuneSituationNoticeMsg3/getMisfortuneSituationNoticeMsg1List?ServiceKey=${API_KEY.value}&type=json&pageNo=1&numOfRows=10`
    const dMsgTitle = reactive([])
    const msgTextCont = ref([])
    const loading = ref(true)
    const fetchDisasterURL = async () => {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        let i = 0
        for (; i < data.MisfortuneSituationNoticeMsg[1].row.length; i++) {
          const title = data.MisfortuneSituationNoticeMsg[1].row[i].titl
          const msgText = data.MisfortuneSituationNoticeMsg[1].row[i].cnts1
          dMsgTitle.push(title)
          msgTextCont.value = msgText
          loading.value = false
        }
      } catch (error) {
        console.log(error)
        loading.value = false
      }
    }
    onMounted(() => {
      fetchDisasterURL()
    })
    return {
      dMsgTitle,
      msgTextCont,
      loading
    }
  }
}
</script>
<template>
  <v-container v-if="!loading">
    <h2 class="my-3">현 재난상황전파문</h2>
    <v-carousel show-arrows="hover">
      <v-carousel-item v-for="(title, index) in dMsgTitle" :key="title">
        <v-card class="pa-5" :title="title" elevation="7">
          <v-card-text v-html="msgTextCont"> </v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
  <v-container v-else>
    <h2>loading</h2>
  </v-container>
</template>
