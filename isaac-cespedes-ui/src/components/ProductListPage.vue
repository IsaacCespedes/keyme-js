<template lang="pug">
  v-container
    v-row
      v-col(class="pb-1 pl-4 deep-orange--text" cols="12")
        h1(class="font-weight-black") Add or Scan Your Free Key
    v-row
      v-col(class="pl-4 cyan--text" cols="12")
        h2(class="pb-0 font-weight-bold cyanUnderline") FREE DELIVERY
    v-row(class="keysPage")
      v-col(cols="4")
        v-row(justify="center")
          v-col
          v-col
            img(class="keyImage" src="https://s3.amazonaws.com/key_style_images/staging/kw1/normal/california_republic/retina.png?1540418398")
            p(class="mb-0") California Republic
            p(class="grey--text") $7.99
            v-btn(large class="deep-orange white--text" href="#" text)
              span(class="mr-2") Add to Cart
              v-icon mdi-cart-plus
          v-col
      v-col(cols="4")
        v-row(justify="center")
          v-col
          v-col
            img(class="keyImage" src="https://s3.amazonaws.com/key_style_images/staging/kw1/normal/california_republic/retina.png?1540418398")
            p(class="mb-0") California Republic
            p(class="grey--text") $7.99
            v-btn(large class="deep-orange white--text" href="#" text)
              span(class="mr-2") Add to Cart
              v-icon mdi-cart-plus
          v-col
      v-col(cols="4")
        v-row(justify="center")
          v-col
          v-col
            img(class="keyImage" src="https://s3.amazonaws.com/key_style_images/staging/kw1/normal/california_republic/retina.png?1540418398")
            p(class="mb-0") California Republic
            p(class="grey--text") $7.99
            v-btn(large class="deep-orange white--text" href="#" text)
              span(class="mr-2") Add to Cart
              v-icon mdi-cart-plus
          v-col
</template>

<script>
export default {
  name: "ProductListPage",
  data: () => ({})
};
</script>

<style lang="scss">
.cyanUnderline {
  border-bottom: 3px solid #00bcd4;
}

.keysPage {
  padding-left: 12px;
}

.keyImage {
  transform: rotate(-45deg);
  // background-image: radial-gradient(#e0e0e0, #f5f5f5, rgba(0, 0, 0, 0));
}
</style>
