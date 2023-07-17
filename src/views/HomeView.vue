<script>
import { defineComponent, ref, onMounted } from 'vue'
import DisaterMsg from '../components/disasterMsg/Disaster_Msg.vue'
import NowForecast from '../components/weather/Weather_Now_Forecast.vue'
import WeatherToday from '../components/weather/Weather_Today_Forecast.vue'
import WeatherTomorrow from '../components/weather/Weather_Tomorrow_Forcast.vue'

// Components

export default defineComponent({
  name: 'HomeView',

  components: {
    NowForecast,
    DisaterMsg,
    WeatherToday,
    WeatherTomorrow
  },
  setup() {
    const contHeight = ref(null)

    const expand = ref(false)
    const expand2 = ref(false)

    const YEAR = new Date().getFullYear()
    const MONTH =
      new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1
    const DATE = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()

    return {
      expand,
      expand2,
      YEAR,
      MONTH,
      DATE,
      contHeight
    }
  }
})
</script>

<template>
  <v-container class="mx-auto w-50">
    <v-container class="d-flex justify-center mt-5 mb-10 pa-5">
      <v-card class="mr-10" min-width="620" min-height="580" elevation="8" ref="contHeight">
        <NowForecast />

        <v-divider class="my-2"></v-divider>

        <v-card-actions class="d-flex mr-5 justify-end my-5">
          <h3 class="mr-5">{{ `${YEAR}년 ${MONTH}월 ${DATE}일` }}</h3>
          <v-btn @click="expand = !expand">
            {{ !expand ? '오늘의 날씨 보기' : '오늘의 날씨 숨기기' }}
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-if="expand">
            <WeatherToday />
          </div>
        </v-expand-transition>

        <v-divider class="my-2"></v-divider>
        <v-card-actions class="d-flex mr-5 justify-end">
          <v-btn @click="expand2 = !expand2">
            {{ !expand2 ? '2일간 날씨 보기' : '2일간 날씨 숨기기' }}
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-if="expand2">
            <WeatherTomorrow />
          </div>
        </v-expand-transition>
      </v-card>
      <DisaterMsg />
    </v-container>
  </v-container>
</template>

<style lang="scss" scoped>
.v-btn {
  position: relative;
  z-index: 99;
  background-color: #393a40;
  color: #ffdc17;
}
</style>
