<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
const stlpce = ref(20);
const riadky = ref(5);
const StastneCislo = ref(0);
const markdowntext = ref("");
function random() {
  StastneCislo.value = Math.floor(Math.random() * 101);
}
function ulozDoPremennej(event) {
  markdowntext.value = event.target.value;
}
function velkost() {
  return markdowntext.value.length > 10;
}
onMounted(() => {
  console.log("mounted hook");
  random();
});
</script>

<template>
  <div>
    <h1>Hello world!</h1>
    <h1>Moje stastne cislo: {{ StastneCislo }}</h1>

    <textarea v-model="markdowntext" :disabled="velkost()"></textarea>

    <div v-html="markdowntext"></div>
    <textarea :cols="stlpce" :rows="riadky"></textarea>

    <input type="number" v-model.number="stlpce" />
    <input type="number" v-model.number="riadky" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
