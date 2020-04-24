import { mount, shallowMount } from "@vue/test-utils";
import localVue from "../localVue";
import price from "@/filters/price";

import Product from "@/components/Product.vue";

describe("Product.vue", () => {
  let propsData;

  beforeEach(() => {
    propsData = {
      data: {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
        price: "350",
        title: "Harry Potter and the Philosopher's Stone (I)",
        id: "9781408855652"
      }
    };
  });

  it("render image", () => {
    const wrapper = shallowMount(Product, { localVue, propsData });
    expect(wrapper.find({ name: "elImage" }).exists()).toBe(true);
  });

  it("render code #xxxxxxxxxxxxx", () => {
    const wrapper = shallowMount(Product, { localVue, propsData });
    const productCode = wrapper.find(".id-product-code");
    expect(productCode.exists()).toBe(true);
    expect(productCode.text()).toBe("#9781408855652");
  });

  it("render name", () => {
    const wrapper = shallowMount(Product, { localVue, propsData });
    const productName = wrapper.find(".id-product-name");
    expect(productName.exists()).toBe(true);
    expect(productName.text()).toBe(
      "Harry Potter and the Philosopher's Stone (I)"
    );
  });

  it("render price", () => {
    const wrapper = shallowMount(Product, { localVue, propsData });
    const productPrice = wrapper.find(".id-product-price");
    expect(productPrice.exists()).toBe(true);
    expect(productPrice.text()).toBe(price(350));
  });

  it('emit event "click" when product clicked', () => {
    const wrapper = mount(Product, { localVue, propsData });
    wrapper.find(".id-product").trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
