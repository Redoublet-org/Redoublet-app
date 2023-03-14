import { RouteRecordRaw } from "vue-router";
import MultiTablePage from "../views/MultiTableTournament/MultiTablePage.vue"
import MultiTableWaitingPage from "../views/MultiTableTournament/MultiTableWaitingPage.vue"
import MultiTableRegistrationsPage from "../views/MultiTableTournament/MultiTableRegistrationsPage.vue"
import MultiTableActivePage from "../views/MultiTableTournament/MultiTableActivePage.vue"
import MultiTableMovementPage from "../views/MultiTableTournament/MultiTableMovementPage.vue"
import MultiTableAmendPage from "../views/MultiTableTournament/MultiTableAmendPage.vue"
import MultiTableFinalizePage from "../views/MultiTableTournament/MultiTableFinalizePage.vue"

export const routes: Array<RouteRecordRaw> = [
    ///
    /// TOURNAMENT CREATION
    ///
    {
        path: "/new-tournament/multiple-tables",
        name: "MultiTablePage",
        component: MultiTablePage
    },
    {
        path: "/new-tournament/multiple-tables/waiting",
        name: "MultiTableWaitingPage",
        component: MultiTableWaitingPage
    },
    {
        path: "/new-tournament/multiple-tables/registrations",
        name: "MultiTableRegistrationsPage",
        component: MultiTableRegistrationsPage
    },
    /// 
    /// ACTIVE TOURNAMENT
    ///
    {
        path: "/active-tournament/multiple-tables",
        name: "MultiTableActivePage",
        component: MultiTableActivePage
    },
    {
        path: "/active-tournament/multiple-tables/movement-table",
        name: "MultiTableMovementPage",
        component: MultiTableMovementPage
    },
    {
        path: "/active-tournament/multiple-tables/amend-scoring",
        name: "MultiTableAmendPage",
        component: MultiTableAmendPage
    },
    {
        path: "/active-tournament/multiple-tables/finalize",
        name: "MultiTableFinalizePage",
        component: MultiTableFinalizePage
    }
];
