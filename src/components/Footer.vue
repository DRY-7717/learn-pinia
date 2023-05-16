<template>
  <h2>Ini Footer</h2>
  <button @click="increment">+increment</button>
  <button @click="reset">reset</button>
  <button @click="decrement">-decrement</button>
  <button @click="incrementaction">+increment action</button>
  <button @click="incrementbyaction(2)">+incrementby action</button>
  <button @click="decrementaction">-decrement action</button>
  <button @click="fetchpokemon('pikachu')">fetch pokemon</button>
  <button @click="resetpokemon">reset pokemon</button>
</template>
<script setup>
import { computed } from "vue";
import { useCounterStore } from "../stores/counter";
import { usePokemonStore } from "../stores/pokemon";

const store = useCounterStore();
const pokemon = usePokemonStore();

const increment = () => {
  store.$patch((state) => state.count++);
};
const decrement = () => {
  store.$patch((state) => state.count--);
};

const incrementaction = () => {
  store.increment();
};
const incrementbyaction = (amount) => {
  store.incrementby(amount);
};
const decrementaction = () => {
  store.decrement();
};

const reset = () => {
  store.$reset();
};
const resetpokemon = () => {
  pokemon.$reset();
};

const fetchpokemon = (name) => {
  pokemon.getpokemondetail(name);
};
</script>
<style></style>
