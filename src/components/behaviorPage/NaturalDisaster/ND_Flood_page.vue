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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01002&serviceKey=`
    const headTitle = ref('홍수 예보시 국민행동요령')
    const beforeFlood = reactive([])
    const whenWorryFlood = reactive([])
    const afterFlood = reactive([])
    const whenDrawn = reactive([])
    const imgUrl = ref('')

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
        const beforeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '10') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        const whenWorryAction = reactive(
          Array.from(xmlItem).map((element) => {
            if (element.children.item(2).textContent === '20') {
              return element.children.item(0)
            }
          })
        ).filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        const afterAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '30') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )
        const whenDrawnAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '40') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )
        beforeFlood.push(oneSubTitle[0], beforeAction)
        whenWorryFlood.push(oneSubTitle[1], whenWorryAction)
        afterFlood.push(oneSubTitle[2], afterAction)
        whenDrawn.push(oneSubTitle[3], whenDrawnAction)
        // 행동요령 비디오
        const img = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(1).nodeName === 'contentsUrl')
                return element.children.item(1).textContent
            })
            .filter((item) => item !== undefined)
        )
        imgUrl.value = img
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      beforeFlood,
      whenWorryFlood,
      afterFlood,
      whenDrawn,
      imgUrl
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-container class="d-flex justify-center">
      <v-container v-for="img in imgUrl" :key="img">
        <v-img :src="img" alt="홍수 예보시 행동요령" max-width="400" />
      </v-container>
    </v-container>
    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>
          {{ beforeFlood[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in beforeFlood[1]" :key="whenBefore">
        {{ whenBefore.textContent }}
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whenWorryFlood[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenWorry in whenWorryFlood[1]" :key="whenWorry">
        {{ whenWorry.textContent }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ afterFlood[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenAfter in afterFlood[1]" :key="whenAfter">
        {{ whenAfter.textContent }}
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whenDrawn[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="drawn in whenDrawn[1]" :key="drawn">
        {{ drawn.textContent }}
      </v-card-text>
    </v-card>
  </v-container>
</template>
