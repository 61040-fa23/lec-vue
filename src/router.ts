import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/Home.vue';
import AboutVue from './About.vue';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: AboutVue
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about/:persona',
      component: AboutVue
    }
  ]
});

export default router;
