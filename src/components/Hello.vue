<template>
  <section class="hello">
    <h1>{{ msg }}</h1>
    <div class="blitz-spaced">
      <div>Logged in as {{ user.firstName }} {{ user.lastName }}</div>
    </div>
    <div class="flex-column-buttons">
      <router-link to="/teams" class="button">
        View My Teams
      </router-link>
      <router-link to="/blitz/create" class="button">
        Create New Watch Party
      </router-link>
    </div>
    <blitz-map v-bind:user="user" v-bind:lat="user.lat" v-bind:lng="user.lng" v-bind:hideCreateOptions="true" v-bind:markers="markers"></blitz-map>
  </section>
</template>

<script>
import BlitzMap from './BlitzMap/BlitzMap'

export default {
  name: 'hello',
  components: { BlitzMap },
  props: ['user', 'markers'],
  data () {
    return {
      msg: 'Welcome to Blitz App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.blitz-spaced {
  margin-bottom: 10px;
}
</style>
