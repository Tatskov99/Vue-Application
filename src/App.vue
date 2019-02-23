<template>
  <div>
        <div class="container-fluid ">
          <div class="row">
            
            <div class=" market">
              <nav class="navbar">
                <form class="form-inline ">
                  <div  v-if="!signComplete">
                    <img class="homee" src="./img/home.png" alt=""  type="button" @click="switchSign('sign-in')"><br>
                    <img class="list" src="./img/list.png" alt="" type="button" @click="switchMainPage('MainPage')"><br>
                    <img  class="avatar" src="./img/avatar.png" alt="" type="button"  @click="switchSign('sign-up')">
                    <!-- <button class="btn btn-outline-success mr-3" type="button" @click="switchSign('sign-in')"> Войти</button>
                    <button class="btn btn-outline-success" type="button"  @click="switchSign('sign-up')">Регистрация</button> -->
                  </div>
                </form>
              </nav>
              
            </div>
          <div class="cions">
              <img class="logotip" src="/img.png" alt="">
              
              <p  class="CoinMarketCap mt-46">CoinMarketCap</p>
          </div> 
          </div>
        </div>
        <div class="container" v-if="!isMainPage">
          <div class="row">
            <div class="col-md-11"> 
              <sign-in v-if="sign === 'sign-in'" @addUser="isMainPage = $event.mainPage, signComplete = $event.complete, email = $event.email, uid = $event.uid"> </sign-in>
              <sign-up v-else @regSuccess=" sign = $event "></sign-up>
            </div>
          </div>
        </div>
        <div class="container" v-else>
          <div class="row">
            <div class="col">
              <main-page :uid="uid"></main-page>
            </div>
          </div>
        </div>
  </div> 
</template>

<script>
import  SignIn  from './components/SignIn.vue'
import  SignUp  from './components/SignUp.vue'
import  MainPage  from './components/MainPage.vue'
export default {
  name: 'app',
  data () {
    return {
      sign: 'sign-in',
      isMainPage: false,
      

    }
  },
  
  components: {
    SignIn,
    SignUp
  },
  methods: {
    switchSign(currentSign) {
    this.sign = currentSign;

    }
  }
}

 

</script>

<style lang="scss">
body{
  background: #F5F8FD;
}
.market{
  width: 110px;
  height: 1080px;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.5); /* Параметры тени */
 
}
.cions{
  margin-left: 1px;
  margin-top: -1080px;
  width: 1926px;
  height: 110px;
  background: white;
  display: block;
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

.cions img{
  margin-left: 152px;
  margin-top: 30px;
  width: 50px;
  height: 50px;
}
.CoinMarketCap{
  margin-top: -57px;
  color: black;
  margin-left: 227px;
  font-size: 40px;
}
 
</style>
