<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import stockError from '@/behaviordata/social/stockError'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('보이스피싱 시 국민대처')
    const whenVoiceFishing = reactive([])
    const prepareVoiceFishing = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = stockError.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2008 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenVoiceFishingAction = data
          .map((item) => (item.safetyCate3 === 2008001 ? item.actRmks : null))
          .filter((item) => item != null)

        const prepareVoiceFishingAction = data
          .map((item) => (item.safetyCate3 === 2008002 ? item.actRmks : null))
          .filter((item) => item != null)

        whenVoiceFishing.push([...subTitle][0], whenVoiceFishingAction)
        prepareVoiceFishing.push([...subTitle][1], prepareVoiceFishingAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenVoiceFishing,
      prepareVoiceFishing
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
                {{ whenVoiceFishing[0] }}
              </v-card-title>
              <v-card-text v-for="when in whenVoiceFishing[1]" :key="when">
                <p>{{ when }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ prepareVoiceFishing[0] }}
              </v-card-title>
              <v-card-text v-for="prepare in prepareVoiceFishing[1]" :key="prepare">
                <p>{{ prepare }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
