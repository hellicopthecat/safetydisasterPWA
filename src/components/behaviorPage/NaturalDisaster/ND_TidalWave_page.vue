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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01013&serviceKey=`
    const headTitle = ref('해일 예보시 국민행동요령')
    const pageTitle = ref('')
    const prepareTidal = reactive([])
    const whenTidal = reactive([])
    const whileTidal = reactive([])
    const failEscapeTidal = reactive([])
    const stormSurge = reactive([])
    const tidalSrc = reactive([])

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
        const prepareTidalAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01013001') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const prepareTidalImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01013001' &&
                element.tagName.indexOf('contentUrl')
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const whenTidalAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01013002') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const whenTidalImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01013002' &&
                element.tagName.indexOf('contentUrl')
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const whileTidalAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01013003') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const whileTidalImg = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (
                element.children.item(5).textContent == '01013003' &&
                element.tagName.indexOf('contentUrl')
              ) {
                return element.children.item(1)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const failEscapeTidalAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01013004') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const stormSurgeAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01013005') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const tidalWaveSrcTitle = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(3).textContent == '130') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined)
        )
        const tidalWaveSrc = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(3).textContent == '130') {
                return element.children.item(2)
              }
            })
            .filter((item) => item !== undefined)
        )
        prepareTidal.push(oneSubTitle[0], prepareTidalAction, prepareTidalImg[0].textContent)
        whenTidal.push(oneSubTitle[1], whenTidalAction, whenTidalImg[0].textContent)
        whileTidal.push(oneSubTitle[2], whileTidalAction, whileTidalImg)
        failEscapeTidal.push(oneSubTitle[3], failEscapeTidalAction)
        stormSurge.push(oneSubTitle[4], stormSurgeAction)
        tidalSrc.push(tidalWaveSrcTitle, tidalWaveSrc)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      pageTitle,
      prepareTidal,
      whenTidal,
      whileTidal,
      failEscapeTidal,
      stormSurge,
      tidalSrc
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
          <h3>{{ prepareTidal[0] }}</h3>
          <p v-for="prepare in prepareTidal[1]" :key="prepare">
            {{ prepare.textContent }}
          </p>
          <img :src="prepareTidal[2]" alt="" />
        </li>
        <li>
          <h3>{{ whenTidal[0] }}</h3>
          <p v-for="when in whenTidal[1]" :key="when">{{ when.textContent }}</p>
          <img :src="whenTidal[2]" alt="" />
        </li>
        <li>
          <h3>{{ whileTidal[0] }}</h3>
          <p v-for="happen in whileTidal[1]" :key="happen">{{ happen.textContent }}</p>
          <img
            v-for="tidalHappen in whileTidal[2]"
            :src="tidalHappen.textContent"
            alt=""
            :key="tidalHappen"
          />
        </li>
        <li>
          <h3>{{ failEscapeTidal[0] }}</h3>
          <p v-for="failEscape in failEscapeTidal[1]" :key="failEscape">
            {{ failEscape.textContent }}
          </p>
        </li>
        <li>
          <h3>{{ stormSurge[0] }}</h3>
          <p v-for="whenStorm in stormSurge[1]" :key="whenStorm">{{ whenStorm.textContent }}</p>
        </li>
        <!-- <li>
            <h3 v-for="srcTitle in tidalSrc[0]" :key="srcTitle">{{ srcTitle.textContent }}</h3>
            <video v-for="srcSrc in tidalSrc[1]" :key="srcSrc" :src="srcSrc.textContent"></video>
          </li> -->
      </ul>
    </div>
  </section>
</template>

<style lang="scss"></style>
