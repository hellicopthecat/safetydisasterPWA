<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <v-container>
    <nav>
      <v-row no-gutter>
        <v-col cols="6">
          <v-card min-height="200">
            <v-list-item
              class="text-blue text-center"
              router
              to="/behaviordisaster/naturaldisaster/typoon"
            >
              자연재난 국민행동요령
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card min-height="200">
            <v-list-item
              class="text-blue text-center"
              router
              to="/behaviordisaster/socialdisaster/oceanpollution"
            >
              사회재난 국민행동요령
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card min-height="200">
            <v-list-item class="text-blue text-center"> 생활안전 국민행동요령 </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card min-height="200">
            <v-list-item class="text-blue text-center"> 민방위 국민행동요령 </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </nav>
  </v-container>
</template>
