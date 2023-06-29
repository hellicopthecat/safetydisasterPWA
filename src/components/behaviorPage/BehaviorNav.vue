<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div>
    <nav>
      <ul>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/typoon"
            >자연재난 국민행동요령</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/behaviordisaster/socialdisaster/oceanpollution"
            >사회재난 국민행동요령</RouterLink
          >
        </li>
        <!-- <li>
          <RouterLink to="">생활안전 국민행동요령</RouterLink>
        </li> -->
        <!-- <li>
          <RouterLink to="">민방위 국민행동요령</RouterLink>
        </li> -->
      </ul>
    </nav>
  </div>
</template>
