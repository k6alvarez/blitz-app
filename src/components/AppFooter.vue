<template>
  <ul class="footer">
    <li>
      <router-link to="/events">
        <div>
          <i class="fa fa-flag" aria-hidden="true">&nbsp;Team</i>
        </div>
      </router-link>
    </li>
    <li>
      <router-link to="/events">
        <div>
          <i class="fa fa-calendar" aria-hidden="true">&nbsp;Events</i>
        </div>
      </router-link>
    </li>
    <li>
      <router-link to="/events">
        <div>
          <i class="fa fa-user" aria-hidden="true">&nbsp;Profile</i>
        </div>
      </router-link>
    </li>
    <li>
      <router-link to="/events">
        <div>
          <i class="fa fa-gears" aria-hidden="true">&nbsp;Settings</i>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'app-footer'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

i {
  display: flex;
  flex-direction: column;
}
</style>
