import { mount, shallowMount } from "@vue/test-utils";
import localVue from "../localVue";
import price from "@/filters/price";

import ProcessOrderClearing from "@/components/ProcessOrderClearing.vue";

describe("ProcessOrderClearing.vue", () => {
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
    const wrapper = shallowMount(ProcessOrderClearing, { localVue, propsData });
    const inputMoney = wrapper.find(".id-input-money");
    expect(inputMoney.exists()).toBe(true);
    expect(inputMoney.vm.value).toBe(price(propsData.money));
  });

  it("render input change", () => {
    const wrapper = shallowMount(ProcessOrderClearing, { localVue, propsData });
    const resultChange = propsData.money - propsData.summary.total;
    const inputMoney = wrapper.find(".id-input-change");
    expect(inputMoney.exists()).toBe(true);
    expect(inputMoney.vm.value).toBe(price(resultChange));
  });

  it("render button cancel", () => {
    const wrapper = shallowMount(ProcessOrderClearing, { localVue, propsData });
    expect(wrapper.find(".id-button-cancel").exists()).toBe(true);
  });

  it("render button submit", () => {
    const wrapper = shallowMount(ProcessOrderClearing, { localVue, propsData });
    expect(wrapper.find(".id-button-submit").exists()).toBe(true);
  });

  it('emit event "cancel" when button Cancel is clicked', () => {
    const wrapper = mount(ProcessOrderClearing, { localVue, propsData });
    const button = wrapper.find(".id-button-cancel");
    button.trigger("click");
    expect(wrapper.emitted("cancel")).toBeTruthy();
  });

  it('emit event "submit" when button Submit is clicked', () => {
    const wrapper = mount(ProcessOrderClearing, { localVue, propsData });
    const button = wrapper.find(".id-button-submit");
    button.trigger("click");
    expect(wrapper.emitted("submit")).toBeTruthy();
  });
});
