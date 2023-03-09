<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="back"></ion-back-button>
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
  
<script setup lang="ts">
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
import PageTitle from "@/components/PageTitle.vue";
import { ref } from "vue";

const sampleContract = ref("3SA - NS");
const sampleResult = ref("+1");
const sampleScore = ref("430");
const tournamentName = ref("Example Tournament Name");
</script>