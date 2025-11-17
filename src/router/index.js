import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInPage from '../views/LogInView.vue'
import JoinView from '../views/JoinView.vue'
import SafeMap from '../views/SafeMap.vue'
import ErrorPage from '../views/ErrorPage.vue'
import SiteMap from '../components/footer/Site_Map.vue'
import AboutContact from '../components/footer/About_Contact.vue'
import behaviorDisaster from '../components/behaviorPage/BehaviorNav.vue'
import RealTimeChat from '../components/socketChat/RealTimeChat.vue'
import DisasterNow from '../components/disasterMsg/Disaster_Msg_info.vue'
import naturalDisasterRouter from './naturalDisasterRouter'
import socialDisasterRouter from './socialDisasterRouter'
import lifeSafetyRouter from './lifeSafetyRouter'
import civilDefenseRouter from './civilDefenseRouter'

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
      path: '/chat',
      name: 'chat',
      component: RealTimeChat
    },
    {
      path: '/safemap',
      name: 'SafeMap',
      component: SafeMap
    },
    {
      path: '/disasternow',
      name: 'DisasterNow',
      component: DisasterNow
    },
    {
      path: '/:id',
      name: 'ErrorPage',
      component: ErrorPage
    },
    {
      path: '/sitemap',
      name: 'SiteMap',
      component: SiteMap
    },
    {
      path: '/about&contact',
      name: 'AboutContact',
      component: AboutContact
    },
    {
      path: '/behaviordisaster',
      name: 'behaviordisaster',
      component: behaviorDisaster
    },
    ...naturalDisasterRouter,
    ...socialDisasterRouter,
    ...lifeSafetyRouter,
    ...civilDefenseRouter
  ]
})

export default router
