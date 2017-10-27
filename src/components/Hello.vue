<template>
  <section class="hello">
    <h1>{{ msg }}</h1>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Blitz App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
