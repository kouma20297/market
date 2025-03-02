<template>
  <div>
    <router-view />
  </div>
</template>
<script>
import Header from './components/ui/Header.vue'
export default {
  name: 'App',
  components: {
    Header,
  },
}

</script>
