<script>
import { ref, onMounted, reactive } from 'vue'
export default {
  setup() {
    const API_KEY = ref(import.meta.env.VITE_ENCODING_KEY)
    const URL = 'https://apis.data.go.kr/1741000/DisasterMsg3/getDisasterMsg1List?ServiceKey='
    const URL_TYPE = '&pageNo=1&numOfRows=10&type=json'
    const msgData = reactive([])
    async function fetchMsgData() {
      try {
        const response = await fetch(URL + API_KEY.value + URL_TYPE)
        const jsonData = await response.json()
        const disasterMsgs = jsonData.DisasterMsg[1].row
        const msgDate = []
        const locationName = []
        const msgContents = []

        disasterMsgs.map((item) => {
          msgDate.push(item.create_date)
          locationName.push(item.location_name)
          msgContents.push(item.msg)
        })

        msgData.push(msgDate, locationName, msgContents)
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(async () => {
      await fetchMsgData()
    })
    return {
      msgData
    }
  }
}
</script>
<template>
  <section>
    <h2>긴급재난문자</h2>
    <div>
      <ul>
        <li v-for="(data, index) in msgData[0]" :key="data">
          <h2>{{ msgData[0][index] }}</h2>
          <small>{{ msgData[1][index] }}</small>
          <p>{{ msgData[2][index] }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
