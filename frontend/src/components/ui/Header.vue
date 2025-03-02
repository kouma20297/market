<template>
  <div class="font-sans">
    <!-- ナビゲーションバー -->
    <nav class="bg-white shadow-sm fixed w-full z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-xl font-bold text-gray-900">AppMarket</h1>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link to="/"  class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                ホーム
              </router-link>
              <router-link 
              to="/works-and-ideas" 
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    作品
              </router-link>
              <router-link 
              to="/login-register"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    ログイン / 登録
              </router-link>

            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">通知を見る</span>
              <bell-icon class="h-6 w-6" />
            </button>
            <div class="ml-3 relative">
              <div>
                <button class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">メニューを開く</span>
                  <img class="h-8 w-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="ユーザー" />
                </button>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">メニューを開く</span>
              <menu-icon v-if="!mobileMenuOpen" class="block h-6 w-6" />
              <x-icon v-else class="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';
import { BellIcon, MenuIcon, XIcon } from 'lucide-vue-next';

export default {
  components: {
    BellIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    const mobileMenuOpen = ref(false);

    return {
      mobileMenuOpen,
    };
  },
};
</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>