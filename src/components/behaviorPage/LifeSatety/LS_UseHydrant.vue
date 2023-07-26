<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import useHydrant from '@/behaviordata/life/useHydrant'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('어린이 놀이시설 안전사고 대처')
    const propertyMicroDust = reactive([])
    const gradeOfMicroDust = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = useHydrant.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3016 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const propertyMicroDustAction = data
          .map((item) => (item.safetyCate3 === 3016001 ? item.actRmks : null))
          .filter((item) => item != null)
        const gradeOfMicroDustAction = data
          .map((item) => (item.safetyCate3 === 3016002 ? item.actRmks : null))
          .filter((item) => item != null)

        propertyMicroDust.push([...subTitle][0], propertyMicroDustAction)
        gradeOfMicroDust.push([...subTitle][1], gradeOfMicroDustAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      propertyMicroDust,
      gradeOfMicroDust
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
                {{ propertyMicroDust[0] }}
              </v-card-title>
              <v-card-text v-for="waiting in propertyMicroDust[1]" :key="waiting">
                <p>{{ waiting }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ gradeOfMicroDust[0] }}
              </v-card-title>
              <v-card-text v-for="useCommont in gradeOfMicroDust[1]" :key="useCommont">
                <p>{{ useCommont }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
