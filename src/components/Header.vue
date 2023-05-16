<template>
  <h2>Ini Header</h2>
  <p>state: {{ counter }}</p>
  <p>getters: {{ doublecount }}</p>
  <p>getters: {{ dividedby }}</p>
  <hr>
  <pre>Pokemon: {{ pokemondetail }}</pre>
</template>
<script setup>
import { computed } from "vue";
import { useCounterStore } from "../stores/counter";
import { usePokemonStore } from "../stores/pokemon";

const store = useCounterStore();
const pokemon = usePokemonStore();

const counter = computed(() => store.count);
const pokemondetail = computed(() => pokemon.pokemonDetail);
const doublecount = computed(() => store.doubleCount);
const dividedby = computed(() => store.dividedby(5));
</script>
<style></style>
