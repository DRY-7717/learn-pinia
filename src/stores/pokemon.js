import { defineStore } from "pinia";

export const usePokemonStore = defineStore("pokemin", {
  state: () => ({
    pokemonDetail: {},
  }),
  getters: {},
  actions: {
    async getpokemondetail(name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const result = await response.json();
      this.pokemonDetail = result;
    },
  },
});
