<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import schoolViolence from '@/behaviordata/life/schoolViolence'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('학교 폭력 예방')
    const prepareSchoolViolence = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = schoolViolence.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3010 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const prepareSchoolViolenceAction = data
          .map((item) => (item.safetyCate3 === 3010001 ? item.actRmks : null))
          .filter((item) => item != null)

        prepareSchoolViolence.push([...subTitle][0], prepareSchoolViolenceAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      prepareSchoolViolence
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
                {{ prepareSchoolViolence[0] }}
              </v-card-title>
              <v-card-text v-for="school in prepareSchoolViolence[1]" :key="school">
                <p>{{ school }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
