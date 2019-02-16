<template>
  <div id="app">
    <div class="bg"></div>
    <nav id="nav">
      <div class="container">
        <router-link class="logo" to="/">2019Spring - Portfolio</router-link>
        <NavList />
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import NavList from "@/components/NavList.vue";
export default {
  components: {
    NavList
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #222;
  color: #fff;
}
.bg {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(0.5);
}
.container {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  display: inline-block;
  text-decoration: none;
}
.router-link-exact-active {
  color: #fff;
}
nav {
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  padding: 10px 20px;
  padding-top: 40px;
  .logo {
    color: #fff;
    padding: 10px;
    font-weight: bold;
  }
  a {
    padding: 10px;
    color: #fff;
  }
  .logo {
    font-size: 26px;
  }
}
</style>
