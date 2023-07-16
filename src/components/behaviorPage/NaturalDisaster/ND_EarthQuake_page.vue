<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import earthQuake from '../../../behaviordata/natural/earthquake'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('지진 예보시 국민행동요령')
    const prepareEarthQuake = reactive([])
    const whenEarthQuake = reactive([])
    const preparePlaceEarthQuake = reactive([])
    const escapeEarthQuake = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = earthQuake.response.body.items.item

        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1011 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const prepareEarthQuakeAction = data
          .map((item) => (item.safetyCateNm3 === '지진을 이렇게 대비합니다' ? item.actRmks : null))
          .filter((item) => item != null)
        const whenEarthQuakeAction = data
          .map((item) =>
            item.safetyCateNm3 === '지진이 발생하면 이렇게 행동합니다' ? item.actRmks : null
          )
          .filter((item) => item != null)
        const preparePlaceEarthQuakeAction = data
          .map((item) =>
            item.safetyCateNm3 === '장소에 따라 이렇게 행동합니다' ? item.actRmks : null
          )
          .filter((item) => item != null)
        const escapeEarthQuakeAction = data
          .map((item) =>
            item.safetyCateNm3 === '대피 후에는 이렇게 행동합니다' ? item.actRmks : null
          )
          .filter((item) => item != null)

        prepareEarthQuake.push([...subTitle][2], prepareEarthQuakeAction)
        whenEarthQuake.push([...subTitle][3], whenEarthQuakeAction)
        preparePlaceEarthQuake.push([...subTitle][4], preparePlaceEarthQuakeAction)
        escapeEarthQuake.push([...subTitle][5], escapeEarthQuakeAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      prepareEarthQuake,
      whenEarthQuake,
      preparePlaceEarthQuake,
      escapeEarthQuake
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="earthquake d-flex flex-column align-center justify-space-around">
    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ prepareEarthQuake[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="prepare in prepareEarthQuake[1]" :key="prepare">
        <p>
          {{ prepare }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ whenEarthQuake[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="when in whenEarthQuake[1]" :key="when">
        <p>
          {{ when }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ preparePlaceEarthQuake[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="preparePlace in preparePlaceEarthQuake[1]" :key="preparePlace">
        <p>
          {{ preparePlace }}
        </p>
      </v-card-text>
    </v-card>

    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ escapeEarthQuake[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="escapeEarth in escapeEarthQuake[1]" :key="escapeEarth">
        <p>
          {{ escapeEarth }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
.earthquake {
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
