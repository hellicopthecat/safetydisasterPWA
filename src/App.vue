<script>
import { RouterView } from 'vue-router'
import HeaderComp from './views/main/Header_Comp.vue'
import FooterComp from './views/main/Footer_Comp.vue'

export default {
  name: 'App',
  components: {
    RouterView,
    HeaderComp,
    FooterComp
  },
  data: () => ({
    //
  })
}
</script>

<template>
  <v-app>
    <HeaderComp />
    <v-main class="mt-20">
      <RouterView />
    </v-main>
    <FooterComp />
  </v-app>
</template>

<style>
p {
  margin: 0;
}
</style>
