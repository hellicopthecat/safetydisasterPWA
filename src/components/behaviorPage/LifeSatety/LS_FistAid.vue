<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import firstAid from '@/behaviordata/life/firstAid'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('응급처치 국민행동요령')
    const howToFirstAid = reactive([])
    const burnFirstAid = reactive([])
    const feverFirstAid = reactive([])
    const snakeBiteFirstAid = reactive([])
    const stingByBumblebee = reactive([])
    const overBreath = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = firstAid.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3002 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const howToFirstAidAction = data
          .map((item) => (item.safetyCate3 === 3002001 ? item.actRmks : null))
          .filter((item) => item != null)
        const burnFirstAidAction = data
          .map((item) => (item.safetyCate3 === 3002002 ? item.actRmks : null))
          .filter((item) => item != null)
        const feverFirstAidAction = data
          .map((item) => (item.safetyCate3 === 3002003 ? item.actRmks : null))
          .filter((item) => item != null)
        const snakeBiteFirstAidAction = data
          .map((item) => (item.safetyCate3 === 3002004 ? item.actRmks : null))
          .filter((item) => item != null)
        const stingByBumblebeeAction = data
          .map((item) => (item.safetyCate3 === 3002005 ? item.actRmks : null))
          .filter((item) => item != null)
        const overBreathAction = data
          .map((item) => (item.safetyCate3 === 3002006 ? item.actRmks : null))
          .filter((item) => item != null)

        howToFirstAid.push([...subTitle][0], howToFirstAidAction)
        burnFirstAid.push([...subTitle][1], burnFirstAidAction)
        feverFirstAid.push([...subTitle][2], feverFirstAidAction)
        snakeBiteFirstAid.push([...subTitle][3], snakeBiteFirstAidAction)
        stingByBumblebee.push([...subTitle][4], stingByBumblebeeAction)
        overBreath.push([...subTitle][5], overBreathAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      howToFirstAid,
      burnFirstAid,
      feverFirstAid,
      snakeBiteFirstAid,
      stingByBumblebee,
      overBreath
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
                {{ howToFirstAid[0] }}
              </v-card-title>
              <v-card-text v-for="howto in howToFirstAid[1]" :key="howto">
                <p>{{ howto }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ burnFirstAid[0] }}
              </v-card-title>
              <v-card-text v-for="burn in burnFirstAid[1]" :key="burn">
                <p>{{ burn }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ feverFirstAid[0] }}
              </v-card-title>
              <v-card-text v-for="fever in feverFirstAid[1]" :key="fever">
                <p>{{ fever }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ snakeBiteFirstAid[0] }}
              </v-card-title>
              <v-card-text v-for="snake in snakeBiteFirstAid[1]" :key="snake">
                <p>{{ snake }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ stingByBumblebee[0] }}
              </v-card-title>
              <v-card-text v-for="bumblebee in stingByBumblebee[1]" :key="bumblebee">
                <p>{{ bumblebee }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ overBreath[0] }}
              </v-card-title>
              <v-card-text v-for="breath in overBreath[1]" :key="breath">
                <p>{{ breath }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
