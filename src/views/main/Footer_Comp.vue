<template>
  <v-bottom name="footer" class="bg-grey-lighten-1">
    <v-container class="d-flex justify-center">
      <v-row no-gutter>
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

        <v-col cols="12"> {{ new Date().getFullYear() }} — <strong>Vuetify</strong> </v-col>
      </v-row>
    </v-container>
  </v-bottom>
</template>

<script>
export default {
  data: () => ({
    links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
  })
}
</script>

<style lang="scss"></style>
