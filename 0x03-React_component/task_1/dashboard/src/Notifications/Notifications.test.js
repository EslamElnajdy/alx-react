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

    expect(notification.find(NotificationItem)).toHaveLength(1);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications displayDrawer={true} />);

    expect(notification.find("p").text()).toBe("Here is the list of notifications");
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

  it("render correctly if you pass an empty array or not", () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('NotificationItem').length).toBe(1);
    expect(wrapper.find('NotificationItem').prop('value')).toBe('No new notification for now');
  });

  it('renders correctly with a list of notifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('NotificationItem').length).toBe(3);
  });

  it('displays the correct message when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('NotificationItem').length).toBe(1);
    expect(wrapper.find('NotificationItem').prop('value')).toBe('No new notification for now');
    expect(wrapper.find('NotificationItem').html()).not.toContain('Here is the list of notifications');
  });

});