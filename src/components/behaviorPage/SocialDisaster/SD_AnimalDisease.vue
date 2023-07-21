<script>
import { ref, onMounted, reactive } from 'vue'
import SocialNav from '../socialNav.vue'
import animalDisease from '@/behaviordata/social/animalDisease'
export default {
  components: {
    SocialNav
  },
  setup() {
    const headTitle = ref('가축질병 시 국민대처')
    const symptom = reactive([])
    const birdAI = reactive([])
    const farmBehavior = reactive([])
    const doubtAI = reactive([])
    const whenDetective = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = animalDisease.response.body.items.item
        console.log(data)

        // 서브 타이틀
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 2005 ? item.safetyCateNm3 : null))
          .filter((item) => item != null)
        const subTitle = new Set(subTitleCont)

        // 경보 별 행동사항
        const symptomAction = data
          .map((item) => (item.safetyCate3 === 2005001 ? item.actRmks : null))
          .filter((item) => item != null)

        const birdAIAction = data
          .map((item) => (item.safetyCate3 === 2005002 ? item.actRmks : null))
          .filter((item) => item != null)
        const farmBehaviorAction = data
          .map((item) => (item.safetyCate3 === 2005003 ? item.actRmks : null))
          .filter((item) => item != null)
        const doubtAIAction = data
          .map((item) => (item.safetyCate3 === 2005004 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenDetectiveAction = data
          .map((item) => (item.safetyCate3 === 2005005 ? item.actRmks : null))
          .filter((item) => item != null)
        symptom.push([...subTitle][0], symptomAction)
        birdAI.push([...subTitle][1], birdAIAction)
        farmBehavior.push([...subTitle][2], farmBehaviorAction)
        doubtAI.push([...subTitle][3], doubtAIAction)
        whenDetective.push([...subTitle][4], whenDetectiveAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      symptom,
      birdAI,
      farmBehavior,
      doubtAI,
      whenDetective
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
                {{ symptom[0] }}
              </v-card-title>
              <v-card-text v-for="whenHappen in symptom[1]" :key="whenHappen">
                <p>{{ whenHappen }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ birdAI[0] }}
              </v-card-title>
              <v-card-text v-for="bird in birdAI[1]" :key="bird">
                <p>{{ bird }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ farmBehavior[0] }}
              </v-card-title>
              <v-card-text v-for="farm in farmBehavior[1]" :key="farm">
                <p>{{ farm }}</p>
              </v-card-text>
            </v-card>
          </v-col> </v-row
        ><v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ doubtAI[0] }}
              </v-card-title>
              <v-card-text v-for="doubt in doubtAI[1]" :key="doubt">
                <p>{{ doubt }}</p>
              </v-card-text>
            </v-card>
          </v-col> </v-row
        ><v-row>
          <v-col xl="12">
            <v-card>
              <v-card-title>
                {{ whenDetective[0] }}
              </v-card-title>
              <v-card-text v-for="detective in whenDetective[1]" :key="detective">
                <p>{{ detective }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
