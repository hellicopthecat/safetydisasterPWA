<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import commonDuct from '@/behaviordata/social/commonDuct'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('공동구 재난 시 국민대처')
    const whenWorried = reactive([])
    const whenHappened = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = commonDuct.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2004 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenWorriedAction = data
          .map((item) => (item.safetyCate3 === 2004001 ? item.actRmks : null))
          .filter((item) => item != null)

        const whenHappenedAction = data
          .map((item) => (item.safetyCate3 === 2004002 ? item.actRmks : null))
          .filter((item) => item != null)

        whenWorried.push([...subTitle][0], whenWorriedAction)
        whenHappened.push([...subTitle][1], whenHappenedAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenWorried,
      whenHappened
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
                {{ whenWorried[0] }}
              </v-card-title>
              <v-card-text v-for="worried in whenWorried[1]" :key="worried">
                <p>{{ worried }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenHappened[0] }}
              </v-card-title>
              <v-card-text v-for="happened in whenHappened[1]" :key="happened">
                <p>{{ happened }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
