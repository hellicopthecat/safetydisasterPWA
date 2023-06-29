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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01017&serviceKey=`
    const headTitle = ref('낙뢰 시 국민행동요령')
    const pageTitle = ref('')
    const prepareThunder = reactive([])
    const whenThunder = reactive([])
    const hitByThunder = reactive([])
    const whenHappenThunder = reactive([])
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
        const prepareThunderAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01017001') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )

        const whenThunderAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01017002') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const hitByThunderAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01017003') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const whenHappenThunderUrlTitle = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(3).textContent == '170') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )
        const whenHappenThunderUrl = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(3).textContent == '170') {
                return element.children.item(2)
              }
            })
            .filter((item) => item !== undefined)
        )

        prepareThunder.push(oneSubTitle[0], prepareThunderAction)
        whenThunder.push(oneSubTitle[1], whenThunderAction)
        hitByThunder.push(oneSubTitle[2], hitByThunderAction)
        whenHappenThunder.push(
          whenHappenThunderUrlTitle[0].textContent,
          whenHappenThunderUrl[0].textContent
        )
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      pageTitle,
      prepareThunder,
      whenThunder,
      hitByThunder,
      whenHappenThunder
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
          <h3>{{ prepareThunder[0] }}</h3>
          <p v-for="prepare in prepareThunder[1]" :key="prepare">
            {{ prepare.textContent }}
          </p>
        </li>
        <li>
          <h3>{{ whenThunder[0] }}</h3>
          <p v-for="when in whenThunder[1]" :key="when">{{ when.textContent }}</p>
        </li>
        <li>
          <h3>{{ hitByThunder[0] }}</h3>
          <p v-for="hitBy in hitByThunder[1]" :key="hitBy">
            {{ hitBy.textContent }}
          </p>
        </li>
        <li>
          <a :href="whenHappenThunder[1]">{{ whenHappenThunder[0] }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss"></style>
