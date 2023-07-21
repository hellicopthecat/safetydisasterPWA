<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import breakWaterSupply from '@/behaviordata/social/breakWaterSupply'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('급수중단 시 국민대처')
    const whenBreakWaterSupply = reactive([])
    const firstPhase = reactive([])
    const secondPhase = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = breakWaterSupply.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2003 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenBreakWaterSupplyAction = data
          .map((item) => (item.safetyCate3 === 2003001 ? item.actRmks : null))
          .filter((item) => item != null)

        const firstPhaseAction = data
          .map((item) => (item.safetyCate3 === 2003002 ? item.actRmks : null))
          .filter((item) => item != null)
        const secondPhaseAction = data
          .map((item) => (item.safetyCate3 === 2003003 ? item.actRmks : null))
          .filter((item) => item != null)
        whenBreakWaterSupply.push([...subTitle][0], whenBreakWaterSupplyAction)
        firstPhase.push([...subTitle][1], firstPhaseAction)
        secondPhase.push([...subTitle][2], secondPhaseAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenBreakWaterSupply,
      firstPhase,
      secondPhase
    }
  }
}
</script>

<template>
  <v-container>
    <SocialNav />
    <v-container>
      <h2>{{ headTitle }}</h2>
      <v-container>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenBreakWaterSupply[0] }}
              </v-card-title>
              <v-card-text v-for="when in whenBreakWaterSupply[1]" :key="when">
                <p>{{ when }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ firstPhase[0] }}
              </v-card-title>
              <v-card-text v-for="first in firstPhase[1]" :key="first">
                <p>{{ first }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ secondPhase[0] }}
              </v-card-title>
              <v-card-text v-for="second in secondPhase[1]" :key="second">
                <p>{{ second }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
