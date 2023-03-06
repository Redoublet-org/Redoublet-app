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
        <page-title :title="tournamentName"></page-title>
        <ion-text color="secondary">
          <h2>Tournament status</h2>
        </ion-text>
        <ion-text color="tertiary">
            <p class="ion-text-center">Number of sign ups: {{ numberOfSignUps }} / {{ numberOfTeams }}</p>
        </ion-text>
        <ion-progress-bar :value="numberOfSignUps / numberOfTeams"></ion-progress-bar>
  
        <ion-item>
          <ion-button router-link="/new-tournament/multiple-tables/registrations" router-direction="forward">
            View Registrations
          </ion-button>
          <ion-button router-link="/new-tournament/multiple-tables" router-direction="back">
            Adjust Tournament
          </ion-button>
        </ion-item>
        <ion-item>
            <ion-button router-link="/active-tournament/multiple-tables" router-direction="forward">
                START TOURNAMENT
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
  } from "@ionic/vue";
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  import PageTitle from "@/components/PageTitle.vue";
  
  export default defineComponent({
    name: "MultiTableWaitingPage",
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonBackButton,
      IonButtons,
      IonButton,
      PageTitle
    },
    setup() {
      return { router: useRouter() };
    },
    data() {
      return {
        numberOfSignUps: 10,
        numberOfTeams: 16,
        tournamentName: "Example Tournament Name"
      };
    },
  });
  </script>