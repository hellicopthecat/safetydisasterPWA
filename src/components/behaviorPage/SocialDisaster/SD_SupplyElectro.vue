<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import supplyElectro from '@/behaviordata/social/supplyElectro'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('전력수급단계별 행동요령')
    const stepBehavior = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = supplyElectro.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2023 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항

        const stepBehaviorAction = data
          .map((item) => (item.safetyCate3 === 2023001 ? item.actRmks : null))
          .filter((item) => item != null)

        stepBehavior.push([...subTitle][0], stepBehaviorAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      stepBehavior
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
                {{ stepBehavior[0] }}
              </v-card-title>
              <v-card-text v-for="step in stepBehavior[1]" :key="step">
                <p>{{ step }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
