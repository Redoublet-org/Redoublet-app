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
          <ion-title>{{ tournamentName }}</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-text color="primary">
          <h1>{{ tournamentName }}</h1>
        </ion-text>

        <ion-item>
          <ion-button router-link="/active-tournament/multiple-tables/movement-table" router-direction="forward">
            View Movement Table
          </ion-button>
        </ion-item>
        <ion-item>
          <ion-button router-link="/active-tournament/multiple-tables/amend-scoring" router-direction="forward">
            Amend Scoring
          </ion-button>
        </ion-item>
        <ion-item>
          <ion-button router-link="/active-tournament/multiple-tables/finalize" router-direction="forward">
            Finalize and Share Scoring
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
    IonButton
  } from "@ionic/vue";
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    name: "MultiTableActivePage",
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonBackButton,
      IonButtons,
      IonButton
    },
    setup() {
      return { router: useRouter() };
    },
    data() {
      return {
        tournamentName: "Example Tournament Name"
      };
    },
  });
  </script>