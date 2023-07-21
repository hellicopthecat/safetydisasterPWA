<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import waterAccident from '@/behaviordata/social/waterAccident'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('수난 시 국민대처')
    const acrrosRiver = reactive([])
    const rapidStream = reactive([])
    const whenDrawn = reactive([])
    const bigWave = reactive([])
    const stuckInSeaweed = reactive([])
    const rescueComma = reactive([])
    const isolatePlace = reactive([])
    const campingInRiver = reactive([])
    const boatOverTurned = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = waterAccident.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2021 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const acrrosRiverAction = data
          .map((item) => (item.safetyCate3 === 2021001 ? item.actRmks : null))
          .filter((item) => item != null)
        const rapidStreamAction = data
          .map((item) => (item.safetyCate3 === 2021002 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenDrawnAction = data
          .map((item) => (item.safetyCate3 === 2021003 ? item.actRmks : null))
          .filter((item) => item != null)
        const bigWaveAction = data
          .map((item) => (item.safetyCate3 === 2021004 ? item.actRmks : null))
          .filter((item) => item != null)
        const stuckInSeaweedAction = data
          .map((item) => (item.safetyCate3 === 2021005 ? item.actRmks : null))
          .filter((item) => item != null)
        const rescueCommaAction = data
          .map((item) => (item.safetyCate3 === 2021006 ? item.actRmks : null))
          .filter((item) => item != null)
        const isolatePlaceAction = data
          .map((item) => (item.safetyCate3 === 2021007 ? item.actRmks : null))
          .filter((item) => item != null)
        const campingInRiverAction = data
          .map((item) => (item.safetyCate3 === 2021008 ? item.actRmks : null))
          .filter((item) => item != null)
        const boatOverTurnedAction = data
          .map((item) => (item.safetyCate3 === 2021009 ? item.actRmks : null))
          .filter((item) => item != null)

        acrrosRiver.push([...subTitle][0], acrrosRiverAction)
        rapidStream.push([...subTitle][1], rapidStreamAction)
        whenDrawn.push([...subTitle][2], whenDrawnAction)
        bigWave.push([...subTitle][3], bigWaveAction)
        stuckInSeaweed.push([...subTitle][4], stuckInSeaweedAction)
        rescueComma.push([...subTitle][5], rescueCommaAction)
        isolatePlace.push([...subTitle][6], isolatePlaceAction)
        campingInRiver.push([...subTitle][7], campingInRiverAction)
        boatOverTurned.push([...subTitle][8], boatOverTurnedAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      acrrosRiver,
      rapidStream,
      whenDrawn,
      bigWave,
      stuckInSeaweed,
      rescueComma,
      isolatePlace,
      campingInRiver,
      boatOverTurned
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
                {{ acrrosRiver[0] }}
              </v-card-title>
              <v-card-text v-for="across in acrrosRiver[1]" :key="across">
                <p>{{ across }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ rapidStream[0] }}
              </v-card-title>
              <v-card-text v-for="stream in rapidStream[1]" :key="stream">
                <p>{{ stream }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenDrawn[0] }}
              </v-card-title>
              <v-card-text v-for="drawn in whenDrawn[1]" :key="drawn">
                <p>{{ drawn }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ bigWave[0] }}
              </v-card-title>
              <v-card-text v-for="electroOut in bigWave[1]" :key="electroOut">
                <p>{{ electroOut }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ stuckInSeaweed[0] }}
              </v-card-title>
              <v-card-text v-for="seaweed in stuckInSeaweed[1]" :key="seaweed">
                <p>{{ seaweed }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ rescueComma[0] }}
              </v-card-title>
              <v-card-text v-for="rescue in rescueComma[1]" :key="rescue">
                <p>{{ rescue }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ isolatePlace[0] }}
              </v-card-title>
              <v-card-text v-for="isolate in isolatePlace[1]" :key="isolate">
                <p>{{ isolate }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ campingInRiver[0] }}
              </v-card-title>
              <v-card-text v-for="camping in campingInRiver[1]" :key="camping">
                <p>{{ camping }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ boatOverTurned[0] }}
              </v-card-title>
              <v-card-text v-for="overturn in boatOverTurned[1]" :key="overturn">
                <p>{{ overturn }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
