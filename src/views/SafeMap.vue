<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      map: null,
      geocoder: null,
      mapTypeControl: null,
      zoomControl: null,
      ps: null,
      infowindow: null,
      markers: [],
      keyword: '대피소',
      infoDiv: ''
    }
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.init()
    } else {
      const API_KEY = ref(import.meta.env.VITE_KAKAOMAP_KEY)
      const script = document.createElement('script')
      script.onload = () => kakao.maps.load(this.init)
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${API_KEY.value}&libraries=services`
      document.head.appendChild(script)
    }
  },
  methods: {
    init() {
      const container = document.getElementById('map') //지도를 담을 영역의 DOM 레퍼런스
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      }
      this.map = new kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
      container.style.width = '900px'
      container.style.height = '550px'
      this.map.relayout()
      // 주소-좌표 변환 객체를 생성합니다
      this.geocoder = new kakao.maps.services.Geocoder()
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            const nowPosition = new kakao.maps.LatLng(lat, lon) //마커 표시 위치
            this.displayMarker(nowPosition)
            this.showCurrentSpot()
            setTimeout(this.searchPlaces, 900)
          }.bind(this)
        )
      } else {
        const errorPosition = new kakao.maps.LatLng(33.450701, 126.570667)
        this.displayMarker(errorPosition)
      }
      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      this.zoomControl = new kakao.maps.ZoomControl()
      this.map.addControl(this.zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT)

      // 장소 검색 객체를 생성합니다
      this.ps = new kakao.maps.services.Places()

      // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
      this.infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
      // 키워드로 장소를 검색합니다
    },
    //////////////////////////////////////////////////
    // 키워드 검색을 요청하는 함수입니다
    searchPlaces() {
      const keyword = document.getElementById('keyword').value
      if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!')
        return false
      }
      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      this.ps.keywordSearch(this.infoDiv + keyword, this.placesSearchCB)
    },
    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        this.displayPlaces(data)

        // 페이지 번호를 표출합니다
        this.displayPagination(pagination)
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.')
        return
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.')
        return
      }
    },
    // 검색 결과 목록과 마커를 표출하는 함수입니다
    displayPlaces(places) {
      var listEl = document.getElementById('placesList'),
        menuEl = document.getElementById('menu_wrap'),
        fragment = document.createDocumentFragment(),
        bounds = new kakao.maps.LatLngBounds(),
        listStr = ''

      // 검색 결과 목록에 추가된 항목들을 제거합니다
      this.removeAllChildNods(listEl)

      // 지도에 표시되고 있는 마커를 제거합니다
      this.removeMarker()

      for (var i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시합니다
        var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
          marker = this.addMarker(placePosition, i),
          itemEl = this.getListItem(i, places[i]) // 검색 결과 항목 Element를 생성합니다

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition)

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        ;(function (marker, title) {
          // itemEl.onmouseover = function () {
          //   this.displayInfowindow(marker, title)
          // }
          // itemEl.onmouseout = function () {
          //   this.infowindow.close()
          // }
        })(marker, places[i].place_name)

        fragment.appendChild(itemEl)
      }

      // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
      listEl.appendChild(fragment)
      menuEl.scrollTop = 0

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      this.map.setBounds(bounds)
    },
    // 검색결과 항목을 Element로 반환하는 함수입니다
    getListItem(index, places) {
      var el = document.createElement('v-list-item'),
        itemStr =
          '<span class="markerbg marker_' +
          (index + 1) +
          '">' +
          '</span>' +
          '<v-container class="info d-flex flex-column mb-3">' +
          '<v-card >' +
          '<h4>' +
          (index + 1) +
          '. ' +
          places.place_name +
          '</h4>'

      if (places.road_address_name) {
        itemStr +=
          '<span class="font-weight-regular text-body-1">' +
          places.road_address_name +
          '</span>' +
          '<span class="jibun gray font-weight-regular text-body-1">' +
          places.address_name +
          '</span>'
      } else {
        itemStr +=
          '<span class="font-weight-regular text-body-1">' + places.address_name + '</span>'
      }

      itemStr +=
        '<span class="tel">' +
        places.phone +
        '</span>' +
        '</v-card>' +
        '</v-container>' +
        '<v-divider></v-divider>'

      el.innerHTML = itemStr
      el.className = 'item'

      return el
    },

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    addMarker(position, idx, title) {
      var imageSrc =
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
          spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage
        })

      marker.setMap(this.map) // 지도 위에 마커를 표출합니다
      this.markers.push(marker) // 배열에 생성된 마커를 추가합니다

      return marker
    },

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    removeMarker() {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null)
      }
      this.markers = []
    },

    // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
    displayPagination(pagination) {
      var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i

      // 기존에 추가된 페이지번호를 삭제합니다
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild)
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement('a')
        el.href = '#'
        el.innerHTML = i
        el.className = 'pa-1'

        if (i === pagination.current) {
          el.className = 'on'
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i)
            }
          })(i)
        }

        fragment.appendChild(el)
      }
      paginationEl.appendChild(fragment)
    },

    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
    // 인포윈도우에 장소명을 표시합니다
    displayInfowindow(marker, title) {
      var content = '<div style="padding:5px;z-index:1;">' + title + '</div>'

      this.infowindow.setContent(content)
      this.infowindow.open(this.map, marker)
    },

    // 검색결과 목록의 자식 Element를 제거하는 함수입니다
    removeAllChildNods(el) {
      while (el.hasChildNodes()) {
        el.removeChild(el.lastChild)
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
    displayCenterInfo(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        for (var i = 0; i < result.length; i++) {
          // 행정동의 region_type 값은 'H' 이므로
          if (result[i].region_type === 'H') {
            this.infoDiv = result[i].address_name

            break
          }
        }
      }
    },
    displayMarker(locPosition) {
      //마커 생성
      const marker = new kakao.maps.Marker({
        map: this.map,
        position: locPosition
      })
      // 지도 중심좌표를 접속위치로 변경합니다
      this.map.panTo(locPosition)
      marker.setMap(this.map)
    }
  }
}
</script>
<template>
  <v-container>
    <v-container class="mt-2 mb-0 pb-0">
      <h1 color="#393a40">주변 대피소 현황</h1>
    </v-container>
    <v-container class="d-flex align-center pt-0 mt-0">
      <v-container id="map" class="mr-10 elevation-10"></v-container>
      <v-card id="menu_wrap" class="bg-white" max-width="400" elevation="8">
        <v-container class="option">
          <v-sheet elevation="2">
            <v-form @submit.prevent="searchPlaces()">
              <v-text-field
                id="keyword"
                height="1"
                type="text"
                label="키워드"
                :value="keyword"
                :model-value="keyword"
                disabled
              ></v-text-field>
              <v-btn type="submit" color="#2d539a" class="text-white px-3 py-2 rounded">
                새로고침
              </v-btn>
            </v-form>
          </v-sheet>
        </v-container>
        <v-card elevation="8">
          <v-container>
            <v-card class="pa-2">
              <v-list id="placesList" max-height="300"></v-list>
            </v-card>
          </v-container>
          <v-container id="pagination" class="text-center"></v-container>
        </v-card>
      </v-card>
    </v-container>
  </v-container>
</template>

<style lang="scss" scoped>
#map {
}
#menu_wrap {
  .v-form {
    position: relative;
    .v-text-field {
      height: 60px;
    }
    .v-btn {
      position: absolute;
      right: 40px;
      bottom: 15px;
    }
  }
}
</style>
