<script>
import { RouterLink } from 'vue-router'
export default {
  props: ['title'],
  components() {
    RouterLink
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <div>
    <nav>
      <ul>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/typoon">태풍</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/flood">홍수</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/heavyrain">호우</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/strongwind">강풍</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/heavysnow">대설</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/coldwave">한파</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/highseas">풍랑</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/yellowdust">황사</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/heatwave">폭염</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/drought">가뭄</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/earthquake">지진</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/tsunami">지진해일</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/tidalwave">해일</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/landslide">산사태</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/volcano">화산</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/waterlogged">침수</RouterLink>
        </li>
        <li>
          <RouterLink to="/behaviordisaster/naturaldisaster/thunder">낙뢰</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
