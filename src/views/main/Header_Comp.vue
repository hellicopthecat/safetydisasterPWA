<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import MainNav from '../main/Main_Nav.vue'
const drawer = ref(false)
</script>

<template>
  <v-app-bar class="pa-0 d-flex align-center" :elevation="5">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title class="text-left">
      <Router-link to="/"> WHEN YOU EMERGENCY </Router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn class="mr-15" icon router to="/login">
      <v-icon>mdi-login</v-icon>
      LOG IN
    </v-btn>
    <v-btn class="mr-15" icon router to="/join">
      <v-icon>mdi-account</v-icon>
      JOIN
    </v-btn>
  </v-app-bar>
  <v-card flat>
    <v-navigation-drawer v-model="drawer" location="left" permanent>
      <MainNav />
    </v-navigation-drawer>
  </v-card>
</template>

<style lang="scss" scoped>
.v-icon {
  border: none;
  padding: 0;
}
</style>
