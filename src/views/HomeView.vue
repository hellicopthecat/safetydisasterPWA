<script>
import { defineComponent, ref, onMounted } from 'vue'
import DisaterMsg from '../components/disasterMsg/Disaster_Msg.vue'
import NowForecast from '../components/weather/Weather_Now_Forecast.vue'
import WeatherToday from '../components/weather/Weather_Today_Forecast.vue'
import WeatherTomorrow from '../components/weather/Weather_Tomorrow_Forcast.vue'
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
    const heightProp = ref(0)
    const widthProp = ref(570)
    const expand = ref(false)
    const expand2 = ref(false)
    let resizeObserver = null

    const YEAR = new Date().getFullYear()
    const MONTH =
      new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1
    const DATE = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()

    onMounted(() => {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          heightProp.value = entry.target.clientHeight
          widthProp.value = entry.target.clientWidth
        }
      })
      resizeObserver.observe(contHeight.value?.$el)
      // 컴포넌트가 언마운트될 때 리사이즈 옵저버를 해제합니다.
      return () => {
        if (resizeObserver) {
          resizeObserver.disconnect()
          resizeObserver = null
        }
      }
    })
    return {
      expand,
      expand2,
      YEAR,
      MONTH,
      DATE,
      contHeight,
      heightProp,
      widthProp
    }
  }
})
</script>

<template>
  <v-container>
    <v-container>
      <v-row class="d-flex justify-center align-center pa-5 pb-0" no-gutters>
        <v-col
          class="d-flex flex-column justify-sm-center px-1"
          xxl="6"
          xl="6"
          lg="6"
          md="12"
          sm="12"
        >
          <v-card id="tWeather" elevation="8" ref="contHeight" class="my-2">
            <v-container>
              <NowForecast />
            </v-container>
            <v-divider></v-divider>
            <v-card-actions class="d-flex mr-5 justify-center my-5">
              <v-btn @click="expand = !expand">
                {{ `${YEAR}년 ${MONTH}월 ${DATE}일` }}
                {{ !expand ? '오늘의 날씨 보기' : '오늘의 날씨 숨기기' }}
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <v-container v-if="expand">
                <WeatherToday />
              </v-container>
            </v-expand-transition>
            <v-divider></v-divider>
            <v-card-actions @click="expand2 = !expand2" class="d-flex justify-center my-5">
              <v-btn>
                {{ !expand2 ? '향후 2일간 날씨 보기' : '향후 2일간 날씨 숨기기' }}
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <v-container v-if="expand2">
                <WeatherTomorrow />
              </v-container>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col
          class="d-flex justify-xl-start justify-md-center justify-sm-center px-1 mt-lg-0 mt-md-3"
          xxl="6"
          xl="6"
          lg="6"
          md="12"
          sm="12"
        >
          <DisaterMsg :msgContHeight="heightProp" :msgContWidth="widthProp" />
        </v-col>
      </v-row>
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
