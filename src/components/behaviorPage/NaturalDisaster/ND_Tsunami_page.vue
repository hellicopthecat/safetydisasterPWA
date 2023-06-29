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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01012&serviceKey=`
    const headTitle = ref('지진해일 예보시 국민행동요령')
    const pageTitle = ref('')
    const onShipTsunami = reactive([])
    const escapeTsunami = reactive([])
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
        const onShipTsunamiAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01012005') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )

        const escapeTsunamiAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01012006') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const escapeTsunamiSrc = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01012006' &&
                element.tagName.indexOf('contentsUrl')
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )

        onShipTsunami.push(oneSubTitle[0], onShipTsunamiAction)
        escapeTsunami.push(oneSubTitle[1], escapeTsunamiAction, escapeTsunamiSrc[0].textContent)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      pageTitle,
      onShipTsunami,
      escapeTsunami
    }
  }
}
</script>

<template>
  <section class="tsunami">
    <NaturalNav :title="headTitle" />
    <h2>{{ pageTitle }}</h2>
    <div>
      <ul>
        <li>
          <h3>{{ onShipTsunami[0] }}</h3>
          <p v-for="onShip in onShipTsunami[1]" :key="onShip">{{ onShip.textContent }}</p>
        </li>
        <li>
          <h3>{{ escapeTsunami[0] }}</h3>
          <img :src="escapeTsunami[2]" alt="" />
          <p v-for="escape in escapeTsunami[1]" :key="escape">{{ escape.textContent }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.earthquake {
  img {
    width: 300px;
  }
}
</style>
