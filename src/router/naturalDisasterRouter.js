import NDTypoon from '../components/behaviorPage/NaturalDisaster/ND_Typoon_Page.vue'
import NDFlood from '../components/behaviorPage/NaturalDisaster/ND_Flood_Page.vue'
import NDHeavyRain from '../components/behaviorPage/NaturalDisaster/ND_HeavyRain_Page.vue'
import NDStrongWind from '../components/behaviorPage/NaturalDisaster/ND_HeavyWind_Page.vue'
import NDHeavySnow from '../components/behaviorPage/NaturalDisaster/ND_HeavySnow_Page.vue'
import NDColdWave from '../components/behaviorPage/NaturalDisaster/ND_ColdWave_Page.vue'
import NDHighSeas from '../components/behaviorPage/NaturalDisaster/ND_HighSeas_Page.vue'
import NDYellowDust from '../components/behaviorPage/NaturalDisaster/ND_YellowDust_Page.vue'
import NDHeatWave from '../components/behaviorPage/NaturalDisaster/ND_HeatWave_Page.vue'
import NDDrought from '../components/behaviorPage/NaturalDisaster/ND_Drought_Page.vue'
import NDEarthQuake from '../components/behaviorPage/NaturalDisaster/ND_EarthQuake_Page.vue'
import NDTsunami from '../components/behaviorPage/NaturalDisaster/ND_Tsunami_Page.vue'
import NDTidalWave from '../components/behaviorPage/NaturalDisaster/ND_TidalWave_Page.vue'
import NDLandSlide from '../components/behaviorPage/NaturalDisaster/ND_LandSlide_Page.vue'
import NDVolcano from '../components/behaviorPage/NaturalDisaster/ND_Volcano_Page.vue'
import NDWaterLogged from '../components/behaviorPage/NaturalDisaster/ND_WaterLogged_Page.vue'
import NDThunder from '../components/behaviorPage/NaturalDisaster/ND_Thunder_Page.vue'
const naturalDisasterRouter = [
  {
    path: '/behaviordisaster/naturaldisaster/typoon',
    name: 'ndtypoon',
    component: NDTypoon
  },
  {
    path: '/behaviordisaster/naturaldisaster/flood',
    name: 'ndflood',
    component: NDFlood
  },
  {
    path: '/behaviordisaster/naturaldisaster/heavyrain',
    name: 'ndheavyrain',
    component: NDHeavyRain
  },
  {
    path: '/behaviordisaster/naturaldisaster/strongwind',
    name: 'ndstrongwind',
    component: NDStrongWind
  },
  {
    path: '/behaviordisaster/naturaldisaster/heavysnow',
    name: 'ndheavysnow',
    component: NDHeavySnow
  },
  {
    path: '/behaviordisaster/naturaldisaster/coldwave',
    name: 'ndcoldwave',
    component: NDColdWave
  },
  {
    path: '/behaviordisaster/naturaldisaster/highseas',
    name: 'ndhighseas',
    component: NDHighSeas
  },
  {
    path: '/behaviordisaster/naturaldisaster/yellowdust',
    name: 'ndyellowdust',
    component: NDYellowDust
  },
  {
    path: '/behaviordisaster/naturaldisaster/heatwave',
    name: 'ndheatwave',
    component: NDHeatWave
  },
  {
    path: '/behaviordisaster/naturaldisaster/drought',
    name: 'nddrought',
    component: NDDrought
  },
  {
    path: '/behaviordisaster/naturaldisaster/earthquake',
    name: 'ndearthquake',
    component: NDEarthQuake
  },
  {
    path: '/behaviordisaster/naturaldisaster/tsunami',
    name: 'ndtsunami',
    component: NDTsunami
  },
  {
    path: '/behaviordisaster/naturaldisaster/tidalwave',
    name: 'ndtidalwave',
    component: NDTidalWave
  },
  {
    path: '/behaviordisaster/naturaldisaster/landslide',
    name: 'ndlandslide',
    component: NDLandSlide
  },
  {
    path: '/behaviordisaster/naturaldisaster/volcano',
    name: 'ndvolcano',
    component: NDVolcano
  },
  {
    path: '/behaviordisaster/naturaldisaster/waterlogged',
    name: 'ndwaterlogged',
    component: NDWaterLogged
  },
  {
    path: '/behaviordisaster/naturaldisaster/thunder',
    name: 'ndthunder',
    component: NDThunder
  }
]

export default naturalDisasterRouter
