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
    expect(rows).toHaveLength(3);
  });

  it("renders correctly if you pass an empty array or not", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toBe(3);
    expect(wrapper.find(CourseListRow).at(2).prop("textFirstCell")).toBe("No course available yet");
  })

  it("renders correctly if you pass an empty array or not", () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  })
});
