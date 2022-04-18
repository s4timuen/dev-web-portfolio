<template>
  <div class="container-fluid">
    <div id="skills-section" class="row rounded border-top">
      <h2 class="col-12">{{ $t("skills-title") }}</h2>
      <div class="col-8 offset-2">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4"
            v-for="(skill, key) in skills"
            :key="key"
          >
            <!-- PROD: add respective icons (skill_name.png) to icons folder 
        and correct src ('@/assets/icons/' + skill.skill_name + '.png') -->
            <img
              src="@/assets/icons/placeholder_icon.png"
              :alt="skill.skill_name"
              loading="lazy"
              class="icon-card border rounded-pill"
            />
            <p class="skill-name">{{ capitalize(skill.skill_name) }}</p>
            <p>{{ $t("skill-level") + capitalize(skill.level) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import capitalize from "@/helpers/utilities.js";

export default {
  name: "SkillsSection",
  components: {},
  props: {},
  data: function () {
    return {
      skills: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    capitalize,
  },
  mounted: function () {
    this.skills = this.$store.getters.getUserSkills;
    console.log(this.skills);
  },
};
</script>

<style scoped lang="css">
.container-fluid {
  padding: 0%;
  margin-bottom: 2%;
}

h2 {
  font-weight: bold;
  margin-top: 2%;
}

.icon-card {
  width: 10rem;
  height: 10rem;
  box-shadow: 0 3px 10px var(--primary-shadow);
  padding: 10px;
  margin-top: 3%;
  margin-bottom: 7%;
}

.skill-name {
  font-weight: bold;
  margin-bottom: 0%;
}
</style>
