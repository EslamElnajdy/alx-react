import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("test the NotificationItem component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("render the correct html", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toBe('test');
  });

  it("renders the correct html with html prop", () => {
    const htmlContent = { __html: "<u>test</u>" };
    const wrapper = shallow(<NotificationItem type="default" html={htmlContent} />);
    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.html()).toContain('<u>test</u>');
  });
})