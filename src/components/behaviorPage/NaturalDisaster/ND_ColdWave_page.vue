<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import coldWave from '../../../behaviordata/natural/coldwave'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('한파 예보시 국민행동요령')
    const beforeColdWave = reactive([])
    const whenColdWave = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = coldWave.response.body.items.item
        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1002 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)
        // 경보 별 행동사항
        const beforeAction = data
          .map((item) => (item.safetyCate3 === 1002001 ? item.actRmks : null))
          .filter((item) => item != null)

        const whenColdWaveAction = data
          .map((item) => (item.safetyCate3 === 1002002 ? item.actRmks : null))
          .filter((item) => item != null)

        beforeColdWave.push([...subTitle][0], beforeAction)
        whenColdWave.push([...subTitle][1], whenColdWaveAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      beforeColdWave,
      whenColdWave
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="coldwave d-flex flex-column align-center justify-space-around">
    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ beforeColdWave[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in beforeColdWave[1]" :key="whenBefore">
        <p>
          {{ whenBefore }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ whenColdWave[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="when in whenColdWave[1]" :key="when">
        <p>
          {{ when }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<style lang="scss" scoped>
.coldwave {
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
