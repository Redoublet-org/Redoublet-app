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
          <ion-title>Score Table</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <page-title title="SCORE TABLE EXAMPLE"></page-title>
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
    IonButtons
  } from "@ionic/vue";
  import { defineComponent, ref } from "vue";
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
      PageTitle,
      IonBackButton,
      IonButtons
    },
    setup() {
      return { router: useRouter() };
    },
  });
  </script>
  