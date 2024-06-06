import React, { PureComponent } from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

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
    type: "default"
  }

  render () {
    const { type, value, html, markAsRead, id} = this.props;
    return (
      <li data-notification-type={type} onClick={() => markAsRead(id)}>
        {html ? <span dangerouslySetInnerHTML={html}/> : value}
      </li>
    );
  }
}

export default NotificationItem;