<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import nuclearAccident from '@/behaviordata/social/nuclearAccident'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('원전사고 시 국민대처')
    const whenAlertProtect = reactive([])
    const radiationCloud = reactive([])
    const whenInBuilding = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = nuclearAccident.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2009 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenAlertProtectAction = data
          .map((item) => (item.safetyCate3 === 2009001 ? item.actRmks : null))
          .filter((item) => item != null)

        const radiationCloudAction = data
          .map((item) => (item.safetyCate3 === 2009002 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenInBuildingAction = data
          .map((item) => (item.safetyCate3 === 2009003 ? item.actRmks : null))
          .filter((item) => item != null)
        whenAlertProtect.push([...subTitle][0], whenAlertProtectAction)
        radiationCloud.push([...subTitle][1], radiationCloudAction)
        whenInBuilding.push([...subTitle][2], whenInBuildingAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenAlertProtect,
      radiationCloud,
      whenInBuilding
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
                {{ whenAlertProtect[0] }}
              </v-card-title>
              <v-card-text v-for="protect in whenAlertProtect[1]" :key="protect">
                <p>{{ protect }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ radiationCloud[0] }}
              </v-card-title>
              <v-card-text v-for="radiation in radiationCloud[1]" :key="radiation">
                <p>{{ radiation }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenInBuilding[0] }}
              </v-card-title>
              <v-card-text v-for="inBuilding in whenInBuilding[1]" :key="inBuilding">
                <p>{{ inBuilding }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
