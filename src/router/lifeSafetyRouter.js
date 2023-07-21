const lifeSafetyRouter = [
  {
    path: '/behaviordisaster/lifesafety/firstaid',
    name: 'firstaid',
    component: () => import('../components/behaviorPage/LifeSatety/LS_FistAid.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/cpr',
    name: 'cpr',
    component: () => import('../components/behaviorPage/LifeSatety/LS_CPR.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/fireextinguisher',
    name: 'fireextinguisher',
    component: () => import('../components/behaviorPage/LifeSatety/LS_FireExtinguisher.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/foodpoison',
    name: 'foodpoison',
    component: () => import('../components/behaviorPage/LifeSatety/LS_FoodPoison.vue')
  }
]

export default lifeSafetyRouter
