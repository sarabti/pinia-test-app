<template>
  <h1>Home Page</h1>
  {{ counter.count }}
  <button @click="incrementCount">Increment</button>
  <button @click="increment">Also Increment</button>
  <h2>{{ count }}</h2>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { reactive, toRefs } from 'vue'
const counter = useCounterStore()
// another way of using reactive properties from store
const { count } = storeToRefs(counter)
const { increment } = counter

// if we want to use HMR we should use this instead of destructioning
function incrementCount() {
  counter.increment()
}

const user = reactive({
  name: 'sara',
  gender: 'female',
})

// this is also reactive
const { name, gender } = toRefs(user)
</script>
