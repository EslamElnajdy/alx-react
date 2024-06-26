import React, {Component} from "react";
import logo from '../assets/holberton-logo.png';
import {StyleSheet, css} from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '5px solid red',
  },
  
  AppHeader_img: {
    width: 200,
  },

  welcome: {
    fontSize: '1.2rem',
  },
  
  AppHeader_h1: {
    color: 'red',
  },

  logoutLink: {
    cursor: 'pointer',
    color: '#e1484c',
    textDecoration: 'underline',
  }
})

class Header extends Component {

  static contextType = AppContext;

  handleLogout = () => {
    this.context.logOut();
  }
 
  render() {
    const { user } = this.context
    return(
      <div className={css(styles.AppHeader)}>
        <img className={css(styles.AppHeader_img)} src={logo} alt="logo"/>
        <h1 className={css(styles.AppHeader_h1)}>School dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.welcome)}>
           Welcome {user.email} (<span onClick={this.handleLogout} className={css(styles.logoutLink)}>logout</span>)
          </div>
        )}
      </div>
    )
  }
}

export default Header;