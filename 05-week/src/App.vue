<script setup>
import Blog from "./components/blog.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Domov</RouterLink> |
      <RouterLink to="/blogview">Blog</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
