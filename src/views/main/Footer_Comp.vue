<template>
  <v-footer color="#393a40" class="">
    <div>
      <v-btn
        v-for="(link, index) in links"
        :key="link"
        color="#ffdc17"
        variant="text"
        class="mx-2"
        rounded="xl"
        :to="router[index]"
      >
        {{ link }}
      </v-btn>

      <h4 class="text-white">&copy; {{ new Date().getFullYear() }}</h4>
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
      router: ['/', '/', '/', '/', '/', '/', '/']
    }
  }
}
</script>

<style lang="scss">
footer {
  background-color: #393a40;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
  }
}
</style>
