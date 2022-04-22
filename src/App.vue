<template>
  <div class="container-fluid">
    <div id="nav" class="row">
      <NavBar class="col-12" />
      <NavSidebar />
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
    <ScrollToTop />
  </div>
</template>

<script>
import NavBar from "@/components/header/NavBar.vue";
import NavSidebar from "@/components/header/NavSidebar.vue";
import ScrollToTop from "@/components/overlays/ScrollToTop.vue";

export default {
  name: "App",
  components: {
    NavBar,
    NavSidebar,
    ScrollToTop,
  },
  props: {},
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  mounted: function () {},
};
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0%;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

a:hover {
  color: #ff7235 !important;
}

#nav {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
}

/* global variables */
:root {
  --bg-color: #f8f8f8;
  --primary-shadow: #8b8eaf;
  --margin-header-top: 2%;
  --container-margin-bottom: 2%;
}
</style>
