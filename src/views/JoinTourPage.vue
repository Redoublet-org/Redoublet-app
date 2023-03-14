
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="backward"></ion-back-button>
        </ion-buttons>
        <ion-title>Join Tournament </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content ref="content">
      <ion-item>
        <ion-button router-link="/home" router-direction="back">Back</ion-button>
      </ion-item>

    </ion-content>
  </ion-page>
</template>
    
<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/vue';
</script>
