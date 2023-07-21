<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import cbr from '@/behaviordata/social/cbr'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('화생방 사고 시 국민대처')
    const whenHappen = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = cbr.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2017 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenHappenAction = data
          .map((item) => (item.safetyCate3 === 2017001 ? item.actRmks : null))
          .filter((item) => item != null)

        whenHappen.push([...subTitle][0], whenHappenAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenHappen
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
      </v-container>
    </v-container>
  </v-container>
</template>
