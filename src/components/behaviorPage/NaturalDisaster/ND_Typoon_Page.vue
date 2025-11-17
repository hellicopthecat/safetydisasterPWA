<script>
import { ref, onMounted, reactive } from 'vue'
import typhoon from '../../../behaviordata/natural/typhoon'
import NaturalNav from '../NaturalNav.vue'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('태풍 예보시 국민행동요령')
    const beforeTypoon = reactive([])
    const whileTypoon = reactive([])
    const afterTypoon = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = typhoon.response.body.items.item
        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1001 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const beforeAction = reactive(
          data
            .map((item) => (item.safetyCate3 === 1001001 ? item.actRmks : null))
            .filter((item) => item != null)
        )

        const whileAction = reactive(
          data
            .map((item) => (item.safetyCate3 === 1001002 ? item.actRmks : null))
            .filter((item) => item != null)
        )
        const afterAction = reactive(
          data
            .map((item) => (item.safetyCate3 === 1001003 ? item.actRmks : null))
            .filter((item) => item != null)
        )
        beforeTypoon.push([...subTitle][0], beforeAction)
        whileTypoon.push([...subTitle][1], whileAction)
        afterTypoon.push([...subTitle][2], afterAction)
      } catch (error) {
        console.error(error)
      }
    }

    return {
      headTitle,
      beforeTypoon,
      whileTypoon,
      afterTypoon
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="typhoon d-flex flex-column align-center justify-space-around">
    <v-row no-gutters>
      <v-col class="v-col-12">
        <v-card class="pa-5 mb-5 mx-auto w-75" :elevation="5">
          <v-card-title>
            <h3>
              {{ beforeTypoon[0] }}
            </h3>
          </v-card-title>

          <v-card-text v-for="whenBefore in beforeTypoon[1]" :key="whenBefore">
            <p>
              {{ whenBefore }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="v-col-12">
        <v-card class="pa-5 mb-5 mx-auto w-75" :elevation="5">
          <v-card-title>
            <h3>{{ whileTypoon[0] }}</h3>
          </v-card-title>

          <v-card-text v-for="whenWhile in whileTypoon[1]" :key="whenWhile">
            <p>
              {{ whenWhile }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="v-col-12">
        <v-card class="pa-5 mb-5 mx-auto w-75" :elevation="5">
          <v-card-title>
            <h3>{{ afterTypoon[0] }}</h3>
          </v-card-title>

          <v-card-text v-for="whenAfter in afterTypoon[1]" :key="whenAfter">
            <p>
              {{ whenAfter }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.typhoon {
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
