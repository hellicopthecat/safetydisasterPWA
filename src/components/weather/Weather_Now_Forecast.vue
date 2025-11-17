<script>
import { ref, onMounted } from 'vue'
import KakaoMap from '../Kakao_Map_page.vue'
import { dfs_xy_conv } from '../../util/util'

export default {
  components: {
    KakaoMap
  },
  setup() {
    const YEAR = new Date().getFullYear()
    const MONTH =
      new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1
    const DATE = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()
    const HOUR =
      new Date().getMinutes() < '29' && new Date().getHours() < '10'
        ? '0' + (new Date().getHours() - 1)
        : new Date().getHours() < '10'
          ? '0' + new Date().getHours()
          : new Date().getHours() <= '10'
            ? '0' + (new Date().getHours() - 1)
            : new Date().getHours() > 10
              ? new Date().getHours() - 1
              : null

    const MINUTES = new Date().getMinutes() < '29' ? '40' : '00'
    const DAYTIME = `${HOUR}${MINUTES}`
    const DDAY = `${YEAR}${MONTH}${DATE}`
    console.log(DDAY)
    console.log(DAYTIME)

    const precipitation = ref('') //강수형태
    const humidity = ref('') //습도
    const rainfall = ref('') //강수량
    const temperature = ref('') //기온
    const windDirection = ref('') // 풍향
    const windPower = ref('') // 풍속

    const fetchWeather = async (lat, lon) => {
      const convertedCoords = dfs_xy_conv('toXY', lat, lon)
      const nx = ref(convertedCoords.x)
      const ny = ref(convertedCoords.y)
      //초단기 실황 - 정시 발표
      const NCST = 'getUltraSrtNcst'

      // 참고 https://yogiweather.netlify.app/
      // https://eddiekwon.github.io/swift/2018/10/19/WeatherAPI/

      //초단기 예보 조회
      const API_KEY = ref(import.meta.env.VITE_ENCODING_KEY)
      const URL = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${NCST}?serviceKey=`
      const URL_TYPE = `&numOfRows=1000&dataType=json&pageNo=1&base_date=${DDAY}&base_time=${DAYTIME}&nx=${nx.value}&ny=${ny.value}`
      try {
        const response = await fetch(URL + API_KEY.value + URL_TYPE)
        const data = await response.json()
        const weatherItem = data.response.body
        weatherItem.items.item.map((item) => {
          if (item.category === 'PTY' && item.obsrValue === '0') {
            precipitation.value = '대체로 맑음'
          } else if (item.category === 'PTY' && item.obsrValue === '1') {
            precipitation.value = '비'
          } else if (item.category === 'PTY' && item.obsrValue === '2') {
            precipitation.value = '비/눈'
          } else if (item.category === 'PTY' && item.obsrValue === '3') {
            precipitation.value = '눈'
          } else if (item.category === 'PTY' && item.obsrValue === '4') {
            precipitation.value = '소나기'
          } else if (item.category === 'PTY' && item.obsrValue === '5') {
            precipitation.value = '빗방울'
          } else if (item.category === 'PTY' && item.obsrValue === '6') {
            precipitation.value = '빗방울 눈날림'
          } else if (item.category === 'PTY' && item.obsrValue === '7') {
            precipitation.value = '눈날림'
          }
          if (item.category === 'REH') {
            humidity.value = item.obsrValue
          }
          if (item.category === 'RN1' && item.obsrValue === 0) {
            rainfall.value = '강수없음'
          } else if (item.category === 'RN1' && item.obsrValue < 1) {
            rainfall.value = '1.0mm 미만'
          } else if (item.category === 'RN1' && item.obsrValue > 1 && item.obsrValue < 30) {
            rainfall.value = '1.0mm ~ 29.9mm'
          } else if (item.category === 'RN1' && item.obsrValue > 30 && item.obsrValue < 50) {
            rainfall.value = '30.0mm ~ 50.0mm'
          } else if (item.category === 'RN1' && 50 < item.obsrValue) {
            rainfall.value = '50.0mm 이상'
          }
          if (item.category === 'T1H') {
            temperature.value = item.obsrValue
          }
          if (item.category === 'VEC' && item.obsrValue > 0 && item.obsrValue < 45) {
            windDirection.value = '북북동'
          } else if (item.category === 'VEC' && item.obsrValue > 45 && item.obsrValue < 90) {
            windDirection.value = '북동동'
          } else if (item.category === 'VEC' && item.obsrValue > 90 && item.obsrValue < 135) {
            windDirection.value = '동남동'
          } else if (item.category === 'VEC' && item.obsrValue > 135 && item.obsrValue < 180) {
            windDirection.value = '남동남'
          } else if (item.category === 'VEC' && item.obsrValue > 180 && item.obsrValue < 225) {
            windDirection.value = '남남서'
          } else if (item.category === 'VEC' && item.obsrValue > 225 && item.obsrValue < 270) {
            windDirection.value = '남서서'
          } else if (item.category === 'VEC' && item.obsrValue > 270 && item.obsrValue < 315) {
            windDirection.value = '서북서'
          } else if (item.category === 'VEC' && item.obsrValue > 315 && item.obsrValue < 360) {
            windDirection.value = '북서북'
          }
          if (item.category === 'WSD' && item.obsrValue < 4) {
            windPower.value = `약한 바람(${item.obsrValue}m/s)`
          } else if (item.category === 'WSD' && item.obsrValue > 4 && item.obsrValue < 9) {
            windPower.value = `약한 강한 바람(${item.obsrValue}m/s)`
          } else if (item.category === 'WSD' && item.obsrValue > 9 && item.obsrValue < 14) {
            windPower.value = `강한 바람(${item.obsrValue}m/s)`
          } else if (item.category === 'WSD' && 14 < item.obsrValue) {
            windPower.value = `매우 강한 바람(${item.obsrValue}m/s)`
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
    onMounted(() => {
      function whichWhere(position) {
        const LAT = position.coords.latitude
        const LON = position.coords.longitude
        fetchWeather(LAT, LON)
      }
      function failureWhere() {
        alert('위치 요청을 거부하셨거나 위치를 불러오는데 실패하였습니다.')
        fetchWeather(37.5518911, 126.9917937)
      }
      navigator.geolocation.getCurrentPosition(whichWhere, failureWhere)
    })
    return {
      precipitation,
      humidity,
      rainfall,
      temperature,
      windDirection,
      windPower
    }
  }
}
</script>

<template>
  <v-container class="d-flex align-center flex-column flex-md-row">
    <v-container class="d-flex flex-column align-center mt-10 mb-12 mb-md-0">
      <div class="d-flex justify-space-between align-center">
        <v-icon
          v-if="precipitation === '대체로 맑음'"
          color="red"
          icon="mdi:mdi-weather-sunny"
          class="weather-icon"
        ></v-icon>
        <v-icon
          v-else-if="precipitation === '비'"
          color="blue-lighten-2"
          icon="mdi:mdi-weather-rainy"
          class="weather-icon"
        ></v-icon>
        <v-icon
          v-else-if="precipitation === '비/눈'"
          color="blue-darken-2"
          icon="mdi:mdi-weather-partly-snowy-rainy"
          class="weather-icon"
        ></v-icon>
        <v-icon
          v-else-if="precipitation === '눈'"
          color="blue-grey-darken-1"
          icon="mdi:mdi-weather-snowy"
          class="weather-icon"
        ></v-icon>
        <v-icon
          v-else-if="precipitation === '소나기'"
          color="blue-grey-lighten-1"
          icon="mdi:mdi-weather-pouring"
          class="weather-icon"
        ></v-icon>
        <v-icon
          v-else-if="precipitation === '빗방울'"
          color="cyan-lighten-1"
          icon="mdi:mdi-weather-partly-rainy"
        ></v-icon>
        <v-icon
          v-else-if="precipitation === '빗방울 눈날림'"
          color="cyan-accent-3"
          icon="mdi:mdi-weather-snowy-rainy"
          class="weather-icon"
        ></v-icon>
        <v-icon
          v-else-if="precipitation === '눈날림'"
          color="cyan-darken-1"
          icon="mdi:mdi-weather-hail"
          class="weather-icon"
        ></v-icon>
        <div class="d-flex flex-column text-right">
          <p class="font-weight-bold text-h5 w-100">{{ precipitation }}<br /></p>
          <small class="text-body-2"> 강수량 : {{ rainfall }}</small>
        </div>
      </div>

      <div class="d-flex align-center text-h3 font-weight-bold">
        <v-icon v-if="temperature > 28" color="red" icon> mdi-thermometer </v-icon>
        <v-icon v-else-if="temperature < 28 && temperature > 21" color="green" icon>
          mdi-thermometer
        </v-icon>
        <v-icon v-else-if="temperature <= 21" color="blue" icon> mdi-thermometer </v-icon>
        <p class="">{{ temperature }}℃</p>
      </div>

      <div class="d-flex align-center">
        <v-icon v-if="humidity > 65" color="blue" icon="mdi:mdi-water-alert"></v-icon>
        <v-icon
          v-else-if="humidity < 65 || humidity > 40"
          color="green"
          icon="mdi:mdi-water-check"
        ></v-icon>
        <v-icon v-else-if="humidity < 40" color="red" icon="mdi:mdi-water-minus"></v-icon>
        <p class="ml-2">습도 : {{ humidity }}%</p>
      </div>

      <div class="d-flex align-center text-caption">
        <p><v-icon icon="mdi:mdi-windsock"></v-icon> : {{ windDirection }}</p>
        <p><v-icon icon="mdi:mdi-weather-windy"></v-icon> : {{ windPower }}</p>
      </div>
    </v-container>
    <v-container class="d-flex flex-column align-center">
      <KakaoMap />
    </v-container>
  </v-container>
</template>
<style lang="scss" scoped>
.weather-icon {
  font-size: 50px;
  margin-right: 15px;
}
</style>
