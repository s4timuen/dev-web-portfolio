<template>
  <div class="container-fluid">
    <div id="work-experience-section" class="row rounded border-top">
      <h2 class="col-12">{{ $t("section-title-work") }}</h2>
      <div
        class="col-11 work-card border rounded"
        v-for="(work, key) in work_experience"
        :key="key"
      >
        <div class="row">
          <!-- PROD: add respective images (employer.png) to img folder 
        and correct src ('@/assets/img/' + work.employer + '.png') -->
          <img
            src="@/assets/img/placeholder_img_800x600.png"
            :alt="work.employer"
            loading="lazy"
            class="employer-img col-12 col-md-3"
          />
          <div class="col-12 col-md-2 employment-duration">
            <p>{{ work.start_date }}</p>
            <p>{{ $t("to") }}</p>
            <p>{{ work.end_date }}</p>
          </div>
          <div class="col-12 col-md-7">
            <p class="work-label">{{ capitalize(work.label) }}</p>
            <p class="work-occupation">
              {{ work.occupation }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { capitalize } from "@/helpers/utilities.js";

export default {
  name: "WorkExperienceSection",
  components: {},
  props: {},
  data: function () {
    return {
      work_experience: {},
    };
  },
  computed: {},
  watch: {},
  methods: {
    capitalize,
  },
  mounted: function () {
    this.work_experience = this.$store.getters.getUserWorkExperience;
  },
};
</script>

<style scoped lang="css">
.container-fluid {
  padding: 0%;
  margin-bottom: var(--container-margin-bottom);
}

h2 {
  font-weight: bold;
  margin-top: var(--margin-header-top);
}

#work-experience-section {
  justify-content: center;
}

/* work card and content of card */
.work-card {
  box-shadow: 0 3px 10px var(--primary-shadow);
  padding: 10px;
  margin-top: 1%;
  margin-bottom: 1%;
}

.employer-img {
  align-self: center;
  max-width: 100%;
  max-height: auto;
}

.employment-duration {
  align-self: center;
}

.employment-duration > p {
  margin-bottom: 0%;
}

.work-label {
  font-weight: bold;
}
</style>
