<template>
  <ion-text color="primary" id="page-title">
    <h1>{{ title }}</h1>
  </ion-text>
</template>

<script lang="ts">
  import {
    IonContent,
    IonText
  } from "@ionic/vue";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "PageTitle",
    components: {
      IonText
    },
    props: ['title']
  });
  </script>