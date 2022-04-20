<template>
  <div class="container-fluid">
    <div id="education-section" class="row rounded border-top">
      <h2 class="col-12">{{ $t("section-title-education") }}</h2>
      <div
        class="col-11 education-card border rounded"
        v-for="(section, key) in education"
        :key="key"
      >
        <!-- v-if titles -->
        <div class="row education-entries">
          <h3 v-if="key == 'school'" class="col-12">{{ $t("school") }}</h3>
          <h3 v-if="key == 'university'" class="col-12">
            {{ $t("university") }}
          </h3>
          <h3 v-if="key == 'credentials'" class="col-12">
            {{ $t("credentials") }}
          </h3>
          <div
            class="row education-entry"
            v-for="(element, elementKey) in section"
            :key="elementKey"
          >
            <!-- v-if entries -->
            <div v-if="key != 'credentials'" class="row border-top">
              <div class="col-12 col-md-2 offset-md-1 education-duration">
                <p>{{ element.start_date }}</p>
                <p>{{ $t("to") }}</p>
                <p>{{ element.end_date }}</p>
              </div>
              <div class="col-12 col-md-8 education-details">
                <p>
                  {{ capitalize(element.institution) }}
                </p>
                <p>
                  {{ $t("degree") + capitalize(element.degree) }}
                </p>
                <p>
                  {{ $t("grade") + element.grade }}
                </p>
              </div>
            </div>
            <div v-if="key == 'credentials'" class="row border-top">
              <div class="col-12 col-md-2 offset-md-1 education-duration">
                <p>{{ element.issue_date }}</p>
              </div>
              <div class="col-12 col-md-8 education-details">
                <p>
                  {{ capitalize(element.institution) }}
                </p>
                <p>
                  {{ $t("certificate") + capitalize(element.certificate) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import capitalize from "@/helpers/utilities.js";

export default {
  name: "EducationSection",
  components: {},
  props: {},
  data: function () {
    return {
      education: {
        credentials: [
          {
            issue_date: " ",
            institution: " ",
            certificate: " ",
          },
        ],
        university: [
          {
            start_date: " ",
            end_date: " ",
            institution: " ",
            degree: " ",
            grade: " ",
          },
        ],
        school: [
          {
            start_date: " ",
            end_date: " ",
            institution: " ",
            degree: " ",
            grade: " ",
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
    this.education = this.$store.getters.getUserEducation;
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

#education-section {
  justify-content: center;
}

/* work card and content of card */
.education-card {
  box-shadow: 0 3px 10px var(--primary-shadow);
  padding: 10px;
  padding-bottom: 0%;
  margin-top: 1%;
  margin-bottom: 1%;
}

.education-entries {
  justify-content: center;
}

.education-entry {
  justify-content: center;
}

.education-duration {
  align-self: center;
  margin-top: 5%;
  margin-bottom: 4%;
}

.education-duration > p {
  margin: 0%;
}

.education-details {
  padding-top: 1%;
  padding-left: 12%;
}

.education-details > p {
  text-align: justify;
}
</style>
