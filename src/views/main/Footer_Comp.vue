<template>
  <v-footer class="bg-grey-lighten-1">
    <v-container class="">
      <v-row class="ma-0" justify="center" no-gutter>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white mx-auto"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link }}
        </v-btn>

        <v-col class="text-center pb-0" cols="12">
          <h4>{{ new Date().getFullYear() }}</h4>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
    }
  }
}
</script>

<style lang="scss"></style>
