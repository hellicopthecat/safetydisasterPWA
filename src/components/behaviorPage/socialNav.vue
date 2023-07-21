<script>
export default {}
</script>

<template>
  <v-container>
    <v-chip-group>
      <v-chip router to="/behaviordisaster/socialdisaster/oceanpollution">해양오염</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/waterpollution">수질오염</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/breakwatersupply">급수중단</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/commonduct">공동구 재난</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/animaldisease">가축질병</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/infludisease">감염병 예방</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/subwayaccident">
        철도,지하철,유도선 사고
      </v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/stockerror">보이스피싱</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/nuclearaccident">원전사고</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/chemicalaccident">화학물질사고</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/fireaccident">화재</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/forestfire">산불</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/collapsebuilding">건축물 붕괴</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/damcollapse">댐 붕괴</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/explosivegas">가스폭발 사고</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/airCrash">항공기 사고</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/cbr">화생방 사고</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/electroout">정전 사고</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/electrogas">전기・가스 사고</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/shipaccident">유・도선 사고</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/wateraccident">수난 사고</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/terror">테러 발생</v-chip>
      <v-chip router to="/behaviordisaster/socialdisaster/supplyelectro"
        >전력수급단계별 행동요령</v-chip
      >
    </v-chip-group>
  </v-container>
</template>

<style lang="scss" scoped>
.v-chip {
  font-weight: 600;
  color: #2d539a;
}
</style>
