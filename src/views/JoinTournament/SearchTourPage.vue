<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="backward"></ion-back-button>
        </ion-buttons>
        <ion-title>Search Tournament Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Search Tournament Page</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
          <ion-label position="floating">Search tournament by name:</ion-label>
          <ion-input placeholder="Enter tournament name"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Search tournament by date:</ion-label>
          <ion-datetime></ion-datetime>
        </ion-item>

        <ion-item>
          <ion-button router-link="/join-tournament/join" router-direction="forward" >Search</ion-button>
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
          IonDatetime } from '@ionic/vue';

  export default defineComponent({
    name: 'SearchToursPage',
    components: {
      IonContent, 
      IonHeader, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonButton,
      IonBackButton,
      IonDatetime
    },
    setup(){
      return{
        router: useRouter(),
      }
    }
  });

</script>
