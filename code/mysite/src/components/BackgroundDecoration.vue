<template>
  <div class="deco">
    <h4 class="deco-text">{{ text }}</h4>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "backgroundDecoration",
  props: {
    text: { type: String }
  }
});
</script>
<style lang="scss">
.deco {
  position: fixed;
  bottom: 100%;
  left: 0;
  color: transparent;
  -webkit-text-stroke-color: #fff;
  -webkit-text-stroke-width: 1px;
  transform-origin: 125px 50%;
  transform: rotate(-90deg);
  font-size: 120px;
  letter-spacing: 12px;
  line-height: 120px;
  opacity: 0.3;
  transition: 0.5s;
  animation: hide-deco 1s linear 3s backwards;
  animation: show-deco 0.8s both;
  &-text {
    font-weight: bold;
    user-select: none;
  }
  &:hover {
    opacity: 0.7;
    color: #fff;
  }
  @keyframes show-deco {
    to {
      bottom: 10%;
    }
  }
  @keyframes hide-deco {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.1;
    }
  }
}
@media (max-width: 992px) {
  .deco {
    display: none;
  }
}
</style>
