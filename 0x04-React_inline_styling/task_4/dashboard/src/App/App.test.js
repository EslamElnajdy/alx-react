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
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login').length).toBe(0);
    expect(wrapper.find('CourseList').length).toBe(1);
  });
});

describe('When ctrl + h is pressed', () => {
	it('calls logOut function', () => {
		const mocked = jest.fn();
		const wrapper = mount(<App logOut={mocked} />);
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		expect(mocked).toHaveBeenCalledTimes(1);
		wrapper.unmount();
	});

	window.alert = jest.fn();
	it('checks that alert function is called', () => {
		const wrapper = mount(<App />);
		const spy = jest.spyOn(window, 'alert');
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		expect(spy).toHaveBeenCalled();
		spy.mockRestore();
		wrapper.unmount();
	});

	it('checks that the alert is "Logging you out"', () => {
		const wrapper = mount(<App />);
		const spy = jest.spyOn(window, 'alert');
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		expect(spy).toHaveBeenCalledWith('Logging you out');
		jest.restoreAllMocks();
		wrapper.unmount();
	});
	window.alert.mockClear();
});
