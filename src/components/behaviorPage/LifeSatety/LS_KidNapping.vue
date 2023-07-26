<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import kidNapping from '@/behaviordata/life/kidNapping'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('실종유괴 예방')
    const prepareKidNap = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = kidNapping.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3008 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const prepareKidNapAction = data
          .map((item) => (item.safetyCate3 === 3008001 ? item.actRmks : null))
          .filter((item) => item != null)

        prepareKidNap.push([...subTitle][0], prepareKidNapAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      prepareKidNap
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
                {{ prepareKidNap[0] }}
              </v-card-title>
              <v-card-text v-for="kidnap in prepareKidNap[1]" :key="kidnap">
                <p>{{ kidnap }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
