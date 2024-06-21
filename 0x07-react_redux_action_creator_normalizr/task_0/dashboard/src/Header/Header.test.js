import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

// Suppress style injection during tests
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("test the header component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBeTruthy();
  })

  it("renders img and h1 tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1)
  });

  it("renders without logoutSection with default context value", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('renders logoutSection with user-defined context value', () => {
    const user = {
      email: 'test@example.com',
      isLoggedIn: true,
    };

    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
    expect(wrapper.text()).toContain(`Welcome ${user.email} (logout)`);
  });

  it('calls logOut function when logout link is clicked', () => {
    const user = {
      email: 'test@example.com',
      isLoggedIn: true,
    };
    const logOutSpy = jest.fn();

    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find('.logoutLink').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });

})
