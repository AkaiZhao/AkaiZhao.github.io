<template>
  <div class="setting">
    <h1>ANALYTICS REPORT</h1>
    <h4 class="setting-title">TOMATO OF THIS WEEK</h4>
    <div class="board">
      <div class="board-date">
        <div class="board-date-count">8</div>
        <div class="board-date-time">TODAY</div>
      </div>
      <div class="board-date">
        <div class="board-date-count">20</div>
        <div class="board-date-time">07/08 - 07/14</div>
      </div>
    </div>
    <h4 class="setting-title">
      CHART
      <span>07/08-07/14</span>
    </h4>
    <div class="chart">
      <div class="chart-column" v-for="a in new Array(7)" :key="a">
        <div class="chart-column-date">
          <span>07/08</span>
          <span>MON</span>
        </div>
        <div class="chart-column-total">12</div>
        <div class="chart-column-count"></div>
        <div class="chart-column-count"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.board {
  padding: 15px 0;
  box-sizing: border-box;
  background: #404040;
  display: flex;
  &-date {
    width: 50%;
    text-align: center;
    &:nth-child(1) {
      border-right: 1px solid #606060;
    }
    &-count {
      color: #ea5548;
      font-size: 50px;
      font-weight: 1000;
    }
    &-time {
      color: #eaeaea;
      font-size: 10px;
    }
  }
}
.chart {
  height: 300px;
  background-color: #404040;
  display: flex;
  align-items: flex-end;
  &-column {
    width: calc(100% / 7);
    position: relative;
    &-count {
      margin: 0 auto;
      width: 25px;
      height: 9px;
      background-color: #ea5548;
      border-radius: 5px;
      margin-top: 1px;
    }
    &-total {
      margin-bottom: 4px;
      font-size: 14px;
      font-weight: 1000;
      color: #ea5548;
      text-align: center;
    }
    &-date {
      position: absolute;
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
      span {
        display: block;

        text-align: center;
        font-size: 8px;
        font-weight: 1000;
        &:nth-child(1) {
          color: #fff;
        }
        &:nth-child(2) {
          color: #acacac;
        }
      }
    }
  }
}
</style>
