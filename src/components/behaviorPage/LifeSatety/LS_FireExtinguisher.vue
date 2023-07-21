<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import fireExtinguisher from '@/behaviordata/life/fireExtinguisher'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('소화기 사용법')
    const howToUseExtinguish = reactive([])
    const installationExtinguish = reactive([])
    const kindOfExtinguish = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = fireExtinguisher.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3004 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const howToUseExtinguishAction = data
          .map((item) => (item.safetyCate3 === 3004001 ? item.actRmks : null))
          .filter((item) => item != null)

        const installationExtinguishAction = data
          .map((item) => (item.safetyCate3 === 3004003 ? item.actRmks : null))
          .filter((item) => item != null)
        const kindOfExtinguishAction = data
          .map((item) => (item.safetyCate3 === 3004004 ? item.actRmks : null))
          .filter((item) => item != null)

        howToUseExtinguish.push([...subTitle][0], howToUseExtinguishAction)
        installationExtinguish.push([...subTitle][2], installationExtinguishAction)
        kindOfExtinguish.push([...subTitle][3], kindOfExtinguishAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      howToUseExtinguish,

      installationExtinguish,
      kindOfExtinguish
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
                {{ howToUseExtinguish[0] }}
              </v-card-title>
              <v-card-text v-for="howto in howToUseExtinguish[1]" :key="howto">
                <p>{{ howto }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ installationExtinguish[0] }}
              </v-card-title>
              <v-card-text v-for="fever in installationExtinguish[1]" :key="fever">
                <p>{{ fever }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ kindOfExtinguish[0] }}
              </v-card-title>
              <v-card-text v-for="snake in kindOfExtinguish[1]" :key="snake">
                <p>{{ snake }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
