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
        <ion-title>DDS</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-text color="primary">
        <h1>DDS EXAMPLE</h1>
      </ion-text>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    return { router: useRouter() };
  },
});
</script>
