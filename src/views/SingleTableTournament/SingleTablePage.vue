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
          <ion-title>New Tournament</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content>
        <page-title title="1 Table (2 VS 2)"></page-title>
        <h2>Couple 1 North / South</h2>
        <ion-item>
            <ion-label>N: </ion-label>
            <ion-input id="northName" placeholder="North Name"></ion-input>
            <ion-label>S: </ion-label>
            <ion-input id="southName" placeholder="South Name"></ion-input>
        </ion-item>
        <h2>Couple 2 East / West</h2>
        <ion-item>
            <ion-label>E: </ion-label>
            <ion-input id="eastName" placeholder="East Name"></ion-input>
            <ion-label>W: </ion-label>
            <ion-input id="westName" placeholder="West Name"></ion-input>
        </ion-item>
        <h2>Scoring principle</h2>
        <ion-item>
          <ion-label>Scoring principle: </ion-label>
          <ion-select id="scoringPrinciple" placeholder="Select scoring principle">
              <ion-select-option value="reference">Reference table</ion-select-option>
              <ion-select-option value="theoretical">Theoretical optimum</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-button @click="() => gotoScanBoard(router)"  router-direction="forward" >
            Start Game
        </ion-button>
        <ion-item>
          <ion-button router-link="/home" router-direction="back">
            Back
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
  import { useRouter, Router} from "vue-router";
  import { TableInformation, ScoringPrincipleFromString } from "./TableInformation";
  import PageTitle from "@/components/PageTitle.vue";
  
  function gotoScanBoard(router: Router) {
    const tableInfo: TableInformation = {
      // TODO: fix this mess but idk how to link this properly in vue
      northName: (document.getElementById("northName") as HTMLInputElement)?.value as string,
      southName: (document.getElementById("southName") as HTMLInputElement)?.value as string,
      westName:  (document.getElementById("westName") as HTMLInputElement)?.value as string,
      eastName:  (document.getElementById("eastName") as HTMLInputElement)?.value as string,
      scoringPrinciple: ScoringPrincipleFromString(
        (document.getElementById("scoringPrinciple") as HTMLInputElement)?.value)
    };
    router.push({name: 'EnterBoardPage', params: {tableSettings: JSON.stringify(tableInfo)}})
  }

  export default defineComponent({
    name: "SingleTablePage",
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonBackButton,
      IonButtons,
      IonButton,
      PageTitle
    },
    setup() {
      return { router: useRouter(), gotoScanBoard };
    },
  });
  </script>
  