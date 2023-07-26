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
  },
  {
    path: '/behaviordisaster/lifesafety/climb',
    name: 'climb',
    component: () => import('../components/behaviorPage/LifeSatety/LS_Climb.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/rides',
    name: 'rides',
    component: () => import('../components/behaviorPage/LifeSatety/LS_Rides.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/kidnapping',
    name: 'kidnapping',
    component: () => import('../components/behaviorPage/LifeSatety/LS_KidNapping.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/sexualviolence',
    name: 'sexualviolence',
    component: () => import('../components/behaviorPage/LifeSatety/LS_Sexualviolence.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/schoolviolence',
    name: 'schoolviolence',
    component: () => import('../components/behaviorPage/LifeSatety/LS_SchoolViolence.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/familyviolence',
    name: 'familyviolence',
    component: () => import('../components/behaviorPage/LifeSatety/LS_FamilyViolence.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/internhijack',
    name: 'internhijack',
    component: () => import('../components/behaviorPage/LifeSatety/LS_InternHijack.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/trafficaccident',
    name: 'trafficaccident',
    component: () => import('../components/behaviorPage/LifeSatety/LS_TrafficAccident.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/transportmachineacc',
    name: 'transportmachineacc',
    component: () => import('../components/behaviorPage/LifeSatety/LS_TransportMachineAcc.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/microdust',
    name: 'microdust',
    component: () => import('../components/behaviorPage/LifeSatety/LS_MicroDust.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/usehydrant',
    name: 'usehydrant',
    component: () => import('../components/behaviorPage/LifeSatety/LS_UseHydrant.vue')
  },
  {
    path: '/behaviordisaster/lifesafety/homesafetycheck',
    name: 'homesafetycheck',
    component: () => import('../components/behaviorPage/LifeSatety/LS_HomeSafetyCheck.vue')
  }
]

export default lifeSafetyRouter
