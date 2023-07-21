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
  },
  props: {
    msgContHeight: null
  }
}
</script>
<template>
  <v-card
    min-width="400"
    max-width="600"
    :min-height="msgContHeight"
    class="d-flex justify-center w-100"
    elevation="8"
  >
    <v-container class="d-flex flex-column align-center">
      <v-card-title>
        <h2>전국 긴급재난문자 현황</h2>
      </v-card-title>
      <v-card
        max-width="500"
        min-height="500"
        :max-height="msgContHeight - 105"
        class="overflow-y-auto"
        elevation="2"
      >
        <v-list>
          <v-list-item v-for="(data, index) in msgData[0]" :key="data">
            <v-container class="pt-0">
              <v-card elevation="8">
                <v-card-title>
                  <h6>{{ msgData[0][index] }}</h6>
                </v-card-title>
                <v-card-text>
                  <p class="text-lg-h5 font-weight-bold">
                    {{ msgData[1][index] }}
                  </p>
                  <p>{{ msgData[2][index] }}</p>
                </v-card-text>
              </v-card>
            </v-container>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </v-card>
</template>

<style lang="scss" scoped>
.v-container,
.v-card {
  color: #393a40;
}
</style>
