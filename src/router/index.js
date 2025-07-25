import { createRouter, createWebHistory } from 'vue-router';
import Exercise1 from '../components/Exercise1.vue';
import Exercise2 from '../components/Exercise2.vue';

const routes = [
  {
    path: '/',
    redirect: '/exercise1',
  },
  {
    path: '/exercise1',
    component: Exercise1,
  },
  {
    path: '/exercise2',
    component: Exercise2
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
