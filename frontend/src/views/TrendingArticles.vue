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
                class="border-transparent text-gray-300 hover:border-indigo-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300"
              >
                ログイン / 登録
              </router-link>
              <router-link 
                to="/trending-articles"
                class="border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                aria-current="page"
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
            <button 
              @click="toggleDarkMode" 
              class="p-2 rounded-full text-gray-400 hover:text-indigo-400 transition-colors duration-300 bg-gray-800/50 backdrop-blur-sm border border-white/10"
            >
              <sun-icon v-if="isDarkMode" class="h-5 w-5" />
              <moon-icon v-else class="h-5 w-5" />
            </button>
            <button class="p-2 rounded-full text-gray-400 hover:text-indigo-400 transition-colors duration-300 bg-gray-800/50 backdrop-blur-sm border border-white/10">
              <bell-icon class="h-5 w-5" />
            </button>
            <img class="h-8 w-8 rounded-full ring-2 ring-indigo-500/50" src="/placeholder.svg?height=32&width=32" alt="ユーザープロフィール" />
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
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            ログイン / 登録
          </router-link>
          <router-link 
            to="/trending-articles"
            class="bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
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
              <button 
                @click="toggleDarkMode" 
                class="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <sun-icon v-if="isDarkMode" class="h-6 w-6" />
                <moon-icon v-else class="h-6 w-6" />
              </button>
              <button class="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <bell-icon class="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- メインコンテンツ -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-1 pt-24">
      <!-- ページタイトル -->
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">トレンド記事</h1>
        <p class="mt-2 text-gray-300">最新のテック情報をチェックしましょう</p>
      </div>

      <!-- タブ切り替え -->
      <div class="mb-8 flex justify-center">
        <div class="bg-gray-800/30 backdrop-blur-sm rounded-full p-1 border border-white/10 inline-flex">
          <button 
            @click="activeSource = 'qiita'" 
            :class="[
              'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeSource === 'qiita' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                : 'text-gray-300 hover:text-white'
            ]"
          >
            Qiita
          </button>
          <button 
            @click="activeSource = 'devto'" 
            :class="[
              'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeSource === 'devto' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                : 'text-gray-300 hover:text-white'
            ]"
          >
            Dev.to
          </button>
        </div>
      </div>

      <!-- 検索バー -->
      <div class="mb-8">
        <div class="relative max-w-md mx-auto">
          <search-icon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="記事を検索..."
            class="pl-10 pr-4 py-2 w-full border border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800/50 backdrop-blur-sm text-white"
          />
        </div>
      </div>

      <!-- ローディング表示 -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <loader-icon class="animate-spin h-8 w-8 text-indigo-400" />
        <span class="ml-2 text-gray-300">読み込み中...</span>
      </div>

      <!-- エラー表示 -->
      <div v-else-if="error" class="bg-red-900/20 backdrop-blur-sm p-4 rounded-xl max-w-3xl mx-auto border border-red-500/30">
        <div class="flex">
          <alert-circle-icon class="h-5 w-5 text-red-400" />
          <div class="ml-3">
            <h3 class="text-sm font-medium text-red-300">エラーが発生しました</h3>
            <div class="mt-2 text-sm text-red-200">
              {{ error }}
            </div>
          </div>
        </div>
      </div>

      <!-- 記事一覧 -->
      <div v-else-if="filteredArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article 
          v-for="article in filteredArticles" 
          :key="article.id" 
          class="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 group"
        >
          <div class="p-6">
            <div class="flex items-center mb-4">
              <img 
                :src="article.user.profile_image || article.user.profile_image_90 || '/placeholder.svg?height=40&width=40'" 
                :alt="article.user.name || article.user.username" 
                class="h-10 w-10 rounded-full ring-2 ring-indigo-500/50"
              />
              <div class="ml-3">
                <p class="text-sm font-medium text-white">
                  {{ article.user.name || article.user.username }}
                </p>
                <div class="flex space-x-2 text-xs text-gray-400">
                  <time :datetime="article.created_at">
                    {{ formatDate(article.created_at || article.published_at) }}
                  </time>
                </div>
              </div>
            </div>
            <a 
              :href="article.url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="block"
            >
              <h2 class="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                {{ article.title }}
              </h2>
              <p v-if="article.body || article.description" class="text-sm text-gray-300 mb-4 line-clamp-3">
                {{ truncateText(article.body || article.description, 150) }}
              </p>
            </a>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tag in (article.tags || [])" 
                :key="tag"
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300 border border-indigo-500/30"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex items-center text-sm text-gray-400">
              <heart-icon class="h-4 w-4 mr-1 text-pink-500" />
              <span class="mr-4">{{ article.likes_count || article.public_reactions_count || 0 }}</span>
              
              <message-circle-icon class="h-4 w-4 mr-1 text-indigo-400" />
              <span>{{ article.comments_count || 0 }}</span>
            </div>
          </div>
        </article>
      </div>

      <!-- 記事がない場合 -->
      <div v-else class="text-center py-12 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-white/10 max-w-md mx-auto">
        <file-question-icon class="mx-auto h-12 w-12 text-gray-400" />
        <h3 class="mt-2 text-lg font-medium text-white">記事が見つかりません</h3>
        <p class="mt-1 text-sm text-gray-400">
          検索条件に一致する記事がありません。
        </p>
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
import { ref, computed, onMounted, watch } from 'vue';
import { 
  Sun as SunIcon, 
  Moon as MoonIcon, 
  Search as SearchIcon, 
  Heart as HeartIcon, 
  MessageCircle as MessageCircleIcon, 
  AlertCircle as AlertCircleIcon, 
  FileQuestion as FileQuestionIcon,
  Loader as LoaderIcon,
  Menu as MenuIcon,
  X as XIcon,
  Bell as BellIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Github as GithubIcon
} from 'lucide-vue-next';

