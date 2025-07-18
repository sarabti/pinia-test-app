import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    sharedPost: {},
  }),
  // computec property
  getters: {
    countPost: (state) => state.posts.length,
  },
  // methods
  actions: {
    sharePost(id) {
      const post = this.posts.find((item) => item.id === id)
      post && (this.sharedPost = post)
    },
    async fetchPostData() {
      const result = await fetch('http://127.0.0.1:8000/posts')
      this.posts = await result.json()
    },
  },
})
