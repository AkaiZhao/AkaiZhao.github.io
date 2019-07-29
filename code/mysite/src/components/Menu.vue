<template>
  <div class="menu" :class="{ 'menu-show': isMenuOpen }">
    <ul class="menu-list">
      <li class="menu-list-tag">
        <router-link to="/">首頁</router-link>
        <span>Home</span>
      </li>
      <li class="menu-list-tag">
        <router-link to="/work">作品</router-link>
        <span>Works</span>
      </li>
      <li class="menu-list-btn">
        <a href="#" @click.prevent="closeMenu"></a>
      </li>
    </ul>
    <div class="menu-info">
      <h2>Connect me</h2>
      <p>
        <span>PHONE</span>
        <span>
          <a href="tel:+886-975059440">0975059440</a>
        </span>
      </p>
      <p>
        <span>MAIL</span>
        <span>
          <a href="mailto:kevin910171@gmil.com">kevin910171@gmil.com</a>
        </span>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: { isMenuOpen: Boolean },
  methods: {
    closeMenu() {
      this.$emit("menuClose", false);
    }
  }
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Anton");

.menu {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(100%);
  transition: 0.6s;
  background-color: #000;
  &-show {
    transform: translateY(0);
    li {
      width: 100%;
      @for $i from 1 to 8 {
        &:nth-child(#{$i}) {
          animation: slideUp 0.5s both;
          animation-delay: 0.8s + $i * 0.3;
          @keyframes slideUp {
            to {
              transform: translateY(10px);
            }
          }
        }
      }
    }
  }
  &-list {
    padding: 0;
    max-width: 800px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    list-style: none;
    box-sizing: border-box;
    &-tag {
      width: 400px;
      position: relative;
      margin-bottom: 50px;

      a {
        text-align: left;
        font-weight: bold;
        word-wrap: none;
        font-size: 60px;
        color: #ddd;
        position: relative;
        &:hover {
          &::before {
            right: initial;
            width: 100%;
            background: #ddd;
          }
        }
        &::before {
          content: "";
          z-index: -1;
          transition: 0.8s;
          position: absolute;
          bottom: 0;
          display: block;
          width: 0%;
          right: 0;
          height: 10px;
          background: #eee;
        }
      }

      span {
        font-family: "Anton", sans-serif;
        word-wrap: none;
        color: #eee;
        font-size: 60px;
        color: #ddd;
        position: absolute;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    }
    &-btn {
      height: 100px;
      border-bottom: none;
      a {
        text-align: left;
        padding: 0;
        width: 100px;
        height: 100%;
        position: relative;
        &::before,
        &::after {
          transition: 0.3s;
          content: "";
          position: absolute;
          top: 40px;
          left: 10px;
          width: 60px;
          height: 6px;
          background-color: #ddd;
        }
        &::before {
          transform: translateY(10px) rotate(0deg);
        }
        &::after {
          transform: translateY(-10px) rotate(0deg);
        }
        &:hover {
          &::before {
            transform: rotate(-225deg);
          }
          &::after {
            transform: rotate(225deg);
          }
        }
      }
    }
  }
  &-info {
    position: fixed;
    bottom: 20px;
    right: 30px;
    text-align: right;
    font-size: 24px;
    color: #fff;
    p {
      margin-top: 10px;
    }
    a {
      transition: color 0.2s;
      color: #198cd1;
      &:hover {
        color: rgb(226, 186, 101);
      }
    }
  }
  .router-link-exact-active {
    color: #198cd1;
    &:hover {
      &::before {
        width: 100%;
        background: #198cd1;
      }
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      display: block;
      width: 0%;
      height: 10px;
      background: #198cd1;
    }
    & ~ span {
      color: #198cd1;
    }
  }
}

@media (max-width: 575.98px) {
  .menu {
    opacity: 1;
    ul {
      width: 100%;
      margin-left: 0px;
      margin-top: 150px;
      padding: 0 50px;
      box-sizing: border-box;
      li {
        &:last-child {
          height: 45px;
          border-bottom: none;
          a {
            padding: 0;
            width: 45px;
            height: 100%;
            position: relative;
            &::before,
            &::after {
              transition: 0.3s;
              content: "";
              position: absolute;
              top: 20px;
              left: 0px;
              width: 30px;
              height: 3px;
              background-color: #ddd;
            }
            &::before {
              transform: rotate(-225deg);
            }
            &::after {
              transform: rotate(225deg);
            }
          }
        }
      }
      a,
      span {
        font-size: 30px;
      }
    }
  }
}
</style>
