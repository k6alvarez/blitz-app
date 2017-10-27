<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter'

export default {
  name: 'app',
  components: { AppFooter }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a, a:hover, a:visited {
  text-decoration: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 0.6rem;
}
</style>
