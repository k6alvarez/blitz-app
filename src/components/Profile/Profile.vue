<template>
  <section>
    <h1>My Profile</h1>
    <div>User: {{ user.firstName}} {{ user.lastName}}</div>
    <div>Email: {{ user.email }}</div>
    <div>Location: {{ user.city }}, {{ user.state }}</div>
    <blitz-map v-bind:user="user" v-bind:lat="user.lat" v-bind:lng="user.lng" v-bind:hideCreateOptions="true" v-bind:markers="markers"></blitz-map>
  </section>
</template>

<script>
import BlitzMap from '../BlitzMap/BlitzMap'

export default {
  name: 'profile',
  components: { BlitzMap },
  props: ['user', 'markers']
}
</script>
