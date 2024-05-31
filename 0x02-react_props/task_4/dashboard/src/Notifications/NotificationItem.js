import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

export default function NotificationItem({ type = "default", html, value }) {
  return (
    <li data-notification-type={type}>
      {html ? <span dangerouslySetInnerHTML={html}/> : value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
}