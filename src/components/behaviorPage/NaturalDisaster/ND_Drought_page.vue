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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01010&serviceKey=`
    const headTitle = ref('가뭄 예보시 국민행동요령')
    const whenDrought = reactive([])
    const whileDrought = reactive([])
    const droughtFamer = reactive([])
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
        const whenDroughtAction = reactive(
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

        const droughtFamerAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '30') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        whenDrought.push(oneSubTitle[0], whenDroughtAction)
        whileDrought.push(oneSubTitle[1], whenForecastAction)
        droughtFamer.push(oneSubTitle[2], droughtFamerAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenDrought,
      whileDrought,
      droughtFamer
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>
          {{ whenDrought[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in whenDrought[1]" :key="whenBefore">
        {{ whenBefore.textContent }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whileDrought[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenForecast in whileDrought[1]" :key="whenForecast">
        {{ whenForecast.textContent }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-container>
        <v-list>
          <v-card-title>
            <h3>
              {{ droughtFamer[1][0].textContent }}
            </h3>
          </v-card-title>
          <v-card-text>
            <p>{{ droughtFamer[1][1].textContent }}</p>
            <p>{{ droughtFamer[1][2].textContent }}</p>
          </v-card-text>
          <v-card-title>
            <h3>{{ droughtFamer[1][3].textContent }}</h3>
          </v-card-title>
          <v-card-text>
            <p>{{ droughtFamer[1][4].textContent }}</p>
            <p>{{ droughtFamer[1][5].textContent }}</p>
            <p>{{ droughtFamer[1][6].textContent }}</p>
            <p>{{ droughtFamer[1][7].textContent }}</p>
            <p>{{ droughtFamer[1][8].textContent }}</p>
          </v-card-text>
        </v-list>
      </v-container>
    </v-card>
  </v-container>
</template>
