import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  CourseList:  {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    fontSize: 18,
  },
  
  CourseList_thead: {
    backgroundColor: '#f2f2f2',
  },
  
})


export default function CourseList({ listCourses = [] }) {
  return(
    <table id="CourseList" className={css(styles.CourseList)} >
      <thead className={css(styles.CourseList_thead)}>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
            <CourseListRow isHeader={false} textFirstCell="No course available yet" textSecondCell="" />
          ) : (
            listCourses.map(course => (
              <CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} />
          ))
        )}
      </tbody>
    </table>
  )
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}