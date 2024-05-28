import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

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
});
