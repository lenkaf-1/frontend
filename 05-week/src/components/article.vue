<script setup>
import { onMounted } from "vue";

const emit = defineEmits(["enlarge-text"]);

const props = defineProps({
  title: String,
  text: String,
});

function FirstArticle() {
  if (props.title === "Prvý článok") {
    alert("Blog obsahuje prvý článok");
  }
}

onMounted(() => {
  FirstArticle();
});
</script>

<template>
  <article>
    <h2>{{ props.title }}</h2>
    <p>{{ props.text }}</p>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </article>
</template>
