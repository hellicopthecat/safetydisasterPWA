<script>
import { ref } from 'vue'
export default {
  name: 'KakaoMap',
  data() {
    return {
      map: null,
      geocoder: null
    }
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap()
    } else {
      const API_KEY = ref(import.meta.env.VITE_KAKAOMAP_KEY)
      const script = document.createElement('script')
      script.onload = () => kakao.maps.load(this.initMap) // 스크립트가 로딩이 되면 띄워주는 처리
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${API_KEY.value}&libraries=services`
      document.head.appendChild(script)
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById('map')
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 2
      }
      this.map = new kakao.maps.Map(container, options)
      this.geocoder = new kakao.maps.services.Geocoder()
      // 지도에 교통정보를 표시하도록 지도타입을 추가합니다
      this.map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            const nowPosition = new kakao.maps.LatLng(lat, lon) //마커 표시 위치
            this.displayMarker(nowPosition)
          }.bind(this)
        )
      } else {
        const errorPosition = new kakao.maps.LatLng(33.450701, 126.570667)
        this.displayMarker(errorPosition)
      }
      this.showCurrentSpot()
    },
    // 마커 표시
    displayMarker(locPosition) {
      //마커 생성
      const marker = new kakao.maps.Marker({
        map: this.map,
        position: locPosition
      })
      // 지도 중심좌표를 접속위치로 변경합니다
      this.map.panTo(locPosition)
      marker.setMap(this.map)
    },
    panTo() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          const nowPosition = new kakao.maps.LatLng(lat, lon)
          this.map.panTo(nowPosition)
        })
      }
    },
    showCurrentSpot() {
      // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
      kakao.maps.event.addListener(this.map, 'idle', () => {
        this.searchAddrFromCoords(this.map.getCenter(), this.displayCenterInfo)
      })
      this.searchAddrFromCoords(this.map.getCenter(), this.displayCenterInfo)
    },
    searchAddrFromCoords(coords, callback) {
      // 좌표로 행정동 주소 정보를 요청합니다
      this.geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback)
    },
    // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
    displayCenterInfo(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const infoDiv = document.getElementById('centerAddr')
        for (var i = 0; i < result.length; i++) {
          // 행정동의 region_type 값은 'H' 이므로
          if (result[i].region_type === 'H') {
            infoDiv.innerHTML = result[i].address_name
            break
          }
        }
      }
    }
  }
}
</script>

<template>
  <div class="map-cont">
    <div id="map"></div>
    <div class="map-info">
      <h2 id="centerAddr"></h2>
      <button class="px-3 py-2" @click="panTo">현위치로</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.map-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  .map-info {
    position: relative;
    h2 {
      text-align: right;
      font-size: 18px;
    }
    button {
      position: absolute;
      right: 0;
      background-color: cornflowerblue;
      color: white;
      font-size: 13px;
    }
  }
}
#map {
  width: 200px;
  height: 200px;
  border-radius: 25px;
}
</style>
