<template lang="pug">
  v-app
    v-content
      transition(name="fade" mode="out-in")
        keep-alive(include="ProductListPage")
          router-view
      //- ProductListPage
</template>

<script>
import ProductListPage from "./components/ProductListPage";
import CheckoutPage from "./components/CheckoutPage";
export default {
  name: "App",

  components: {
    ProductListPage,
    CheckoutPage
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.33s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
