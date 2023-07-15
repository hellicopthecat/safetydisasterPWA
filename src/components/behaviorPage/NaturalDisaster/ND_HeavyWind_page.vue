<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import heavyWind from '../../../behaviordata/natural/heavywind'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('강풍 예보시 국민행동요령')
    const beforeStrongWind = reactive([])
    const whenStrongWind = reactive([])
    const whileStrongWind = reactive([])
    const afterStrongWind = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = heavyWind.response.body.items.item

        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1004 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const beforeStrongWindAction = data
          .map((item) => (item.safetyCate3 === 1004001 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenAction = data
          .map((item) => (item.safetyCate3 === 1004001 ? item.actRmks : null))
          .filter((item) => item != null)
        const whileStrongWindAction = data
          .map((item) => (item.safetyCate3 === 1004001 ? item.actRmks : null))
          .filter((item) => item != null)
        beforeStrongWind.push([...subTitle][0], beforeStrongWindAction)
        whenStrongWind.push([...subTitle][1], whenAction)
        whileStrongWind.push([...subTitle][2], whileStrongWindAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      beforeStrongWind,
      whenStrongWind,
      whileStrongWind,
      afterStrongWind
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
          {{ beforeStrongWind[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in beforeStrongWind[1]" :key="whenBefore">
        {{ whenBefore }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whenStrongWind[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="when in whenStrongWind[1]" :key="when">
        {{ when }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whileStrongWind[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenwhile in whileStrongWind[1]" :key="whenwhile">
        {{ whenwhile }}
      </v-card-text>
    </v-card>
  </v-container>
</template>
