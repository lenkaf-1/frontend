<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const articleId = route.params.id;

const articles = [
  {
    id: "1",
    title: "My journey with Vue",
    text: "My journey with Vue is not very enjoyable.",
  },
  {
    id: "2",
    title: "Blogging with Vue",
    text: "Why am I only creating blogs?",
  },
  { id: "3", title: "Why Vue is so fun", text: "It is not fun lol." },
];

const currentArticle = computed(() => {
  return articles.find((a) => route.params.id);
});
</script>

<template>
  <div class="article-detail" style="padding: 2rem">
    <template v-if="currentArticle">
      <h1>{{ currentArticle.title }}</h1>
      <p style="margin-top: 20px; font-size: 1.2rem">
        {{ currentArticle.text }}
      </p>
    </template>
    <template v-else>
      <h1>Článok sa nenašiel</h1>
    </template>

    <div style="margin-top: 30px">
      <RouterLink to="/blog">← Späť na zoznam blogov</RouterLink>
    </div>
  </div>
</template>
