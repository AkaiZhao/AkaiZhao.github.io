<template>
  <div>
    <h1 id="title-effect">你好，我是趙生凱</h1>
    <p class="content-effect">
      自2018年6月，因興趣開始網頁前端，並在2個月的學習後，成為一名網頁前端工程師，熱愛學習各種前端的技術，尤其是網頁互動特效。
    </p>
  </div>
</template>
<script>
var is = require("@/js/valid");
if (is.PC()) {
  setTimeout(() => {
    document.addEventListener("mousemove", e => {
      let t = document.querySelector("#title-effect"),
        p = document.querySelector(".content-effect");
      let w = window.outerWidth,
        h = window.outerHeight,
        mX = e.clientX,
        mY = e.clientY;
      t.style.transform = `translate(${-(w - mX) / 200 + 20}px ,${-(h - mY) /
        200}px)`;
      p.style.transform = `translate(${-(w - mX) / 150 + 20}px ,${-(h - mY) /
        150}px)`;
    });
  }, 300);
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 60px;
  color: #198cd1;
}
p {
  font-size: 30px;
  letter-spacing: 2px;
}
@media (max-width: 575.98px) {
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 16px;
  }
}
</style>
