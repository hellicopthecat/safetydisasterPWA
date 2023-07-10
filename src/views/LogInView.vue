<script>
export default {
  data() {
    return {
      title: 'Log In'
    }
  },
  setup() {}
}
</script>

<template>
  <v-container>
    <h2>{{ title }}</h2>
    <v-sheet width="300">
      <v-form>
        <v-text-field label="ID"></v-text-field>
        <v-text-field label="PASSWORD"></v-text-field>
        <v-btn>LOG IN</v-btn>
        <v-btn router to="/">CANCEL</v-btn>
      </v-form>
      <v-spacer></v-spacer>
      <v-btn router to="/join">Create Account</v-btn>
    </v-sheet>
  </v-container>
</template>
