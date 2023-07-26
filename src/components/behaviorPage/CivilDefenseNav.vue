<script>
export default {}
</script>

<template>
  <v-container class="d-flex">
    <v-chip-group>
      <v-chip router to="/behaviordisaster/civildefense/firstphase">비상사태 시 행동요령</v-chip>
      <v-chip router to="/behaviordisaster/civildefense/redalert">민방공 시 행동요령</v-chip>
      <v-chip router to="/behaviordisaster/civildefense/chemicalradiation">
        화생방 공격 시 행동요령
      </v-chip>
      <v-chip router to="/behaviordisaster/civildefense/emergencysupply"> 비상대비물자 </v-chip>
    </v-chip-group>
  </v-container>
</template>

<style lang="scss" scoped>
.v-chip {
  font-weight: 600;
  color: #2d539a;
}
</style>
