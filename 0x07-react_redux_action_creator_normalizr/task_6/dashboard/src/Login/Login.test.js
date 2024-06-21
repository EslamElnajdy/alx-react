import React from "react";
import { shallow } from "enzyme";
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection during tests
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("test the login component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBeTruthy();
  })

  it("renders two input and two label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(3);
    expect(wrapper.find('label').length).toBe(2)
  })

  it("submit button is disabled by default", () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
  });

  it("submit button is enabled when both inputss have values", () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate('change', {target: {value: 'test@example.com'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {value: 'password'}});
    expect(wrapper.find('input[type="submit"]').props().disabled).toBe(false);

  });

  it('submit button is disabled when one of the inputs is empty', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate('change', { target: { value: '' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);

    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: '' } });
    expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
  });
})