<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import thunder from '../../../behaviordata/natural/thunder'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('낙뢰 시 국민행동요령')
    const prepareThunder = reactive([])
    const whenThunder = reactive([])
    const hitByThunder = reactive([])

    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = thunder.response.body.items.item
        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1017 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)
        // 경보 별 행동사항
        const prepareThunderAction = data
          .map((item) => (item.safetyCate3 === 1017002 ? item.actRmks : null))
          .filter((item) => item != null)
        const whenThunderAction = data
          .map((item) => (item.safetyCate3 === 1017002 ? item.actRmks : null))
          .filter((item) => item != null)
        const hitByThunderAction = data
          .map((item) => (item.safetyCate3 === 1017002 ? item.actRmks : null))
          .filter((item) => item != null)
        prepareThunder.push([...subTitle][0], prepareThunderAction)
        whenThunder.push([...subTitle][1], whenThunderAction)
        hitByThunder.push([...subTitle][2], hitByThunderAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      prepareThunder,
      whenThunder,
      hitByThunder
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="d-flex flex-column align-center justify-space-around">
    <v-card min-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ prepareThunder[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="prepare in prepareThunder[1]" :key="prepare">
          {{ prepare }}
        </p>
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ whenThunder[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="when in whenThunder[1]" :key="when">{{ when }}</p>
      </v-card-text>
    </v-card>

    <v-card max-width="900" class="pa-2 mb-15" :elevation="5">
      <v-card-title>
        <h3>{{ hitByThunder[0] }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-for="hitBy in hitByThunder[1]" :key="hitBy">
          {{ hitBy }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss"></style>
