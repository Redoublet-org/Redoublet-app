import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import NewCompPage from '../views/NewCompPage.vue'
import JoinTourPage from '../views/JoinTourPage.vue'
import ScanPage from '../views/ScanPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/new-competition',
    name: 'NewCompetition',
    component: NewCompPage
  },
  {
    path: '/join-tournament',
    name: 'JoinTournament',
    component: JoinTourPage
  },
  {
    path: '/scan',
    name: 'Scan',
    component: ScanPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
