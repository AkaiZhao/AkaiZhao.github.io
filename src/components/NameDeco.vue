<template>
  <div class="vertical">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "NameDeco",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
.vertical {
  position: absolute;
  bottom: 100%;
  left: 0;
  color: transparent;
  -webkit-text-stroke-color: #fff;
  -webkit-text-stroke-width: 1px;
  transform-origin: 125px 50%;
  transform: rotate(-90deg);
  font-size: 80px;
  letter-spacing: 12px;
  line-height: 80px;
  opacity: 0.3;
  transition: 0.5s;
  animation: hide 1s linear 3s backwards;
  animation: show 0.8s both;
  h1 {
    user-select: none;
  }
  &:hover {
    opacity: 0.7;
    color: #fff;
  }
  @keyframes show {
    to {
      bottom: 0;
    }
  }
  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.1;
    }
  }
}
@media (max-width: 992px) {
  .vertical {
    display: none;
  }
}
</style>
