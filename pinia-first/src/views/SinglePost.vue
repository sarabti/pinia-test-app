<template>
  <div class="about">
    <h1>{{ appName }}</h1>
    <p>
      {{ sharedPost }}
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
import { mapStores, mapState, mapActions } from 'pinia'
import { usePostStore } from './../stores/post'
export default {
  data() {
    return {
      appName: 'Single Post',
    }
  },
  computed: {
    ...mapStores(usePostStore),
    ...mapState(usePostStore, ['posts', 'countPost', 'sharedPost']),
  },
  methods: {
    ...mapActions(usePostStore, ['sharePost']),
  },
}
</script>
