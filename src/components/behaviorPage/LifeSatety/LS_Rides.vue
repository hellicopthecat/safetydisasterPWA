<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import rides from '@/behaviordata/life/rides'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('어린이 놀이시설 안전사고 대처')
    const whenWaitingRides = reactive([])
    const useCommonRidesSafety = reactive([])
    const limitedRides = reactive([])
    const rideOnChild = reactive([])
    const whenCautionBoarding = reactive([])
    const positionOnRides = reactive([])
    const boardingAfterLeave = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = rides.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3007 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenWaitingRidesAction = data
          .map((item) => (item.safetyCate3 === 3007001 ? item.actRmks : null))
          .filter((item) => item != null)
        const useCommonRidesSafetyAction = data
          .map((item) => (item.safetyCate3 === 3007002 ? item.actRmks : null))
          .filter((item) => item != null)
        const limitedRidesAction = data
          .map((item) => (item.safetyCate3 === 3007003 ? item.actRmks : null))
          .filter((item) => item != null)
        const rideOnChildAction = data
          .map((item) => (item.safetyCate3 === 3007004 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenCautionBoardingAction = data
          .map((item) => (item.safetyCate3 === 3007005 ? item.actRmks : null))
          .filter((item) => item != null)
        const positionOnRidesAction = data
          .map((item) => (item.safetyCate3 === 3007006 ? item.actRmks : null))
          .filter((item) => item != null)
        const boardingAfterLeaveAction = data
          .map((item) => (item.safetyCate3 === 3007007 ? item.actRmks : null))
          .filter((item) => item != null)

        whenWaitingRides.push([...subTitle][0], whenWaitingRidesAction)
        useCommonRidesSafety.push([...subTitle][1], useCommonRidesSafetyAction)
        limitedRides.push([...subTitle][2], limitedRidesAction)
        rideOnChild.push([...subTitle][3], rideOnChildAction)
        whenCautionBoarding.push([...subTitle][4], whenCautionBoardingAction)
        positionOnRides.push([...subTitle][5], positionOnRidesAction)
        boardingAfterLeave.push([...subTitle][6], boardingAfterLeaveAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenWaitingRides,
      useCommonRidesSafety,
      limitedRides,
      rideOnChild,
      whenCautionBoarding,
      positionOnRides,
      boardingAfterLeave
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
                {{ whenWaitingRides[0] }}
              </v-card-title>
              <v-card-text v-for="waiting in whenWaitingRides[1]" :key="waiting">
                <p>{{ waiting }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ useCommonRidesSafety[0] }}
              </v-card-title>
              <v-card-text v-for="useCommont in useCommonRidesSafety[1]" :key="useCommont">
                <p>{{ useCommont }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ limitedRides[0] }}
              </v-card-title>
              <v-card-text v-for="limit in limitedRides[1]" :key="limit">
                <p>{{ limit }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ rideOnChild[0] }}
              </v-card-title>
              <v-card-text v-for="child in rideOnChild[1]" :key="child">
                <p>{{ child }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenCautionBoarding[0] }}
              </v-card-title>
              <v-card-text v-for="caution in whenCautionBoarding[1]" :key="caution">
                <p>{{ caution }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ positionOnRides[0] }}
              </v-card-title>
              <v-card-text v-for="position in positionOnRides[1]" :key="position">
                <p>{{ position }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ boardingAfterLeave[0] }}
              </v-card-title>
              <v-card-text v-for="leave in boardingAfterLeave[1]" :key="leave">
                <p>{{ leave }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
