import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, name: "Eduardo" }),
  getters: {
    doubleCount: (state) => state.count * 2,
    dividedby: (state) => (divisor) => state.count / divisor,
  },
  actions: {
    increment() {
      this.count++;
    },
    incrementby(number) {
      this.count += number ;
    },
    decrement() {
      this.count--;
    },
  },
});
