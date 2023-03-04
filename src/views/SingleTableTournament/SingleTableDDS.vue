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
      <page-title title="DDS Example"></page-title>
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
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import PageTitle from "@/components/PageTitle.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    PageTitle
  },
  setup() {
    return { router: useRouter() };
  },
});
</script>
