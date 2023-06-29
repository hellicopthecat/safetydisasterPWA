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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01004&serviceKey=`
    const headTitle = ref('강풍 예보시 국민행동요령')
    const pageTitle = ref('')
    const beforeStrongWind = reactive([])
    const whenStrongWind = reactive([])
    const whileStrongWind = reactive([])
    const afterStrongWind = reactive([])
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
        const beforeStrongWindAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '10') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        const whenAction = reactive(
          Array.from(xmlItem).map((element) => {
            if (element.children.item(2).textContent === '20') {
              return element.children.item(0)
            }
          })
        ).filter((item) => item !== undefined && item.nodeName.includes('actRmks'))

        const whileStrongWindAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '30') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        beforeStrongWind.push(oneSubTitle[0], beforeStrongWindAction)
        whenStrongWind.push(oneSubTitle[1], whenAction)
        whileStrongWind.push(oneSubTitle[2], whileStrongWindAction)

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
        const StrongWindVideoUrl = reactive(
          Array.from(videoUrl).map((element) => element.textContent)
        )
        videoCont.push(videoTitle[0], StrongWindVideoUrl[0])
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      pageTitle,
      beforeStrongWind,
      whenStrongWind,
      whileStrongWind,
      afterStrongWind,
      videoCont
    }
  }
}
</script>

<template>
  <section class="strongWind">
    <NaturalNav :title="headTitle" />
    <h2>{{ pageTitle }}</h2>
    <div>
      <ul>
        <li>
          <h3>
            {{ beforeStrongWind[0] }}
          </h3>
          <ul>
            <li v-for="whenBefore in beforeStrongWind[1]" :key="whenBefore">
              {{ whenBefore.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <h3>{{ whenStrongWind[0] }}</h3>
          <ul>
            <li v-for="when in whenStrongWind[1]" :key="when">
              {{ when.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <h3>{{ whileStrongWind[0] }}</h3>
          <ul>
            <li v-for="whenwhile in whileStrongWind[1]" :key="whenwhile">
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
          <p>{{ videoCont[0] }} 이거 링크 안되니까 고쳐야함</p>
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
