<template>

<form action="" @submit.prevent="registerUser">
    <div class="select-photo">
       <button type="submit" class="btn btn-primary">Select photo</button>  
    </div>
        <div class="profile"> 
        <div class=" ">
            
                
            <div class="row align-items-start center "> 
                <div class="formg-group  mt ml">
                        <label  for="first-name"></label>
                        <input  type="first-name" 
                                class="form-control" 
                                id="first-name"  
                                placeholder="First name" 
                                required  
                                v-model="user.firstName">
                </div>
                <div class="formg-group  mt">
                        <label  for="country"></label>
                        <input  type="country" 
                                class="form-control" 
                                id="country" 
                                placeholder="country "
                                required 
                                v-model="user.country">
                </div>
                <div class="formg-group mt">
                        <label  for="poste-code"></label>
                        <input  type="poste-code"   
                                class="form-control" 
                                id="poste-code"  
                                placeholder="Poste code" 
                                required 
                                v-model="user.posteCode">
                </div>
            </div>   
        </div>
        <div class=" ">
            <div class="row align-items-start"> 
                <div class="formg-group ml">
                        <label  for="last-name"></label>
                        <input  type="last-name" 
                                class="form-control" 
                                id="last-name" 
                                placeholder="Last name "
                                required 
                                v-model="user.lastName">
                </div>
                <div class="formg-group ">
                        <label  for="city"></label>
                        <input  type="city" 
                                class="form-control"
                                id="city" 
                                placeholder="City " 
                                required 
                                v-model="user.city">
                                 
   
                </div>
            </div>   
        </div>
         <div class="">
            <div class="row align-items-start"> 
                <div class="formg-group ml">
                        <label  for="phone-number"></label>
                        <input  type="tel" 
                                class="form-control" 
                                id="phone-number"  
                                placeholder="Phone number" 
                                required 
                                v-model="user.phoneNumber">
                </div>
                <div class="formg-group ">
                        <label  for="address"></label>
                        <input  type="address" 
                                class="form-control" 
                                id="address" 
                                placeholder="Address " 
                                required 
                                v-model="user.address">
                </div>
                
                    <div class="formg-group ">
                        <label  for="address"></label>
                        <button type="submit" class="btn btn-primary "> Save</button>
                
                </div>
                
            </div>   
        </div>
      </div>   
           
</form>
</template>

<script>
export default {
    name: 'sing-up',
    data(){
        return{
            user:{
                firstName:'',
                country:'',
                posteCode:'',
                lastName:'',
                city:'',
                phoneNumber:'',
                address:''
            },
            error: false
        }
    },
    methods:{
        registerUser() {
            if(this.user.password !== this.user.confirmPassword ||  this.user.password.length < 6 ) {
                this.error = true;
            } 
            else{
                firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
                    .then( () => {
                        this.$emit('regSuccess', 'sign-in');
                    })
                    .catch( error => {
                        console.log(error);
                    })
            }
        }
    }
}
</script>
<style lang="">


    .profile{
        height: 414px;
        width: 1550px;
        margin-left: -129px;
        background: white;
        margin-top: 156px;
    }
    button{
        float: right;
        width: 95px;
        
    }

    .formg-group{
        margin-left: 35px;
    }
    .mt{
        margin-left: 200px;
        margin-top: 20px;
    }
    .ml{
        
    }
 .form-control{
     width: 320px;
 }

</style>
