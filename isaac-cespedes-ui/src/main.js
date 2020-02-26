import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import vuetify from "./plugins/vuetify";
import ProductListPage from "@/components/ProductListPage";
import CheckoutPage from "@/components/CheckoutPage";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: ProductListPage
      // component: CheckoutPage
    },
    {
      path: "/ProductListPage",
      name: "ProductListPage",
      component: ProductListPage
    },
    {
      path: "/CheckoutPage",
      name: "CheckoutPage",
      component: CheckoutPage
    }
  ]
});

new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
