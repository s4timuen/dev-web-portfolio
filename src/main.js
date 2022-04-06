import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router.js';
import store from '@/store/store.js';
import i18n from '@/localization/i18n.js';
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);
app.use(BootstrapVue3);
app.mount('#app');
