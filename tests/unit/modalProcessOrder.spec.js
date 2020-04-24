import { shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import localVue from "../localVue";
import price from "@/filters/price";
import { ORDER_STATUS } from "@/store/constants";

import ModalProcessOrder from "@/components/ModalProcessOrder.vue";

describe("ModalProcessOrder.vue", () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      setProcessOrder: jest.fn()
    };
    getters = {
      order: () => ({
        summary: {
          subtotal: 0,
          discount: 0,
          total: 350
        },
        cartProducts: [],
        status: "",
        money: 0
      })
    };
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it("render step", () => {
    const wrapper = shallowMount(ModalProcessOrder, { store, localVue });
    expect(wrapper.find({ name: "elSteps" }).exists()).toBe(true);
  });

  it("render price total", () => {
    const wrapper = shallowMount(ModalProcessOrder, { store, localVue });
    const totalPrice = wrapper.find("#id-total-price");
    expect(totalPrice.exists()).toBe(true);
    expect(totalPrice.text()).toBe(price(350));
  });

  it("render ProcessOrderPayment on step payment", () => {
    getters = {
      order: () => ({
        summary: {
          subtotal: 0,
          discount: 0,
          total: 0
        },
        cartProducts: [],
        status: ORDER_STATUS.PAYMENT,
        money: 0
      })
    };
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(ModalProcessOrder, { store, localVue });
    expect(wrapper.find({ name: "ProcessOrderPayment" }).exists()).toBe(true);
  });

  it("render ProcessOrderClearing on step clearing", () => {
    getters = {
      order: () => ({
        summary: {
          subtotal: 0,
          discount: 0,
          total: 0
        },
        cartProducts: [],
        status: ORDER_STATUS.CLEARING,
        money: 0
      })
    };
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(ModalProcessOrder, { store, localVue });
    expect(wrapper.find({ name: "ProcessOrderClearing" }).exists()).toBe(true);
  });

  it("render SuccessCheckmark on step success", () => {
    getters = {
      order: () => ({
        summary: {
          subtotal: 0,
          discount: 0,
          total: 0
        },
        cartProducts: [],
        status: ORDER_STATUS.SUCCESS,
        money: 0
      })
    };
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(ModalProcessOrder, { store, localVue });
    expect(wrapper.find({ name: "SuccessCheckmark" }).exists()).toBe(true);
  });

  it('call store action "setProcessOrder" when ProcessOrderPayment emit event "submit"', () => {
    getters = {
      order: () => ({
        summary: {
          subtotal: 0,
          discount: 0,
          total: 0
        },
        cartProducts: [],
        status: ORDER_STATUS.PAYMENT,
        money: 0
      })
    };
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(ModalProcessOrder, { store, localVue });
    wrapper
      .find({ name: "ProcessOrderPayment" })
      .vm.$emit("submit", { money: 0 });
    expect(actions.setProcessOrder).toHaveBeenCalled();
  });

  it('call store action "setProcessOrder" when ProcessOrderPayment emit event "cancel"', () => {
    getters = {
      order: () => ({
        summary: {
          subtotal: 0,
          discount: 0,
          total: 0
        },
        cartProducts: [],
        status: ORDER_STATUS.PAYMENT,
        money: 0
      })
    };
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(ModalProcessOrder, { store, localVue });
    wrapper.find({ name: "ProcessOrderPayment" }).vm.$emit("cancel");
    expect(actions.setProcessOrder).toHaveBeenCalled();
  });

  it('call store action "setProcessOrder" when ProcessOrderClearing emit event "submit"', () => {
    getters = {
      order: () => ({
        summary: {
          subtotal: 0,
          discount: 0,
          total: 0
        },
        cartProducts: [],
        status: ORDER_STATUS.CLEARING,
        money: 0
      })
    };
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(ModalProcessOrder, { store, localVue });
    wrapper.find({ name: "ProcessOrderClearing" }).vm.$emit("submit");
    expect(actions.setProcessOrder).toHaveBeenCalled();
  });

  it('call store action "setProcessOrder" when ProcessOrderClearing emit event "cancel"', () => {
    getters = {
      order: () => ({
        summary: {
          subtotal: 0,
          discount: 0,
          total: 0
        },
        cartProducts: [],
        status: ORDER_STATUS.CLEARING,
        money: 0
      })
    };
    store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(ModalProcessOrder, { store, localVue });
    wrapper.find({ name: "ProcessOrderClearing" }).vm.$emit("cancel");
    expect(actions.setProcessOrder).toHaveBeenCalled();
  });
});
