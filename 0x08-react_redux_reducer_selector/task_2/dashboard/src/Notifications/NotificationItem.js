import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite'; 


// Define styles using Aphrodite
const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
    '@media screen and (max-width: 900px)': {
			fontSize: '20px',
      padding: '10px 8px',
      borderBottom: '1px solid black',
      listStyle: 'none'
    }
  },
  urgentItem: {
    color: 'red',
    '@media screen and (max-width: 900px)': {
			fontSize: '20px',
      padding: '10px 8px',
      borderBottom: '1px solid black',
      listStyle: 'none'
    }
  },
});

class NotificationItem extends PureComponent {

  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
  }
  
  static defaultProps = {
    type: "default",
    id: 0,
    markAsRead: () => {}
  }

  render () {
    const { type, value, html, markAsRead, id} = this.props;
    const itemClass = type === 'urgent' ? css(styles.urgentItem) : css(styles.defaultItem); 
    return (
      <li className={itemClass} data-notification-type={type} onClick={() => markAsRead(id)}>
        {html ? <span dangerouslySetInnerHTML={html}/> : value}
      </li>
    );
  }
}

export default NotificationItem;