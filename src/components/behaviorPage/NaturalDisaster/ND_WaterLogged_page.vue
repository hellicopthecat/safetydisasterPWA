<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import waterLogged from '../../../behaviordata/natural/waterlogged'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('침수 시 국민행동요령')
    const forCastWaterLogged = reactive([])
    const cityWaterLogged = reactive([])
    const shoreLineWaterLogged = reactive([])
    const farmWaterLogged = reactive([])
    const mountainWaterLogged = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = waterLogged.response.body.items.item
        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1016 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)
        // 경보 별 행동사항
        const forCastWaterLoggedAction = data
          .map((item) => (item.safetyCate3 === 1016001 ? item.actRmks : null))
          .filter((item) => item != null)
        const cityWaterLoggedAction = data
          .map((item) => (item.safetyCate3 === 1016002 ? item.actRmks : null))
          .filter((item) => item != null)
        const shoreLineWaterLoggedAction = data
          .map((item) => (item.safetyCate3 === 1016003 ? item.actRmks : null))
          .filter((item) => item != null)
        const farmWaterLoggedAction = data
          .map((item) => (item.safetyCate3 === 1016004 ? item.actRmks : null))
          .filter((item) => item != null)
        const mountainWaterLoggedAction = data
          .map((item) => (item.safetyCate3 === 1016005 ? item.actRmks : null))
          .filter((item) => item != null)

        forCastWaterLogged.push([...subTitle][0], forCastWaterLoggedAction)
        cityWaterLogged.push([...subTitle][1], cityWaterLoggedAction)
        shoreLineWaterLogged.push([...subTitle][2], shoreLineWaterLoggedAction)
        farmWaterLogged.push([...subTitle][3], farmWaterLoggedAction)
        mountainWaterLogged.push([...subTitle][4], mountainWaterLoggedAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,

      forCastWaterLogged,
      cityWaterLogged,
      shoreLineWaterLogged,
      farmWaterLogged,
      mountainWaterLogged
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="water-logged d-flex flex-column align-center justify-space-around">
    <v-row no-gutters>
      <v-col class="v-col-12">
        <v-card class="pa-5 mb-5 mx-auto w-75" :elevation="5">
          <v-card-title>
            <h3>{{ forCastWaterLogged[0] }}</h3>
          </v-card-title>
          <v-card-text v-for="forCast in forCastWaterLogged[1]" :key="forCast">
            <p>
              {{ forCast }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="v-col-12">
        <v-card class="pa-5 mb-5 mx-auto w-75" :elevation="5">
          <v-card-title>
            <h3>{{ cityWaterLogged[0] }}</h3>
          </v-card-title>
          <v-card-text v-for="city in cityWaterLogged[1]" :key="city">
            <p>
              {{ city }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="v-col-12">
        <v-card class="pa-5 mb-5 mx-auto w-75" :elevation="5">
          <v-card-title>
            <h3>{{ shoreLineWaterLogged[0] }}</h3>
          </v-card-title>
          <v-card-text v-for="shoreLineHappen in shoreLineWaterLogged[1]" :key="shoreLineHappen">
            <p>
              {{ shoreLineHappen }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="v-col-12">
        <v-card class="pa-5 mb-5 mx-auto w-75" :elevation="5">
          <v-card-title>
            <h3>{{ farmWaterLogged[0] }}</h3>
          </v-card-title>
          <v-card-text v-for="farmHappen in farmWaterLogged[1]" :key="farmHappen">
            <p>
              {{ farmHappen }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="v-col-12">
        <v-card class="pa-5 mb-5 mx-auto w-75" :elevation="5">
          <v-card-title>
            <h3>{{ mountainWaterLogged[0] }}</h3>
          </v-card-title>
          <v-card-text v-for="mountainHappen in mountainWaterLogged[1]" :key="mountainHappen">
            <p>
              {{ mountainHappen }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.water-logged {
  h3 {
    color: #393a40;
  }
  p {
    margin: 0px;
    padding-bottom: 0px;
    color: #393a40;
  }
}
.v-card-text {
  padding: 5px;
}
</style>
