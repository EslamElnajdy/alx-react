import React from 'react';
import './CourseList.css';
import PropTypes from 'prop-types';


export default function CourseListRow({isHeader = false, textFirstCell, textSecondCell = null}) {
  const styleRow = { backgroundColor: '#f5f5f5ab' };
	const styleHeaderRow = { backgroundColor: '#deb5b545' };

	let myElement;
	if (isHeader === true) {
		if (textSecondCell === null) {
			myElement = <th colSpan="2">{textFirstCell}</th>;
		} else {
			myElement = (
				<>
					<th>{textFirstCell}</th>
					<th>{textSecondCell}</th>
				</>
			);
		}
	} else {
		myElement = (
			<>
				<td>{textFirstCell}</td>
				<td>{textSecondCell}</td>
			</>
		);
	}

	let stylesBackground;

	if (isHeader) {
		stylesBackground = styleHeaderRow;
	} else {
		stylesBackground = styleRow;
	}
	return (
		<tr style={stylesBackground}>{myElement}</tr>
	);
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}