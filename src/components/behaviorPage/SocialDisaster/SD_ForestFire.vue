<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import forestFire from '@/behaviordata/social/forestFire'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('산불 시 국민대처')
    const incommingVillage = reactive([])
    const prepareForestFire = reactive([])
    const springForestFire = reactive([])
    const precautionForestFire = reactive([])
    const whenHappenForestFire = reactive([])
    const escapeFormForestFire = reactive([])
    const manageAnimal = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = forestFire.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2012 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const incommingVillageAction = data
          .map((item) => (item.safetyCate3 === 2012001 ? item.actRmks : null))
          .filter((item) => item != null)
        const prepareForestFireAction = data
          .map((item) => (item.safetyCate3 === 2012002 ? item.actRmks : null))
          .filter((item) => item != null)
        const springForestFireAction = data
          .map((item) => (item.safetyCate3 === 2012003 ? item.actRmks : null))
          .filter((item) => item != null)
        const precautionForestFireAction = data
          .map((item) => (item.safetyCate3 === 2012004 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenHappenForestFireAction = data
          .map((item) => (item.safetyCate3 === 2012005 ? item.actRmks : null))
          .filter((item) => item != null)
        const escapeFormForestFireAction = data
          .map((item) => (item.safetyCate3 === 2012006 ? item.actRmks : null))
          .filter((item) => item != null)
        const manageAnimalAction = data
          .map((item) => (item.safetyCate3 === 2012007 ? item.actRmks : null))
          .filter((item) => item != null)

        incommingVillage.push([...subTitle][0], incommingVillageAction)
        prepareForestFire.push([...subTitle][1], prepareForestFireAction)
        springForestFire.push([...subTitle][2], springForestFireAction)
        precautionForestFire.push([...subTitle][3], precautionForestFireAction)
        whenHappenForestFire.push([...subTitle][4], whenHappenForestFireAction)
        escapeFormForestFire.push([...subTitle][5], escapeFormForestFireAction)
        manageAnimal.push([...subTitle][6], manageAnimalAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      incommingVillage,
      prepareForestFire,
      springForestFire,
      precautionForestFire,
      whenHappenForestFire,
      escapeFormForestFire,
      manageAnimal
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
                {{ incommingVillage[0] }}
              </v-card-title>
              <v-card-text v-for="incomming in incommingVillage[1]" :key="incomming">
                <p>{{ incomming }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ prepareForestFire[0] }}
              </v-card-title>
              <v-card-text v-for="prepare in prepareForestFire[1]" :key="prepare">
                <p>{{ prepare }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ springForestFire[0] }}
              </v-card-title>
              <v-card-text v-for="spring in springForestFire[1]" :key="spring">
                <p>{{ spring }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ precautionForestFire[0] }}
              </v-card-title>
              <v-card-text v-for="precaution in precautionForestFire[1]" :key="precaution">
                <p>{{ precaution }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenHappenForestFire[0] }}
              </v-card-title>
              <v-card-text v-for="whenHappen in whenHappenForestFire[1]" :key="whenHappen">
                <p>{{ whenHappen }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ escapeFormForestFire[0] }}
              </v-card-title>
              <v-card-text v-for="escape in escapeFormForestFire[1]" :key="escape">
                <p>{{ escape }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ manageAnimal[0] }}
              </v-card-title>
              <v-card-text v-for="animal in manageAnimal[1]" :key="animal">
                <p>{{ animal }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