// ナビゲーション状態
const mobileMenuOpen = ref(false);

// 状態管理
const activeSource = ref('qiita');
const qiitaArticles = ref([]);
const devtoArticles = ref([]);
const loading = ref(false);
const error = ref(null);
const searchQuery = ref('');
const isDarkMode = ref(true); // デフォルトでダークモード

// Qiitaのモックデータ
const qiitaMockData = [
  {
    id: 'q1',
    title: 'Vue 3とComposition APIの基本',
    body: 'Vue 3で導入されたComposition APIは、コンポーネントのロジックをより柔軟に整理することができます。このAPIを使用すると、関連する機能ごとにコードをグループ化できるため、大規模なコンポーネントでも保守性が向上します。',
    url: 'https://example.com/vue3-composition-api',
    created_at: '2025-02-15T09:30:00Z',
    likes_count: 142,
    comments_count: 23,
    tags: ['Vue.js', 'JavaScript', 'フロントエンド'],
    user: {
      name: '佐藤開発者',
      profile_image: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: 'q2',
    title: 'TypeScriptで型安全なコードを書く方法',
    body: 'TypeScriptを使用すると、JavaScriptに静的型付けを追加できます。これにより、開発時のエラー検出が容易になり、コードの品質と保守性が向上します。このガイドでは、TypeScriptの基本的な型システムと高度な型機能について説明します。',
    url: 'https://example.com/typescript-guide',
    created_at: '2025-02-10T14:20:00Z',
    likes_count: 98,
    comments_count: 15,
    tags: ['TypeScript', 'JavaScript', '型システム'],
    user: {
      name: '田中エンジニア',
      profile_image: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: 'q3',
    title: 'Next.jsでのサーバーサイドレンダリング入門',
    body: 'Next.jsは、Reactベースのフレームワークで、サーバーサイドレンダリング（SSR）やスタティックサイト生成（SSG）などの機能を提供します。このガイドでは、Next.jsの基本的な使い方とSSRの実装方法について説明します。',
    url: 'https://example.com/nextjs-ssr-guide',
    created_at: '2025-02-05T11:15:00Z',
    likes_count: 120,
    comments_count: 18,
    tags: ['Next.js', 'React', 'SSR', 'フロントエンド'],
    user: {
      name: '鈴木プログラマー',
      profile_image: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: 'q4',
    title: 'TailwindCSSでのレスポンシブデザイン実装',
    body: 'TailwindCSSは、ユーティリティファーストのCSSフレームワークで、カスタムデザインを素早く構築できます。このガイドでは、TailwindCSSを使用したレスポンシブデザインの実装方法について説明します。',
    url: 'https://example.com/tailwindcss-responsive',
    created_at: '2025-01-28T16:45:00Z',
    likes_count: 85,
    comments_count: 12,
    tags: ['CSS', 'TailwindCSS', 'レスポンシブデザイン'],
    user: {
      name: '山田デザイナー',
      profile_image: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: 'q5',
    title: 'GraphQLとApollo Clientの使い方',
    body: 'GraphQLは、APIのためのクエリ言語であり、クライアントが必要なデータを正確に指定できるようにします。Apollo Clientは、GraphQLを使用するためのクライアントライブラリです。このガイドでは、GraphQLの基本とApollo Clientの使い方について説明します。',
    url: 'https://example.com/graphql-apollo',
    created_at: '2025-01-20T10:30:00Z',
    likes_count: 110,
    comments_count: 20,
    tags: ['GraphQL', 'Apollo', 'API', 'フロントエンド'],
    user: {
      name: '伊藤バックエンド',
      profile_image: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: 'q6',
    title: 'Docker入門：コンテナ化の基本',
    body: 'Dockerは、アプリケーションをコンテナ化することで、環境に依存せずに実行できるようにするプラットフォームです。このガイドでは、Dockerの基本的な概念とコマンド、Dockerfileの書き方について説明します。',
    url: 'https://example.com/docker-basics',
    created_at: '2025-01-15T13:20:00Z',
    likes_count: 130,
    comments_count: 25,
    tags: ['Docker', 'コンテナ', 'DevOps'],
    user: {
      name: '高橋インフラ',
      profile_image: '/placeholder.svg?height=40&width=40'
    }
  }
];

// Dev.toのモックデータ
const devtoMockData = [
  {
    id: 'd1',
    title: 'Building a Blog with Astro and Markdown',
    description: 'Learn how to create a fast, modern blog using Astro and Markdown files. This tutorial covers setup, page creation, and deployment strategies.',
    url: 'https://example.com/astro-blog',
    published_at: '2025-02-18T08:45:00Z',
    public_reactions_count: 87,
    comments_count: 14,
    tags: ['astro', 'markdown', 'webdev'],
    user: {
      username: 'astrodev',
      profile_image_90: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: 'd2',
    title: 'Mastering CSS Grid Layout',
    description: 'A comprehensive guide to CSS Grid Layout. Learn how to create complex layouts with this powerful CSS feature and improve your web design skills.',
    url: 'https://example.com/css-grid',
    published_at: '2025-02-12T15:30:00Z',
    public_reactions_count: 65,
    comments_count: 9,
    tags: ['css', 'webdesign', 'frontend'],
    user: {
      username: 'cssmaster',
      profile_image_90: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: 'd3',
    title: 'Introduction to Rust Programming',
    description: 'Rust is a systems programming language that focuses on safety, speed, and concurrency. This guide introduces the basic concepts of Rust and helps you get started with your first Rust program.',
    url: 'https://example.com/rust-intro',
    published_at: '2025-02-08T11:20:00Z',
    public_reactions_count: 112,
    comments_count: 22,
    tags: ['rust', 'programming', 'beginners'],
    user: {
      username: 'rustlover',
      profile_image_90: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: 'd4',
    title: 'Building a REST API with Node.js and Express',
    description: 'Learn how to create a RESTful API using Node.js and Express. This tutorial covers route setup, middleware, error handling, and database integration.',
    url: 'https://example.com/nodejs-api',
    published_at: '2025-02-03T09:15:00Z',
    public_reactions_count: 95,
    comments_count: 17,
    tags: ['node', 'express', 'api', 'backend'],
    user: {
      username: 'nodeexpert',
      profile_image_90: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: 'd5',
    title: 'Getting Started with React Native',
    description: 'React Native allows you to build mobile apps using JavaScript and React. This guide helps you set up your development environment and create your first React Native application.',
    url: 'https://example.com/react-native-start',
    published_at: '2025-01-25T14:40:00Z',
    public_reactions_count: 78,
    comments_count: 13,
    tags: ['reactnative', 'mobile', 'javascript'],
    user: {
      username: 'mobiledev',
      profile_image_90: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: 'd6',
    title: 'Introduction to Machine Learning with Python',
    description: 'This tutorial introduces the basics of machine learning using Python and scikit-learn. Learn about classification, regression, and clustering algorithms with practical examples.',
    url: 'https://example.com/ml-python',
    published_at: '2025-01-18T10:50:00Z',
    public_reactions_count: 120,
    comments_count: 24,
    tags: ['python', 'machinelearning', 'datascience'],
    user: {
      username: 'pythonml',
      profile_image_90: '/placeholder.svg?height=40&width=40'
    }
  }
];

// モックデータを使用した記事の取得
const fetchQiitaArticles = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    // 実際のAPIリクエストの代わりにモックデータを使用
    // 実際の環境では、バックエンドプロキシを使用してAPIリクエストを行うことをお勧めします
    setTimeout(() => {
      qiitaArticles.value = qiitaMockData;
      loading.value = false;
    }, 800); // ローディング効果のために少し遅延
  } catch (err) {
    console.error('Qiita API エラー:', err);
    error.value = 'Qiitaの記事を読み込めませんでした。後でもう一度お試しください。';
    loading.value = false;
  }
};

const fetchDevtoArticles = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    // 実際のAPIリクエストの代わりにモックデータを使用
    setTimeout(() => {
      devtoArticles.value = devtoMockData;
      loading.value = false;
    }, 800); // ローディング効果のために少し遅延
  } catch (err) {
    console.error('Dev.to API エラー:', err);
    error.value = 'Dev.toの記事を読み込めませんでした。後でもう一度お試しください。';
    loading.value = false;
  }
};

// アクティブな記事ソースが変更されたときにデータを取得
watch(activeSource, (newSource) => {
  if (newSource === 'qiita' && qiitaArticles.value.length === 0) {
    fetchQiitaArticles();
  } else if (newSource === 'devto' && devtoArticles.value.length === 0) {
    fetchDevtoArticles();
  }
});

// フィルタリングされた記事
const filteredArticles = computed(() => {
  const articles = activeSource.value === 'qiita' ? qiitaArticles.value : devtoArticles.value;
  
  if (!searchQuery.value) return articles;
  
  const query = searchQuery.value.toLowerCase();
  return articles.filter(article => {
    return (
      article.title.toLowerCase().includes(query) || 
      (article.body && article.body.toLowerCase().includes(query)) ||
      (article.description && article.description.toLowerCase().includes(query)) ||
      (article.tags && article.tags.some(tag => 
        typeof tag === 'string' && tag.toLowerCase().includes(query)
      ))
    );
  });
});

// ユーティリティ関数
const truncateText = (text, maxLength) => {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
};

// ダークモード切り替え
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// 初期化
onMounted(() => {
  // デフォルトでダークモードを適用
  document.documentElement.classList.add('dark');
  
  // 初期データ取得
  fetchQiitaArticles();
});
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
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