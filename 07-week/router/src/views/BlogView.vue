<script setup>
import { ref } from "vue";
const articles = ref([
  {
    id: 1,
    title: "My journey with Vue",
    text: "My journey with Vue is not very enjoyable.",
  },
  { id: 2, title: "Blogging with Vue", text: "Why am I only creating blogs?" },
  { id: 3, title: "Why Vue is so fun", text: "It is not fun lol." },
]);
</script>
<template>
  <div class="about">
    <h1 style="margin-bottom: 30px">This is my Blog page</h1>
    <div
      style="padding-bottom: 10px"
      v-for="article in articles"
      :key="article.id"
    >
      <h2>{{ article.title }}</h2>
      <RouterLink :to="'/blog/' + articles.id">Otvoriť článok</RouterLink>
    </div>
  </div>
</template>
