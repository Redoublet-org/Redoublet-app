<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="back"></ion-back-button>
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
} from "@ionic/vue";
import PageTitle from "@/components/PageTitle.vue";
import { ref } from "vue";

const sampleData = ref(
  [{ name1: "John Doe", name2: "Alice" }, { name1: "Bob", name2: "Caitlin" },
  { name1: "Christiaan", name2: "Quirinus" }]);
const tournamentName = ref("Example Tournament Name");
</script>