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
  <v-container class="flood d-flex flex-column align-center justify-space-around">
    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>
          {{ beforeFlood[0] }}
        </h3>
      </v-card-title>

      <v-card-text v-for="whenBefore in beforeFlood[1]" :key="whenBefore">
        <p>
          {{ whenBefore }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ whenWorryFlood[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenWorry in whenWorryFlood[1]" :key="whenWorry">
        <p>
          {{ whenWorry }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ afterFlood[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="whenAfter in afterFlood[1]" :key="whenAfter">
        <p>
          {{ whenAfter }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ whenDrawn[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="drawn in whenDrawn[1]" :key="drawn">
        <p>
          {{ drawn }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
.flood {
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
