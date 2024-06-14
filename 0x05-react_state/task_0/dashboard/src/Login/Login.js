import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  label: {
    display: 'block',
    margin: '10px 0 5px',
  },
  
  input: {
    display: 'block',
    marginBottom: 15,
    padding: 5,
    width: 200,
  },
  
  button: {
    padding: '10px 20px',
    backgroundColor: '#61dafb',
    border: 'none',
    cursor: 'pointer',
    fontSize: 16,
  }
})

function Login() {
  return (
      <>
        <p>Login to access the full dashboard</p>
        <label className={css(styles.label)} htmlFor='email'>Email: </label>
        <input className={css(styles.input)} type='email' name='email' id='email' />
        <label className={css(styles.label)} htmlFor='password'>Password: </label>
        <input className={css(styles.label)} type='password' name='password' id='password' />
        <button className={css(styles.button)}>Ok</button>
      </>
  );
}

export default Login;