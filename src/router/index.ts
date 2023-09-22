import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserListView from '../views/UserListView.vue'
import UserDetailsView from '../views/UserDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/users',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UserListView
    },
    {
      path: '/user/:id',
      name: 'userDetails',
      component: UserDetailsView
    }
  ]
})

export default router
