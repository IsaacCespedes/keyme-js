<template lang="pug">
  v-container
    //- headers
    v-row(class="mt-5 deep-orange--text" justify="center")
      h1(class="font-weight-black") Part of Your Order Needs to Be
    v-row(class="deep-orange--text" justify="center")
      h1(class="font-weight-black") Made at KeyMe Headquarters
    v-row(class="mt-5" justify="center")
      h2(class="font-weight-bold") And will ship for FREE in discreet packaging
    v-row(justify="center")
      v-col(cols="7")
        v-divider(class="mb-4")
    v-row(justify="center")
      v-col(cols="8")
        v-text-field(v-model="fullName" placeholder="FULL NAME" outlined)
    v-row(justify="center")
      v-col(class="pb-0" cols="4")
        v-text-field(v-model="streetAddress" placeholder="STREET ADDRESS"
            outlined)
      v-col(class="pb-0" cols="4")
        v-text-field(v-model="aptNumber" placeholder="APT #"
            outlined)
    v-row(justify="center")
      v-col(class="pt-0" cols="4")
        v-text-field(v-model="cityState"  placeholder="CITY, STATE"
            outlined)
      v-col(class="pt-0" cols="4")
        v-text-field(v-model="zipCode" placeholder="ZIP CODE"
            outlined)
    v-row(justify="center")
      v-col(cols="8")
        v-text-field(placeholder="Email Address" :hint="emailNotice" persistent-hint
            :error="email.length && !isValidEmail()" v-model="email"
            outlined)
    v-row(justify="center")
      v-col(cols="5")
        v-dialog(v-model="dialog" persistent)
          template(v-slot:activator="{ on }")
            v-btn(:disabled="!isValidEmail()" v-on="on" x-large block class="mt-3 deep-orange white--text")
              h2 Continue
          v-card
            v-row(class="mb-3 mt-3" justify="center")
              v-col(cols="8") {{ fullName }}
              v-col(cols="8") {{ streetAddress }}
              v-col(cols="8") {{ aptNumber }}
              v-col(cols="8") {{ cityState }}
              v-col(cols="8") {{ zipCode }}
              v-col(cols="8") {{ email }}
              v-col(cols="8")
                v-card-actions
                  v-btn(@click="dialog=false") OK
    v-row(justify="center")
      v-btn(@click="backToProductList()" text class="mt-2 mb-5 blue--text")
        h3 EDIT ORDER
</template>

<script>
import validator from "validator";
export default {
  name: "CheckoutPage",
  data() {
    return {
      fullName: "",
      streetAddress: "",
      aptNumber: "",
      cityState: "",
      email: "",
      emailNotice: `We will only send you information regarding your order \
        and KeyMe services and promotions. \
        We will never share your information with a third party.`,
      emailValid: false,
      dialog: false
    };
  },
  methods: {
    isValidEmail: function() {
      return validator.isEmail(this.email);
    },
    backToProductList: function() {
      this.$router.replace({
        name: "ProductListPage"
      });
    }
  }
};
</script>

<style lang="scss"></style>
