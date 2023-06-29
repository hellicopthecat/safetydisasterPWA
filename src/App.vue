<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DisasterMsg from './components/disasterMsg/disaster_Msg.vue'
import WeatherNow from './components/weather/Weather_Now_Forecast.vue'
import WeatherToday from './components/weather/Weather_Today_Forecast.vue'
import WeatherTomorrow from './components/weather/Weather_Tomorrow_Forcast.vue'
</script>

<template>
  <header>
    <h1>Welcome</h1>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/login">Login</RouterLink>
        </li>
        <li>
          <RouterLink to="/join">Join</RouterLink>
        </li>
        <li>
          <RouterLink to="/safeplace">Safe Place</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster">국민행동요령</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <WeatherNow />
    <WeatherToday />
    <WeatherTomorrow />
    <DisasterMsg />
    <RouterView />
  </main>
</template>
