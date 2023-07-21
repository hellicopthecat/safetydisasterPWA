<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import subwayAccident from '@/behaviordata/social/subwayAccident'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('철도, 지하철, 유도선 사고 시 국민대처')
    const citySubwayEscape = reactive([])
    const expressSubwayEscape = reactive([])
    const gasTerror = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = subwayAccident.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2007 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const citySubwayEscapeAction = data
          .map((item) => (item.safetyCate3 === 2007001 ? item.actRmks : null))
          .filter((item) => item != null)

        const expressSubwayEscapeAction = data
          .map((item) => (item.safetyCate3 === 2007002 ? item.actRmks : null))
          .filter((item) => item != null)
        const gasTerrorAction = data
          .map((item) => (item.safetyCate3 === 2007003 ? item.actRmks : null))
          .filter((item) => item != null)
        citySubwayEscape.push([...subTitle][0], citySubwayEscapeAction)
        expressSubwayEscape.push([...subTitle][1], expressSubwayEscapeAction)
        gasTerror.push([...subTitle][2], gasTerrorAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      citySubwayEscape,
      expressSubwayEscape,
      gasTerror
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
                {{ citySubwayEscape[0] }}
              </v-card-title>
              <v-card-text v-for="citySubway in citySubwayEscape[1]" :key="citySubway">
                <p>{{ citySubway }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ expressSubwayEscape[0] }}
              </v-card-title>
              <v-card-text v-for="express in expressSubwayEscape[1]" :key="express">
                <p>{{ express }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ gasTerror[0] }}
              </v-card-title>
              <v-card-text v-for="terror in gasTerror[1]" :key="terror">
                <p>{{ terror }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
