import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInPage from '../views/LogInView.vue'
import JoinView from '../views/JoinView.vue'
import ErrorPage from '../views/ErrorPage.vue'
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
      component: LogInPage
    },
    {
      path: '/join',
      name: 'join',
      component: JoinView
    },
    {
      path: '/*',
      name: 'ErrorPage',
      component: ErrorPage
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
