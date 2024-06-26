import React from "react";
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe("test the courseListRow", () => {

  describe("When the isHeader is true", () => {
    it("renders one cell with colspan = 2 when textSecondCell doesn't exist", () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Available courcses"/>);
      const element = wrapper.find('th');
      expect(element).toHaveLength(1);
      expect(element.prop('colSpan')).toEqual("2");
      expect(element.text()).toEqual('Available courcses');
    });

    it("renders two cells when textSecondCell is present", () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>);
      const element = wrapper.find('th');
      expect(element).toHaveLength(2);
      expect(element.at(0).text()).toEqual('Course name');
      expect(element.at(1).text()).toEqual('Credit');
    });
  });

  describe("when the isHeader is false", () => {
    it("renders two td elements within a tr element", () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60"/>);
      const elements = wrapper.find('td');
      expect(elements).toHaveLength(2);
      expect(elements.at(0).text()).toEqual('ES6');
      expect(elements.at(1).text()).toEqual('60');
    });
  });
});
