<template>
  <div id="sidebar" class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel()"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <ul class="sidebar-panel-nav">
          <li>
            <a
              href="#about-me-section"
              @click="closeSidebarPanel()"
              class="nav-link"
              >{{ $t("section-title-about-me") }}</a
            >
          </li>
          <li>
            <a
              href="#skills-section"
              @click="closeSidebarPanel()"
              class="nav-link"
              >{{ $t("section-title-skills") }}</a
            >
          </li>
          <li>
            <a
              href="#projects-section"
              @click="closeSidebarPanel()"
              class="nav-link"
              >{{ $t("section-title-projcts") }}</a
            >
          </li>
          <li>
            <a
              href="#work-experience-section"
              @click="closeSidebarPanel()"
              class="nav-link"
              >{{ $t("section-title-work") }}</a
            >
          </li>
          <li>
            <a
              href="#education-section"
              @click="closeSidebarPanel()"
              class="nav-link"
              >{{ $t("section-title-education") }}</a
            >
          </li>
          <li>
            <a
              href="#contact-section"
              @click="closeSidebarPanel()"
              class="nav-link"
              >{{ $t("section-title-contact") }}</a
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "NavSidebar",
  components: {},
  date: function () {
    return {};
  },
  computed: {
    isPanelOpen() {
      return this.$store.getters.isNavOpen;
    },
  },
  methods: {
    closeSidebarPanel() {
      this.$store.commit("setNavOpen");
    },
  },
};
</script>

<style scoped lang="css">
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: var(--bg-color);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: auto;
}

.sidebar-panel-nav {
  list-style-type: none;
}

.sidebar-panel-nav > li {
  color: #fff;
  font-size: 1.25rem;
  display: block;
  padding-bottom: 0.5em;
}

.nav-link {
  display: flex;
  text-align: justify;
  text-justify: start;
}
</style>
