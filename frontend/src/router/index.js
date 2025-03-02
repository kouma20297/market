// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import About from '../views/About.vue'; // 追加
import Contact from '../views/Contact.vue'; // 追加

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',  // RouterLink の to="{ name: 'about' }" と一致
    component: About,
  },
  {
    path: '/contact',
    name: 'contactus', // RouterLink の to="{ name: 'contactus' }" と一致
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // この行は変更なし
  routes,
});

export default router;