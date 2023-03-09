<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/login" router-direction="backward"></ion-back-button>
        </ion-buttons>
        <ion-title>Register </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content ref="content">
      <ion-item>
        <ion-button router-link="/login" router-direction="back">Register</ion-button>
      </ion-item>
    </ion-content>
  </ion-page>
</template>
    
<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/vue';
</script>