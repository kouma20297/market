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
                class="border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                aria-current="page"
              >
                作品
              </router-link>
              <router-link 
                to="/sign-in"
                class="border-transparent text-gray-300 hover:border-indigo-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300"
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
          
          <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <button class="p-2 rounded-full text-gray-400 hover:text-indigo-400 transition-colors duration-300 bg-gray-800/50 backdrop-blur-sm border border-white/10">
              <span class="sr-only">検索</span>
              <search-icon class="h-5 w-5" />
            </button>
            <button class="p-2 rounded-full text-gray-400 hover:text-indigo-400 transition-colors duration-300 bg-gray-800/50 backdrop-blur-sm border border-white/10">
              <span class="sr-only">通知</span>
              <bell-icon class="h-5 w-5" />
            </button>
            <div class="relative">
              <button 
                @click="profileMenuOpen = !profileMenuOpen"
                class="flex rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800"
              >
                <span class="sr-only">ユーザーメニューを開く</span>
                <img class="h-8 w-8 rounded-full ring-2 ring-indigo-500/50" src="/placeholder.svg?height=32&width=32" alt="ユーザープロフィール" />
              </button>
              
              <!-- プロフィールドロップダウンメニュー -->
              <div 
                v-if="profileMenuOpen" 
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-xl shadow-lg py-1 bg-gray-800/90 backdrop-blur-lg border border-white/10 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              >
                <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors">
                  プロフィール
                </router-link>
                <router-link to="/settings" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors">
                  設定
                </router-link>
                <router-link to="/sign-out" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors">
                  ログアウト
                </router-link>
              </div>
            </div>
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
            class="bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            作品
          </router-link>
          <router-link 
            to="/sign-in"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
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
        <div class="pt-4 pb-3 border-t border-white/10">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full ring-2 ring-indigo-500/50" src="/placeholder.svg?height=40&width=40" alt="ユーザープロフィール" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-white">ユーザー名</div>
              <div class="text-sm font-medium text-gray-400">user@example.com</div>
            </div>
            <div class="ml-auto flex space-x-2">
              <button class="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">通知</span>
                <bell-icon class="h-6 w-6" />
              </button>
            </div>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <router-link to="/profile" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
              プロフィール
            </router-link>
            <router-link to="/settings" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
              設定
            </router-link>
            <router-link to="/sign-out" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
              ログアウト
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- メインコンテンツ -->
    <main class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative z-1 pt-24">
      <!-- ページタイトル -->
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">AppMarket ギャラリー</h1>
        <p class="mt-2 text-gray-300">素晴らしいアプリとアイデアを探索しましょう</p>
      </div>
      
      <!-- タブナビゲーション -->
      <div class="mb-8 flex justify-center">
        <div class="bg-gray-800/30 backdrop-blur-sm rounded-full p-1 border border-white/10 inline-flex">
          <button 
            @click="activeTab = 'works'" 
            :class="[
              'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeTab === 'works' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                : 'text-gray-300 hover:text-white'
            ]"
          >
            作品
          </button>
          <button 
            @click="activeTab = 'ideas'" 
            :class="[
              'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeTab === 'ideas' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                : 'text-gray-300 hover:text-white'
            ]"
          >
            アイディア
          </button>
        </div>
      </div>

      <!-- フィルターとソート -->
      <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 mb-8 border border-white/10">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div class="flex items-center space-x-2">
            <span class="text-gray-300">カテゴリー:</span>
            <select 
              v-model="selectedCategory" 
              class="bg-gray-700/50 text-gray-200 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/30 focus:ring-opacity-50"
            >
              <option value="all">すべて</option>
              <option value="business">ビジネス</option>
              <option value="productivity">生産性</option>
              <option value="education">教育</option>
              <option value="entertainment">エンターテイメント</option>
              <option value="utility">ユーティリティ</option>
            </select>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-gray-300">並び替え:</span>
            <select 
              v-model="sortBy" 
              class="bg-gray-700/50 text-gray-200 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500/30 focus:ring-opacity-50"
            >
              <option value="newest">新着順</option>
              <option value="popular">人気順</option>
              <option value="rating">評価順</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 作品一覧 -->
      <div v-if="activeTab === 'works'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="work in filteredWorks" 
          :key="work.id" 
          class="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 group"
        >
          <div class="relative pb-[56.25%] overflow-hidden">
            <img 
              :src="work.image" 
              :alt="work.title" 
              class="absolute h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            <div class="absolute top-2 right-2 bg-gray-900/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-500/30">
              {{ work.category }}
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start">
              <h3 class="text-lg font-bold mb-1 group-hover:text-indigo-400 transition-colors duration-300">{{ work.title }}</h3>
              <div class="flex items-center bg-gray-900/50 rounded-full px-2 py-0.5">
                <star-icon class="h-4 w-4 text-yellow-400" />
                <span class="text-sm text-gray-300 ml-1">{{ work.rating }}</span>
              </div>
            </div>
            <p class="text-sm text-gray-300 mb-4 line-clamp-2">{{ work.description }}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img 
                  :src="work.author.avatar" 
                  :alt="work.author.name" 
                  class="h-8 w-8 rounded-full ring-1 ring-indigo-500/50" 
                />
                <a 
                  :href="`/profile/${work.author.id}`" 
                  class="ml-2 text-sm font-medium text-gray-200 hover:text-indigo-400 transition-colors"
                >
                  {{ work.author.name }}
                </a>
              </div>
              <span class="text-xs text-gray-400">{{ work.date }}</span>
            </div>
          </div>
          <div class="px-5 py-3 bg-gray-900/50 backdrop-blur-sm flex justify-between items-center border-t border-white/5">
            <div class="flex space-x-1">
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900/70 text-indigo-300 border border-indigo-500/30">
                {{ work.platform }}
              </span>
              <span 
                v-if="work.isFree" 
                class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-900/70 text-green-300 border border-green-500/30"
              >
                無料
              </span>
              <span 
                v-else 
                class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-900/70 text-blue-300 border border-blue-500/30"
              >
                {{ work.price }}
              </span>
            </div>
            <button class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40">
              詳細を見る
            </button>
          </div>
        </div>
      </div>

      <!-- アイディア一覧 -->
      <div v-if="activeTab === 'ideas'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="idea in filteredIdeas" 
          :key="idea.id" 
          class="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20"
        >
          <div class="p-5 border-b border-white/5">
            <div class="flex justify-between items-start">
              <h3 class="text-lg font-bold mb-1 hover:text-indigo-400 transition-colors duration-300">{{ idea.title }}</h3>
              <div class="flex items-center">
                <button class="group">
                  <heart-icon 
                    :class="[
                      idea.isLiked ? 'text-pink-500' : 'text-gray-400 group-hover:text-pink-400', 
                      'h-5 w-5 transition-colors duration-300'
                    ]" 
                  />
                </button>
                <span class="text-sm text-gray-300 ml-1">{{ idea.likes }}</span>
              </div>
            </div>
            <p class="text-sm text-gray-300 mb-4">{{ idea.description }}</p>
            <div class="flex flex-wrap gap-1 mb-4">
              <span 
                v-for="(tag, index) in idea.tags" 
                :key="index" 
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300 border border-indigo-500/30"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img 
                  :src="idea.author.avatar" 
                  :alt="idea.author.name" 
                  class="h-8 w-8 rounded-full ring-1 ring-indigo-500/50" 
                />
                <a 
                  :href="`/profile/${idea.author.id}`" 
                  class="ml-2 text-sm font-medium text-gray-200 hover:text-indigo-400 transition-colors"
                >
                  {{ idea.author.name }}
                </a>
              </div>
              <span class="text-xs text-gray-400">{{ idea.date }}</span>
            </div>
          </div>
          <div class="px-5 py-3 bg-gray-900/50 backdrop-blur-sm flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <button class="inline-flex items-center text-gray-400 hover:text-indigo-400 transition-colors">
                <message-square-icon class="h-4 w-4 mr-1" />
                <span class="text-xs">{{ idea.comments }}</span>
              </button>
              <button class="inline-flex items-center text-gray-400 hover:text-indigo-400 transition-colors">
                <share-icon class="h-4 w-4 mr-1" />
                <span class="text-xs">共有</span>
              </button>
            </div>
            <div class="flex items-center">
              <span class="text-xs text-gray-400 mr-2">進捗状況:</span>
              <span 
                class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium" 
                :class="getStatusClass(idea.status)"
              >
                {{ idea.status }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- ページネーション -->
      <div class="mt-12 flex justify-center">
        <nav class="relative z-0 inline-flex rounded-xl overflow-hidden shadow-lg shadow-indigo-500/20 bg-gray-800/50 backdrop-blur-sm border border-white/10" aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors">
            <span class="sr-only">前へ</span>
            <chevron-left-icon class="h-5 w-5" />
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors border-l border-r border-white/5">
            1
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-l border-r border-white/5">
            2
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors border-l border-r border-white/5">
            3
          </a>
          <span class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 border-l border-r border-white/5">
            ...
          </span>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors border-l border-r border-white/5">
            8
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors border-l border-r border-white/5">
            9
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors border-l border-r border-white/5">
            10
          </a>
          <a href="#" class="relative inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors">
            <span class="sr-only">次へ</span>
            <chevron-right-icon class="h-5 w-5" />
          </a>
        </nav>
      </div>
    </main>

    <!-- フッター -->
    <footer class="bg-gray-900 border-t border-gray-800 mt-12 relative z-1">
      <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div class="px-5 py-2">
            <a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">
              会社概要
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">
              ブログ
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">
              採用情報
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">
              プライバシーポリシー
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">
              利用規約
            </a>
          </div>
        </nav>
        <div class="mt-8 flex justify-center space-x-6">
          <a href="#" class="text-gray-400 hover:text-indigo-400 transition-colors">
            <span class="sr-only">Facebook</span>
            <facebook-icon class="h-6 w-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-indigo-400 transition-colors">
            <span class="sr-only">Instagram</span>
            <instagram-icon class="h-6 w-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-indigo-400 transition-colors">
            <span class="sr-only">Twitter</span>
            <twitter-icon class="h-6 w-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-indigo-400 transition-colors">
            <span class="sr-only">GitHub</span>
            <github-icon class="h-6 w-6" />
          </a>
        </div>
        <p class="mt-8 text-center text-base text-gray-400">
          &copy; 2025 AppMarket, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { 
  Search as SearchIcon, 
  Bell as BellIcon, 
  Star as StarIcon,
  Heart as HeartIcon,
  MessageSquare as MessageSquareIcon,
  Share as ShareIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
  X as XIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Github as GithubIcon
} from 'lucide-vue-next';

// ナビゲーション状態
const mobileMenuOpen = ref(false);
const profileMenuOpen = ref(false);

// アクティブなタブ（作品またはアイディア）
const activeTab = ref('works');

// フィルターとソート用の状態
const selectedCategory = ref('all');
const sortBy = ref('newest');

// サンプルデータ - 作品
const works = ref([
  {
    id: 1,
    title: "TaskFlow",
    description: "タスク管理を効率化するWebアプリケーション。直感的なUIとカレンダー連携機能を備えています。",
    image: "/placeholder.svg?height=200&width=350",
    category: "生産性",
    platform: "Web",
    rating: 4.8,
    isFree: false,
    price: "¥1,200/月",
    date: "2025/02/15",
    author: {
      id: 101,
      name: "佐藤健太",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  },
  {
    id: 2,
    title: "BudgetMaster",
    description: "家計簿管理アプリ。収支の記録、予算設定、グラフによる分析機能を提供します。",
    image: "/placeholder.svg?height=200&width=350",
    category: "ビジネス",
    platform: "Web/Mobile",
    rating: 4.5,
    isFree: false,
    price: "¥980/月",
    date: "2025/02/10",
    author: {
      id: 102,
      name: "田中美咲",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  },
  {
    id: 3,
    title: "CodeSnippet",
    description: "プログラマー向けのコードスニペット管理ツール。シンタックスハイライトと検索機能付き。",
    image: "/placeholder.svg?height=200&width=350",
    category: "開発",
    platform: "Desktop",
    rating: 4.7,
    isFree: true,
    price: "",
    date: "2025/02/05",
    author: {
      id: 103,
      name: "鈴木一郎",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  },
  {
    id: 4,
    title: "MindMap Creator",
    description: "アイデアを整理するためのマインドマップ作成ツール。リアルタイム共同編集が可能です。",
    image: "/placeholder.svg?height=200&width=350",
    category: "教育",
    platform: "Web",
    rating: 4.3,
    isFree: false,
    price: "¥1,500/月",
    date: "2025/01/28",
    author: {
      id: 104,
      name: "山田花子",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  },
  {
    id: 5,
    title: "FitTracker",
    description: "フィットネス記録アプリ。運動記録、食事管理、進捗グラフなどの機能を提供します。",
    image: "/placeholder.svg?height=200&width=350",
    category: "健康",
    platform: "Mobile",
    rating: 4.6,
    isFree: true,
    price: "",
    date: "2025/01/20",
    author: {
      id: 105,
      name: "伊藤直樹",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  },
  {
    id: 6,
    title: "LanguageBuddy",
    description: "語学学習アプリ。AIを活用した会話練習と単語学習機能を提供します。",
    image: "/placeholder.svg?height=200&width=350",
    category: "教育",
    platform: "Web/Mobile",
    rating: 4.9,
    isFree: false,
    price: "¥1,800/月",
    date: "2025/01/15",
    author: {
      id: 106,
      name: "高橋由美",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  }
]);

// サンプルデータ - アイディア
const ideas = ref([
  {
    id: 1,
    title: "AR家具配置アプリ",
    description: "ARを使用して、購入前に家具を実際の部屋に配置してみることができるアプリのアイデア。サイズ感や色の調和を確認できます。",
    tags: ["AR", "インテリア", "ショッピング"],
    likes: 128,
    isLiked: true,
    comments: 24,
    status: "アイデア段階",
    date: "2025/02/18",
    author: {
      id: 201,
      name: "中村悠太",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  },
  {
    id: 2,
    title: "地域コミュニティマーケットプレイス",
    description: "近隣住民同士で不用品の売買や交換ができるローカルマーケットプレイス。持続可能な消費を促進します。",
    tags: ["コミュニティ", "サステナビリティ", "マーケットプレイス"],
    likes: 95,
    isLiked: false,
    comments: 18,
    status: "計画中",
    date: "2025/02/14",
    author: {
      id: 202,
      name: "小林さくら",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  },
  {
    id: 3,
    title: "AIパーソナルレシピ提案",
    description: "冷蔵庫の中身をスキャンして、あるものだけで作れるレシピを提案するAIアプリ。食材の無駄を減らします。",
    tags: ["AI", "料理", "サステナビリティ"],
    likes: 156,
    isLiked: true,
    comments: 32,
    status: "開発中",
    date: "2025/02/10",
    author: {
      id: 203,
      name: "渡辺健",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  },
  {
    id: 4,
    title: "シニア向けテクノロジー学習プラットフォーム",
    description: "高齢者向けのシンプルで分かりやすいテクノロジー学習プラットフォーム。デジタルデバイドを解消します。",
    tags: ["教育", "シニア", "アクセシビリティ"],
    likes: 87,
    isLiked: false,
    comments: 15,
    status: "アイデア段階",
    date: "2025/02/05",
    author: {
      id: 204,
      name: "加藤美穂",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  },
  {
    id: 5,
    title: "ペット健康管理アプリ",
    description: "ペットの健康記録、予防接種スケジュール、食事管理などを一元管理できるアプリ。獣医とのデータ共有も可能。",
    tags: ["ペット", "健康", "ライフスタイル"],
    likes: 112,
    isLiked: true,
    comments: 21,
    status: "計画中",
    date: "2025/01/30",
    author: {
      id: 205,
      name: "松本大輔",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  },
  {
    id: 6,
    title: "フリーランサー向け案件マッチングAI",
    description: "フリーランサーのスキルと経験に基づいて、最適な案件を提案するAIマッチングシステム。",
    tags: ["フリーランス", "AI", "キャリア"],
    likes: 143,
    isLiked: false,
    comments: 27,
    status: "開発中",
    date: "2025/01/25",
    author: {
      id: 206,
      name: "佐々木真理",
      avatar: "/placeholder.svg?height=32&width=32"
    }
  }
]);

// フィルター適用済みの作品リスト
const filteredWorks = computed(() => {
  let result = [...works.value];
  
  // カテゴリーでフィルタリング
  if (selectedCategory.value !== 'all') {
    result = result.filter(work => work.category.includes(selectedCategory.value));
  }
  
  // 並び替え
  if (sortBy.value === 'newest') {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy.value === 'popular') {
    result.sort((a, b) => b.rating - a.rating);
  } else if (sortBy.value === 'rating') {
    result.sort((a, b) => b.rating - a.rating);
  }
  
  return result;
});

// フィルター適用済みのアイディアリスト
const filteredIdeas = computed(() => {
  let result = [...ideas.value];
  
  // カテゴリーでフィルタリング（タグで代用）
  if (selectedCategory.value !== 'all') {
    result = result.filter(idea => 
      idea.tags.some(tag => tag.toLowerCase().includes(selectedCategory.value.toLowerCase()))
    );
  }
  
  // 並び替え
  if (sortBy.value === 'newest') {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy.value === 'popular') {
    result.sort((a, b) => b.likes - a.likes);
  } else if (sortBy.value === 'rating') {
    result.sort((a, b) => b.likes - a.likes);
  }
  
  return result;
});

// ステータスに応じたクラスを返す関数
const getStatusClass = (status) => {
  switch (status) {
    case 'アイデア段階':
      return 'bg-yellow-900/70 text-yellow-300 border border-yellow-500/30';
    case '計画中':
      return 'bg-blue-900/70 text-blue-300 border border-blue-500/30';
    case '開発中':
      return 'bg-green-900/70 text-green-300 border border-green-500/30';
    case '完成':
      return 'bg-purple-900/70 text-purple-300 border border-purple-500/30';
    default:
      return 'bg-gray-900/70 text-gray-300 border border-gray-500/30';
  }
};
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* アニメーション */
@keyframes glow {
  0% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.5); }
  50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.8); }
  100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.5); }
}

.glow-effect {
  animation: glow 3s infinite;
}
</style>