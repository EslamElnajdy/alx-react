import React from "react";
import { shallow } from "enzyme";
import Login from './Login';

describe("test the login component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBeTruthy();
  })

  it("renders two input and two label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('label').length).toBe(2)
  })
})