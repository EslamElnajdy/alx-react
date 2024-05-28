import React from 'react';
import './Notifications.css';

export default function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type}>
      {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : value}
    </li>
  );
}
