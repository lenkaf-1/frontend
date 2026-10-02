<script setup>
import { ref, computed } from "vue";
const count = ref(0);
const number = ref(0);

function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
function reset() {
  count.value = 0;
}
function resetp() {
  number.value = 0;
}
const doubleCount = computed(() => {
  return count.value * 2;
});
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>
  <div>
    <h2 :class="number > 0 ? 'zelena' : number < 0 ? 'cervena' : 'siva'">
      {{ number }}
    </h2>

    <button @click="number++">Increment</button>
    <button @click="number--">Decrement</button>
    <button @click="resetp">Reset</button>
  </div>
  <p>Počet: {{ count }}</p>
  <button @click="increment">Pridať</button>  
  <button @click="decrement">Odobrať</button>  
  <button @click="reset">Reset</button>

  <p>Dvojnásobok: {{ doubleCount }}</p>

  <main>
    <TheWelcome />
  </main>
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
.cervena {
  background-color: red;
}
.zelena {
  background-color: green;
}
.siva {
  background-color: grey;
}
</style>
