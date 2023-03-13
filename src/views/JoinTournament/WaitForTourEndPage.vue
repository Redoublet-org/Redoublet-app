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
          <ion-text>You have been succesfully contributed your scores.</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>Waiting for tournament to finalize and score.</ion-text>
        </ion-item>
        <ion-item>
          <ion-button router-link="/join-tournament/end" router-direction="forward" >I have waited</ion-button>
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
    name: 'WaitForTourEndPage',
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
