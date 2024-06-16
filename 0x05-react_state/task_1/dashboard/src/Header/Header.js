import React from "react";
import logo from '../assets/holberton-logo.png';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '5px solid red',
  },
  
  AppHeader_img: {
    width: 200,
  },
  
  AppHeader_h1: {
    color: 'red',
  }
})

function Header() {
  return(
    <div className={css(styles.AppHeader)}>
      <img className={css(styles.AppHeader_img)} src={logo} alt="logo"/>
      <h1 className={css(styles.AppHeader_h1)}>School dashboard</h1>
    </div>
  )
}

export default Header;