<script>
import { ref, onMounted, reactive } from 'vue'
import CivilDefenseNav from '../CivilDefenseNav.vue'
import firstPhase from '@/behaviordata/civilDefense/firstPhase'
export default {
  components: {
    CivilDefenseNav
  },
  setup() {
    const headTitle = ref('비상사태')
    const whenFirstPhaseOn = reactive([])
    const destroyBuilding = reactive([])
    const damageOnCitizen = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = firstPhase.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 4001 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenFirstPhaseOnAction = data
          .map((item) => (item.safetyCate3 === 4001001 ? item.actRmks : null))
          .filter((item) => item != null)
        const destroyBuildingAction = data
          .map((item) => (item.safetyCate3 === 4001002 ? item.actRmks : null))
          .filter((item) => item != null)
        const damageOnCitizenAction = data
          .map((item) => (item.safetyCate3 === 4001003 ? item.actRmks : null))
          .filter((item) => item != null)

        whenFirstPhaseOn.push([...subTitle][0], whenFirstPhaseOnAction)
        destroyBuilding.push([...subTitle][1], destroyBuildingAction)
        damageOnCitizen.push([...subTitle][2], damageOnCitizenAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenFirstPhaseOn,
      destroyBuilding,
      damageOnCitizen
    }
  }
}
</script>

<template>
  <v-container>
    <CivilDefenseNav />
    <v-container>
      <h2>{{ headTitle }}</h2>
      <v-container>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenFirstPhaseOn[0] }}
              </v-card-title>
              <v-card-text v-for="waiting in whenFirstPhaseOn[1]" :key="waiting">
                <p>{{ waiting }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ destroyBuilding[0] }}
              </v-card-title>
              <v-card-text v-for="useCommont in destroyBuilding[1]" :key="useCommont">
                <p>{{ useCommont }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ damageOnCitizen[0] }}
              </v-card-title>
              <v-card-text v-for="useCommont in damageOnCitizen[1]" :key="useCommont">
                <p>{{ useCommont }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
