<script setup>
import { RouterLink } from "vue-router";
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  transparent: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
});

// ウィンドウ幅に基づいて type (desktop/mobile) を決定
const getWindowWidth = () => window.innerWidth;
const windowWidth = ref(getWindowWidth());
const type = ref(windowWidth.value > 768 ? "desktop" : "mobile");

const updateWindowWidth = () => {
  windowWidth.value = getWindowWidth();
  type.value = windowWidth.value > 768 ? "desktop" : "mobile";
};

onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

// テキストカラーの取得
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }
  return color;
};

// textDark の値を type に基づいて更新
let textDark = ref(props.darkText);

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = type.value === "desktop" ? props.darkText : true;
    }
  }
);
</script>

<template>
  <header
    :class="{
      'bg-transparent': props.transparent,
      'bg-white': props.light,
      'bg-dark': props.dark,
      'sticky top-0': props.sticky,
    }"
  >
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" :class="getTextColor()" :to="{ path: '/' }">
              Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :class="getTextColor()" :to="{ name: 'about' }">
              About
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :class="getTextColor()" :to="{ name: 'contactus' }">
              Contact
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  /* background-color: #333;  propsで制御するため削除 */
  color: white; /* propsで制御するため基本色は削除 */
  padding: 10px;
}

nav ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0; /* デフォルトのパディングをリセット */
  margin: 0; /* デフォルトのマージンをリセット */
}

nav a {
  /* color: white;  propsで制御するため削除 */
  text-decoration: none;
  padding: 0.5rem 1rem; /* リンクにパディングを追加 */
  display: inline-block; /* パディングが正しく適用されるように */
}

/* 必要に応じて、ホバー時やアクティブ時のスタイルを追加 */
nav a:hover,
nav a:focus {
  background-color: rgba(255, 255, 255, 0.1); /* わずかに背景色を変更 */
}

/*stickyの時のスタイル*/
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 他の要素より前面に */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 影をつけて浮いているように */
}

/*ダークモードのスタイル*/
.bg-dark {
  background-color: #333;
}

/* Transparent */
.bg-transparent {
    background-color: transparent !important; /* !important to override inline styles if needed */
}

/* Light */
.bg-white {
  background-color: #fff;
}
</style>