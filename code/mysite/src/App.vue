<template>
  <div id="app">
    <nav class="nav" :class="{ 'nav-light': isScroll }">
      <div class="container flex flex-jcsb">
        <router-link class="nav-head" to="/">Akai Zhao</router-link>
        <a
          class="nav-toggle"
          :class="{ 'nav-toggle-show': isMenuOpen }"
          href="#"
          @click.prevent="menuSwitch"
        ></a>
      </div>
    </nav>
    <transition name="slide">
      <router-view />
    </transition>
    <footer class="footer">
      <div class="container flex flex-fe">
        <div class="footer-info">
          <h4>Akai Zhao</h4>
          <h5>Web Front End Enginer</h5>
          <p>0975-059-440 | PHONE</p>
          <p>KEVIN910171@gmail.com | MAIL</p>
        </div>
      </div>
    </footer>
    <menu-view :isMenuOpen="isMenuOpen" @menuClose="menuSwitch" />
    <background-decoration :text="title" />
    <!-- <NavList :isNavgationOpen="isNavgationOpen" @isNavgationOpenChanged="onIsNavgationOpenChanged" /> -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import BackgroundDecoration from "@/components/BackgroundDecoration.vue";
import MenuView from "@/components/Menu.vue";

@Component({
  components: {
    BackgroundDecoration,
    MenuView
  }
})
export default class App extends Vue {
  isMenuOpen: boolean = false;
  isScroll: boolean = false;
  title: string | undefined = "";

  mounted() {
    document.addEventListener("scroll", this.menuStyleController);
    this.title = this.$route.name;
  }
  menuSwitch(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.title = this.title == "MENU" ? this.$route.name : "MENU";
  }
  menuStyleController(e: any): void {
    if (window.outerWidth > 400) {
      if (window.scrollY > 100) this.isScroll = true;
      else this.isScroll = false;
    } else {
      if (window.scrollY > 0) this.isScroll = true;
      else this.isScroll = false;
    }
  }

  @Watch("$route")
  onRouteChange() {
    this.isMenuOpen = false;
    this.title = this.$route.name;
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
}
</script>

<style lang="scss">
@import "~@/style/reset.css";
@import "~@/style/common.scss";
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap");
#app {
  font-family: "Noto Sans TC", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  padding: 10px 20px;
  padding-top: 40px;
  transition: 0.5s;
  border-bottom: 0px solid rgb(80, 80, 80);
  &-light {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #111;
    border-bottom: 1px solid rgb(80, 80, 80);
  }
  &-head {
    color: #fff;
    padding: 10px;
    font-weight: bold;
    font-size: 24px;
  }
  &-toggle {
    position: relative;
    z-index: 10;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #fff;
    display: flex;
    &::before,
    &::after {
      content: "";
      position: absolute;
      right: 10px;
      height: 2px;
      background-color: #fff;
      margin: auto;
      transition: 0.3s;
    }
    &::before {
      width: 20px;
      top: 15px;
    }
    &::after {
      bottom: 15px;
      width: 15px;
    }
    &-show {
      &::before {
        height: 3px;
        width: 10px;
        transform: rotate(-45deg);
        right: 23px;
        top: 18px;
      }
      &::after {
        height: 3px;
        width: 25px;
        left: 8px;
        bottom: 15px;
      }
    }
  }
}

.footer {
  padding: 30px 0;
  padding-bottom: 50px;
  background-color: #111;
  box-sizing: border-box;
  z-index: 2;
  &-info {
    text-align: right;
    color: #eee;
    h4 {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    h5 {
      font-weight: bold;

      font-size: 12px;
      color: rgb(127, 158, 214);
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 8px;
      font-size: 17px;
      letter-spacing: 2px;
    }
  }
}
</style>
