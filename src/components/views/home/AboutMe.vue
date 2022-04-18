<template>
  <div class="container-fluid">
    <div id="about-section" class="row rounded">
      <!-- PROD: replace with actual image -->
      <img
        src="@/assets/img/placeholder_img_800x600.png"
        :alt="imgAlt"
        loading="lazy"
        id="about-img"
        class="col-12 col-md-6"
      />
      <div id="about-text" class="col-12 col-md-6 rounded">
        <h2>{{ $t("about-me") }}</h2>
        <p>{{ aboutMe }}</p>
      </div>
    </div>
    <div class="row">
      <div id="more-about-text" class="col-12 rounded">
        <h2>{{ $t("more-about-me") }}</h2>
        <p>{{ moreAboutMe }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMeSection",
  components: {},
  props: {},
  data: function () {
    return {};
  },
  computed: {
    imgAlt() {
      return this.$store.getters.getUserFullName;
    },
    aboutMe() {
      return this.$store.getters.getUserAbout;
    },
    moreAboutMe() {
      return this.$store.getters.getUserMoreAbout;
    },
  },
  watch: {},
  methods: {},
  mounted: function () {},
};
</script>

<style scoped lang="css">
.container-fluid {
  padding: 0%;
  margin-bottom: 2%;
}

#about-section {
  display: flex;
  align-items: center;
  padding: 2%;
}

#about-text {
  display: inline-block;
  box-shadow: 0px 2px 15px 2px var(--primary-shadow);
}

#more-about-text {
  background-color: var(--bg-color);
}

h2 {
  margin-top: 1.5%;
  font-weight: bold;
}
</style>
