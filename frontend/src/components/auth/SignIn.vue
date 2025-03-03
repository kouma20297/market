<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
    <!-- 背景エフェクト -->
    <div class="fixed inset-0 z-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div class="absolute top-2/3 left-1/2 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
    </div>

    <!-- ナビゲーションバー -->
    <nav class="bg-gray-900/80 backdrop-blur-lg border-b border-indigo-500/20 fixed w-full z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/" class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                AppMarket
              </router-link>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link 
                to="/" 
                class="border-transparent text-gray-300 hover:border-indigo-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300"
              >
                ホーム
              </router-link>
              <router-link 
                to="/works-and-ideas" 
                class="border-transparent text-gray-300 hover:border-indigo-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300"
              >
                作品
              </router-link>
              <router-link 
                to="/sign-in"
                class="border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                aria-current="page"
              >
                ログイン / 登録
              </router-link>
              <router-link 
                to="/trending-articles"
                class="border-transparent text-gray-300 hover:border-indigo-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300"
              >
                テック記事
              </router-link>
            </div>
          </div>
          
          <!-- モバイルメニューボタン -->
          <div class="flex items-center sm:hidden">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen" 
              class="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">メニューを開く</span>
              <menu-icon v-if="!mobileMenuOpen" class="block h-6 w-6" />
              <x-icon v-else class="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      <!-- モバイルメニュー -->
      <div v-if="mobileMenuOpen" class="sm:hidden bg-gray-800/90 backdrop-blur-lg border-b border-white/10">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link 
            to="/" 
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            ホーム
          </router-link>
          <router-link 
            to="/works-and-ideas" 
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            作品
          </router-link>
          <router-link 
            to="/sign-in"
            class="bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            ログイン / 登録
          </router-link>
          <router-link 
            to="/trending-articles"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            テック記事
          </router-link>
        </div>
      </div>
    </nav>

    <!-- メインコンテンツ -->
    <div class="min-h-screen flex items-center justify-center pt-16 p-4 relative z-1">
      <div class="max-w-md w-full bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01] border border-white/10">
        <!-- ヘッダー部分 -->
        <div class="p-6 sm:p-8 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
          <div class="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-20"></div>
          <h2 class="text-2xl font-bold text-white mb-1">アカウント登録</h2>
          <p class="text-indigo-200">簡単なステップでアカウントを作成</p>
        </div>
        
        <div class="p-6 sm:p-8 space-y-6">
          <div class="space-y-4">
            <button
              @click="loginWithProvider('google')"
              class="flex items-center justify-center w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm bg-gray-700/50 backdrop-blur-sm text-white hover:bg-gray-600/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800"
              :disabled="loading"
            >
              <google-icon class="w-5 h-5 mr-3" />
              <span>Googleでログイン</span>
              <loader-icon v-if="loading === 'google'" class="ml-3 w-4 h-4 animate-spin" />
            </button>

            <button
              @click="loginWithProvider('github')"
              class="flex items-center justify-center w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm bg-gray-900/70 backdrop-blur-sm text-white hover:bg-black/70 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-800"
              :disabled="loading"
            >
              <github-icon class="w-5 h-5 mr-3" />
              <span>GitHubでログイン</span>
              <loader-icon v-if="loading === 'github'" class="ml-3 w-4 h-4 animate-spin" />
            </button>
          </div>

          <!-- 区切り線 -->
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-600/50"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-gray-800/30 backdrop-blur-sm text-gray-400">または</span>
            </div>
          </div>
          
          <form @submit.prevent="signupWithEmail" class="space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-1">メールアドレス</label>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                class="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700/50 backdrop-blur-sm text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-300 mb-1">パスワード</label>
              <div class="relative">
                <input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700/50 backdrop-blur-sm text-white"
                  placeholder="8文字以上"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                >
                  <eye-icon v-if="!showPassword" class="h-5 w-5" />
                  <eye-off-icon v-else class="h-5 w-5" />
                </button>
              </div>
            </div>

            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-[1.02]"
              :disabled="loading"
            >
              <span>アカウント作成</span>
              <loader-icon v-if="loading === 'email'" class="ml-3 w-4 h-4 animate-spin" />
            </button>
          </form>

          <div v-if="error" class="bg-red-900/20 backdrop-blur-sm p-4 rounded-md text-sm text-red-300 border border-red-500/30">
            <div class="flex">
              <alert-circle-icon class="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
              <span>{{ error }}</span>
            </div>
          </div>

          <p class="text-xs text-center text-gray-400">
            登録することで、<a href="#" class="text-indigo-400 hover:text-indigo-300 transition-colors">利用規約</a>および<a href="#" class="text-indigo-400 hover:text-indigo-300 transition-colors">プライバシーポリシー</a>に同意したことになります。
          </p>
        </div>

        <div class="px-6 py-4 bg-gray-800/50 backdrop-blur-sm border-t border-white/5 text-center">
          <p class="text-sm text-gray-300">
            すでにアカウントをお持ちですか？ <router-link to="/login" class="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">ログイン</router-link>
          </p>
        </div>
      </div>
    </div>

    <!-- フッター -->
    <footer class="bg-gray-900 border-t border-gray-800 mt-12 relative z-1">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-sm text-gray-400">
          &copy; 2025 AppMarket, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '@/services/supabase';
import router from '@/router';
import { 
  Eye as EyeIcon, 
  EyeOff as EyeOffIcon, 
  AlertCircle as AlertCircleIcon,
  Loader as LoaderIcon,
  Menu as MenuIcon,
  X as XIcon,
  Github as GithubIcon,
} from 'lucide-vue-next';

// ナビゲーション状態
const mobileMenuOpen = ref(false);

// フォーム状態
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const loading = ref(false);
const error = ref(null);

// Google アイコンコンポーネント
const GoogleIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="w-5 h-5">
      <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
      <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2970142 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
      <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
      <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
    </svg>
  `
};

const loginWithProvider = async (provider) => {
  try {
    loading.value = provider;
    error.value = null;
    
    const { error: authError } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin + '/callback'
      }
    });
    
    if (authError) {
      throw authError;
    }
    
    // Supabaseのセッションは /callback ルートで取得するため、ここでは何もしない
  } catch (err) {
    console.error('Login error:', err.message);
    error.value = `${provider}ログインに失敗しました。もう一度お試しください: ${err.message}`;
  } finally {
    loading.value = false;
  }
};

const signupWithEmail = async () => {
  try {
    loading.value = 'email';
    error.value = null;

    if (password.value.length < 8) {
      throw new Error('パスワードは8文字以上である必要があります');
    }

    const { error: authError, data } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: window.location.origin
      }
    });
    
    if (authError) {
      throw authError;
    }
    
    console.log('Sign up successful:', data);
    
    // 成功メッセージを表示するか、ダッシュボードにリダイレクト
    if (data?.user) {
      router.push('/dashboard');
    }

  } catch (err) {
    console.error('Signup error:', err.message);
    error.value = err.message || '登録に失敗しました。もう一度お試しください。';
  } finally {
    loading.value = false;
  }
};
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* カスタムアニメーション */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

/* グリッド背景 */
.bg-grid-white\/5 {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}
</style>