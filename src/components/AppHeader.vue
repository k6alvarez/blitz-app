<template>
  <header class="header">
    <div class="header__wrap">
      <router-link to="/">
        <i class="fa fa-bolt" aria-hidden="true"/>
        Blitz App
      </router-link>
      <router-link to="/">
        <i class="fa fa-globe" aria-hidden="true"></i>
      </router-link>
    </div>
  </header>
  <!-- <img src="../assets/logo.png"> -->
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #d9d9d9;
  position: fixed;
  top: 0;
  width: 100%;

  .header__wrap {
    padding: 7px 10px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
