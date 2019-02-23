<template>
  <div class="sidebar">
    <div class="sidebar-item">
      <router-link to="/">
        <font-awesome-icon icon="home" />
      </router-link>
    </div>
    <div class="sidebar-item">
      <router-link to="/page1">
        <font-awesome-icon icon="user" />
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar"
  }
</script>

<style scoped>
  .sidebar {
    width: 110px;
    height: 100%;
    position: fixed;
    background: white;
  }
</style>
