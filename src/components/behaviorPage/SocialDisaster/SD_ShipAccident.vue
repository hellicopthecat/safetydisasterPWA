<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import shipAccident from '@/behaviordata/social/shipAccident'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('유도선 사고 시 국민대처')
    const shipPassenger = reactive([])
    const whenHappenBehavior = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = shipAccident.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2020 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const shipPassengerAction = data
          .map((item) => (item.safetyCate3 === 2020002 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenHappenBehaviorAction = data
          .map((item) => (item.safetyCate3 === 2020003 ? item.actRmks : null))
          .filter((item) => item != null)

        shipPassenger.push([...subTitle][0], shipPassengerAction)
        whenHappenBehavior.push([...subTitle][1], whenHappenBehaviorAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      shipPassenger,
      whenHappenBehavior
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
                {{ shipPassenger[0] }}
              </v-card-title>
              <v-card-text v-for="common in shipPassenger[1]" :key="common">
                <p>{{ common }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenHappenBehavior[0] }}
              </v-card-title>
              <v-card-text v-for="drown in whenHappenBehavior[1]" :key="drown">
                <p>{{ drown }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
