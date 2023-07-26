<script>
import { ref, onMounted, reactive } from 'vue'
import CivilDefenseNav from '../CivilDefenseNav.vue'
import chemicalRadiation from '@/behaviordata/civilDefense/chemicalRadiation'
export default {
  components: {
    CivilDefenseNav
  },
  setup() {
    const headTitle = ref('화생방 공격 시 ')
    const cdPreAlert = reactive([])
    const cdWarningAlert = reactive([])
    const cdAirStrakeAlert = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = chemicalRadiation.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 4003 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const cdPreAlertAction = data
          .map((item) => (item.safetyCate3 === 4003001 ? item.actRmks : null))
          .filter((item) => item != null)
        const cdWarningAlertAction = data
          .map((item) => (item.safetyCate3 === 4003002 ? item.actRmks : null))
          .filter((item) => item != null)
        const cdAirStrakeAlertAction = data
          .map((item) => (item.safetyCate3 === 4003003 ? item.actRmks : null))
          .filter((item) => item != null)

        cdPreAlert.push([...subTitle][0], cdPreAlertAction)
        cdWarningAlert.push([...subTitle][1], cdWarningAlertAction)
        cdAirStrakeAlert.push([...subTitle][2], cdAirStrakeAlertAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      cdPreAlert,
      cdWarningAlert,
      cdAirStrakeAlert
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
                {{ cdPreAlert[0] }}
              </v-card-title>
              <v-card-text v-for="waiting in cdPreAlert[1]" :key="waiting">
                <p>{{ waiting }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ cdWarningAlert[0] }}
              </v-card-title>
              <v-card-text v-for="useCommont in cdWarningAlert[1]" :key="useCommont">
                <p>{{ useCommont }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ cdAirStrakeAlert[0] }}
              </v-card-title>
              <v-card-text v-for="useCommont in cdAirStrakeAlert[1]" :key="useCommont">
                <p>{{ useCommont }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
