<template>
  <footer class="blitz-footer">
    <ul>
      <li>
        <router-link to="/teams">
          <div>
            <i class="fa fa-flag" aria-hidden="true">&nbsp;Teams</i>
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
        <router-link to="/profile">
          <div>
            <i class="fa fa-user" aria-hidden="true">&nbsp;Profile</i>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <div>
            <i class="fa fa-gears" aria-hidden="true">&nbsp;Settings</i>
          </div>
        </router-link>
      </li>
    </ul>
  </footer>
</template>
<script>
export default {
  name: 'app-footer'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.blitz-footer{
  ul {
    border: 1px solid #d9d9d9;
    padding: 0;
    margin: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    li {
      padding: 7px 10px;
      margin: 0;
    }
  }

  i {
    display: flex;
    flex-direction: column;
  }

  a {
    color: #2c3e50;

    &.router-link-active {
      color: #42b983;
    }
  }
}
</style>
