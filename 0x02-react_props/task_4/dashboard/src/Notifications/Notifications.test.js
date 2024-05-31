import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications displayDrawer={true} />);

    expect(notification.find(NotificationItem)).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications displayDrawer={true} />);

    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });

  it("renders the correct html for the first NotificationItem element", () => {
    const notification = shallow(<Notifications displayDrawer={true} />);
    const firstNotification = notification.find(NotificationItem).first();
    expect(firstNotification.prop('type')).toBe('default');
    expect(firstNotification.prop('value')).toBe('New course available');
  });

  it("renders with menuItem and without Notifications", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".menuItem").length).toBe(1);
    expect(wrapper.find(".Notifications").length).toBe(0);
  })

  it("renders with menuItem and Notifications", () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find(".menuItem").length).toBe(1);
    expect(wrapper.find(".Notifications").length).toBe(1);
  })
});