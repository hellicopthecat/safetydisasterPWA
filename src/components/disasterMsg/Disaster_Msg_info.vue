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
        console.log(data)
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
    <v-carousel show-arrows="hover" hide-delimiter-background height="auto">
      <v-carousel-item v-for="title in dMsgTitle" :key="title">
        <v-card class="pa-10" :title="title" elevation="7">
          <v-card-text v-html="msgTextCont"> </v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
  <v-container v-else>
    <v-container class="ma-5 bg-white rounded">
      <h2 class="pa-5">데이터를 불러오고 있습니다.</h2>
    </v-container>
  </v-container>
</template>
