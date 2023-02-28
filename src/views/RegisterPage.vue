<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/login" routerDirection="backward"></ion-back-button>
            </ion-buttons>
            <ion-title>Register </ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content ref="content">
        <ion-item>
          <ion-button router-link="/login" router-direction="backward" >Register</ion-button>
        </ion-item>

      </ion-content>
    </ion-page>
  </template>
    
    <script>
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/vue';
    import { defineComponent, ref } from 'vue';
    import { useRouter } from 'vue-router';
  
    export default defineComponent({
      name: 'RegisterPage',
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