<template>
  <ion-text color="primary" id="page-title">
    <h1>{{ title }}</h1>
  </ion-text>
</template>

<script setup lang="ts">
import {
  IonText
} from "@ionic/vue";
import { ref } from "vue";

const title = ref("");
</script>