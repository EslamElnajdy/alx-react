import React from 'react';
import './CourseList.css';
import PropTypes from 'prop-types';

const rowStyle = {
  backgroundColor: '#f5f5f5ab'
}

const headerStyle = {
  backgroundColor: '#deb5b545'
}
export default function CourseListRow({isHeader = false, textFirstCell, textSecondCell = null}) {
  
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={headerStyle}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={headerStyle}>
          <th >{textFirstCell}</th>
          <th >{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={rowStyle}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}