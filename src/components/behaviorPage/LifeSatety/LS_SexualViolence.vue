<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import sexualViolence from '@/behaviordata/life/sexualViolence'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('성폭력 예방')
    const prepareSexualViolence = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = sexualViolence.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3009 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const prepareSexualViolenceAction = data
          .map((item) => (item.safetyCate3 === 3009001 ? item.actRmks : null))
          .filter((item) => item != null)

        prepareSexualViolence.push([...subTitle][0], prepareSexualViolenceAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      prepareSexualViolence
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
                {{ prepareSexualViolence[0] }}
              </v-card-title>
              <v-card-text v-for="prepare in prepareSexualViolence[1]" :key="prepare">
                <p>{{ prepare }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
