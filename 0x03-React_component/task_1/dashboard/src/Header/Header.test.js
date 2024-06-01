import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';

describe("test the header component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBeTruthy();
  })

  it("renders img and h1 tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1)
  })  
})
