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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01008&serviceKey=`
    const headTitle = ref('황사 예보시 국민행동요령')
    const beforeYellowDust = reactive([])
    const whileYellowDust = reactive([])
    const afterYellowDust = reactive([])
    const knowledgeYellowDust = reactive([])

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
        const beforeYellowDustAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '10') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        const whileYellowDustAction = reactive(
          Array.from(xmlItem).map((element) => {
            if (element.children.item(2).textContent === '20') {
              return element.children.item(0)
            }
          })
        ).filter((item) => item !== undefined && item.nodeName.includes('actRmks'))

        const afterYellowDustAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '30') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        const knowledgeYellowDustAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '40') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )
        knowledgeYellowDustAction.pop()

        beforeYellowDust.push(oneSubTitle[0], beforeYellowDustAction)
        whileYellowDust.push(oneSubTitle[1], whileYellowDustAction)
        afterYellowDust.push(oneSubTitle[2], afterYellowDustAction)
        knowledgeYellowDust.push(oneSubTitle[3], knowledgeYellowDustAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      beforeYellowDust,
      whileYellowDust,
      afterYellowDust,
      knowledgeYellowDust
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
          {{ beforeYellowDust[0] }}
        </h3>
      </v-card-title>
      <v-card-text v-for="whenBefore in beforeYellowDust[1]" :key="whenBefore">
        <p>
          {{ whenBefore.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whileYellowDust[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="whileYellowDust in whileYellowDust[1]" :key="whileYellowDust">
        <p>
          {{ whileYellowDust.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ afterYellowDust[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="whenwhile in afterYellowDust[1]" :key="whenwhile">
        <p>
          {{ whenwhile.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ knowledgeYellowDust[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="drawn in knowledgeYellowDust[1]" :key="drawn">
        <p>
          {{ drawn.textContent }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss"></style>
