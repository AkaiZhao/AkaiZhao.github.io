<template>
  <div class="home">
    <div class="bg bg-home"></div>

    <main class="main page-shadow page page-home">
      <section
        class="container section section-home flex flex-aic flex-jcc parallax"
        ref="parallax_one"
      >
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
            <h4 class="card-title">{{ skill.title }}</h4>
            <p class="card-text">{{ skill.text }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="section section-work">
      <div class="container">
        <ul class="work-group">
          <li class="work work-head">
            MY
            <br />WORKs
          </li>
          <li class="work" v-for="work in workArr" :key="work.title">
            <a :href="work.url" target="_blank">
              <img class="work-image" :src="require(`@/assets/works/${work.img}.jpg`)" />
              <div class="work-hover"></div>
              <h2 class="work-title">{{ work.title }}</h2>
              <p class="work-text">{{ work.text }}</p>
            </a>
          </li>
        </ul>
        <router-link to="work" class="btn btn-more">MORE</router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IconFrontend from "@/components/icons/FrontEnd.vue";
import WorkData from "@/data/work";
import SkillData from "@/data/skill";
@Component({
  components: {
    IconFrontend
  }
})
export default class Home extends Vue {
  get skillArr() {
    return SkillData;
  }
  get workArr() {
    return WorkData;
  }
  private interval: number = Date.now();

  private linkTo(url: string) {
    window.location.href = url;
  }
  private mounted() {
    window.addEventListener("mousemove", this.moveEvt);
  }
  private beforeDestroy() {
    window.removeEventListener("mousemove", this.moveEvt);
  }
  private moveEvt(e: MouseEvent): any {
    this.throttle(this.parallax, e, this.$refs.parallax_one);
  }

  private parallax() {
    const e: MouseEvent = arguments[0];
    const el: HTMLElement = arguments[1];
    const w: Position = { x: window.innerWidth, y: window.innerHeight };
    const move: Position = { x: (e.x - w.x) / 30 + 10, y: (e.y - w.y) / 30 };
    el.style.transform = `translate(${move.x}px,${move.y}px)`;
  }
  private throttle(fn: any, ...arg: any[]): any {
    if (Date.now() - this.interval < 100) {
      return;
    }
    this.interval = Date.now();
    fn.apply(this, arg);
  }
}
interface Position {
  x: number;
  y: number;
}
</script>
<style lang="scss">
.parallax {
  transition: 0.1s;
}
.section {
  padding: 50px 0;
  box-sizing: border-box;
  @media (max-width: 575.98px) {
    flex-direction: column;
    padding: 30px 10px;
  }
  &-helf {
    width: 0%;
    overflow: hidden;
    animation: h1-show-helf 1.5s 4s both;
    margin-left: 60px;
    @media (max-width: 575.98px) {
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
      @media (max-width: 575.98px) {
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
  &-work {
    background: #1a3a5a;
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
.home {
  .work {
    width: calc(25% - 20px);
    box-sizing: border-box;
    margin: 0 10px;
    position: relative;
    overflow: hidden;
    &-group {
      margin-bottom: 80px;
      flex-wrap: wrap;
      display: flex;
      align-items: center;
    }
    &-head {
      font-size: 60px;
      font-weight: bold;
      color: #f9dc3f;
      text-align: left;
      line-height: 70px;
      position: relative;
      transform: rotate(16.181deg) translate(80px, -15px);
      &::before {
        content: "";
        position: absolute;
        right: 195px;
        top: 50px;
        border: 5px solid #f9dc3f;
        transition: 0.3s;
      }
      &::after {
        content: "";
        position: absolute;
        left: 100px;
        top: 57px;
        width: 0px;
        height: 3px;
        background-color: #f9dc3f;
        transition: 0.3s;
      }
      &:hover {
        &::before {
          right: 100px;
          border-left: 5px solid #77bce7;
          border-top: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid #77bce7;
        }
        &::after {
          width: 95px;
          background-color: #77bce7;
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
      right: 10px;
    }
    &-title {
      transition-duration: 0.3s;
      font-size: 22px;
      bottom: 10px;

      box-sizing: border-box;
    }
    &-text {
      color: #eee;
      right: 14px;
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
          bottom: 140px;
        }
        &-text {
          bottom: 120px;
        }
      }
    }
    @media (max-width: 575.98px) {
      width: 100%;
      margin-bottom: 30px;
      &-head {
        font-size: 40px;
        font-weight: bold;
        color: #f9dc3f;
        text-align: left;
        line-height: 40px;
        position: relative;
        transform: none;
        margin-bottom: 40px;
        text-align: center;
        &::before {
          display: none;
        }
        &::after {
          display: none;
        }
      }
      &-hover {
        transition: background-color 0.3s;
        position: absolute;
        background-color: rgba(#000, 0.6);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
