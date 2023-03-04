import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { routes as mttRoutes } from './multi-table-tour' 
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import JoinTourPage from '../views/JoinTourPage.vue'
import ScanPage from '../views/ScanPage.vue'
import NewTourPage from '../views/NewTourPage.vue'

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
    path: '/new-tournament',
    name: 'NewTournamentPage',
    component: NewTourPage
  },
  {
    path: '/new-tournament/single-table',
    name: 'SingleTablePage',
    component: () => import("@/views/SingleTableTournament/SingleTablePage.vue")
  },
  {
    path: '/new-tournament/enter-board/:tableSettings',
    name: 'EnterBoardPage',
    component: () => import("@/views/SingleTableTournament/EnterBoardPage.vue"),
    props: true
  },
  {
    path: '/new-tournament/board-score',
    name: 'SingleTableScore',
    component: () => import("@/views/SingleTableTournament/SingleTableScore.vue")
  },
  {
    path: '/new-tournament/board-dds',
    name: 'SingleTableDDS',
    component: () => import("@/views/SingleTableTournament/SingleTableDDS.vue")
  },
  {
    path: '/new-tournament/board-table',
    name: 'Table',
    component: () => import("@/views/SingleTableTournament/SingleTableScoreTable.vue")
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
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes.concat(mttRoutes)
})

export default router
