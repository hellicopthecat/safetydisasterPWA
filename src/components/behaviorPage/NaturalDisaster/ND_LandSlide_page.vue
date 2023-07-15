<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import landSlide from '../../../behaviordata/natural/landslide'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('산사태 시 국민행동요령')
    const watchVulnerable = reactive([])
    const warnVulnerable = reactive([])
    const watchNormal = reactive([])
    const warnNormal = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = landSlide.response.body.items.item
        console.log(data)
        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1014 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)
        // 경보 별 행동사항
        const watchVulnerableAction = data
          .map((item) => (item.safetyCate3 === 1014001 ? item.actRmks : null))
          .filter((item) => item != null)
        const warnVulnerableAction = data
          .map((item) => (item.safetyCate3 === 1014001 ? item.actRmks : null))
          .filter((item) => item != null)
        const watchNormalAction = data
          .map((item) => (item.safetyCate3 === 1014001 ? item.actRmks : null))
          .filter((item) => item != null)
        const warnNormalAction = data
          .map((item) => (item.safetyCate3 === 1014001 ? item.actRmks : null))
          .filter((item) => item != null)

        watchVulnerable.push([...subTitle][0], watchVulnerableAction)
        warnVulnerable.push([...subTitle][1], warnVulnerableAction)
        watchNormal.push([...subTitle][2], watchNormalAction)
        warnNormal.push([...subTitle][3], warnNormalAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      watchVulnerable,
      warnVulnerable,
      watchNormal,
      warnNormal
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ watchVulnerable[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="watchArea in watchVulnerable[1]" :key="watchArea">
          {{ watchArea }}
        </p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ warnVulnerable[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="warnArea in warnVulnerable[1]" :key="warnArea">{{ warnArea }}</p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ watchNormal[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="watchNormalArea in watchNormal[1]" :key="watchNormalArea">
          {{ watchNormalArea }}
        </p>
      </v-card-text>
    </v-card>

    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ warnNormal[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="warnNormalArea in warnNormal[1]" :key="warnNormalArea">
          {{ warnNormalArea }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss"></style>
