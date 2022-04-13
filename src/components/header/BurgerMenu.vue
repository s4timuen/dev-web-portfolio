<template>
  <div id="burger-menu" :class="{ active: isActive }" @click.prevent="toggle()">
    <button type="button" class="burger-button" title="Menu">
      <span class="burger-bar burger-bar-1" />
      <span class="burger-bar burger-bar-2" />
      <span class="burger-bar burger-bar-3" />
    </button>
  </div>
</template>

<script>
export default {
  name: "BurgerMenu",
  components: {},
  props: {},
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    toggle() {
      this.$store.commit("setNavOpen");
    },
  },
  mounted: function () {},
};
</script>

<style scoped lang="css">
/* burger menu */
#burger-menu {
  display: flex;
  justify-content: center;
}

.hidden {
  visibility: hidden;
}

/* burger button */
.burger-button {
  position: absolute;
  height: 45px;
  width: 45px;
  display: block;
  align-self: center;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

button {
  cursor: pointer;
}

/* burger button bars */
.burger-bar {
  background-color: #130f40;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 3px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

#burger.active .burger-bar {
  background-color: #ffffff;
}

.burger-bar-1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-10px);
}

.burger-bar-2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-bar-3 {
  transform: translateY(10px);
}

.burger-button:hover .burger-bar-2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar-2:hover {
  transform: scaleX(1);
}
</style>
