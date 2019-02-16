<template>
  <div class="home">
    <NameDeco msg="About Me" />
  </div>
</template>

<script>
// @ is an alias to /src
import NameDeco from "@/components/NameDeco.vue";

export default {
  name: "about",
  components: {
    NameDeco
  }
};
</script>
