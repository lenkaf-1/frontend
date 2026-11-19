<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheNavigation from "./components/TheNavigation.vue";
</script>

<template>
  <TheNavigation />
  <div class="container">
    <RouterView :key="$route.fullPath"></RouterView>
  </div>
</template>
