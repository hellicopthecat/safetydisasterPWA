<script>
export default {
  data() {
    return {
      sitemap: [
        'HOME',
        '현 재난상황전파',
        '대피시설',
        '위급시 행동요령',
        '로그인',
        '회원가입',

        'ABOUT & CONTACT'
      ],
      links: [
        '/',
        '/disasternow',
        '/safemap',
        '/bevaiordisaster',
        '/login',
        '/join',
        '/about&contact'
      ]
    }
  }
}
</script>
<template>
  <v-container>
    <h2 color="393a40" class="text-center my-10">SITE MAP</h2>
    <v-row>
      <v-col v-for="(map, index) in sitemap" :key="map" cols="3">
        <v-list rounded>
          <v-list-item router :to="links[index]">
            <v-btn color="#ffdc17">
              {{ map }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.v-list {
  background-color: #2d539a;
}
</style>
