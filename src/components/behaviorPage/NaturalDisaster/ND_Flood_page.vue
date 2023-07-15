<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import flood from '../../../behaviordata/natural/flood'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('홍수 예보시 국민행동요령')
    const beforeFlood = reactive([])
    const whenWorryFlood = reactive([])
    const afterFlood = reactive([])
    const whenDrawn = reactive([])
    const imgUrl = ref('')

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = flood.response.body.items.item
        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1002 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const beforeAction = data
          .map((item) => (item.safetyCate3 === 1002001 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenWorryAction = data
          .map((item) => (item.safetyCate3 === 1002001 ? item.actRmks : null))
          .filter((item) => item != null)
        const afterAction = data
          .map((item) => (item.safetyCate3 === 1002001 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenDrawnAction = data
          .map((item) => (item.safetyCate3 === 1002001 ? item.actRmks : null))
          .filter((item) => item != null)
        beforeFlood.push([...subTitle][0], beforeAction)
        whenWorryFlood.push([...subTitle][1], whenWorryAction)
        afterFlood.push([...subTitle][2], afterAction)
        whenDrawn.push([...subTitle][3], whenDrawnAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      beforeFlood,
      whenWorryFlood,
      afterFlood,
      whenDrawn,
      imgUrl
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-container class="d-flex justify-center">
      <v-container v-for="img in imgUrl" :key="img">
        <v-img :src="img" alt="홍수 예보시 행동요령" max-width="400" />
      </v-container>
    </v-container>
    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>
          {{ beforeFlood[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in beforeFlood[1]" :key="whenBefore">
        {{ whenBefore }}
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whenWorryFlood[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenWorry in whenWorryFlood[1]" :key="whenWorry">
        {{ whenWorry }}
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ afterFlood[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenAfter in afterFlood[1]" :key="whenAfter">
        {{ whenAfter }}
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whenDrawn[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="drawn in whenDrawn[1]" :key="drawn">
        {{ drawn }}
      </v-card-text>
    </v-card>
  </v-container>
</template>
