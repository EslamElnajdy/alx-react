import App from './App';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection during tests
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a div with the notifications', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').length).toBe(1);
  });

  it('renders a div with the header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toBe(1);
  });

  it('renders a div with the login', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login').length).toBe(1);
  });

  it('renders a div with the footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').length).toBe(1);
  });

  it('check that CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList').length).toBe(0);
    expect(wrapper.find('Login').length).toBe(1);
  });

  it('check that login is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login').length).toBe(1);
    expect(wrapper.find('CourseList').length).toBe(0);
  });
});


describe("checks the updates after adding the new functions", () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it("tests the displayDrawer is false by default", () => {
    expect(wrapper.state('displayDrawer')).toBe(false)
  });

  it("sets displayDrawer to true when handlerDisplayDrawer is called", () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  })

  it('sets displayDrawer to false when handleHideDrawer is called', () => {
    wrapper.state.displayDrawer = true
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
})