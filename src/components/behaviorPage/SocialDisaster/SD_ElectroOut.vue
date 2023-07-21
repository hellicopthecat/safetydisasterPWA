<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import electroOut from '@/behaviordata/social/electroOut'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('정전 발생 시 국민대처')
    const whenHappenBehavior = reactive([])
    const whenHappen = reactive([])
    const behaviorKnowHow = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = electroOut.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2018 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenHappenBehaviorAction = data
          .map((item) => (item.safetyCate3 === 2018001 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenHappenAction = data
          .map((item) => (item.safetyCate3 === 2018002 ? item.actRmks : null))
          .filter((item) => item != null)
        const behaviorKnowHowAction = data
          .map((item) => (item.safetyCate3 === 2018003 ? item.actRmks : null))
          .filter((item) => item != null)

        whenHappenBehavior.push([...subTitle][0], whenHappenBehaviorAction)
        whenHappen.push([...subTitle][1], whenHappenAction)
        behaviorKnowHow.push([...subTitle][2], behaviorKnowHowAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenHappenBehavior,
      whenHappen,
      behaviorKnowHow
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
                {{ whenHappenBehavior[0] }}
              </v-card-title>
              <v-card-text v-for="happen in whenHappenBehavior[1]" :key="happen">
                <p>{{ happen }}</p>
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
              <v-card-text v-for="feeling in whenHappen[1]" :key="feeling">
                <p>{{ feeling }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ behaviorKnowHow[0] }}
              </v-card-title>
              <v-card-text v-for="inside in behaviorKnowHow[1]" :key="inside">
                <p>{{ inside }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
