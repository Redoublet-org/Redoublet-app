
<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/home" routerDirection="backward"></ion-back-button>
            </ion-buttons>
            <ion-title>Join Tournament </ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content ref="content">
        <ion-item>
          <ion-button router-link="/home" router-direction="backward" >Back</ion-button>
        </ion-item>

      </ion-content>
    </ion-page>
  </template>
    
    <script>
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/vue';
    import { defineComponent, ref } from 'vue';
    import { useRouter } from 'vue-router';
  
    export default defineComponent({
      name: 'JoinTourPage',
      components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonBackButton, 
        IonButtons, 
        IonButton
        },
      setup() {
  
          return {router: useRouter()};
      },
    });
  </script>