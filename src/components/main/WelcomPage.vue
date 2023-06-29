<script>
export default {
  data() {
    return {
      color: 'tomato'
    }
  }
}
</script>

<template>
  <div>
    <h1 :class="color + '_color'">hello</h1>
  </div>
</template>
