<template>
  <div class="toolbar">
    <div class="icons">
      <a
        href="#"
        class="icon"
        :class="i.class"
        v-for="(i,index) in icons"
        :title="i.name"
        :key="i.name"
        @click="changeActive(index)"
      ></a>
    </div>
    <a href="#" @click.prevent="changeActive(-1)" class="close"></a>
  </div>
</template>
<script>
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
  mounted() {
    this.icons[this.currentActive].class.active = true;
  },
  methods: {
    changeActive(act) {
      console.log(act);

      this.$store.dispatch("changeActive", act);
    }
  },
  computed: {
    currentActive() {
      return this.$store.state.currentActive;
    }
  },
  watch: {
    currentActive(val, oval) {
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
  width: 80px;
  height: 80px;
  display: flex;
  transition: 0.2s;
  background: background-color center no-repeat;
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
</style>
