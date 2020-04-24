import { mount, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import localVue from "../localVue";
import price from "@/filters/price";

import Cart from "@/components/Cart.vue";

describe("Cart.vue", () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      clearAllSelectProduct: jest.fn()
    };
    getters = {
      cartProducts: () => [],
      summary: () => ({
        subtotal: 0,
        discount: 0,
        total: 0
      })
    };
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it("render title", () => {
    const wrapper = shallowMount(Cart, { store, localVue });
    expect(wrapper.find({ name: "Title" }).exists()).toBe(true);
  });

  it("render empty cart message", () => {
    const wrapper = shallowMount(Cart, { store, localVue });
    expect(wrapper.find("#id-card-empty").exists()).toBe(true);
    expect(wrapper.find("#id-products").exists()).toBe(false);
  });

  it("render products", () => {
    getters.cartProducts = () => [
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
        price: "350",
        title: "Harry Potter and the Philosopher's Stone (I)",
        id: "9781408855652"
      }
    ];
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(Cart, { store, localVue });
    expect(wrapper.find("#id-card-empty").exists()).toBe(false);
    expect(wrapper.find("#id-products").exists()).toBe(true);
    expect(wrapper.findAll({ name: "CartItem" }).length).toEqual(1);
  });

  it("render summary", () => {
    getters.cartProducts = () => [
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
        price: "350",
        title: "Harry Potter and the Philosopher's Stone (I)",
        id: "9781408855652"
      }
    ];
    getters.summary = () => ({
      subtotal: 350,
      discount: 0,
      total: 350
    });
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(Cart, { store, localVue });
    expect(wrapper.find("#id-summary").exists()).toBe(true);
    expect(wrapper.find("#id-summary-subtotal").text()).toEqual(price(350));
    expect(wrapper.find("#id-summary-discount").text()).toEqual(price(0));
    expect(wrapper.find("#id-summary-total").text()).toEqual(price(350));
  });

  it("render button Clear-All", () => {
    const wrapper = mount(Cart, { store, localVue });
    const button = wrapper.find("#id-button-clear-all");
    expect(button.exists()).toBe(true);
  });

  it("render button Process-Order disabled", () => {
    const wrapper = shallowMount(Cart, { store, localVue });
    const button = wrapper.find("#id-button-process-order");
    expect(button.exists()).toBe(true);
    expect(button.attributes("disabled")).toBe("true");
  });

  it('emit event "processOrder" when button Process-Order is clicked', () => {
    getters.cartProducts = () => [
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
        price: "350",
        title: "Harry Potter and the Philosopher's Stone (I)",
        id: "9781408855652"
      }
    ];
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = mount(Cart, { store, localVue });
    const button = wrapper.find("#id-button-process-order");
    button.trigger("click");
    expect(wrapper.emitted("processOrder")).toBeTruthy();
  });

  it('call store action "clearAllSelectProduct" when button Clear-All is clicked (without confirm dialog)', () => {
    getters.cartProducts = () => [
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
        price: "350",
        title: "Harry Potter and the Philosopher's Stone (I)",
        id: "9781408855652"
      }
    ];
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = mount(Cart, { store, localVue });
    const button = wrapper.find("#id-button-clear-all");
    button.trigger("click");
    expect(actions.clearAllSelectProduct).toHaveBeenCalled();
  });
});
