<template>
  <div id="wrapper">
    <main class="main-content" id="main-content">
        <router-view />
    </main>
  </div>
</template>
<script>
import { mapActions, getters, mapGetters } from "vuex";
export default {
  // sockets: {
  //   connect: function () {
  //     console.log('socket connected')
  //   },
  // },

  created() {

  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['refreshToken', 'logout'])
  }
};
</script>
<style lang="sass">
.slide-fade-enter-active
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1)
.slide-fade-enter,
.slide-fade-leave-to
  transform: translateX(50px)
  opacity: 0
</style>