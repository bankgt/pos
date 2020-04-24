import { mount, shallowMount } from "@vue/test-utils";
import localVue from "../localVue";

import ProcessOrderPayment from "@/components/ProcessOrderPayment.vue";

describe("ProcessOrderPayment.vue", () => {
  let propsData;

  beforeEach(() => {
    propsData = {
      money: 500,
      summary: {
        subtotal: 350,
        discount: 0,
        total: 350
      }
    };
  });

  it("render input money", () => {
    const wrapper = shallowMount(ProcessOrderPayment, { localVue, propsData });
    const inputMoney = wrapper.find(".id-input-money");
    expect(inputMoney.exists()).toBe(true);
    expect(inputMoney.vm.value).toBe(propsData.money);
  });

  it("render button cancel", () => {
    const wrapper = shallowMount(ProcessOrderPayment, { localVue, propsData });
    expect(wrapper.find(".id-button-cancel").exists()).toBe(true);
  });

  it("render button submit", () => {
    const wrapper = shallowMount(ProcessOrderPayment, { localVue, propsData });
    expect(wrapper.find(".id-button-submit").exists()).toBe(true);
  });

  it('emit event "cancel" when button Cancel is clicked', () => {
    const wrapper = mount(ProcessOrderPayment, { localVue, propsData });
    wrapper.find(".id-button-cancel").trigger("click");
    expect(wrapper.emitted("cancel")).toBeTruthy();
  });

  it('emit event "submit" when button Submit is clicked', () => {
    const wrapper = mount(ProcessOrderPayment, { localVue, propsData });
    wrapper.find(".id-button-submit").trigger("click");
    expect(wrapper.emitted("submit")).toBeTruthy();
  });

  it('not emit event "submit" when money is invalid', () => {
    propsData = {
      money: 100,
      summary: {
        subtotal: 350,
        discount: 0,
        total: 350
      }
    };
    const wrapper = mount(ProcessOrderPayment, { localVue, propsData });
    wrapper.find(".id-button-submit").trigger("click");
    expect(wrapper.emitted("submit")).not.toBeTruthy();
  });
});
