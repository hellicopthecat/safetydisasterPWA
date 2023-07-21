<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import airCrash from '@/behaviordata/social/airCrash'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('항공기 사고 시 국민대처')
    const prepareAirCrash = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = airCrash.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2016 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const prepareAirCrashAction = data
          .map((item) => (item.safetyCate3 === 2016001 ? item.actRmks : null))
          .filter((item) => item != null)

        prepareAirCrash.push([...subTitle][0], prepareAirCrashAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      prepareAirCrash
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
                {{ prepareAirCrash[0] }}
              </v-card-title>
              <v-card-text v-for="prepare in prepareAirCrash[1]" :key="prepare">
                <p>{{ prepare }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
