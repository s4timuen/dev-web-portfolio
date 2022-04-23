<template>
  <div class="container-fluid">
    <nav id="navigation" class="row border justify-content-between">
      <h1 class="col-2">{{ user_full_name }}</h1>
      <!-- links to section -->
      <ul id="links-list" class="col-8 justify-content-center">
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
      <!-- language selection -->
      <select
        name="language"
        id="language-selection"
        class="col-1"
        v-model="$i18n.locale"
      >
        <option v-for="locale in locales" :key="locale" :value="locale">
          {{ locale }}
        </option>
      </select>
      <!-- burger menu -->
      <BurgerMenu id="burger-menu" class="col-1" />
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
      locales: [],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted: function () {
    this.user_full_name = this.$store.getters.getUserFullName;
    // get available locales and show current as default selection
    this.locales.push(this.$i18n.locale);
    this.$i18n.availableLocales.forEach((locale) => {
      if (locale !== this.$i18n.locale) {
        this.locales.push(locale);
      }
    });
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
  align-content: center;
}

h1 {
  margin-bottom: 0%;
}

/* navigation */
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

/* localization */
#language-selection {
  height: min-content;
  width: fit-content;
  align-self: center;
  margin-right: 2%;
  background-color: #fff;
  border: 2px solid blue;
  border-radius: 5px;
  font-size: 1rem;

  transition: 0.3s;
}

#language-selection:hover {
  background-color: blue;
  cursor: pointer;
  color: #fff;
}

/* @media large
* show links-list
* hide burger-menu
*/
@media screen and (min-width: 841px) {
  #burger-menu {
    display: none;
  }
  #links-list {
    display: flex;
  }
}

/* @media small
* show burger-menu
* hide links-list
*/
@media screen and (min-width: 0px) and (max-width: 840px) {
  #burger-menu {
    display: flex;
  }
  #links-list {
    display: none;
  }
}
</style>
