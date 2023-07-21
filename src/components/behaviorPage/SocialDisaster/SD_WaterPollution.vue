<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import waterPollution from '@/behaviordata/social/waterPollution'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('수질오염사고 시 국민대처')
    const largeScalePollution = reactive([])

    const distinguishPollution = reactive([])

    onMounted(() => {
      fetchData()
    })
    async function fetchData() {
      try {
        const data = waterPollution.response.body.items.item
        console.log(data)
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2002 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const largeScalePollutionAction = data
          .map((item) => (item.safetyCate3 === 2002001 ? item.actRmks : null))
          .filter((item) => item != null)

        const distinguishPollutionAction = data
          .map((item) => (item.safetyCate3 === 2002002 ? item.actRmks : null))
          .filter((item) => item != null)

        largeScalePollution.push([...subTitle][0], largeScalePollutionAction)
        distinguishPollution.push([...subTitle][1], distinguishPollutionAction)
      } catch (error) {
        console.log(error)
      }
    }
    return {
      headTitle,
      largeScalePollution,
      distinguishPollution
    }
  }
}
</script>
<template>
  <v-container>
    <SocialNav />
    <v-container>
      <h2>{{ headTitle }}</h2>
      <v-row class="d-flex flex-column">
        <v-col xl="12">
          <v-card>
            <v-card-title>
              {{ largeScalePollution[0] }}
            </v-card-title>
            <v-card-text v-for="largeScale in largeScalePollution[1]" :key="largeScale">
              <p>{{ largeScale }}</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xl="12">
          <v-card>
            <v-card-title>
              {{ distinguishPollution[0] }}
            </v-card-title>
            <v-card-text v-for="distinguish in distinguishPollution[1]" :key="distinguish">
              <p>{{ distinguish }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
