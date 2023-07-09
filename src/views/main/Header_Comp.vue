<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import MainNav from '../main/Main_Nav.vue'
const drawer = ref(false)
</script>

<template>
  <v-app-bar class="pa-0" :elevation="5">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title class="text-left">
      <Router-link to="/"> WHEN YOU EMERGENCY </Router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon> mdi-heart </v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon> mdi-magnify </v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon> mdi-dots-vertical </v-icon>
    </v-btn>
  </v-app-bar>
  <v-card flat>
    <v-navigation-drawer v-model="drawer" location="left" permanent>
      <MainNav />
    </v-navigation-drawer>
  </v-card>
</template>

<style></style>
