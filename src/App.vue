<template>
  <div id="app">
    <app-header></app-header>
    <div class="app__content">
      <router-view :user="user" :markers="markers"></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: { AppFooter, AppHeader },
  data () {
    return {
      user: {
        firstName: 'Bender',
        lastName: 'Rodriguez',
        email: 'kenny@boomersstudio.com',
        address: '442 Allen Rd NE',
        address2: 'Apt B',
        city: 'Atlanta',
        state: 'GA',
        lat: 33.748954,
        lng: -84.388133
      },
      markers: []
    }
  }
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

input {
  font-size: 14px;
}

button, .button {
  padding: 3px 15px;
  margin: 5px 0;
  max-height: 25px;
  color: white;
  border: 0;
  background: #42b983;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
}

.flex-column-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;

  .button, button {
    margin-bottom: 10px;
    max-width: 200px;
  }
}


.team-events {
  li {
    display: flex;
    border: 1px solid #d9d9d9;
    border-top: 0;
    cursor: default;
    padding: 7px 10px;
    margin: 0;

    &:first-child {
      border-top: 1px solid #d9d9d9;
    }
  }
}

.blitz-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.blitz-section--centered {
  justify-content: center;
}

.blitz-section--hide {
  display: none;
}
</style>
