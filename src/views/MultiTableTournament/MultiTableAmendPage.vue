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
          <ion-title>Amend Scoring</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <page-title :title="tournamentName"></page-title>
        <ion-text color="secondary">
          <h2>Amend Scoring</h2>
        </ion-text>

        <ion-item>
          <ion-label>Table Number</ion-label>
          <ion-input placeholder="Enter table number"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Round Number</ion-label>
          <ion-input placeholder="Enter round number"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Board Number</ion-label>
          <ion-input placeholder="Enter board number"></ion-input>
        </ion-item>
        
        <ion-text color="secondary">
          <p>Current scoring</p>
        </ion-text>
        <ion-item>
          <ion-label>Contract</ion-label>
          <ion-input placeholder="Enter contract" v-model="sampleContract"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Result</ion-label>
          <ion-input placeholder="Enter result" v-model="sampleResult"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Score</ion-label>
          <ion-input placeholder="Enter score" v-model="sampleScore"></ion-input>
        </ion-item>
        <ion-item>
          <ion-button>
            Save
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
  import PageTitle from "@/components/PageTitle.vue";
  
  export default defineComponent({
    name: "MultiTableAmendPage",
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonBackButton,
      IonButtons,
      IonButton,
      IonInput,
      PageTitle
    },
    setup() {
      return { router: useRouter() };
    },
    data() {
      return {
        sampleContract: "3SA - NS",
        sampleResult: "+1",
        sampleScore: "430",
        tournamentName: "Example Tournament Name"
      };
    },
  });
  </script>