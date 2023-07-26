<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import familyViolence from '@/behaviordata/life/familyviolence'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('가정 폭력 예방')
    const preparefamilyViolence = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = familyViolence.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3011 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const preparefamilyViolenceAction = data
          .map((item) => (item.safetyCate3 === 3011001 ? item.actRmks : null))
          .filter((item) => item != null)

        preparefamilyViolence.push([...subTitle][0], preparefamilyViolenceAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      preparefamilyViolence
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
                {{ preparefamilyViolence[0] }}
              </v-card-title>
              <v-card-text v-for="school in preparefamilyViolence[1]" :key="school">
                <p>{{ school }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
