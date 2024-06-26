// schema/courses.js

import { schema, normalize } from 'normalizr';

// Define the course schema
const course = new schema.Entity('courses');

export const coursesNormalizer = (data) => {
  const normalizedData = normalize(data, [course]);
  return normalizedData.entities.courses;
};
