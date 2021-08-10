import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Instruction from '../views/Instruction.vue'
import Round1 from '../views/Round1.vue'
import Round2 from '../views/Round2.vue'
import Round3 from '../views/Round3.vue'
import Test from '../views/Trials.vue'
import Feedback from '../views/Feedback.vue'
import Survey from '../views/Survey.vue'
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
    path: '/survey',
    name: 'Survey',
    component: Survey
  },
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
