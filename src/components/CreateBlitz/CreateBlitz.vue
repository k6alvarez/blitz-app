<template>
  <section>
    <h1>Create New Watch Party</h1>
    <div class="blitz-section">
      <div>Choose Your Team</div>
      <div>Atlanta United</div>
    </div>
    <div class="blitz-section">
      <div>Enter Watch Party Message</div>
      <textarea></textarea>
    </div>
    <blitz-map v-bind:user="user" v-bind:lat="user.lat" v-bind:lng="user.lng" v-bind:hideLocationOptions="true" v-bind:markers="markers"></blitz-map>
  </section>
</template>

<script>
import BlitzMap from '../BlitzMap/BlitzMap'

export default {
  name: 'create-blitz',
  components: { BlitzMap },
  props: ['user', 'markers']
}
</script>

<style lang="scss">

</style>
