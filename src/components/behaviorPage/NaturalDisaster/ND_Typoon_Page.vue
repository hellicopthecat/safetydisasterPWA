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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01001&serviceKey=`
    const headTitle = ref('태풍 예보시 국민행동요령')

    const beforeTypoon = reactive([])
    const whileTypoon = reactive([])
    const afterTypoon = reactive([])

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
            .filter((item) => item !== undefined)
        )
        const whileAction = reactive(
          Array.from(xmlItem).map((element) => {
            if (element.children.item(2).textContent === '20') {
              return element.children.item(0)
            }
          })
        ).filter((item) => item !== undefined)
        const afterAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '30') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )
        beforeTypoon.push(oneSubTitle[0], beforeAction)
        whileTypoon.push(oneSubTitle[1], whileAction)
        afterTypoon.push(oneSubTitle[2], afterAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      beforeTypoon,
      whileTypoon,
      afterTypoon
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
          {{ beforeTypoon[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in beforeTypoon[1]" :key="whenBefore">
        <p>
          {{ whenBefore.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whileTypoon[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenWhile in whileTypoon[1]" :key="whenWhile">
        <p>
          {{ whenWhile.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ afterTypoon[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenAfter in afterTypoon[1]" :key="whenAfter">
        <p>
          {{ whenAfter.textContent }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss"></style>
