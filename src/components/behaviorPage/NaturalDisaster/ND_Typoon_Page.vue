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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01001&serviceKey=`
    const headTitle = ref('태풍 예보시 국민행동요령')
    const pageTitle = ref('')
    const beforeTypoon = reactive([])
    const whileTypoon = reactive([])
    const afterTypoon = reactive([])
    const actionTwenty = reactive([])
    const actionFourty = reactive([])

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
            .filter((item) => item !== undefined)
        )
        const whileAction = reactive(
          Array.from(xmlItem).map((element) => {
            if (element.children.item(2).textContent === '20') {
              return element.children.item(0)
            }
          })
        ).filter((item) => item !== undefined)
        const afterAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(2).textContent === '30') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )
        beforeTypoon.push(oneSubTitle[0], beforeAction)
        whileTypoon.push(oneSubTitle[1], whileAction)
        afterTypoon.push(oneSubTitle[2], afterAction)
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
        const typoonVideoUrl = reactive(Array.from(videoUrl).map((element) => element.textContent))
        actionTwenty.push(videoTitle[0], typoonVideoUrl[0])
        actionFourty.push(videoTitle[1], typoonVideoUrl[1])
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      pageTitle,
      beforeTypoon,
      whileTypoon,
      afterTypoon,
      actionTwenty,
      actionFourty
    }
  }
}
</script>

<template>
  <section class="typoon">
    <NaturalNav :title="headTitle" />
    <h2>{{ pageTitle }}</h2>
    <div>
      <ul>
        <li>
          <h3>
            {{ beforeTypoon[0] }}
          </h3>
          <ul>
            <li v-for="whenBefore in beforeTypoon[1]" :key="whenBefore">
              {{ whenBefore.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <h3>{{ whileTypoon[0] }}</h3>
          <ul>
            <li v-for="whenWhile in whileTypoon[1]" :key="whenWhile">
              {{ whenWhile.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <h3>{{ afterTypoon[0] }}</h3>
          <ul>
            <li v-for="whenAfter in afterTypoon[1]" :key="whenAfter">
              {{ whenAfter.textContent }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
  <section>
    <ul>
      <li>
        <a :href="actionTwenty[1]">
          <p>
            {{ actionTwenty[0] }}
          </p>
        </a>
      </li>
      <li>
        <a :href="actionFourty[1]">
          <p>
            {{ actionFourty[0] }}
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
