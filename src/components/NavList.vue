<template>
  <div>
    <div class="toggle"></div>
    <ul class="show">
      <li>
        <router-link to="/">首頁</router-link>
      </li>
      <li>
        <router-link to="/about">關於我</router-link>
      </li>
      <li>
        <router-link to="/">作品</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  li {
    overflow: hidden;
    @for $i from 1 to 8 {
      &:nth-child(#{$i}) {
        a {
          animation: slideUp 0.5s both;
          animation-delay: 0s + $i * 0.3;
          @keyframes slideUp {
            to {
              transform: translateY(0);
            }
          }
        }
      }
    }
    a {
      transform: translateY(50px);
      font-size: 18px;
      color: #ddd;
    }
  }
}
</style>
