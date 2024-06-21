import * as notificationsData from '../notifications.json';
import { normalize, schema } from 'normalizr';


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


export { normalizedData };


export function getAllNotificationsByUser(userId) {
  return normalizedData.result
    .map(id => normalizedData.entities.notifications[id])
    .filter(notification => notification.author === userId)
    .map(notification => normalizedData.entities.messages[notification.context]);
}
