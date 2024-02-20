import HomePage from '@/views/HomePage.vue'
import AboutUs from '@/views/AboutUs.vue'
import Contact from '@/views/Contact.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/AboutUs',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/Contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router
