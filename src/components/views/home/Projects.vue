<template>
  <div class="container-fluid">
    <div id="projects-section" class="row rounded border-top">
      <h2 class="col-12">{{ $t("projects-title") }}</h2>
      <div class="row project-cards-section">
        <div
          class="col-11 col-md-5 col-lg-3 offset-1 offset-sm-0 project-card"
          v-for="(project, key) in projects.projects"
          :key="key"
        >
          <!-- PROD: add respective images (project_name.png) to img folder 
        and correct src ('@/assets/img/' + project.project_name + '.png') -->
          <img
            src="@/assets/img/placeholder_img_800x600.png"
            :alt="project.project_name"
            loading="lazy"
            class="project-img"
          />
          <p class="project-name">{{ capitalize(project.project_name) }}</p>
          <p class="project-short-description">
            {{ project.short_description }}
          </p>
          <a :href="project.link">{{ project.project_name }}</a>
        </div>
        <div class="col-12">
          <h3>{{ $t("git-link") }}</h3>
          <a :href="projects.git.link">{{ projects.git.user_name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import capitalize from "@/helpers/utilities.js";

export default {
  name: "ProjectsSection",
  components: {},
  props: {},
  data: function () {
    return {
      projects: {
        git: {
          link: "",
          user_name: "",
        },
        projects: [
          {
            project_name: "",
            short_description: "",
            link: "",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    capitalize,
  },
  mounted: function () {
    this.projects = this.$store.getters.getUserProjects;
  },
};
</script>

<style scoped lang="css">
.container-fluid {
  padding: 0%;
  margin-bottom: var(--container-margin-bottom);
}

h2,
h3 {
  font-weight: bold;
  margin-top: var(--margin-header-top);
}

img {
  max-width: 100%;
  max-height: 100%;
}

#projects-section {
  justify-content: center;
}

.project-name {
  font-weight: bold;
  margin-top: 10%;
  margin-bottom: 0%;
}

.project-cards-section {
  justify-content: center;
  padding: 0%;
}

.project-card {
  box-shadow: 0 3px 10px var(--primary-shadow);
  padding: 10px;
  margin-right: 2.5%;
  margin-left: 2.5%;
  margin-top: 2%;
}
</style>
