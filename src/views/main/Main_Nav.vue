<script></script>
<template>
  <v-layout>
    <v-list>
      <v-list-item color="primary" rounded="shaped" router to="/">
        <template v-slot:prepend>
          <v-icon icon>mdi-home</v-icon>
        </template>
        <v-list-item-title>HOME</v-list-item-title>
      </v-list-item>

      <v-list-item color="primary" rounded="shaped" router to="/behaviordisaster">
        <template v-slot:prepend>
          <v-icon icon>mdi-alert</v-icon>
        </template>
        <v-list-item-title> 위급시 행동요령</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-layout>
</template>

<style lang="scss" scoped>
.v-list-item,
.v-icon {
  color: gray;
}
.v-icon {
  border: none;
}
</style>
