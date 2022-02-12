<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import EmptyLayout from "./layout/Emptylayout";
import MainLayout from "./layout/Mainlayouth";
export default {
  name: "App",
  data() {
    return {
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
};
</script>
<style lang="sass">
@import 'sass/main'
</style>
