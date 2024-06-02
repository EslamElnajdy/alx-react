import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png' 
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {


  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: []
  }
  
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

render() {
  if (this.props.displayDrawer) {
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
              this.props.listNotifications.length == 0 ? (
                <NotificationItem type="default" value="No new notification for now" markAsRead={this.markAsRead}/>
              ) : (
                this.props.listNotifications.map(notification => {
                  return <NotificationItem key={notification.id} {...notification} markAsRead={this.markAsRead}/>
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
}
  
};


export default Notifications;