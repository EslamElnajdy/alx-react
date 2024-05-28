import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png' 
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
    <div className='Notifications'>
      <button
        style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "-2px", top: "3px", cursor: "pointer" }}
        aria-label="Close"
        onClick={console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="closeIcon" width="20px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" html="<strong>Urgent requirement</strong>" />
        <NotificationItem type="default" value="New resume available" />
      </ul>
    </div>
  );
};
