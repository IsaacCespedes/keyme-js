<template lang="pug">
  v-container
    v-row
      v-col(class="pb-1 ml-4 deep-orange--text" cols="12")
        h2 Add or Scan Your Free Key
    v-row
      v-col(class="ml-4 mr-2 light-blue--text" cols="12")
        h3(class="pb-0 blueUnderline") FREE DELIVERY
</template>

<script>
export default {
  name: "ProductListPage",

  data: () => ({})
};
</script>

<style lang="scss">
.blueUnderline {
  border-bottom: 3px solid #03a9f4;
}
</style>
