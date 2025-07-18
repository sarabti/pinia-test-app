import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter2', {
  state: () => ({
    count: 0,
  }),
  // computed property
  getters: {
    double: (state) => state * 2,
  },
  // methods
  actions: {
    increment() {
      this.count++
    },
  },
})
