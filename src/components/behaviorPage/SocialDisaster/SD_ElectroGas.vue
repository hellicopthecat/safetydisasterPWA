<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import electroGas from '@/behaviordata/social/electroGas'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('화재 시 국민대처')
    const commonElectro = reactive([])
    const drownElectro = reactive([])
    const whenEscapeOrder = reactive([])
    const whenElectroOut = reactive([])
    const cautionOutside = reactive([])
    const precautionGas = reactive([])
    const whenGasAcc = reactive([])
    const lpgEM = reactive([])
    const lngEM = reactive([])
    const butanEM = reactive([])
    const commonGasCheck = reactive([])
    const whenLeakGasBehavior = reactive([])
    const gasPipeLeak = reactive([])
    const gasAccElse = reactive([])
    const ammoniaGAs = reactive([])
    const leakChiorineGas = reactive([])
    const prepareElectricShock = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = electroGas.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2019 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const commonElectroAction = data
          .map((item) => (item.safetyCate3 === 2019001 ? item.actRmks : null))
          .filter((item) => item != null)
        const drownElectroAction = data
          .map((item) => (item.safetyCate3 === 2019002 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenEscapeOrderAction = data
          .map((item) => (item.safetyCate3 === 2019003 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenElectroOutAction = data
          .map((item) => (item.safetyCate3 === 2019004 ? item.actRmks : null))
          .filter((item) => item != null)
        const cautionOutsideAction = data
          .map((item) => (item.safetyCate3 === 2019005 ? item.actRmks : null))
          .filter((item) => item != null)
        const precautionGasAction = data
          .map((item) => (item.safetyCate3 === 2019006 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenGasAccAction = data
          .map((item) => (item.safetyCate3 === 2019007 ? item.actRmks : null))
          .filter((item) => item != null)
        const lpgEMAction = data
          .map((item) => (item.safetyCate3 === 2019008 ? item.actRmks : null))
          .filter((item) => item != null)
        const lngEMAction = data
          .map((item) => (item.safetyCate3 === 2019009 ? item.actRmks : null))
          .filter((item) => item != null)
        const butanEMAction = data
          .map((item) => (item.safetyCate3 === 2019010 ? item.actRmks : null))
          .filter((item) => item != null)
        const commonGasCheckAction = data
          .map((item) => (item.safetyCate3 === 2019011 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenLeakGasBehaviorAction = data
          .map((item) => (item.safetyCate3 === 2019012 ? item.actRmks : null))
          .filter((item) => item != null)
        const gasPipeLeakAction = data
          .map((item) => (item.safetyCate3 === 2019013 ? item.actRmks : null))
          .filter((item) => item != null)
        const gasAccElseAction = data
          .map((item) => (item.safetyCate3 === 2019014 ? item.actRmks : null))
          .filter((item) => item != null)
        const ammoniaGAsAction = data
          .map((item) => (item.safetyCate3 === 2019015 ? item.actRmks : null))
          .filter((item) => item != null)
        const leakChiorineGasAction = data
          .map((item) => (item.safetyCate3 === 2019016 ? item.actRmks : null))
          .filter((item) => item != null)
        const prepareElectricShockAction = data
          .map((item) => (item.safetyCate3 === 2019017 ? item.actRmks : null))
          .filter((item) => item != null)

        commonElectro.push([...subTitle][0], commonElectroAction)
        drownElectro.push([...subTitle][1], drownElectroAction)
        whenEscapeOrder.push([...subTitle][2], whenEscapeOrderAction)
        whenElectroOut.push([...subTitle][3], whenElectroOutAction)
        cautionOutside.push([...subTitle][4], cautionOutsideAction)
        precautionGas.push([...subTitle][5], precautionGasAction)
        whenGasAcc.push([...subTitle][6], whenGasAccAction)
        lpgEM.push([...subTitle][7], lpgEMAction)
        lngEM.push([...subTitle][8], lngEMAction)
        butanEM.push([...subTitle][9], butanEMAction)
        commonGasCheck.push([...subTitle][10], commonGasCheckAction)
        whenLeakGasBehavior.push([...subTitle][11], whenLeakGasBehaviorAction)
        gasPipeLeak.push([...subTitle][12], gasPipeLeakAction)
        gasAccElse.push([...subTitle][13], gasAccElseAction)
        ammoniaGAs.push([...subTitle][14], ammoniaGAsAction)
        leakChiorineGas.push([...subTitle][15], leakChiorineGasAction)
        prepareElectricShock.push([...subTitle][16], prepareElectricShockAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      commonElectro,
      drownElectro,
      whenEscapeOrder,
      whenElectroOut,
      cautionOutside,
      precautionGas,
      whenGasAcc,
      lpgEM,
      lngEM,
      butanEM,
      commonGasCheck,
      whenLeakGasBehavior,
      gasPipeLeak,
      gasAccElse,
      ammoniaGAs,
      leakChiorineGas,
      prepareElectricShock
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
                {{ commonElectro[0] }}
              </v-card-title>
              <v-card-text v-for="common in commonElectro[1]" :key="common">
                <p>{{ common }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ drownElectro[0] }}
              </v-card-title>
              <v-card-text v-for="drown in drownElectro[1]" :key="drown">
                <p>{{ drown }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenEscapeOrder[0] }}
              </v-card-title>
              <v-card-text v-for="escapeOder in whenEscapeOrder[1]" :key="escapeOder">
                <p>{{ escapeOder }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenElectroOut[0] }}
              </v-card-title>
              <v-card-text v-for="electroOut in whenElectroOut[1]" :key="electroOut">
                <p>{{ electroOut }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ cautionOutside[0] }}
              </v-card-title>
              <v-card-text v-for="outside in cautionOutside[1]" :key="outside">
                <p>{{ outside }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ precautionGas[0] }}
              </v-card-title>
              <v-card-text v-for="gas in precautionGas[1]" :key="gas">
                <p>{{ gas }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenGasAcc[0] }}
              </v-card-title>
              <v-card-text v-for="gasacc in whenGasAcc[1]" :key="gasacc">
                <p>{{ gasacc }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ lpgEM[0] }}
              </v-card-title>
              <v-card-text v-for="lpg in lpgEM[1]" :key="lpg">
                <p>{{ lpg }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ lngEM[0] }}
              </v-card-title>
              <v-card-text v-for="lng in lngEM[1]" :key="lng">
                <p>{{ lng }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ butanEM[0] }}
              </v-card-title>
              <v-card-text v-for="butan in butanEM[1]" :key="butan">
                <p>{{ butan }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ commonGasCheck[0] }}
              </v-card-title>
              <v-card-text v-for="gascheck in commonGasCheck[1]" :key="gascheck">
                <p>{{ gascheck }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenLeakGasBehavior[0] }}
              </v-card-title>
              <v-card-text v-for="leakGas in whenLeakGasBehavior[1]" :key="leakGas">
                <p>{{ leakGas }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ gasPipeLeak[0] }}
              </v-card-title>
              <v-card-text v-for="pipe in gasPipeLeak[1]" :key="pipe">
                <p>{{ pipe }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ gasAccElse[0] }}
              </v-card-title>
              <v-card-text v-for="accElse in gasAccElse[1]" :key="accElse">
                <p>{{ accElse }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ ammoniaGAs[0] }}
              </v-card-title>
              <v-card-text v-for="ammonia in ammoniaGAs[1]" :key="ammonia">
                <p>{{ ammonia }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ leakChiorineGas[0] }}
              </v-card-title>
              <v-card-text v-for="chiorine in leakChiorineGas[1]" :key="chiorine">
                <p>{{ chiorine }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ prepareElectricShock[0] }}
              </v-card-title>
              <v-card-text v-for="elecshock in prepareElectricShock[1]" :key="elecshock">
                <p>{{ elecshock }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
