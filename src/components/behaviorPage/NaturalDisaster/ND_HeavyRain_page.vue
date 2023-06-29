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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01003&serviceKey=`
    const headTitle = ref('호우 예보시 국민행동요령')
    const pageTitle = ref('')
    const beforeHeavyRain = reactive([])
    const whenForecastHeavyRain = reactive([])
    const whileHeavyRain = reactive([])
    const afterHeavyRain = reactive([])
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
        const beforeHeavyRainAction = reactive(
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

        const whileHeavyRainAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '30') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        const afterHeavyRainAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '40') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )
        afterHeavyRain.pop()
        beforeHeavyRain.push(oneSubTitle[0], beforeHeavyRainAction)
        whenForecastHeavyRain.push(oneSubTitle[1], whenForecastAction)
        whileHeavyRain.push(oneSubTitle[2], whileHeavyRainAction)
        afterHeavyRain.push(oneSubTitle[3], afterHeavyRainAction)
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
      beforeHeavyRain,
      whenForecastHeavyRain,
      whileHeavyRain,
      afterHeavyRain,
      videoCont
    }
  }
}
</script>

<template>
  <section class="heavyrain">
    <NaturalNav :title="headTitle" />
    <h2>{{ pageTitle }}</h2>
    <div>
      <ul>
        <li>
          <h3>
            {{ beforeHeavyRain[0] }}
          </h3>
          <ul>
            <li v-for="whenBefore in beforeHeavyRain[1]" :key="whenBefore">
              {{ whenBefore.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <h3>{{ whenForecastHeavyRain[0] }}</h3>
          <ul>
            <li v-for="whenForecast in whenForecastHeavyRain[1]" :key="whenForecast">
              {{ whenForecast.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <h3>{{ whileHeavyRain[0] }}</h3>
          <ul>
            <li v-for="whenwhile in whileHeavyRain[1]" :key="whenwhile">
              {{ whenwhile.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <h3>{{ afterHeavyRain[0] }}</h3>
          <ul>
            <li v-for="drawn in afterHeavyRain[1]" :key="drawn">
              {{ drawn.textContent }}
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
