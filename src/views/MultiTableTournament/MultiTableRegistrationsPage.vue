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
          <ion-title>Registrations</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <page-title :title="tournamentName"></page-title>
        <ion-text color="secondary">
          <h2>View Registrations</h2>
        </ion-text>
        <ion-grid>
            <ion-row>
                <ion-col size="auto"></ion-col>
                <ion-col class="ion-text-center">Pair</ion-col>
            </ion-row>
            <ion-row v-for="(item, index) in sampleData" :key="item">
                <ion-col size="auto" class="ion-text-center">{{ index + 1 }}</ion-col>
                <ion-col class="ion-text-center">{{ item.name1 }} & {{ item.name2 }}</ion-col>
            </ion-row>
        </ion-grid>

  
        <ion-item>
          <ion-button router-link="/new-tournament/multiple-tables/registrations" router-direction="forward">
            View Registrations
          </ion-button>
          <ion-button router-link="/new-tournament/multiple-tables" router-direction="back">
            Adjust Tournament
          </ion-button>
        </ion-item>
        <ion-item>
            <ion-button router-link="/new-tournament/multiple-tables/registrations" router-direction="forward">
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
    name: "MultiTableRegistrationsPage",
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
      PageTitle
    },
    setup() {
      return { router: useRouter() };
    },
    data() {
      return {
        sampleData: [{name1: "John Doe", name2: "Alice"}, {name1: "Bob", name2: "Caitlin"}, {name1: "Christiaan", name2: "Quirinus"}],
        tournamentName: "Example Tournament Name"
      };
    },
  });
  </script>