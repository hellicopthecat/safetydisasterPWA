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
  <v-container>
    <v-list min-width="1000" class="d-flex" nav>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/typoon">태풍</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/flood">홍수</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/heavyrain">호우</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/strongwind">강풍</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/heavysnow">대설(폭설)</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/coldwave">한파</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/highseas">풍랑</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/yellowdust">황사</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/heatwave">폭염</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/drought">가뭄</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/earthquake">지진</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/tsunami">지진해일</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/tidalwave">해일</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/landslide">산사태</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/volcano">화산</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/waterlogged">침수</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/behaviordisaster/naturaldisaster/thunder">낙뢰</RouterLink>
      </v-list-item>
    </v-list>
    <v-container>
      <h1>{{ title }}</h1>
    </v-container>
  </v-container>
</template>
