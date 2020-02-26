<template lang="pug">
  v-container
    //- headers
    v-row
      v-col(class="pb-1 pl-4 deep-orange--text" cols="12")
        h1(class="font-weight-black") Add or Scan Your Free Key
    v-row
      v-col(class="pl-4 cyan--text" cols="12")
        h2(class="pb-0 font-weight-bold cyanUnderline") FREE DELIVERY
    //- keys
    v-row(justify="space-around")
      v-col(v-for="i in range(startIndex, endIndex)" :key="keyCatalog[i].id" cols="4")
        //- image (incl. special case for drill keys)
        v-row(v-if="keyCatalog[i].display_name === 'Drill'"
        class="mb-4" justify="center" style="margin-top: 50px;")
          img(class="keyImage" :src="keyCatalog[i].imageURL")
        v-row(v-else justify="center")
          img(class="keyImage" :src="keyCatalog[i].imageURL")
        //- name and price
        v-row(justify="center")
          p(class="mb-0") {{keyCatalog[i].display_name}}
        v-row(justify="center")
          p(class="grey--text") ${{keyCatalog[i].cost}}
        //- quantity controls
        v-row(v-if="keyCatalog[i].quantity === 0" @click="updateQuantity(i, 1)" justify="center")
          v-btn(large class="deep-orange white--text" text)
            span(class="mr-2") Add to Cart
            v-icon mdi-cart-plus
        v-row(v-else justify="center")
          v-btn(large icon @click="updateQuantity(i, -1)" class="deep-orange--text" text)
            v-icon mdi-minus
          h3(class="ml-8 mr-8 pt-2") {{ keyCatalog[i].quantity }}
          v-btn(large icon @click="updateQuantity(i, 1)" class="deep-orange--text" text)
            v-icon mdi-plus
    //- pagination controls
    v-row(class="mt-7 mb-7" justify="center")
      v-btn(rounded @click="pageChange(-1)" class="grey lighten-1 white--text")
        v-icon mdi-chevron-left
      v-btn(class="mr-2 ml-2" text disabled)
        h3(class="grey--text") {{pageNumber+1}} of {{totalPages}}
      v-btn(rounded @click="pageChange(1)" class="grey lighten-1 white--text")
        v-icon mdi-chevron-right
    //- checkout button
    v-row(class="mt-7 mb-7" justify="end")
      v-btn(x-large @click="goToCheckout()" class="green darken-2 white--text" text)
        span(class="mr-2") Checkout
        v-icon mdi-cart-arrow-right
</template>

<script>
import jsonFile from "../../../data.json";
export default {
  name: "ProductListPage",
  data: () => ({
    keyCatalog: jsonFile,
    startIndex: 0,
    endIndex: 0,
    pageNumber: 0,
    totalPages: 0,
    PAGE_SIZE: 9
  }),
  methods: {
    goToCheckout: function() {
      this.$router.replace({
        name: "CheckoutPage"
      });
    },
    pageChange: function(n) {
      // keep page in bounds
      this.pageNumber = this.pageNumber + n;
      this.pageNumber = Math.max(this.pageNumber, 0);
      this.pageNumber = Math.min(this.pageNumber, this.totalPages - 1);

      // keep page items in bounds
      this.startIndex = Math.max(this.pageNumber * this.PAGE_SIZE, 0);
      this.endIndex = Math.min(
        this.startIndex + this.PAGE_SIZE - 1,
        this.keyCatalog.length - 1
      );
    },
    range: function(a, b) {
      let retVal = [];
      for (let i = a; i <= b; i++) {
        retVal.push(i);
      }
      return retVal;
    },
    updateQuantity: function(i, n) {
      // it must be done this way so that Vue rerenders the list items
      let newKeyItem = this.keyCatalog[i];
      newKeyItem.quantity += n;
      this.keyCatalog.splice(i, 1, newKeyItem);
    }
  },
  beforeMount() {
    this.keyCatalog = this.keyCatalog.map(k => {
      k.quantity = 0;
      return k;
    });
    this.totalPages = Math.ceil(this.keyCatalog.length / this.PAGE_SIZE);
    this.pageChange(0);
  }
};
</script>

<style lang="scss">
.cyanUnderline {
  border-bottom: 3px solid #00bcd4;
}

.keyImage {
  transform: rotate(-45deg);
}
</style>
