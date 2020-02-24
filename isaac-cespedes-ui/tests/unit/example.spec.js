import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import ProductListPage from "@/components/ProductListPage.vue";

describe("ProductListPage.vue", () => {
  it("renders Add or Scan title", () => {
    const msg = "Add or Scan Your Free Key";
    const wrapper = shallowMount(ProductListPage, {});
    expect(wrapper.text()).to.include(msg);
  });
});
