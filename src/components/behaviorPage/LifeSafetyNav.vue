<script>
export default {}
</script>

<template>
  <v-container class="d-flex">
    <v-chip-group>
      <v-chip router to="/behaviordisaster/lifesafety/firstaid">응급처치</v-chip>
    </v-chip-group>
    <v-chip-group>
      <v-chip router to="/behaviordisaster/lifesafety/cpr">심폐소생술</v-chip>
    </v-chip-group>
    <v-chip-group>
      <v-chip router to="/behaviordisaster/lifesafety/fireextinguisher">소화기 사용법</v-chip>
    </v-chip-group>
    <v-chip-group>
      <v-chip router to="/behaviordisaster/lifesafety/foodpoison">식중독</v-chip>
    </v-chip-group>
  </v-container>
</template>

<style lang="scss" scoped>
.v-chip {
  font-weight: 600;
  color: #2d539a;
}
</style>
