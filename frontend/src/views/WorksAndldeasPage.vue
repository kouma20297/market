<template>
    <div class="min-h-screen bg-gray-50">
      <!-- ヘッダー -->
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 class="text-3xl font-bold text-gray-900">AppMarket ギャラリー</h1>
          <div class="flex items-center space-x-4">
            <button class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500">
              <search-icon class="h-6 w-6" />
            </button>
            <button class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500">
              <bell-icon class="h-6 w-6" />
            </button>
            <img class="h-10 w-10 rounded-full" src="/placeholder.svg?height=40&width=40" alt="ユーザープロフィール" />
          </div>
        </div>
      </header>
  
      <!-- メインコンテンツ -->
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- タブナビゲーション -->
        <div class="border-b border-gray-200 mb-8">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <button 
              @click="activeTab = 'works'" 
              :class="[
                activeTab === 'works' 
                  ? 'border-indigo-500 text-indigo-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg'
              ]"
            >
              作品
            </button>
            <button 
              @click="activeTab = 'ideas'" 
              :class="[
                activeTab === 'ideas' 
                  ? 'border-indigo-500 text-indigo-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg'
              ]"
            >
              アイディア
            </button>
          </nav>
        </div>
  
        <!-- フィルターとソート -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div class="flex items-center space-x-2">
            <span class="text-gray-700">カテゴリー:</span>
            <select v-model="selectedCategory" class="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="all">すべて</option>
              <option value="business">ビジネス</option>
              <option value="productivity">生産性</option>
              <option value="education">教育</option>
              <option value="entertainment">エンターテイメント</option>
              <option value="utility">ユーティリティ</option>
            </select>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-gray-700">並び替え:</span>
            <select v-model="sortBy" class="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="newest">新着順</option>
              <option value="popular">人気順</option>
              <option value="rating">評価順</option>
            </select>
          </div>
        </div>
  
        <!-- 作品一覧 -->
        <div v-if="activeTab === 'works'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="work in filteredWorks" :key="work.id" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="relative pb-[56.25%]">
              <img :src="work.image" :alt="work.title" class="absolute h-full w-full object-cover" />
              <div class="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                {{ work.category }}
              </div>
            </div>
            <div class="p-4">
              <div class="flex justify-between items-start">
                <h3 class="text-lg font-bold text-gray-900 mb-1">{{ work.title }}</h3>
                <div class="flex items-center">
                  <star-icon class="h-4 w-4 text-yellow-400" />
                  <span class="text-sm text-gray-600 ml-1">{{ work.rating }}</span>
                </div>
              </div>
              <p class="text-sm text-gray-500 mb-3 line-clamp-2">{{ work.description }}</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <img :src="work.author.avatar" :alt="work.author.name" class="h-8 w-8 rounded-full" />
                  <a 
                    :href="`/profile/${work.author.id}`" 
                    class="ml-2 text-sm font-medium text-gray-900 hover:text-indigo-600"
                  >
                    {{ work.author.name }}
                  </a>
                </div>
                <span class="text-xs text-gray-500">{{ work.date }}</span>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 flex justify-between items-center">
              <div class="flex space-x-1">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                  {{ work.platform }}
                </span>
                <span v-if="work.isFree" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  無料
                </span>
                <span v-else class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                  {{ work.price }}
                </span>
              </div>
              <button class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                詳細を見る
              </button>
            </div>
          </div>
        </div>
  
        <!-- アイディア一覧 -->
        <div v-if="activeTab === 'ideas'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="idea in filteredIdeas" :key="idea.id" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="p-4 border-b">
              <div class="flex justify-between items-start">
                <h3 class="text-lg font-bold text-gray-900 mb-1">{{ idea.title }}</h3>
                <div class="flex items-center">
                  <heart-icon :class="[idea.isLiked ? 'text-red-500' : 'text-gray-400', 'h-5 w-5']" />
                  <span class="text-sm text-gray-600 ml-1">{{ idea.likes }}</span>
                </div>
              </div>
              <p class="text-sm text-gray-500 mb-4">{{ idea.description }}</p>
              <div class="flex flex-wrap gap-1 mb-3">
                <span v-for="(tag, index) in idea.tags" :key="index" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  {{ tag }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <img :src="idea.author.avatar" :alt="idea.author.name" class="h-8 w-8 rounded-full" />
                  <a 
                    :href="`/profile/${idea.author.id}`" 
                    class="ml-2 text-sm font-medium text-gray-900 hover:text-indigo-600"
                  >
                    {{ idea.author.name }}
                  </a>
                </div>
                <span class="text-xs text-gray-500">{{ idea.date }}</span>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 flex justify-between items-center">
              <div class="flex items-center space-x-2">
                <button class="inline-flex items-center text-gray-500 hover:text-indigo-600">
                  <message-square-icon class="h-4 w-4 mr-1" />
                  <span class="text-xs">{{ idea.comments }}</span>
                </button>
                <button class="inline-flex items-center text-gray-500 hover:text-indigo-600">
                  <share-icon class="h-4 w-4 mr-1" />
                  <span class="text-xs">共有</span>
                </button>
              </div>
              <div class="flex items-center">
                <span class="text-xs text-gray-500 mr-2">進捗状況:</span>
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium" :class="getStatusClass(idea.status)">
                  {{ idea.status }}
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ページネーション -->
        <div class="mt-8 flex justify-center">
          <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">前へ</span>
              <chevron-left-icon class="h-5 w-5" />
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              1
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-indigo-100">
              2
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </a>
            <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              8
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              9
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              10
            </a>
            <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">次へ</span>
              <chevron-right-icon class="h-5 w-5" />
            </a>
          </nav>
        </div>
      </main>
  
      <!-- フッター -->
      <footer class="bg-white border-t border-gray-200 mt-12">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p class="text-center text-sm text-gray-500">
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
    ChevronRight as ChevronRightIcon
  } from 'lucide-vue-next';
  
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
        return 'bg-yellow-100 text-yellow-800';
      case '計画中':
        return 'bg-blue-100 text-blue-800';
      case '開発中':
        return 'bg-green-100 text-green-800';
      case '完成':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
    line-clamp: 2; /* 標準のline-clampプロパティを追加 */
  }
</style>
