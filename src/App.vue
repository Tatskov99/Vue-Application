<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <Header/>
        <Sidebar/>
        <div class="view">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Sidebar from './components/Sidebar';

  export default {
    name: 'app',
    components: {
      Header,
      Sidebar
    },
  }
</script>

<style lang="scss">
body {
  background: #F5F8FD;
  .view {
    position: absolute;
    padding-left: 110px;
    top: 110px;
    width: 100%;
  }
}
</style>
