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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01004&serviceKey=`
    const headTitle = ref('강풍 예보시 국민행동요령')
    const beforeStrongWind = reactive([])
    const whenStrongWind = reactive([])
    const whileStrongWind = reactive([])
    const afterStrongWind = reactive([])

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
        const beforeStrongWindAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '10') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        const whenAction = reactive(
          Array.from(xmlItem).map((element) => {
            if (element.children.item(2).textContent === '20') {
              return element.children.item(0)
            }
          })
        ).filter((item) => item !== undefined && item.nodeName.includes('actRmks'))

        const whileStrongWindAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '30') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        beforeStrongWind.push(oneSubTitle[0], beforeStrongWindAction)
        whenStrongWind.push(oneSubTitle[1], whenAction)
        whileStrongWind.push(oneSubTitle[2], whileStrongWindAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      beforeStrongWind,
      whenStrongWind,
      whileStrongWind,
      afterStrongWind
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
          {{ beforeStrongWind[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in beforeStrongWind[1]" :key="whenBefore">
        {{ whenBefore.textContent }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whenStrongWind[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="when in whenStrongWind[1]" :key="when">
        {{ when.textContent }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whileStrongWind[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenwhile in whileStrongWind[1]" :key="whenwhile">
        {{ whenwhile.textContent }}
      </v-card-text>
    </v-card>
  </v-container>
</template>
