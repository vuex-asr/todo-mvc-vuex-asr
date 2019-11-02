import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import VuexAsr from "vuex-asr";
import "./registerServiceWorker";

Vue.use(VuexAsr);
Vue.config.productionTip = false;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context("./components", true, /\.vue$/i);
files.keys().map(key =>
  Vue.component(
    key
      .split("/")
      .pop()
      .split(".")[0],
    files(key).default
  )
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
