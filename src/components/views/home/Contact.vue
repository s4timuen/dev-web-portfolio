<template>
  <div class="container-fluid">
    <div id="contact-section" class="row rounded border-top">
      <h2 class="col-12">{{ $t("section-title-contact") }}</h2>
      <div id="contact-form-container" class="col-9">
        <form :action="contact_url" method="POST" class="border rounded">
          <div class="form-field row">
            <label for="name-input" class="col-12">{{ $t("name") }}</label>
            <input
              type="text"
              id="name-input"
              name="sender-name"
              :placeholder="$t('placeholder-name')"
              class="input-field col-12"
              required
            />
          </div>
          <div class="form-field row">
            <label for="email-input" class="col-12">{{ $t("email") }}</label>
            <input
              type="email"
              id="email-input"
              name="sender-email"
              :placeholder="$t('placeholder-email')"
              class="input-field col-12"
              required
            />
          </div>
          <div class="form-field row">
            <label for="message-input" class="col-12">{{
              $t("message")
            }}</label>
            <textarea
              id="message-input"
              cols="60"
              rows="10"
              :placeholder="$t('placeholder-message')"
              name="message"
              class="input-field col-12"
              required
            ></textarea>
          </div>
          <input
            type="submit"
            :value="$t('submit')"
            id="submit-button"
            class="submit-button"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
  components: {},
  props: {},
  data: function () {
    return {
      contact_url: "",
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted: function () {
    this.contact_url = this.$store.getters.getUserContactUrl;
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

#contact-section {
  justify-content: center;
}

/* form */
form {
  box-shadow: 0 3px 10px var(--primary-shadow);
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 5%;
  padding-right: 5%;
}
.form-field {
  margin-bottom: 2%;
}

label {
  margin-right: 2%;
  text-align: justify;
  font-weight: bold;
}

#submit-button {
  background-color: #fff;
  border: 2px solid blue;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.3s;
}

#submit-button:hover {
  background-color: blue;
  cursor: pointer;
  color: #fff;
}
</style>
