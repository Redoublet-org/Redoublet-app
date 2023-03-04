<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            default-href="/home"
            routerDirection="backward"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>Board Score</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-text color="secondary">
        <h2>Scoring board</h2>
      </ion-text>
      <ion-item>
        <ion-label>Contract</ion-label>
        <ion-text color="tertiary">
          <p>Example contract</p>
        </ion-text>
      </ion-item>
      <ion-item>
        <ion-label>Result</ion-label>
        <ion-text color="tertiary">
          <p>Example result</p>
        </ion-text>
      </ion-item>
      <ion-item>
        <ion-label>IMP</ion-label>
        <ion-text color="tertiary">
          <p>Example IMP</p>
        </ion-text>
      </ion-item>
      <ion-item>
        <ion-label>By</ion-label>
        <ion-text color="tertiary">
          <p>Example By</p>
        </ion-text>
      </ion-item>
      <ion-item>
        <ion-label>Score</ion-label>
        <ion-text color="tertiary">
          <p>Example Score</p>
        </ion-text>
      </ion-item>


      <ion-text color="secondary">
        <h2>DDS - Theoretical optimum</h2>
      </ion-text>
      <ion-item>
        <ion-label>Contract</ion-label>
        <ion-text color="tertiary">
          <p>Example contract</p>
        </ion-text>
      </ion-item>
      <ion-item>
        <ion-label>By</ion-label>
        <ion-text color="tertiary">
          <p>Example By</p>
        </ion-text>
      </ion-item>
      <ion-item>
        <ion-label>Contract</ion-label>
        <ion-text color="tertiary">
          <p>Example contract</p>
        </ion-text>
      </ion-item>
      <ion-item>
        <ion-label>By</ion-label>
        <ion-text color="tertiary">
          <p>Example By</p>
        </ion-text>
      </ion-item>

      <ion-item>
        <ion-button @click="() => router.push('/active-tournament/single-table/dds')" router-direction="forward">
          Full DDS
        </ion-button>
        <ion-button @click="() => router.push('/active-tournament/single-table/table')" router-direction="forward">
          Scoring Table
        </ion-button>
        <ion-button @click="() => router.push('/new-tournament/single-table/enter-board')" router-direction="forward">
          Next Board
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

export default defineComponent({
  name: "SingleTableScore",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonButton
  },
  setup() {
    return { router: useRouter() };
  },
});
</script>
