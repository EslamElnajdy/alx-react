import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { bindActionCreators } from 'redux';

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password }
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE
  };
}

export function loginRequest(email, password) {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch('/login-success.json');
      if (response.ok) {
        const data = await response.json();
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
}

// Bound Action Creators
export const boundLogin = (dispatch) => bindActionCreators(login, dispatch);
export const boundLogout = (dispatch) => bindActionCreators(logout, dispatch);
export const boundDisplayNotificationDrawer = (dispatch) => bindActionCreators(displayNotificationDrawer, dispatch);
export const boundHideNotificationDrawer = (dispatch) => bindActionCreators(hideNotificationDrawer, dispatch);