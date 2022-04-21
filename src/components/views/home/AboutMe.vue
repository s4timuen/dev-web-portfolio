<template>
  <div class="container-fluid">
    <div id="about-section" class="row rounded">
      <!-- PROD: replace with actual image -->
      <img
        src="@/assets/img/placeholder_img_800x600.png"
        :alt="img_alt"
        loading="lazy"
        id="about-img"
        class="col-12 col-md-6"
      />
      <div id="about-text" class="col-12 col-md-6 rounded">
        <h2>{{ $t("about-me") }}</h2>
        <p>{{ about_me }}</p>
      </div>
    </div>
    <div class="row">
      <div id="more-about-text" class="col-12 rounded">
        <h2>{{ $t("more-about-me") }}</h2>
        <p>{{ more_about_me }}</p>
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
    return {
      img_alt: "",
      about_me: "",
      more_about_me: "",
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted: function () {
    this.img_alt = this.$store.getters.getUserFullName;
    this.about_me = this.$store.getters.getUserAbout;
    this.more_about_me = this.$store.getters.getUserMoreAbout;
  },
};
</script>

<style scoped lang="css">
.container-fluid {
  padding: 0%;
  margin-bottom: var(--container-margin-bottom);
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
  margin-top: var(--margin-header-top);
  font-weight: bold;
}
</style>
