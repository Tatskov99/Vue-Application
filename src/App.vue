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
body{
  background: #F5F8FD;
  .view {
    position: absolute;
    left: 110px;
    top: 110px;
    width: 100%;
  }
}
.market{
  width: 110px;
  height: 1080px;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.5); /* Параметры тени */

}
.homee{
  border: none;
  margin-top: 197px;
  width: 40px;
  height: 31,83px;
  margin-left: 25px;
}

.list{
  border: none;
  margin-top: 73px;
  width: 25,5px;
  height: 7,97px;
   margin-left: 30px;
}
.avatar{
  border: none;
  margin-top: 73px;
  width: 35px;
  height: 41,15px;
   margin-left: 30px;
}

</style>
