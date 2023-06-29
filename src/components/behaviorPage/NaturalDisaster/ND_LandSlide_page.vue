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
    const pageTitle = ref('')
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
        // 헤드 타이틀
        const pageTitleElement = xmlDoc.querySelector('safetyCateNm2')
        pageTitle.value = pageTitleElement.textContent
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
      pageTitle,
      watchVulnerable,
      warnVulnerable,
      watchNormal,
      warnNormal
    }
  }
}
</script>

<template>
  <section class="tidalwave">
    <NaturalNav :title="headTitle" />
    <h2>{{ pageTitle }}</h2>
    <div>
      <ul>
        <li>
          <h3>{{ watchVulnerable[0] }}</h3>
          <p v-for="watchArea in watchVulnerable[1]" :key="watchArea">
            {{ watchArea.textContent }}
          </p>
        </li>
        <li>
          <h3>{{ warnVulnerable[0] }}</h3>
          <p v-for="warnArea in warnVulnerable[1]" :key="warnArea">{{ warnArea.textContent }}</p>
        </li>
        <li>
          <h3>{{ watchNormal[0] }}</h3>
          <p v-for="watchNormalArea in watchNormal[1]" :key="watchNormalArea">
            {{ watchNormalArea.textContent }}
          </p>
        </li>
        <li>
          <h3>{{ warnNormal[0] }}</h3>
          <p v-for="warnNormalArea in warnNormal[1]" :key="warnNormalArea">
            {{ warnNormalArea.textContent }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss"></style>
