import { mount, shallowMount } from "@vue/test-utils";
import localVue from "../localVue";

import InputSearch from "@/components/InputSearch.vue";

describe("InputSearch.vue", () => {
  let propsData;

  beforeEach(() => {
    propsData = {
      value: "harry",
      resultCount: 10
    };
  });

  it("render input", () => {
    const wrapper = shallowMount(InputSearch, { localVue, propsData });
    expect(wrapper.find({ name: "elInput" }).exists()).toBe(true);
  });

  it("render result", () => {
    const wrapper = shallowMount(InputSearch, { localVue, propsData });
    expect(wrapper.find("#id-search-result-count").exists()).toBe(true);
  });

  it("render button Clear-Search", () => {
    const wrapper = shallowMount(InputSearch, { localVue, propsData });
    expect(wrapper.find("#id-button-clear-search").exists()).toBe(true);
  });

  it("hide result on value is empty", () => {
    propsData = {
      value: "",
      resultCount: 0
    };
    const wrapper = shallowMount(InputSearch, { localVue, propsData });
    expect(wrapper.find("#id-search-result-count").exists()).toBe(false);
  });

  it("hide button Clear-Search when value is empty", () => {
    propsData = {
      value: "",
      resultCount: 0
    };
    const wrapper = shallowMount(InputSearch, { localVue, propsData });
    expect(wrapper.find("#id-button-clear-search").exists()).toBe(false);
  });

  it('emit event "input" when input is changed', () => {
    const wrapper = mount(InputSearch, { localVue, propsData });
    const button = wrapper.find({ name: "elInput" });
    button.vm.$emit("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });

  it('emit event "input" when button Clear-Search is clicked', () => {
    const wrapper = mount(InputSearch, { localVue, propsData });
    const button = wrapper.find("#id-button-clear-search");
    button.trigger("click");
    expect(wrapper.emitted("input")).toBeTruthy();
  });
});
