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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01007&serviceKey=`
    const headTitle = ref('풍랑 예보시 국민행동요령')
    const pageTitle = ref('')
    const whenForeCastHighSeas = reactive([])

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
        const whenForeCastAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '10') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        whenForeCastHighSeas.push(oneSubTitle[0], whenForeCastAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      pageTitle,
      whenForeCastHighSeas
    }
  }
}
</script>

<template>
  <section class="highseas">
    <NaturalNav :title="headTitle" />
    <h2>{{ pageTitle }}</h2>
    <div>
      <ul>
        <li>
          <h3>
            {{ whenForeCastHighSeas[0] }}
          </h3>
          <ul>
            <li v-for="whenBefore in whenForeCastHighSeas[1]" :key="whenBefore">
              {{ whenBefore.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.typoon {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div {
    h3 {
      font-size: 30px;
    }
  }
}
</style>
