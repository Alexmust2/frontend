<template>
  <div class="main__container">
    <form @submit.prevent class="form__container">
      <h1>Вход</h1>
      <div class="email__input">
        <label for="email">Почта</label>
        <input placeholder="example@gmail.com" type="text" name="email" v-model="email" @keyup.enter="signIn">
      </div>
      <div class="password__input">
        <label for="pass">Пароль</label>
        <input placeholder="Password" type="password" name="pass" class="password" v-model="password" @keyup.enter="signIn">
        <h3 @click="showpass()">Показать пароль</h3>
      </div>
      <h3 v-if="errMsg"> {{ errMsg }}</h3>
      <router-link class="signin__router-link" to="#" @click="signIn()">Войти</router-link>
      <div class="auth">
        <h5 class="create__account-button">У вас еще нет аккаунта? </h5>
        <router-link class="signup__router-link" to="/signup">Создать аккаунт</router-link> 
      </div>
    </form>
  </div>
</template>
<script>
import GetUserInfo from '@/mixins/GetUserInfo';

export default {
  data(){
    return{
      password: '',
      email: '',
      errMsg: '',
    }
  },
  mixins: [GetUserInfo]
}
</script>
<style lang="scss" >
.main__container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.form__container {
  width: 600px;
  height: 550px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.21);
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  padding: 45px;
  h1{
    font-size: 36px;
    font-weight: 900;
    height: 0px;
    margin-bottom: 50px;
  }
  label{
    font-size: 24px;
    font-weight: 400;
    margin-left: 15px;
  }

  input {
    height: 55px;
    padding: 15px;
    border-radius: 50px;
    border: 1px solid black;
  }
  .email__input{
    display: flex;
    flex-direction: column;
    width: 480px;
  }
  .password__input{
    display: flex;
    flex-direction: column;
    width: 480px;
    h3 {
      width: 170px;
      margin-top: 25px;
      margin-left: 15px;
    }
  }
  .signin__router-link {
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
}

.auth {
  display: flex;
  align-items: center;
  .signup__router-link {
    font-size: 18px;
    width: 170px;
    color: rgb(7, 95, 211);
    cursor: pointer;
    text-decoration: none;
  }
  .signup__router-link:hover {
    text-decoration: underline 1px solid rgb(7, 95, 211);
  }
}


</style>