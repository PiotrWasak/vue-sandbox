import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.directive("color-currenda", function (element) {
  element.style.backgroundColor = "#EF4F10";
  element.style.color = "white";
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
