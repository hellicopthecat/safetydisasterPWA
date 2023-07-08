<template>
  <NowForecast />
</template>

<script>
import { defineComponent } from 'vue'
import NowForecast from '../components/weather/Weather_Now_Forecast.vue'

// Components

export default defineComponent({
  name: 'HomeView',

  components: {
    NowForecast
  }
})
</script>
