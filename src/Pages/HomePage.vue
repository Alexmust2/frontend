<template>
    <div class="container">
        <h1>Добро Пожаловать </h1>
        <h3>Данный форум предназначен для обсуждения и обмена информацией между пользователями</h3>
        <div class="auth" v-if="isNotAuth">
            <router-link to="/signin" class="signin">Вход</router-link>
            <router-link to="/signup" class="signup">Регистрация</router-link>
        </div>
        <router-link v-if="isAuth" class="forum__link" to="/forums">Форум</router-link>
    </div>
</template>
<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
    data() {
        return {
            isAuth: false,
            isNotAuth: true,
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.isAuth = true
                this.isNotAuth = false
            }
            else {
                this.isAuth = false
                this.isNotAuth = true
            }
        });
    }
}
</script>
<style scoped lang="scss">
@import url('https://fonts.cdnfonts.com/css/baron-neue');

.container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1 {
    color: rgb(255, 255, 255);
    width: 70%;
    text-align: center;
    font-size: 100px;
    font-family: 'Baron Neue Bold', sans-serif;
}

h3{
    color: rgb(255, 255, 255);
    width: 70%;
    text-align: center;
    font-size: 18px;
    margin-top: 15px;
}

.auth {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 50px;
    font-weight: 700;
    .signin {
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        width: 150px;
        height: 50px;
        background: rgb(73, 2, 2);
        border-radius: 50px;
        justify-content: center;
    }
    .signup {
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        width: 150px;
        height: 50px;
        background: rgb(73, 2, 2);
        border-radius: 50px;
        justify-content: center;
        margin-left: 50px;
    }
}

.forum__link {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    width: 150px;
    height: 50px;
    background: rgb(73, 2, 2);
    border-radius: 50px;
    justify-content: center;
    margin-top: 25px;    
}

</style>