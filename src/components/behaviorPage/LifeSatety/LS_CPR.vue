<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import cpr from '@/behaviordata/life/cpr'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('심폐소생술')
    const adultCpr = reactive([])
    const childCpr = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = cpr.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3003 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const adultCprAction = data
          .map((item) => (item.safetyCate3 === 3003001 ? item.actRmks : null))
          .filter((item) => item != null)
        const childCprAction = data
          .map((item) => (item.safetyCate3 === 3003002 ? item.actRmks : null))
          .filter((item) => item != null)

        adultCpr.push([...subTitle][0], adultCprAction)
        childCpr.push([...subTitle][1], childCprAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      adultCpr,
      childCpr
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
                {{ adultCpr[0] }}
              </v-card-title>
              <v-card-text v-for="howto in adultCpr[1]" :key="howto">
                <p>{{ howto }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ childCpr[0] }}
              </v-card-title>
              <v-card-text v-for="burn in childCpr[1]" :key="burn">
                <p>{{ burn }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
