// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Vue Router をインポート

const app = createApp(App);

app.use(router); // Vue Router を使用

app.mount('#app');