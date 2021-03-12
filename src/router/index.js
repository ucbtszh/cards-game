import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Instruction from '../views/Instruction.vue'
import Task from '../views/Task.vue'
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
    name: 'Instruction',
    component: Instruction
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
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
