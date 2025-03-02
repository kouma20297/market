// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WorksAndldeasPage from '@/views/WorksAndldeasPage.vue' 
import LoginRegister from '../views/LoginRegister.vue';
import TrendingArticles from '../views/TrendingArticles.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  


  {
    path: '/works-and-ideas',
    name: 'WorksAndldeasPage',
    component: WorksAndldeasPage
  },
  {
    path: '/login-register',
    name: 'LoginRegister',
    component: LoginRegister
  },
  {
    path: '/trending-articles',
    name: 'TrendingArticles',
    component: TrendingArticles
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // この行は変更なし
  routes,
});

export default router;