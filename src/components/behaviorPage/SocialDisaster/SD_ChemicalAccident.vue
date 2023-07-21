<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import chemicalAccident from '@/behaviordata/social/chemicalAccident'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('화학물질 사고 시 국민대처')
    const leakChemical = reactive([])
    const leakNitroGlicerien = reactive([])
    const leakTrinitroToluen = reactive([])
    const leakGas = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = chemicalAccident.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2010 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const leakChemicalAction = data
          .map((item) => (item.safetyCate3 === 2010001 ? item.actRmks : null))
          .filter((item) => item != null)

        const leakNitroGlicerienAction = data
          .map((item) => (item.safetyCate3 === 2010002 ? item.actRmks : null))
          .filter((item) => item != null)
        const leakTrinitroToluenAction = data
          .map((item) => (item.safetyCate3 === 2010003 ? item.actRmks : null))
          .filter((item) => item != null)
        const leakGasAction = data
          .map((item) => (item.safetyCate3 === 2010004 ? item.actRmks : null))
          .filter((item) => item != null)
        leakChemical.push([...subTitle][0], leakChemicalAction)
        leakNitroGlicerien.push([...subTitle][1], leakNitroGlicerienAction)
        leakTrinitroToluen.push([...subTitle][2], leakTrinitroToluenAction)
        leakGas.push([...subTitle][3], leakGasAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      leakChemical,
      leakNitroGlicerien,
      leakTrinitroToluen,
      leakGas
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
                {{ leakChemical[0] }}
              </v-card-title>
              <v-card-text v-for="chemical in leakChemical[1]" :key="chemical">
                <p>{{ chemical }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ leakNitroGlicerien[0] }}
              </v-card-title>
              <v-card-text v-for="nitro in leakNitroGlicerien[1]" :key="nitro">
                <p>{{ nitro }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ leakTrinitroToluen[0] }}
              </v-card-title>
              <v-card-text v-for="trinitro in leakTrinitroToluen[1]" :key="trinitro">
                <p>{{ trinitro }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ leakGas[0] }}
              </v-card-title>
              <v-card-text v-for="gas in leakGas[1]" :key="gas">
                <p>{{ gas }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
