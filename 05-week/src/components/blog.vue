<script setup>
import Article from "./article.vue";
import { ref } from "vue";

const postFontSize = ref(1);

const articles = ref([
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" },
]);
</script>

<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <Article
      v-for="article in articles"
      :key="article.id"
      :title="article.title"
      :text="'Text ' + article.id"
      @enlarge-text="postFontSize += 0.1"
    />
  </div>
</template>
