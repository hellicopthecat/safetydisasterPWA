<script>
import { ref, onMounted, reactive } from 'vue'
import LifeSafetyNav from '../LifeSafetyNav.vue'
import microDust from '@/behaviordata/life/microDust'
export default {
  components: {
    LifeSafetyNav
  },
  setup() {
    const headTitle = ref('어린이 놀이시설 안전사고 대처')
    const propertyMicroDust = reactive([])
    const gradeOfMicroDust = reactive([])
    const lifePrecuation = reactive([])
    const effectHumanBody = reactive([])
    const infoMicroDust = reactive([])
    const whenHappenMicroDust = reactive([])
    const dayLotOfDust = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = microDust.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 3015 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const propertyMicroDustAction = data
          .map((item) => (item.safetyCate3 === 3015001 ? item.actRmks : null))
          .filter((item) => item != null)
        const gradeOfMicroDustAction = data
          .map((item) => (item.safetyCate3 === 3015002 ? item.actRmks : null))
          .filter((item) => item != null)
        const lifePrecuationAction = data
          .map((item) => (item.safetyCate3 === 3015003 ? item.actRmks : null))
          .filter((item) => item != null)
        const effectHumanBodyAction = data
          .map((item) => (item.safetyCate3 === 3015004 ? item.actRmks : null))
          .filter((item) => item != null)
        const infoMicroDustAction = data
          .map((item) => (item.safetyCate3 === 3015005 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenHappenMicroDustAction = data
          .map((item) => (item.safetyCate3 === 3015006 ? item.actRmks : null))
          .filter((item) => item != null)
        const dayLotOfDustAction = data
          .map((item) => (item.safetyCate3 === 3015007 ? item.actRmks : null))
          .filter((item) => item != null)

        propertyMicroDust.push([...subTitle][0], propertyMicroDustAction)
        gradeOfMicroDust.push([...subTitle][1], gradeOfMicroDustAction)
        lifePrecuation.push([...subTitle][2], lifePrecuationAction)
        effectHumanBody.push([...subTitle][3], effectHumanBodyAction)
        infoMicroDust.push([...subTitle][4], infoMicroDustAction)
        whenHappenMicroDust.push([...subTitle][5], whenHappenMicroDustAction)
        dayLotOfDust.push([...subTitle][6], dayLotOfDustAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      propertyMicroDust,
      gradeOfMicroDust,
      lifePrecuation,
      effectHumanBody,
      infoMicroDust,
      whenHappenMicroDust,
      dayLotOfDust
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
                {{ propertyMicroDust[0] }}
              </v-card-title>
              <v-card-text v-for="waiting in propertyMicroDust[1]" :key="waiting">
                <p>{{ waiting }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ gradeOfMicroDust[0] }}
              </v-card-title>
              <v-card-text v-for="useCommont in gradeOfMicroDust[1]" :key="useCommont">
                <p>{{ useCommont }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ lifePrecuation[0] }}
              </v-card-title>
              <v-card-text v-for="limit in lifePrecuation[1]" :key="limit">
                <p>{{ limit }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ effectHumanBody[0] }}
              </v-card-title>
              <v-card-text v-for="child in effectHumanBody[1]" :key="child">
                <p>{{ child }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ infoMicroDust[0] }}
              </v-card-title>
              <v-card-text v-for="caution in infoMicroDust[1]" :key="caution">
                <p>{{ caution }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenHappenMicroDust[0] }}
              </v-card-title>
              <v-card-text v-for="position in whenHappenMicroDust[1]" :key="position">
                <p>{{ position }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ dayLotOfDust[0] }}
              </v-card-title>
              <v-card-text v-for="leave in dayLotOfDust[1]" :key="leave">
                <p>{{ leave }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
