import {FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export const fetchNotificationsSuccess = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data
});

// Bound Action Creators
export const boundMarkAsRead = (dispatch) => bindActionCreators(markAsRead, dispatch);
export const boundSetNotificationFilter = (dispatch) => bindActionCreators(setNotificationFilter, dispatch);