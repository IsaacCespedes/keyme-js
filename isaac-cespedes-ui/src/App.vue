<template lang="pug">
  v-app
    v-content
      ProductListPage
</template>

<script>
import ProductListPage from "./components/ProductListPage";

export default {
  name: "App",

  components: {
    ProductListPage
  },

  data: () => ({
    //
  })
};
</script>
