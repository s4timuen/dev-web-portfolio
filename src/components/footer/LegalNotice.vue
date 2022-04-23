<template>
  <div class="container-fluid">
    <div id="legal-notice" class="row border">
      <h2 class="col-12">{{ $t("footer-legal-notice-title") }}</h2>
      <p class="col-12">{{ $t("footer-legal-notice-copyright") }}</p>
      <p class="col-12">
        {{ $t("footer-legal-notice-copyright-text") + user_full_name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LegalNotice",
  components: {},
  props: {},
  data: function () {
    return {
      user_full_name: "",
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted: function () {
    this.user_full_name = this.$store.getters.getUserFullName;
  },
};
</script>

<style scoped lang="css">
h2 {
  font-weight: bold;
  margin-top: var(--margin-header-top);
}

p {
  margin: 0%;
}

#legal-notice {
  background-color: var(--bg-color);
  box-shadow: 0 4px 5px var(--primary-shadow);
  padding-bottom: 2%;
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  align-content: center;
}
</style>
