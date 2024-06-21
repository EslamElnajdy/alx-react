import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({

	styleRow: { 
		backgroundColor: '#f5f5f5ab' 
	},
	styleHeaderRow: {
		backgroundColor: '#deb5b545'
	},

	CourseList_th: {
		border: '1px solid #ddd',
		padding: 8,
	},

	CourseList_td: {
		border: '1px solid #ddd',
		padding: 8,
	},
	
	CourseList_tbody_tr_even: {
		backgroundColor: '#f9f9f9',
	},
	
	tr_th_colspan_2: {
		textAlign: 'center',
	},

	rowChecked: {
		backgroundColor: '#e6e4e4',
	}

})

export default function CourseListRow({isHeader = false, textFirstCell, textSecondCell = null}) {

	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

	let myElement;
	if (isHeader === true) {
		if (textSecondCell === null) {
			myElement = <th className={`${css(styles.tr_th_colspan_2)} ${css(styles.CourseList_th)}`} colSpan="2">{textFirstCell}</th>;
		} else {
			myElement = (
				<>
					<th className={css(styles.CourseList_th)}>{textFirstCell}</th>
					<th className={css(styles.CourseList_th)}>{textSecondCell}</th>
				</>
			);
		}
	} else {
		myElement = (
			<>
				<td className={css(styles.CourseList_td)}>
					<input type='checkbox' checked={isChecked} onChange={handleCheckboxChange}/>
					{textFirstCell}
					</td>
				<td className={css(styles.CourseList_td)}>{textSecondCell}</td>
			</>
		);
	}

	let stylesBackground;

	if (isHeader) {
		stylesBackground = css(styles.styleHeaderRow);
	} else {
		stylesBackground = isChecked ? css(styles.rowChecked) : css(styles.styleRow);
	}
	return (
		<tr className={stylesBackground}>{myElement}</tr>
	);
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}