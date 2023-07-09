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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01013&serviceKey=`
    const headTitle = ref('해일 예보시 국민행동요령')

    const prepareTidal = reactive([])
    const whenTidal = reactive([])
    const whileTidal = reactive([])
    const failEscapeTidal = reactive([])
    const stormSurge = reactive([])
    const tidalSrc = reactive([])

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
        const prepareTidalAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01013001') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const prepareTidalImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01013001' &&
                element.tagName.indexOf('contentUrl')
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const whenTidalAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01013002') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const whenTidalImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01013002' &&
                element.tagName.indexOf('contentUrl')
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const whileTidalAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01013003') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const whileTidalImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01013003' &&
                element.tagName.indexOf('contentUrl')
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const failEscapeTidalAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01013004') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const stormSurgeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01013005') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const tidalWaveSrcTitle = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(3).textContent == '130') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )
        const tidalWaveSrc = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(3).textContent == '130') {
                return element.children.item(2)
              }
            })
            .filter((item) => item !== undefined)
        )
        prepareTidal.push(oneSubTitle[0], prepareTidalAction, prepareTidalImg[0].textContent)
        whenTidal.push(oneSubTitle[1], whenTidalAction, whenTidalImg[0].textContent)
        whileTidal.push(oneSubTitle[2], whileTidalAction, whileTidalImg)
        failEscapeTidal.push(oneSubTitle[3], failEscapeTidalAction)
        stormSurge.push(oneSubTitle[4], stormSurgeAction)
        tidalSrc.push(tidalWaveSrcTitle, tidalWaveSrc)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,

      prepareTidal,
      whenTidal,
      whileTidal,
      failEscapeTidal,
      stormSurge,
      tidalSrc
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-card max-width="900" class="pa-2 mb-15 d-flex flex-column" :elevation="5">
      <v-card-title>
        <h3>{{ prepareTidal[0] }}</h3>
      </v-card-title>
      <img :src="prepareTidal[2]" alt="해일특보시 대비요령" class="mx-auto my-10" />
      <v-card-text>
        <p v-for="prepare in prepareTidal[1]" :key="prepare">
          {{ prepare.textContent }}
        </p>
      </v-card-text>
    </v-card>
    <v-card min-width="900" class="pa-2 mb-15 d-flex flex-column" :elevation="5">
      <v-card-title>
        <h3>{{ whenTidal[0] }}</h3>
      </v-card-title>
      <img :src="whenTidal[2]" alt="지진해일 일때" class="mx-auto my-10" />
      <v-card-text v-for="when in whenTidal[1]" :key="when" class="py-0 my-3">
        <p class="my-0">{{ when.textContent }}</p>
      </v-card-text>
    </v-card>
    <v-card min-width="900" class="pa-2 mb-15 d-flex flex-column" :elevation="5">
      <v-card-title>
        <h3>{{ whileTidal[0] }}</h3>
      </v-card-title>
      <v-container class="d-flex justify-center my-10">
        <img
          v-for="tidalHappen in whileTidal[2]"
          :src="tidalHappen.textContent"
          alt=""
          :key="tidalHappen"
        />
      </v-container>

      <v-card-text>
        <p v-for="happen in whileTidal[1]" :key="happen">{{ happen.textContent }}</p>
      </v-card-text>
    </v-card>
    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ failEscapeTidal[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="failEscape in failEscapeTidal[1]" :key="failEscape">
          {{ failEscape.textContent }}
        </p>
      </v-card-text>
    </v-card>
    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ stormSurge[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="whenStorm in stormSurge[1]" :key="whenStorm">{{ whenStorm.textContent }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss"></style>
