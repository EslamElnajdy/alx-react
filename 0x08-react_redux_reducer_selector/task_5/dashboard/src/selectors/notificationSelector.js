// src/selectors/notificationSelector.js

import { createSelector } from 'reselect';

// Selector for filter type
export const filterTypeSelected = (state) => state.get('filter');

// Selector for all notifications
export const getNotifications = (state) => state.get('notifications');

// Selector for unread notifications
export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter(notification => !notification.get('isRead'))
);
