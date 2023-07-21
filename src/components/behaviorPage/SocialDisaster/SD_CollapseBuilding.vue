<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import collapeBuilding from '@/behaviordata/social/collapeBuilding'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('건축물 붕괴 시 국민대처')
    const whenHappen = reactive([])
    const feelingCollapse = reactive([])
    const insideBuilding = reactive([])
    const outsideBuilding = reactive([])
    const inCollapse = reactive([])
    const hugeBuildingCollapse = reactive([])
    const roadCollapse = reactive([])
    const waterPipeCollapse = reactive([])
    const apartmentCollapse = reactive([])
    const subwayCollapse = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = collapeBuilding.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2013 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const whenHappenAction = data
          .map((item) => (item.safetyCate3 === 2013001 ? item.actRmks : null))
          .filter((item) => item != null)
        const feelingCollapseAction = data
          .map((item) => (item.safetyCate3 === 2013002 ? item.actRmks : null))
          .filter((item) => item != null)
        const insideBuildingAction = data
          .map((item) => (item.safetyCate3 === 2013003 ? item.actRmks : null))
          .filter((item) => item != null)
        const outsideBuildingAction = data
          .map((item) => (item.safetyCate3 === 2013004 ? item.actRmks : null))
          .filter((item) => item != null)
        const inCollapseAction = data
          .map((item) => (item.safetyCate3 === 2013005 ? item.actRmks : null))
          .filter((item) => item != null)
        const hugeBuildingCollapseAction = data
          .map((item) => (item.safetyCate3 === 2013006 ? item.actRmks : null))
          .filter((item) => item != null)
        const roadCollapseAction = data
          .map((item) => (item.safetyCate3 === 2013007 ? item.actRmks : null))
          .filter((item) => item != null)
        const waterPipeCollapseAction = data
          .map((item) => (item.safetyCate3 === 2013008 ? item.actRmks : null))
          .filter((item) => item != null)
        const apartmentCollapseAction = data
          .map((item) => (item.safetyCate3 === 2013009 ? item.actRmks : null))
          .filter((item) => item != null)
        const subwayCollapseAction = data
          .map((item) => (item.safetyCate3 === 2013010 ? item.actRmks : null))
          .filter((item) => item != null)

        whenHappen.push([...subTitle][0], whenHappenAction)
        feelingCollapse.push([...subTitle][1], feelingCollapseAction)
        insideBuilding.push([...subTitle][2], insideBuildingAction)
        outsideBuilding.push([...subTitle][3], outsideBuildingAction)
        inCollapse.push([...subTitle][4], inCollapseAction)
        hugeBuildingCollapse.push([...subTitle][5], hugeBuildingCollapseAction)
        roadCollapse.push([...subTitle][6], roadCollapseAction)
        waterPipeCollapse.push([...subTitle][7], waterPipeCollapseAction)
        apartmentCollapse.push([...subTitle][8], apartmentCollapseAction)
        subwayCollapse.push([...subTitle][9], subwayCollapseAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      whenHappen,
      feelingCollapse,
      insideBuilding,
      outsideBuilding,
      inCollapse,
      hugeBuildingCollapse,
      roadCollapse,
      waterPipeCollapse,
      apartmentCollapse,
      subwayCollapse
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
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ feelingCollapse[0] }}
              </v-card-title>
              <v-card-text v-for="feeling in feelingCollapse[1]" :key="feeling">
                <p>{{ feeling }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ insideBuilding[0] }}
              </v-card-title>
              <v-card-text v-for="inside in insideBuilding[1]" :key="inside">
                <p>{{ inside }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ outsideBuilding[0] }}
              </v-card-title>
              <v-card-text v-for="outside in outsideBuilding[1]" :key="outside">
                <p>{{ outside }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ inCollapse[0] }}
              </v-card-title>
              <v-card-text v-for="whereIn in inCollapse[1]" :key="whereIn">
                <p>{{ whereIn }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ hugeBuildingCollapse[0] }}
              </v-card-title>
              <v-card-text v-for="hugeBuilding in hugeBuildingCollapse[1]" :key="hugeBuilding">
                <p>{{ hugeBuilding }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ roadCollapse[0] }}
              </v-card-title>
              <v-card-text v-for="road in roadCollapse[1]" :key="road">
                <p>{{ road }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ waterPipeCollapse[0] }}
              </v-card-title>
              <v-card-text v-for="waterPipe in waterPipeCollapse[1]" :key="waterPipe">
                <p>{{ waterPipe }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ apartmentCollapse[0] }}
              </v-card-title>
              <v-card-text v-for="apart in apartmentCollapse[1]" :key="apart">
                <p>{{ apart }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ subwayCollapse[0] }}
              </v-card-title>
              <v-card-text v-for="subway in subwayCollapse[1]" :key="subway">
                <p>{{ subway }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
