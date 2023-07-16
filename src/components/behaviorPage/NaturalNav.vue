<script>
import { RouterLink } from 'vue-router'
export default {
  props: ['title'],
  components() {
    RouterLink
  }
}
</script>

<template>
  <v-container class="">
    <v-list min-width="1000" class="disaster-nav d-flex text-white" nav>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/typoon"
      >
        태풍
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/flood"
      >
        홍수
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/heavyrain"
      >
        호우
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/strongwind"
      >
        강풍
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/heavysnow"
      >
        대설(폭설)
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/coldwave"
      >
        한파
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/highseas"
      >
        풍랑
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/yellowdust"
      >
        황사
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/heatwave"
      >
        폭염
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/drought"
      >
        가뭄
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/earthquake"
      >
        지진
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/tsunami"
      >
        지진해일
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/tidalwave"
      >
        해일
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/landslide"
      >
        산사태
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/volcano"
      >
        화산
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/waterlogged"
      >
        침수
      </v-list-item>
      <v-list-item
        color="white"
        style="text-decoration: none"
        to="/behaviordisaster/naturaldisaster/thunder"
      >
        낙뢰
      </v-list-item>
    </v-list>
    <v-container class="pb-0 mb-0">
      <h2>{{ title }}</h2>
    </v-container>
  </v-container>
</template>

<style lang="scss" scoped>
.disaster-nav {
  background-color: #ffdc17;
  .v-list-item {
    color: #2d539a;
  }
}
</style>
