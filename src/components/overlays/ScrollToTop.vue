<template>
  <div id="scroll-to-top" class="rounded-circle" @click="scrollToTop()">
    <img
      src="@/assets/icons/upward-arrow-icon.gif"
      class="arrow-icon"
      alt="scroll-up"
    />
  </div>
</template>

<script>
export default {
  name: "ScrollToTop",
  components: {},
  props: {},
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0
      });
    },
  },
  mounted: function () {},
};
</script>

<style scoped lang="css">
#scroll-to-top {
  position: fixed;
  right: 0.5%;
  bottom: 3%;
  cursor: pointer;
}

.arrow-icon {
  width: 4rem;
  height: 4rem;
}
</style>
