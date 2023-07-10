<script>
export default {
  data() {
    return {
      title: 'JOIN'
    }
  }
}
</script>
<template>
  <v-container>
    <h2>{{ title }}</h2>
    <v-sheet width="300">
      <v-form>
        <v-text-field label="ID"></v-text-field>
        <v-text-field label="PASSWORD"></v-text-field>
        <v-text-field label="CONFIRM PASSWORD"></v-text-field>
        <v-text-field label="NAME"></v-text-field>
        <v-btn>SUBMIT</v-btn>
        <v-btn router to="/">CANCEL</v-btn>
      </v-form>
      <v-btn router to="/login">I already have Account</v-btn>
    </v-sheet>
  </v-container>
</template>
