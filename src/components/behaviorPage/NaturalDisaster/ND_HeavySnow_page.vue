<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import heavySnow from '../../../behaviordata/natural/heavysnow'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('대설(폭설) 예보시 국민행동요령')
    const beforeHeavySnow = reactive([])
    const whenForecastHeavySnow = reactive([])
    const whileHeavySnow = reactive([])
    const afterHeavySnow = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = heavySnow.response.body.items.item

        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1005 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const beforeHeavySnowAction = data
          .map((item) => (item.safetyCate3 === 1005001 ? item.actRmks : null))
          .filter((item) => item != null)

        const whenForecastAction = data
          .map((item) => (item.safetyCate3 === 1005002 ? item.actRmks : null))
          .filter((item) => item != null)

        const whileHeavySnowAction = data
          .map((item) => (item.safetyCate3 === 1005003 ? item.actRmks : null))
          .filter((item) => item != null)

        const afterHeavySnowAction = data
          .map((item) => (item.safetyCate3 === 1005004 ? item.actRmks : null))
          .filter((item) => item != null)

        beforeHeavySnow.push([...subTitle][0], beforeHeavySnowAction)
        whenForecastHeavySnow.push([...subTitle][1], whenForecastAction)
        whileHeavySnow.push([...subTitle][2], whileHeavySnowAction)
        afterHeavySnow.push([...subTitle][3], afterHeavySnowAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      beforeHeavySnow,
      whenForecastHeavySnow,
      whileHeavySnow,
      afterHeavySnow
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="heavy-snow d-flex flex-column align-center justify-space-around">
    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>
          {{ beforeHeavySnow[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in beforeHeavySnow[1]" :key="whenBefore">
        <p>
          {{ whenBefore }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ whenForecastHeavySnow[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenForecast in whenForecastHeavySnow[1]" :key="whenForecast">
        <p>
          {{ whenForecast }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ whileHeavySnow[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenwhile in whileHeavySnow[1]" :key="whenwhile">
        <p>
          {{ whenwhile }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ afterHeavySnow[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="drawn in afterHeavySnow[1]" :key="drawn">
        <p>
          {{ drawn }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss">
.heavy-snow {
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
