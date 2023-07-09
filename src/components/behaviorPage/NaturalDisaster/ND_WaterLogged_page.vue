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
    const URL = `/behaviorApi/behaviorconductKnowHow/naturaldisaster/list?safety_cate=01016&serviceKey=`
    const headTitle = ref('침수 시 국민행동요령')
    const forCastWaterLogged = reactive([])
    const cityWaterLogged = reactive([])
    const shoreLineWaterLogged = reactive([])
    const farmWaterLogged = reactive([])
    const mountainWaterLogged = reactive([])
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

        // 서브 타이틀
        const pageSubTitleElement = xmlDoc.querySelectorAll('safetyCateNm3')
        const subTitle = Array.from(pageSubTitleElement).map((element) => element.textContent)
        const oneSubTitle = Array.from(new Set(subTitle))

        // 경보 별 행동사항
        const forCastWaterLoggedAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01016001') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )

        const cityWaterLoggedAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01016002') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const shoreLineWaterLoggedAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01016003') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const farmWaterLoggedAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01016004') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        const mountainWaterLoggedAction = reactive(
          Array.from(xmlItem)
            .map((element) => {
              if (element.children.item(5).textContent == '01016005') {
                return element.children.item(0)
              }
            })
            .filter((item) => item !== undefined && item.tagName.indexOf('contentsType'))
        )
        forCastWaterLogged.push(oneSubTitle[0], forCastWaterLoggedAction)
        cityWaterLogged.push(oneSubTitle[1], cityWaterLoggedAction)
        shoreLineWaterLogged.push(oneSubTitle[2], shoreLineWaterLoggedAction)
        farmWaterLogged.push(oneSubTitle[3], farmWaterLoggedAction)
        mountainWaterLogged.push(oneSubTitle[4], mountainWaterLoggedAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,

      forCastWaterLogged,
      cityWaterLogged,
      shoreLineWaterLogged,
      farmWaterLogged,
      mountainWaterLogged
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ forCastWaterLogged[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="forCast in forCastWaterLogged[1]" :key="forCast">
        <p>
          {{ forCast.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ cityWaterLogged[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="city in cityWaterLogged[1]" :key="city">
        <p>
          {{ city.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ shoreLineWaterLogged[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="shoreLineHappen in shoreLineWaterLogged[1]" :key="shoreLineHappen">
        <p>
          {{ shoreLineHappen.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ farmWaterLogged[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="farmHappen in farmWaterLogged[1]" :key="farmHappen">
        <p>
          {{ farmHappen.textContent }}
        </p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ mountainWaterLogged[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="mountainHappen in mountainWaterLogged[1]" :key="mountainHappen">
        <p>
          {{ mountainHappen.textContent }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss"></style>
