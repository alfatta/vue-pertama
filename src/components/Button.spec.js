import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button", () => {
  it("renders notif count", () => {
    const wrapper = mount(Button, {
      props: {
        notif: 20,
      },
    });
    expect(wrapper.text()).toContain("20");
  });

  it("render its slot", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Haloo",
      },
    });
    expect(wrapper.text()).toContain("Haloo");
  });
});
