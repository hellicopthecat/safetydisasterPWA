<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import drought from '../../../behaviordata/natural/drought'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('가뭄 예보시 국민행동요령')
    const whenDrought = reactive([])
    const whileDrought = reactive([])
    const droughtFarmer = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = drought.response.body.items.item

        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1010 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenDroughtAction = data
          .map((item) => (item.safetyCate3 === 1010001 ? item.actRmks : null))
          .filter((item) => item != null)

        const whenForecastAction = data
          .map((item) => (item.safetyCate3 === 1010002 ? item.actRmks : null))
          .filter((item) => item != null)
        const droughtFarmerAction = data
          .map((item) => (item.mainOrd === 30 ? item.actRmks : null))
          .filter((item) => item != null)

        whenDrought.push([...subTitle][0], whenDroughtAction)
        whileDrought.push([...subTitle][1], whenForecastAction)
        droughtFarmer.push(droughtFarmerAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenDrought,
      whileDrought,
      droughtFarmer
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>
          {{ whenDrought[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in whenDrought[1]" :key="whenBefore">
        {{ whenBefore }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whileDrought[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenForecast in whileDrought[1]" :key="whenForecast">
        {{ whenForecast }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-container>
        <v-list v-for="farmer in droughtFarmer" :key="farmer">
          <v-card-title>
            <h3>
              {{ farmer[0] }}
            </h3>
          </v-card-title>
          <v-card-text>
            <p>{{ farmer[1] }}</p>
            <p>{{ farmer[2] }}</p>
          </v-card-text>
          <v-card-title>
            <h3>{{ farmer[3] }}</h3>
          </v-card-title>
          <v-card-text>
            <p>{{ farmer[4] }}</p>
            <p>{{ farmer[5] }}</p>
            <p>{{ farmer[6] }}</p>
            <p>{{ farmer[7] }}</p>
            <p>{{ farmer[8] }}</p>
          </v-card-text>
        </v-list>
      </v-container>
    </v-card>
  </v-container>
</template>
