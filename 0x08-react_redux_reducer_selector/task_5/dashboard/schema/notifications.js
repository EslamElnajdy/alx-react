// schema/notifications.js

import { normalize, schema } from 'normalizr';
import * as notificationsData from '../notifications.json';

// Define user entity
const user = new schema.Entity('users');

// Define message entity
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize data
const normalizedData = normalize(notificationsData.default, [notification]);

// Function to normalize incoming data
export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]).entities.notifications;
};

export { normalizedData };
