<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import heavyRain from '../../../behaviordata/natural/heavyrain'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('호우 예보시 국민행동요령')
    const beforeHeavyRain = reactive([])
    const whenForecastHeavyRain = reactive([])
    const whileHeavyRain = reactive([])
    const afterHeavyRain = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = heavyRain.response.body.items.item

        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1003 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const beforeHeavyRainAction = data
          .map((item) => (item.safetyCate3 === 1003001 ? item.actRmks : null))
          .filter((item) => item != null)

        const whenForecastAction = data
          .map((item) => (item.safetyCate3 === 1003001 ? item.actRmks : null))
          .filter((item) => item != null)

        const whileHeavyRainAction = data
          .map((item) => (item.safetyCate3 === 1003001 ? item.actRmks : null))
          .filter((item) => item != null)

        const afterHeavyRainAction = data
          .map((item) => (item.safetyCate3 === 1003001 ? item.actRmks : null))
          .filter((item) => item != null)
        beforeHeavyRain.push([...subTitle][0], beforeHeavyRainAction)
        whenForecastHeavyRain.push([...subTitle][1], whenForecastAction)
        whileHeavyRain.push([...subTitle][2], whileHeavyRainAction)
        afterHeavyRain.push([...subTitle][3], afterHeavyRainAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,

      beforeHeavyRain,
      whenForecastHeavyRain,
      whileHeavyRain,
      afterHeavyRain
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="heavy-rain d-flex flex-column align-center justify-space-around">
    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>
          {{ beforeHeavyRain[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in beforeHeavyRain[1]" :key="whenBefore">
        <p>
          {{ whenBefore }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>
          {{ whenForecastHeavyRain[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenForecast in whenForecastHeavyRain[1]" :key="whenForecast">
        <p>
          {{ whenForecast }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>
          {{ whileHeavyRain[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenwhile in whileHeavyRain[1]" :key="whenwhile">
        <p>
          {{ whenwhile }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ afterHeavyRain[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="drawn in afterHeavyRain[1]" :key="drawn">
        <p>
          {{ drawn }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
.heavy-rain {
  h3 {
    color: #393a40;
  }
  p {
    margin: 0px;
    padding-bottom: 0px;
    color: #393a40;
  }
  .v-card-text {
    padding: 5px;
  }
}
</style>
