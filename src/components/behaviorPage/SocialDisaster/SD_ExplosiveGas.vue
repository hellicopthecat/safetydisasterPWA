<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import explosiveGas from '@/behaviordata/social/explosiveGas'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('가스폭발 시 국민대처')
    const whenHappen = reactive([])
    const inExplosive = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = explosiveGas.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2015 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenHappenAction = data
          .map((item) => (item.safetyCate3 === 2015001 ? item.actRmks : null))
          .filter((item) => item != null)

        const inExplosiveAction = data
          .map((item) => (item.safetyCate3 === 2015004 ? item.actRmks : null))
          .filter((item) => item != null)

        whenHappen.push([...subTitle][0], whenHappenAction)
        inExplosive.push([...subTitle][1], inExplosiveAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenHappen,
      inExplosive
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
                {{ whenHappen[0] }}
              </v-card-title>
              <v-card-text v-for="happen in whenHappen[1]" :key="happen">
                <p>{{ happen }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ inExplosive[0] }}
              </v-card-title>
              <v-card-text v-for="explosive in inExplosive[1]" :key="explosive">
                <p>{{ explosive }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
