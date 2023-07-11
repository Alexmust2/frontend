<template>
  <nav v-if="!$route.meta.hideNavbar">
    <div class="main__navigation">
        <router-link to="/" class="main">Главная</router-link>
        <router-link to="/forums" style="margin-left: 25px;" class="forums">Форумы</router-link>
    </div>
    <div class="profile__nav" @click="show = !show">
      <img class="profile__img">
      <h2 class="profile__name">{{ name }}</h2>
    </div>
    <profile-modal :show="show"></profile-modal>
  </nav>
</template>
<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import ProfileModal from "./UI/ProfileModal.vue";

export default {
  components:{
    ProfileModal
  },
    data() {
        return {
            name: "",
            show: true
        };
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                user.displayName = user.email.split("@")[0];
                this.name = user.displayName;
                // ...
            }
            else {
            }
        });
    },
    methods: {
        logout() {
            const auth = getAuth();
            signOut(auth).then(() => {
                console.log("loggedout");
                this.$router.push("/");
            });
        },
    },
    components: { ProfileModal }
}
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

nav {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  font-weight: 700;
  position: absolute;
}
.main__navigation {
    margin-left: 125px;
    position: absolute;
    .main {
        text-decoration: none;
        color: white;
    }
    .profile {
        text-decoration: none;
        color: white;
    }
    .forums {
        text-decoration: none;
        color: white;
    }
}

.profile__nav {
  display: flex;
  align-items: center;
  position: absolute;
  left: 1525px;
  cursor: pointer;
  .profile__name {
    text-decoration: none;
    color: white;
    margin-right: 125px;
    font-size: 16px;
  }
  .profile__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: gray;
    margin-right: 15px;
    border: none;
  }
}



</style>