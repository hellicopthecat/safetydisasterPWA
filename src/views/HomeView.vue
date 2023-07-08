<template>
  <v-container class="d-flex">
    <v-container class="mx-auto mt-5 mb-10 pa-5">
      <v-card max-width="600" min-height="600">
        <v-container>
          <NowForecast />
          <v-divider class="my-0"></v-divider>
          <v-card-actions>
            <v-btn @click="expand = !expand">
              {{ !expand ? '오늘의 날씨 보기' : '오늘의 날씨 숨기기' }}
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-if="expand">
              <WeatherToday />
            </div>
          </v-expand-transition>
          <v-divider class="my-0"></v-divider>
          <v-card-actions>
            <v-btn @click="expand2 = !expand2">
              {{ !expand2 ? '2일간 날씨 보기' : '2일간 날씨 숨기기' }}
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-if="expand2">
              <WeatherTomorrow />
            </div>
          </v-expand-transition>
        </v-container>
      </v-card>
    </v-container>
    <DisaterMsg />
  </v-container>
</template>

<script>
import { defineComponent, ref } from 'vue'
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
    const expand = ref(false)
    const expand2 = ref(false)
    return {
      expand,
      expand2
    }
  }
})
</script>
