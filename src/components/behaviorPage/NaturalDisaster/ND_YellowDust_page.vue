<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import yellowDust from '../../../behaviordata/natural/yellowdust'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('황사 예보시 국민행동요령')
    const beforeYellowDust = reactive([])
    const whileYellowDust = reactive([])
    const afterYellowDust = reactive([])
    const knowledgeYellowDust = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = yellowDust.response.body.items.item
        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1008 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const beforeYellowDustAction = data
          .map((item) => (item.safetyCate3 === 1008001 ? item.actRmks : null))
          .filter((item) => item != null)
        const whileYellowDustAction = data
          .map((item) => (item.safetyCate3 === 1008002 ? item.actRmks : null))
          .filter((item) => item != null)
        const afterYellowDustAction = data
          .map((item) => (item.safetyCate3 === 1008003 ? item.actRmks : null))
          .filter((item) => item != null)
        const knowledgeYellowDustAction = data
          .map((item) => (item.safetyCate3 === 1008004 ? item.actRmks : null))
          .filter((item) => item != null)

        beforeYellowDust.push([...subTitle][0], beforeYellowDustAction)
        whileYellowDust.push([...subTitle][1], whileYellowDustAction)
        afterYellowDust.push([...subTitle][2], afterYellowDustAction)
        knowledgeYellowDust.push([...subTitle][3], knowledgeYellowDustAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      beforeYellowDust,
      whileYellowDust,
      afterYellowDust,
      knowledgeYellowDust
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="yellowdust d-flex flex-column align-center justify-space-around">
    <v-row no-gutters>
      <v-col class="v-col-12">
        <v-card class="pa-5 mb-5 mx-auto w-75" :elevation="5">
          <v-card-title>
            <h3>
              {{ beforeYellowDust[0] }}
            </h3>
          </v-card-title>
          <v-card-text v-for="whenBefore in beforeYellowDust[1]" :key="whenBefore">
            <p>
              {{ whenBefore }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="v-col-12">
        <v-card class="pa-5 mb-5 mx-auto w-75" :elevation="5">
          <v-card-title>
            <h3>{{ whileYellowDust[0] }}</h3>
          </v-card-title>
          <v-card-text v-for="whileYellowDust in whileYellowDust[1]" :key="whileYellowDust">
            <p>
              {{ whileYellowDust }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="v-col-12">
        <v-card class="pa-5 mb-5 mx-auto w-75" :elevation="5">
          <v-card-title>
            <h3>{{ afterYellowDust[0] }}</h3>
          </v-card-title>
          <v-card-text v-for="whenwhile in afterYellowDust[1]" :key="whenwhile">
            <p>
              {{ whenwhile }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="v-col-12">
        <v-card class="pa-5 mb-5 mx-auto w-75" :elevation="5">
          <v-card-title>
            <h3>{{ knowledgeYellowDust[0] }}</h3>
          </v-card-title>
          <v-card-text v-for="drawn in knowledgeYellowDust[1]" :key="drawn">
            <p>
              {{ drawn }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.yellowdust {
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
