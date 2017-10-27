<template>
  <div id="app">
    <app-header></app-header>
    <div class="app__content">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: { AppFooter, AppHeader }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .app__content {
    margin-top: 36px;
  }
}

body {
  margin: 0;
  padding: 0;
}

a, a:hover, a:visited {
  text-decoration: none;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

section {
  padding: 7px 10px;
}
</style>
