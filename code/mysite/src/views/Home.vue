<template>
  <div class>
    <div class="bg bg-home"></div>

    <main class="main page-shadow page page-home">
      <section class="container section section-home flex flex-aic flex-jcc">
        <div class="section-helf">
          <h1>
            你好，
            <br />歡迎光臨我的作品網站
          </h1>
        </div>
        <icon-frontend />
      </section>
    </main>
    <section class="section section-blue">
      <h1 class="section-title">MY SKILLS</h1>
      <div class="container">
        <ul class="card-group flex flex-warp">
          <li class="card">
            <img class="card-img" src />
            <h4 class="card-title">Javascript/Typescript</h4>
            <p class="card-text">熟悉ES6語法設計，目前專案主要基於vue.js開發，能獨立開發遊戲平台。</p>
          </li>
          <li class="card">
            <img class="card-img" src />
            <h4 class="card-title">SASS/SCSS</h4>
            <p class="card-text">目前所有專案皆使用SCSS開發，在樣式設計上主要以功能作為區分的模組化設計。</p>
          </li>
          <li class="card">
            <img class="card-img" src />
            <h4 class="card-title">JS Frameworks</h4>
            <p class="card-text">較為熟練Vue，React及Angular較少接觸，目前經手的專案都已Vue為主。</p>
          </li>
          <li class="card">
            <img class="card-img" src />
            <h4 class="card-title">UI/UX</h4>
            <p class="card-text">過去曾設計公司的後台介面，主要偏向扁平化設計，在前端開發時會注意UX部分，希望能讓自己開發的產品有優良的使用體驗。</p>
          </li>
          <li class="card">
            <img class="card-img" src />
            <h4 class="card-title">PS/AI/XD</h4>
            <p class="card-text">會使用這些軟體，有網站版面及流程規劃經驗。</p>
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
  &-blue {
    background: #090f18;
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
