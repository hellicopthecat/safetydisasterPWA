<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import homeSafetyCheck from '@/behaviordata/life/homeSafetyCheck'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('어린이 놀이시설 안전사고 대처')
    const listOfHomeSafety = reactive([])
    const weatherHomeSafety = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = homeSafetyCheck.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3017 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const listOfHomeSafetyAction = data
          .map((item) => (item.safetyCate3 === 3017001 ? item.actRmks : null))
          .filter((item) => item != null)
        const weatherHomeSafetyAction = data
          .map((item) => (item.safetyCate3 === 3017002 ? item.actRmks : null))
          .filter((item) => item != null)

        listOfHomeSafety.push([...subTitle][0], listOfHomeSafetyAction)
        weatherHomeSafety.push([...subTitle][1], weatherHomeSafetyAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      listOfHomeSafety,
      weatherHomeSafety
    }
  }
}
</script>

<template>
  <v-container>
    <LifeSafetyNav />
    <v-container>
      <h2>{{ headTitle }}</h2>
      <v-container>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ listOfHomeSafety[0] }}
              </v-card-title>
              <v-card-text v-for="waiting in listOfHomeSafety[1]" :key="waiting">
                <p>{{ waiting }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ weatherHomeSafety[0] }}
              </v-card-title>
              <v-card-text v-for="useCommont in weatherHomeSafety[1]" :key="useCommont">
                <p>{{ useCommont }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
