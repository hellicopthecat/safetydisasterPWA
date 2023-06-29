<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
export default {
  components: {
    SocialNav
  },
  setup() {
    const API_URL = ref(import.meta.env.VITE_API_URL)
    const API_KEY = ref(import.meta.env.VITE_ENCODING_KEY)
    const URL = `/api/behaviorconduct/socialdisaster/list?safety_cate=02001&serviceKey=`
    const headTitle = ref('해양오염사고 시 국민대처')
    const pageTitle = ref('')
    console.log(pageTitle)
    const beforeOceanPollution = reactive([])
    const whenOceanPollution = reactive([])
    const afterOceanPollution = reactive([])
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
        console.log(xmlDoc)
        // 헤드 타이틀
        const pageTitleElement = xmlDoc.querySelector('safetyCateNm2')
        pageTitle.value = pageTitleElement.textContent
        // 서브 타이틀
        const pageSubTitleElement = xmlDoc.querySelectorAll('safetyCateNm3')
        const subTitle = Array.from(pageSubTitleElement).map((element) => element.textContent)
        const oneSubTitle = Array.from(new Set(subTitle))
        // 경보 별 행동사항
        const beforeOceanPollutionAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '02001001') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const beforeOceanPollutionImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '02001001') {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const whenOceanPollutionAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '02001002') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const afterOceanPollutionAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '02001002') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        beforeOceanPollution.push(
          oneSubTitle[0],
          beforeOceanPollutionAction,
          beforeOceanPollutionImg[0]
        )
        whenOceanPollution.push(oneSubTitle[1], whenOceanPollutionAction)
        afterOceanPollution.push(oneSubTitle[2], afterOceanPollutionAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      pageTitle,
      beforeOceanPollution,
      whenOceanPollution,
      afterOceanPollution
    }
  }
}
</script>

<template>
  <SocialNav :title="headTitle" />
  <h2>{{ pageTitle }}</h2>
  <div>
    <ul>
      <h3>{{ beforeOceanPollution[0] }}</h3>
      <li v-for="before in beforeOceanPollution[1]" :key="before">{{ before.textContent }}</li>
      <img :src="beforeOceanPollution[2]" alt="" />
    </ul>
  </div>
</template>
