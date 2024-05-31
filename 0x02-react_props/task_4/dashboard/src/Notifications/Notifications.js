import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png' 
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications({displayDrawer = false}) {
  
  if (displayDrawer) {
    return (
      <>
        <div className='menuItem'>
          Your notifications
        </div>
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
            <NotificationItem type="urgent" html={{__html: "<strong>Urgent requirement</strong>"}} />
            <NotificationItem type="default" value="New resume available" />
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <div className='menuItem'>
        Your notifications
      </div>
    )
  }
  
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
}