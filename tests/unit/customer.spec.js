import { shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import localVue from "../localVue";
import price from "@/filters/price";

import Customer from "@/views/Customer.vue";

describe("Customer.vue", () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      syncProcessOrder: jest.fn()
    };
    getters = {
      order: () => null
    };
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it("render title", () => {
    const wrapper = shallowMount(Customer, { store, localVue });
    expect(wrapper.find({ name: "Title" }).exists()).toBe(true);
  });

  it("render welcome message", () => {
    const wrapper = shallowMount(Customer, { store, localVue });
    expect(wrapper.find(".id-welcome-message").exists()).toBe(true);
  });

  it("render ModalThankyou", () => {
    const wrapper = shallowMount(Customer, { store, localVue });
    expect(wrapper.find({ name: "ModalThankyou" }).exists()).toBe(true);
  });

  it("render products", () => {
    getters = {
      order: () => ({
        summary: {
          subtotal: 0,
          discount: 0,
          total: 0
        },
        cartProducts: [
          {
            cover:
              "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
            price: "350",
            title: "Harry Potter and the Philosopher's Stone (I)",
            id: "9781408855652",
            _qty: 1,
            _total: 350
          }
        ],
        status: "",
        money: 0
      })
    };
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(Customer, { store, localVue });
    expect(wrapper.find({ name: "elTable" }).exists()).toBe(true);
  });

  it("render summary", () => {
    getters = {
      order: () => ({
        summary: {
          subtotal: 350,
          discount: 0,
          total: 350
        },
        cartProducts: [
          {
            cover:
              "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
            price: "350",
            title: "Harry Potter and the Philosopher's Stone (I)",
            id: "9781408855652",
            _qty: 1,
            _total: 350
          }
        ],
        status: "",
        money: 0
      })
    };
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(Customer, { store, localVue });
    const summarySubtotal = wrapper.find(".id-summary-subtotal");
    const summaryDiscount = wrapper.find(".id-summary-discount");
    const summaryTotal = wrapper.find(".id-summary-total");
    expect(summarySubtotal.exists()).toBe(true);
    expect(summarySubtotal.text()).toBe(price(350));
    expect(summaryDiscount.exists()).toBe(true);
    expect(summaryDiscount.text()).toBe(price(0));
    expect(summaryTotal.exists()).toBe(true);
    expect(summaryTotal.text()).toBe(price(350));
  });
});
