<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
           <ion-title>Home Page</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
            <ion-item>
              <ion-button router-link="/new-competition" router-direction="forward" >New Competition</ion-button>
            </ion-item>
            <ion-item>
              <ion-button router-link="/join-tournament" router-direction="forward" >Join Tournament</ion-button>
            </ion-item>
            <ion-item>
              <ion-button router-link="/scan" router-direction="forward" >Scan hand</ion-button>
            </ion-item>
        </ion-list>

      </ion-content>
    </ion-page>
  </template>
    
    <script>
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
    import { defineComponent, ref } from 'vue';
    import { useRouter } from 'vue-router';
  
    export default defineComponent({
      name: 'HomePage',
      components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonButton
        },
      setup() {
  
          return {router: useRouter()};
      },
    });
  </script>