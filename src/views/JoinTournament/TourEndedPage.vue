<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="backward"></ion-back-button>
        </ion-buttons>
        <ion-title>Name tournament</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Name tournament</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col>Place</ion-col>
          <ion-col>Pair</ion-col>
          <ion-col>IMP</ion-col>
          <ion-col>MP%</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>1</ion-col>
          <ion-col>Pair [#]: name & name</ion-col>
          <ion-col>+60</ion-col>
          <ion-col>70%</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>2</ion-col>
          <ion-col>Pair [#]: name & name</ion-col>
          <ion-col>+45</ion-col>
          <ion-col>65%</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>3</ion-col>
          <ion-col>Pair [#]: name & name</ion-col>
          <ion-col>+40</ion-col>
          <ion-col>62%</ion-col>
        </ion-row>
      </ion-grid>

      <ion-item>
        <ion-button>Show details</ion-button>
      </ion-item>
      <ion-item>
        <ion-button router-link="/home" router-direction="forward">Go back to home</ion-button>
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
  IonButton,
  IonBackButton
} from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
