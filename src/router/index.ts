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
    path: '/new-tournament',
    name: 'NewTournamentPage',
    component: () => import("@/views/NewTourPage.vue")
  },
  {
    path: '/new-tournament/single-table',
    name: 'SingleTablePage',
    component: () => import("@/views/NewTournament/SingleTablePage.vue")
  },
  {
    path: '/new-tournament/enter-board/:tableSettings',
    name: 'EnterBoardPage',
    component: () => import("@/views/NewTournament/EnterBoardPage.vue"),
    props: true
  },
  {
    path: '/new-tournament/board-score',
    name: 'SingleTableScore',
    component: () => import("@/views/NewTournament/SingleTableScore.vue")
  },
  {
    path: '/new-tournament/board-dds',
    name: 'SingleTableDDS',
    component: () => import("@/views/NewTournament/SingleTableDDS.vue")
  },
  {
    path: '/new-tournament/board-table',
    name: 'Table',
    component: () => import("@/views/NewTournament/SingleTableScoreTable.vue")
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
  routes
})

export default router
