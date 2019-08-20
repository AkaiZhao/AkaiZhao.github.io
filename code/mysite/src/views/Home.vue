<template>
  <div class>
    <div class="bg bg-home"></div>

    <main class="main page-shadow page page-home">
      <section class="container section section-home flex flex-aic flex-jcc">
        <div class="section-helf">
          <h1>
            你好，
            <br />我是 AKAI 。
          </h1>
        </div>
        <icon-frontend />
      </section>
    </main>
    <section class="section section-blue">
      <h1 class="section-title">MY SKILLS</h1>
      <div class="container">
        <ul class="card-group flex flex-warp">
          <li class="card" v-for="skill in skillArr" :key="skill.title">
            <h4 class="card-title">{{skill.title}}</h4>
            <p class="card-text">{{skill.text}}</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <ul class="work-group">
          <li class="work work-head">
            My
            <br />woRKs
          </li>
          <li class="work" v-for="work in workArr" :key="work.title">
            <a :href="work.url" target="_blank">
              <img class="work-image" :src="require(`@/assets/works/${work.img}.jpg`)" />
              <div class="work-hover"></div>
              <h2 class="work-title">{{work.title}}</h2>
              <p class="work-text">{{work.text}}</p>
            </a>
          </li>
        </ul>
      </div>
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
export default class Home extends Vue {
  private skillArr: Array<{ title: string, text: string }> = [
    { title: 'JS / ES6 / TS', text: '熟悉ES6語法設計，目前正用空閒時間研究typescript，使用TS+vue開發遊戲平台。' },
    { title: 'VUE', text: '熟練Vue.js，router、vuex...等都十分了解，目前開發專案以Vue為主。' },
    { title: 'CSS / SCSS', text: '目前所有專案皆使用SCSS開發，在樣式設計上大部分從功能作為區分的模組化設計。' },
    { title: 'UI / UX', text: '過去曾設計公司的後台介面，主要偏向扁平化設計，在前端開發時會注意UX部分，希望能讓自己開發的產品有優良的使用體驗。' },
    { title: 'PS / AI / XD', text: '會使用設計軟體，有網站版面及流程規劃經驗。' },
  ];
  private workArr: Array<{ title: string, text: string, url?: string, img: string }> = [
    { title: 'TIC-TAC-TOE', text: '練習時，製作的井字遊戲。', url: 'https://akaizhao.github.io/work/tictactoe/', img: 'tic-tac-toe' }
  ];
  private linkTo(url: string) {
    window.location.href = url;
  }
}
</script>
<style lang="scss">
.section {
  padding: 50px 0;
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
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 80px;
  }
  &-blue {
    padding-bottom: 50px;
    background: #070a0f;
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
.work {
  width: 25%;
  box-sizing: border-box;
  margin: 0 20px;
  position: relative;
  overflow: hidden;
  &-group {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
  }
  &-head {
    padding-right: 40px;
    font-size: 60px;
    font-weight: bold;
    color: #eee;
    text-align: left;
    line-height: 70px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      right: 130px;
      top: 50px;
      border: 5px solid #fff;
      transition: 0.3s;
    }
    &:hover {
      &::before {
        right: 40px;
        border-left: 10px solid #fff;
        border-top: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }
    }
  }
  &-image {
    display: block;
    width: 100%;
  }
  &-title,
  &-text {
    position: absolute;
    color: #fff;
  }
  &-title {
    transition-duration: 0.3s;
    font-size: 22px;
    bottom: 10px;
    right: 10px;
    box-sizing: border-box;
  }
  &-text {
    color: #eee;
    right: 0;
    bottom: -30px;
    transition: 0.3s;
  }
  &-hover {
    transition: background-color 0.3s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:hover {
    .work {
      &-hover {
        background-image: none;
        background-color: rgba(#000, 0.9);
      }
      &-title {
        bottom: 150px;
      }
      &-text {
        bottom: 130px;
      }
    }
  }
}
</style>
