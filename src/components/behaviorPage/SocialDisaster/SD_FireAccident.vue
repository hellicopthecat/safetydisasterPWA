<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import fireAccident from '@/behaviordata/social/fireAccident'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('화재 시 국민대처')
    const wheHappenFire = reactive([])
    const prepareFire = reactive([])
    const afterFire = reactive([])
    const whenHappenBehavior = reactive([])
    const emergencyEscape = reactive([])
    const recoverDamage = reactive([])
    const fireInHouse = reactive([])
    const smokeKnowHow = reactive([])
    const fireInApartment = reactive([])
    const prepareInApartment = reactive([])
    const fireInTunnel = reactive([])
    const hugeFire = reactive([])
    const fireOnBuilding = reactive([])
    const basementPrecaution = reactive([])
    const subwayOnFire = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = fireAccident.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2011 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const wheHappenFireAction = data
          .map((item) => (item.safetyCate3 === 2011001 ? item.actRmks : null))
          .filter((item) => item != null)
        const prepareFireAction = data
          .map((item) => (item.safetyCate3 === 2011002 ? item.actRmks : null))
          .filter((item) => item != null)
        const afterFireAction = data
          .map((item) => (item.safetyCate3 === 2011003 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenHappenBehaviorAction = data
          .map((item) => (item.safetyCate3 === 2011004 ? item.actRmks : null))
          .filter((item) => item != null)
        const emergencyEscapeAction = data
          .map((item) => (item.safetyCate3 === 2011005 ? item.actRmks : null))
          .filter((item) => item != null)
        const recoverDamageAction = data
          .map((item) => (item.safetyCate3 === 2011006 ? item.actRmks : null))
          .filter((item) => item != null)
        const fireInHouseAction = data
          .map((item) => (item.safetyCate3 === 2011007 ? item.actRmks : null))
          .filter((item) => item != null)
        const smokeKnowHowAction = data
          .map((item) => (item.safetyCate3 === 2011008 ? item.actRmks : null))
          .filter((item) => item != null)
        const fireInApartmentAction = data
          .map((item) => (item.safetyCate3 === 2011009 ? item.actRmks : null))
          .filter((item) => item != null)
        const prepareInApartmentAction = data
          .map((item) => (item.safetyCate3 === 2011010 ? item.actRmks : null))
          .filter((item) => item != null)
        const fireInTunnelAction = data
          .map((item) => (item.safetyCate3 === 2011011 ? item.actRmks : null))
          .filter((item) => item != null)
        const hugeFireAction = data
          .map((item) => (item.safetyCate3 === 2011012 ? item.actRmks : null))
          .filter((item) => item != null)
        const fireOnBuildingAction = data
          .map((item) => (item.safetyCate3 === 2011013 ? item.actRmks : null))
          .filter((item) => item != null)
        const basementPrecautionAction = data
          .map((item) => (item.safetyCate3 === 2011014 ? item.actRmks : null))
          .filter((item) => item != null)
        const subwayOnFireAction = data
          .map((item) => (item.safetyCate3 === 2011015 ? item.actRmks : null))
          .filter((item) => item != null)

        wheHappenFire.push([...subTitle][0], wheHappenFireAction)
        prepareFire.push([...subTitle][1], prepareFireAction)
        afterFire.push([...subTitle][2], afterFireAction)
        whenHappenBehavior.push([...subTitle][3], whenHappenBehaviorAction)
        emergencyEscape.push([...subTitle][4], emergencyEscapeAction)
        recoverDamage.push([...subTitle][5], recoverDamageAction)
        fireInHouse.push([...subTitle][6], fireInHouseAction)
        smokeKnowHow.push([...subTitle][7], smokeKnowHowAction)
        fireInApartment.push([...subTitle][8], fireInApartmentAction)
        prepareInApartment.push([...subTitle][9], prepareInApartmentAction)
        fireInTunnel.push([...subTitle][10], fireInTunnelAction)
        hugeFire.push([...subTitle][11], hugeFireAction)
        fireOnBuilding.push([...subTitle][12], fireOnBuildingAction)
        basementPrecaution.push([...subTitle][13], basementPrecautionAction)
        subwayOnFire.push([...subTitle][14], subwayOnFireAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      wheHappenFire,
      prepareFire,
      afterFire,
      whenHappenBehavior,
      emergencyEscape,
      recoverDamage,
      fireInHouse,
      smokeKnowHow,
      fireInApartment,
      prepareInApartment,
      fireInTunnel,
      hugeFire,
      fireOnBuilding,
      basementPrecaution,
      subwayOnFire
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
                {{ wheHappenFire[0] }}
              </v-card-title>
              <v-card-text v-for="whenHappen in wheHappenFire[1]" :key="whenHappen">
                <p>{{ whenHappen }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ prepareFire[0] }}
              </v-card-title>
              <v-card-text v-for="prepare in prepareFire[1]" :key="prepare">
                <p>{{ prepare }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ afterFire[0] }}
              </v-card-title>
              <v-card-text v-for="after in afterFire[1]" :key="after">
                <p>{{ after }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenHappenBehavior[0] }}
              </v-card-title>
              <v-card-text v-for="behavior in whenHappenBehavior[1]" :key="behavior">
                <p>{{ behavior }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ emergencyEscape[0] }}
              </v-card-title>
              <v-card-text v-for="escape in emergencyEscape[1]" :key="escape">
                <p>{{ escape }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ recoverDamage[0] }}
              </v-card-title>
              <v-card-text v-for="recover in recoverDamage[1]" :key="recover">
                <p>{{ recover }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ fireInHouse[0] }}
              </v-card-title>
              <v-card-text v-for="house in fireInHouse[1]" :key="house">
                <p>{{ house }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ smokeKnowHow[0] }}
              </v-card-title>
              <v-card-text v-for="smoke in smokeKnowHow[1]" :key="smoke">
                <p>{{ smoke }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ fireInApartment[0] }}
              </v-card-title>
              <v-card-text v-for="apartment in fireInApartment[1]" :key="apartment">
                <p>{{ apartment }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ prepareInApartment[0] }}
              </v-card-title>
              <v-card-text v-for="prepareApt in prepareInApartment[1]" :key="prepareApt">
                <p>{{ prepareApt }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ fireInTunnel[0] }}
              </v-card-title>
              <v-card-text v-for="tunnel in fireInTunnel[1]" :key="tunnel">
                <p>{{ tunnel }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ hugeFire[0] }}
              </v-card-title>
              <v-card-text v-for="huge in hugeFire[1]" :key="huge">
                <p>{{ huge }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ fireOnBuilding[0] }}
              </v-card-title>
              <v-card-text v-for="building in fireOnBuilding[1]" :key="building">
                <p>{{ building }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ basementPrecaution[0] }}
              </v-card-title>
              <v-card-text v-for="basement in basementPrecaution[1]" :key="basement">
                <p>{{ basement }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ subwayOnFire[0] }}
              </v-card-title>
              <v-card-text v-for="subway in subwayOnFire[1]" :key="subway">
                <p>{{ subway }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
