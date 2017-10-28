<template>
  <section class="hello">
    <h1>{{ msg }}</h1>
    <div class="hello__user">
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
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Blitz App',
      user: {
        firstName: 'Bender',
        lastName: 'Rodriguez'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello__user {
  margin-bottom: 10px;
}
</style>
