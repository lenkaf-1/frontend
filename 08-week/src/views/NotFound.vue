<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <h1>404 - Stranka sa nenasla</h1>
    <RouterLink :to="{ name: 'home' }">Späť na domovskú stránku</RouterLink>
  </main>
</template>
