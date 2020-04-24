import { mount, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import localVue from "../localVue";
import price from "@/filters/price";

import CartItem from "@/components/CartItem.vue";

describe("CartItem.vue", () => {
  let propsData;
  let actions;
  let store;

  beforeEach(() => {
    propsData = {
      data: {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
        price: "350",
        title: "Harry Potter and the Philosopher's Stone (I)",
        id: "9781408855652",
        _qty: 1,
        _total: 350
      }
    };
    actions = {
      setSelectProduct: jest.fn(),
      setQty: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
  });

  it("render image", () => {
    const wrapper = shallowMount(CartItem, { store, localVue, propsData });
    expect(wrapper.find({ name: "elImage" }).exists()).toBe(true);
  });

  it("render code #xxxxxxxxxxxxx", () => {
    const wrapper = shallowMount(CartItem, { store, localVue, propsData });
    const productCode = wrapper.find(".id-product-code");
    expect(productCode.exists()).toBe(true);
    expect(productCode.text()).toBe("#9781408855652");
  });

  it("render name", () => {
    const wrapper = shallowMount(CartItem, { store, localVue, propsData });
    const productName = wrapper.find(".id-product-name");
    expect(productName.exists()).toBe(true);
    expect(productName.text()).toBe(
      "Harry Potter and the Philosopher's Stone (I)"
    );
  });

  it("render price", () => {
    const wrapper = shallowMount(CartItem, { store, localVue, propsData });
    const productPrice = wrapper.find(".id-product-price");
    expect(productPrice.exists()).toBe(true);
    expect(productPrice.text()).toBe(price(350));
  });

  it("render total", () => {
    const wrapper = shallowMount(CartItem, { store, localVue, propsData });
    const productTotal = wrapper.find(".id-product-total");
    expect(productTotal.exists()).toBe(true);
    expect(productTotal.text()).toBe(price(350));
  });

  it("render input qty", () => {
    const wrapper = shallowMount(CartItem, { store, localVue, propsData });
    expect(wrapper.find({ name: "InputQty" }).exists()).toBe(true);
  });

  it("render button close", () => {
    const wrapper = shallowMount(CartItem, { store, localVue, propsData });
    expect(wrapper.find(".id-button-close").exists()).toBe(true);
  });

  it('call store action "setSelectProduct" when button Close is clicked', () => {
    const wrapper = mount(CartItem, { store, localVue, propsData });
    const button = wrapper.find(".id-button-close");
    button.trigger("click");
    expect(actions.setSelectProduct).toHaveBeenCalled();
  });

  it('call store action "setQty" when InputQty is changed', () => {
    const wrapper = shallowMount(CartItem, { store, localVue, propsData });
    const input = wrapper.find({ name: "InputQty" });
    input.vm.$emit("input", 1);
    expect(actions.setQty).toHaveBeenCalled();
  });
});
