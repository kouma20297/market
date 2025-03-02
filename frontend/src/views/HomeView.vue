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
              <a href="#" class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                ホーム
              </a>
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

      <!-- モバイルメニュー -->
      <div v-if="mobileMenuOpen" class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <a href="#" class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            ホーム
          </a>
          <router-link 
            to="/works-and-ideas" 
            class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              製品
          </router-link>
          <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            料金プラン
          </a>
          <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            サポート
          </a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">山田太郎</div>
              <div class="text-sm font-medium text-gray-500">yamada@example.com</div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- ヒーローセクション -->
    <div class="pt-16">
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">あなたのWebアプリを</span>
                  <span class="block text-indigo-600 xl:inline">世界へ届けよう</span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  AppMarketは、開発者がWebアプリケーションを簡単に販売できるプラットフォームです。あなたの素晴らしいアイデアを収益化し、世界中のユーザーに届けましょう。
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      無料で始める
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
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

    <!-- 特徴セクション -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">特徴</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            アプリ販売をもっと簡単に
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            AppMarketは、制作物・アイデアを販売するためのプラットフォームです。
          </p>
        </div>

        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <credit-card-icon class="h-6 w-6" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">さまざまな決済システム</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                複数の決済方法があり、金銭だけじゃなく企業からのスカウト、プロジェクト支援なども可能です。
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <users-icon class="h-6 w-6" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">ユーザー管理</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                ユーザーの登録、認証、権限管理などを簡単に行えるシステムを提供します。
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <bar-chart-icon class="h-6 w-6" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">詳細な分析</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                ユーザーの行動などを可視化し、ビジネスの成長をサポートします。
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <shield-icon class="h-6 w-6" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">セキュリティ</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                最新のセキュリティ技術を採用し、ユーザーデータと決済情報を安全に保護します。
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- 料金プラン -->
    <div class="bg-gray-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">料金プラン</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            あなたのビジネスに合わせたプラン
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            スタートアップから大企業まで、あらゆる規模のビジネスに対応したプランをご用意しています。
          </p>
        </div>

        <div class="mt-10 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div class="px-6 py-8">
              <h3 class="text-lg leading-6 font-medium text-gray-900">スタータープラン</h3>
              <p class="mt-4 text-3xl font-extrabold text-gray-900">¥5,000<span class="text-base font-medium text-gray-500">/月</span></p>
              <p class="mt-4 text-sm text-gray-500">個人開発者や小規模チームに最適なプランです。</p>
            </div>
            <div class="px-6 py-8">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <check-icon class="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span class="ml-3 text-sm text-gray-500">月間10,000ユーザーまで</span>
                </li>
                <li class="flex items-start">
                  <check-icon class="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span class="ml-3 text-sm text-gray-500">基本的な分析機能</span>
                </li>
                <li class="flex items-start">
                  <check-icon class="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span class="ml-3 text-sm text-gray-500">メールサポート</span>
                </li>
              </ul>
              <div class="mt-8">
                <a href="#" class="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">今すぐ始める</a>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 border-2 border-indigo-500">
            <div class="px-6 py-8">
              <h3 class="text-lg leading-6 font-medium text-gray-900">プロフェッショナルプラン</h3>
              <p class="mt-4 text-3xl font-extrabold text-gray-900">¥15,000<span class="text-base font-medium text-gray-500">/月</span></p>
              <p class="mt-4 text-sm text-gray-500">成長中のビジネスに必要な全ての機能を提供します。</p>
            </div>
            <div class="px-6 py-8">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <check-icon class="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span class="ml-3 text-sm text-gray-500">月間50,000ユーザーまで</span>
                </li>
                <li class="flex items-start">
                  <check-icon class="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span class="ml-3 text-sm text-gray-500">高度な分析機能</span>
                </li>
                <li class="flex items-start">
                  <check-icon class="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span class="ml-3 text-sm text-gray-500">優先サポート</span>
                </li>
                <li class="flex items-start">
                  <check-icon class="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span class="ml-3 text-sm text-gray-500">カスタムドメイン</span>
                </li>
              </ul>
              <div class="mt-8">
                <a href="#" class="block w-full bg-indigo-600 border border-indigo-600 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-700">今すぐ始める</a>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div class="px-6 py-8">
              <h3 class="text-lg leading-6 font-medium text-gray-900">エンタープライズプラン</h3>
              <p class="mt-4 text-3xl font-extrabold text-gray-900">要問合せ</p>
              <p class="mt-4 text-sm text-gray-500">大規模なビジネスに必要なカスタマイズと拡張性を提供します。</p>
            </div>
            <div class="px-6 py-8">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <check-icon class="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span class="ml-3 text-sm text-gray-500">無制限のユーザー</span>
                </li>
                <li class="flex items-start">
                  <check-icon class="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span class="ml-3 text-sm text-gray-500">エンタープライズレベルのセキュリティ</span>
                </li>
                <li class="flex items-start">
                  <check-icon class="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span class="ml-3 text-sm text-gray-500">24時間365日のサポート</span>
                </li>
                <li class="flex items-start">
                  <check-icon class="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span class="ml-3 text-sm text-gray-500">専任のアカウントマネージャー</span>
                </li>
              </ul>
              <div class="mt-8">
                <a href="#" class="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">お問い合わせ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- お客様の声 -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">お客様の声</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            成功事例
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            AppMarketを利用して成功を収めたお客様の声をご紹介します。
          </p>
        </div>

        <div class="mt-10">
          <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <img class="h-12 w-12 rounded-full" src="/placeholder.svg?height=48&width=48" alt="顧客の写真" />
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-bold text-gray-900">佐藤健太</h4>
                  <p class="text-sm text-gray-500">TechSolutions CEO</p>
                  <div class="mt-1 flex items-center">
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                  </div>
                  <p class="mt-3 text-base text-gray-500">
                    「AppMarketのおかげで、私たちのSaaSアプリケーションの売上が3倍になりました。決済システムの導入も簡単で、国際展開も思った以上にスムーズでした。」
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <img class="h-12 w-12 rounded-full" src="/placeholder.svg?height=48&width=48" alt="顧客の写真" />
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-bold text-gray-900">田中美咲</h4>
                  <p class="text-sm text-gray-500">DesignPro 創業者</p>
                  <div class="mt-1 flex items-center">
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                    <star-icon class="h-5 w-5 text-yellow-400" />
                  </div>
                  <p class="mt-3 text-base text-gray-500">
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
    <div class="bg-indigo-700">
      <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <span class="block">あなたのWebアプリを世界へ</span>
          <span class="block">今すぐ始めましょう</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-indigo-200">
          14日間の無料トライアルで、AppMarketの全ての機能をお試しいただけます。クレジットカードは必要ありません。
        </p>
        <a href="#" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
          無料で始める
        </a>
      </div>
    </div>

    <!-- フッター -->
    <footer class="bg-gray-800">
      <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div class="px-5 py-2">
            <a href="#" class="text-base text-gray-300 hover:text-white">
              会社概要
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base text-gray-300 hover:text-white">
              ブログ
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base text-gray-300 hover:text-white">
              採用情報
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base text-gray-300 hover:text-white">
              プライバシーポリシー
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base text-gray-300 hover:text-white">
              利用規約
            </a>
          </div>
        </nav>
        <div class="mt-8 flex justify-center space-x-6">
          <a href="#" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Facebook</span>
            <facebook-icon class="h-6 w-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Instagram</span>
            <instagram-icon class="h-6 w-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Twitter</span>
            <twitter-icon class="h-6 w-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-300">
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
import { Home } from "lucide-vue-next";
import { ref } from 'vue';
import { 
  Bell as BellIcon, 
  Menu as MenuIcon, 
  X as XIcon, 
  CreditCard as CreditCardIcon,
  Users as UsersIcon,
  BarChart as BarChartIcon,
  Shield as ShieldIcon,
  Check as CheckIcon,
  Star as StarIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Github as GithubIcon
} from 'lucide-vue-next';

const mobileMenuOpen = ref(false);
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>