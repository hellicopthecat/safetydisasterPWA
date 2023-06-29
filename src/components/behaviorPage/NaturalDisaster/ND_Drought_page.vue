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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01010&serviceKey=`
    const headTitle = ref('호우 예보시 국민행동요령')
    const pageTitle = ref('')
    const whenDrought = reactive([])
    const whileDrought = reactive([])
    const droughtFamer = reactive([])

    const videoCont = reactive([])

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
        const whenDroughtAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '10') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        const whenForecastAction = reactive(
          Array.from(xmlItem).map((element) => {
            if (element.children.item(2).textContent === '20') {
              return element.children.item(0)
            }
          })
        ).filter((item) => item !== undefined && item.nodeName.includes('actRmks'))

        const droughtFamerAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '30') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        whenDrought.push(oneSubTitle[0], whenDroughtAction)
        whileDrought.push(oneSubTitle[1], whenForecastAction)
        droughtFamer.push(oneSubTitle[2], droughtFamerAction)

        // 행동요령 비디오
        const videoTitle = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).nodeName === 'contentsUrl')
                return element.children.item(0).textContent
            })
            .filter((item) => item !== undefined)
        )

        const videoUrl = xmlDoc.querySelectorAll('contentsUrl')
        const heavyRainVideoUrl = reactive(
          Array.from(videoUrl).map((element) => element.textContent)
        )
        videoCont.push(videoTitle[0], heavyRainVideoUrl[0])
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      pageTitle,
      whenDrought,
      whileDrought,
      droughtFamer,
      videoCont
    }
  }
}
</script>

<template>
  <section class="drought">
    <NaturalNav :title="headTitle" />
    <h2>{{ pageTitle }}</h2>
    <div>
      <ul>
        <li>
          <h3>
            {{ whenDrought[0] }}
          </h3>
          <ul>
            <li v-for="whenBefore in whenDrought[1]" :key="whenBefore">
              {{ whenBefore.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <h3>{{ whileDrought[0] }}</h3>
          <ul>
            <li v-for="whenForecast in whileDrought[1]" :key="whenForecast">
              {{ whenForecast.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <h3>{{ droughtFamer[0] }}</h3>
          <ul>
            <li v-for="whenwhile in droughtFamer[1]" :key="whenwhile">
              {{ whenwhile.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
  <section>
    <ul>
      <li>
        <a :href="videoCont[1]">
          <p>
            {{ videoCont[0] }}
          </p>
        </a>
      </li>
    </ul>
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
