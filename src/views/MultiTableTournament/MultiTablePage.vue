<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            default-href="/home"
            routerDirection="back"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>New Tournament</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-text color="primary">
        <h1>New Tournament with Multiple Tables</h1>
      </ion-text>

      <ion-item>
        <ion-label>Tournament Name</ion-label>
        <ion-input placeholder="Enter tournament name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Tournament Type</ion-label>
        <ion-select selected="Pairs (Default)">
          <ion-select-option
            :value="item"
            v-for="item of ['Pairs (Default)', 'Teams', 'Individual']"
            :key="item"
          >
            {{ item }}
          </ion-select-option>
        </ion-select>
      </ion-item>

      <ion-text color="secondary">
        <h2>Characteristics</h2>
      </ion-text>
      <ion-item>
        <ion-label>Number of Tables</ion-label>
        <ion-input
          placeholder="Enter number of tables"
          type="number"
          min="1"
          v-model="numberOfTables"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Total Boards</ion-label>
        <ion-input
          placeholder=">= number of tables"
          type="number"
          :min="numberOfTables"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Number of Teams</ion-label>
        <ion-input
          placeholder="Pairs / Individuals / Teams"
          type="number"
          min="2"
          v-model="numberOfTeams"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Scoring</ion-label>
        <ion-select selected="SCORING">
            <ion-select-option
            :value="item"
            v-for="item of ['SCORING', 'TO BE', 'DETERMINED']"
            :key="item"
          >
            {{ item }}
          </ion-select-option>
        </ion-select>>
      </ion-item>
      <ion-item>
        <ion-label>Number of Winners</ion-label>
        <ion-input
          placeholder="Enter number of winners"
          type="number"
          :max="numberOfTeams"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-button router-link="/new-tournament/multiple-tables/waiting" router-direction="forward">
          Next
        </ion-button>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonButton,
  IonInput
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MultiTablePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    // eslint-disable-next-line vue/no-unused-components
    IonButton,
    IonInput
  },
  setup() {
    return { router: useRouter() };
  },
  data() {
    return {
      numberOfTables: 1,
      numberOfTeams: 2
    };
  },
});
</script>