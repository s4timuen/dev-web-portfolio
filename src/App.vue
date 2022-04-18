<template>
  <div class="container-fluid">
    <div id="nav" class="row">
      <NavBar class="col-12" />
      <NavSidebar />
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/header/NavBar.vue";
import NavSidebar from "@/components/header/NavSidebar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    NavSidebar,
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
}

a:hover {
  color: #ff7235 !important;
}

#nav {
  padding-bottom: 2%;
}

/* global variables */
:root {
  --bg-color: #eaeaea;
  --primary-shadow: #8b8eaf;
  --margin-header-top: 2%;
  --container-margin-bottom: 2%;
}
</style>
