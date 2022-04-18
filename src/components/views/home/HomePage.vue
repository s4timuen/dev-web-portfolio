<template>
  <div id="home-page" class="container-fluid">
    <AboutMeSection />
    <SkillsSection />
  </div>
</template>

<script>
import AboutMeSection from "@/components/views/home/AboutMe.vue";
import SkillsSection from "@/components/views/home/Skills.vue";

export default {
  name: "HomePage",
  components: {
    AboutMeSection,
    SkillsSection,
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
