const civilDefense = [
  {
    path: '/behaviordisaster/civildefense/firstphase',
    name: 'firstphase',
    component: () => import('../components/behaviorPage/CivilDefense/CD_FirstPhase.vue')
  },
  {
    path: '/behaviordisaster/civildefense/redalert',
    name: 'redalert',
    component: () => import('../components/behaviorPage/CivilDefense/CD_RedAlert.vue')
  },
  {
    path: '/behaviordisaster/civildefense/chemicalradiation',
    name: 'chemicalradiation',
    component: () => import('../components/behaviorPage/CivilDefense/CD_ChemicalRadiation.vue')
  },
  {
    path: '/behaviordisaster/civildefense/emergencysupply',
    name: 'emergencysupply',
    component: () => import('../components/behaviorPage/CivilDefense/CD_EmergencySupply.vue')
  }
]
export default civilDefense
