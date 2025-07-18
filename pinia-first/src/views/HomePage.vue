<template>
  <h1>
    Home Page
  </h1>
  {{ counter.count }}
  <button @click="incrementCount">Increment</button>
  <button @click="increment">Also Increment</button>
  <h2>{{ count }}</h2>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const counter = useCounterStore()
// another way of using reactive properties from store
const { count } = storeToRefs(counter)
const { increment } = counter
function incrementCount() {
  counter.increment()
}
</script>
