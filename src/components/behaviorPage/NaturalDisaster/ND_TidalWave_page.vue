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
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-card max-width="900" class="pa-2 mb-15 d-flex flex-column" :elevation="5">
      <v-card-title>
        <h3>{{ prepareTidal[0] }}</h3>
      </v-card-title>

      <v-card-text>
        <p v-for="prepare in prepareTidal[1]" :key="prepare">
          {{ prepare }}
        </p>
      </v-card-text>
    </v-card>
    <v-card min-width="900" class="pa-2 mb-15 d-flex flex-column" :elevation="5">
      <v-card-title>
        <h3>{{ whenTidal[0] }}</h3>
      </v-card-title>

      <v-card-text v-for="when in whenTidal[1]" :key="when" class="py-0 my-3">
        <p class="my-0">{{ when }}</p>
      </v-card-text>
    </v-card>
    <v-card min-width="900" class="pa-2 mb-15 d-flex flex-column" :elevation="5">
      <v-card-title>
        <h3>{{ whileTidal[0] }}</h3>
      </v-card-title>

      <v-card-text>
        <p v-for="happen in whileTidal[1]" :key="happen">{{ happen }}</p>
      </v-card-text>
    </v-card>
    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ failEscapeTidal[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="failEscape in failEscapeTidal[1]" :key="failEscape">
          {{ failEscape }}
        </p>
      </v-card-text>
    </v-card>
    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ stormSurge[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="whenStorm in stormSurge[1]" :key="whenStorm">{{ whenStorm }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss"></style>
