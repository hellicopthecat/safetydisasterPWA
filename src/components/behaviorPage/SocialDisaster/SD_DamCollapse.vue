<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import damCollapse from '@/behaviordata/social/damCollapse'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('댐 붕괴 시 국민대처')
    const worriedCollapse = reactive([])
    const whenHappen = reactive([])
    const afterWaterGone = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = damCollapse.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2014 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const worriedCollapseAction = data
          .map((item) => (item.safetyCate3 === 2014001 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenHappenAction = data
          .map((item) => (item.safetyCate3 === 2014002 ? item.actRmks : null))
          .filter((item) => item != null)
        const afterWaterGoneAction = data
          .map((item) => (item.safetyCate3 === 2014003 ? item.actRmks : null))
          .filter((item) => item != null)

        worriedCollapse.push([...subTitle][0], worriedCollapseAction)
        whenHappen.push([...subTitle][1], whenHappenAction)
        afterWaterGone.push([...subTitle][2], afterWaterGoneAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      worriedCollapse,
      whenHappen,
      afterWaterGone
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
                {{ worriedCollapse[0] }}
              </v-card-title>
              <v-card-text v-for="worried in worriedCollapse[1]" :key="worried">
                <p>{{ worried }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
                {{ afterWaterGone[0] }}
              </v-card-title>
              <v-card-text v-for="waterGone in afterWaterGone[1]" :key="waterGone">
                <p>{{ waterGone }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
