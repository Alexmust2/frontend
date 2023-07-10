<template>
  <nav v-if="!$route.meta.hideNavbar">
    <div class="main__navigation">
        <router-link to="/" class="main">Главная</router-link>
        <router-link to="/profile" style="margin-left: 25px;"  class="profile">Профиль</router-link>
        <router-link to="/forums" style="margin-left: 25px;" class="forums">Форумы</router-link>
    </div>
    <div class="profile__nav">
      <img >
      <h2>{{ name }}</h2>
    </div>
  </nav>
</template>
<script>

export default {
  data() {
    return {
      name: ''
    }
  },
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
}
.main__navigation {
    margin-left: 125px;
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



</style>