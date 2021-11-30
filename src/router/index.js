import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Instruction from '../views/Instruction.vue'
import Failed from '../views/FailedCC.vue'
import Round1 from '../views/Round1.vue'
import Round2 from '../views/Round2.vue'
import Round3 from '../views/Round3.vue'
import Test from '../views/Trials.vue'
import Feedback from '../views/Feedback.vue'
import CRT from '../views/CRT.vue'
// import EQ from '../views/EQ.vue'
// import SD from '../views/SD3.vue'
// import AQ from '../views/Autism.vue'
// import RGPTS from '../views/RGPTS.vue'
import Demos from '../views/Demos.vue'
import End from '../views/End.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/instruction',
    name: 'Instructions',
    component: Instruction
  },
  {
    path: '/returnsub',
    name: 'Return',
    component: Failed
  },
  {
    path: '/round1',
    name: 'Round_1',
    component: Round1
  },
  {
    path: '/round2',
    name: 'Round_2',
    component: Round2
  },
  {
    path: '/round3',
    name: 'Round_3',
    component: Round3
  },
  {
    path: '/testtrials',
    name: 'Trials',
    component: Test
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/demos',
    name: 'demos',
    component: Demos
  },
  // {
  //   path: '/sd',
  //   name: 'sd',
  //   component: SD
  // },
  // {
  //   path: '/aq',
  //   name: 'aq',
  //   component: AQ
  // },
  // {
  //   path: '/rgpts',
  //   name: 'rgpts',
  //   component: RGPTS
  // },
  {
    path: '/survey',
    name: 'crt',
    component: CRT
  },
  // {
  //   path: '/equo',
  //   name: 'eq',
  //   component: EQ
  // },
  {
    path: '/end',
    name: 'End',
    component: End
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
