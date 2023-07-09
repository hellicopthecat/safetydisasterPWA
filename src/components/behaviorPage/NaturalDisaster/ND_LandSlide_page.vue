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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01014&serviceKey=`
    const headTitle = ref('산사태 시 국민행동요령')
    const watchVulnerable = reactive([])
    const warnVulnerable = reactive([])
    const watchNormal = reactive([])
    const warnNormal = reactive([])
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
        const watchVulnerableAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01014001') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const warnVulnerableAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01014002') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const watchNormalAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01014003') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const warnNormalAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01014004') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )

        watchVulnerable.push(oneSubTitle[0], watchVulnerableAction)
        warnVulnerable.push(oneSubTitle[1], warnVulnerableAction)
        watchNormal.push(oneSubTitle[2], watchNormalAction)
        warnNormal.push(oneSubTitle[3], warnNormalAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      watchVulnerable,
      warnVulnerable,
      watchNormal,
      warnNormal
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ watchVulnerable[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="watchArea in watchVulnerable[1]" :key="watchArea">
          {{ watchArea.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ warnVulnerable[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="warnArea in warnVulnerable[1]" :key="warnArea">{{ warnArea.textContent }}</p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ watchNormal[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="watchNormalArea in watchNormal[1]" :key="watchNormalArea">
          {{ watchNormalArea.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ warnNormal[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="warnNormalArea in warnNormal[1]" :key="warnNormalArea">
          {{ warnNormalArea.textContent }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss"></style>
