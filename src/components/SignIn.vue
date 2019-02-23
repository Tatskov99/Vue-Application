<template>
  <form  @submit.prevent="enterUser" class="form">
    <p>HOME</p>
    <div id="coin">
      <ul class="cripta">
        <li>
          {{ message }}
        </li>
      </ul>
     </div>
  </form>
  
</template>
<script>

</script>
<style lang="">

    .form{
        
        margin-top: -425px;
    }
    .cripta{
      margin-left: -105px;
      margin-top: 20px;
      background: white;
      width: 700px;
      height: 44px;
    }
    p{
      
      font-size: 15px;
      margin-left: 20px;
      color: white;
    }
</style>