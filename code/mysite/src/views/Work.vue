<template>
  <div class="works">
    <section class="section">
      <h1 class="section-title">MY WORKs</h1>
      <div class="container">
        <ul class="work-group">
          <li class="work" v-for="work in workArr" :key="work.title">
            <a :href="work.url" target="_blank">
              <div class="work-top">
                <img class="work-image" :src="require(`@/assets/works/${work.img}.jpg`)" />
              </div>
              <div class="work-bottom">
                <h2 class="work-title">{{work.title}}</h2>
                <p class="work-text">{{work.text}}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import WorkData from '@/data/work';
export default class Work extends Vue {
  // private workArr: Array<{ title: string, text: string, url?: string, img: string }> = [
  //   { title: 'TIC-TAC-TOE', text: '練習時製作的井字遊戲', url: 'https://akaizhao.github.io/work/tictactoe/', img: 'tic-tac-toe' },
  //   { title: 'GOMOKU', text: '研究CANVAS時製作的五子棋遊戲', url: 'https://akaizhao.github.io/work/gomoku/', img: 'gomoku' },
  //   { title: 'YOLOMOMENT', text: '職訓時與組員共同設計的餐廳網站', url: 'https://akaizhao.github.io/work/YoloMoment/', img: 'yolomoment' },
  // ];
  get workArr() {
    return WorkData;
  }
}
</script>
<style lang="scss" scoped>
.works {
  padding-top: 95px;
  background-color: rgb(44, 17, 2);
  .section {
    min-height: 800px;
  }
  .work {
    width: 30%;
    margin: 0 calc((100% / 3 - 30%) / 2);
    position: relative;
    background-color: #eee;
    border: 1px solid #555;
    padding: 2px;
    padding-bottom: 10px;
    border-radius: 3px;
    box-sizing: border-box;
    @media (max-width: 530px) {
      width: 100%;
      margin: 0 20px;
      margin-bottom: 30px;
    }
    &-group {
      display: flex;
      flex-wrap: wrap;
    }
    &-image {
      width: 100%;
      display: block;
      padding-bottom: 10px;
      border-bottom: 2px solid rgb(175, 175, 175);
    }
    &-bottom {
      // padding-bottom: 10px;
      width: 100%;
      height: 0px;
      transition: 0.3s;
      overflow: hidden;
    }
    &-title,
    &-text {
      color: #111;
      padding: 5px 0;
    }
    &-title {
      padding-top: 10px;
      font-size: 18px;
      font-weight: bold;
    }
    // &:hover {
    //   .work {
    //     &-bottom {
    //       height: 60px;
    //       background-color: #eee;
    //     }
    //   }
    // }
  }
}
</style>