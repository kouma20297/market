import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TrendingArticles from '../views/TrendingArticles.vue';
import WorksAndIdeasPage from '../views/WorksAndIdeasPage.vue';
import SignIn from '@/components/auth/SignIn.vue';
import { supabase } from '@/services/supabase';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/works-and-ideas',
    name: 'works-and-ideas',
    component: WorksAndIdeasPage,
    
  },
  {
    path: '/trending-articles',
    name: 'trending-articles',
    component: TrendingArticles
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignIn
  },
  // 存在しないパスへのリダイレクト設定
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// ナビゲーションガード
router.beforeEach(async (to, from, next) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!user) {
        next({ name: 'sign-in' }); // 修正: 'login-register' → 'sign-in'
        return;
      }
    }
    next();
  } catch (error) {
    console.error('Router beforeEach error:', error);
    next({ name: 'sign-in' }); // 修正: 'login-register' → 'sign-in'
  }
});

export default router;
