<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import oceanPollution from '@/behaviordata/social/oceanPollution'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('해양오염사고 시 국민대처')
    const beforeOceanPollution = reactive([])
    const whenOceanPollution = reactive([])
    const afterOceanPollution = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = oceanPollution.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2001 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const beforeOceanPollutionAction = data
          .map((item) => (item.safetyCate3 === 2001001 ? item.actRmks : null))
          .filter((item) => item != null)

        const whenOceanPollutionAction = data
          .map((item) => (item.safetyCate3 === 2001002 ? item.actRmks : null))
          .filter((item) => item != null)
        const afterOceanPollutionAction = data
          .map((item) => (item.safetyCate3 === 2001003 ? item.actRmks : null))
          .filter((item) => item != null)
        beforeOceanPollution.push([...subTitle][0], beforeOceanPollutionAction)
        whenOceanPollution.push([...subTitle][1], whenOceanPollutionAction)
        afterOceanPollution.push([...subTitle][2], afterOceanPollutionAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      beforeOceanPollution,
      whenOceanPollution,
      afterOceanPollution
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
                {{ beforeOceanPollution[0] }}
              </v-card-title>
              <v-card-text v-for="before in beforeOceanPollution[1]" :key="before">
                <p>{{ before }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenOceanPollution[0] }}
              </v-card-title>
              <v-card-text v-for="when in whenOceanPollution[1]" :key="when">
                <p>{{ when }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ afterOceanPollution[0] }}
              </v-card-title>
              <v-card-text v-for="after in afterOceanPollution[1]" :key="after">
                <p>{{ after }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
