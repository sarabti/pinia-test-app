import { createRouter, createWebHistory } from 'vue-router'
import PostsPage from '../views/PostsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/posts',
      name: 'posts',
      component: PostsPage,
    },
    {
      path: '/single-post',
      name: 'singlePost',
      component: () => import('../views/SinglePost.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
    },
  ],
})

export default router
