<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import foodPoison from '@/behaviordata/life/foodPoison'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('식중독 대처')
    const behaviorFoodPoison = reactive([])
    const storeManager = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = foodPoison.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3005 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const behaviorFoodPoisonAction = data
          .map((item) => (item.safetyCate3 === 3005001 ? item.actRmks : null))
          .filter((item) => item != null)
        const storeManagerAction = data
          .map((item) => (item.safetyCate3 === 3005002 ? item.actRmks : null))
          .filter((item) => item != null)

        behaviorFoodPoison.push([...subTitle][0], behaviorFoodPoisonAction)
        storeManager.push([...subTitle][1], storeManagerAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      behaviorFoodPoison,
      storeManager
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
                {{ behaviorFoodPoison[0] }}
              </v-card-title>
              <v-card-text v-for="foodPoison in behaviorFoodPoison[1]" :key="foodPoison">
                <p>{{ foodPoison }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ storeManager[0] }}
              </v-card-title>
              <v-card-text v-for="store in storeManager[1]" :key="store">
                <p>{{ store }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
