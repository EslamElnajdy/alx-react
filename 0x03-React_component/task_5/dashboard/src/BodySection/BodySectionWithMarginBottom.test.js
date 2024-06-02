import React from "react";
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("test the BodySectionWithMarginBottom", () => {
  it("", () => {
    const wrapper = shallow(
    <BodySectionWithMarginBottom title="test title">
      <p>test children node</p>
    </BodySectionWithMarginBottom>);
    expect(wrapper.find(BodySection).prop('title')).toBe('test title');
    expect(wrapper.find(BodySection).children().equals(<p>test children node</p>)).toBe(true);
  })
})