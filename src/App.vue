<template>
  <!-- <Layout /> -->
  <router-view></router-view>
</template>

<script>
import Login from './views/login'
import Layout from './layout/menu-page-layout'

export default {
  name: 'App',
  components: {
    Login,
    Layout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
