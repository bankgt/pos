import { shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import localVue from "../localVue";

import Cashier from "@/views/Cashier.vue";

describe("Cashier.vue", () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      getProducts: jest.fn(),
      syncProcessOrder: jest.fn(),
      setProcessOrder: jest.fn()
    };
    getters = {
      loadingProducts: () => false,
      products: () => []
    };
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it("render Products", () => {
    const wrapper = shallowMount(Cashier, { store, localVue });
    expect(wrapper.find({ name: "Products" }).exists()).toBe(true);
  });

  it("render Cart", () => {
    const wrapper = shallowMount(Cashier, { store, localVue });
    expect(wrapper.find({ name: "Cart" }).exists()).toBe(true);
  });

  it("render ModalProcessOrder", () => {
    const wrapper = shallowMount(Cashier, { store, localVue });
    expect(wrapper.find({ name: "ModalProcessOrder" }).exists()).toBe(true);
  });

  it('call store action "getProducts" when component created', () => {
    shallowMount(Cashier, { store, localVue });
    expect(actions.getProducts).toHaveBeenCalled();
  });

  it('call store action "syncProcessOrder" when component created', () => {
    shallowMount(Cashier, { store, localVue });
    expect(actions.syncProcessOrder).toHaveBeenCalled();
  });

  it('call store action "setProcessOrder" when Cart emit event "processOrder"', () => {
    const wrapper = shallowMount(Cashier, { store, localVue });
    wrapper.find({ name: "Cart" }).vm.$emit("processOrder");
    expect(actions.setProcessOrder).toHaveBeenCalled();
  });
});
