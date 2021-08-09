import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Instruction_d from '../views/Instruction_diff.vue'
import Instruction_s from '../views/Instruction_same.vue'
import Task from '../views/Task.vue'
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
    path: '/instruction_d',
    name: 'Instruction_d',
    component: Instruction_d
  },
  {
    path: '/instruction_s',
    name: 'Instruction_s',
    component: Instruction_s
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
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
