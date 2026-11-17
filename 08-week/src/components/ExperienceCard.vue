<script setup>
import dataDestinations from "../data.json";
const destinations = dataDestinations.destinations;
const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  experienceSlug: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="card">
    <img :src="'/images/' + experience.image" :alt="experience.name" />
    <span class="card__text">
      {{ experience.name }}
    </span>
  </div>
</template>
