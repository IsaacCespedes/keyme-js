<template lang="pug">
  v-container
    //- headers
    v-row(class="mt-5 deep-orange--text" justify="center")
      h1(class="font-weight-black") Part of Your Order Needs to Be
    v-row(class="deep-orange--text" justify="center")
      h1(class="font-weight-black") Made at KeyMe Headquarters
    v-row(class="mt-5" justify="center")
      h3(class="font-weight-bold") And will ship for FREE in discreet packaging
    v-row(justify="center")
      v-col(cols="7")
        v-divider(class="mb-4")
    v-row(justify="center")
      v-col(cols="8")
        v-text-field(placeholder="FULL NAME" outlined)
    v-row(justify="center")
      v-col(class="pb-0" cols="4")
        v-text-field(placeholder="STREET ADDRESS"
            outlined)
      v-col(class="pb-0" cols="3")
        v-text-field(placeholder="APT #"
            outlined)
    v-row(justify="center")
      v-col(class="pt-0" cols="4")
        v-text-field(placeholder="CITY"
            outlined)
      v-col(class="pt-0" cols="2")
        v-text-field(placeholder="STATE"
            outlined)
      v-col(class="pt-0" cols="2")
        v-text-field(placeholder="ZIP CODE"
            outlined)
    v-row(justify="center")
      v-col(cols="8")
        v-text-field(:hint="emailNotice" persistent-hint placeholder="Email Address"
            outlined)
    v-row(justify="center")
      v-col(cols="5")
        v-btn(@click="showModal()" x-large block class="mt-3 deep-orange white--text")
          h2 Continue
    v-row(justify="center")
      v-btn(@click="backToProductList()" text class="mt-2 blue--text")
        h3 EDIT ORDER
</template>

<script>
export default {
  name: "CheckoutPage",
  data() {
    return {
      emailNotice:
        "We will only send you information regarding your order and KeyMe services and promotions. We will never share your information with a third party."
    };
  },
  methods: {
    backToProductList: function() {
      this.$router.replace({
        name: "ProductListPage"
      });
    }
  }
};
</script>

<style lang="scss"></style>
