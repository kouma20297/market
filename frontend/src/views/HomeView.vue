<template>
  <div class="font-sans bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
    <!-- ナビゲーションバー -->
    <nav class="bg-gray-900/80 backdrop-blur-lg border-b border-indigo-500/20 fixed w-full z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">AppMarket</h1>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" class="border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                ホーム
              </a>
              <router-link 
              to="/works-and-ideas" 
              class="border-transparent text-gray-300 hover:border-indigo-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    作品
              </router-link>

              <router-link 
              to="/sign-in"
              class="border-transparent text-gray-300 hover:border-indigo-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    ログイン / 登録
              </router-link>

              <router-link 
              to="/trending-articles"
              class="border-transparent text-gray-300 hover:border-indigo-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    テック記事
              </router-link>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button class="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900">
              <span class="sr-only">通知を見る</span>
              <bell-icon class="h-6 w-6" />
            </button>
            <div class="ml-3 relative">
              <div>
                <button class="rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900" id="user-menu" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">メニューを開く</span>
                  <img class="h-8 w-8 rounded-full ring-2 ring-indigo-500/50" src="/placeholder.svg?height=32&width=32" alt="ユーザー" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- ヒーローセクション -->
    <div class="pt-16 relative overflow-hidden">
      <!-- 背景エフェクト -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div class="relative z-1 bg-gray-900/30 backdrop-blur-sm rounded-3xl overflow-hidden mx-4 sm:mx-8 lg:mx-12 my-8 border border-white/10">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">あなたのWebアプリを</span>
                  <span class="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 xl:inline">世界へ届けよう</span>
                </h1>
                <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  AppMarketは、開発者がWebアプリケーションを簡単に販売できるプラットフォームです。あなたの素晴らしいアイデアを収益化し、世界中のユーザーに届けましょう。
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 md:py-4 md:text-lg md:px-10 transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                      無料で始める
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-indigo-500 text-base font-medium rounded-md text-indigo-300 bg-transparent hover:bg-indigo-900/30 md:py-4 md:text-lg md:px-10 transform transition-all hover:scale-105">
                      詳細を見る
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/placeholder.svg?height=800&width=1200" alt="アプリケーションダッシュボード" />
        </div>
      </div>
    </div>

    <!-- 最新Qiita記事セクション -->
    <div class="py-12 relative">
      <!-- 背景エフェクト -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-1/3 left-1/3 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div class="text-center mb-10">
          <h2 class="text-base text-indigo-400 font-semibold tracking-wide uppercase">テック情報</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            注目の<span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Qiita記事</span>
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            開発者に役立つ最新の技術記事をチェックしましょう
          </p>
        </div>

        <!-- ローディング表示 -->
        <div v-if="articlesLoading" class="flex justify-center items-center py-12">
          <loader-icon class="animate-spin h-8 w-8 text-indigo-400" />
          <span class="ml-2 text-gray-300">記事を読み込み中...</span>
        </div>

        <!-- エラー表示 -->
        <div v-else-if="articlesError" class="bg-red-900/30 backdrop-blur-sm border border-red-500/50 p-4 rounded-xl max-w-3xl mx-auto">
          <div class="flex">
            <alert-circle-icon class="h-5 w-5 text-red-400" />
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-300">エラーが発生しました</h3>
              <div class="mt-2 text-sm text-red-200">
                {{ articlesError }}
              </div>
            </div>
          </div>
        </div>

        <!-- 記事一覧 -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article 
            v-for="article in qiitaArticles.slice(0, 3)" 
            :key="article.id" 
            class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 border border-white/10"
          >
            <a :href="article.url" target="_blank" rel="noopener noreferrer" class="block h-full">
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <img 
                    :src="article.user.profile_image || '/placeholder.svg?height=40&width=40'" 
                    :alt="article.user.name" 
                    class="h-10 w-10 rounded-full ring-2 ring-indigo-500/50"
                  />
                  <div class="ml-3">
                    <p class="text-sm font-medium text-white">{{ article.user.name }}</p>
                    <time :datetime="article.created_at" class="text-xs text-gray-400">
                      {{ formatDate(article.created_at) }}
                    </time>
                  </div>
                </div>
                
                <h3 class="text-xl font-bold mb-3 line-clamp-2 group-hover:text-indigo-400 transition-colors duration-300">
                  {{ article.title }}
                </h3>
                
                <div class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="tag in article.tags.slice(0, 3)" 
                    :key="tag"
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300 border border-indigo-500/30"
                  >
                    {{ tag }}
                  </span>
                </div>
                
                <div class="flex items-center text-sm text-gray-400">
                  <heart-icon class="h-4 w-4 mr-1 text-pink-500" />
                  <span class="mr-4">{{ article.likes_count }}</span>
                  
                  <message-circle-icon class="h-4 w-4 mr-1 text-indigo-400" />
                  <span>{{ article.comments_count }}</span>
                </div>
              </div>
            </a>
          </article>
        </div>

        <!-- もっと見るボタン -->
        <div class="mt-10 text-center">
          <router-link 
            to="/trending-articles" 
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 transform hover:scale-105"
          >
            もっと記事を見る
            <arrow-right-icon class="ml-2 h-5 w-5" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- 特徴セクション -->
    <div class="py-12 relative">
      <!-- 背景エフェクト -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-400 font-semibold tracking-wide uppercase">特徴</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            アプリ販売を<span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">もっと簡単に</span>
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            AppMarketは、制作物・アイデアを販売するためのプラットフォームです。
          </p>
        </div>

        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20">
              <dt>
                <div class="absolute -top-4 -left-4 flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
                  <credit-card-icon class="h-8 w-8" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-white">さまざまな決済システム</p>
              </dt>
              <dd class="mt-6 text-base text-gray-300">
                複数の決済方法があり、金銭だけじゃなく企業からのスカウト、プロジェクト支援なども可能です。
              </dd>
            </div>

            <div class="relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20">
              <dt>
                <div class="absolute -top-4 -left-4 flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
                  <users-icon class="h-8 w-8" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-white">ユーザー管理</p>
              </dt>
              <dd class="mt-6 text-base text-gray-300">
                ユーザーの登録、認証、権限管理などを簡単に行えるシステムを提供します。
              </dd>
            </div>

            <div class="relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20">
              <dt>
                <div class="absolute -top-4 -left-4 flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
                  <bar-chart-icon class="h-8 w-8" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-white">詳細な分析</p>
              </dt>
              <dd class="mt-6 text-base text-gray-300">
                ユーザーの行動などを可視化し、ビジネスの成長をサポートします。
              </dd>
            </div>

            <div class="relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20">
              <dt>
                <div class="absolute -top-4 -left-4 flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
                  <shield-icon class="h-8 w-8" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-white">セキュリティ</p>
              </dt>
              <dd class="mt-6 text-base text-gray-300">
                最新のセキュリティ技術を採用し、ユーザーデータと決済情報を安全に保護します。
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- お客様の声 -->
    <div class="py-12 relative">
      <!-- 背景エフェクト -->
      <div class="absolute inset-0 z-0">
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-400 font-semibold tracking-wide uppercase">お客様の声</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">成功事例</span>
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            AppMarketを利用して成功を収めたお客様の声をご紹介します。
          </p>
        </div>

        <div class="mt-10">
          <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <img class="h-14 w-14 rounded-full ring-2 ring-indigo-500/50" src="/placeholder.svg?height=56&width=56" alt="顧客の写真" />
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-bold text-white">佐藤健太</h4>
                  <p class="text-sm text-gray-400">TechSolutions CEO</p>
                  <div class="mt-1 flex items-center">
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                  </div>
                  <p class="mt-3 text-base text-gray-300">
                    「AppMarketのおかげで、私たちのSaaSアプリケーションの売上が3倍になりました。決済システムの導入も簡単で、国際展開も思った以上にスムーズでした。」
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <img class="h-14 w-14 rounded-full ring-2 ring-indigo-500/50" src="/placeholder.svg?height=56&width=56" alt="顧客の写真" />
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-bold text-white">田中美咲</h4>
                  <p class="text-sm text-gray-400">DesignPro 創業者</p>
                  <div class="mt-1 flex items-center">
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                  </div>
                  <p class="mt-3 text-base text-gray-300">
                    「個人開発者として、マーケティングやユーザーサポートに時間を割くことが難しかったのですが、AppMarketのプラットフォームを利用することで、開発に集中できるようになりました。」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="py-16 relative overflow-hidden">
      <!-- 背景エフェクト -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50"></div>
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl"></div>
      </div>
      
      <div class="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-1">
        <div class="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl shadow-indigo-500/20">
          <h2 class="text-3xl font-extrabold sm:text-4xl">
            <span class="block">あなたのWebアプリを世界へ</span>
            <span class="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">今すぐ始めましょう</span>
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-300">
            14日間の無料トライアルで、AppMarketの全ての機能をお試しいただけます。クレジットカードは必要ありません。
          </p>
          <a href="#" class="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30 transform transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40">
            無料で始める
          </a>
        </div>
      </div>
    </div>

    <!-- フッター -->
    <footer class="bg-gray-900 border-t border-gray-800">
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
import { ref, onMounted } from 'vue';
import { 
  Bell as BellIcon, 
  Menu as MenuIcon, 
  X as XIcon, 
  CreditCard as CreditCardIcon,
  Users as UsersIcon,
  BarChart as BarChartIcon,
  Shield as ShieldIcon,
  Star as StarIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Github as GithubIcon,
  Heart as HeartIcon,
  MessageCircle as MessageCircleIcon,
  ArrowRight as ArrowRightIcon,
  AlertCircle as AlertCircleIcon,
  Loader as LoaderIcon
} from 'lucide-vue-next';

