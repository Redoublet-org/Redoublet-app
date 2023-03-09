<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="backward"></ion-back-button>
        </ion-buttons>
        <ion-title>DDS</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <page-title title="DDS Example"></page-title>
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
  IonButtons
} from "@ionic/vue";
import PageTitle from "@/components/PageTitle.vue";
</script>
