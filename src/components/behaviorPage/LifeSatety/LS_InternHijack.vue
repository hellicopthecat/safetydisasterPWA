<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import internHijack from '@/behaviordata/life/internHijack'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('억류 및 납치 시 대처 요령')
    const precautionHijack = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = internHijack.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3012 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const precautionHijackAction = data
          .map((item) => (item.safetyCate3 === 3012001 ? item.actRmks : null))
          .filter((item) => item != null)

        precautionHijack.push([...subTitle][0], precautionHijackAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      precautionHijack
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
                {{ precautionHijack[0] }}
              </v-card-title>
              <v-card-text v-for="hijack in precautionHijack[1]" :key="hijack">
                <p>{{ hijack }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
