import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ColumnList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ColumnList.vue'),
    },
    {
      path: '/column',
      name: 'Column',
      component: () => import('@/components/views/Column.vue'),
    },
  ],
})

export default router
