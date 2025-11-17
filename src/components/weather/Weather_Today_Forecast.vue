<script>
import { ref, onMounted, reactive } from 'vue'
import { dfs_xy_conv } from '../../util/util'
export default {
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

    const MINUTES = new Date().getMinutes() < '29' ? '45' : '00'
    const DAYTIME = `${HOUR}${MINUTES}`
    const DDAY = `${YEAR}${MONTH}${DATE}`
    console.log(DAYTIME)
    const fcstTime = reactive([]) //예보시간
    const lightening = reactive([]) //낙뢰
    const precipitation = reactive([]) //강수형태
    const rainfall = reactive([])
    const cloudStatus = reactive([])
    const temperature = reactive([]) //기온
    const humidity = reactive([]) //습도
    const windDirection = reactive([]) // 풍향
    const windPower = reactive([]) // 풍속

    const fetchWeather = async (lat, lon) => {
      const convertedCoords = dfs_xy_conv('toXY', lat, lon)
      const nx = ref(convertedCoords.x)
      const ny = ref(convertedCoords.y)

      // 초단기 예보 - 30분단 위발표
      const FCST = 'getUltraSrtFcst'

      //초단기 예보 조회
      const API_KEY = ref(import.meta.env.VITE_ENCODING_KEY)
      const URL = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${FCST}?serviceKey=`
      const URL_TYPE = `&numOfRows=1000&dataType=json&pageNo=1&base_date=${DDAY}&base_time=${DAYTIME}&nx=${nx.value}&ny=${ny.value}`
      try {
        const response = await fetch(URL + API_KEY.value + URL_TYPE)
        const data = await response.json()
        const weatherItem = data.response.body

        weatherItem.items.item.map((item) => {
          fcstTime.push(item.fcstTime)

          if (item.category === 'LGT') {
            lightening.push(item.fcstValue)
          }
          if (item.category === 'PTY' && item.fcstValue === '0') {
            precipitation.push('대체로 맑음')
          } else if (item.category === 'PTY' && item.fcstValue === '1') {
            precipitation.push('비')
          } else if (item.category === 'PTY' && item.fcstValue === '2') {
            precipitation.push('비/눈')
          } else if (item.category === 'PTY' && item.fcstValue === '3') {
            precipitation.push('눈')
          } else if (item.category === 'PTY' && item.fcstValue === '4') {
            precipitation.push('소나기')
          } else if (item.category === 'PTY' && item.fcstValue === '5') {
            precipitation.push('빗방울')
          } else if (item.category === 'PTY' && item.fcstValue === '6') {
            precipitation.push('빗방울 눈날림')
          } else if (item.category === 'PTY' && item.fcstValue === '7') {
            precipitation.push('눈날림')
          }
          if (item.category === 'RN1') {
            rainfall.push(item.fcstValue)
          }
          if (item.category === 'SKY' && item.fcstValue <= 5) {
            cloudStatus.push('맑음')
          } else if (item.category === 'SKY' && item.fcstValue >= 6 && item.fcstValue <= 8) {
            cloudStatus.push('구름많음')
          } else if (item.category === 'SKY' && item.fcstValue >= 9 && item.fcstValue <= 10) {
            cloudStatus.push('흐림')
          }
          if (item.category === 'T1H') {
            temperature.push(item.fcstValue)
          }
          if (item.category === 'REH') {
            humidity.push(item.fcstValue)
          }
          if (item.category === 'VEC' && item.fcstValue > 0 && item.fcstValue < 45) {
            windDirection.push('북북동')
          } else if (item.category === 'VEC' && item.fcstValue > 45 && item.fcstValue < 90) {
            windDirection.push('북동동')
          } else if (item.category === 'VEC' && item.fcstValue > 90 && item.fcstValue < 135) {
            windDirection.push('동남동')
          } else if (item.category === 'VEC' && item.fcstValue > 135 && item.fcstValue < 180) {
            windDirection.push('남동남')
          } else if (item.category === 'VEC' && item.fcstValue > 180 && item.fcstValue < 225) {
            windDirection.push('남남서')
          } else if (item.category === 'VEC' && item.fcstValue > 225 && item.fcstValue < 270) {
            windDirection.push('남서서')
          } else if (item.category === 'VEC' && item.fcstValue > 270 && item.fcstValue < 315) {
            windDirection.push('서북서')
          } else if (item.category === 'VEC' && item.fcstValue > 315 && item.fcstValue < 360) {
            windDirection.push('북서북')
          }

          // 풍속
          if (item.category === 'WSD' && item.fcstValue < 4) {
            windPower.push(`약한 바람(${item.fcstValue}m/s)`)
          } else if (item.category === 'WSD' && item.fcstValue > 4 && item.fcstValue < 9) {
            windPower.push(`약한 강한 바람(${item.fcstValue}m/s)`)
          } else if (item.category === 'WSD' && item.fcstValue > 9 && item.fcstValue < 14) {
            windPower.push(`강한 바람(${item.fcstValue}m/s)`)
          } else if (item.category === 'WSD' && 14 < item.fcstValue) {
            windPower.push(`매우 강한 바람(${item.fcstValue}m/s)`)
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
      fcstTime,
      lightening,
      precipitation,
      rainfall,
      cloudStatus,
      temperature,
      humidity,
      windDirection,
      windPower,
      YEAR,
      MONTH,
      DATE
    }
  }
}
</script>

<template>
  <v-card class="today-weather overflow-auto" elevation="8">
    <v-container class="d-flex">
      <v-card
        v-for="(time, index) in fcstTime.slice(0, 6)"
        :key="time"
        class="mr-0"
        min-width="250"
        elevation="4"
      >
        <v-list class="" no-gutters elevation="4">
          <v-list-item>
            <v-card-title class="time-text px-0">
              <h2>{{ time.substring(0, 2) + ':00' }}</h2>
            </v-card-title>
            <v-card-text>
              <p class="temp mt-0">
                <v-icon v-if="temperature[index] > 28" color="red" icon> mdi-thermometer </v-icon>
                <v-icon
                  v-else-if="temperature[index] < 28 && temperature[index] >= 21"
                  color="green"
                  icon
                >
                  mdi-thermometer
                </v-icon>
                <v-icon v-else-if="temperature[index] < 21" color="blue" icon>
                  mdi-thermometer
                </v-icon>
                {{ temperature[index] }}℃
              </p>
            </v-card-text>
            <v-card-text>
              <p class="weather">
                <v-icon
                  v-if="precipitation[index] === '대체로 맑음'"
                  color="red"
                  icon="mdi:mdi-weather-sunny"
                  class="weather-icon"
                ></v-icon>
                <v-icon
                  v-else-if="precipitation[index] === '비'"
                  color="blue-lighten-2"
                  icon="mdi:mdi-weather-rainy"
                  class="weather-icon"
                ></v-icon>
                <v-icon
                  v-else-if="precipitation[index] === '비/눈'"
                  color="blue-darken-2"
                  icon="mdi:mdi-weather-partly-snowy-rainy"
                  class="weather-icon"
                ></v-icon>
                <v-icon
                  v-else-if="precipitation[index] === '눈'"
                  color="blue-grey-darken-1"
                  icon="mdi:mdi-weather-snowy"
                  class="weather-icon"
                ></v-icon>
                <v-icon
                  v-else-if="precipitation[index] === '소나기'"
                  color="blue-grey-lighten-1"
                  icon="mdi:mdi-weather-pouring"
                  class="weather-icon"
                ></v-icon>
                <v-icon
                  v-else-if="precipitation[index] === '빗방울'"
                  color="cyan-lighten-1"
                  icon="mdi:mdi-weather-partly-rainy"
                ></v-icon>
                <v-icon
                  v-else-if="precipitation[index] === '빗방울 눈날림'"
                  color="cyan-accent-3"
                  icon="mdi:mdi-weather-snowy-rainy"
                  class="weather-icon"
                ></v-icon>
                <v-icon
                  v-else-if="precipitation[index] === '눈날림'"
                  color="cyan-darken-1"
                  icon="mdi:mdi-weather-hail"
                  class="weather-icon"
                ></v-icon>
                {{ precipitation[index] }}
              </p>
            </v-card-text>
            <v-card-text>
              <p class="cloud">
                구름량
                <v-icon
                  v-if="cloudStatus[index] === '맑음'"
                  color="red"
                  icon="mdi:mdi-weather-sunny"
                ></v-icon>
                <v-icon
                  v-else-if="cloudStatus[index] === '구름많음'"
                  color="grey-darken-1"
                  icon="mdi:mdi-weather-cloudy"
                ></v-icon>
                <v-icon
                  v-else-if="cloudStatus[index] === '흐림'"
                  color="grey-darken-4"
                  icon="mdi:mdi-cloudStatus[index]"
                ></v-icon>
                {{ cloudStatus[index] }}
              </p>
            </v-card-text>
            <v-card-text>
              <p class="rain">
                <v-icon
                  color="blue-lighten-2"
                  icon="mdi:mdi-weather-rainy"
                  class="weather-icon"
                ></v-icon>
                {{ rainfall[index] }}
              </p>
            </v-card-text>
            <v-card-text>
              <p class="humidity">
                <v-icon
                  v-if="humidity[index] > 65"
                  color="blue"
                  icon="mdi:mdi-water-alert"
                ></v-icon>
                <v-icon
                  v-else-if="humidity[index] < 65 || humidity[index] > 40"
                  color="green"
                  icon="mdi:mdi-water-check"
                ></v-icon>
                <v-icon
                  v-else-if="humidity[index] < 40"
                  color="red"
                  icon="mdi:mdi-water-minus"
                ></v-icon
                >습도 : {{ humidity[index] }}%
              </p>
            </v-card-text>
            <v-card-text>
              <p class="wind">
                <v-icon color="orange" icon="mdi:mdi-windsock"></v-icon>
                {{ windDirection[index] }}
                <br />
                <v-icon color="blue-darken-3" icon="mdi:mdi-weather-windy"></v-icon>
                {{ windPower[index] }}
              </p>
            </v-card-text>
            <v-card-text>
              <p class="thunder">
                <v-icon color="yellow-darken-2" icon="mdi:mdi-weather-lightning"></v-icon>
                {{ lightening[index] }} kA(킬로암페어)/㎢
              </p>
            </v-card-text>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </v-card>
</template>

<style lang="scss" scoped>
.today-weather {
  position: relative;
  top: -10px;
  .v-card-text {
    padding: 5px;
  }
  * > p {
    display: flex;
    align-items: center;
  }
  .time-text {
    font-size: 18px;
  }
  .temp {
    margin-left: -10px;
    font-size: 35px;
    font-weight: 600;
  }
  .weather {
    font-size: 20px;
  }
  .cloud {
    font-size: 15px;
  }
  .rain {
    font-size: 15px;
  }
  .humidity {
    font-size: 15px;
  }
  .wind {
    font-size: 15px;
  }
  .thunder {
    font-size: 15px;
  }
}
</style>
