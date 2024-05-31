import React from "react";
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe("test the CourseList component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseList />)
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(5);
  })
});
