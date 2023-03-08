<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="backward"></ion-back-button>
        </ion-buttons>
        <ion-title>New Tournament</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <page-title title="Create new tournament"></page-title>
      <ion-list>
        <ion-item>
          <ion-button router-link="/new-tournament/single-table" router-direction="forward">
            Single table
          </ion-button>
        </ion-item>
        <ion-item>
          <ion-button router-link="/new-tournament/multiple-tables" router-direction="forward">
            Multiple tables
          </ion-button>
        </ion-item>
      </ion-list>
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
</script>
