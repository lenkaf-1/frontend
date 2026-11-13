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

    <h2>Experiences</h2>
    <ul>
      <li
        v-for="experience in destination.experiences"
        :key="experience.slug"
      >
        <RouterLink
          :to="{
            name: 'experience',
            params: {
              slug: destination.slug,
              experienceSlug: experience.slug,
            },
          }"
        >
          {{ experience.name }}
        </RouterLink>
      </li>
    </ul>

    <RouterView />
  </main>
  <p v-else>Destination not found.</p>
</template>
