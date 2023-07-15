<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import highsea from '../../../behaviordata/natural/highsea'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('풍랑 예보시 국민행동요령')
    const whenForeCastHighSeas = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = highsea.response.body.items.item

        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1007 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenForeCastAction = data
          .map((item) => (item.safetyCate3 === 1007001 ? item.actRmks : null))
          .filter((item) => item != null)

        whenForeCastHighSeas.push([...subTitle][0], whenForeCastAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenForeCastHighSeas
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
          {{ whenForeCastHighSeas[0] }}
        </h3>
      </v-card-title>
      <v-card-text v-for="whenBefore in whenForeCastHighSeas[1]" :key="whenBefore">
        {{ whenBefore }}
      </v-card-text>
    </v-card>
  </v-container>
</template>
