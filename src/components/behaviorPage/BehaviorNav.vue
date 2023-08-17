<script setup></script>
<template>
  <v-container class="nav-cont mt-10">
    <v-row no-gutter>
      <v-col cols="6">
        <v-card
          class="d-flex justify-center align-center"
          min-height="200"
          router
          to="/behaviordisaster/naturaldisaster/typoon"
          style="background-image: url('/img/n_disaster.jpg'); background-size: cover"
        >
          <v-btn class="text-h6 text-white" color="#393a40" style="background-color: #2d539a">
            자연재난 국민행동요령
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          class="d-flex justify-center align-center"
          min-height="200"
          router
          to="/behaviordisaster/socialdisaster/oceanpollution"
          style="background-image: url('/img/s_disaster.jpeg'); background-size: cover"
        >
          <v-btn class="text-h6 text-white" color="#393a40" style="background-color: #2d539a">
            사회재난 국민행동요령
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          class="d-flex justify-center align-center"
          min-height="200"
          router
          to="/behaviordisaster/lifesafety/firstaid"
          style="background-image: url('/img/l_safety.jpeg'); background-size: cover"
        >
          <v-btn class="text-h6 text-white" color="#393a40" style="background-color: #2d539a">
            생활안전 국민행동요령
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          class="d-flex justify-center align-center"
          min-height="200"
          router
          to="/behaviordisaster/civildefense/firstphase"
          style="background-image: url('/img/c_defense.jpeg'); background-size: cover"
        >
          <v-btn class="text-h6 text-white" color="#393a40" style="background-color: #2d539a">
            민방위 국민행동요령
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
