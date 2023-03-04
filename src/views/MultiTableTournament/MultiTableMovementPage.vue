<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button
              default-href="/home"
              routerDirection="back"
            ></ion-back-button>
          </ion-buttons>
          <ion-title>Movement Table</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <page-title :title="tournamentName"></page-title>
        <ion-text color="secondary">
          <h2>Movement Table</h2>
        </ion-text>
        <ion-grid>
            <ion-row>
                <ion-col size="auto"></ion-col>
                <ion-col class="ion-text-center">Table</ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="auto"></ion-col>
                <ion-col class="ion-text-center" v-for="tn in Array.from({length: numOfTables}, (_, i) => i + 1)" :key="tn">#{{ tn }}</ion-col>
            </ion-row>
            <ion-row v-for="(item, index) in sampleData" :key="item">
                <ion-col size="auto" class="ion-text-center">{{ index + 1 }}</ion-col>
                <ion-col v-for="groups in item" :key="groups" class="ion-text-center">{{ groups.group1 }} - {{ groups.group2 }}</ion-col>
            </ion-row>
        </ion-grid>
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
  import PageTitle from "@/components/PageTitle.vue";
  
  export default defineComponent({
    name: "MultiTableMovementPage",
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonBackButton,
      IonButtons,
      // eslint-disable-next-line vue/no-unused-components
      IonButton,
      PageTitle
    },
    setup() {
      return { router: useRouter() };
    },
    data() {
      return {
        sampleData: [[{group1: 1, group2: 2}, {group1: 3, group2: 4}],[{group1: 1, group2: 3}, {group1: 2, group2: 4}], [{group1: 1, group2: 4}, {group1: 2, group2: 3}]],
        numOfTables: 2,
        tournamentName: "Example Tournament Name"
      };
    },
  });
  </script>