<script>
import { ref, onMounted, reactive } from 'vue'
import NaturalNav from '../NaturalNav.vue'
import volcano from '../../../behaviordata/natural/volcano'
export default {
  components: {
    NaturalNav
  },
  setup() {
    const headTitle = ref('화산재 낙하시 국민행동요령')
    const prepareVolcanoAsh = reactive([])
    const fallenVolcanoAsh = reactive([])
    const removeVolcanoAsh = reactive([])
    onMounted(() => {
      fetchData()
    })

    async function fetchData() {
      try {
        const data = volcano.response.body.items.item
        //제목
        const subTitleCont = data
          .map((item) => (item.safetyCate2 === 1015 ? item.safetyCateNm3 : null))
          .filter((item) => item != undefined)
        const subTitle = new Set(subTitleCont)
        // 경보 별 행동사항
        const prepareVolcanoAshAction = data
          .map((item) => (item.safetyCate3 === 1015001 ? item.actRmks : null))
          .filter((item) => item != null)
        const prepareVolcanoAshImg = data
          .map((item) => (item.safetyCate3 === 1015001 ? item.actRmks : null))
          .filter((item) => item != null)
        const fallenVolcanoAshAction = data
          .map((item) => (item.safetyCate3 === 1015001 ? item.actRmks : null))
          .filter((item) => item != null)
        const removeVolcanoAshAction = data
          .map((item) => (item.safetyCate3 === 1015001 ? item.actRmks : null))
          .filter((item) => item != null)

        prepareVolcanoAsh.push(
          [...subTitle][0],
          prepareVolcanoAshAction,
          prepareVolcanoAshImg[0].textContent
        )
        fallenVolcanoAsh.push([...subTitle][1], fallenVolcanoAshAction)
        removeVolcanoAsh.push([...subTitle][2], removeVolcanoAshAction)
      } catch (error) {
        console.error(error)
      }
    }
    return {
      headTitle,
      prepareVolcanoAsh,
      fallenVolcanoAsh,
      removeVolcanoAsh
    }
  }
}
</script>

<template>
  <NaturalNav :title="headTitle" />
  <v-container class="volcano d-flex flex-column align-center justify-space-around">
    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ prepareVolcanoAsh[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="prepare in prepareVolcanoAsh[1]" :key="prepare">
        <p>
          {{ prepare }}
        </p>
      </v-card-text>
      <v-img :src="prepareVolcanoAsh[2]" alt="이미지자료" max-width="300" class="mx-auto" />
    </v-card>
    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ fallenVolcanoAsh[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="fallen in fallenVolcanoAsh[1]" :key="fallen">
        <p>
          {{ fallen }}
        </p>
      </v-card-text>
    </v-card>
    <v-card width="900" class="pa-5 mb-5" :elevation="5">
      <v-card-title>
        <h3>{{ removeVolcanoAsh[0] }}</h3>
      </v-card-title>
      <v-card-text v-for="remove in removeVolcanoAsh[1]" :key="remove">
        <p>
          {{ remove }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
.volcano {
  h3 {
    color: #393a40;
  }
  p {
    margin: 0px;
    padding-bottom: 0px;
    color: #393a40;
  }
  .v-card-text {
    padding: 5px;
  }
}
</style>
