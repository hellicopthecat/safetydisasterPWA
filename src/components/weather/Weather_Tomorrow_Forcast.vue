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
        : null
    const MINUTES = new Date().getMinutes() < '10' ? '00' : '10'
    const DAYTIME = `${HOUR}${MINUTES}`
    console.log(DAYTIME)
    const DATE_TIME = YEAR + MONTH + DATE
    console.log(DATE_TIME)
    // const fcstTime = reactive([]) //예보시간
    // const lightening = reactive([]) //낙뢰
    // const precipitation = reactive([]) //강수형태
    // const rainfall = reactive([])
    // const cloudStatus = reactive([])
    // const temperature = reactive([]) //기온
    // const humidity = reactive([]) //습도
    // const windDirection = reactive([]) // 풍향
    // const windPower = reactive([]) // 풍속

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
      const URL_TYPE = `&numOfRows=1000&dataType=json&pageNo=1&base_date=${DATE_TIME}&base_time=${DAYTIME}&nx=${nx.value}&ny=${ny.value}`

      try {
        const response = await fetch(URL + API_KEY.value + URL_TYPE)
        const data = await response.json()
        const weatherItem = data.response.body
        const forCastItem = weatherItem.items.item.filter((items) => items.fcstDate !== DATE_TIME)
        console.log(forCastItem)
        // weatherItem.items.item.map((item) => {
        // console.log(item)
        //   if (item.category === 'LGT') {
        //     lightening.push(item.fcstValue)
        //   }
        //   if (item.category === 'PTY' && item.fcstValue === '0') {
        //     precipitation.push('대체로 맑음')
        //   } else if (item.category === 'PTY' && item.fcstValue === '1') {
        //     precipitation.push('비')
        //   } else if (item.category === 'PTY' && item.fcstValue === '2') {
        //     precipitation.push('비/눈')
        //   } else if (item.category === 'PTY' && item.fcstValue === '3') {
        //     precipitation.push('눈')
        //   } else if (item.category === 'PTY' && item.fcstValue === '4') {
        //     precipitation.push('소나기')
        //   } else if (item.category === 'PTY' && item.fcstValue === '5') {
        //     precipitation.push('빗방울')
        //   } else if (item.category === 'PTY' && item.fcstValue === '6') {
        //     precipitation.push('빗방울 눈날림')
        //   } else if (item.category === 'PTY' && item.fcstValue === '7') {
        //     precipitation.push('눈날림')
        //   }
        //   if (item.category === 'RN1' && item.fcstValue === '강수없음') {
        //     rainfall.push(item.fcstValue)
        //   } else if (item.category === 'RN1' && item.fcstValue < 1) {
        //     rainfall.push(item.fcstValue)
        //   } else if (item.category === 'RN1' && 1 < item.fcstValue < 30) {
        //     rainfall.push(item.fcstValue)
        //   } else if (item.category === 'RN1' && 30 < item.fcstValue < 50) {
        //     rainfall.push(item.fcstValue)
        //   } else if (item.category === 'RN1' && 50 < item.fcstValue) {
        //     rainfall.push(item.fcstValue)
        //   }
        //   if (item.category === 'SKY' && item.fcstValue <= 5) {
        //     cloudStatus.push('맑음')
        //   } else if (item.category === 'SKY' && 6 <= item.fcstValue <= 8) {
        //     cloudStatus.push('구름많음')
        //   } else if (item.category === 'SKY' && 9 <= item.fcstValue <= 10) {
        //     cloudStatus.push('흐림')
        //   }
        //   if (item.category === 'T1H') {
        //     temperature.push(item.fcstValue)
        //     fcstTime.push(item.fcstTime)
        //   }
        //   if (item.category === 'REH') {
        //     humidity.push(item.fcstValue)
        //   }
        //   if (item.category === 'VEC' && 0 < item.fcstValue < 45) {
        //     windDirection.push('북북동')
        //   } else if (item.category === 'VEC' && 45 < item.fcstValue < 90) {
        //     windDirection.push('북동동')
        //   } else if (item.category === 'VEC' && 90 < item.fcstValue < 135) {
        //     windDirection.push('동남동')
        //   } else if (item.category === 'VEC' && 135 < item.fcstValue < 180) {
        //     windDirection.push('남동남')
        //   } else if (item.category === 'VEC' && 180 < item.fcstValue < 225) {
        //     windDirection.push('남남서')
        //   } else if (item.category === 'VEC' && 225 < item.fcstValue < 270) {
        //     windDirection.push('남서서')
        //   } else if (item.category === 'VEC' && 270 < item.fcstValue < 315) {
        //     windDirection.push('서북서')
        //   } else if (item.category === 'VEC' && 315 < item.fcstValue < 360) {
        //     windDirection.push('북서북')
        //   }
        //   if (item.category === 'WSD' && item.fcstValue < 4) {
        //     windPower.push(`약한 바람(${item.fcstValue}m/s)`)
        //   } else if (item.category === 'WSD' && 4 < item.fcstValue < 9) {
        //     windPower.push(`약한 강한 바람(${item.fcstValue}m/s)`)
        //   } else if (item.category === 'WSD' && 9 < item.fcstValue < 14) {
        //     windPower.push(`강한 바람(${item.fcstValue}m/s)`)
        //   } else if (item.category === 'WSD' && 14 < item.fcstValue) {
        //     windPower.push(`매우 강한 바람(${item.fcstValue}m/s)`)
        //   }
        // })
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
      //   fcstTime,
      //   lightening,
      //   precipitation,
      //   rainfall,
      //   cloudStatus,
      //   temperature,
      //   humidity,
      //   windDirection,
      //   windPower
    }
  }
}
</script>

<template>
  <div></div>
</template>
