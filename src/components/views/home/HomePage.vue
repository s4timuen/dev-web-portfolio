<template>
  <div id="home-page" class="container-fluid">
    <AboutMe />
  </div>
</template>

<script>
import AboutMe from "@/components/views/home/AboutMe.vue";

export default {
  name: "HomePage",
  components: {
    AboutMe,
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

<style scoped lang="css">
</style>
