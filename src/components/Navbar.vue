<template>
  <nav v-if="!$route.meta.hideNavbar">
    <div class="main__navigation">
        <router-link to="/" class="main">Главная</router-link>
        <router-link to="/forums" style="margin-left: 25px;" class="forums">Форумы</router-link>
    </div>
    <div class="profile__nav" @click="show = !show">
      <img class="profile__img" :src="image">
      <h2 class="profile__name">{{ name }}</h2>
    </div>
    <profile-modal :show="show"></profile-modal>
  </nav>
</template>
<script>
import ProfileModal from "./UI/ProfileModal.vue";
import GetUserInfo from '../mixins/GetUserInfo'
import UserStatus from "@/mixins/UserStatus";

export default {
    data() {
        return {
            show: false
        };
    },
    components: { ProfileModal },
    mixins: [GetUserInfo, UserStatus]
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
    position: absolute;
    left: 125px;
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
  left: 80%;
  cursor: pointer;
  .profile__name {
    text-decoration: none;
    color: white;
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