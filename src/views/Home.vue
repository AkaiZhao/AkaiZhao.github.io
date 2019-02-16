<template>
  <div class="home">
    <NameDeco msg="Akai Zhao" />
    <div class="content">
      <div class="intro">
        <intro class="text_area" />
        <FrontEndLogo class="img_area" />
      </div>
    </div>
  </div>
</template>

<script>
import NameDeco from "@/components/NameDeco.vue";
import FrontEndLogo from "@/components/frontEndLogo.vue";
import intro from "@/components/intro.vue";
export default {
  name: "home",
  components: {
    NameDeco,
    FrontEndLogo,
    intro
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100vh;
  display: flex;
}
.intro {
  margin: auto;
  padding: 50px;
  display: flex;
  overflow: hidden;
  .text_area {
    width: 50%;
    padding-right: 20px;
    transform: translateY(-150%);
    animation: show 0.8s 0.1s forwards;
    @keyframes show {
      to {
        transform: translateY(0);
      }
    }
  }
  .img_area {
    flex-grow: 1;
  }
}
@media (max-width: 575.98px) {
  .intro {
    flex-direction: column;
    .text_area {
      width: 100%;
    }
  }
}
</style>
