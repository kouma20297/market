import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Vue Router をインポート
import "./assets/tailwind.css"; 

// BootstrapVue3 をインポート
import { BootstrapVue3 } from 'bootstrap-vue-3';

// Bootstrap の CSS と BootstrapVue3 の CSS をインポート
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
// import './assets/css/styles.css';
// import './assets/js/scripts.js';


// Vue アプリケーションを作成し、BootstrapVue3 を使用
const app = createApp(App);

app.use(BootstrapVue3); // BootstrapVue3 を使用
app.use(router); // Vue Router を使用

app.mount('#app');
