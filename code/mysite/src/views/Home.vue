<template>
  <div class>
    <div class="bg bg-home"></div>

    <main class="main page page-home">
      <section class="container section section-home flex flex-aic flex-jcc">
        <div class="section-helf">
          <h1>
            你好，
            <br />歡迎光臨我的作品網站
          </h1>
        </div>
        <icon-frontend />
        <!-- <scrollDownIcon class="scorll_down" /> -->
      </section>
    </main>
    <section class="section section-home">
      <h1 class="section-title">MY SKILLS</h1>
      <div class="container">
        <ul class="card-group flex flex-jcsb flex-warp">
          <li class="card">
            <img src class="card-img" />
            <h4 class="card-title">JAVASCRIPT(ES5.6)</h4>
            <p class="card-text"></p>
          </li>
          <li class="card">
            <img src class="card-img" />
            <h4 class="card-title">CSS3</h4>
            <p class="card-text"></p>
          </li>
          <li class="card">
            <img src class="card-img" />
            <h4 class="card-title">HTML5</h4>
            <p class="card-text"></p>
          </li>
          <li class="card">
            <img src class="card-img" />
            <h4 class="card-title">VUE.JS</h4>
            <p class="card-text"></p>
          </li>
          <li class="card">
            <img src class="card-img" />
            <h4 class="card-title">SASS</h4>
            <p class="card-text"></p>
          </li>
          <li class="card">
            <img src class="card-img" />
            <h4 class="card-title">WEBPACK</h4>
            <p class="card-text"></p>
          </li>
          <li class="card">
            <img src class="card-img" />
            <h4 class="card-title">TYPESCRIPT</h4>
            <p class="card-text"></p>
          </li>
          <li class="card">
            <img src class="card-img" />
            <h4 class="card-title">GIT/SVN</h4>
            <p class="card-text"></p>
          </li>
        </ul>
      </div>
    </section>
    <section class="section section-home flex flex-aic flex-jcc">
      <h1 class="section-title">MY WORKS</h1>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IconFrontend from "@/components/icons/FrontEnd.vue";

@Component({
  components: {
    IconFrontend
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
.section {
  padding: 30px 0;
  box-sizing: border-box;
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 30px 10px;
  }
  &-helf {
    width: 0%;
    overflow: hidden;
    animation: h1-show-helf 1.5s 4s both;
    margin-left: 60px;
    @media (max-width: 500px) {
      animation: h1-show-full 1.5s 4s both;
      margin-left: 0;
      text-align: center;
    }
    h1 {
      text-align: left;
      width: 100%;
      color: #eee;
      font-size: 30px;
      line-height: 60px;
      white-space: nowrap;
      @media (max-width: 500px) {
        text-align: center;
      }
    }
  }
  &-title {
    color: #eee;
    font-size: 40px;
  }

  @keyframes h1-show-helf {
    to {
      width: 50%;
    }
  }
  @keyframes h1-show-full {
    to {
      width: 100%;
    }
  }
}
</style>
