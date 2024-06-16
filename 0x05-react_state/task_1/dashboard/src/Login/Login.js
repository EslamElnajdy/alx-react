import React, { Component } from 'react';
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



class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    }
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true})
  }

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.email !== prevState.email || this.state.password !== prevState.password) {
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({ enableSubmit: true });
      } else {
        if (this.state.enableSubmit !== false) {
          this.setState({ enableSubmit: false });
        }
      }
    }
  }

  render() {
    return (
        <>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}> 
            <label className={css(styles.label)} htmlFor='email'>Email: </label>
            <input className={css(styles.input)} type='email' name='email' id='email' value={this.state.email} onChange={this.handleChangeEmail}/>
            <label className={css(styles.label)} htmlFor='password'>Password: </label>
            <input className={css(styles.label)} type='password' name='password' id='password' value={this.state.password} onChange={this.handleChangePassword}/>
            <input type='submit' value='Ok' className={css(styles.button)} disabled={!this.state.enableSubmit} />
          </form>
          
        </>
    );
  }
}

export default Login;