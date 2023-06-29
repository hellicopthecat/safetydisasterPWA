<script>
import { ref, onMounted } from 'vue'
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

    const YEAR = new Date().getFullYear()
    const MONTH =
      new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1
    const DATE = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()
    const HOUR = new Date().getMinutes() < '29' ? new Date().getHours() - 1 : new Date().getHours()
    const MINUTES = new Date().getMinutes() < '29' ? '40' : '00'
    const DAYTIME = `${HOUR}${MINUTES}`
    const DATE_TIME = YEAR + MONTH + DATE

    const precipitation = ref('') //강수형태
    const humidity = ref('') //습도
    const rainfall = ref('') //강수량
    const temperature = ref('') //기온
    const windDirection = ref('') // 풍향
    const windPower = ref('') // 풍속

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

      //초단기 실황 - 정시 발표
      const NCST = 'getUltraSrtNcst'

      // 참고 https://yogiweather.netlify.app/
      // https://eddiekwon.github.io/swift/2018/10/19/WeatherAPI/

      //초단기 예보 조회
      const API_KEY = ref(import.meta.env.VITE_ENCODING_KEY)
      const URL = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${NCST}?serviceKey=`
      const URL_TYPE = `&numOfRows=1000&dataType=json&pageNo=1&base_date=${DATE_TIME}&base_time=${DAYTIME}&nx=${nx.value}&ny=${ny.value}`
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
          } else if (item.category === 'RN1' && 1 < item.obsrValue < 30) {
            rainfall.value = '1.0mm ~ 29.9mm'
          } else if (item.category === 'RN1' && 30 < item.obsrValue < 50) {
            rainfall.value = '30.0mm ~ 50.0mm'
          } else if (item.category === 'RN1' && 50 < item.obsrValue) {
            rainfall.value = '50.0mm 이상'
          }

          if (item.category === 'T1H') {
            temperature.value = item.obsrValue
          }
          if (item.category === 'VEC' && 0 < item.obsrValue < 45) {
            windDirection.value = '북북동'
          } else if (item.category === 'VEC' && 45 < item.obsrValue < 90) {
            windDirection.value = '북동동'
          } else if (item.category === 'VEC' && 90 < item.obsrValue < 135) {
            windDirection.value = '동남동'
          } else if (item.category === 'VEC' && 135 < item.obsrValue < 180) {
            windDirection.value = '남동남'
          } else if (item.category === 'VEC' && 180 < item.obsrValue < 225) {
            windDirection.value = '남남서'
          } else if (item.category === 'VEC' && 225 < item.obsrValue < 270) {
            windDirection.value = '남서서'
          } else if (item.category === 'VEC' && 270 < item.obsrValue < 315) {
            windDirection.value = '서북서'
          } else if (item.category === 'VEC' && 315 < item.obsrValue < 360) {
            windDirection.value = '북서북'
          }
          if (item.category === 'WSD' && item.obsrValue < 4) {
            windPower.value = `약한 바람(${item.obsrValue}m/s)`
          } else if (item.category === 'WSD' && 4 < item.obsrValue < 9) {
            windPower.value = `약한 강한 바람(${item.obsrValue}m/s)`
          } else if (item.category === 'WSD' && 9 < item.obsrValue < 14) {
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
<!-- <script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const fetchWeather = async (lat, lon) => {
      //초단기 예보 조회
      const API_KEY = ref(import.meta.env.VITE_WEATHER_KEY)
      const URL = `https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lon}&lang=kr&appid=`
      const URL_TYPE = `&units=metric`
      try {
        const response = await fetch(URL + API_KEY.value + URL_TYPE)
        const data = await response.json()
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }

    onMounted(() => {
      function whichWhere(position) {
        const LAT = position.coords.latitude
        const LON = position.coords.longitude
        console.log(LAT)
        console.log(LON)
        fetchWeather(LAT, LON)
      }
      function failureWhere() {
        alert('위치 요청을 거부하셨거나 위치를 불러오는데 실패하였습니다.')
        fetchWeather(37.5518911, 126.9917937)
      }
      navigator.geolocation.getCurrentPosition(whichWhere, failureWhere)
    })
  }
}
</script> -->

<template>
  <div>
    <h1>
      날씨 : {{ precipitation }} <small> 강수량 : {{ rainfall }}</small>
    </h1>
    <h1>습도 : {{ humidity }}%</h1>
    <h1>기온 : {{ temperature }}℃</h1>
    <h1>풍향 : {{ windDirection }} {{ windPower }}</h1>
  </div>
</template>
