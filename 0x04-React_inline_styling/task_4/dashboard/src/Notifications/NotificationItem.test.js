import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("test the NotificationItem component", () => {
  it("renders without crashing", () => {
    const markAsReadMock = jest.fn();
    const wrapper = shallow(<NotificationItem markAsRead={markAsReadMock} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("render the correct html", () => {
    const markAsReadMock = jest.fn();
    const wrapper = shallow(<NotificationItem type="default" value="test" markAsRead={markAsReadMock} />);
    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toBe('test');
  });

  it("renders the correct html with html prop", () => {
    const markAsReadMock = jest.fn();
    const htmlContent = { __html: "<u>test</u>" };
    const wrapper = shallow(<NotificationItem type="default" html={htmlContent} markAsRead={markAsReadMock} />);
    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('calls markAsRead on click', () => {
    const markAsReadMock = jest.fn();
    const wrapper = shallow(<NotificationItem type="default" value="test" markAsRead={markAsReadMock} id={1}/>);
    wrapper.find('li').simulate('click');
    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
})