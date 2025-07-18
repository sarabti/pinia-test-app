<template>
  <div>
    <h1>{{ appName }} - {{ appNameLength }}</h1>
  </div>
  <div>count: {{ count }}</div>
  <button @click="increment">increment</button>
  <button @click="doubleIncrement">double increment</button>
  <br />
  <br />
  {{ 'count of posts: ' + countPost }}
  <br />
  <br />
  <router-link to="/single-post">Single Post</router-link>
  <br />
  <br />
  <div v-for="post in posts" :key="post.id">
    <router-link>{{ post?.title }}</router-link>
    <p>{{ post.content }}</p>
    <button @click="sharePost(post?.id)">Share</button>
  </div>
  {{ sharedPost }}
</template>
<script>
import { useCounterStore } from './../stores/counter2'
import { mapStores, mapState, mapActions } from 'pinia'
import { usePostStore } from './../stores/post'
export default {
  data() {
    return {
      appName: 'Learning Pinia',
    }
  },
  computed: {
    ...mapStores(useCounterStore, usePostStore),
    ...mapState(useCounterStore, ['count', 'double']),
    ...mapState(usePostStore, ['posts', 'countPost', 'sharedPost']),
    appNameLength() {
      return this.appName.length
    },
  },
  methods: {
    ...mapActions(useCounterStore, ['increment']),
    ...mapActions(usePostStore, ['fetchPostData', 'sharePost']),
    doubleIncrement() {
      this.increment()
      this.increment()
    },
  },
  async mounted() {
    this.fetchPostData()
  },
}
</script>
