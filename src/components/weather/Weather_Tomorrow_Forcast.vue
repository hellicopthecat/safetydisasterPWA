<script>
import { ref, onMounted, reactive } from 'vue'
export default {
  setup() {
    const RE = 6371.00877 // 지구 반경(km)
    const GRID = 5.0 // 격자 간격(km)
    const SLAT1 = 30.0 // 투영 위도1(degree)
    const SLAT2 = 60.0 // 투영 위도2(degree)
    const OLON = 126.0 // 기준점 경도(degree)
    const OLAT = 38.0 // 기준점 위도(degree)
    const XO = 43 // 기준점 X좌표(GRID)
    const YO = 136 // 기1준점 Y좌표(GRID)
    //날짜
    const currentDate = new Date()
    let YEAR = currentDate.getFullYear()
    let MONTH = currentDate.getMonth() + 1
    let DATE = currentDate.getDate()

    // 월과 날짜를 2자리 문자열로 변환
    MONTH = MONTH < 10 ? '0' + MONTH : MONTH
    DATE = DATE < 10 ? '0' + DATE : DATE
    //오늘
    let DDAY = YEAR + MONTH + DATE

    //내일
    const tomorrowDate = new Date(currentDate.getTime())
    tomorrowDate.setDate(tomorrowDate.getDate() + 1)
    const TOMORROW =
      tomorrowDate.getFullYear() +
      '' +
      (tomorrowDate.getMonth() + 1).toString().padStart(2, '0') +
      '' +
      tomorrowDate.getDate().toString().padStart(2, '0')
    const tomorrow =
      tomorrowDate.getFullYear() +
      '년 ' +
      (tomorrowDate.getMonth() + 1).toString().padStart(2, '0') +
      '월 ' +
      tomorrowDate.getDate().toString().padStart(2, '0') +
      '일'

    //모래
    const theDayAfterTomorrowDate = new Date(currentDate.getTime())
    theDayAfterTomorrowDate.setDate(theDayAfterTomorrowDate.getDate() + 2)
    const THEDAYAFTERTOMORROW =
      theDayAfterTomorrowDate.getFullYear() +
      '' +
      (theDayAfterTomorrowDate.getMonth() + 1).toString().padStart(2, '0') +
      '' +
      theDayAfterTomorrowDate.getDate().toString().padStart(2, '0')
    const dayAfter =
      theDayAfterTomorrowDate.getFullYear() +
      '년 ' +
      (theDayAfterTomorrowDate.getMonth() + 1).toString().padStart(2, '0') +
      '월 ' +
      theDayAfterTomorrowDate.getDate().toString().padStart(2, '0') +
      '일'
    //글피
    const theTwoDayAfterTomorrowDate = new Date(currentDate.getTime())
    theTwoDayAfterTomorrowDate.setDate(theTwoDayAfterTomorrowDate.getDate() + 3)

    const HOUR =
      new Date().getHours() < '02'
        ? '23'
        : new Date().getHours() < '05'
        ? '02'
        : new Date().getHours() < '08'
        ? '05'
        : new Date().getHours() < '11'
        ? '08'
        : new Date().getHours() < '14'
        ? '11'
        : new Date().getHours() < '17'
        ? '14'
        : new Date().getHours() < '20'
        ? '17'
        : new Date().getHours() < '23'
        ? '20'
        : new Date().getHours()
    const MINUTES = new Date().getMinutes() < '10' ? '00' : '10'
    let DAYTIME = `${HOUR}${MINUTES}`

    const nowHour =
      currentDate.getHours() < 10 ? '0' + currentDate.getHours() : currentDate.getHours()
    const nowMinutes =
      currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes()

    //00시부터 00시10분까지 전날 날짜로..
    if (DDAY && `${nowHour}${nowMinutes}` > '0000' && `${nowHour}${nowMinutes}` < '0015') {
      const theDayBeforeDate = new Date(currentDate.getTime())
      theDayBeforeDate.setDate(theDayBeforeDate.getDate() - 1)
      const theDayBefore =
        theDayBeforeDate.getFullYear() +
        '' +
        (theDayBeforeDate.getMonth() + 1).toString().padStart(2, '0') +
        '' +
        theDayBeforeDate.getDate().toString().padStart(2, '0')
      DDAY = theDayBefore
    } else {
      DDAY
    }

    console.log(DAYTIME)
    const fcstTime = ref([]) //예보시간
    const temperature = reactive([]) //기온
    const windDirection = reactive([]) // 풍향
    const windPower = reactive([]) // 풍속
    const cloudStatus = reactive([]) // 구름상태
    const precipitation = reactive([]) //강수형태
    const perRainfall = reactive([]) // 강수 확률
    const waveHeight = reactive([]) // 파고
    const rainfall = reactive([]) // 1시간 강수량
    const humidity = reactive([]) //습도
    const snowHeight = reactive([]) // 1시간 적설량
    const isDataLoaded = ref(false)
    function dfs_xy_conv(code, v1, v2) {
      const DEGRAD = Math.PI / 180.0
      const RADDEG = 180.0 / Math.PI

      var re = RE / GRID
      var slat1 = SLAT1 * DEGRAD
      var slat2 = SLAT2 * DEGRAD
      var olon = OLON * DEGRAD
      var olat = OLAT * DEGRAD

      var sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5)
      sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn)
      var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5)
      sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn
      var ro = Math.tan(Math.PI * 0.25 + olat * 0.5)
      ro = (re * sf) / Math.pow(ro, sn)
      var rs = {}

      if (code == 'toXY') {
        rs['lat'] = v1
        rs['lng'] = v2
        var ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5)
        ra = (re * sf) / Math.pow(ra, sn)
        var theta = v2 * DEGRAD - olon
        if (theta > Math.PI) theta -= 2.0 * Math.PI
        if (theta < -Math.PI) theta += 2.0 * Math.PI
        theta *= sn
        rs['x'] = Math.floor(ra * Math.sin(theta) + XO + 0.5)
        rs['y'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5)
      } else {
        rs['x'] = v1
        rs['y'] = v2
        var xn = v1 - XO
        var yn = ro - v2 + YO
        ra = Math.sqrt(xn * xn + yn * yn)
        if (sn < 0.0) -ra
        var alat = Math.pow((re * sf) / ra, 1.0 / sn)
        alat = 2.0 * Math.atan(alat) - Math.PI * 0.5

        if (Math.abs(xn) <= 0.0) {
          theta = 0.0
        } else {
          if (Math.abs(yn) <= 0.0) {
            theta = Math.PI * 0.5
            if (xn < 0.0) -theta
          } else theta = Math.atan2(xn, yn)
        }
        var alon = theta / sn + olon
        rs['lat'] = alat * RADDEG
        rs['lng'] = alon * RADDEG
      }
      return rs
    }

    const fetchWeather = async (lat, lon) => {
      const convertedCoords = dfs_xy_conv('toXY', lat, lon)
      const nx = ref(convertedCoords.x)
      const ny = ref(convertedCoords.y)
      //단기 예보 - 0500시 발표
      const VFCST = 'getVilageFcst'
      //초단기 예보 조회
      const API_KEY = ref(import.meta.env.VITE_ENCODING_KEY)
      const URL = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${VFCST}?serviceKey=`
      const URL_TYPE = `&numOfRows=1000&dataType=json&pageNo=1&base_date=${DDAY}&base_time=${DAYTIME}&nx=${nx.value}&ny=${ny.value}`
      console.log(DDAY)
      try {
        const response = await fetch(URL + API_KEY.value + URL_TYPE)
        const data = await response.json()
        const weatherItem = data.response.body
        const foreCastItem = weatherItem.items.item.filter((items) => items.fcstDate !== DDAY)
        const tomorrowFcstItems = foreCastItem.filter((item) => item.fcstDate === TOMORROW)
        const fcstTimeCont = tomorrowFcstItems.map((item) => item.fcstTime.substring(0, 2) + '시')
        const fcstTimeData = [...new Set(fcstTimeCont)]
        fcstTime.value = fcstTimeData
        const theDayAfterFcstItems = foreCastItem.filter(
          (item) => item.fcstDate === THEDAYAFTERTOMORROW
        )

        const fcstFilter = (fcst) => {
          fcst.map((item) => {
            // 1시간 기온
            if (item.category === 'TMP') {
              temperature.push(item.fcstValue)
            }
            // 풍향
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
            //구름상태
            if (item.category === 'SKY' && item.fcstValue <= 5) {
              cloudStatus.push('적음')
            } else if (item.category === 'SKY' && item.fcstValue >= 6 && item.fcstValue <= 8) {
              cloudStatus.push('구름많음')
            } else if (item.category === 'SKY' && item.fcstValue >= 9 && item.fcstValue <= 10) {
              cloudStatus.push('흐림')
            }
            //강수형태
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
            //강수확률
            if (item.category === 'POP') {
              perRainfall.push(item.fcstValue)
            }
            //파고
            if (item.category === 'WAV') {
              waveHeight.push(item.fcstValue)
            }
            // 1시간 강수량
            if (item.category === 'PCP') {
              rainfall.push(item.fcstValue)
            }
            //습도
            if (item.category === 'REH') {
              humidity.push(item.fcstValue)
            }
            //1시간 신적설
            if (item.category === 'SNO') {
              snowHeight.push(item.fcstValue)
            }
          })
        }

        fcstFilter(tomorrowFcstItems)
        fcstFilter(theDayAfterFcstItems)
        isDataLoaded.value = true
      } catch (err) {
        console.log(err)
      }
    }

    const applyClass = () => {
      if (isDataLoaded.value) {
        const tempCont = document.querySelectorAll('.graph-cont')
        const tempNum = document.querySelectorAll('.tempNum')

        // tempCont.forEach((cont) => cont.classList.add('bg-blue'))
        tempNum.forEach((item, index) => {
          const temperature = parseInt(item.innerHTML)
          if (temperature < 21) {
            tempCont[index].classList.add('bg-blue')
            tempCont[index].style.height = temperature + 50 + '%'
          } else if (temperature >= 21 && temperature <= 25) {
            tempCont[index].classList.add('bg-green')
            tempCont[index].style.height = temperature + 50 + '%'
          } else if (temperature > 25) {
            tempCont[index].classList.add('bg-red')
            tempCont[index].style.height = temperature + 50 + '%'
          }
        })
      }
      return false
    }

    onMounted(async () => {
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
      temperature,
      windDirection,
      windPower,
      cloudStatus,
      precipitation,
      perRainfall,
      waveHeight,
      rainfall,
      humidity,
      snowHeight,
      tomorrow,
      dayAfter,
      applyClass
    }
  }
}
</script>

<template>
  <v-container class="dayafter overflow-auto pt-0">
    <v-card elevation="5">
      <v-list>
        <v-card-title>
          <h2>{{ tomorrow }}</h2>
        </v-card-title>
        <v-container class="d-flex overflow-auto">
          <v-card v-for="(time, index) in fcstTime" :key="time" min-width="50" min-height="100">
            <v-row no-gutters>
              <v-col class="" cols="12">
                <div class="graph-cont" :class="applyClass()" ref="graphCont">
                  <div class="temp-cont">
                    <p class="tempNum">{{ temperature[index].slice(0, 24) }}</p>
                    <span>{{ `&#8451;` }}</span>
                  </div>
                  <p>
                    {{ fcstTime[index] }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
        <v-container class="d-flex">
          <v-card v-for="(time, index) in fcstTime" :key="time" min-width="250" elevation="3">
            <v-list>
              <v-list-item>
                <v-card-title>
                  <h2>{{ time }}</h2>
                </v-card-title>
                <v-card-text>
                  <p class="temp">
                    <v-icon v-if="temperature[index] > 25" color="red" icon>
                      mdi-thermometer
                    </v-icon>
                    <v-icon
                      v-else-if="temperature[index] <= 24 || temperature[index] >= 21"
                      color="green"
                      icon
                    >
                      mdi-thermometer
                    </v-icon>
                    <v-icon v-else-if="temperature[index] > 21" color="blue" icon>
                      mdi-thermometer
                    </v-icon>
                    {{ temperature.slice(0, 24)[index] + `&deg;` }}
                  </p>
                  <p class="precipit">
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
                    {{ precipitation[index].slice(0, 24) }}
                  </p>
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
                    ></v-icon>
                    {{ '습도 : ' + humidity[index].slice(0, 24) + '%' }}
                  </p>
                  <p class="cloud">
                    <v-icon
                      v-if="cloudStatus[index] === '적음'"
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
                    {{ '구름량 : ' + cloudStatus[index].slice(0, 24) }}
                  </p>

                  <p class="per-rain">
                    <v-icon
                      color="blue-lighten-2"
                      icon="mdi:mdi-weather-rainy"
                      class="weather-icon mr-1"
                    ></v-icon>
                    {{ '강수확률 : ' + perRainfall[index].slice(0, 24) + '%' }}
                  </p>
                  <p class="rain-hour">
                    <v-icon
                      color="blue-lighten-2"
                      icon="mdi:mdi-weather-rainy"
                      class="weather-icon mr-1"
                    ></v-icon>

                    {{ '시간당 강수량 : ' + rainfall[index].slice(0, 24) }}
                  </p>
                  <p class="wave-height">
                    <small>
                      <v-icon color="cyan-darken-3" icon="mdi:mdi-waves"></v-icon>
                      {{ '파고 : ' + waveHeight[index].slice(0, 24) + 'M' }}
                    </small>
                  </p>
                  <p class="wind-dir">
                    <small>
                      <v-icon color="orange" icon="mdi:mdi-windsock"></v-icon>
                      {{ '풍향 : ' + windDirection[index].slice(0, 24) }}
                    </small>
                  </p>
                  <p class="wind-po">
                    <small>
                      <v-icon color="blue-darken-3" icon="mdi:mdi-weather-windy"></v-icon>
                      {{ '풍속 : ' + windPower[index].slice(0, 24) }}
                    </small>
                  </p>
                  <p class="snow-hour">
                    <small>
                      <v-icon
                        color="blue-grey-darken-1"
                        icon="mdi:mdi-weather-snowy"
                        class="weather-icon"
                      ></v-icon>
                      {{ '시간당 적설량 : ' + snowHeight[index].slice(0, 24) }}
                    </small>
                  </p>
                </v-card-text>
              </v-list-item>
            </v-list>
          </v-card>
        </v-container>
      </v-list>
      <v-list>
        <v-card-title>
          <h2>{{ dayAfter }}</h2>
        </v-card-title>
        <v-container class="d-flex overflow-auto">
          <v-card v-for="(time, index) in fcstTime" :key="time" min-width="50" min-height="100">
            <v-row no-gutters>
              <v-col class="" cols="12">
                <div class="graph-cont" :class="applyClass()" ref="graphCont">
                  <div class="temp-cont">
                    <p class="tempNum">{{ temperature.slice(24, 48)[index] }}</p>
                    <span>{{ `&#8451;` }}</span>
                  </div>
                  <p>
                    {{ fcstTime[index] }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
        <v-container class="d-flex">
          <v-card v-for="(time, index) in fcstTime" :key="time" min-width="250" elevation="3">
            <v-list>
              <v-list-item>
                <v-card-title>
                  <h2>{{ time }}</h2>
                </v-card-title>
                <v-card-text>
                  <p class="temp">
                    <v-icon v-if="temperature[index] > 25" color="red" icon>
                      mdi-thermometer
                    </v-icon>
                    <v-icon
                      v-else-if="temperature[index] <= 24 || temperature[index] >= 21"
                      color="green"
                      icon
                    >
                      mdi-thermometer
                    </v-icon>
                    <v-icon v-else-if="temperature[index] > 21" color="blue" icon>
                      mdi-thermometer
                    </v-icon>
                    {{ temperature.slice(24, 48)[index] + `&deg;` }}
                  </p>
                  <p class="precipit">
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
                    {{ precipitation.slice(24, 48)[index] }}
                  </p>
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
                    ></v-icon>
                    {{ '습도 : ' + humidity.slice(24, 48)[index] + '%' }}
                  </p>
                  <p class="cloud">
                    <v-icon
                      v-if="cloudStatus[index] === '적음'"
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
                    {{ '구름량 : ' + cloudStatus.slice(24, 48)[index] }}
                  </p>

                  <p class="per-rain">
                    <v-icon
                      color="blue-lighten-2"
                      icon="mdi:mdi-weather-rainy"
                      class="weather-icon mr-1"
                    ></v-icon>
                    {{ '강수확률 : ' + perRainfall.slice(24, 48)[index] + '%' }}
                  </p>
                  <p class="rain-hour">
                    <v-icon
                      color="blue-lighten-2"
                      icon="mdi:mdi-weather-rainy"
                      class="weather-icon mr-1"
                    ></v-icon>

                    {{ '시간당 강수량 : ' + rainfall.slice(24, 48)[index] }}
                  </p>
                  <p class="wave-height">
                    <small>
                      <v-icon color="cyan-darken-3" icon="mdi:mdi-waves"></v-icon>
                      {{ '파고 : ' + waveHeight.slice(24, 48)[index] + 'M' }}
                    </small>
                  </p>
                  <p class="wind-dir">
                    <small>
                      <v-icon color="orange" icon="mdi:mdi-windsock"></v-icon>
                      {{ '풍향 : ' + windDirection.slice(24, 48)[index] }}
                    </small>
                  </p>
                  <p class="wind-po">
                    <small>
                      <v-icon color="blue-darken-3" icon="mdi:mdi-weather-windy"></v-icon>
                      {{ '풍속 : ' + windPower.slice(24, 48)[index] }}
                    </small>
                  </p>
                  <p class="snow-hour">
                    <small>
                      <v-icon
                        color="blue-grey-darken-1"
                        icon="mdi:mdi-weather-snowy"
                        class="weather-icon"
                      ></v-icon>
                      {{ '시간당 적설량 : ' + snowHeight.slice(24, 48)[index] }}
                    </small>
                  </p>
                </v-card-text>
              </v-list-item>
            </v-list>
          </v-card>
        </v-container>
      </v-list>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
.dayafter {
  .graph-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 13px;
    & > div {
      display: flex;
      margin-top: 20px;
      & > span {
        margin-left: 2px;
      }
    }
    p:nth-child(2) {
      position: absolute;
      bottom: 5px;
    }
  }
  .temp-cont {
    display: flex;
    align-items: center;
  }
}
</style>
