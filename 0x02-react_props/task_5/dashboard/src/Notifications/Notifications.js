import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png' 
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({displayDrawer = false, listNotifications = []}) {
  
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
            {
              listNotifications.length == 0 ? (
                <NotificationItem type="default" value="No new notification for now"/>
              ) : (
                listNotifications.map(notification => {
                  return <NotificationItem key={notification.id} {...notification}/>
                })
              )
            }
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
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};