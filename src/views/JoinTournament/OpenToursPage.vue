<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="backward"></ion-back-button>
        </ion-buttons>
        <ion-title>Tournaments</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tournaments</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
          <ion-label position="floating">Open tournaments</ion-label>
          <ion-select placeholder="Select tournament">
            <ion-select-option value="tournament1">tournament1</ion-select-option>
            <ion-select-option value="tournament2">tournament2</ion-select-option>
            <ion-select-option value="tournament3">tournament3</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-button router-link="/join-tournament/wait-start" router-direction="forward" >Join tournament</ion-button>
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
    name: 'OpenToursPage',
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
