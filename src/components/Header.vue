<template>
  <header>
    <img src="/img.png" alt="">
    <p class="title">CoinMarketCap</p>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss">
  header {
    width: 100%;
    height: 110px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: fixed;
    img {
      margin-left: 152px;
      margin-top: 30px;
      width: 50px;
      height: 50px;
    }
  }
  .title {
    margin-top: -57px;
    color: black;
    margin-left: 227px;
    font-size: 40px;
  }
</style>
