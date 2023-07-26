<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import trafficAccident from '@/behaviordata/life/trafficAccident'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('교통 사고 시 대처 요령')
    const prepareTrafficAccident = reactive([])
    const whenHappenTrafficAcc = reactive([])
    const judgeSituation = reactive([])
    const resqueTrafficAcc = reactive([])
    const resqueFromCar = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = trafficAccident.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3013 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const prepareTrafficAccidentAction = data
          .map((item) => (item.safetyCate3 === 3013001 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenHappenTrafficAccAction = data
          .map((item) => (item.safetyCate3 === 3013002 ? item.actRmks : null))
          .filter((item) => item != null)
        const judgeSituationAction = data
          .map((item) => (item.safetyCate3 === 3013003 ? item.actRmks : null))
          .filter((item) => item != null)
        const resqueTrafficAccAction = data
          .map((item) => (item.safetyCate3 === 3013004 ? item.actRmks : null))
          .filter((item) => item != null)
        const resqueFromCarAction = data
          .map((item) => (item.safetyCate3 === 3013005 ? item.actRmks : null))
          .filter((item) => item != null)

        prepareTrafficAccident.push([...subTitle][0], prepareTrafficAccidentAction)
        whenHappenTrafficAcc.push([...subTitle][1], whenHappenTrafficAccAction)
        judgeSituation.push([...subTitle][2], judgeSituationAction)
        resqueTrafficAcc.push([...subTitle][3], resqueTrafficAccAction)
        resqueFromCar.push([...subTitle][4], resqueFromCarAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      prepareTrafficAccident,
      whenHappenTrafficAcc,
      judgeSituation,
      resqueTrafficAcc,
      resqueFromCar
    }
  }
}
</script>

<template>
  <v-container>
    <LifeSafetyNav />
    <v-container>
      <h2>{{ headTitle }}</h2>
      <v-container>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ prepareTrafficAccident[0] }}
              </v-card-title>
              <v-card-text v-for="prepare in prepareTrafficAccident[1]" :key="prepare">
                <p>{{ prepare }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenHappenTrafficAcc[0] }}
              </v-card-title>
              <v-card-text v-for="happen in whenHappenTrafficAcc[1]" :key="happen">
                <p>{{ happen }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ judgeSituation[0] }}
              </v-card-title>
              <v-card-text v-for="judge in judgeSituation[1]" :key="judge">
                <p>{{ judge }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ resqueTrafficAcc[0] }}
              </v-card-title>
              <v-card-text v-for="resqueAcc in resqueTrafficAcc[1]" :key="resqueAcc">
                <p>{{ resqueAcc }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ resqueFromCar[0] }}
              </v-card-title>
              <v-card-text v-for="resquePerson in resqueFromCar[1]" :key="resquePerson">
                <p>{{ resquePerson }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
