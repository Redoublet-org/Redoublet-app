<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="backward"></ion-back-button>
        </ion-buttons>
        <ion-title>Scan south hand</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Scan south hand</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
          <ion-text>Make a picture</ion-text>
        </ion-item>

        <ion-item>
          <ion-text>List of cards detected:</ion-text>
        </ion-item>

        
        <ion-item>
          <ion-button router-link="/join-tournament/scan-hand-west" router-direction="forward" >Cards are correct, next hand</ion-button>
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
          IonBackButton} from '@ionic/vue';

  export default defineComponent({
    name: 'ScanHandsSouthPage',
    components: {
      IonContent, 
      IonHeader, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonButton,
      IonBackButton
    },
    setup(){
      return{
        router: useRouter(),
      }
    }
  });

</script>
