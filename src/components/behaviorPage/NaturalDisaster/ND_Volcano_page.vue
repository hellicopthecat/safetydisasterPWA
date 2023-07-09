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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01015&serviceKey=`
    const headTitle = ref('산사태 시 국민행동요령')
    const prepareVolcanoAsh = reactive([])
    const fallenVolcanoAsh = reactive([])
    const removeVolcanoAsh = reactive([])
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
        const prepareVolcanoAshAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01015001') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const prepareVolcanoAshImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01015001' &&
                element.tagName.indexOf('contentUrl')
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const fallenVolcanoAshAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01015002') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const removeVolcanoAshAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01015003') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        prepareVolcanoAsh.push(
          oneSubTitle[0],
          prepareVolcanoAshAction,
          prepareVolcanoAshImg[0].textContent
        )
        fallenVolcanoAsh.push(oneSubTitle[1], fallenVolcanoAshAction)
        removeVolcanoAsh.push(oneSubTitle[2], removeVolcanoAshAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      prepareVolcanoAsh,
      fallenVolcanoAsh,
      removeVolcanoAsh
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ prepareVolcanoAsh[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="prepare in prepareVolcanoAsh[1]" :key="prepare">
        <p>
          {{ prepare.textContent }}
        </p>
      </v-card-text>
      <v-img :src="prepareVolcanoAsh[2]" alt="이미지자료" max-width="300" class="mx-auto" />
    </v-card>
    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ fallenVolcanoAsh[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="fallen in fallenVolcanoAsh[1]" :key="fallen">
        <p>
          {{ fallen.textContent }}
        </p>
      </v-card-text>
    </v-card>
    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ removeVolcanoAsh[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="remove in removeVolcanoAsh[1]" :key="remove">
        <p>
          {{ remove.textContent }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss"></style>
