<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import tidal from '../../../behaviordata/natural/tidal'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('해일 예보시 국민행동요령')

    const prepareTidal = reactive([])
    const whenTidal = reactive([])
    const whileTidal = reactive([])
    const failEscapeTidal = reactive([])
    const stormSurge = reactive([])
    const tidalSrc = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = tidal.response.body.items.item
        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1013 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const prepareTidalAction = data
          .map((item) => (item.safetyCate3 === 1013001 ? item.actRmks : null))
          .filter((item) => item != null)

        const whenTidalAction = data
          .map((item) => (item.safetyCate3 === 1013002 ? item.actRmks : null))
          .filter((item) => item != null)
        const whileTidalAction = data
          .map((item) => (item.safetyCate3 === 1013003 ? item.actRmks : null))
          .filter((item) => item != null)
        const failEscapeTidalAction = data
          .map((item) => (item.safetyCate3 === 1013004 ? item.actRmks : null))
          .filter((item) => item != null)
        const stormSurgeAction = data
          .map((item) => (item.safetyCate3 === 1013005 ? item.actRmks : null))
          .filter((item) => item != null)

        prepareTidal.push([...subTitle][0], prepareTidalAction)
        whenTidal.push([...subTitle][1], whenTidalAction)
        whileTidal.push([...subTitle][2], whileTidalAction)
        failEscapeTidal.push([...subTitle][3], failEscapeTidalAction)
        stormSurge.push([...subTitle][4], stormSurgeAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,

      prepareTidal,
      whenTidal,
      whileTidal,
      failEscapeTidal,
      stormSurge,
      tidalSrc
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="tidal-wave d-flex flex-column align-center justify-space-around">
    <v-card width="900" class="pa-5 mb-5 d-flex flex-column" :elevation="5">
      <v-card-title>
        <h3>{{ prepareTidal[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="prepare in prepareTidal[1]" :key="prepare">
        <p>
          {{ prepare }}
        </p>
      </v-card-text>
    </v-card>
    <v-card width="900" class="pa-5 mb-5 d-flex flex-column" :elevation="5">
      <v-card-title>
        <h3>{{ whenTidal[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="when in whenTidal[1]" :key="when">
        <p>{{ when }}</p>
      </v-card-text>
    </v-card>
    <v-card width="900" class="pa-5 mb-5 d-flex flex-column" :elevation="5">
      <v-card-title>
        <h3>{{ whileTidal[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="happen in whileTidal[1]" :key="happen">
        <p>{{ happen }}</p>
      </v-card-text>
    </v-card>
    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ failEscapeTidal[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="failEscape in failEscapeTidal[1]" :key="failEscape">
        <p>
          {{ failEscape }}
        </p>
      </v-card-text>
    </v-card>
    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ stormSurge[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="whenStorm in stormSurge[1]" :key="whenStorm">
        <p>{{ whenStorm }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss">
.tidal-wave {
  h3 {
    color: #393a40;
  }
  p {
    margin: 0px;
    padding-bottom: 5px;
    color: #393a40;
  }
  .v-card-text {
    padding: 5px;
  }
}
</style>
