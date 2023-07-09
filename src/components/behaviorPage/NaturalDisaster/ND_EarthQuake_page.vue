<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const API_URL = ref(import.meta.env.VITE_DISASTER_BEHAV_API_URL)
    const API_KEY = ref(import.meta.env.VITE_ENCODING_KEY)
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01011&serviceKey=`
    const headTitle = ref('지진 예보시 국민행동요령')
    const whenEarthQuake = reactive([])
    const whenEarthQuakeArea = reactive([])
    const prepareEarthQuake = reactive([])
    const escapeEarthQuake = reactive([])
    const escapePlaceEarthQuake = reactive([])
    const afterEarthQuake = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const response = await fetch(URL + API_KEY.value)
        const xmlText = await response.text()
        // XML 데이터 처리
        API_URL.value = xmlText
        let parseXml = new DOMParser()
        let xmlDoc = parseXml.parseFromString(API_URL.value, 'text/xml')
        const xmlItem = xmlDoc.querySelectorAll('item')
        // 서브 타이틀
        const pageSubTitleElement = xmlDoc.querySelectorAll('safetyCateNm3')
        const subTitle = Array.from(pageSubTitleElement).map((element) => element.textContent)
        const oneSubTitle = Array.from(new Set(subTitle))
        // 경보 별 행동사항
        const whenEarthQuakeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01011007') {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined)
        )
        const whenEarthQuakeAreaAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01011008') {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined)
        )
        const prepareEarthQuakeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01011009') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const prepareEarthQuakeImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01011009' &&
                element.children.item(1).tagName == 'contentsUrl'
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined)
        )
        const escapeEarthQuakeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01011010') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const escapteEarthQuakeImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01011010' &&
                element.children.item(1).tagName == 'contentsUrl'
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined)
        )
        const escapePlaceEarthQuakeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01011011') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const escaptePlaceEarthQuakeImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01011011' &&
                element.children.item(1).tagName == 'contentsUrl'
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined)
        )
        const afterEarthQuakeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01011012') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )

        whenEarthQuake.push(oneSubTitle[0], whenEarthQuakeAction)
        whenEarthQuakeArea.push(oneSubTitle[1], whenEarthQuakeAreaAction)
        prepareEarthQuake.push(
          oneSubTitle[2],
          prepareEarthQuakeAction,
          prepareEarthQuakeImg[0].textContent
        )
        escapeEarthQuake.push(oneSubTitle[3], escapeEarthQuakeAction, escapteEarthQuakeImg)
        escapePlaceEarthQuake.push(
          oneSubTitle[4],
          escapePlaceEarthQuakeAction,
          escaptePlaceEarthQuakeImg
        )
        afterEarthQuake.push(oneSubTitle[5], afterEarthQuakeAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenEarthQuake,
      whenEarthQuakeArea,
      prepareEarthQuake,
      escapeEarthQuake,
      escapePlaceEarthQuake,
      afterEarthQuake
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whenEarthQuake[0] }}</h3>
      </v-card-title>
      <v-row>
        <v-col v-for="imgSrc in whenEarthQuake[1]" :key="imgSrc" cols="6">
          <v-img :src="imgSrc.textContent" alt="지진 발생시 상황별 행동요령" min-width="220" />
        </v-col>
      </v-row>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whenEarthQuakeArea[0] }}</h3>
      </v-card-title>
      <v-row>
        <v-col v-for="imgSrc in whenEarthQuakeArea[1]" :key="imgSrc" cols="6">
          <v-img :src="imgSrc.textContent" alt="지진 발생시 장소별 행동요령" min-width="220" />
        </v-col>
      </v-row>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ prepareEarthQuake[0] }}</h3>
      </v-card-title>
      <v-img :src="prepareEarthQuake[2]" alt="지진대비" max-width="600" class="mx-auto" />
      <v-card-text>
        <p v-for="prepare in prepareEarthQuake[1]" :key="prepare">
          {{ prepare.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ escapeEarthQuake[0] }}</h3>
      </v-card-title>
      <v-row>
        <v-col v-for="escapeImg in escapeEarthQuake[2]" :key="escapeImg" cols="6" class="d-flex">
          <v-img :src="escapeImg.textContent" alt="" max-height="200" />
        </v-col>
      </v-row>
      <v-card-text>
        <p v-for="escape in escapeEarthQuake[1]" :key="escape">
          {{ escape.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ escapePlaceEarthQuake[0] }}</h3>
      </v-card-title>

      <v-row>
        <v-col
          v-for="escapePlaceImg in escapePlaceEarthQuake[2]"
          :key="escapePlaceImg"
          cols="6"
          class="d-flex justify-center"
        >
          <v-img :src="escapePlaceImg.textContent" alt="" max-width="300" class="" />
        </v-col>
      </v-row>

      <v-card-text>
        <p v-for="escapePlace in escapePlaceEarthQuake[1]" :key="escapePlace">
          {{ escapePlace.textContent }}
        </p>
      </v-card-text>
    </v-card>
    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ afterEarthQuake[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="after in afterEarthQuake[1]" :key="after">
          {{ after.textContent }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
