<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="backward"></ion-back-button>
        </ion-buttons>
        <ion-title>Scoring board #9</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Scoring board #9</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
          <ion-text>Contract: 2 spades</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>Result: +1</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>Imp: +1</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>By: NS</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>Score: +190</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>MP%: 55%</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>DDS - theoretical optimum</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>Contract: 3 spades</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>By: NS</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>Contract: 1 SA</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>By: EW</ion-text>
        </ion-item>
        <ion-item>
          <ion-button>Dit zou een link moeten zijn</ion-button>
        </ion-item>
        <ion-item>
          <ion-button router-link="/join-tournament/walking-scheme" router-direction="forward" >Next board</ion-button>
        </ion-item>
        <ion-item>
          <ion-button router-link="/join-tournament/waiting-for-end" router-direction="forward" >This was the last board</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
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
    name: 'ScoringDDSPage',
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

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
