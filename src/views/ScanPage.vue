<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="backward"></ion-back-button>
        </ion-buttons>
        <ion-title>Scan </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content ref="content">

      <ion-grid>
        <ion-row>
          <ion-col size="6" v-for="photo in photos" :key="photo">
            <!--geen idee wat deze foutmelding is.. Hij doet het wel namelijk-->
            <ion-img :src="photo.webviewPath"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>
  </ion-page>
</template>
    
<script setup lang="ts">
import {
  IonContent, IonHeader, IonPage, IonTitle,
  IonToolbar, IonBackButton, IonButtons, IonButton,
  IonGrid, IonRow, IonCol, IonImg
} from '@ionic/vue';
import { useCamera } from '@/composables/useCamera';
import { camera, trash, close } from 'ionicons/icons';

const { photos, takePhoto } = useCamera();

</script>
