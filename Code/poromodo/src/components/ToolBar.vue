<template>
  <div class="toolbar">
    <div class="icons">
      <a
        href="#"
        class="icon"
        :class="i.class"
        v-for="(i, index) in icons"
        :title="i.name"
        :key="i.name"
        @click="changePage(index)"
      ></a>
    </div>
    <a href="#" @click.prevent="changePage(-1)" class="close"></a>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      icons: [
        { name: "Add New Task", class: { "icon-add": true, active: false } },
        { name: "Task List", class: { "icon-list": true, active: false } },
        {
          name: "Analytics Report",
          class: { "icon-analytics": true, active: false }
        },
        { name: "Ring Tone", class: { "icon-ringtone": true, active: false } }
      ]
    };
  },
  computed: mapState(["page"]),
  mounted() {
    this.icons[this.page].class.active = true;
  },
  methods: {
    changePage(act) {
      this.$store.dispatch("changePage", act);
    }
  },
  watch: {
    page(val, oval) {
      if (oval >= 0) this.icons[oval].class.active = false;
      if (val >= 0) this.icons[val].class.active = true;
    }
  }
};
</script>
<style lang="scss">
.toolbar {
  background-color: #333333;
}
.icon {
  width: 15vw;
  height: 15vw;
  max-width: 80px;
  max-height: 80px;
  display: flex;
  transition: 0.2s;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-color: rgba(#fff, 0.12);
  }
  &-add {
    background-image: url("~@/assets/icons/add_white.svg");
    &:hover,
    &.active {
      background-image: url("~@/assets/icons/add_red.svg");
    }
  }
  &-list {
    background-image: url("~@/assets/icons/list_white.svg");
    &:hover,
    &.active {
      background-image: url("~@/assets/icons/list_red.svg");
    }
  }
  &-analytics {
    background-image: url("~@/assets/icons/analysis_white.svg");
    &:hover,
    &.active {
      background-image: url("~@/assets/icons/analysis_red.svg");
    }
  }
  &-ringtone {
    background-image: url("~@/assets/icons/ringtone_white.svg");
    &:hover,
    &.active {
      background-image: url("~@/assets/icons/ringtone_red.svg");
    }
  }
}
.close {
  width: 18vw;
  height: 10vw;
  max-width: 90px;
  max-height: 50px;
  position: absolute;
  bottom: 40px;
  left: -30px;
  border-radius: 25px 5px 5px 25px;
  background-color: #fcfcfc;
  display: flex;
  transition: background-color 0.2s;
  @media (max-width: 800px) {
    left: -5vw;
  }
  &:hover {
    background-color: rgb(212, 212, 212);
  }
  &::after {
    content: "";

    width: 20px;
    height: 14px;
    margin-top: 18px;
    margin-left: 13px;
    display: block;
    background-image: url("~@/assets/icons/arrow.svg");
    background-repeat: no-repeat;
    background-size: contain;
    @media (max-width: 800px) {
      width: 4vw;
      height: 2.8vw;
      margin-top: 3.6vw;
      margin-left: 2.6vw;
    }
  }
  &::before {
    content: "";
    width: 25px;
    height: 25px;
    margin-top: 12.5px;
    margin-left: 12px;
    display: block;
    background-image: url("~@/assets/icons/tomato_small_color.svg");
    @media (max-width: 800px) {
      width: 5vw;
      height: 5vw;
      margin-top: 2.5vw;
      margin-left: 2.4vw;
      background-size: cover;
    }
  }
}
</style>
