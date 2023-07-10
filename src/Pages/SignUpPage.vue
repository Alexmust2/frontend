<template>
    <div class="main__container">
      <form @submit.prevent class="form__container">
        <h1>Регистрация</h1>
        <div class="email__input">
          <label for="email">Почта</label>
          <input placeholder="example@gmail.com" type="email" name="email" v-model="email">
        </div>
        <div class="password__input">
          <label for="pass">Пароль</label>
          <input placeholder="Password" type="password" name="pass" class="password" v-model="password">
          <h3 @click="showpass()">Показать пароль</h3>
        </div>
        <router-link class="signup__router-link" to="#" @click="createAccount()">Создать аккаунт</router-link> 
        <div class="auth">
          <h5 class="create__account-button">У вас уже есть аккаунт?</h5>
          <router-link class="signin__router-link" to="/signin" >Войти</router-link>
        </div>
      </form>
    </div>
  </template>
  <script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
  
export default {
  data(){
    return{
      password: '',
      email: '',
    }
  },
  methods: {
    showpass() {
      const pass = document.querySelector('.password')
      if(pass.getAttribute('type') === 'password'){
        pass.setAttribute('type', 'text')
      } else {
        pass.setAttribute('type', 'password')
      }
    },
    createAccount() {
      if (this.email != '' && this.password != ''){
         createUserWithEmailAndPassword(getAuth(), this.email, this.password)
         .then((data) => {
          console.log("Successfuly registered")
          this.$router.push('/forums')
         }).catch((error) => {
          console.log(error.code);
          alert(error.message)
         })
      } else {
        alert('error')
      }
    }
  }
}
  </script>

  <style lang="scss">
  .signup__router-link {
    width: 250px;
    height: 50px;
    font-weight: 700;
    font-size: 28px;
    border-radius: 28px;
    color: white;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .auth {
  display: flex;
  align-items: center;
  .signin__router-link {
    font-size: 18px;
    color: rgb(7, 95, 211);
    width: 70px;
    cursor: pointer;
    text-decoration: none;
  }
  .signin__router-link:hover {
    text-decoration: underline 1px solid rgb(7, 95, 211);
  }
}
  </style>