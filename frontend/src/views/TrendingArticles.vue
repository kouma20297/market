<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header class="bg-white dark:bg-gray-800 shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">記事閲覧アプリ</h1>
          <div class="mt-2 flex">
            <button 
              @click="toggleDarkMode" 
              class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <sun-icon v-if="isDarkMode" class="h-5 w-5 text-gray-100" />
              <moon-icon v-else class="h-5 w-5 text-gray-800" />
            </button>
          </div>
        </div>
      </header>
  
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- タブ切り替え -->
        <div class="border-b border-gray-200 dark:border-gray-700 mb-6">
          <nav class="flex space-x-8" aria-label="記事ソース">
            <button 
              @click="activeSource = 'qiita'" 
              class="py-4 px-1 border-b-2 font-medium text-sm"
              :class="activeSource === 'qiita' 
                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'"
            >
              Qiita
            </button>
            <button 
              @click="activeSource = 'devto'" 
              class="py-4 px-1 border-b-2 font-medium text-sm"
              :class="activeSource === 'devto' 
                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'"
            >
              Dev.to
            </button>
          </nav>
        </div>
  
        <!-- 検索バー -->
        <div class="mb-6">
          <div class="relative">
            <search-icon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="記事を検索..."
              class="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
  
        <!-- ローディング表示 -->
        <div v-if="loading" class="flex justify-center items-center py-12">
          <loader-icon class="animate-spin h-8 w-8 text-indigo-500" />
          <span class="ml-2 text-gray-600 dark:text-gray-300">読み込み中...</span>
        </div>
  
        <!-- エラー表示 -->
        <div v-else-if="error" class="bg-red-50 dark:bg-red-900/20 p-4 rounded-md">
          <div class="flex">
            <alert-circle-icon class="h-5 w-5 text-red-400" />
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800 dark:text-red-300">エラーが発生しました</h3>
              <div class="mt-2 text-sm text-red-700 dark:text-red-200">
                {{ error }}
              </div>
            </div>
          </div>
        </div>
  
        <!-- 記事一覧 -->
        <div v-else-if="filteredArticles.length > 0" class="space-y-6">
          <article 
            v-for="article in filteredArticles" 
            :key="article.id" 
            class="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg transition-all hover:shadow-md"
          >
            <div class="p-6">
              <div class="flex items-center">
                <img 
                  :src="article.user.profile_image || article.user.profile_image_90 || '/placeholder.svg?height=40&width=40'" 
                  :alt="article.user.name || article.user.username" 
                  class="h-10 w-10 rounded-full"
                />
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ article.user.name || article.user.username }}
                  </p>
                  <div class="flex space-x-2 text-xs text-gray-500 dark:text-gray-400">
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
                class="mt-4 block"
              >
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                  {{ article.title }}
                </h2>
                <p v-if="article.body || article.description" class="mt-3 text-base text-gray-500 dark:text-gray-300">
                  {{ truncateText(article.body || article.description, 150) }}
                </p>
              </a>
              <div class="mt-4 flex flex-wrap gap-2">
                <span 
                  v-for="tag in (article.tags || [])" 
                  :key="tag"
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <heart-icon class="h-4 w-4 mr-1" />
                <span>{{ article.likes_count || article.public_reactions_count || 0 }}</span>
                
                <message-circle-icon class="h-4 w-4 ml-4 mr-1" />
                <span>{{ article.comments_count || 0 }}</span>
              </div>
            </div>
          </article>
        </div>
  
        <!-- 記事がない場合 -->
        <div v-else class="text-center py-12">
          <file-question-icon class="mx-auto h-12 w-12 text-gray-400" />
          <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">記事が見つかりません</h3>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            検索条件に一致する記事がありません。
          </p>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, watch } from 'vue'
  import { 
    SunIcon, 
    MoonIcon, 
    SearchIcon, 
    HeartIcon, 
    MessageCircleIcon, 
    AlertCircleIcon, 
    FileQuestionIcon,
    LoaderIcon
  } from 'lucide-vue-next'
  
  // 状態管理
  const activeSource = ref('qiita')
  const qiitaArticles = ref([])
  const devtoArticles = ref([])
  const loading = ref(false)
  const error = ref(null)
  const searchQuery = ref('')
  const isDarkMode = ref(false)
  
  // 記事の取得
  const fetchQiitaArticles = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch('https://qiita.com/api/v2/items')
      if (!response.ok) throw new Error('Qiitaからデータを取得できませんでした')
      
      const data = await response.json()
      qiitaArticles.value = data.map(item => ({
        ...item,
        user: {
          name: item.user.name || item.user.id,
          profile_image: item.user.profile_image_url
        }
      }))
    } catch (err) {
      console.error('Qiita API エラー:', err)
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  
  const fetchDevtoArticles = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch('https://dev.to/api/articles?per_page=5')
      if (!response.ok) throw new Error('Dev.toからデータを取得できませんでした')
      
      const data = await response.json()
      devtoArticles.value = data
    } catch (err) {
      console.error('Dev.to API エラー:', err)
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  
  // アクティブな記事ソースが変更されたときにデータを取得
  watch(activeSource, (newSource) => {
    if (newSource === 'qiita' && qiitaArticles.value.length === 0) {
      fetchQiitaArticles()
    } else if (newSource === 'devto' && devtoArticles.value.length === 0) {
      fetchDevtoArticles()
    }
  })
  
  // フィルタリングされた記事
  const filteredArticles = computed(() => {
    const articles = activeSource.value === 'qiita' ? qiitaArticles.value : devtoArticles.value
    
    if (!searchQuery.value) return articles
    
    const query = searchQuery.value.toLowerCase()
    return articles.filter(article => {
      return (
        article.title.toLowerCase().includes(query) || 
        (article.body && article.body.toLowerCase().includes(query)) ||
        (article.description && article.description.toLowerCase().includes(query)) ||
        (article.tags && article.tags.some(tag => tag.toLowerCase().includes(query)))
      )
    })
  })
  
  // ユーティリティ関数
  const truncateText = (text, maxLength) => {
    if (!text) return ''
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }
  
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date)
  }
  
  // ダークモード切り替え
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  // 初期化
  onMounted(() => {
    // システムの設定に基づいてダークモードを設定
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDarkMode.value = true
      document.documentElement.classList.add('dark')
    }
    
    // 初期データ取得
    fetchQiitaArticles()
  })
  </script>
  
  <style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  </style>