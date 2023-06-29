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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01011&serviceKey=`
    const headTitle = ref('지진 예보시 국민행동요령')
    const pageTitle = ref('')
    const whenEarthQuake = reactive([])
    const whenEarthQuakeArea = reactive([])
    const prepareEarthQuake = reactive([])
    const escapeEarthQuake = reactive([])
    const escapePlaceEarthQuake = reactive([])
    const afterEarthQuake = reactive([])

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
        const whenEarthQuakeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01011007') {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined)
        )
        const whenEarthQuakeAreaAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01011008') {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined)
        )
        const prepareEarthQuakeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01011009') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const prepareEarthQuakeImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01011009' &&
                element.children.item(1).tagName == 'contentsUrl'
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined)
        )
        const escapeEarthQuakeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01011010') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const escapteEarthQuakeImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01011010' &&
                element.children.item(1).tagName == 'contentsUrl'
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined)
        )
        const escapePlaceEarthQuakeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01011011') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const escaptePlaceEarthQuakeImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01011011' &&
                element.children.item(1).tagName == 'contentsUrl'
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined)
        )
        const afterEarthQuakeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01011012') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )

        whenEarthQuake.push(oneSubTitle[0], whenEarthQuakeAction)
        whenEarthQuakeArea.push(oneSubTitle[1], whenEarthQuakeAreaAction)
        prepareEarthQuake.push(
          oneSubTitle[2],
          prepareEarthQuakeAction,
          prepareEarthQuakeImg[0].textContent
        )
        escapeEarthQuake.push(oneSubTitle[3], escapeEarthQuakeAction, escapteEarthQuakeImg)
        escapePlaceEarthQuake.push(
          oneSubTitle[4],
          escapePlaceEarthQuakeAction,
          escaptePlaceEarthQuakeImg
        )
        afterEarthQuake.push(oneSubTitle[5], afterEarthQuakeAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      pageTitle,
      whenEarthQuake,
      whenEarthQuakeArea,
      prepareEarthQuake,
      escapeEarthQuake,
      escapePlaceEarthQuake,
      afterEarthQuake
    }
  }
}
</script>

<template>
  <section class="earthquake">
    <NaturalNav :title="headTitle" />
    <h2>{{ pageTitle }}</h2>
    <div>
      <ul>
        <li>
          <h3>{{ whenEarthQuake[0] }}</h3>
          <img v-for="imgSrc in whenEarthQuake[1]" :src="imgSrc.textContent" alt="" :key="imgSrc" />
        </li>
        <li>
          <h3>{{ whenEarthQuakeArea[0] }}</h3>
          <img
            v-for="imgSrc in whenEarthQuakeArea[1]"
            :src="imgSrc.textContent"
            alt=""
            :key="imgSrc"
          />
        </li>
        <li>
          <h3>{{ prepareEarthQuake[0] }}</h3>
          <img :src="prepareEarthQuake[2]" alt="" />
          <p v-for="prepare in prepareEarthQuake[1]" :key="prepare">
            {{ prepare.textContent }}
          </p>
        </li>
        <li>
          <h3>{{ escapeEarthQuake[0] }}</h3>
          <div v-for="escapeImg in escapeEarthQuake[2]" :key="escapeImg">
            <img :src="escapeImg.textContent" alt="" />
          </div>
          <p v-for="escape in escapeEarthQuake[1]" :key="escape">
            {{ escape.textContent }}
          </p>
        </li>
        <li>
          <h3>{{ escapePlaceEarthQuake[0] }}</h3>
          <div v-for="escapePlaceImg in escapePlaceEarthQuake[2]" :key="escapePlaceImg">
            <img :src="escapePlaceImg.textContent" alt="" />
          </div>
          <p v-for="escapePlace in escapePlaceEarthQuake[1]" :key="escapePlace">
            {{ escapePlace.textContent }}
          </p>
        </li>
        <li>
          <h3>{{ afterEarthQuake[0] }}</h3>
          <p v-for="after in afterEarthQuake[1]" :key="after">
            {{ after.textContent }}
          </p>
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
