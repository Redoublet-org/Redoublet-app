<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" routerDirection="backward"></ion-back-button>
        </ion-buttons>
        <ion-title>Enter board</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <page-title :title="'Board #' + boardNumber"></page-title>
      <ion-text color="medium">
        <h3>
          N: {{ tableInfo.northName }}, S: {{ tableInfo.southName }} <br />
          E: {{ tableInfo.eastName }}, W: {{ tableInfo.westName }}
        </h3>
      </ion-text>
      <ion-text color="secondary">
        <h2>Game details</h2>
      </ion-text>
      <ion-item>
        <ion-label>Vulnerable</ion-label>
        <ion-select id="vulnerable" placeholder="Select vulnerability">
          <ion-select-option value="ns">North/South</ion-select-option>
          <ion-select-option value="ew">East/West</ion-select-option>
          <ion-select-option value="all">All</ion-select-option>
          <ion-select-option value="none">None</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label>Dealer</ion-label>
        <ion-select id="dealer" placeholder="Select dealer">
          <ion-select-option :value="item" v-for="item of sides" :key="item">{{ item }}</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-text color="secondary">
        <h2>Contract</h2>
      </ion-text>

      <ion-item>
        <ion-label>Trump Suit</ion-label>
        <ion-select id="suit" placeholder="Enter Trump Suit">
          <ion-select-option value="clubs">Clubs</ion-select-option>
          <ion-select-option value="spades">Spades</ion-select-option>
          <ion-select-option value="hearts">Hearts</ion-select-option>
          <ion-select-option value="diamonds">Diamonds</ion-select-option>
          <ion-select-option value="notrumps">No Trump</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label>Tricks</ion-label>
        <ion-select id="tricks" placeholder="Enter Tricks">
          <ion-select-option :value="item" v-for="item of Array.from({ length: 7 }, (x, i) => i + 1)" :key="item">{{ item
          }}</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label>Redoubled</ion-label>
        <ion-select id="redoubled" placeholder="Enter Redoubled">
          <ion-select-option value="no">No</ion-select-option>
          <ion-select-option value="doubled">Doubled</ion-select-option>
          <ion-select-option value="redoubled">Redoubled</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label>Declarer</ion-label>
        <ion-select id="declarer" placeholder="Select declarer">
          <ion-select-option :value="item" v-for="item of sides" :key="item">{{ item }}</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-text color="secondary">
        <h2>Result and first card</h2>
      </ion-text>

      <ion-item>
        <ion-label>Result</ion-label>
        <ion-input type="number" min="-13" max="+6" placeholder="Enter Result"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>First Card</ion-label>
        <ion-select id="firstcardvalue" placeholder="Value">
          <ion-select-option :value="item" v-for="item of cardNames" :key="item">{{ item }}</ion-select-option>
        </ion-select>
        <ion-select id="firstcardsuit" placeholder="Suit">
          <ion-select-option :value="item" v-for="item of cardSuits" :key="item">{{ item }}</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-button @click="() => $router.push('/scan')" router-direction="forward">
        Scan Cards
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonButton
} from "@ionic/vue";
import { useRoute } from "vue-router";
import { TableInformation } from "./TableInformation";
import PageTitle from "@/components/PageTitle.vue";
import { ref } from "vue";

const route = useRoute();

const tableInfo: TableInformation = JSON.parse(
  route.params.tableSettings as string
);

const cardNames = ref(["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"])
const cardSuits = ref(["Clubs", "Spades", "Hearts", "Diamonds"]);
const sides = ref(["North", "South", "East", "West"]);
const boardNumber = ref(1);
</script>
