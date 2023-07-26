<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import climb from '@/behaviordata/life/climb'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('산행안전사고 대처')
    const whenYouEmergency = reactive([])
    const whenRequestResque = reactive([])
    const climbFirstAid = reactive([])
    const whenYouHike = reactive([])
    const campingAtMountain = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = climb.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3006 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenYouEmergencyAction = data
          .map((item) => (item.safetyCate3 === 3006001 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenRequestResqueAction = data
          .map((item) => (item.safetyCate3 === 3006002 ? item.actRmks : null))
          .filter((item) => item != null)
        const climbFirstAidAction = data
          .map((item) => (item.safetyCate3 === 3006003 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenYouHikeAction = data
          .map((item) => (item.safetyCate3 === 3006004 ? item.actRmks : null))
          .filter((item) => item != null)
        const campingAtMountainAction = data
          .map((item) => (item.safetyCate3 === 3006005 ? item.actRmks : null))
          .filter((item) => item != null)

        whenYouEmergency.push([...subTitle][0], whenYouEmergencyAction)
        whenRequestResque.push([...subTitle][1], whenRequestResqueAction)
        climbFirstAid.push([...subTitle][2], climbFirstAidAction)
        whenYouHike.push([...subTitle][3], whenYouHikeAction)
        campingAtMountain.push([...subTitle][4], campingAtMountainAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenYouEmergency,
      whenRequestResque,
      climbFirstAid,
      whenYouHike,
      campingAtMountain
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
                {{ whenYouEmergency[0] }}
              </v-card-title>
              <v-card-text v-for="emergency in whenYouEmergency[1]" :key="emergency">
                <p>{{ emergency }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenRequestResque[0] }}
              </v-card-title>
              <v-card-text v-for="resque in whenRequestResque[1]" :key="resque">
                <p>{{ resque }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ climbFirstAid[0] }}
              </v-card-title>
              <v-card-text v-for="fistaid in climbFirstAid[1]" :key="fistaid">
                <p>{{ fistaid }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenYouHike[0] }}
              </v-card-title>
              <v-card-text v-for="hike in whenYouHike[1]" :key="hike">
                <p>{{ hike }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ campingAtMountain[0] }}
              </v-card-title>
              <v-card-text v-for="camping in campingAtMountain[1]" :key="camping">
                <p>{{ camping }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
