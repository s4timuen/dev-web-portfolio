<template>
  <div class="container-fuid">
    <nav id="navigation" class="row border">
      <h1 class="col-1 col-md-2">{{ user_full_name }}</h1>
      <ul id="links-list" class="col-9">
        <li>
          <a href="#about-me-section" class="nav-link">{{
            $t("section-title-about-me")
          }}</a>
        </li>
        <li>
          <a href="#skills-section" class="nav-link">{{
            $t("section-title-skills")
          }}</a>
        </li>
        <li>
          <a href="#projects-section" class="nav-link">{{
            $t("section-title-projcts")
          }}</a>
        </li>
        <li>
          <a href="#work-experience-section" class="nav-link">{{
            $t("section-title-work")
          }}</a>
        </li>
        <li>
          <a href="#education-section" class="nav-link">{{
            $t("section-title-education")
          }}</a>
        </li>
        <li>
          <a href="#contact-section" class="nav-link">{{
            $t("section-title-contact")
          }}</a>
        </li>
      </ul>
      <BurgerMenu id="burger-menu" class="col-2 col-md-1" />
    </nav>
  </div>
</template>

<script>
import BurgerMenu from "@/components/header/BurgerMenu.vue";

export default {
  name: "NavBar",
  components: {
    BurgerMenu,
  },
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
#navigation {
  background-color: var(--bg-color);
  box-shadow: 0 4px 5px var(--primary-shadow);
  padding-top: 2%;
  padding-bottom: 2%;
  border-bottom-left-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
}

h1 {
  margin-bottom: 0%;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: right;
  margin-bottom: 0%;
  align-items: center;
}

.nav-link {
  font-size: 1.25rem;
}

/* @media large
* show links-list
* hide burger-menu
*/
@media screen and (min-width: 841px) {
  #burger-menu {
    visibility: hidden;
  }
  #links-list {
    visibility: visible;
  }
}

/* @media small
* show burger-menu
* hide links-list
*/
@media screen and (min-width: 0px) and (max-width: 840px) {
  #burger-menu {
    visibility: visible;
  }
  #links-list {
    visibility: hidden;
  }
}
</style>
