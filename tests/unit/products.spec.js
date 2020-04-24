import { shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import localVue from "../localVue";

import Products from "@/components/Products.vue";

describe("Products.vue", () => {
  let propsData;
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    propsData = {
      data: [
        {
          cover:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
          price: "350",
          title: "Harry Potter and the Philosopher's Stone (I)",
          id: "9781408855652"
        }
      ]
    };
    actions = {
      setSelectProduct: jest.fn(),
      searchProducts: jest.fn()
    };
    getters = {
      textSearch: () => ""
    };
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it("render InputSearch", () => {
    const wrapper = shallowMount(Products, { store, localVue, propsData });
    expect(wrapper.find({ name: "InputSearch" }).exists()).toBe(true);
  });

  it("render Product", () => {
    const wrapper = shallowMount(Products, { store, localVue, propsData });
    expect(wrapper.findAll({ name: "Product" }).length).toBe(1);
  });

  it('call store action "searchProducts" when button Close is clicked', () => {
    const wrapper = shallowMount(Products, { store, localVue, propsData });
    wrapper.find({ name: "InputSearch" }).vm.$emit("input");
    expect(actions.searchProducts).toHaveBeenCalled();
  });

  it('call store action "setSelectProduct" when button Close is clicked', () => {
    const wrapper = shallowMount(Products, { store, localVue, propsData });
    wrapper.find({ name: "Product" }).vm.$emit("click");
    expect(actions.setSelectProduct).toHaveBeenCalled();
  });
});
