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

      <ion-list>
        <ion-item>
          <ion-text>Table: 3</ion-text>
        </ion-item>

        <ion-item>
          <ion-text>Details</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>North - South</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>Pair [#]: name & name</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>Board 11</ion-text>
        </ion-item>

        <ion-item>
          <ion-text> Game details </ion-text>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Vulnerable</ion-label>
          <ion-select placeholder="Select vulnerability">
            <ion-select-option value="North-South">North-South</ion-select-option>
            <ion-select-option value="East-West">East-West</ion-select-option>
            <ion-select-option value="None">None</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Dealer</ion-label>
          <ion-select placeholder="Select dealer">
            <ion-select-option value="North">North</ion-select-option>
            <ion-select-option value="South">South</ion-select-option>
            <ion-select-option value="East">East</ion-select-option>
            <ion-select-option value="West">West</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-button router-link="/join-tournament/input-score" router-direction="forward" >Enter score</ion-button>
        </ion-item>

      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { useRouter } from 'vue-router';
  import { defineComponent } from 'vue';
  import { IonContent, 
          IonHeader, 
          IonPage, 
          IonTitle, 
          IonToolbar,
          IonButton,
          IonBackButton,
          IonSelect,
          IonSelectOption} from '@ionic/vue';

  export default defineComponent({
    name: 'WalkingSchemePage',
    components: {
      IonContent, 
      IonHeader, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonButton,
      IonBackButton,
      IonSelect,
      IonSelectOption
    },
    setup(){
      return{
        router: useRouter(),
      }
    }
  });

</script>