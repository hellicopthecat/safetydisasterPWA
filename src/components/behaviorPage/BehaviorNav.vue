<script setup></script>
<template>
  <v-container class="nav-cont mt-10">
    <v-row no-gutter>
      <v-col cols="6">
        <v-card
          class="d-flex align-center"
          min-height="200"
          router
          to="/behaviordisaster/naturaldisaster/typoon"
        >
          <!-- <v-img height="200" src="src/img/nature.jpg" cover> </v-img> -->
          <v-card-text class="d-flex justify-center align-center pa-0">
            <v-btn class="text-h6 text-white" color="#393a40" style="background-color: #2d539a">
              자연재난 국민행동요령
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          class="d-flex align-center"
          min-height="200"
          router
          to="/behaviordisaster/socialdisaster/oceanpollution"
        >
          <!-- <v-img height="200" src="src/img/social.jpg" cover> </v-img> -->
          <v-card-text class="d-flex justify-center align-center pa-0">
            <v-btn class="text-h6 text-white" color="#393a40" style="background-color: #2d539a">
              사회재난 국민행동요령
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          class="d-flex align-center"
          min-height="200"
          router
          to="/behaviordisaster/lifesafety/firstaid"
        >
          <!-- <v-img height="200" src="src/img/save.jpeg" cover> </v-img> -->
          <v-card-text class="d-flex justify-center align-center pa-0">
            <v-btn class="text-h6 text-white" color="#393a40" style="background-color: #2d539a">
              생활안전 국민행동요령
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          class="d-flex align-center"
          min-height="200"
          router
          to="/behaviordisaster/civildefense/firstphase"
        >
          <!-- <v-img height="200" src="src/img/civil.jpeg" cover> </v-img> -->
          <v-card-text class="d-flex justify-center align-center pa-0">
            <v-btn class="text-h6 text-white" color="#393a40" style="background-color: #2d539a">
              민방위 국민행동요령
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.v-card,
.v-card-text {
  background-color: #393a40;
}
</style>
