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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01003&serviceKey=`
    const headTitle = ref('호우 예보시 국민행동요령')
    const beforeHeavyRain = reactive([])
    const whenForecastHeavyRain = reactive([])
    const whileHeavyRain = reactive([])
    const afterHeavyRain = reactive([])

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
        const beforeHeavyRainAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '10') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        const whenForecastAction = reactive(
          Array.from(xmlItem).map((element) => {
            if (element.children.item(2).textContent === '20') {
              return element.children.item(0)
            }
          })
        ).filter((item) => item !== undefined && item.nodeName.includes('actRmks'))

        const whileHeavyRainAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '30') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        const afterHeavyRainAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '40') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )
        afterHeavyRain.pop()
        beforeHeavyRain.push(oneSubTitle[0], beforeHeavyRainAction)
        whenForecastHeavyRain.push(oneSubTitle[1], whenForecastAction)
        whileHeavyRain.push(oneSubTitle[2], whileHeavyRainAction)
        afterHeavyRain.push(oneSubTitle[3], afterHeavyRainAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,

      beforeHeavyRain,
      whenForecastHeavyRain,
      whileHeavyRain,
      afterHeavyRain
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>
          {{ beforeHeavyRain[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in beforeHeavyRain[1]" :key="whenBefore">
        {{ whenBefore.textContent }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>
          {{ whenForecastHeavyRain[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenForecast in whenForecastHeavyRain[1]" :key="whenForecast">
        {{ whenForecast.textContent }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>
          {{ whileHeavyRain[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenwhile in whileHeavyRain[1]" :key="whenwhile">
        {{ whenwhile.textContent }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ afterHeavyRain[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="drawn in afterHeavyRain[1]" :key="drawn">
        {{ drawn.textContent }}
      </v-card-text>
    </v-card>
  </v-container>
</template>
