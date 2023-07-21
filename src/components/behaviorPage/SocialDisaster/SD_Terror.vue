<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import terror from '@/behaviordata/social/terror'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('테러 시 국민대처')
    const reportProcess = reactive([])
    const inTowerBlock = reactive([])
    const bombTerror = reactive([])
    const gasTerror = reactive([])
    const creatureTerror = reactive([])
    const radiationTerror = reactive([])
    const fireAcc = reactive([])
    const gunFight = reactive([])
    const collapseByTerror = reactive([])
    const hitchHikePeople = reactive([])
    const suspectDistinguish = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = terror.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2022 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항

        const reportProcessAction = data
          .map((item) => (item.safetyCate3 === 2022007 ? item.actRmks : null))
          .filter((item) => item != null)
        const inTowerBlockAction = data
          .map((item) => (item.safetyCate3 === 2022008 ? item.actRmks : null))
          .filter((item) => item != null)
        const bombTerrorAction = data
          .map((item) => (item.safetyCate3 === 2022009 ? item.actRmks : null))
          .filter((item) => item != null)
        const gasTerrorAction = data
          .map((item) => (item.safetyCate3 === 2022010 ? item.actRmks : null))
          .filter((item) => item != null)
        const creatureTerrorAction = data
          .map((item) => (item.safetyCate3 === 2022011 ? item.actRmks : null))
          .filter((item) => item != null)
        const radiationTerrorAction = data
          .map((item) => (item.safetyCate3 === 2022012 ? item.actRmks : null))
          .filter((item) => item != null)
        const fireAccAction = data
          .map((item) => (item.safetyCate3 === 2022013 ? item.actRmks : null))
          .filter((item) => item != null)
        const gunFightAction = data
          .map((item) => (item.safetyCate3 === 2022014 ? item.actRmks : null))
          .filter((item) => item != null)
        const collapseByTerrorAction = data
          .map((item) => (item.safetyCate3 === 2022015 ? item.actRmks : null))
          .filter((item) => item != null)
        const hitchHikePeopleAction = data
          .map((item) => (item.safetyCate3 === 2022016 ? item.actRmks : null))
          .filter((item) => item != null)
        const suspectDistinguishAction = data
          .map((item) => (item.safetyCate3 === 2022017 ? item.actRmks : null))
          .filter((item) => item != null)

        reportProcess.push([...subTitle][0], reportProcessAction)
        inTowerBlock.push([...subTitle][1], inTowerBlockAction)
        bombTerror.push([...subTitle][2], bombTerrorAction)
        gasTerror.push([...subTitle][3], gasTerrorAction)
        creatureTerror.push([...subTitle][4], creatureTerrorAction)
        radiationTerror.push([...subTitle][5], radiationTerrorAction)
        fireAcc.push([...subTitle][6], fireAccAction)
        gunFight.push([...subTitle][7], gunFightAction)
        collapseByTerror.push([...subTitle][8], collapseByTerrorAction)
        hitchHikePeople.push([...subTitle][9], hitchHikePeopleAction)
        suspectDistinguish.push([...subTitle][10], suspectDistinguishAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,

      reportProcess,
      inTowerBlock,
      bombTerror,
      gasTerror,
      creatureTerror,
      radiationTerror,
      fireAcc,
      gunFight,
      collapseByTerror,
      hitchHikePeople,
      suspectDistinguish
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
                {{ reportProcess[0] }}
              </v-card-title>
              <v-card-text v-for="report in reportProcess[1]" :key="report">
                <p>{{ report }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ inTowerBlock[0] }}
              </v-card-title>
              <v-card-text v-for="tower in inTowerBlock[1]" :key="tower">
                <p>{{ tower }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ bombTerror[0] }}
              </v-card-title>
              <v-card-text v-for="bomb in bombTerror[1]" :key="bomb">
                <p>{{ bomb }}</p>
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
              <v-card-text v-for="gas in gasTerror[1]" :key="gas">
                <p>{{ gas }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ creatureTerror[0] }}
              </v-card-title>
              <v-card-text v-for="creature in creatureTerror[1]" :key="creature">
                <p>{{ creature }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ radiationTerror[0] }}
              </v-card-title>
              <v-card-text v-for="radiation in radiationTerror[1]" :key="radiation">
                <p>{{ radiation }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ fireAcc[0] }}
              </v-card-title>
              <v-card-text v-for="fire in fireAcc[1]" :key="fire">
                <p>{{ fire }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ gunFight[0] }}
              </v-card-title>
              <v-card-text v-for="gun in gunFight[1]" :key="gun">
                <p>{{ gun }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ collapseByTerror[0] }}
              </v-card-title>
              <v-card-text v-for="collapse in collapseByTerror[1]" :key="collapse">
                <p>{{ collapse }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ hitchHikePeople[0] }}
              </v-card-title>
              <v-card-text v-for="hitchHike in hitchHikePeople[1]" :key="hitchHike">
                <p>{{ hitchHike }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ suspectDistinguish[0] }}
              </v-card-title>
              <v-card-text v-for="suspect in suspectDistinguish[1]" :key="suspect">
                <p>{{ suspect }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
