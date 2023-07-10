<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
    components: { Navbar }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}

body {
  background: radial-gradient(circle,rgb(0, 0, 0) 1%, rgb(78, 3, 10) 51%,rgba(0,0,0,1) 100%);
}

</style>
