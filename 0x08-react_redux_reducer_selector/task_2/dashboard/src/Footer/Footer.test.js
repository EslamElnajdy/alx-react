import React from "react";
import { shallow, mount } from "enzyme";
import Footer from './Footer';
import AppContext from '../App/AppContext';

describe.only("test the footer component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("contains a copyright text", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it("does not display the contact link when the user is logged out", () => {
    const contextValue = { user: { isLoggedIn: false } };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(0);
  });

  it('displays the contact link when the user is logged in', () => {
    const contextValue = { user: { isLoggedIn: true } };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(1);
  });
});