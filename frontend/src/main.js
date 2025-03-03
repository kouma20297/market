import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "./assets/tailwind.css";
import { BootstrapVue3 } from 'bootstrap-vue-3';
// すべてのLucideアイコンをインポート
import * as LucideIcons from 'lucide-vue-next';

const app = createApp(App);

app.use(BootstrapVue3);
app.use(router);

// Lucideのすべてのアイコンをグローバルコンポーネントとして登録
for (const [key, component] of Object.entries(LucideIcons)) {
    app.component(key, component);
}


app.mount('#app');