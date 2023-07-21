<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import influDisease from '@/behaviordata/social/influDisease'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('감염병 예방을 위한 국민대처')
    const prepareInflu = reactive([])
    const whenInflu = reactive([])
    const whenMers = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = influDisease.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2006 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const prepareInfluAction = data
          .map((item) => (item.safetyCate3 === 2006001 ? item.actRmks : null))
          .filter((item) => item != null)

        const whenInfluAction = data
          .map((item) => (item.safetyCate3 === 2006002 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenMersAction = data
          .map((item) => (item.safetyCate3 === 2006003 ? item.actRmks : null))
          .filter((item) => item != null)
        prepareInflu.push([...subTitle][0], prepareInfluAction)
        whenInflu.push([...subTitle][1], whenInfluAction)
        whenMers.push([...subTitle][2], whenMersAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      prepareInflu,
      whenInflu,
      whenMers
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
                {{ prepareInflu[0] }}
              </v-card-title>
              <v-card-text v-for="prepare in prepareInflu[1]" :key="prepare">
                <p>{{ prepare }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenInflu[0] }}
              </v-card-title>
              <v-card-text v-for="when in whenInflu[1]" :key="when">
                <p>{{ when }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenMers[0] }}
              </v-card-title>
              <v-card-text v-for="mers in whenMers[1]" :key="mers">
                <p>{{ mers }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
