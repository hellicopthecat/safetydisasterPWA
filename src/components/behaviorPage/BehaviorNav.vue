<script setup></script>
<template>
  <v-container class="nav-cont mt-10">
    <v-row no-gutter>
      <v-col cols="6">
        <v-card min-height="200" router to="/behaviordisaster/naturaldisaster/typoon">
          <v-img height="200" src="../../../public/img/img/nature.jpg" cover> </v-img>
          <v-card-actions class="d-flex justify-center align-center pa-0">
            <v-btn class="text-h6" color="#ffdc17"> 자연재난 국민행동요령 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card min-height="200" router to="/behaviordisaster/socialdisaster/oceanpollution">
          <v-img height="200" src="../../../public/img/img/social.jpg" cover> </v-img>
          <v-card-actions class="d-flex justify-center align-center pa-0">
            <v-btn class="text-h6" color="#ffdc17"> 사회재난 국민행동요령 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card min-height="200">
          <v-img height="200" src="../../../public/img/img/save.jpeg" cover> </v-img>
          <v-card-actions class="d-flex justify-center align-center pa-0">
            <v-btn class="text-h6" color="#ffdc17"> 생활안전 국민행동요령 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card min-height="200">
          <v-img height="200" src="../../../public/img/img/civil.jpeg" cover> </v-img>
          <v-card-actions class="d-flex justify-center align-center pa-0">
            <v-btn class="text-h6" color="#ffdc17"> 민방위 국민행동요령 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.v-card-actions {
  background-color: #393a40;
}
</style>
