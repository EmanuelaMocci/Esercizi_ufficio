import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faHome,
  faSearch,
  faBorderAll,
  faCog,
  faList,
  faCaretDown,
  faCode,
  faTrashAlt,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(
  faHome,
  faSearch,
  faBorderAll,
  faCog,
  faList,
  faCode,
  faCaretDown,
  faTrashAlt,
  faEllipsisV
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
