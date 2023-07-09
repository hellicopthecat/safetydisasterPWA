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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01017&serviceKey=`
    const headTitle = ref('낙뢰 시 국민행동요령')
    const prepareThunder = reactive([])
    const whenThunder = reactive([])
    const hitByThunder = reactive([])

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
        const prepareThunderAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01017001') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )

        const whenThunderAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01017002') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const hitByThunderAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01017003') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )

        prepareThunder.push(oneSubTitle[0], prepareThunderAction)
        whenThunder.push(oneSubTitle[1], whenThunderAction)
        hitByThunder.push(oneSubTitle[2], hitByThunderAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      prepareThunder,
      whenThunder,
      hitByThunder
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-conatainer class="d-flex flex-column align-center justify-space-around">
    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ prepareThunder[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="prepare in prepareThunder[1]" :key="prepare">
          {{ prepare.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whenThunder[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="when in whenThunder[1]" :key="when">{{ when.textContent }}</p>
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ hitByThunder[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="hitBy in hitByThunder[1]" :key="hitBy">
          {{ hitBy.textContent }}
        </p>
      </v-card-text>
    </v-card>
  </v-conatainer>
</template>

<style lang="scss"></style>
