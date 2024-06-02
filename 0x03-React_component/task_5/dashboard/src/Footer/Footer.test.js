import React from "react";
import { shallow } from "enzyme";
import Footer from './Footer';

describe("test the footer component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});