import React from "react";
import { shallow } from 'enzyme';
import BodySection from "./BodySection";

describe("test the BodySection", () => {
  it("", () => {
    const wrapper = shallow(
    <BodySection title="test title">
      <p>test children node</p>
    </BodySection>);
    expect(wrapper.find("h2").text()).toBe("test title");
    expect(wrapper.find("p").text()).toBe("test children node")
  })
})