// Qiita記事関連の状態
const qiitaArticles = ref([]);
const articlesLoading = ref(false);
const articlesError = ref(null);

// Qiita記事の取得
const fetchQiitaArticles = async () => {
  articlesLoading.value = true;
  articlesError.value = null;
  
  try {
    const response = await fetch('https://qiita.com/api/v2/items');
    if (!response.ok) throw new Error('Qiitaからデータを取得できませんでした');
    
    const data = await response.json();
    qiitaArticles.value = data.map(item => ({
      ...item,
      user: {
        name: item.user.name || item.user.id,
        profile_image: item.user.profile_image_url
      }
    }));
  } catch (err) {
    console.error('Qiita API エラー:', err);
    articlesError.value = 'Qiitaの記事を読み込めませんでした。後でもう一度お試しください。';
  } finally {
    articlesLoading.value = false;
  }
};

// ユーティリティ関数
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
};

// 初期化
onMounted(() => {
  // 初期データ取得
  fetchQiitaArticles();
});
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* カスタムスタイル */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

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

## 近未来的なデザインの特徴

このデザインでは、以下の要素を取り入れて近未来的な雰囲気を演出しています：

1. **ダークモードベース**
   - 深いグレーと黒をベースにした配色
   - 目に優しく、近未来的な印象を与えるダークテーマ

2. **グラスモーフィズム効果**
   - 半透明のガラス風デザイン（backdrop-blur-sm）
   - 重なり合う要素に奥行きを持たせる効果

3. **グラデーションとグロー効果**
   - テキストやボタンに適用されたグラデーション
   - ホバー時のグロー効果で視覚的なフィードバック

4. **幾何学的な背景要素**
   - ぼかした円形のグラデーションで空間に深みを追加
   - 動きを感じさせる視覚効果

5. **洗練されたアニメーション**
   - ホバー時のスケール変化
   - 微妙な浮き上がり効果（translate）

6. **シャープな角と境界線**
   - 角丸の調整（border-radius）
   - 微妙な境界線（border）で要素を区切る

7. **ネオンのようなアクセント**
   - インディゴとパープルのグラデーションでアクセント
   - 光を放つようなシャドウ効果

UIの配置は維持しながら、視覚的な要素を強化することで、より魅力的で近未来的なデザインに仕上げました。