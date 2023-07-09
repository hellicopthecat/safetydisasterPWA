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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01005&serviceKey=`
    const headTitle = ref('대설(폭설) 예보시 국민행동요령')
    const beforeHeavySnow = reactive([])
    const whenForecastHeavySnow = reactive([])
    const whileHeavySnow = reactive([])
    const afterHeavySnow = reactive([])

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
        const beforeHeavySnowAction = reactive(
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

        const whileHeavySnowAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '30') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        const afterHeavySnowAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '40') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )
        afterHeavySnowAction.pop()

        beforeHeavySnow.push(oneSubTitle[0], beforeHeavySnowAction)
        whenForecastHeavySnow.push(oneSubTitle[1], whenForecastAction)
        whileHeavySnow.push(oneSubTitle[2], whileHeavySnowAction)
        afterHeavySnow.push(oneSubTitle[3], afterHeavySnowAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      beforeHeavySnow,
      whenForecastHeavySnow,
      whileHeavySnow,
      afterHeavySnow
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
          {{ beforeHeavySnow[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in beforeHeavySnow[1]" :key="whenBefore">
        {{ whenBefore.textContent }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whenForecastHeavySnow[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenForecast in whenForecastHeavySnow[1]" :key="whenForecast">
        {{ whenForecast.textContent }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whileHeavySnow[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenwhile in whileHeavySnow[1]" :key="whenwhile">
        {{ whenwhile.textContent }}
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ afterHeavySnow[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="drawn in afterHeavySnow[1]" :key="drawn">
        {{ drawn.textContent }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss">
.typoon {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div {
    h3 {
      font-size: 30px;
    }
  }
}
</style>
