<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="backward"></ion-back-button>
        </ion-buttons>
        <ion-title>Scoring</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Scoring - Board #9</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
          <ion-text>Contract</ion-text>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Suit</ion-label>
          <ion-select placeholder="Select suit">
            <ion-select-option value="Clubs">Clubs</ion-select-option>
            <ion-select-option value="Diamonds">Diamonds</ion-select-option>
            <ion-select-option value="Hearts">Hearts</ion-select-option>
            <ion-select-option value="Spades">Spades</ion-select-option>
            <ion-select-option value="No Trump">No Trump</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Tricks</ion-label>
          <ion-select placeholder="Select tricks">
            <ion-select-option :value="item" v-for="item of Array.from({length: 7},(x, i) => i + 1)" :key="item"> {{item}} </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Declarer</ion-label>
          <ion-select placeholder="Select declarer">
            <ion-select-option value="North">North</ion-select-option>
            <ion-select-option value="South">South</ion-select-option>
            <ion-select-option value="East">East</ion-select-option>
            <ion-select-option value="West">West</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-checkbox position="floating"></ion-checkbox>
          <ion-label> Redoubled </ion-label>
        </ion-item>

        <ion-item>
          <ion-text> Result and 1st card </ion-text>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Result:</ion-label>
          <ion-input placeholder="Ik heb geen idee wat het resultaat zou kunnen zijn"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">1st card</ion-label>
          <ion-input placeholder="Ik heb ook geen idee waarom het boeit wat de eerste kaart zou zijn"></ion-input>
        </ion-item>


        <ion-item>
          <ion-button router-link="/join-tournament/scan-hand-south" router-direction="forward" >Next</ion-button>
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
          IonSelectOption,
          IonCheckbox,
          IonLabel} from '@ionic/vue';

  export default defineComponent({
    name: 'InputScorePage',
    components: {
      IonContent, 
      IonHeader, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonButton,
      IonBackButton,
      IonSelect,
      IonSelectOption,
      IonCheckbox,
      IonLabel
    },
    setup(){
      return{
        router: useRouter(),
      }
    }
  });

</script>