<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import tsunami from '../../../behaviordata/natural/tsunami'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('지진해일 예보시 국민행동요령')
    const onShipTsunami = reactive([])
    const escapeTsunami = reactive([])
    onMounted(() => {
      fetchData()
    })
    async function fetchData() {
      try {
        const data = tsunami.response.body.items.item
        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1012 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)
        // 경보 별 행동사항
        const onShipTsunamiAction = data
          .map((item) => (item.safetyCate3 === 1012005 ? item.actRmks : null))
          .filter((item) => item != null)
        const escapeTsunamiAction = data
          .map((item) => (item.safetyCate3 === 1012006 ? item.actRmks : null))
          .filter((item) => item != null)

        onShipTsunami.push([...subTitle][0], onShipTsunamiAction)
        escapeTsunami.push([...subTitle][1], escapeTsunamiAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      onShipTsunami,
      escapeTsunami
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="tsunami d-flex flex-column align-center justify-space-around">
    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ onShipTsunami[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="onShip in onShipTsunami[1]" :key="onShip">
        <p>
          {{ onShip }}
        </p>
      </v-card-text>
    </v-card>
    <v-card width="900" class="pa-5 mb-5 d-flex flex-column" :elevation="5">
      <v-card-title>
        <h3>{{ escapeTsunami[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="escape in escapeTsunami[1]" :key="escape">
        <p class="my-0">{{ escape }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<style lang="scss" scoped>
.tsunami {
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
