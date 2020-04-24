import { shallowMount } from "@vue/test-utils";
import localVue from "../localVue";

import Title from "@/components/Title.vue";

describe("Title.vue", () => {
  it("render title with elBadge", () => {
    const propsData = {
      showBadge: true,
      badge: 1
    };
    const wrapper = shallowMount(Title, { localVue, propsData });
    expect(wrapper.find({ name: "elBadge" }).exists()).toBe(true);
    expect(wrapper.findAll(".id-title-text").length).toBe(1);
  });

  it("render title without elBadge", () => {
    const propsData = {
      showBadge: false,
      badge: 1
    };
    const wrapper = shallowMount(Title, { localVue, propsData });
    expect(wrapper.find({ name: "elBadge" }).exists()).toBe(false);
    expect(wrapper.findAll(".id-title-text").length).toBe(1);
  });
});
