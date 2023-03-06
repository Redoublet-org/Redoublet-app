import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { routes as sttRoutes } from "./single-table-tour"
import { routes as mttRoutes } from './multi-table-tour' 
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import JoinTourPage from '../views/JoinTourPage.vue'
import ScanPage from '../views/ScanPage.vue'
import NewTourPage from '../views/NewTourPage.vue'

import SearchTourPage from '../views/JoinTournament/SearchTourPage.vue';
import OpenToursPage from '../views/JoinTournament/OpenToursPage.vue';
import WaitForTourStartPage from '../views/JoinTournament/WaitForTourStartPage.vue';
import WalkingSchemePage from '../views/JoinTournament/WalkingSchemePage.vue';
import InputScorePage from '../views/JoinTournament/InputScorePage.vue';
import ScanHandsSouthPage from '../views/JoinTournament/ScanHandsSouthPage.vue';
import ScanHandsWestPage from '../views/JoinTournament/ScanHandsWestPage.vue';
import ScanHandsNorthPage from '../views/JoinTournament/ScanHandsNorthPage.vue';
import ScanHandsEastPage from '../views/JoinTournament/ScanHandsEastPage.vue';
import ScoringDDSPage from '../views/JoinTournament/ScoringDDSPage.vue';
import WaitForTourEndPage from '../views/JoinTournament/WaitForTourEndPage.vue';
import TourEndedPage from '../views/JoinTournament/TourEndedPage.vue';

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
    path: '/join-tournament',
    name: 'JoinTournament',
    component: JoinTourPage
  },
  {
    path: '/scan',
    name: 'Scan',
    component: ScanPage
  },
  {
    path: '/join-tournament/search',
    name: 'SearchTournament',
    component: SearchTourPage
  },
  {
    path: '/join-tournament/join',
    name: 'OpenTournaments',
    component: OpenToursPage
  },
  {
    path: '/join-tournament/wait-start',
    name: 'WaitForTourStart',
    component: WaitForTourStartPage
  },
  {
    path: '/join-tournament/walking-scheme',
    name: 'WalkingScheme',
    component: WalkingSchemePage
  },
  {
    path: '/join-tournament/input-score',
    name: 'InputScore',
    component: InputScorePage
  },
  {
    path: '/join-tournament/scan-hand-south',
    name: 'ScanHandsSouthTour',
    component: ScanHandsSouthPage
  },
  {
    path: '/join-tournament/scan-hand-west',
    name: 'ScanHandsWestTour',
    component: ScanHandsWestPage
  },
  {
    path: '/join-tournament/scan-hand-north',
    name: 'ScanHandsNorthTour',
    component: ScanHandsNorthPage
  },
  {
    path: '/join-tournament/scan-hand-east',
    name: 'ScanHandsEastTour',
    component: ScanHandsEastPage
  },
  {
    path: '/join-tournament/scoring-and-DDS',
    name: 'ScoringDDS',
    component: ScoringDDSPage
  },
  {
    path: '/join-tournament/waiting-for-end',
    name: 'WaitForTourEnded',
    component: WaitForTourEndPage
  },
  {
    path: '/join-tournament/end',
    name: 'TournamentEnded',
    component: TourEndedPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [routes, sttRoutes, mttRoutes].flat(1)
})

export default router
