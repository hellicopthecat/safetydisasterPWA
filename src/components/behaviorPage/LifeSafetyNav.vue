<script>
export default {}
</script>

<template>
  <v-container class="d-flex">
    <v-chip-group>
      <v-chip router to="/behaviordisaster/lifesafety/firstaid">응급처치</v-chip>

      <v-chip router to="/behaviordisaster/lifesafety/cpr">심폐소생술</v-chip>

      <v-chip router to="/behaviordisaster/lifesafety/fireextinguisher">소화기 사용법</v-chip>

      <v-chip router to="/behaviordisaster/lifesafety/foodpoison">식중독</v-chip>

      <v-chip router to="/behaviordisaster/lifesafety/climb">산행안전사고</v-chip>

      <v-chip router to="/behaviordisaster/lifesafety/rides">어린이 놀이시설 안전사고</v-chip>

      <v-chip router to="/behaviordisaster/lifesafety/kidnapping">실종유괴 예방</v-chip>

      <v-chip router to="/behaviordisaster/lifesafety/sexualviolence">성폭력 예방</v-chip>

      <v-chip router to="/behaviordisaster/lifesafety/schoolviolence">학교 폭력 예방</v-chip>

      <v-chip router to="/behaviordisaster/lifesafety/internhijack">
        억류 및 납치 시 대처 요령
      </v-chip>
      <v-chip router to="/behaviordisaster/lifesafety/trafficaccident">
        교통 사고 시 대처 요령
      </v-chip>
      <v-chip router to="/behaviordisaster/lifesafety/transportmachineacc">
        승강기 및 에스컬레이터 사고 시 대처 요령
      </v-chip>
      <v-chip router to="/behaviordisaster/lifesafety/microdust">
        미세먼지 발생 시 대처 요령
      </v-chip>
      <v-chip router to="/behaviordisaster/lifesafety/usehydrant"> 소화전 사용방법 </v-chip>
      <v-chip router to="/behaviordisaster/lifesafety/homesafetycheck"> 가정 안전점검 </v-chip>
    </v-chip-group>
  </v-container>
</template>

<style lang="scss" scoped>
.v-chip {
  font-weight: 600;
  color: #2d539a;
}
</style>
