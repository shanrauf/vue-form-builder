import Vue from "vue";
import App from "@/App.vue";
import router from "@/app-routes";
import store from "@/store";
import "@/components/_globals";

import { sync } from "vuex-router-sync";
sync(store, router);

Vue.config.productionTip = false;
Vue.config.performance = true;

import Notifications from "vue-notification";
Vue.use(Notifications);

import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import "material-icons";
import "@fortawesome/fontawesome-free/css/all.css";
// import "@mdi/font/css/materialdesignicons.css";

const opts: any = {
  icons: {
    iconfont: "md",
    values: {
      add: "add",
      edit: "edit",
      close: "close",
      github: "fab fa-github",
      facebook: "fab fa-facebook",
      twitter: "fab fa-twitter",
      youtube: "fab fa-youtube"
    }
  }
};

Vue.use(Vuetify);

new Vue({
  store,
  router,
  vuetify: new Vuetify(opts),
  render: h => h(App)
}).$mount("#app");
