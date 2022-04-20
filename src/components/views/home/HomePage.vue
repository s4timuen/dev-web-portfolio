<template>
  <div id="home-page" class="container-fluid">
    <AboutMeSection />
    <SkillsSection />
    <ProjectsSection />
    <WorkExperienceSection />
    <EducationSection />
  </div>
</template>

<script>
import AboutMeSection from "@/components/views/home/AboutMe.vue";
import SkillsSection from "@/components/views/home/Skills.vue";
import ProjectsSection from "@/components/views/home/Projects.vue";
import WorkExperienceSection from "@/components/views/home/WorkExperience.vue";
import EducationSection from "@/components/views/home/Education.vue";

export default {
  name: "HomePage",
  components: {
    AboutMeSection,
    SkillsSection,
    ProjectsSection,
    WorkExperienceSection,
    EducationSection,
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
