import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInPage from '../views/LogInView.vue'
import JoinView from '../views/JoinView.vue'
import SafePlace from '../views/safeplace/SafePlaceView.vue'
import behaviorDisaster from '../views/behaviorView/BehaviorView.vue'
import naturalDisasterRouter from './naturalDisasterRouter'
import socialDisasterRouter from './socialDisasterRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LogInPage
    },
    {
      path: '/join',
      name: 'join',
      component: JoinView
    },
    {
      path: '/safeplace',
      name: 'safeplace',
      component: SafePlace
    },
    {
      path: '/behaviordisaster',
      name: 'behaviordisaster',
      component: behaviorDisaster
    },
    ...naturalDisasterRouter,
    ...socialDisasterRouter
  ]
})

export default router
