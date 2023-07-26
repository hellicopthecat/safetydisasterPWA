<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import transportMachine from '@/behaviordata/life/transportMachine'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('승강기 및 에스컬레이터 사고 시 대처 요령')
    const safetyUsableElevator = reactive([])
    const safetyCultureElevator = reactive([])
    const breakDownElevator = reactive([])
    const precautionEsculator = reactive([])
    const prepareEsculatorAcc = reactive([])
    const esculatorSafetyPrepare = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = transportMachine.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3014 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const safetyUsableElevatorAction = data
          .map((item) => (item.safetyCate3 === 3014001 ? item.actRmks : null))
          .filter((item) => item != null)
        const safetyCultureElevatorAction = data
          .map((item) => (item.safetyCate3 === 3014002 ? item.actRmks : null))
          .filter((item) => item != null)
        const breakDownElevatorAction = data
          .map((item) => (item.safetyCate3 === 3014003 ? item.actRmks : null))
          .filter((item) => item != null)
        const precautionEsculatorAction = data
          .map((item) => (item.safetyCate3 === 3014004 ? item.actRmks : null))
          .filter((item) => item != null)
        const prepareEsculatorAccAction = data
          .map((item) => (item.safetyCate3 === 3014005 ? item.actRmks : null))
          .filter((item) => item != null)
        const esculatorSafetyPrepareAction = data
          .map((item) => (item.safetyCate3 === 3014006 ? item.actRmks : null))
          .filter((item) => item != null)

        safetyUsableElevator.push([...subTitle][0], safetyUsableElevatorAction)
        safetyCultureElevator.push([...subTitle][1], safetyCultureElevatorAction)
        breakDownElevator.push([...subTitle][2], breakDownElevatorAction)
        precautionEsculator.push([...subTitle][3], precautionEsculatorAction)
        prepareEsculatorAcc.push([...subTitle][4], prepareEsculatorAccAction)
        esculatorSafetyPrepare.push([...subTitle][5], esculatorSafetyPrepareAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      safetyUsableElevator,
      safetyCultureElevator,
      breakDownElevator,
      precautionEsculator,
      prepareEsculatorAcc,
      esculatorSafetyPrepare
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
                {{ safetyUsableElevator[0] }}
              </v-card-title>
              <v-card-text v-for="waiting in safetyUsableElevator[1]" :key="waiting">
                <p>{{ waiting }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ safetyCultureElevator[0] }}
              </v-card-title>
              <v-card-text v-for="useCommont in safetyCultureElevator[1]" :key="useCommont">
                <p>{{ useCommont }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ breakDownElevator[0] }}
              </v-card-title>
              <v-card-text v-for="limit in breakDownElevator[1]" :key="limit">
                <p>{{ limit }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ precautionEsculator[0] }}
              </v-card-title>
              <v-card-text v-for="child in precautionEsculator[1]" :key="child">
                <p>{{ child }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ prepareEsculatorAcc[0] }}
              </v-card-title>
              <v-card-text v-for="caution in prepareEsculatorAcc[1]" :key="caution">
                <p>{{ caution }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ esculatorSafetyPrepare[0] }}
              </v-card-title>
              <v-card-text v-for="position in esculatorSafetyPrepare[1]" :key="position">
                <p>{{ position }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
