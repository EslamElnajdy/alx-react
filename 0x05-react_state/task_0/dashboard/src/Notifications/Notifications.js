import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png' 
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


const opacity = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateY = {
  '0%': {
    transform: "translateY(0)",
  },

  '50%': {
    transform: "translateY(-5px)",
  },

  '75%': {
    transform: "translateY(5px)",
  },

  '100%': {
    transform: "translateY(0)",
  },
};

const styles = StyleSheet.create({
  menuItem: {
   textAlign:'end',
   marginRight: 20,
   marginTop: 20,
   backgroundColor: '#fff8f8',
   ":hover": {
    cursor: 'pointer',
    animationName: [opacity, translateY],
    animationDuration: '1s, 0.5s',
    animationIterationCount: 3
  }
  },

  Notifications: {
    boxSizing: 'border-box',
    position: 'absolute',
    top: 45,
    right: 10,
    minWidth: 400,
    border: '1px dashed red',
    padding: '5px 7px',
    '@media screen and (max-width: 900px)': {
      display: 'block',
			background: 'white',
			fontSize: '20px',
			width: '100vw',
			height: '92vh',
			border: 'none',
			listStyle: 'none',
			padding: 20,
			margin: 0,
			top: 0,
			right: 0,
			left: 0,
    }
  }
})



class Notifications extends Component {


  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleHideDrawer: () => {},
    handleDisplayDrawer: () => {},
  }
  
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    // Only update if the new list of notifications is longer than the current list
    return nextProps.listNotifications.length > this.props.listNotifications.length || nextProps.displayDrawer !== this.props.displayDrawer;
  }


render() {

  const {
    displayDrawer,
    listNotifications,
    handleDisplayDrawer,
    handleHideDrawer,
  } = this.props;

  if (displayDrawer) {
    return (
      <>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        <div className={css(styles.Notifications)}>
          <button
            style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "20px", top: "10px", cursor: "pointer" }}
            aria-label="Close"
            onClick={handleHideDrawer}
          >
            <img src={closeIcon} alt="closeIcon" width="20px"
            onClick={console.log("Close button has been clicked")} />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {
              listNotifications.length == 0 ? (
                <NotificationItem type="default" value="No new notification for now" markAsRead={this.markAsRead}/>
              ) : (
                listNotifications.map(notification => {
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
      <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
        Your notifications
      </div>
    )
  }
}
  
};


export default Notifications;
export { styles, css };