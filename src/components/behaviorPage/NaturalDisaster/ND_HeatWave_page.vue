<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import heatWave from '../../../behaviordata/natural/heatwave'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('폭염 예보시 국민행동요령')
    const beforeHeatWave = reactive([])
    const whileHeatWave = reactive([])
    const knowledgeHeatWave = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = heatWave.response.body.items.item

        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1009 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)
        // 경보 별 행동사항
        const beforeHeatWaveAction = data.map((item) =>
          item.safetyCate3 === 1009001 ? item.actRmks : null
        )
        const whileHeatWaveAction = data.map((item) =>
          item.safetyCate3 === 1009001 ? item.actRmks : null
        )
        const knowledgeHeatWaveAction = data.map((item) =>
          item.safetyCate3 === 1009001 ? item.actRmks : null
        )
        beforeHeatWave.push([...subTitle][0], beforeHeatWaveAction)
        whileHeatWave.push([...subTitle][1], whileHeatWaveAction)
        knowledgeHeatWave.push([...subTitle][2], knowledgeHeatWaveAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      beforeHeatWave,
      whileHeatWave,
      knowledgeHeatWave
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>
          {{ beforeHeatWave[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in beforeHeatWave[1]" :key="whenBefore">
        {{ whenBefore }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whileHeatWave[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whileHeatWave in whileHeatWave[1]" :key="whileHeatWave">
        {{ whileHeatWave }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ knowledgeHeatWave[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenwhile in knowledgeHeatWave[1]" :key="whenwhile">
        {{ whenwhile }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss">
.typoon {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div {
    h3 {
      font-size: 30px;
    }
  }
}
</style>
