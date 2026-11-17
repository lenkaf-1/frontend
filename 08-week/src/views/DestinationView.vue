<script setup>
import { computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import dataDestinations from "../data.json";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const destination = computed(() =>
  dataDestinations.destinations.find((item) => item.slug === props.slug),
);
</script>

<template>
  <main v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <img :src="`/images/${destination.image}`" :alt="destination.name" />
    <p>{{ destination.description }}</p>

    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <RouterLink
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
          :to="{
            name: 'experience',
            params: {
              slug: destination.slug,
              experienceSlug: experience.slug,
            },
          }"
        >
          <img :src="`/images/${experience.image}`" :alt="experience.name" />
          <span class="card__text">{{ experience.name }}</span>
        </RouterLink>
      </div>
      <RouterView />
    </section>
  </main>
  <p v-else>Destination not found.</p>
</template>
