import { RouteRecordRaw } from "vue-router";
import SingleTablePage from "@/views/SingleTableTournament/SingleTablePage.vue";
import EnterBoardPage from "@/views/SingleTableTournament/EnterBoardPage.vue"
import SingleTableScore from "@/views/SingleTableTournament/SingleTableScore.vue"
import SingleTableDDS from "@/views/SingleTableTournament/SingleTableDDS.vue"
import SingleTableScoreTable from "@/views/SingleTableTournament/SingleTableScoreTable.vue"

export const routes: Array<RouteRecordRaw> = [
  ///
  /// TOURNAMENT CREATION
  ///
  {
    path: "/new-tournament/single-table",
    name: "SingleTablePage",
    component: SingleTablePage
  },
  {
    path: "/new-tournament/single-table/enter-board/:tableSettings",
    name: "EnterBoardPage",
    component: EnterBoardPage,
    props: true,
  },
  ///
  /// ACTIVE TOURNAMENT
  ///
  {
    path: "/active-tournament/single-table/score",
    name: "SingleTableScore",
    component: SingleTableScore
  },
  {
    path: "/active-tournament/single-table/dds",
    name: "SingleTableDDS",
    component: SingleTableDDS
  },
  {
    path: "/active-tournament/single-table/table",
    name: "Table",
    component: SingleTableScoreTable
  },
];
