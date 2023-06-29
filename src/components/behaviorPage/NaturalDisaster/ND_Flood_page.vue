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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01002&serviceKey=`
    const headTitle = ref('홍수 예보시 국민행동요령')
    const pageTitle = ref('')
    const beforeFlood = reactive([])
    const whenWorryFlood = reactive([])
    const afterFlood = reactive([])
    const whenDrawn = reactive([])
    const imgUrl = ref('')

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
        const beforeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '10') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )

        const whenWorryAction = reactive(
          Array.from(xmlItem).map((element) => {
            if (element.children.item(2).textContent === '20') {
              return element.children.item(0)
            }
          })
        ).filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        const afterAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '30') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.nodeName.includes('actRmks'))
        )
        const whenDrawnAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '40') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )
        beforeFlood.push(oneSubTitle[0], beforeAction)
        whenWorryFlood.push(oneSubTitle[1], whenWorryAction)
        afterFlood.push(oneSubTitle[2], afterAction)
        whenDrawn.push(oneSubTitle[3], whenDrawnAction)
        // 행동요령 비디오
        const img = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(1).nodeName === 'contentsUrl')
                return element.children.item(1).textContent
            })
            .filter((item) => item !== undefined)
        )
        imgUrl.value = img
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      pageTitle,
      beforeFlood,
      whenWorryFlood,
      afterFlood,
      whenDrawn,
      imgUrl
    }
  }
}
</script>

<template>
  <section class="flood">
    <NaturalNav :title="headTitle" />
    <h2>{{ pageTitle }}</h2>
    <div>
      <ul>
        <li>
          <h3>
            {{ beforeFlood[0] }}
          </h3>
          <ul>
            <li v-for="whenBefore in beforeFlood[1]" :key="whenBefore">
              {{ whenBefore.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <h3>{{ whenWorryFlood[0] }}</h3>
          <ul>
            <li v-for="whenWorry in whenWorryFlood[1]" :key="whenWorry">
              {{ whenWorry.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <h3>{{ afterFlood[0] }}</h3>
          <ul>
            <li v-for="whenAfter in afterFlood[1]" :key="whenAfter">
              {{ whenAfter.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <h3>{{ whenDrawn[0] }}</h3>
          <ul>
            <li v-for="drawn in whenDrawn[1]" :key="drawn">
              {{ drawn.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
  <section>
    <ul>
      <li v-for="img in imgUrl" :key="img">
        <img :src="img" />
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
