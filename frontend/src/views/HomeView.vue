<template>
  <div class="home">
    <Header /> <!-- ここでHeaderコンポーネントを読み込む -->
    <h1>Welcome to My App!</h1>
    <p>This is the top page.</p>
  </div>
</template>

<script>
import Header from '../components/ui/Header.vue';

export default {
  name: 'HomeView',
  components: {
    Header, // Headerをコンポーネントとして登録
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
